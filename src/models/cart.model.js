import mongoose from 'mongoose';

const collection = 'carts';

const cartSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true },
    items: [{
        ticket: { type: mongoose.Schema.Types.ObjectId, ref: 'tickets', required: true },
        quantity: { type: Number, required: true, default: 1 },
    }],
    total: { type: Number, required: true, default: 0 }
}, { timestamps: true });

const cartModel = mongoose.model(collection, cartSchema);

export default Cart;