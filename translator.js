const axios = require('axios').default;
const { v4: uuidv4 } = require('uuid');
const curl = require('curl-request');


var subscriptionKey = "ee777f882f1740f9bcafb1d1eac61656";
var endpoint = "https://api.cognitive.microsofttranslator.com";

// Add your location, also known as region. The default is global.
// This is required if using a Cognitive Services resource.
var location = "eastus";

axios({
    baseURL: endpoint,
    url: '/translate',
    method: 'post',
    headers: {
        'Ocp-Apim-Subscription-Key': subscriptionKey,
        'Ocp-Apim-Subscription-Region': location,
        'Content-type': 'application/json',
        'X-ClientTraceId': uuidv4().toString()
    },
    params: {
        'api-version': '3.0',
        // 'from': 'en',
        'to': (`${dropdown}`)
    },
    data: [{
        'text': (`${data}`)
    }],
    responseType: 'json'
}).then(function(response){
    console.log(JSON.stringify(response.data, null, 4));
    showTranslation()});

const showTranslation = () => {
   const translatorContainer = document.getElementById('translated').innerHTML;
   var render = handlebars.compile(translatorContainer);
   document.getElementById('text') = render(data);
}