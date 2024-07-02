import SectorRepository from '../repositories/sector.repository.js';

class SectorService {
    async createSector(sectorData) {
        return await SectorRepository.createSector(sectorData);
    }

    async getSectorById(id) {
        return await SectorRepository.findSectorById(id);
    }

    async getAllSectors() {
        return await SectorRepository.getAllSectors();
    }

    async updateSector(id, updateData) {
        return await SectorRepository.updateSector(id, updateData);
    }

    async deleteSector(id) {
        return await SectorRepository.deleteSector(id);
    }
}

export default new SectorService();
