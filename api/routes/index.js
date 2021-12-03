const app = require('../app')
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()

app.get('/api', (req, res) => {
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  console.log('connected')
  res.status(200).send('Connected!')
})

export default app
