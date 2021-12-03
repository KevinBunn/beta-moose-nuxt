import express from 'express'
const mongoose = require('mongoose')
const app = express()

// Require API routes
const releases = require('./routes/releases')
const songs = require('./routes/songs')

// Import API Routes
app.use(releases)
app.use(songs)

// app.get('/', (req, res) => {
//   res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
//   console.log('connected')
//   res.status(200).send('Connected!')
// })

export default app
