const mongoose = require("mongoose")
const { Schema } = mongoose

const cardSchema = new Schema({
    name: String,
    type: String,
    set: String,
    colors: Array,
    convertedManaCost: Number,
    power: Number,
    toughness: Number,
})

const cardModel = mongoose.model('Card')

module.exports = mongoose.model('Card', cardSchema)