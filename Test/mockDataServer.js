let express = require('express')
let serveStatic = require('serve-static')

let app = express()

app.use(serveStatic('Test/', { 'index': ['mockActivity.json'] }))
//app.get("/")
app.listen(5000)