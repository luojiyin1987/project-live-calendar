const express = require('express')
const bodyParser = require('body-parser');
const _ = require('lodash');

const app = express()
const port = 3000



app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// { "date":"20220726" ,'startTime':'9:00', "Duration":"15min","partner": "A", "startup":"1"}
const planData= [];

const partners = ['A', 'B', 'C', 'D']
const startups =['1','2', '3','4', '5']
const time = ['9', '10', '11', '12', '13', '14', '15', '16', '17']

for(let i=0; i<time.length; i++) {
    for (let k=0; k<4; k++ ) {
        for(let j=0; j< partners.length ; j++) {
                const temp = {"data":"20220726", 'startTime': time[i] + ':' + (k * 15).toString().padStart(2,'0'), "Duration": "15min", "partner":partners[j] }
                planData.push(temp)
        }
    }
} 


app.get('/plan', (req, res) => {
  res.send(planData)
})

app.post('/addPlan', (req, res)=>{
    res.send(addPlan(req))
})

app.post('/delPlan',  (res, res) =>{
    res.send(delPlan(res))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

function addPlan(data) {

} 

function delPlan(data) {
    
}