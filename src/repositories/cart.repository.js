import cartModel from '../models/cart.model.js';

class CartRepository {
    async createCart(cartData) {
        try {
            const cart = new cartModel(cartData);
            return await cart.save();
        } catch (error) {
            throw new Error(`Unable to create cart: ${error.message}`);
        }
    }

    async findCartByUserId(userId) {
        try {
            return await cartModel.findOne({ user: userId }).populate('tickets').exec();
        } catch (error) {
            throw new Error(`Unable to find cart by user ID: ${error.message}`);
        }
    }

    async updateCart(userId, updateData) {
        try {
            return await cartModel.findOneAndUpdate({ user: userId }, updateData, { new: true }).populate('tickets').exec();
        } catch (error) {
            throw new Error(`Unable to update cart: ${error.message}`);
        }
    }

    async deleteCart(userId) {
        try {
            return await cartModel.findOneAndDelete({ user: userId }).exec();
        } catch (error) {
            throw new Error(`Unable to delete cart: ${error.message}`);
        }
    }
}

export default new CartRepository();
