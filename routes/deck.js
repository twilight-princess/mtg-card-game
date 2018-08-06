const express = require('express')

const deckRouter = express.Router()
const User = require('../models/user.js')

deckRouter.route('/')
    .get((req, res) => {
        Deck.find().exec((err, deck) => {
            res.send(deck)
        })
    })
    .post((req,res) => {
        console.log(req.body)
        User.findOne({_id: req.body.userId}, (err, user) => {
            if (err) return res.send(err)
            user.decks.push(req.body.deck)
            user.save(err => {
                if (err) return res.send(err)
                res.send(user)
            })
        })
    })
deckRouter.route('/:id')
    .get((req, res) => {
        Deck.findOne({_id: req.params.id}, (err, deck) => {
            if (err) res.send(err)
            res.send(deck)
        })
    })
    .put((req, res) => {
        Deck.findOneAndUpdate({_id: req.params.id}, req.body, (err, deck) => {
            if (err) res.send(err)
            res.send({status: true})
        })
    })
    .delete((req, res) => {
        Deck.findOneAndRemove({_id: req.params.id}, (err) => {
            if (err) res.send(err)
            res.send({status: true})
        })
    })

module.exports = deckRouter