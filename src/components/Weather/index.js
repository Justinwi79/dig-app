import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = ({ apiKey, defaultCity, defaultCountry }) => {
  const [weather, setWeather] = useState(null);

  
  useEffect(() => {
    const fetchWeather = async (latitude, longitude) => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`
        );

        setWeather(response.data);
      } catch (error) {
        console.error('Error fetching weather:', error);
      }
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchWeather(latitude, longitude);
        },
        (error) => {
          console.error('Error getting geolocation:', error);
          fetchWeather(defaultCity, defaultCountry);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
      fetchWeather(defaultCity, defaultCountry);
    }
  }, [apiKey, defaultCity, defaultCountry]);

  return (
    <div>
      {weather && (
        <p>
            <div>Today's Weather: {weather.weather[0].description}</div>
            <div>Currently: {weather.main.temp}°F</div>
            <div>High/Low: {weather.main.temp_max}°F/{weather.main.temp_min}°F</div>
            <div>Dew Point: {(weather.main.temp - weather.main.humidity / 2).toFixed(2)}°F</div>
            <div>Humidity: {weather.main.humidity}%</div>

        </p>
      )}
    </div>
    
  );
};

Weather.defaultProps = {
  defaultCity: '35.2271', 
  defaultCountry: '80.8431', 
};

export default Weather;
