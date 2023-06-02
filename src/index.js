import './style.scss';

const get = (() => {

    const city = document.getElementById('city-name');
    const searchBar = document.getElementById('searchbar');
    const searchBtn = document.getElementById('search-btn');
    const weatherIcon = document.getElementById('weather-icon');
    const condition = document.getElementById('condition');
    const temp = document.getElementById('temp');
    const humidity  = document.getElementById('humidity');
    const chanceOfRain = document.getElementById('rain');
    const wind = document.getElementById('wind');
    const weeklyForecast = document.getElementById('weekly-forecast');

    return {
        city,
        searchBar,
        searchBtn,
        weatherIcon,
        condition,
        temp,
        humidity,
        chanceOfRain,
        wind,
        weeklyForecast,
    }

})();


const getWeather = async () => {
    try {
    const location = 'Oslo'
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=5cc78e0155574313a84110056233005&q=${location}`)
    const JSON = await response.json();

    const weatherObj = {
        location: JSON.location.name,
        temp: JSON.current.temp_c,
        tempFeelsLike: JSON.current.feelslike_c,
        condition: JSON.current.condition.text,
        humidity: JSON.current.humidity,
        wind: JSON.current.wind_mph,
        rain: JSON.current.precip_mm,
        isDay: JSON.current.is_day,
        conditionIcon: JSON.current.condition.icon
    }
    console.log(JSON)
    return{ weatherObj};
    } 
    catch(error) {
        console.log(error, 'error')
        return error;
    }
}

const getForecast = async () => {
    try {
        const location = 'oslo';
        const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=5cc78e0155574313a84110056233005&q=${location}&days=7`);
        const JSON = await response.json();
        
        const forecastObj = {
            forecastDays: JSON.forecast.forecastday
        }

        return {forecastObj}
    } catch(error) {
       return error
    }
}


const render = (async () => {
    const weather = await getWeather();
    const forecast = await getForecast();

    const setCity = (() => get.city.textContent = weather.weatherObj.location)();
    const setCondition = (() => get.condition.textContent = weather.weatherObj.condition)();
    const setHumidity = (()=> get.humidity.textContent = weather.weatherObj.humidity)();
    const setChanceOfRain = (()=> get.chanceOfRain.textContent = weather.weatherObj.rain + ' mm')();
    const setWind = (()=> get.wind.textContent = weather.weatherObj.wind + ' m/ph')();
    const setTemp = (() => get.temp.textContent = weather.weatherObj.temp)();

    const setIcon = (()=> get.weatherIcon.setAttribute.src = weather.weatherObj.conditionIcon)
    console.log(weather.weatherObj.conditionIcon)
        const forecastDays =  await forecast.forecastObj.forecastDays;
        forecastDays.forEach(day => {
      
           
            const date = new Date(day.date);
            const options = { weekday: 'long'};
          
            const dateEl = document.createElement('div');
            dateEl.id = 'date-element';
            dateEl.textContent = date.toLocaleDateString('en-EN', options);
       
            const weatherIcon = new Image();
            weatherIcon.src = day.day.condition.icon;

            const temp = document.createElement('div');
            temp.textContent = day.day.maxtemp_c + ' / ' + day.day.mintemp_c;

            dateEl.appendChild(weatherIcon)
            dateEl.appendChild(temp)
            get.weeklyForecast.appendChild(dateEl);
            
        })

})();