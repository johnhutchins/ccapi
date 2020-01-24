import { DataStore } from "../data/data"
import { RequestHandler } from "express"
import { RideSummary } from "../model/shared/rideSummary"

export const apiGetIndividualRide: RequestHandler = (req,res,next) =>{
    //id is a string here. which i think is good
    const Id = parseInt(req.params.id)
    console.log(req.params.id)
    if(DataStore.rides.find((element) => element.id == Id)){
        res.json(DataStore.rides.map((item:any) => new RideSummary(item)))
    }    
}