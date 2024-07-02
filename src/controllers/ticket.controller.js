import TicketService from '../services/ticket.service.js';

export async function createTicket(req, res) {
    try {
        const ticket = await TicketService.createTicket(req.body);
        res.status(201).json(ticket);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export async function getTicketById(req, res) {
    try {
        const ticket = await TicketService.getTicketById(req.params.id);
        if (ticket) {
            res.status(200).json(ticket);
        } else {
            res.status(404).json({ message: 'Ticket not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export async function getAllTickets(req, res) {
    try {
        const tickets = await TicketService.getAllTickets();
        res.status(200).json(tickets);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export async function updateTicket(req, res) {
    try {
        const ticket = await TicketService.updateTicket(req.params.id, req.body);
        if (ticket) {
            res.status(200).json(ticket);
        } else {
            res.status(404).json({ message: 'Ticket not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export async function deleteTicket(req, res) {
    try {
        const ticket = await TicketService.deleteTicket(req.params.id);
        if (ticket) {
            res.status(200).json({ message: 'Ticket deleted successfully' });
        } else {
            res.status(404).json({ message: 'Ticket not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
