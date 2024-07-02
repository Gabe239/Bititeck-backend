import sectorModel from '../models/sector.model.js';

class SectorRepository {
    async createSector(sectorData) {
        try {
            const sector = new sectorModel(sectorData);
            return await sector.save();
        } catch (error) {
            throw new Error(`Unable to create sector: ${error.message}`);
        }
    }

    async findSectorById(id) {
        try {
            return await sectorModel.findById(id).exec();
        } catch (error) {
            throw new Error(`Unable to find sector by ID: ${error.message}`);
        }
    }

    async getAllSectors() {
        try {
            return await sectorModel.find().exec();
        } catch (error) {
            throw new Error(`Unable to retrieve sectors: ${error.message}`);
        }
    }

    async updateSector(id, updateData) {
        try {
            return await sectorModel.findByIdAndUpdate(id, updateData, { new: true }).exec();
        } catch (error) {
            throw new Error(`Unable to update sector: ${error.message}`);
        }
    }

    async deleteSector(id) {
        try {
            return await sectorModel.findByIdAndDelete(id).exec();
        } catch (error) {
            throw new Error(`Unable to delete sector: ${error.message}`);
        }
    }
}

export default new SectorRepository();
