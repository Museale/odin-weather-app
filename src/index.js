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
    const wrapper = document.getElementById('wrapper');

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
        wrapper
    }

})();


   get.searchBtn.addEventListener('click',() => {
    getWeather();
    getForecast();
    render();
   })

const getWeather = async () => {
    try {
    const location = get.searchBar.value;
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=5cc78e0155574313a84110056233005&q=${location}`)
    const JSON = await response.json();

    const weatherObj = {
        location: JSON.location.name,
        temp: JSON.current.temp_c,
        tempFeelsLike: JSON.current.feelslike_c,
        condition: JSON.current.condition.text,
        // condition: 'Rainy',
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

    if (get.weeklyForecast.hasChildNodes){
        const filteredWeekdays = Array.from(get.weeklyForecast.childNodes).filter(node => node.nodeType === node.ELEMENT_NODE);
        
        if(filteredWeekdays) {
            filteredWeekdays.forEach(child => 
            get.weeklyForecast.removeChild(child))
        }
    }
    try {
        const location = get.searchBar.value;
        const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=5cc78e0155574313a84110056233005&q=${location}&days=7`);
        const JSON = await response.json();
        
        const forecastObj = {
            forecastDays: JSON.forecast.forecastday
        }
        console.log(forecastObj)
        return {forecastObj}
    } catch(error) {
       return error
    }
}


const render = async () => {
    const weather = await getWeather();
    const forecast = await getForecast();
    const forecastDays =  await forecast.forecastObj.forecastDays;

    const setCity = (() => get.city.textContent = weather.weatherObj.location)();
    const setCondition = (() => get.condition.textContent = weather.weatherObj.condition)();
    const setHumidity = (()=> get.humidity.textContent = 'Humidity: ' + 
    weather.weatherObj.humidity)();
    const setChanceOfRain = (()=> get.chanceOfRain.textContent = weather.weatherObj.rain + ' mm')();
    const setWind = (()=> get.wind.textContent = weather.weatherObj.wind + ' m/ph')();
    const setTemp = (() => get.temp.textContent = weather.weatherObj.temp)();

    const setIcon = (()=> get.weatherIcon.src = `${weather.weatherObj.conditionIcon}`)();

    console.log(weather.weatherObj.conditionIcon)

   
        if (weather.weatherObj.isDay) {
            get.wrapper.classList = 'day';
        }
        else if (!weather.weatherObj.isDay) {
            get.wrapper.classList = 'night';
        }
        if (weather.weatherObj.condition == 'Sunny') {
            get.wrapper.classList.add('sunny');
        }
        if (weather.weatherObj.condition == 'Rainy') {
            get.wrapper.classList.add('rainy');
        }
        if (weather.weatherObj.condition == 'Cloudy' || weather.weatherObj.condition == 'Partly cloudy') {
            get.wrapper.classList.add('cloudy');
        }
        console.log(forecastDays)
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
};

// const forecastRender = async () => {
//     const forecast = await getForecast();
//     const forecastDays =  await forecast.forecastObj.forecastDays;
//     forecastDays.forEach(day => {
//         const date = new Date(day.date);
//         const options = { weekday: 'long'};
      
//         const dateEl = document.createElement('div');
//         dateEl.id = 'date-element';
//         dateEl.textContent = date.toLocaleDateString('en-EN', options);
   
//         const weatherIcon = new Image();
//         weatherIcon.src = day.day.condition.icon;

//         const temp = document.createElement('div');
//         temp.textContent = day.day.maxtemp_c + ' / ' + day.day.mintemp_c;
 
//             dateEl.appendChild(weatherIcon)
//             dateEl.appendChild(temp)
//             get.weeklyForecast.appendChild(dateEl);
        
 
        
//     })
// }
// forecastRender();
render();