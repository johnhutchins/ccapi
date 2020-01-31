export class StravaOauthSummary {
    client_id: number
    redirect_uri: string
    response_type: string
    approval_prompt: string
    scope: string
    state: string
    constructor(data: any){
        this.client_id = data.client_id
        this.redirect_uri = data.redirect_uri
        this.response_type = data.response_type
        this.approval_prompt = data.approval_prompt
        this.scope = data.scope
        this.state = data.state
    }
}