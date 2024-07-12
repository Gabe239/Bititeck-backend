import mongoose from 'mongoose';

const collection = 'orders';

const orderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true },
    tickets: [{ type: mongoose.Schema.Types.ObjectId, ref: 'tickets', required: true }],
    totalPrice: { type: Number, required: true },
    status: { type: String, required: true, default: 'pending' }, 
}, {
    timestamps: true
});

const orderModel = mongoose.model(collection, orderSchema);

export default orderModel;
