import React from "react";
import axios from "axios";

export default function SearchEngine() {
    
//https://openweathermap.org/img/wn/10d@2x.png
    function handleSubmit(event) {
        event.preventDefault();
        let apiKey = "55a287616385559356e729db796a24f8";
        let url = `https://api.openweathermap.org/data/2.5/weather?q=Bridgetown&appid=${apiKey}&units=metric`;
        axios.get(url);
        console.log(url);
    }

    let form = (
        <form onSubmit={handleSubmit}>
            <input type="search" placeholder="Enter city.."/>
            <button type="Submit">Search</button>
        </form>
    )

    return form;
}