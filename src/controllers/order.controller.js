import OrderService from '../services/order.service.js';

export async function createOrder(req, res) {
    try {
        const { userId } = req.body;
        const order = await OrderService.createOrder(userId);
        res.status(201).json(order);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export async function getOrderById(req, res) {
    try {
        const order = await OrderService.getOrderById(req.params.id);
        if (order) {
            res.status(200).json(order);
        } else {
            res.status(404).json({ message: 'Order not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export async function getAllOrders(req, res) {
    try {
        const orders = await OrderService.getAllOrders();
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export async function updateOrder(req, res) {
    try {
        const order = await OrderService.updateOrder(req.params.id, req.body);
        if (order) {
            res.status(200).json(order);
        } else {
            res.status(404).json({ message: 'Order not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export async function deleteOrder(req, res) {
    try {
        const order = await OrderService.deleteOrder(req.params.id);
        if (order) {
            res.status(200).json({ message: 'Order deleted successfully' });
        } else {
            res.status(404).json({ message: 'Order not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export async function createPaymentSession(req, res) {
    try {
        const { orderId } = req.body; 
        const session = await OrderService.createPaymentSession(orderId);
        res.status(200).json({ sessionId: session.id, paymentUrl: session.url });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
