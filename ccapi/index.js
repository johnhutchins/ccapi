const fetch = require('node-fetch')
const polyline = require('google-polyline')
const keys = require('../config')
const UserActivity = require('./UserActivity')

let ELEV_PROFILE_URL = "http://open.mapquestapi.com/elevation/v1/profile"

//const BASE_URL = 'https://www.strava.com/api/v3/'
const TEST_URL = 'http://localhost:5000'

async function requestFetch(TEST_URL) {
  return fetch(TEST_URL)
    .then(response => response.json())
}

async function getMapPolyline() {
    const result = await requestFetch(TEST_URL)
    const smallerResult = {
        mapPolyLine: result['map']['polyline']
    }
    return smallerResult
}

async function getLatLong(){
    const res = await getMapPolyline()
    return polyline.decode(res.mapPolyLine)
}

async function latLongArrBuilder(){
    const latLongObj = await getLatLong()
    let latLongArray = []
    for(let i=0;i<latLongObj.length;i++){
        latLongArray.push(latLongObj[i])
    }
    return latLongArray
}

async function getLatLongPairs(){
    //http://open.mapquestapi.com/elevation/v1/profile?key=CbuVY4beH3NvRW5MMm3cctx6YRqOYrw7&shapeFormat=raw&latLngCollection=39.74012,-104.9849,39.7995,-105.7237,39.6404,-106.3736
    const latLongArr = await latLongArrBuilder()
    let s = '&shapeFormat=json&latLngCollection='

    ELEV_PROFILE_URL += keys.API_KEY
    ELEV_PROFILE_URL += s

    if(latLongArr.length > 10){
        let chunksOfFifty = splitArrToSmallerChunks(latLongArr)
        //console.log(chunksOfFifty[0][0])
       // chunksOfFifty
        makeMultipleElevationProfileCallouts(chunksOfFifty)
    } else {
        console.log("URL doesn't need to be mutated\nProceed as normal")
        //add array to url and send the shit
    }
}
getLatLongPairs()

async function makeMultipleElevationProfileCallouts(chunkyArrs){
    //TODO mutate arrays to remove elevations that are the same!



    
    //TODO DO NOT DELETE BELOW 3 LINES
    ELEV_PROFILE_URL += chunkyArrs[0]
    let res = await requestFetch(ELEV_PROFILE_URL)
    console.log(res)
}

function splitArrToSmallerChunks(bigArr){
    let arrOfArr = []
    while(bigArr.length){
        arrOfArr.push(bigArr.splice(0,50))
    }
    return arrOfArr
}

function removeDuplicatetElevations(arr){
    let updatedArr = []
    for(let k=0;k<1;k++){
        //arr[k] is the entire chunky array. need to now loop through the contents of 
        console.log(arr[k])

    }
}