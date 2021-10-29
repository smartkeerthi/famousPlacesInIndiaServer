const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    coverImg: {
        type: String,
        required: true
    },
    images: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    latitude: {
        type: String,
        required: true
    },
    longitude: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('place', placeSchema);