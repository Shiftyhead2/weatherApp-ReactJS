import React from 'react';
import WeatherCard from './WeatherCard';

const WeatherList = ({weather}) => {
  return (
    <div className='weather-container'>
      <WeatherCard weather = {weather} />
    </div>
  );
}

export default WeatherList;