import React, {useState} from 'react';

const WeatherCard = ({weather}) => {

  const[showExtraInfo,setShowExtraInfo] = useState(false);

  const onClickHandler = (event) => {
    setShowExtraInfo(!showExtraInfo);
  }

  return (
    <div className='condition-container' onMouseEnter={onClickHandler} onMouseLeave = {onClickHandler}>
      <h2>{weather.weather[0].description}</h2>
      <img src = {`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt = {weather.weather[0].description}></img>
      <p>Current temp: {Math.round(weather.main.temp)}℃</p>
      <p>Feels like: {Math.round(weather.main.feels_like)}℃</p>
      <div className={`extra-info-container ${showExtraInfo ? "" : "hidden"}`}>
        <h3>Extra info</h3>
        <p className='min-max'>Min/max temp: {Math.round(weather.main.temp_min)}℃ / {Math.round(weather.main.temp_max)}℃</p>
        <p className='min-max'>Humidity: {weather.main.humidity}%</p>
        <p className='min-max'>Pressure: {weather.main.pressure}mb</p>
        <p className='min-max'>Wind direction: {weather.wind.deg}°</p>
        <p className='min-max'>Wind speed: {Math.round(weather.wind.speed)} km/h</p>
      </div>
    </div>
  );
}

export default WeatherCard;