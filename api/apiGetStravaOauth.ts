//https://www.strava.com/oauth/authorize
//import { DataStore } from "../data/data"
import { RequestHandler } from "express"
import { Passport } from "passport"

export const apiGetStravaOauth: RequestHandler = (req,res,next) =>{


    //IF response successful...
    //THEN code parameter contains the authorization code required to complete the authentication process. 
    //IE, filter through query string to pull out the access code 


    //application must now call the POST https://www.strava.com/oauth/token 
    //with its client ID and client secret to exchange the authorization code for a refresh token and short-lived access token.
}