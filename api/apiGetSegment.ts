import { DataStore } from "../data/data"
import { RequestHandler } from "express"
import { SegmentSummary } from "../model/shared/segmentSummary"

export const apiGetSegment: RequestHandler = (req,res,next) =>{
    const segmentId = req.params.id
    const selectedRide = DataStore.segments.find((element: any)=> element.id == segmentId)
    if(selectedRide){
        res.json(new SegmentSummary(selectedRide))
        console.log("Selected Ride: " + selectedRide)
    } else {
        res.json({"status":"Failed","message":"Segment with this ID does not exist","segmentId":segmentId})
    }
}