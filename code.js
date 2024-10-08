const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '',
		'X-RapidAPI-Host': ''
	}
};

const getWeather = (city)=>{
    cityname.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then(response => {
        console.log(response)
        temp.innerHTML = response.temp
        temp2.innerHTML = response.temp
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        humidity2.innerHTML = response.humidity
        max_temp.innerHTML = response.max_temp
        min_temp.innerHTML = response.min_temp
        
        const sunriseTimestamp = response.sunrise;
        const sunriseDate = new Date(sunriseTimestamp * 1000);
        const sunriseHours = sunriseDate.getHours().toString().padStart(2, '0');
        const sunriseMinutes = sunriseDate.getMinutes().toString().padStart(2, '0');
        const sunriseSeconds = sunriseDate.getSeconds().toString().padStart(2, '0');
        const sunriseTime = `${sunriseHours}:${sunriseMinutes}:${sunriseSeconds}`;
        sunrise.innerHTML = sunriseTime;
        
        wind_degrees.innerHTML = response.wind_degrees
        wind_speed.innerHTML = response.wind_speed
        wind_speed2.innerHTML = response.wind_speed
        
    })
    .catch(err => console.error(err));
}

submit.addEventListener("click", (e)=>{
    e.preventDefault()
    getWeather(city.value)
})
