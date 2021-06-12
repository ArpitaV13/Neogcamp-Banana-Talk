var button=document.querySelector('#button');
var txt=document.querySelector('#txtInput');





function clickEventHandler(){
    console.log('Clicked!');
    console.log(txt.value);
};
button.addEventListener("click",clickEventHandler)

