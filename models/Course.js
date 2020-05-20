'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const objectID = mongoose.Schema.Types.ObjectID;

const courseSchema = Schema({
    ownerId: objectID,
    courseName: String,
    pinCode: String, // pin number to join the class
    tas: [objectID],
    zipcode: String,
    city: String,
    state: String,
    semester: String
});

module.exports = mongoose.model('Course', courseSchema);