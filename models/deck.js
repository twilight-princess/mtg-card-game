const mongoose = require("mongoose")
const { Schema } = mongoose

const bountySchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: String,
    living: Boolean,
    amount: Number,
    type: {
        type: String,
        required: true,
        enum: ["jedi", "sith"]
    }
})

const bountyModel = mongoose.model("Bounty")

module.exports = mongoose.model("Bounty", bountySchema)