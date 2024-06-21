const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temprature = document.querySelector('.temprature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');

const location_not_found = document.querySelector('.location-not-found');
const weather_boddy = document.querySelector('.weather-boddy');

async function checkweather(city){
    const api_key = "e5fa7af42b61435618da8ab767042275";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    
    const weather_data = await fetch(`${url}`).then(response => response.json());

    if(weather_data.cod === `404`){
        location_not_found.style.display = "flex";
        weather_boddy.style.display = "none";
        console.log("error")
        return;
    }

    location_not_found.style.display = "none";
    weather_boddy.style.display = "flex";

    temprature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed}km/h`;

    

    switch(weather_data.weather[0].main){
        case 'Clouds':
            weather_img.src = "10y2475l.bmp";
            break;
        case 'Clear':
            weather_img.src = "nt1m0ihn.bmp";
            break;
        case 'Rain':
            weather_img.src = "1d4wefgg.bmp";
            break;
        case 'Mist':
            weather_img.src = "ge320b7h.bmp";
            break;
        case 'Snow':
            weather_img.src = "ysz7rrlf.bmp";
            break;
    }
}



searchBtn.addEventListener('click', ()=>{
    checkweather(inputBox.value);
});