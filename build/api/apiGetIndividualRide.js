"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../data/data");
const rideSummary_1 = require("../model/shared/rideSummary");
exports.apiGetIndividualRide = (req, res, next) => {
    //id is a string here. which i think is good
    const Id = parseInt(req.params.id);
    console.log(req.params.id);
    if (data_1.DataStore.rides.find((element) => element.id == Id)) {
        res.json(data_1.DataStore.rides.map((item) => new rideSummary_1.RideSummary(item)));
    }
};
