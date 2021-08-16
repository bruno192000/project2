const getTranslationPostFormHandler = async (event) => {
    event.preventDefault();

    const translatorContainer = document.querySelector('#textToTranslate').value.trim();

    const language = document.querySelector('#languageTo').value.trim();

    const response = await fetch('/api/axiosR/axiosR', {
        method: 'POST',
        body: JSON.stringify({
            translatorContainer,
            language,
         }),
        headers: { 'Content-Type': 'application/json' },
    })

    //console.log(translatedText);
    console.log("hello");
   
  
    //document.getElementById('#translatedText').innerHTML = translatedText;
}


document
.querySelector('#translate')
.addEventListener('click', getTranslationPostFormHandler);



