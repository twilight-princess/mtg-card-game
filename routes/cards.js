const express = require('express')

const cardsRouter = express.Router()
const Card = require('../models/cards.js')

cardsRouter.route('/')
    .get((req, res) => {
        Card.find().exec((err, cards) => {
            res.send(cards)
        })
    })
    .post((req,res) => {
        console.log(req.body)
        let card = new Card(req.body)
        card.save((err) => {
            if (err) res.send(err)
            res.send({status: true})
        })
    })
cardsRouter.route('/:id')
    .get((req, res) => {
        Card.findOne({_id: req.params.id}, (err, card) => {
            if (err) res.send(err)
            res.send(card)
        })
    })
    .put((req, res) => {
        Card.findOneAndUpdate({_id: req.params.id}, req.body, (err, card) => {
            if (err) res.send(err)
            res.send({status: true})
        })
    })
    .delete((req, res) => {
        Card.findOneAndRemove({_id: req.params.id}, (err) => {
            if (err) res.send(err)
            res.send({status: true})
        })
    })

module.exports = cardsRouter