import EventService from '../services/event.service.js';

export async function createEvent(req, res) {
    try {
        const event = await EventService.createEvent(req.body);
        res.status(201).json(event);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export async function getEventById(req, res) {
    try {
        const event = await EventService.getEventById(req.params.id);
        if (event) {
            res.status(200).json(event);
        } else {
            res.status(404).json({ message: 'Event not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export async function getAllEvents(req, res) {
    try {
        const events = await EventService.getAllEvents();
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export async function updateEvent(req, res) {
    try {
        const event = await EventService.updateEvent(req.params.id, req.body);
        if (event) {
            res.status(200).json(event);
        } else {
            res.status(404).json({ message: 'Event not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export async function deleteEvent(req, res) {
    try {
        const event = await EventService.deleteEvent(req.params.id);
        if (event) {
            res.status(200).json({ message: 'Event deleted successfully' });
        } else {
            res.status(404).json({ message: 'Event not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
