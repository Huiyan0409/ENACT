'use strict';
const Event = require('../models/Event');

exports.saveEvent = async (req, res, next) => {
    try {
        let newEvent = Event({
            ownerId: req.user._id,
            title: req.body.title,
            start: req.body.start,
            end: req.body.end,
            uri: req.body.uri,
            description: req.body.description,
            className: req.body.className,
            icon: req.body.icon,
        })
        await newEvent.save()
        res.redirect('back')
    } catch (e) {
        next(e)
    }
}

exports.editEvent = async (req, res, next) => {
    try {
        let eventToEdit = await Event.findOne({_id: req.params.eventId})
        eventToEdit.title = req.body.title
        eventToEdit.start = req.body.start
        eventToEdit.end = req.body.end
        eventToEdit.uri = req.body.uri
        eventToEdit.description = req.body.description
        eventToEdit.className = req.body.className
        eventToEdit.icon = req.body.icon
        await eventToEdit.save()
        res.redirect('back')
    } catch (e) {
        next(e)
    }
}


exports.deleteEvent = async (req, res, next) => {
    try {
        let eventId = req.params.eventId
        await Event.deleteOne({_id: eventId})
        res.redirect('/events')
    } catch (e) {
        next(e)
    }
}