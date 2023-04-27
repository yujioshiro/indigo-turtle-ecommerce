import express from 'express';
import { insertProduct } from '../controllers/products/insertProduct';
import { getAllProducts } from '../controllers/products/getAllProducts';
import { isLoggedIn } from '../middlewares/passport';

const router = express.Router();

router.post('/', isLoggedIn, insertProduct);
router.get('/', getAllProducts);

export default router;
