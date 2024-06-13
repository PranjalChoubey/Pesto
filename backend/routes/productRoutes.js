import express from 'express'
const router = express.Router();
import GetProducts from '../controllers/productController.js';
import GetProductById from '../controllers/productController2.js'

router.route('/').get(GetProducts);
router.route('/:id').get(GetProductById);


export default router;