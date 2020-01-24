import { DataStore } from "../data/data"
import { RequestHandler } from "express"

export const apiGetRides: RequestHandler = (req,res,next) =>{
    res.json(DataStore.rides)
}