const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const path = require('path')

const PORT = process.env.PORT || 8080
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/user'

const userRouter = require('./routes/user.js')
const deckRouter = require('./routes/deck.js')
const bodyParser = require('body-parser')
const app = express()

// middleware
app.use(express.static(path.join(__dirname, "public", "build")))
app.use(cors())
app.use(bodyParser.json())
// Routes
app.use('/api/user', userRouter)
app.use('/api/deck', deckRouter)

mongoose.connect(MONGODB_URI, {useNewUrlParser: true})
    .then(db => console.log('connected to mongodb'))
    .catch(err => console.log(err))

// Serve the app    
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "build", "index.html"))
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
