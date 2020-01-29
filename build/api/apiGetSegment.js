"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../data/data");
const segmentSummary_1 = require("../model/shared/segmentSummary");
exports.apiGetSegment = (req, res, next) => {
    const segmentId = req.params.id;
    const selectedRide = data_1.DataStore.segments.find((element) => element.id == segmentId);
    if (selectedRide) {
        res.json(new segmentSummary_1.SegmentSummary(selectedRide));
        console.log("Selected Ride: " + selectedRide);
    }
    else {
        res.json({ "status": "Failed", "message": "Segment with this ID does not exist", "segmentId": segmentId });
    }
};
