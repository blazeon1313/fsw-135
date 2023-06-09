const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema ({
    username:{
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    isAdmin:{
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model("user", userSchema)