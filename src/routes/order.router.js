import express from 'express';
import { createOrder, getOrderById, getAllOrders, updateOrder, deleteOrder, createPaymentSession } from '../controllers/order.controller.js';

const router = express.Router();

router.post('/', createOrder);
router.get('/:id', getOrderById);
router.get('/', getAllOrders);
router.put('/:id', updateOrder);
router.delete('/:id', deleteOrder);
router.post('/payment', createPaymentSession);

export default router;
