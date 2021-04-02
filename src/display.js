import getWeatherData from './data';

async function createDisplay(content){

    const parent =  document.createElement('div');
    


    const data = await getWeatherData();

    const tempDisplay = document.createElement('h1');

    const tempMode = document.getElementsByName('tempType');
    var temp = await data[0]-273;
    
    var a = await (tempMode[0].checked);

    if (a == true){
        temp = (data[0]-273);
    }else{
        temp = ( (data[0]-273)*(9/5) ) + 32;
    }
    //console.log(tempMode);
    console.log(Math.round(temp))

    tempDisplay.innerText = "Temperature: " + Math.round(temp)+ " degrees";
    parent.appendChild(tempDisplay);

    const descriptionDisplay = document.createElement('h1');
    descriptionDisplay.innerText = data[1];
    parent.appendChild(descriptionDisplay);

    content.append(parent);
    return parent;


}

export default createDisplay;




