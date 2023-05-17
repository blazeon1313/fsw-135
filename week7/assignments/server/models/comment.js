const mongoose = require('mongoose')
const Schema = mongoose.Schema

// comment Schema
const commentSchema = new Schema({
    userId:{
        type: Schema.Types.ObjectId,
        ref: "User",
        require: true
    },
    issueId:{
        type: Schema.Types.ObjectId,
        ref: "Issues",
        require: true
    },
    description:{
        type: String
    }
})

// export to commentRouter.js
module.exports = mongoose.model('Comments', commentSchema)