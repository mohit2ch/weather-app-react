import React from "react";
import { useWeatherContext } from "../store/store";
import { calcRatio, changeClockHour, TimeDifference } from "../utils";
import ExtraDetails from "./ExtraDetails";
import Sunbar from "./Sunbar";

function WeatherDetails(props) {
  /* 
    1 means Good
2 means Moderate
3 means Unhealthy for sensitive group
4 means Unhealthy
5 means Very Unhealthy
6 means Hazardous
    */
  const air_quality = [
    "N/A",
    "Good",
    "Moderate",
    "Unhealthy for sesitive group",
    "Unhealthy",
    "Very Unhealthy",
    "Hazardous",
  ];
  const { weather } = useWeatherContext();

  console.log(weather);
  const ratio = weather && calcRatio(weather.forecast.forecastday[0].astro.sunrise, weather.forecast.forecastday[0].astro.sunset, weather.location.localtime.substr(11));
  console.log(ratio);
  return (
    <div className="WeatherDetails">
      {!weather ? (
        <h2>Enter a city</h2>
      ) : (
        <div>
          <img
            className="WeatherIcon"
            src={weather.current.condition.icon}
            alt=""
          />

          <p>
            <span
              style={{
                fontSize: "1.8rem",
                fontWeight: "600",
                color: "rgb(53, 53, 53)",
              }}
            >
              {weather.location.name}
            </span>
            <br />
            <span style={{ color: "rgb(53, 53, 53)" }}>
              {weather.location.country}
            </span>
          </p>
          <div className="temperature">
            <h1>{Math.trunc(weather.current.temp_c)}</h1>
            <span>&deg;</span>
          </div>
          <p>
            {weather.current.condition.text}
            {}
          </p>
          <div className="day-report">
            <div>
              {weather.forecast.forecastday[0].day.mintemp_c}&deg; /{" "}
              {weather.forecast.forecastday[0].day.avgtemp_c}&deg; /{" "}
              {weather.forecast.forecastday[0].day.maxtemp_c}&deg;
            </div>
            <div>
              {weather.forecast.forecastday[0].day.daily_chance_of_rain}%
            </div>
            <div></div>
          </div>
          
          <ExtraDetails time={weather.location.localtime.substr(11)} uv={weather.current.uv} humidity={weather.current.humidity} aq={weather.current.air_quality["us-epa-index"]} feelslike={weather.current.feelslike_c} ap={weather.current.pressure_mb} />

          <Sunbar ratio={ratio} weather={weather}/>
        </div>
      )}
    </div>
  );
}

export default WeatherDetails;
