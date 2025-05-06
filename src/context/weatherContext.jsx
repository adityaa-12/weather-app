import React, { createContext, useContext, useState } from "react";

// Creating a context

const WeatherContext = createContext();

// Creating a provider to wrap app

export const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);

  return (
    <WeatherContext.Provider value={{ weatherData, setWeatherData }}>
      {children}
    </WeatherContext.Provider>
  );
};

// Creating a custom hook to access the data

export const useWeather = () => useContext(WeatherContext);