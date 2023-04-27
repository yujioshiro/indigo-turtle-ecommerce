import express from 'express';
import { insertProduct } from '../controllers/products/insertProduct';
import { getAllProducts } from '../controllers/products/getAllProducts';

const router = express.Router();

router.post('/', insertProduct);
router.get('/', getAllProducts);

export default router;
