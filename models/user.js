const mongoose = require("mongoose")
const { Schema } = mongoose

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    decks: Array
})

const userModel = mongoose.model('User', userSchema)

module.exports = userModel