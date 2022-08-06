import React, {useState} from 'react';

const WeatherCard = ({weather}) => {

  const[showExtraInfo,setShowExtraInfo] = useState(false);

  const onClickHandler = (event) => {
    setShowExtraInfo(!showExtraInfo);
  }

  const getWindDirection = (wind) => {
    if(wind >= 45 && wind < 89){
      return "NE";
    }else if(wind >= 90 && wind < 134){
      return "E";
    }else if(wind >= 135 && wind < 179){
      return "SE";
    }else if(wind >= 180 && wind < 224){
      return "S";
    }else if(wind >= 225 && wind < 269){
      return "SW";
    }else if(wind >= 270 && wind < 314){
      return "W";
    }else if(wind >= 315 && wind < 359){
      return "NW";
    }else if(wind >= 0 || wind === 360){
      return "N";
    }
  }

  const getTemperature = (temp) => {
    if(temp <= 0){
      return 'extremeCold';
    }else if(temp >= 0 && temp <= 18){
      return 'cold';
    }else if(temp >= 18 && temp <= 25){
      return 'slightyWarm';
    }else if(temp >= 25 && temp <= 30){
      return 'warm';
    }else if(temp >= 30 && temp <= 35){
      return 'hot';
    }else if(temp > 35){
      return 'extremeHot';
    }
  }

  return (
    <div className='condition-container' onMouseEnter={onClickHandler} onMouseLeave = {onClickHandler}>
      <h2>{weather.weather[0].description}</h2>
      <img src = {`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt = {weather.weather[0].description}></img>
      <p>Current temp: <span className= {getTemperature(Math.round(weather.main.temp))}>{Math.round(weather.main.temp)}℃</span></p>
      <p>Feels like: <span className= {getTemperature(Math.round(weather.main.temp))}>{Math.round(weather.main.feels_like)}℃</span></p>
      <div className={`extra-info-container ${showExtraInfo ? "" : "hidden"}`}>
        <h3>Extra info</h3>
        <p className='min-max'>Min/max temp: <span className= {getTemperature(Math.round(weather.main.temp))}>{Math.round(weather.main.temp_min)}℃ </span>/ <span className= {getTemperature(Math.round(weather.main.temp))}>{Math.round(weather.main.temp_max)}℃</span></p>
        <p className='min-max'>Humidity: {weather.main.humidity}%</p>
        <p className='min-max'>Pressure: {weather.main.pressure}mb</p>
        <p className='min-max'>Wind direction: {weather.wind.deg}° {getWindDirection(weather.wind.deg)}</p>
        <p className='min-max'>Wind speed: {Math.round(weather.wind.speed)} km/h</p>
      </div>
    </div>
  );
}

export default WeatherCard;