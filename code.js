const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0ba6e5c700msh570ddbd640059b3p1ebad5jsn80e540c62209',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
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
        
        // Convert sunrise timestamp to human-readable time
        const sunriseTimestamp = response.sunrise;
        const sunriseDate = new Date(sunriseTimestamp * 1000);
        const sunriseTime = sunriseDate.toLocaleTimeString();
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
