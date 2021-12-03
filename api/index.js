import express from 'express'
const mongoose = require('mongoose')
const app = express()

app.get('/', (req, res) => {
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  console.log('connected')
  res.status(200).send('Connected!')
})

export default app
