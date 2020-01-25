"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../data/data");
const rideSummary_1 = require("../model/shared/rideSummary");
exports.apiGetIndividualRide = (req, res, next) => {
    const rideId = req.params.id;
    const selectedRide = data_1.DataStore.rides.find((element) => element.id == rideId);
    if (selectedRide) {
        res.json(new rideSummary_1.RideSummary(selectedRide));
    }
    else {
        res.json({ "status": "Failed", "message": "Ride with this ID does not exist", "rideId": rideId });
    }
};
