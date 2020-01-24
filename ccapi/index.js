const fetch = require('node-fetch')
const polyline = require('google-polyline')
const keys = require('../config')
const UserActivity = require('./UserActivity')

let ELEVATION_PROFILE_BASE_URL = process.env.ELEVATION_PROFILE_BASE_URL

//TODO add strava fake endpoint for now, just to run througha real test.
//https://www.strava.com/api/v3/activities/12345678987654320
const PROD_TEST_URL = 'https://www.strava.com/api/v3/activities/12345678987654320'

const PROD_ACTIVITY_URL = 'https://www.strava.com/api/v3/activities'

//below should be used only when testing.
const TEST_URL = 'http://localhost:5049'

async function requestFetch(url) {
  return fetch(url)
    .then(response => response.json())
}

async function getMapPolyline() {
    const result = await requestFetch(PROD_TEST_URL)
    const smallerResult = {
        mapPolyLine: result['map']['polyline']
    }
    return smallerResult
}

async function getLatLong(){
    const res = await getMapPolyline()
    return polyline.decode(res.mapPolyLine)
}

// async function getElevationProfileImage(){
//     let latLongPairs = await latLongArrBuilder()
//     //TODO have to reduce the number of latLongPairs, and concat them together 
//     //TODO  url is too long if full request is sent
//     let testArr = []
//     testArr += latLongPairs[0]
//     testArr += ","
//     testArr += latLongPairs[1]

//     //console.log("TEST ARRAY " + testArr)
//     console.log(ELEVATION_PROFILE_BASE_URL + testArr)

//     let res = await requestFetch(ELEVATION_PROFILE_BASE_URL + testArr)
//     console.log(res)
// }
//getElevationProfileImage()

//this returns lat/long pairings. smoothing algorithmns can be run here
async function latLongArrBuilder(){
    const latLongObj = await getLatLong()
    let latLongArray = []
    for(let i=0;i<latLongObj.length;i++){
        latLongArray.push(latLongObj[i])
    }
    return latLongArray
}

async function splitLatLongPairs(){
    //http://open.mapquestapi.com/elevation/v1/profile?key=CbuVY4beH3NvRW5MMm3cctx6YRqOYrw7&shapeFormat=raw&latLngCollection=39.74012,-104.9849,39.7995,-105.7237,39.6404,-106.3736
    const latLongArr = await latLongArrBuilder()

    if(latLongArr.length > 10){
        let chunksOfFifty = splitArrToSmallerChunks(latLongArr)
        makeMultipleElevationProfileCallouts(chunksOfFifty)
    } else {
        console.log("URL doesn't need to be mutated\nProceed as normal")
        //add array to url and send the shit
    }
}
//splitLatLongPairs()

//takes the array of lat/long and builds list of URLs
async function makeMultipleElevationProfileCallouts(chunkyArrs){
    let arrayOfURLs = []
    //let baseUrl = keys.ELEVATION_PROFILE_BASE_URL
    let baseUrl = "http://open.mapquestapi.com/elevation/v1/profile?key=CbuVY4beH3NvRW5MMm3cctx6YRqOYrw7&shapeFormat=json&latLngCollection="
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
    let smashedElevProf = []
    for(let k=0;k<urls.length;k++){
        let response = await requestFetch(urls[k])
        let lastdistance = response['elevationProfile'][response['elevationProfile'].length - 1]['distance']
        if(k===0){
            initialValueToAdd = response['elevationProfile'][response['elevationProfile'].length - 1]['distance']
            smashedElevProf.push(response['elevationProfile'])
        }
        if(k===1){
            for(let j=0;j<response['elevationProfile'].length;j++){
                response['elevationProfile'][j]['distance'] += initialValueToAdd
            }
            valueToAdd = response['elevationProfile'][response['elevationProfile'].length - 1]['distance']
            smashedElevProf = smashedElevProf[0].concat(response['elevationProfile'])
        }
        if(k>1){
           for(let h=0;h<response['elevationProfile'].length;h++){
               response['elevationProfile'][h]['distance'] += valueToAdd
               if(h + 1 === 50){
                    valueToAdd = response['elevationProfile'][h]['distance']
               }
           }
           smashedElevProf = smashedElevProf.concat(response['elevationProfile'])
        }
    }
    console.log(smashedElevProf)
    return smashedElevProf
    //removeDuplicatetConsecutiveElevations(smashedElevProf)
}
makeMultipleElevationProfileCallouts([
    [44.422300, -73.211379],
    [44.422311, -73.211653],
    [44.422319, -73.211839],
    [44.422468, -73.211866],
    [44.422621, -73.211839],
    [44.422816, -73.211828],
    [44.423008, -73.211833],
    [44.423127, -73.211817],
    [44.423361, -73.211779],
    [44.423568, -73.211731],
    [44.423771, -73.211736],
    [44.423982, -73.211693],
    [44.424104, -73.211474],
    [44.424131, -73.211672],
    [44.424108, -73.211297],
    [44.424089, -73.211023],
    [44.424074, -73.210803],
    [44.424041, -73.210521],
    [44.423985, -73.210290],
    [44.423928, -73.210022],
    [44.423897, -73.209877],
    [44.423868, -73.209743],
    [44.423849, -73.209494],
    [44.423849, -73.209215],
    [44.423878, -73.209025],
    [44.423893, -73.208751],
    [44.423924, -73.208448],
    [44.423949, -73.208231],
    [44.423985, -73.207955],
    [44.424000, -73.207671],
    [44.424042, -73.207432],
    [44.424059, -73.207180],
    [44.424076, -73.207006],
    [44.424085, -73.206829],
    [44.424128, -73.206522],
    [44.424155, -73.206232],
    [44.424151, -73.205854],
    [44.424071, -73.205476],
    [44.424004, -73.205208],
    [44.423908, -73.204930],
    [44.423826, -73.204638],
    [44.423719, -73.204246],
    [44.423696, -73.203801],
    [44.423713, -73.203557],
    [44.423734, -73.203254],
    [44.423749, -73.203010],
    [44.423799, -73.202672],
    [44.423813, -73.202565],
    [44.424012, -73.202592],
    [44.424386, -73.202675],
    [44.424574, -73.202694],
    [44.424593, -73.202532],
    [44.424627, -73.202173],
    [44.424658, -73.201806],
    [44.424692, -73.201361],
    [44.424692, -73.200648],
    [44.424721, -73.199790],
    [44.424734, -73.199109],
    [44.424724, -73.198653],
    [44.425015, -73.198728],
    [44.425442, -73.198819],
    [44.425777, -73.198883],
    [44.426241, -73.198923],
    [44.426559, -73.198974],
    [44.426599, -73.198660],
    [44.426645, -73.198250],
    [44.426702, -73.197732],
    [44.426733, -73.197359],
    [44.426779, -73.196884],
    [44.426836, -73.196444 ],
    [44.426882, -73.195926],
    [44.426916, -73.195577],
    [44.426962, -73.195110],
    [44.427008, -73.194681],
    [44.427035, -73.194335]
  ])


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
            if(!arr[j]['height'] === arr[j-1]['height']){

            } else {
                builtArr.push(arr[j])
            }
        }
    }
    //console.log("Built array = " + builtArr.length)
    console.dir(builtArr, {'maxArrayLength': null} )
    return builtArr
}

module.exports = {
    getMapPolyline: getMapPolyline,
    getLatLong: getLatLong
}