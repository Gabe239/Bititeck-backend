import CartRepository from '../repositories/cart.repository.js';
import TicketRepository from '../repositories/ticket.repository.js'; 
class CartService {
    async createCart(cartData) {
        return await CartRepository.createCart(cartData);
    }

    async getCartByUserId(userId) {
        return await CartRepository.findCartByUserId(userId);
    }

    async addToCart(userId, ticketId) {
        const ticket = await TicketRepository.findTicketById(ticketId);
        if (!ticket) {
            throw new Error('Ticket not found');
        }

        const ticketPrice = ticket.price; 

        const cart = await CartRepository.findCartByUserId(userId);
        if (cart) {
            cart.tickets.push(ticketId);
            cart.totalPrice += ticketPrice;
            return await CartRepository.updateCart(userId, cart);
        } else {
            const newCart = {
                user: userId,
                tickets: [ticketId],
                totalPrice: ticketPrice
            };
            return await CartRepository.createCart(newCart);
        }
    }
    async removeFromCart(userId, ticketId) {
        const ticket = await TicketRepository.findTicketById(ticketId);
        if (!ticket) {
            throw new Error('Ticket not found');
        }
        const ticketPrice = ticket.price; 
        const cart = await CartRepository.findCartByUserId(userId);
        if (cart) {
            cart.tickets = cart.tickets.filter(ticket => ticket.toString() !== ticketId);
            cart.totalPrice -= ticketPrice;
            return await CartRepository.updateCart(userId, cart);
        } else {
            throw new Error('Cart not found');
        }
    }

    async clearCart(userId) {
        return await CartRepository.deleteCart(userId);
    }
}

export default new CartService();
