import getWeatherData from './data';

async function createDisplay(content){

    const parent =  document.createElement('div');
    
    const data = await getWeatherData();

    

    
    

    const tempDisplay = document.createElement('h1');
    tempDisplay.innerText = "Temperature" + data[0] + "degrees";
    parent.appendChild(tempDisplay);

    

    const descriptionDisplay = document.createElement('h1');
    descriptionDisplay.innerText = data[1];
    parent.appendChild(descriptionDisplay);

    content.append(parent);
    return parent;


}

export default createDisplay;




