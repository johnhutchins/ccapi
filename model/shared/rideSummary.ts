export class RideSummary {
    id: string
    name: string
    dataPoints: object
    constructor(data: any){
        this.id = data.id
        this.name = data.name
        this.dataPoints = data.dataPoints
    }
}