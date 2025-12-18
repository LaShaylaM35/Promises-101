let baseUrl = `https://api.open-meteo.com/v1/forecast?latitude=${currentWeather}&longitude=${currentWeather}&current_weather=true`;



async function currentWeather(){

    event.preventDefault()



    let longitude = document.getElementById("longitude").value;
    let latitude = document.getElementById("latitude").value;
    let url = `${baseUrl}${currentWeather}`;
    

    let response = await fetch(url);
    let data = await response.json();

    let currentWeather = document.getElementById("current_weather");
    currentWeather.textContent = `${data.current_weather}`;

    
}