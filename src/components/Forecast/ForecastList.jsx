import React from 'react';
import ForecastCard from './ForecastCard';

const ForecastList = ({weather}) => {
  return (
    <div className='weather-container'>
      <ForecastCard weather={weather} />
    </div>
  );
}

export default ForecastList;