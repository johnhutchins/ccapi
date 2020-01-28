import { DataStore } from "../data/data"
import { RequestHandler } from "express"
import { SegmentSummary } from "../model/shared/segmentSummary"

export const apiGetSegment: RequestHandler = (req,res,next) =>{
    const rideId = req.params.id
    const selectedRide = DataStore.rides.find((element: any)=> element.id == rideId)
    if(selectedRide){
        res.json(new SegmentSummary(selectedRide))
    } else {
        res.json({"status":"Failed","message":"Segment with this ID does not exist","rideId":rideId})
    }
}