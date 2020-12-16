const express = require('express')
const app = express()
const port = 3000
const questionBank = require('./question-bank.json');

// app.get('/', (req, res) => {
//   res.set('Access-Control-Allow-Origin', '*');
//   res.send(JSON.stringify(questionBank));
// })

app.get('/', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.send(JSON.stringify(questionBank));
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
