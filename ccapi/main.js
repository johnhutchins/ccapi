const fetch = require("node-fetch")

const BASE_URL = 'https://www.strava.com/api/v3/'
const TEST_URL = 'localhost:5000/index'

async function getActivity(){
    //TODO grab acitivyId from somewhere
    fetch(TEST_URL)
    .then(json => console.log(json))
}

getActivity()
