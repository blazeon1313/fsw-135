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
        type: Boolean // I had an error with this line because Boolean was not Capitalized which was a simple fix
    }
})

module.exports = mongoose.model("Store", storeSchema)