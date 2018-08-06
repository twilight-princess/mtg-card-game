const mongoose = require("mongoose")
const { Schema } = mongoose
const deckSchema = require('./deck.js')

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    decks: [deckSchema]
})

const userModel = mongoose.model('User', userSchema)

module.exports = userModel