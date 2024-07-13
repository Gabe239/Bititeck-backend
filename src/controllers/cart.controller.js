import CartService from '../services/cart.service.js';

export async function addToCart(req, res) {
    try {
        const { userId, ticketId, eventId } = req.body;
        const cart = await CartService.addToCart(userId, ticketId, eventId);
        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export async function removeFromCart(req, res) {
    try {
        const { userId, ticketId  } = req.body;
        const cart = await CartService.removeFromCart(userId, ticketId );
        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export async function getCartByUserId(req, res) {
    try {
        const cart = await CartService.getCartByUserId(req.params.userId);
        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export async function clearCart(req, res) {
    try {
        const { userId } = req.body;
        await CartService.clearCart(userId);
        res.status(200).json({ message: 'Cart cleared successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
