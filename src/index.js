import createDisplay from './display';

const content = document.getElementById('content');

const inputBox = document.getElementById('mainSearch');
inputBox.value = "London";

function hee(){
    console.log("hi!");
    content.removeChild(content.firstChild);
    createDisplay(content);
}
const x = document.getElementById('go');
x.addEventListener('click',hee());

createDisplay(content);


console.log('hellow')




