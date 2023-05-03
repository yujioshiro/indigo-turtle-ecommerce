import { Response, Request } from 'express';
import Stripe from 'stripe';

import config from '@/config/envConfig';
import prisma from '@/prisma';
import { executeSideEffect } from '@/utils/executeSideEffect';

const endpointSecret: string = config.STRIPE_WEBHOOK_SECRET ?? '';

interface Item {
  name: string;
  quantity: number;
}

interface SuccessId {
  id: string;
}

const updateDB = async (checkoutId: string, lineItems: Item[]) => {
  // ATOMIC TRANSACTION: https://www.prisma.io/docs/guides/performance-and-optimization/prisma-client-transactions-guide
  // TODO: Deduct product quantity from db.
  // TODO: Create recipe/confirmation of purchase by creating a new row in Order and Order_Items table.
  // const updatedOrder = await prisma.order.update({
  //   where: { id: 0 },
  //   data: {},
  // });
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

  const { id: successId } = event.data.object as SuccessId; // Type not defined for object

  const result = await stripe.checkout.sessions.listLineItems(successId, {
    limit: 5,
  });

  updateDB(
    successId,
    result.data.map((item) => ({
      name: item.description,
      quantity: item.quantity ?? 0,
    }))
  );

  return res.status(201).send();
};
