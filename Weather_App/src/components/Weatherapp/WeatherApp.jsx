/* eslint-disable no-unused-vars */
import React,{useState} from 'react'
import search from "../Assests/search.png"
import clear from "../Assests/clear.png"
import drizzle from "../Assests/drizzle.png"
import cloud from "../Assests/cloud.png"
import rain from "../Assests/rain.png"
import wind from "../Assests/wind.png"
import snow from "../Assests/snow.png"
import high from "../Assests/high.png"
import low from "../Assests/low.png"
import prec from "../Assests/prec.png"
import atmos from "../Assests/atmos.jpg"
import humidity from "../Assests/humidity.png"

function WeatherApp() {
    const [weatherData, setWeatherData] = useState({
        humidity: "64",
        windSpeed: "8",
        temperature: "24",
        location: "London",
        High: "24",
        Low: "12",
        Precipitation: "70",
        AtmosphericPressure: "1010",
        Description: "Moderate Rain"

    });

    let api_key = "";

    const[wicon,setWicon]=useState(cloud);

    const searchWeather = async () => {
        const element = document.getElementsByClassName("cityInput");
        if (element[0].value === "") {
            return 0;
        }

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;

        let response = await fetch(url);
        let data = await response.json();

        setWeatherData({
            humidity: Math.floor(data.main.humidity),
            windSpeed: Math.floor(data.wind.speed),
            temperature: Math.floor(data.main.temp),
            location: data.name,
            High: Math.floor(data.main.temp_min),
            Low: Math.floor(data.main.temp_max),
            Precipitation: data.clouds.all,
            AtmosphericPressure: data.main.pressure,
            Description: data.weather[0].description
        });

        if(data.weather[0].icon==="01d" || data.weather[0].icon==="01n"){
            setWicon(clear);
        }
        else if(data.weather[0].icon==="02d" || data.weather[0].icon==="02n"){
            setWicon(cloud);
        }
        else if(data.weather[0].icon==="03d" || data.weather[0].icon==="03n"){
            setWicon(drizzle);
        }
        else if(data.weather[0].icon==="04d" || data.weather[0].icon==="04n"){
            setWicon(drizzle);
        }
        else if(data.weather[0].icon==="09d" || data.weather[0].icon==="09n"){
            setWicon(rain);
        }
        else if(data.weather[0].icon==="10d" || data.weather[0].icon==="10n"){
            setWicon(rain);
        }
        else if(data.weather[0].icon==="13d" || data.weather[0].icon==="13n"){
            setWicon(snow);
        }
        else{
            setWicon(clear);
        }

    }

    return (
        <div className='md:w-1/2 w-full h-auto m-auto mt-4 rounded-lg bg-gradient-to-b from-blue-950 to-blue-600'>
            <div className='flex justify-center gap-6 pt-8'>
                <input type="text" placeholder='Search' className='cityInput flex md:w-64 h-12 w-32 bg-white border-none outline-none rounded-2xl pl-8 text-gray-400 text-xl font-medium' />
                <div className='flex justify-center items-center w-12 h-12 bg-white rounded-full cursor-pointer'>
                    <img src={search} alt="" onClick={searchWeather} />
                </div>
            </div>
            <div className='mt-8 flex justify-center'>
                <img src={wicon} alt="" />
            </div>
            <div className=' weather-temp flex justify-center text-white text-6xl font-semibold'>{weatherData.temperature}&deg;C</div>
            <div className='weather-location flex justify-center text-white text-4xl font-medium'>{weatherData.location}</div>

            <div className='mt-12 text-white flex justify-center flex-col md:flex-row'>
                <div className='m-auto flex items-start gap-12'>
                    <img src={humidity} alt="" className='mt-3' />
                    <div className='text-2xl font-medium'>
                        <div className='humidity-per'>{weatherData.humidity}%</div>
                        <div className='text-xl font-medium text-violet-400'>Humidity</div>
                    </div>
                </div>
                <div className='m-auto flex items-start gap-12'>
                    <img src={wind} alt="" className='mt-3' />
                    <div className='text-2xl font-medium'>
                        <div className='wind-speed'>{weatherData.windSpeed} km/h</div>
                        <div className='text-xl font-medium text-cyan-500'>Wind Speed</div>
                    </div>
                </div>
            </div>


            <div className='mt-4 text-white flex justify-center flex-col md:flex-row'>
                <div className='m-auto flex items-start gap-12'>
                    <img src={high} alt="" className='mt-3' />
                    <div className='text-2xl font-medium'>
                        <div className='humidity-per text-white'>{weatherData.High}&deg;C</div>
                        <div className='text-xl text-red-400 font-medium'>High</div>
                    </div>
                </div>
                <div className='m-auto flex items-start gap-12'>
                    <img src={low} alt="" className='mt-3' />
                    <div className='text-2xl font-medium'>
                        <div className='wind-speed text-white'>{weatherData.Low}&deg;C</div>
                        <div className='text-xl text-green-400 font-medium'>Low</div>
                    </div>
                </div>
            </div>



            <div className='mt-4 text-white flex justify-center flex-col md:flex-row pb-6'>
                <div className='m-auto flex items-start gap-12'>
                    <img src={prec} alt="" className='mt-3' />
                    <div className='text-2xl font-medium'>
                        <div className='humidity-per text-white'>{weatherData.Precipitation}%</div>
                        <div className='text-xl text-orange-400 font-medium'>Precipitation</div>
                    </div>
                </div>
                <div className='m-auto flex items-start gap-12'>
                    <img src={atmos} alt="" className='mt-3' />
                    <div className='text-2xl font-medium'>
                        <div className='wind-speed text-white'>{weatherData.AtmosphericPressure}hPa</div>
                        <div className='text-xl text-orange-400 font-medium'>Atmospheric Pressure</div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default WeatherApp;