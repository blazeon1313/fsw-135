const mongoose = require('mongoose')
const Schema = mongoose.Schema

//User schema
const userSchema = new Schema ({
    username:{
        type: String,
        required: true,
        lowercase: true,
        unique: true
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

// export to authRouter.js
module.exports = mongoose.model("User", userSchema)