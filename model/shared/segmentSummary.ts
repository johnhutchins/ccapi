export class SegmentSummary {
    id: number
    name: string
    segments: any[]
    constructor(data: any){
        this.id = data.id
        this.name = data.name
        this.segments = data.segments
    }
}