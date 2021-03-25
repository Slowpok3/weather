//import getWeatherData from './data.js';

async function createDisplay(){
    const data = await getWeatherData();

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

//export default createDisplay;




