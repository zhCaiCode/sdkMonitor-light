const express = require('express')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: false }))

app.post('/tracker', (req, res) => {
  console.log(req.body);
  res.send(200)
})

app.listen(9000, () => {
  console.log('start... 9000');
})
