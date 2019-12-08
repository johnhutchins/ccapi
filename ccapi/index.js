const fetch = require('node-fetch')
const polyline = require('google-polyline')
const keys = require('../config')

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

async function getElevation(){
    //example
    //http://open.mapquestapi.com/elevation/v1/profile?key=CbuVY4beH3NvRW5MMm3cctx6YRqOYrw7&shapeFormat=raw&latLngCollection=39.74012,-104.9849,39.7995,-105.7237,39.6404,-106.3736
    const latLongArr = await latLongArrBuilder()
    let s = '&shapeFormat=json&latLngCollection='

    ELEV_PROFILE_URL += keys.API_KEY
    ELEV_PROFILE_URL += s

    if(latLongArr.length > 10){
        let chunksOfTen = await splitArrToSmallerChunks(latLongArr)
        //console.log(chunksOfTen)
        makeMultipleElevationProfileCallouts(chunksOfTen)
    } else {
        console.log("URL doesn't need to be mutated\nProceed as normal")
        //add array to url and send the shit
    }
}
getElevation()

async function makeMultipleElevationProfileCallouts(chunkyArrs){
    //check length and divide and conquer here
    console.log(ELEV_PROFILE_URL.length)

    //TODO testing purposes below. this codes need refactor, but this callout will work
    let first = chunkyArrs[0].toString()
    let second = chunkyArrs[1].toString()
    let combined = first + second

    ELEV_PROFILE_URL += first
    ELEV_PROFILE_URL += ','
    ELEV_PROFILE_URL += second

    let res = await requestFetch(ELEV_PROFILE_URL)
    console.log(res)
}

function splitArrToSmallerChunks(bigArr){
    let arrOfArr = []
    while(bigArr.length){
        arrOfArr.push(bigArr.splice(0,10))
    }
    return arrOfArr
}