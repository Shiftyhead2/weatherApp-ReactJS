import React from 'react';

const WeatherCard = ({weatherCurrent}) => {

  return (
    <div className='condition-container'>
      <h2>{weatherCurrent.name}</h2>
      <p>{Math.round(weatherCurrent.main.temp)}℃</p>
      <img src = {`https://openweathermap.org/img/wn/${weatherCurrent.weather[0].icon}.png`}></img>
      <p>{weatherCurrent.weather[0].description}</p>
    </div>
  );
}

export default WeatherCard;