import React, { useState } from "react";
import axios from "axios";

export default function SearchEngine() {
    let [weather, setWeather] = useState({});
    let [loaded, setLoaded] = useState(false);
    let [city, setCity] = useState("");

    function displayCurrentWeather(response) {
        setLoaded(true)
        setWeather({
            temperature: response.data.main.temp,
            description: response.data.weather[0].description,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
        let apiKey = "55a287616385559356e729db796a24f8";
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(url).then(displayCurrentWeather);
        console.log(url);
    }

    function updateCity(event) {
        setCity(event.target.value);
    }

    let form = (
        <form onSubmit={handleSubmit}>
            <input type="search" placeholder="Enter city.." onChange={updateCity}/>
            <button type="Submit">Search</button>
        </form>
    )

    let currentWweather = (
        <ul>
            <li>Temperature: {Math.round(weather.temperature)}</li>
            <li>Description: {weather.description}</li>
            <li>Humidity: {weather.humidity}%</li>
            <li>Wind: {Math.round(weather.wind)}</li>
            <li>
                <img src={weather.icon} alt={weather.description}/>
            </li>
        </ul>
    )


    if (loaded) {    
    return (
        <div className="SearchEngine">
         {form}
         {currentWweather}
         </div>
    )
} else {
    return form;
}
}