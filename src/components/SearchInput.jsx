import React , {useState,useEffect} from 'react'

const SearchInput = ({setLat,setLong}) => {

  const [value,setValue] = useState("");
  const[city,setCity] = useState("");

  const inputFieldHandler = (event) => {
    setValue(event.target.value)
  }

  const onClickHandler = (event) => {
    event.preventDefault();
    setCity(value);
    setValue("");
  }

  useEffect(() => {
    if(city.trim().length === 0){
  
    }else{
      fetchCity();
    }
  },[city])

  const fetchCity = async() => {
    const res = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${process.env.REACT_APP_API}`);
    const data = await res.json();
    setLat(data[0].lat);
    setLong(data[0].lon);
    setCity("");
  }

  return (
    <div className='form-input'>
      <input type= "text" placeholder='Enter a city name' value = {value} onChange = {inputFieldHandler}></input>
      <button onClick= {onClickHandler}>Search</button>
    </div>
  )
}

export default SearchInput