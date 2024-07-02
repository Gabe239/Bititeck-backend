import TicketRepository from '../repositories/ticket.repository.js';

class TicketService {
    async createTicket(ticketData) {
        return await TicketRepository.createTicket(ticketData);
    }

    async getTicketById(id) {
        return await TicketRepository.findTicketById(id);
    }

    async getAllTickets() {
        return await TicketRepository.getAllTickets();
    }

    async updateTicket(id, updateData) {
        return await TicketRepository.updateTicket(id, updateData);
    }

    async deleteTicket(id) {
        return await TicketRepository.deleteTicket(id);
    }
}

export default new TicketService();
