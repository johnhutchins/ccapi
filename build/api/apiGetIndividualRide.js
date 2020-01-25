"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../data/data");
const rideSummary_1 = require("../model/shared/rideSummary");
exports.apiGetIndividualRide = (req, res, next) => {
    const Id = parseInt(req.params.id);
    data_1.DataStore.rides.find((element) => {
        if (element.id === Id) {
            res.send(new rideSummary_1.RideSummary(element));
        }
    });
};
