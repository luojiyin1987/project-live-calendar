const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 3000

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));





app.get('/plan', (req, res) => {
  res.send({'Hello World!':'sdfdf'})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})