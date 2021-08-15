const axios = require("axios").default;
const router = require("express").Router();


var subscriptionKey = "c7ce45257dbd4132ba33765d773ba9b7";
var endpoint = "https://api.cognitive.microsofttranslator.com";


router.post("/axiosR", async (req, res) => {
    const language = req.body.language
    const translatorContainer = req.body.translatorContainer

  axios({
    baseURL: endpoint,
    url: "/translate",
    method: "post",
    headers: {
      "Ocp-Apim-Subscription-Key": subscriptionKey,
      "Content-type": "application/json; charset=UTF-8",
    },

    params: {
      "api-version": "3.0",
      from: 'en',
      to: language,
    },

    data: [
      {
        Text: translatorContainer, //from translator.handlebars=>translator.js
      },
    ],
    responseType: "json",

  }).then(function await (response) {

    const translatedText = JSON.stringify(response.data[0].translations[0].text)
    console.log(translatedText);
    
  //document.getElementById('#translatedText').innerHTML = translatedText;

  }).catch (function (err){
    console.log("error Message", err);
  });

});


module.exports = router;
