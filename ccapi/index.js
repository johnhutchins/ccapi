const fetch = require('node-fetch')
const polyline = require('google-polyline')

//const BASE_URL = 'https://www.strava.com/api/v3/'
const TEST_URL = 'http://localhost:5000'

async function requestFetch(TEST_URL) {
  return fetch(TEST_URL)
    .then(response => response.json())
}

async function returnId() {
    const result = await requestFetch(TEST_URL)
    const smallerResult = {
        mapPolyLine: result['map']['polyline']
    }
    return smallerResult
}

async function getMapPolyline(){
    let res = await returnId()
    return polyline.decode(res.mapPolyLine)
}

async function latLongToElevation(){
    let latLongArray = await getMapPolyline()
    latLongArray.forEach((pair) =>{
        console.log(pair)
    })
}

latLongToElevation()

