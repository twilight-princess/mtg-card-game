const express = require('express')

const userRouter = express.Router()
const User = require('../models/user.js')

userRouter.route('/')
    .get((req, res) => {
        User.find().exec((err, user) => {
            res.send(user)
        })
    })
    .post((req,res) => {
        console.log(req.body)
        let user = new User(req.body)
        user.save((err) => {
            if (err) res.send(err)
            res.send({status: true})
        })
    })
userRouter.route('/:id')
    .get((req, res) => {
        User.findOne({_id: req.params.id}, (err, user) => {
            if (err) res.send(err)
            res.send(user)
        })
    })
    .put((req, res) => {
        User.findOneAndUpdate({_id: req.params.id}, req.body, (err, user) => {
            if (err) res.send(err)
            res.send({status: true})
        })
    })
    .delete((req, res) => {
        User.findOneAndRemove({_id: req.params.id}, (err) => {
            if (err) res.send(err)
            res.send({status: true})
        })
    })

module.exports = userRouter