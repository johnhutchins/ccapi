import express from "express"
import { apiGetRides } from "./api/apiGetRides";
import { apiGetIndividualRide } from "./api/apiGetIndividualRide";
const app = express()


app.get('/', (req,res,next)=>{
    res.send('Strava Rides API')
})

//return a list of all available rides
app.get('/rides', apiGetRides)

//return individual ride based on what was selected in UI
app.get('/rides/:id', apiGetIndividualRide)

app.listen(process.env.PORT || 8091, ()=>{
    console.log("Server Started")
})