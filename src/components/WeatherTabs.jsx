import React, { useState } from 'react';
import { useWeatherContext } from '../store/store';

function WeatherTabs(props) {
    const {isDetails, setIsDetails} = useWeatherContext();
    const [active, setActive] = useState(1);

    function clickHandler(tab){
        setIsDetails(tab===1);
        setActive(tab);
    }
    return (
        <div class='tabs'>
            <button className={`tab ${ active===1 && "tab-active"}`} onClick={()=>{clickHandler(1)}}>Summary</button>
            <button className={`tab ${ active===2 && "tab-active"}`} onClick={()=>{clickHandler(2)}}>Forecast</button>
        </div>
    );
}

export default WeatherTabs;