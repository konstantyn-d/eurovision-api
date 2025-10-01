const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('Hello Collin')
})

console.log("Server is running on port 3000....");

app.listen(3000)