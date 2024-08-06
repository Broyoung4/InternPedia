import './App.css'
import React, { useState, useEffect } from 'react'
import { TiWeatherCloudy,TiWeatherDownpour, TiWeatherSunny, TiWeatherNight, TiWeatherShower,TiWeatherSnow, TiWeatherStormy, TiWeatherPartlySunny  } from "react-icons/ti";

import { WiHumidity } from "react-icons/wi";
import { FaWind } from "react-icons/fa";

export default function App() {
  //initializing states
  const [cityInput, setCityInput] = useState('');
  const [city, setCity] = useState('');

  const [temp, setTemp] = useState(0);
  const [humidity, setHumidity] = useState('');
  const [wind, setWind] = useState('');
  const [icon, setIcon] = useState(null);
  const [error, setError] = useState(false);
  const [date, setDate] = useState('');

  //handle onchange events
  const handleChange = (e) => {
    setCityInput(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    //fetching data from api
    const apiKey = 'acaaa3475d48d47200cf871d36a5f380';
		    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';
        const weatherFetch = async (city: string) => {
          const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
          const data = await response.json();
          console.log(data);
          setCity(data.name);
        
    if(data.cod === '404') {
      setError(true);
    } else {
      setError(false);
      setTemp(Math.round(Number(data.main.temp) - 273.15));
        setHumidity(data.main.humidity);
          setWind(data.wind.speed);
    
          let iconElement = null; // Create a variable to hold the icon
          if (data?.weather[0].main === 'Clouds') {
            iconElement = <TiWeatherCloudy size={130}/>; // Set the icon based on condition
          } else if (data?.weather[0].main === 'Rain') {
            iconElement = <TiWeatherDownpour size={130}/>; // Set the icon based on condition
          } else if (data?.weather[0].main === 'Clear') {
            iconElement = <TiWeatherSunny size={130}/>; // Set the icon based on condition
          } else if (data?.weather[0].main === 'Drizzle') {
            iconElement = <TiWeatherShower size={130}/>; // Set the icon based on condition
          } else if (data?.weather[0].main === 'Snow') {
            iconElement = <TiWeatherSnow size={130}/>; // Set the icon based on condition
          } else if (data?.weather[0].main === 'Thunderstorm') {
            iconElement = <TiWeatherStormy size={130}/>; // Set the icon based on condition
          } else {
            iconElement = <TiWeatherPartlySunny size={130}/>; //( Set the icon based on condition
          }
          
          setIcon(iconElement); // Pass the icon element to setIcon
          
        }
        weatherFetch(cityInput);
    //setCity(cityInput);
    setCityInput('')
        }
  }
  
  useEffect(() => {
           const intervalId = setInterval(() => {
               setDate(new Date().toLocaleString());
             }, 1000); // Update every 1000 milliseconds (1 second)
             // Cleanup: Clear the interval when the component unmounts
             return () => clearInterval(intervalId);
           }, []); 
 
   return (
    <main className='h-screen flex flex-col items-center justify-center'>
      <h1 className='sm:text-5xl text-4xl font-black capitalize'>Weather App</h1>
      <div className='w-[400px] flex flex-col items-center justify-center p-10 shadow-2xl mt-10 bg-white rounded-xl'>
        <form className='' onSubmit={handleSubmit}>
          <div className='flex justify-between items-center gap-4 mb-10'>
            <input type='text' value={cityInput} placeholder='Enter City Name' className='px-4 py-2 w-[80%]' onChange={handleChange}/>
            <button className='outline-0 px-4 py-2 bg-black text-white rounded-xl hover:text-black hover:bg-white border-2 hover:border-black' type='submit'>Search</button>
          </div>
          <div className='flex justify-center items-center gap-4'>
            
            {icon}
          </div>
          {error ? <p className='text-red-500'>City Not Found</p>
          : (
            <div>
              <div className='flex flex-col justify-center items-center gap-6 mb-10'>
                <h1 className='text-4xl font-black text-red-500'>{city==='' ? 'Unsearched' : city}</h1>
                <p className='text-xl'>{date}</p>
                <p className='text-3xl font-bold'>{temp === 0 ? '--': temp}°C</p>
              </div>
              <div className='flex justify-between items-center gap-4'>
                <div className='flex justify-center items-center'>
                  <WiHumidity size={50} />
                  <div className='flex flex-col'>
                    <p className='text-xl font-bold'>{humidity==='' ? '--': humidity}%</p>
                    <p className='text-base font-bold'>Humidity</p>
                  </div>
                </div>
                <div className='flex justify-center items-center gap-2'>
                  <FaWind size={50} />
                  <div className='flex flex-col'>
                    <p className='text-xl font-bold'>{wind==='' ? '--' : wind} Km/h</p>
                    <p className='text-base font-bold'>Wind Speed</p>
                  </div>
                </div>
              </div>
            </div>
          )
          }
          
        </form>
        
      </div>
    </main>
  )
}
