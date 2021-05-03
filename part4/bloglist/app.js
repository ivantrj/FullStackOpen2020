const express = require('express')
const app = express()
const cors = require('cors')
const logger = require('./utils/logger')
const config = require('./utils/config')
const mongoose = require('mongoose')
const notesRouter = require('./controllers/blogs')

logger.info('connecting to', config.MONGODB_URI)

mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })


app.use('/api/blogs', notesRouter)
app.use(cors())
app.use(express.json())

module.exports = app
