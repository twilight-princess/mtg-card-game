const mongoose = require("mongoose")
const { Schema } = mongoose

const deckSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    details: String,
    cards: Array
})

const deckModel = mongoose.model("Deck", deckSchema)

module.exports = deckSchema