import React, {useState} from 'react';
import MainInfo from './MainInfo';

const WeatherCard = ({weather}) => {

  const[showExtraInfo,setShowExtraInfo] = useState(false);

  const onClickHandler = (event) => {
    event.preventDefault();
    setShowExtraInfo(!showExtraInfo);
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
    <div className='condition-container' onClick={onClickHandler}>
      <MainInfo weather = {weather} showExtraInfo = {showExtraInfo} getTemperature = {getTemperature}/>
    </div>
  );
}

export default WeatherCard;