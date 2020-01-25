import { DataStore } from "../data/data"
import { RequestHandler } from "express"
import { RideSummary } from "../model/shared/rideSummary"

export const apiGetIndividualRide: RequestHandler = (req,res,next) =>{
    const rideId = req.params.id
    const selectedRide = DataStore.rides.find((element: any)=> element.id == rideId)
    if(selectedRide){
        res.json(new RideSummary(selectedRide))
    } else {
        res.json({"status":"Failed","message":"Ride with this ID does not exist","rideId":rideId})
    }
}