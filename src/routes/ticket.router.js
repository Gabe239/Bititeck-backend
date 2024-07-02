import express from 'express';
import {
    createTicket,
    getTicketById,
    getAllTickets,
    updateTicket,
    deleteTicket
} from '../controllers/ticket.controller.js';

const router = express.Router();

router.post('/', createTicket);
router.get('/:id', getTicketById);
router.get('/', getAllTickets);
router.put('/:id', updateTicket);
router.delete('/:id', deleteTicket);

export default router;
