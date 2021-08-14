const axios = require('axios').default;
const { uuid } = require('uuidv4');

var subscriptionKey = "c7ce45257dbd4132ba33765d773ba9b7";
var endpoint = "https://api.cognitive.microsofttranslator.com";
//var location = "global";

// Add your location, also known as region. The default is global.
// This is required if using a Cognitive Services resource.


const getTranslationPostFormHandler = (event) => {
    console.log("translate!");
    event.preventDefault();

    axios({
        baseURL: endpoint,
        url: '/translate',
        method: 'post',
        headers: {
            'Ocp-Apim-Subscription-Key': subscriptionKey,
            'Ocp-Apim-Subscription-Region': location,
            'Content-type': 'application/json',
            'X-ClientTraceId': uuid().toString()
        },
        params: {
            'api-version': '3.0',
            'from': 'en',
            'to': ['de', 'it']
        },
        data: [{
            'text': 'Hello World!'
        }],
        responseType: 'json'

    }).then(function(response){
        console.log(JSON.stringify(response.data, null, 4));
    })

}

// Listens for user to select Submit
document
.querySelector('#translate')
.addEventListener('click', getTranslationPostFormHandler);