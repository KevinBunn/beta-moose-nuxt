import express from 'express'
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
require('../stores/songs/models/song');
require('../stores/releases/model/releases');
const jsonParser = bodyParser.json()
const app = express()

mongoose.connect("mongodb+srv://AdminMoose:nijpyr-mypdez-6neFxo@cluster0-kxpov.mongodb.net/moose_logic?retryWrites=true&w=majority",{
  useNewUrlParser: true,
  // useFindAndModify: false,
  // useCreateIndex: true,
  useUnifiedTopology: true
});

const Songs = mongoose.model('songs');
const Releases = mongoose.model('releases');
app.get('/', (req, res) => {
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  console.log('connected')
  res.status(200).send('Connected!')
})

app.get('/releases/:id', jsonParser, async (req,res) => {
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  const release = await Releases.findOne({id: req.params.id});
  res.send(release)
});

app.get('/songs/:id', jsonParser, async(req,res) => {
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  // find songs with release_id :id
  const songs = await Songs.find({release_id: req.params.id});
  res.send(songs)
})

export default app
