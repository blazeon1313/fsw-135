const mongoose = require('mongoose')
const Schema = mongoose.Schema

const storeSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    available: {
        type: boolean
    }
})

module.exports = mongoose.model(storeSchema)