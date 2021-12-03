const mongoose = require('mongoose')
require('../../stores/songs/models/song');
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const { Router } = require('express')
const router = Router()

mongoose.connect(process.env.MONGO_URI).catch(err => {
  console.log(err.reason)
});

router.get('/songs/:id', jsonParser, async(req,res) => {
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  // find songs with release_id :id
  // const songs = await Songs.find({release_id: req.params.id});
  res.send(`Song: ${req.params.id}`)
})

const Songs = mongoose.model('songs');

module.exports = router
