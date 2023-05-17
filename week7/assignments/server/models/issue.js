const mongoose = require('mongoose')
const Schema = mongoose.Schema

// issue Schema
const issueSchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String,
        required: false
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        require: true
    }
})

// export to issueRouter.js
module.exports = mongoose.model('Issues', issueSchema)