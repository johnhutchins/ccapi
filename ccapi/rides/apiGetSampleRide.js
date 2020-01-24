import { DataStore } from //"../../data/data"
// import { RequestHandler } from "express"
// import { TourSummary } from "../../model/tourSummary"

export const apiGetTours: RequestHandler = (req, res, next) =>{
    res.json(DataStore.tours)
}