import express from 'express';
import { insertProduct } from '../controllers/products/insertProduct';
import { getAllProducts } from '../controllers/products/getAllProducts';
import { isLoggedIn } from '../middlewares/passport';
import { getProductById } from '@/controllers/products/getProductById';

const router = express.Router();

router.post('/', isLoggedIn, insertProduct);
router.get('/', getAllProducts);
router.get('/:id', getProductById);

export default router;
