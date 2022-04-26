import CircularProgress from '@mui/material/CircularProgress';
import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchCountryWeatherData } from '../../services/services';

const CountryWeather = () =>{

    type CountryDT = {
        countryData: {
            capital: string[],
            population: number,
            latlng: number[],
            flags: {
                svg: string
            }
        }
    }

    type WeatherDT = {
        temperature: number,
        weather_icons: string[],
        wind_speed: number,
        precip: number
    }

    const [weather, setWeather] = React.useState<WeatherDT>()
    const [weatherload, setWeatherload] = React.useState<boolean>(false)
    const location = useLocation();
    const state = location.state as CountryDT;
    const { countryData } = state;

    
    const handleWeather : React.MouseEventHandler<HTMLButtonElement> = async () =>{
        setWeatherload(true);

        if(countryData){
            const data = await fetchCountryWeatherData(countryData.capital[0])
            setWeather(data.current);
        }

        setWeatherload(false);
    }

    return (
        <>
            {countryData ? 
            <div data-testid="country-body" className='border-2 border-gray-200 w-1/4 p-5 mt-10 rounded-md shodow-md mx-auto'>
                <img src={countryData.flags.svg} alt="" className='w-full h-48' />
                <h4 className='text-xl font-semibold'>Capital City : {countryData.capital[0]}</h4>
                <h4 className='text-lg font-semibold'>Population : {countryData.population}</h4>
                <h4 className='text-lg font-semibold'>Latlng: 
                    {countryData.latlng.map((lat:number)=>(
                        <span key={lat}> {lat} </span>
                    ))}
                </h4>
                <br />
                <button onClick={handleWeather} className='bg-red-100 py-1 px-3 rounded-md border-2 border-red-500 cursor-pointer'>Capital Weather</button>
            </div>: null}
                
            {weather ?
            <div className='border-2 border-gray-200 w-1/4 p-5 mt-10 mb-10 rounded-md shodow-md mx-auto'>
                <br />
                <img src={weather.weather_icons[0]} alt="" className='w-full h-48' />
                <h4 className='text-lg font-semibold'>Temperature : {weather.temperature}</h4>
                <h4 className='text-lg font-semibold'>Precip : {weather.precip}</h4>
                <h4 className='text-lg font-semibold'>Wind Speed : {weather.wind_speed }</h4>
            </div>: 
                <div className='flex justify-center mt-20 mb-10'>
                    {weatherload? <CircularProgress />:null}
                </div>
            }
            <div className='flex justify-center mb-16'>
                <Link to="/" className='bg-red-100 py-1 px-3 rounded-md border-2 border-red-500 cursor-pointer '>Back to Home</Link>
            </div>
        </>
    )
}

export default CountryWeather;