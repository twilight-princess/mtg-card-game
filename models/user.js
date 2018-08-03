const mongoose = require("mongoose")
const { Schema } = mongoose

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    decks: Array
})

const userModel = mongoose.model('User')

module.exports = mongoose.model('User', userSchema)