import express from 'express';
import {
    createSector,
    getSectorById,
    getAllSectors,
    updateSector,
    deleteSector
} from '../controllers/sector.controller.js';

const router = express.Router();

router.post('/', createSector);
router.get('/:id', getSectorById);
router.get('/', getAllSectors);
router.put('/:id', updateSector);
router.delete('/:id', deleteSector);

export default router;
