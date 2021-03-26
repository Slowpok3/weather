async function getWeatherData(){
    const apiKey = '51795dc4cf57da75b397e534ce9928f3';
    
    const weatherInfo = await fetch('https://api.openweathermap.org/data/2.5/weather?q=London&appid=' + apiKey, {mode: 'cors'});
    
    //console.log(weatherInfo);

    const data = await weatherInfo.json();
    //console.log(data);

    const temperature = data.main.temp;
    const description = data.weather[0].description;

    const attributes = [];
    attributes.push(temperature);
    attributes.push(description);

    return attributes;
    
    

    
}

export default getWeatherData;
