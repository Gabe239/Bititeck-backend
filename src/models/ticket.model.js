import mongoose from 'mongoose';

const collection = 'tickets';

const ticketSchema = new mongoose.Schema({
    sector: { type: mongoose.Schema.Types.ObjectId, ref: 'sectors', required: true },
    price: { type: Number, required: true },
}, {
    timestamps: true
});

const ticketModel = mongoose.model(collection, ticketSchema);

export default ticketModel;