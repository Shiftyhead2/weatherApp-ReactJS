import React from 'react';
import ExtraInfo from './ExtraInfo';
import SpanInfo from './SpanInfo';

const MainInfo = ({weather, showExtraInfo, getTemperature}) => {

  return (
    <>
      <h2>{weather.weather[0].description}</h2>
      <img src = {`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt = {weather.weather[0].description}></img>
      <p>Current temp: <SpanInfo temperature={Math.round(weather.main.temp)} getTemperature = {getTemperature}/></p>
      <p>Feels like: <SpanInfo temperature={Math.round(weather.main.temp)} getTemperature = {getTemperature}/></p>
      <ExtraInfo weather = {weather} showExtraInfo = {showExtraInfo} getTemperature = {getTemperature}/>
    </>
  );
}

export default MainInfo;