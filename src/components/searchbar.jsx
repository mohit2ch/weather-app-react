import React from 'react';
import { FaSearch } from "react-icons/fa";
import { useRef } from 'react';
import axios from 'axios';
import { useWeatherContext } from '../store/store';

export default function SearchBar(props) {
    const {weather, setWeather} = useWeatherContext();
    const keyword = useRef("");
    async function submitHandler(event){
        event.preventDefault();
        const city = keyword.current.value;
        if(city.length < 4){
            alert("Enter more than 3 characters");
            return;
        }
        try{
            const data = await axios(`https://api.weatherapi.com/v1/forecast.json?key=c96db19cac8643199b4112544220305&q=${city}&days=1&aqi=yes&alerts=yes/`);
            if(data.status>=400){
                throw new Error(data.response);
            }
            
            setWeather(data.data);
            console.log(weather);
        } catch(err) {
            console.log(err);
        }
    }
    return (
        <form onSubmit={submitHandler}>
            <input type="text" placeholder='city' ref={keyword}/>
            <button><FaSearch /></button>
        </form>
    );
}

