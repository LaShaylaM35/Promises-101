let baseUrl ="https://api.open-meteo.com/v1/current_weather.temperature/";



async function getWeather(){

    //event.preventDefault()



    let longitude = document.getElementById("longitude").value;
    let latitude = document.getElementById("latitude").value;
    let url = `${baseUrl}${getWeather}`;
    

    let response = await fetch(url);
    let data = await response.json();

    let currentWeather = document.getElementById("current_weather");
    currentWeather.textContent = `${data[0].current_weather}`;

    
}