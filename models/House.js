const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HouseSchema = new Schema({
    street_address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    zip_code: {
        type: Number,
        required: true
    },
    mls_number: {
        type: Number,
        required: false
    },
    asking_price: {
        type: Number,
        required: false
    },
    pros: {
        type: [String]
    },
    cons: {
        type: [String]
    }
});

// Compile Model from Schema
module.exports = House = mongoose.model('house', HouseSchema);