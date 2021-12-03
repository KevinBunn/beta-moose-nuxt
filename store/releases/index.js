const mongoose = require('mongoose')
// require('../../../stores/releases/model/releases');
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const app = require('../../app')

mongoose.connect(process.env.MONGO_URI)
  .catch(err => {
    console.log(err.reason)
  }).then(() => {
    console.log('connected')
  });

const Index = mongoose.model('releases');

app.get('/releases', jsonParser, async (req,res) => {
  // res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  res.status(200).send('Releases!')
});

app.get('/releases/:id', jsonParser, async (req,res) => {
  // res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  const release = await Index.findOne({id: req.params.id});
  res.send(release)
});

module.exports = app
