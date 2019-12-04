const fetch = require("node-fetch")

const BASE_URL = 'https://www.strava.com/api/v3/'

async function getActivity(){
    //TODO grab acitivyId from somewhere
    fetch(BASE_URL + '98765432123456789')
    .then(json => console.log(json))
}

getActivity()
