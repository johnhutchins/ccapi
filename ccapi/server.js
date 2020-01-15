let express = require('express')
let app = express()
app.use('/static', express.static(path.join(__dirname, 'ccapi/'))) 
app.get('/', function (req, res) {
    res.send('index.js')
})

app.listen()