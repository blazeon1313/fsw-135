const express = require('express')
const userRouter = express.Router()
const User = require('../models/user.js')

userRouter
// Create (POST)
    .post("/", (req, res, next) => {
        const newUser = new User(req.body)
        newUser.save((err, savedUser) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(savedUser)
        })
    })

// Read (GET all)
    .get("/", (req, res, next) => {
        User.find((err, names) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(names)
        })
    })

// Read One (GET One)
    .get("/:userId", (req, res, next) => {
        User.findOne(
            {_id: req.params.userId},
            (err, oneName) => {
                if(err){
                    res.status(500).send('User Not Found!!')
                    return next(err)
                }
                return res.status(200).send(oneName)
            }
        )
    })

// Update (PUT)
    .put("/:userId", (req, res, next) => {
        User.findOneAndUpdate(
            {_id: req.params.userId},
            req.body,
            {new: true},
            (err, updatedUser) => {
                if(err){
                    res.status(500)
                    return next(err)
                }
                return res.status(201).send(updatedUser)
            }
        )
    })

// Delete (DELETE)
    .delete("/:userId", (req, res, next) => {
        User.findOneAndDelete(
            {_id: req.params.userId},
            (err, deletedUser) => {
                if(err){
                    res.status(500)
                    return next(err)
                }
                return res.status(201).send(deletedUser)
            }
        )
    })

module.exports = userRouter