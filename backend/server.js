require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const itemsRoutes = require('./routes/items')

// express app
const app = express()

// middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/items/', itemsRoutes)

// connect to db
const { MONGO_URI, PORT } = process.env
mongoose.connect(MONGO_URI)
    .then(() => {
        // listen to requests once db connection is established
        app.listen(PORT, () => {
            console.log(`Connected to db and listening on port ${PORT}`)
        })
    })
    .catch(error => console.log(error))
