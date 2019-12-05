
const fetch = require('node-fetch');

//const BASE_URL = 'https://www.strava.com/api/v3/'
const TEST_URL = 'http://localhost:5000'

async function requestFetch(TEST_URL) {
  return fetch(TEST_URL)
    .then(response => response.json())
}

(async () => {
  console.log('The response is: ')
  const result = await requestFetch(TEST_URL)
  const smallerResult = {
    id: result['id'],
    external_id: result['external_id'],
  };
  console.log(smallerResult)
  return smallerResult
})();

