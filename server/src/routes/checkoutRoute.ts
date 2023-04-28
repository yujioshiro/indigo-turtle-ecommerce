import express from 'express';
import { checkout } from '@/controllers/checkout';
import { isLoggedIn } from '@/middlewares/passport';

const router = express.Router();

router.get('/', isLoggedIn, checkout);

export default router;
