const fetch = require('node-fetch')
const polyline = require('google-polyline')
const keys = require('../config')
console.log(keys.API_KEY)

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
    //need latLongArray to be an actual array
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
    s += latLongArr

    ELEV_PROFILE_URL += keys.API_KEY
    ELEV_PROFILE_URL += s
    let res = encodeURI(ELEV_PROFILE_URL)
    console.log(res)
    try{
        //http://open.mapquestapi.com/elevation/v1/profile?key=CbuVY4beH3NvRW5MMm3cctx6YRqOYrw7&shapeFormat=json&latLngCollection=37.82822,-122.26348
        //const getElevationProfile = requestFetch(res)
    } catch(e){
        console.log(e)
    }
}
getElevation()
