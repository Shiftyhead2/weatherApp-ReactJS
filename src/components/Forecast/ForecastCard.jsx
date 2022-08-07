import React from 'react';
import SpanInfo from '../SpanInfo';

const ForecastCard = ({weather}) => {

  let date = new Date(weather.dt * 1000);
  let hours = date.getHours();
  let minutes = "0" + date.getMinutes();
  


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

  const getCorrectTime = (time) => {
    if(time === 2){
      return time = "00";
    }else{
      return time = time - 2;
    }
  }

  const getAMOrPM = (time) => {
    if(time >= 0 && time <= 12){
      return "AM";
    }else if(time >= 12 && time !== 0){
      return "PM";
    }
  }

  return (
    <div className='condition-container'>
      <h3>Time: {getCorrectTime(hours)}:{minutes} {getAMOrPM(hours)}</h3>
      <h3>Weather: {weather.weather[0].description}</h3>
      <img src = {`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt = {weather.weather[0].description}></img>
      <p>Temperature: <SpanInfo getTemperature={getTemperature} temperature = {Math.round(weather.main.temp)}/></p>
    </div>
  );
}

export default ForecastCard;