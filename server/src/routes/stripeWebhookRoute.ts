import express from 'express';
import { stripeWebhook } from '@/controllers/stripeWebhook';
import { isLoggedIn } from '@/middlewares/passport';

const router = express.Router();

router.post('/', express.raw({ type: '*/*' }), stripeWebhook);

export default router;
