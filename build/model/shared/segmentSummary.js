"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SegmentSummary {
    constructor(data) {
        this.startDistance = data.startDistance;
        this.startElevation = data.startElevation;
        this.endDistance = data.endDistance;
        this.endElevation = data.endElevation;
        this.slope = data.slope;
        this.points = data.points;
        this.startPoint = data.startPoint;
        this.endPoint = data.endPoint;
    }
}
exports.SegmentSummary = SegmentSummary;
