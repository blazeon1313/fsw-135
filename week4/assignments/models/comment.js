const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        require: true
    },
    issueId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Issues",
        require: true
    },
    description:{
        type: String
    }
})

// export to commentRouter.js
module.exports = mongoose.model('Comments', commentSchema)