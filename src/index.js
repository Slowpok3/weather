import createDisplay from './display';

const content = document.getElementById('content');

const inputBox = document.getElementById('mainSearch');
inputBox.value = "London";


createDisplay(content);

    
const x = document.getElementById('go');
x.addEventListener('click',function() {
    console.log("hi!");
    content.removeChild(content.firstChild);
    createDisplay(content);
});

const radios = document.getElementsByName("tempType");

radios[0].onclick = function(){
    console.log('hiaa');
    content.removeChild(content.firstChild);
    createDisplay(content);
};
radios[1].onclick = function(){
    console.log('hiaa');
    content.removeChild(content.firstChild);
    createDisplay(content);
};

// radios[0].addEventListener('onClick',function(){
//     console.log('hiaa');
//     content.removeChild(content.firstChild);
//     createDisplay(content);
// });



console.log('hellow')




