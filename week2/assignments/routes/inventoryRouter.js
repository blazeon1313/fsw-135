const express = require('express')
const inventoryRouter = express.Router()
const Inventory = require('../models/inventory.js')

// GET all
inventoryRouter
    .get("/", (req, res, next) => {
    Inventory.find((err, items) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(items)
    })
})

// POST
    .post("/", (req, res, next) => {
        const newInventory = new Inventory(req.body)
        newInventory.save((err, savedInventory) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(savedInventory)
        })
    })

// PUT
    .put("/:inventoryId", (req, res, next) => {
        Inventory.findOneAndUpdate(
            { _id: req.params.inventoryId},
            req.body,
            {new: true},
            (err, updatedInventory) => {
                if(err){
                    res.status(500)
                    return next(err)
                }
                return res.status(201).send(updatedInventory)
            }
          )  
    })

// DELETE
    .delete("/:inventoryId", (req, res, next) => {
        Inventory.findOneAndDelete(
            {_id: req.params.inventoryId}, 
            (err, deletedItem) => {
                if(err){
                    res.status(500)
                    return next(err)
                }
                return res.status(200).send(`Successfully deleted item ${deletedItem.title} from the database`)
            }
        )
    })

// GET one
    .get("/:inventoryId", (req, res, next) => {
        Inventory.findOne(
            { _id: req.params.inventoryId },
            (err, oneItem) => {
                if(err) {
                    res.send(500)
                    return next(err)
                }
                return res.status(200).send(oneItem)
            }
        )
    })

module.exports = inventoryRouter