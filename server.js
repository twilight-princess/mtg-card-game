const express = require('express')
const cors = require('cors')
require('dotenv')
const mongoose = require('mongoose')
const { MongoClient } = require('mongodb')
const path = require('path')

const PORT = process.env.PORT || 8080
const MONGODB_URI = 'mongodb://localhost:27017/MTG'

const userRouter = require('./routes/api/user.js')
const deckRouter = require('./routes/api/deck.js')
const bodyParser = require('body-parser')
const app = express()

// middleware
app.use(express.static(path.join(__dirname, "client", "build")))
app.use(cors())
app.use(bodyParser.json())
// Routes
app.use('/user', userRouter)
app.use('/deck', deckRouter)

mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true})
    .then(db => console.log('connected to mongodb'))
    .catch(err => console.log(err))

// Serve the app    
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"))
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
