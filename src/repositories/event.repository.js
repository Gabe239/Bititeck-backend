import eventModel from '../models/event.model.js';

class EventRepository {
    async createEvent(eventData) {
        try {
            const event = new eventModel(eventData);
            return await event.save();
        } catch (error) {
            throw new Error(`Unable to create event: ${error.message}`);
        }
    }

    async findEventById(id) {
        try {
            return await eventModel.findById(id).populate('ticketDetails').exec();
        } catch (error) {
            throw new Error(`Unable to find event by ID: ${error.message}`);
        }
    }

    async getAllEvents() {
        try {
            return await eventModel.find().populate('ticketDetails').exec();
        } catch (error) {
            throw new Error(`Unable to retrieve events: ${error.message}`);
        }
    }

    async updateEvent(id, updateData) {
        try {
            return await eventModel.findByIdAndUpdate(id, updateData, { new: true }).populate('ticketDetails').exec();
        } catch (error) {
            throw new Error(`Unable to update event: ${error.message}`);
        }
    }

    async deleteEvent(id) {
        try {
            return await eventModel.findByIdAndDelete(id).exec();
        } catch (error) {
            throw new Error(`Unable to delete event: ${error.message}`);
        }
    }
}

export default new EventRepository();
