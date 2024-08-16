import React from "react";
import { useWeatherContext } from "../store/store";
import { FaTemperatureHigh } from "react-icons/fa";

function WeatherForecast(props) {
  const { weather } = useWeatherContext();
  return (
    <div className="WeatherForecast">
      {weather ? (
        <ul className="hourly-forecast">
          {weather.forecast.forecastday[0].hour.map(function (ele, index) {
            return (
              <li key={index}>
                <span>{ele.time.substr(11)}</span>
                <div>
                  <img src={ele.condition.icon} alt="" />
                  <span>{ele.chance_of_rain}%</span>
                </div>
                <div>
                    <FaTemperatureHigh style={{height:'32px', margin:'0 4px'}}/>
                    <span>{Math.trunc(ele.temp_c)}</span>
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <></>
      )}
    </div>
  );
}

export default WeatherForecast;
