"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sample1_json_1 = __importDefault(require("./sample1.json"));
const sampleSegment_json_1 = __importDefault(require("./SegmentData/sampleSegment.json"));
class DataStore {
}
exports.DataStore = DataStore;
DataStore.rides = sample1_json_1.default;
DataStore.segments = sampleSegment_json_1.default;
