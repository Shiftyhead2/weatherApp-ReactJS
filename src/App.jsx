import React, {useState, useEffect} from 'react';
import './App.css';
import SearchInput from './components/SearchInput';
import WeatherList from './components/WeatherList';
import ForecastList from './components/Forecast/ForecastList';

function App() {

  const [lat,setLat] = useState(null);
  const [long,setLong] = useState(null);
  const [weather,setWeather] = useState(null);
  const [forecast,setForecast] = useState(null);


  useEffect(() => {
    getLocation();
  },[]);

  useEffect(() => {
    if(lat && long){
        getWeather();
        getForecast();
      }else{
        setWeather(null);
        setForecast(null);
      }
  },[lat,long]);

  const getWeather = async() => {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${process.env.REACT_APP_API}&units=metric`);
    const data = await res.json();
    setWeather(data);
  }

  const getForecast = async() => {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${process.env.REACT_APP_API}&units=metric&cnt=4`);
    const data = await res.json();
    setForecast(data);
  }

  const getLocation = () => {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(setLocation,errorMessage)
    }else{
      console.warn("Navigation is not supported for this browser");
    }
  }

  const setLocation = (position) => {
    setLat(position.coords.latitude);
    setLong(position.coords.longitude);
  }

  const errorMessage = (error) => {
    console.error(`Error code ${error.code}: ${error.message}`);
  }

  return (
    <>
       <h1>WeatherBoy</h1>
       <SearchInput setLat = {setLat} setLong = {setLong} />
       {weather ? <h2>Current weather for {weather.name}</h2> : <></>}
       <div className='container'>
          {weather ? <WeatherList weather = {weather}/> : <></>}
       </div>
       {forecast && weather ? <h2>Forecasted weather for {weather.name} today in hours</h2> : <></>}
       <div className='container'>
          {forecast ? forecast.list.map((current,index) => (
            <ForecastList weather={current} key = {index} />
          )) : <></>}
       </div>
    </>
  );
}

export default App;
