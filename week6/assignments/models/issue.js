const mongoose = require('mongoose')
const Schema = mongoose.Schema

// issue Schema
const issueSchema = new Schema ({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        require: true
    },
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    }
})

// export to issueRouter.js
module.exports = mongoose.model('Issues', issueSchema)