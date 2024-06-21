import express from 'express';
import {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProductById,
    deleteAllProducts,
    findProductsByName
} from '../controllers/product.controller.js';

const router = express.Router();

router.post('/products', createProduct);
router.get('/products', getAllProducts);
router.get('/products/:id', getProductById);
router.put('/products/:id', updateProduct);
router.delete('/products/:id', deleteProductById);
router.delete('/products', deleteAllProducts);
router.get('/products/search', findProductsByName);

export default router;