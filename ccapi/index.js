const fetch = require('node-fetch');
var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

//const BASE_URL = 'https://www.strava.com/api/v3/'
const TEST_URL = 'http://localhost:5000';

/* async function getActivity(){
    fetch(TEST_URL)
        .then(data => console.log(data))
}

getActivity() */

async function requestFetch(TEST_URL) {
  return fetch(TEST_URL)
    .then(response => response.json());
}

function requestAJAX(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      callback(JSON.parse(xhr.responseText));
    }
  };
  xhr.open('GET', url, true);
  xhr.send();
}

(async () => {
  console.log('The response is: ');
  const result = await requestFetch(TEST_URL);
  const smallerResult = {
    id: result['id'],
    external_id: result['external_id'],
  };
  console.log(smallerResult);
  return smallerResult;
})();
