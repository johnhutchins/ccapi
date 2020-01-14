let express = require('express')
let app = express()
app.get('/static', express.static(path.join(__dirname, 'ccapi/'))) 