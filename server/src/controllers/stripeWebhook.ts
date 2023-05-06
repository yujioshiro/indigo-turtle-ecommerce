import { Response, Request } from 'express';
import Stripe from 'stripe';

import config from '@/config/envConfig';
import prisma from '@/prisma';
import { execSideEffect } from '@/utils/execSideEffect';
import { execSideEffectWithError } from '@/utils/execSideEffectWithError';
import { setPromiseTimeout } from '@/utils/setPromiseTimeout';
import { Prisma, PrismaClient, Product } from '@prisma/client';

const endpointSecret: string = config.STRIPE_WEBHOOK_SECRET ?? '';

type TransactionInstance = Omit<
  PrismaClient<
    Prisma.PrismaClientOptions,
    never,
    Prisma.RejectOnNotFound | Prisma.RejectPerOperation | undefined
  >,
  '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'
>;

type UnhandledError = never;

interface Item {
  name: string;
  quantity: number;
  total: number;
}

interface SuccessObject {
  id: string;
  amount_total: number;
  payment_status: string;
  metadata: {
    userId: number;
  };
}

const handleDBTransactions = async (
  lineItems: Item[],
  successObject: SuccessObject
): Promise<void | UnhandledError> => {
  await prisma.$transaction(async (tx: TransactionInstance) => {
    const products = await Promise.all(
      lineItems.map(
        (item): Promise<Product | { error: any }> =>
          execSideEffectWithError(tx.product.update, {
            where: {
              name: item.name,
            },
            data: {
              quantity: { decrement: item.quantity },
            },
          }) as Promise<Product | { error: any }>
      )
    );

    products.forEach((prod, i) => {
      if ('error' in prod) {
        throw {
          error: 'A product purchased was not found in the database',
          data: prod,
        };
      }
    });

    const order = await execSideEffectWithError(tx.order.create, {
      data: {
        userId: Number(successObject.metadata.userId),
        total: successObject.amount_total,
      },
    });

    if (order === null || order === undefined)
      throw new Error(`Unexpected ${order} from order create request to db`);

    if (typeof order === 'object' && 'error' in order) throw order;

    const orderItems = await execSideEffect(tx.orderItem.createMany, {
      data: lineItems.map((item, i) => {
        const prod = products[i] as Product;
        return {
          orderId: order.id,
          prodId: prod.id,
          quantity: item.quantity,
          total: item.total,
        };
      }),
    });

    if (orderItems === null) throw new Error('Failed to Add Order Items');
  });
};

const updateDB = async (
  successObject: SuccessObject,
  lineItems: Item[],
  stripe: Stripe
): Promise<boolean> => {
  // ATOMIC TRANSACTION: https://www.prisma.io/docs/guides/performance-and-optimization/prisma-client-transactions-guide
  const result = await execSideEffectWithError(
    handleDBTransactions,
    lineItems,
    successObject
  );

  if (result !== undefined) {
    console.error(
      'Something went wrong with one of the interactions in the DB with stripeWebhook'
    );
    console.error(result);

    const session = await stripe.checkout.sessions.retrieve(successObject.id);
    const paymentIntentId = session.payment_intent;

    const refund = await execSideEffect(stripe.refunds.create, {
      payment_intent: paymentIntentId,
    });

    if (refund === null) {
      console.error(
        'Unknown error when trying to reverse checkout payment.' +
          ` Payment id: ${paymentIntentId}`
      );
    }

    const cancelledSession = execSideEffect(
      stripe.checkout.sessions.expire,
      successObject.id
    );

    if (cancelledSession === null)
      console.error('Unknown error when trying to cancel checkout session');

    return true;
  }

  return false;
};

export const stripeWebhook = async (req: Request, res: Response) => {
  if (config.STRIPE_TEST_KEY === undefined)
    return res.status(500).json({ errors: 'Stripe key not found.' });

  const stripe = new Stripe(config.STRIPE_TEST_KEY, {
    apiVersion: '2022-11-15',
  });

  const sig = req.headers['stripe-signature'];
  let event;

  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      sig as string | string[],
      endpointSecret
    );
  } catch (err) {
    console.error(err);
    return res.status(400).send(`Webhook Error: ${err}`);
  }

  if (event.type !== 'checkout.session.completed') {
    return res.status(202).send(`Unknown event type: ${event.type}`);
  }

  const successObject = event.data.object as SuccessObject; // Type not defined for object
  if (successObject.payment_status !== 'paid') return res.status(202).send();

  const result = await stripe.checkout.sessions.listLineItems(successObject.id);
  const wasUpdated = await updateDB(
    successObject,
    result.data.map((item) => ({
      name: item.description,
      quantity: item.quantity ?? 0,
      total: item.amount_total,
    })),
    stripe
  );

  if (wasUpdated) return res.status(201).send();
  else return res.status(505).send();
};

/*
Important Information:
stripe trigger checkout.session.completed --add "checkout_session:metadata.userId=3"
https://github.com/stripe/stripe-cli/issues/864
*/

// orderItem: {
//   create: [
//     ...lineItems.map((item) => ({
//       orderId: 100, // TODO: replace orderId and prodId
//       prodId: 100,
//       quantity: item.quantity,
//       total: item.total,
//     })),
//   ],
// },

/*

stripe trigger checkout.session.completed --add checkout_session:metadata.userId=2

*/
