let express = require('express')
let serveStatic = require('serve-static')
let app = express()
app.use(serveStatic('Test/', { 'index': ['mockActivity.json'] }))
app.listen(5049)