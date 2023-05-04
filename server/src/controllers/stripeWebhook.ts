import config from '@/config/envConfig';
import { Response, Request } from 'express';
import Stripe from 'stripe';

const endpointSecret: string = config.STRIPE_WEBHOOK_SECRET ?? '';

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
    console.log(sig);
    console.log(req.body);
    return res.status(400).send(`Webhook Error: ${err}`);
  }

  if (event.type === 'payment_intent.payment_failed') {
    const failedPaymentIntent = event.data.object;
    if (
      'id' in failedPaymentIntent &&
      typeof failedPaymentIntent.id === 'string'
    ) {
      await stripe.paymentIntents.cancel(failedPaymentIntent.id);
      return res.send(`Payment failed: ${failedPaymentIntent.id}`);
    } else return res.send(`Payment failed: ${failedPaymentIntent}`);
  } else if (event.type !== 'payment_intent.succeeded') {
    return res.send(`Unknown event type: ${event.type}`);
  }

  const paymentSuccessData = event.data.object;
  console.log(paymentSuccessData);
  // TODO: Deduct product quantity from db.
  // TODO: Create recipe/confirmation of purchase by creating a new row in Order and Order_Items table.

  return res.send();
};
// acct_1N1wUvG575h6sLhw
