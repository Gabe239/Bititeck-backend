import mongoose from 'mongoose';

const collection = 'events';

const eventSchema = new mongoose.Schema({
    name: { type: String, required: true },
    date: { type: Date, required: true},
    location: { type: String, required: true },
    imageUrl: { type: String, required: true },
    capacity: { type: Number, required: true },
    ticketDetails: [{ type: mongoose.Schema.Types.ObjectId, ref: 'tickets', required: true }],
}, {
    timestamps: true
});

const eventModel = mongoose.model(collection, eventSchema);

export default eventModel;