import express from 'express';
import { stripeWebhook } from '@/controllers/stripeWebhook';
import { isLoggedIn } from '@/middlewares/passport';

const router = express.Router();

router.post('/', stripeWebhook);

export default router;
