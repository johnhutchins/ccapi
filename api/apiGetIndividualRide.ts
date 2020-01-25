import { DataStore } from "../data/data"
import { RequestHandler } from "express"
import { RideSummary } from "../model/shared/rideSummary"

export const apiGetIndividualRide: RequestHandler = (req,res,next) =>{
    //id is a string here. which i think is good
    const Id = parseInt(req.params.id)
    DataStore.rides.find((element) => {
        if(element.id === Id){
            //res.send(element)
            res.send(new RideSummary(element))
        } 
    })
}