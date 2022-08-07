import React from 'react'
import SpanInfo from './SpanInfo';

const ExtraInfo = ({weather,showExtraInfo ,getTemperature}) => {

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

  return (
    <div className={`extra-info-container ${showExtraInfo ? "" : "hidden"}`}>
        <h3>Extra info</h3>
        <p className='min-max'>Min/max temp: <SpanInfo temperature={Math.round(weather.main.temp_min)} getTemperature = {getTemperature} /> / <SpanInfo temperature={Math.round(weather.main.temp_max)} getTemperature = {getTemperature} /></p>
        <p className='min-max'>Humidity: {weather.main.humidity}%</p>
        <p className='min-max'>Pressure: {weather.main.pressure}mb</p>
        <p className='min-max'>Wind direction: {weather.wind.deg}° {getWindDirection(weather.wind.deg)}</p>
        <p className='min-max'>Wind speed: {Math.round(weather.wind.speed)} km/h</p>
    </div>
  )
}

export default ExtraInfo