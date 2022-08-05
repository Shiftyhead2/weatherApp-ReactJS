import React from 'react';
import WeatherCard from './WeatherCard';

const WeatherList = ({weatherCurrent}) => {
  return (
    <div className='weather-container'>
      <WeatherCard weatherCurrent = {weatherCurrent} />
    </div>
  );
}

export default WeatherList;