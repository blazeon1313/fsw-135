const express = require('express')
const commentRouter = express.Router()
const Comments = require('../models/comment.js')



commentRouter
// Read (GET ALL)
    .get("/", (req, res, next) => {
        Comments.find((err, allcomments) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(allcomments)
        })
    })

// Read One (GET One)
    .get('/:commentsId', (req, res, next) => {
        Comments.findOne(
            {_id: req.params.commentsId},
            (err, foundComment) => {
                if(err){
                    const err = new Error('No comment found!!')
                    return next(err)
                }
                return res.status(200).send(foundComment)
            }
        )
    })

//Create (POST)
.post("/", (req, res, next) => {
    req.body.issue = req.issue._id
    req.body.user = req.user._id
    const newComment = new Comments(req.body)
    newComment.save((err, savedComment) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedComment)
    })
})

// Update (PUT)
.put("/:commentsId", (req, res, next) => {
    Comments.findOneAndUpdate(
        {_id: req.params.commentsId},
        req.body,
        {new: true},
        (err, updatedComment) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedComment)
        }
    )
})

// Delete (DELETE)
.delete("/:commentsId", (req, res, next) => {
    Comments.findOneAndDelete(
        {_id: req.params.commentsId},
        (err, deletedcomment) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(deletedcomment)
        }
    )
})

// export to server.js
module.exports = commentRouter