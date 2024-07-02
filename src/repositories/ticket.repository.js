import ticketModel from '../models/ticket.model.js';

class TicketRepository {
    async createTicket(ticketData) {
        try {
            const ticket = new ticketModel(ticketData);
            return await ticket.save();
        } catch (error) {
            throw new Error(`Unable to create ticket: ${error.message}`);
        }
    }

    async findTicketById(id) {
        try {
            return await ticketModel.findById(id).populate('sector').exec();
        } catch (error) {
            throw new Error(`Unable to find ticket by ID: ${error.message}`);
        }
    }

    async getAllTickets() {
        try {
            return await ticketModel.find().populate('sector').exec();
        } catch (error) {
            throw new Error(`Unable to retrieve tickets: ${error.message}`);
        }
    }

    async updateTicket(id, updateData) {
        try {
            return await ticketModel.findByIdAndUpdate(id, updateData, { new: true }).populate('sector').exec();
        } catch (error) {
            throw new Error(`Unable to update ticket: ${error.message}`);
        }
    }

    async deleteTicket(id) {
        try {
            return await ticketModel.findByIdAndDelete(id).exec();
        } catch (error) {
            throw new Error(`Unable to delete ticket: ${error.message}`);
        }
    }
}

export default new TicketRepository();
