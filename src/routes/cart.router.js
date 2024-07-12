import express from 'express';
import { addToCart, removeFromCart, getCartByUserId, clearCart } from '../controllers/cart.controller.js';

const router = express.Router();

router.post('/add', addToCart);
router.post('/remove', removeFromCart);
router.get('/:userId', getCartByUserId);
router.post('/clear', clearCart);

export default router;
