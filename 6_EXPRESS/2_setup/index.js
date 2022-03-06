const express = require('express')
const app = express()
const port = 3000 // variável ambiente

app.get('/', (req, res) => {
  res.send('hello world')
})

app.listen(port, () => {
  console.log(`app esta rodando na porta ${port}`)
})
