const fetch = require("node-fetch")

//const BASE_URL = 'https://www.strava.com/api/v3/'
const TEST_URL = 'http://localhost:5000'

async function getActivity(){
    fetch(TEST_URL)
        .then(response => response.json())
        .then(data => console.log(typeof data))
}
getActivity()

