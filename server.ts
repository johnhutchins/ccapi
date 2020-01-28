import express from "express"
import { apiGetRides } from "./api/apiGetRides"
import { apiGetIndividualRide } from "./api/apiGetIndividualRide"
import path from "path"
const app = express()

app.use(express.static('public'))
//this needs to be fixed....
app.get('/', (req,res,next)=>{
    res.send("<img src='./public/images'>")
    res.json({'status':"You didn't mean to come here..."})
    //this should just show the homer gif
    //res.send("<img src='./public/images/homer.gif'")
})

//return a list of all available rides
app.get('/rides', apiGetRides)

//return individual ride based on what was selected in UI
app.get('/rides/:id', apiGetIndividualRide)

app.listen(process.env.PORT || 8091, ()=>{
    console.log("Server Started")
})