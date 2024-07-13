import OrderRepository from '../repositories/order.repository.js';
import CartService from './cart.service.js';
import stripePackage from 'stripe';
import config from '../config/env-config.js';

const stripe = stripePackage(config.stripe_secret);

class OrderService {
    async createOrder(userId) {
        const cart = await CartService.getCartByUserId(userId);
        if (cart && cart.tickets.length > 0) {
            const ticketIds = cart.tickets.map(ticket => ticket._id);

            const orderData = {
                user: userId,
                event: cart.event,
                tickets: ticketIds, 
                totalPrice: cart.totalPrice,
                status: 'pending'
            };

            const order = await OrderRepository.createOrder(orderData);
            await CartService.clearCart(userId);
            return order;
        } else {
            throw new Error('Cart is empty');
        }
    }

    async getOrderById(id) {
        return await OrderRepository.findOrderById(id);
    }

    async getAllOrders() {
        return await OrderRepository.getAllOrders();
    }

    async updateOrder(id, updateData) {
        return await OrderRepository.updateOrder(id, updateData);
    }

    async deleteOrder(id) {
        return await OrderRepository.deleteOrder(id);
    }

    async createPaymentSession(orderId) {
        const order = await OrderRepository.findOrderById(orderId);
        if (order) {
            const lineItems = order.tickets.map(ticket => ({
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: 'Ticket', 
                    },
                    unit_amount: ticket.price * 100, 
                },
                quantity: 1, 
            }));

            const session = await stripe.checkout.sessions.create({
                line_items: lineItems,
                mode: 'payment',
                success_url: `http://localhost:4200/buy/tickets/${order.event.toString()}/${orderId}`,
                cancel_url: 'http://localhost:4200/',
            });

            return session;
        } else {
            throw new Error('Order not found');
        }
    }
}

export default new OrderService();