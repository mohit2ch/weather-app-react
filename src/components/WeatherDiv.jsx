import React from 'react';
import SearchBar from './searchbar';
import WeatherDetails from './WeatherDetails';
import WeatherForecast from './WeatherForecast';
import WeatherTabs from './WeatherTabs';
import { useWeatherContext } from '../store/store';


function WeatherDiv(props) {
    const {weather, isDetails} = useWeatherContext();
    return (
        <div className='container'> 
            <SearchBar/>
            
            {weather && <WeatherTabs/>}
            {isDetails?<WeatherDetails/>:
            <WeatherForecast/>}
        </div>
    );
}

export default WeatherDiv;