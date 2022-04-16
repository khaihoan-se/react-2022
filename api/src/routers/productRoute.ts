import express from 'express';
import productCtrl from '../controllers/productCtrl';
import { checkProductData } from '../middleware/validate'

const router = express.Router();

router.get('/products', productCtrl.getProducts); // get all products
router.get('/products/:id', productCtrl.getProduct); // get one product

router.post('/products', checkProductData, productCtrl.createProduct); // create product

router.put('/products/:id', checkProductData, productCtrl.updateProduct); // update product

router.delete('/products/:id', productCtrl.deleteProduct); // delete product

export default router;