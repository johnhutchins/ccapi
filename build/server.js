"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const apiGetRides_1 = require("./api/apiGetRides");
const apiGetIndividualRide_1 = require("./api/apiGetIndividualRide");
const apiGetSegment_1 = require("./api/apiGetSegment");
const app = express_1.default();
app.use(express_1.default.static('public'));
//this needs to be fixed....
app.get('/', (req, res, next) => {
    res.json({ 'status': "You didn't mean to come here..." });
});
//return a list of all available rides
app.get('/rides', apiGetRides_1.apiGetRides);
//return individual ride based on what was selected in UI
app.get('/rides/:id', apiGetIndividualRide_1.apiGetIndividualRide);
//return the segment profile
app.get('/segment/:id', apiGetSegment_1.apiGetSegment);
app.listen(process.env.PORT || 8091, () => {
    console.log("Server Started");
});
