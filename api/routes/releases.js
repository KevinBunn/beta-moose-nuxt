const mongoose = require('mongoose')
require('../../stores/releases/model/releases');
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const { Router } = require('express')
const router = Router()

mongoose.connect(process.env.MONGO_URI).catch(err => {
  console.log(err.reason)
});

const Releases = mongoose.model('releases');

router.get('/releases/:id', jsonParser, async (req,res) => {
  // res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  const release = await Releases.findOne({id: req.params.id});
  res.send(releases)
});

module.exports = router
