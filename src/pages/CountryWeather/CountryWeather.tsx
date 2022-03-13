import * as React from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchCountryData, fetchCountryWeatherData } from '../../services/services';
import CircularProgress from '@mui/material/CircularProgress';

const CountryWeather = () =>{

    type ParamsDT = {
        str: string 
    }

    type CountryDT = {
        capital: string[],
        population: number,
        latlng: number[],
        flags: {
            svg: string
        }
    }

    type WeatherDT = {
        temperature: number,
        weather_icons: string[],
        wind_speed: number,
        precip: number
    }

    const {str} = useParams<ParamsDT>();
    const [country, setCountry] = React.useState<CountryDT>()
    const [weather, setWeather] = React.useState<WeatherDT>()
    const [loading, setLoading] = React.useState<boolean>(false)
    const [weatherload, setWeatherload] = React.useState<boolean>(false)
    React.useEffect(()=>{
        fetchCountry();
    }, [])

    const fetchCountry = async () => {
        setLoading(true);

        if(str){
            const data = await fetchCountryData(str)
            setCountry(data.length > 1 ? data[2] : data[0]);
        }

        setLoading(false);
    }

    
    const handleWeaher : React.MouseEventHandler<HTMLButtonElement> = async () =>{
        setWeatherload(true);

        if(country){
            const data = await fetchCountryWeatherData(country.capital[0])
            setWeather(data.current);
        }

        setWeatherload(false);
    }

    return (
        <>
            <div data-testid="country-body" className='border-2 border-gray-200 w-1/4 p-5 mt-10 rounded-md shodow-md mx-auto'>
                {loading ? <div className='flex justify-center mt-10 mb-10'>
                    <CircularProgress />
                </div> :
                    country ? <div>
                    <img src={country.flags.svg} alt="" className='w-full h-48' />
                    <h4 className='text-xl font-semibold'>Capital City : {country.capital[0]}</h4>
                    <h4 className='text-lg font-semibold'>Population : {country.population}</h4>
                    <h4 className='text-lg font-semibold'>Latlng: 
                        {country.latlng.map((lat:number)=>(
                            <span> {lat} </span>
                        ))}
                    </h4>
                    
                </div>
                 : null}
                
                <br />
                <button onClick={handleWeaher} className='bg-red-100 py-1 px-3 rounded-md border-2 border-red-500 cursor-pointer'>Capital Weather</button>
            </div>
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