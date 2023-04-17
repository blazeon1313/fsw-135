const express = require('express')
const issueRouter = express.Router()
const Issues = require('../models/issue.js')



issueRouter
// Read (GET ALL)
    .get("/", (req, res, next) => {
        Issues.find((err, allIssues) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(allIssues)
        })
    })

// Read One (GET One)
    .get('/:issuesId', (req, res, next) => {
        Issues.findOne(
            {_id: req.params.issuesId},
            (err, foundIssue) => {
                if(err){
                    const err = new Error('No issue found!!')
                    return next(err)
                }
                return res.status(200).send(foundIssue)
            }
        )
    })

//Create (POST)
.post("/", (req, res, next) => {
    const newIssue = new Issues(req.body)
    newIssue.save((err, savedIssue) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedIssue)
    })
})

// Update (PUT)
.put("/:issuesId", (req, res, next) => {
    Issues.findOneAndUpdate(
        {_id: req.params.issuesId},
        req.body,
        {new: true},
        (err, updatedissue) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedissue)
        }
    )
})

// Delete (DELETE)
.delete("/:issuesId", (req, res, next) => {
    Issues.findOneAndDelete(
        {_id: req.params.issuesId},
        (err, deletedissue) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(deletedissue)
        }
    )
})

module.exports = issueRouter