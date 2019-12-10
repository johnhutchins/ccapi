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
    
    //TODO DO NOT DELETE BELOW CODE
    let arrayOfURLs = []
    let baseUrl = keys.BASE_URL

    chunkyArrs.forEach((arr)=>{
        let tempUrl = baseUrl
        tempUrl += arr
        arrayOfURLs.push(tempUrl)
    })
    urlsIntoLargeElevationProfile(arrayOfURLs)
}

async function urlsIntoLargeElevationProfile(urls){
    let initialValueToAdd
    let valueToAdd
    let fullElevProf = []
    //todo change below to urls.length
    for(let k=0;k<10;k++){
        let response = await requestFetch(urls[k])
        let lastdistance = response['elevationProfile'][response['elevationProfile'].length - 1]['distance']
        //console.log(response['elevationProfile'])

        //get the inital value we need to add
        if(k===0){
            initialValueToAdd = response['elevationProfile'][response['elevationProfile'].length - 1]['distance']
        }
        if(k===1){
            for(let j=0;j<response['elevationProfile'].length;j++){
                response['elevationProfile'][j]['distance'] += initialValueToAdd
            }
            valueToAdd = response['elevationProfile'][response['elevationProfile'].length - 1]['distance']
        }
        if(k>1){
            //if k is greater than 1, every single distance value needs to be updated with the valueToAdd var

           for(let h=0;h<response['elevationProfile'].length;h++){
               response['elevationProfile'][h]['distance'] += valueToAdd
               if(h + 1 === 50){
                //console.log(response['elevationProfile'][h]['distance'])
                valueToAdd = response['elevationProfile'][h]['distance']
               }
               console.log(response['elevationProfile'][h])
           }
        }

    }
}

function splitArrToSmallerChunks(bigArr){
    let arrOfArr = []
    while(bigArr.length){
        arrOfArr.push(bigArr.splice(0,50))
    }
    return arrOfArr
}

function removeDuplicatetConsecutiveElevations(arr){
    let builtArr = []
    for(let j=0;j<arr.length;j++){
        if(j===0){builtArr.push(arr[j])}
        if(j>0){
            if(arr[j]['height'] === arr[j-1]['height']){
                //don't add it
            } else {
                builtArr.push(arr[j])
            }
        }
    }
    console.log(builtArr)
    return builtArr
}