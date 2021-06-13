
const express = require('express')
const app = express()
const port = 3000

app.get('/world', (req, res) => {
  res.send('Hello World!')
})

app.get('/contact', (req, res) => {
    res.send('no i Dont have')
  })

app.get('/about', (req, res) => {
    res.send('want to know about me?')
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})