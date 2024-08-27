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
  const [icon, setIcon] = useState<any>(null);
  const [error, setError] = useState(false);
  const [date, setDate] = useState('');
  const [cachedData, setCachedData] = useState<any>(null); 
  
  //handle onchange events
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCityInput(e.target.value);
  }

  //handle submit event
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //FETCHING DATA FROM API

    //api variables
    const apiKey = import.meta.env.VITE_OPEN_WEATHER_API_KEY;
    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';
        //weather fetch function
        const weatherFetch = async (city: string) => {
          if (cachedData && cachedData.name === city) {
            // Data is in cache, use it!
            handleWeatherData(cachedData);
            return; 
          }

          try {
          const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
          const data = await response.json();
          console.log(data);
            handleWeatherData(data);
            setCachedData(data);
          } catch (error) {
              setError(true);
            }
          };
        weatherFetch(cityInput);
          setCityInput('');
        };

  
    const handleWeatherData = (data: any) => {
      setCity(data.name);
      setTemp(Math.round(Number(data.main.temp) - 273.15));
      setHumidity(data.main.humidity);
      setWind(data.wind.speed);
      setIcon(getIconElement(data.weather[0].main));
    };

  
    const getIconElement = (condition: string) => {
      let iconElement = null;
      if (condition === 'Clouds') {
        iconElement = <TiWeatherCloudy size={130} />;
      } else if (condition === 'Rain') {
        iconElement = <TiWeatherDownpour size={130} />;
      } else if (condition === 'Clear') {
        iconElement = <TiWeatherSunny size={130} />;
      } 
      return iconElement;
    };

    
          
  
  //useEffect for Date and time
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
        <form action='' onSubmit={handleSubmit}>
          <div className='flex justify-between items-center gap-4 mb-10'>
            <input type='text' value={cityInput} placeholder='Enter City Name' className='px-4 py-2 w-[80%]' onChange={handleChange}/>
            <button className='outline-0 px-4 py-2 bg-black text-white rounded-xl hover:text-black hover:bg-white border-2 hover:border-black' type='submit'>Search</button>
          </div>
          
          {error ? <p className='text-red-500'>City Not Found</p>
          : (
            <div>
              <div className='flex justify-center items-center gap-4'>
                {icon}
              </div>
              <div className='flex flex-col justify-center items-center gap-6 mb-10'>
                <h1 className='text-4xl font-black text-red-500'>{city==='' ? 'Waiting for input..' : city}</h1>
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
