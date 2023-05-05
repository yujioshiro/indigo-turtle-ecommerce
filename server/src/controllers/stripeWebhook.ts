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

interface Item {
  name: string;
  quantity: number;
  total: number;
}

interface SuccessObject {
  id: string;
  amount_total: number;
  metadata: {
    userId: number;
  };
}

const handleDBTransactions = async (
  lineItems: Item[],
  successObject: SuccessObject
): Promise<void | never> => {
  await prisma.$transaction(async (tx: TransactionInstance) => {
    const products = await Promise.all(
      lineItems.map(
        (item): Promise<Product | null> =>
          execSideEffect(tx.product.update, {
            where: {
              name: item.name,
            },
            data: {
              quantity: { decrement: item.quantity },
            },
          }) as Promise<Product | null>
      )
    );

    if (products.includes(null) === true)
      throw new Error('A product purchased was not found in the database.');

    const order = await execSideEffectWithError(tx.order.create, {
      data: {
        userId: successObject.metadata.userId,
        total: successObject.amount_total,
        orderItem: {
          create: [
            ...lineItems.map((item) => ({
              orderId: 100, // TODO: replace orderId and prodId
              prodId: 100,
              quantity: item.quantity,
              total: item.total,
            })),
          ],
        },
      },
    });

    if (order === null || order === undefined)
      throw new Error(`Unexpected ${order} from order create request to db`);

    if (typeof order === 'object' && 'error' in order) throw order;
  });
};

const updateDB = async (
  successObject: SuccessObject,
  lineItems: Item[]
): Promise<void> => {
  // ATOMIC TRANSACTION: https://www.prisma.io/docs/guides/performance-and-optimization/prisma-client-transactions-guide
  // TODO: Deduct product quantity from db.
  // TODO: Create recipe/confirmation of purchase by creating a new row in Order and Order_Items table.
  const result = await execSideEffectWithError(
    handleDBTransactions,
    lineItems,
    successObject
  );

  if (result !== undefined) {
    console.error(result);
    // TODO: Stripe undo transaction
  }
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
  // TODO: Pass userId (customer's id) into successObject...
  // console.log(successObject.metadata);

  const result = await stripe.checkout.sessions.listLineItems(successObject.id);

  updateDB(
    successObject,
    result.data.map((item) => ({
      name: item.description,
      quantity: item.quantity ?? 0,
      total: item.amount_total,
    }))
  );

  return res.status(201).send();
};

/*
Important Information:
stripe trigger checkout.session.completed --add "checkout_session:metadata.userId=3"
https://github.com/stripe/stripe-cli/issues/864
*/
