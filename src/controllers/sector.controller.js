import SectorService from '../services/sector.service.js';

export async function createSector(req, res) {
    try {
        const sector = await SectorService.createSector(req.body);
        res.status(201).json(sector);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export async function getSectorById(req, res) {
    try {
        const sector = await SectorService.getSectorById(req.params.id);
        if (sector) {
            res.status(200).json(sector);
        } else {
            res.status(404).json({ message: 'Sector not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export async function getAllSectors(req, res) {
    try {
        const sectors = await SectorService.getAllSectors();
        res.status(200).json(sectors);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export async function updateSector(req, res) {
    try {
        const sector = await SectorService.updateSector(req.params.id, req.body);
        if (sector) {
            res.status(200).json(sector);
        } else {
            res.status(404).json({ message: 'Sector not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export async function deleteSector(req, res) {
    try {
        const sector = await SectorService.deleteSector(req.params.id);
        if (sector) {
            res.status(200).json({ message: 'Sector deleted successfully' });
        } else {
            res.status(404).json({ message: 'Sector not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
