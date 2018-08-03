const express = require('express')
const mongoose = require('mongoose')

const PORT = 8080
const MONGODB_URI = 'mongodb://localhost:27017/'

const app = express()

mongoose.connect(MONGODB_URI, { useNewUrlParser: true })
    .then(db => console.log('connected to mongodb'))
    .catch(err => console.log(err))
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))