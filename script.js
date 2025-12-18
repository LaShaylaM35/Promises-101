



async function currentWeather(){

    event.preventDefault()



    let longitude = document.getElementById("longitude").value;
    let latitude = document.getElementById("latitude").value;
    let baseUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;
    

    let response = await fetch(baseUrl);
    let data = await response.json();

    let currentWeather = document.getElementById("current_weather");
    currentWeather.textContent = `Current Weather Is:${data.current_weather.temperature}`;

    
}