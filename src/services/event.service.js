import EventRepository from '../repositories/event.repository.js';

class EventService {
    async createEvent(eventData) {
        return await EventRepository.createEvent(eventData);
    }

    async getEventById(id) {
        return await EventRepository.findEventById(id);
    }

    async getAllEvents() {
        return await EventRepository.getAllEvents();
    }

    async updateEvent(id, updateData) {
        return await EventRepository.updateEvent(id, updateData);
    }

    async deleteEvent(id) {
        return await EventRepository.deleteEvent(id);
    }
}

export default new EventService();
