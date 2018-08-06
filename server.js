const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const { MongoClient } = require('mongodb')

const PORT = 8080
const MONGODB_URI = 'mongodb://localhost:27017/MTG'

const userRouter = require('./routes/user.js')
const deckRouter = require('./routes/deck.js')
const bodyParser = require('body-parser')
const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use('/user', userRouter)
app.use('/deck', deckRouter)

mongoose.connect(MONGODB_URI, {useNewUrlParser: true})
    .then(db => console.log('connected to mongodb'))
    .catch(err => console.log(err))
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
