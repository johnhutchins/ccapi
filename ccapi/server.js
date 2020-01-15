let express = require('express')
let app = express()
var path = require('path')

//app.use('/static', express.static(path.join(__dirname, 'ccapi/'))) 
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.js'))
})

app.listen(path, function () {
    console.log('Node server is running..')
})
