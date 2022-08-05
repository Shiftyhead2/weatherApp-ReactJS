import React, {useState, useEffect} from 'react';
import './App.css';
import SearchInput from './components/SearchInput';
import WeatherList from './components/WeatherList';

function App() {

  const [lat,setLat] = useState(null);
  const [long,setLong] = useState(null);
  const[weather,setWeather] = useState([]);

  useEffect(() => {
    getLocation();
  },[]);

  useEffect(() => {
    if(lat && long){
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${process.env.REACT_APP_API}&units=metric`)
      .then((res) => res.json())
      .then((data) => {
        setWeather(data);
      })
      .catch((err) => console.error(err));
      }else{
        setWeather([]);
      }
  },[lat,long]);

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
       <div className='container'>
          {Object.keys(weather).length > 0 ? <WeatherList weatherCurrent = {weather}/> : <div></div>}
       </div>
    </>
  );
}

export default App;
