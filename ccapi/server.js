let express = require('express')
let app = express()
//app.get('/static', express.static(path.join(__dirname, 'ccapi/'))) 
app.get('/index.js', function (req, res) {
    res.send('index.js')
  })