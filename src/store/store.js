import { createContext, useContext, useState } from "react";

const WeatherContext = createContext(null);

export default function WeatherProvider({children}){
    const [weather, setWeather] = useState();
    const [isDetails, setIsDetails] = useState(true);
    return <WeatherContext.Provider value={{weather, setWeather, isDetails, setIsDetails}}>{children}</WeatherContext.Provider>
}

export function useWeatherContext(){
    return useContext(WeatherContext);
}