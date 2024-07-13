import mongoose from 'mongoose';

const collection = 'carts';

const cartSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true },
    event: { type: mongoose.Schema.Types.ObjectId, ref: 'events', required: true },
    tickets: [{ type: mongoose.Schema.Types.ObjectId, ref: 'tickets' }],
    totalPrice: { type: Number, required: true, default: 0 }
}, { timestamps: true });

const cartModel = mongoose.model(collection, cartSchema);

export default cartModel;