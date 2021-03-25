//import createDisplay from './display';

async function getWeatherData(){
    const apiKey = '51795dc4cf57da75b397e534ce9928f3';
    
    const weatherInfo = await fetch('https://api.openweathermap.org/data/2.5/weather?q=London&appid=' + apiKey, {mode: 'cors'});
    
    //console.log(weatherInfo);

    const data = await weatherInfo.json();
    //console.log(data);

    return data;
    
    

    
}


 function createDisplay(){
    const data = getWeatherData();

    const temperature = data.main.temp;
    const description = data.weather[0].description;

    const parent =  document.createElement('div');

    const tempDisplay = document.createElement('h1');
    tempDisplay.innerText('Temperature' + temperature);
    parent.appendChild(tempDisplay);

    const descriptionDisplay = document.createElement('h1');
    descriptionDisplay.innerText(description);
    parent.appendChild(descriptionDisplay);

    return parent;


}

const content = document.getElementById('content');

const display = createDisplay();

content.appendChild(display);



console.log('hellow')




