import mongoose from 'mongoose';

const collection = 'sectors';

const sectorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    color: { type: String, required: true },
}, {
    timestamps: true
});

const sectorModel = mongoose.model(collection, sectorSchema);

export default sectorModel;
