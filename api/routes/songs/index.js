const mongoose = require('mongoose')
require('../../../stores/songs/models/song');
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const app = require('../../app')

mongoose.connect(process.env.MONGO_URI)
  .catch(err => {
    console.log(err.reason)
  }).then(() => {
  console.log('connected')
});

const Index = mongoose.model('songs');

app.get('/songs/:id', jsonParser, async(req,res) => {
  // res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  // find songs with release_id :id
  const songs = await Index.find({release_id: req.params.id});
  res.send(songs)
})

module.exports = app
