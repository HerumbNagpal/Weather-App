import React, { useEffect, useState } from "react";
import './styles.css';
import axios from "axios";



function App() {

  const [data,setData] = useState(null)

  const [inputCity,setInputCity] = useState("")

  const apiKey = "61eb58127e7bc22e2114ad9a6f01ed85";

  const getWeather = (region) => {
    if(!region){
      return
    }
    
    const apiURL = "https://api.openweathermap.org/data/2.5/weather?q="+ region+"&appid=" + apiKey;
    axios.get(apiURL).then((res) =>{
      console.log("Respone" , res)
      
      setData(res.data)
    }).catch((err)=>{
        alert("NOT FOUND")
      console.log("ERR",err)
    })
  }

  const handleInput = (event) => {
    console.log(event.target.value)
    setInputCity(event.target.value)
  } 

  const handleSearch = () => {
    getWeather(inputCity)
    console.log("clicked search")
  }

  useEffect(()=>{
    getWeather(inputCity)
  },[])



  return (
    <div className="col-md-12">
      <div className="weatherBg">
        <div className=" q">
            <input className="inp" type="text" placeholder="Enter City Name"
              onChange={handleInput}
              value = {inputCity}
            />
            <button className="btn btn-primary" 
             type="button"
             onClick={handleSearch} 
            
            >Search... </button>
        
        </div>
      </div>

      <div className="col-md-12">
        <div className="shadow round weatherResult" >
          <div className="abc">
            <img  className="weatherIcon" src="https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png" />
            <div className="xyz">
            <p className="redDot">🔴</p>
            <h1 className="live"> Live weather</h1>

            </div>
          </div>
          <div className="results" >
            <div className="dta">
                {data?<>
                  <h1 className="regionSearch" > {data?.name}  </h1>
              <h3 className="temp"> {(data?.main?.temp - 273).toFixed(1)} °C</h3>
               {data?.weather?.map((w,index) => {
                return <p className="desc" key={index}>
                  {w.description}
                </p>
              })}
                </>:"Enter City Name to get weather forecast"} 
                </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;