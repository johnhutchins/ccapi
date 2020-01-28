export class SegmentSummary {
    startDistance: number
    startElevation: number
    endDistance: number
    endElevation: number
    slope: number
    points: number
    startPoint: number
    endPoint: number
    constructor(data: any){
        this.startDistance = data.startDistance
        this.startElevation = data.startElevation
        this.endDistance = data.endDistance
        this.endElevation = data.endElevation
        this.slope = data.slope
        this.points = data.points
        this.startPoint = data.startPoint
        this.endPoint = data.endPoint
    }
}