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
      fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=a2f52bd791bdfae7b687b23cf49cba0a`)
      .then((res) => res.json())
      .then((data) => {
        setLat(data[0].lat);
        setLong(data[0].lon);
      })
      .catch((err) => console.error(err));
    }
  },[city])

  return (
    <div>
      <input type= "text" placeholder='Enter a city name' value = {value} onChange = {inputFieldHandler}></input>
      <button onClick= {onClickHandler}>Search</button>
    </div>
  )
}

export default SearchInput