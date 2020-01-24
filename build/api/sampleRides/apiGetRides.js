"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../../data/data");
exports.apiGetRides = (req, res, next) => {
    res.json(data_1.DataStore.rides);
};
