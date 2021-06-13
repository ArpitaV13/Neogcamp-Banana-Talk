var button=document.querySelector('#button');
var txt=document.querySelector('#txtInput');
var outTxt=document.querySelector('#output');
var serverUrl="https://api.funtranslations.com/translate/minion.json"


function errorHandler(error){
    console.log("Error ocurred",error)
    alert("Something wrong with server, Try again after sometime")
}


function getTranslationUrl(text){
    return serverUrl+"?"+"text="+text
}



function clickEventHandler(){

    var inputTxt=txt.value;
    fetch(getTranslationUrl(inputTxt))
    .then(response=>response.json())
    .then(json=>{
        var TranslatedText=json.contents.translated;
        outTxt.innerText=TranslatedText;
    })
    .catch(errorHandler)
};
button.addEventListener("click",clickEventHandler)

