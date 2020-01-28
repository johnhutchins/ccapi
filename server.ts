import express from "express"
import { apiGetRides } from "./api/apiGetRides"
import { apiGetIndividualRide } from "./api/apiGetIndividualRide"
import { apiGetSegment } from "./api/apiGetSegment"
import path from "path"
const app = express()

app.use(express.static('public'))
//this needs to be fixed....
app.get('/', (req,res,next)=>{
    res.json({'status':"You didn't mean to come here..."})
})

//return a list of all available rides
app.get('/rides', apiGetRides)

//return individual ride based on what was selected in UI
app.get('/rides/:id', apiGetIndividualRide)

//return the segment profile
app.get('/segment/:id', apiGetSegment)

app.listen(process.env.PORT || 8091, ()=>{
    console.log("Server Started")
})