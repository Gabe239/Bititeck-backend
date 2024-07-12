import orderModel from '../models/order.model.js';

class OrderRepository {
    async createOrder(orderData) {
        try {
            const order = new orderModel(orderData);
            return await order.save();
        } catch (error) {
            throw new Error(`Unable to create order: ${error.message}`);
        }
    }

    async findOrderById(id) {
        try {
            return await orderModel.findById(id).populate('tickets').exec();
        } catch (error) {
            throw new Error(`Unable to find order by ID: ${error.message}`);
        }
    }

    async getAllOrders() {
        try {
            return await orderModel.find().populate('tickets').exec();
        } catch (error) {
            throw new Error(`Unable to retrieve orders: ${error.message}`);
        }
    }

    async updateOrder(id, updateData) {
        try {
            return await orderModel.findByIdAndUpdate(id, updateData, { new: true }).populate('tickets').exec();
        } catch (error) {
            throw new Error(`Unable to update order: ${error.message}`);
        }
    }

    async deleteOrder(id) {
        try {
            return await orderModel.findByIdAndDelete(id).exec();
        } catch (error) {
            throw new Error(`Unable to delete order: ${error.message}`);
        }
    }
}

export default new OrderRepository();
