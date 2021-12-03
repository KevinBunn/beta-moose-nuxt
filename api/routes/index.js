const app = require('../app')

app.get('/api', (req, res) => {
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  console.log('connected')
  res.status(200).send('Connected!')
})

app.get('/api/releases', jsonParser, async (req,res) => {
  // res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  res.status(200).send('Releases!')
});

export default app
