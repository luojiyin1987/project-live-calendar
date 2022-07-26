const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 3000

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// { "date":"20220726" ,'startTime':'9:00', "Duration":"15min","partner": A, "startup":"1"}
const planData= [];



app.get('/plan', (req, res) => {
  res.send(planData)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})