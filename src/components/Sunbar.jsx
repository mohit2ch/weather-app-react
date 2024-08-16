import React from 'react';
import { FaSun, FaMoon } from "react-icons/fa";
import { FiSunrise, FiSunset } from "react-icons/fi";
import { calcRatio, isDay } from '../utils';

function Sunbar({weather}) {
    const day = isDay(weather.forecast.forecastday[0].astro.sunrise,weather.forecast.forecastday[0].astro.sunset,  weather.location.localtime.substr(11) );
    
    const ratio = day?calcRatio(weather.forecast.forecastday[0].astro.sunrise, weather.forecast.forecastday[0].astro.sunset, weather.location.localtime.substr(11)):calcRatio(weather.forecast.forecastday[0].astro.sunset, weather.forecast.forecastday[0].astro.sunrise, weather.location.localtime.substr(11));
    
    return (
        <div className="sunbar">
            <div id="day-icon">
              {day? (<FaSun
                style={{
                  height: "1.5rem",
                  width: "1.5rem",
                  color: "yellow",
                  position: "relative",
                  left: `calc(${100*ratio}% - ${24*ratio}px)`
                }}
              />):(<FaMoon
                style={{
                  height: "1.5rem",
                  width: "1.5rem",
                  color: "white",
                  position: "relative",
                  left: `calc(${100*ratio}% - ${24*ratio}px)`
                }}
              />)}
            </div>
            <div id="sunbar-measure" style={{flexDirection:day?'row':'row-reverse'}}>
              <div>
                <FiSunrise style={{height: "1.5rem",
                  width: "1.5rem",}}/>
                <br/>
                {weather.forecast.forecastday[0].astro.sunrise}
              </div>
              <div>
                <FiSunset style={{height: "1.5rem",
                  width: "1.5rem",}}/>
                <br/>
                {weather.forecast.forecastday[0].astro.sunset}
              </div>
            </div>
          </div>
    );
}

export default Sunbar;