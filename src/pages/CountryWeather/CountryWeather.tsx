import * as React from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchCountryData, fetchCountryWeatherData } from '../../services/services';
import CircularProgress from '@mui/material/CircularProgress';

const CountryWeather = () =>{
    const {str} :any = useParams();
    const [country, setCountry] = React.useState<any>([])
    const [weather, setWeather] = React.useState<any>([])
    const [loading, setLoading] = React.useState<boolean>(false)
    React.useEffect(()=>{
        const fetchData = async () =>{
            const response = await fetchCountryData(str);
            setCountry(response);
        }
        fetchData();
    }, [])
    const handleWeaher : React.MouseEventHandler<HTMLButtonElement> = async () =>{
        setLoading(true);
        const response = await fetchCountryWeatherData(country[0].capital);
        setWeather(response);
        setLoading(false)
    }
    return (
        <>
            <div className='border-2 border-gray-200 w-1/4 p-5 mt-10 rounded-md shodow-md mx-auto'>
                <img src={country[0]?.flags.png} alt="" className='w-full h-48' />
                <h4 className='text-xl font-semibold'>Capital City : {country[0]?.capital}</h4>
                <h4 className='text-lg font-semibold'>Population : {country[0]?.population}</h4>
                <h4 className='text-lg font-semibold'>Latlng: 
                    {country[0]?.latlng.map((lat:number)=>(
                        <span> {lat} </span>
                    ))}
                </h4>
                <br />
                <button onClick={handleWeaher} className='bg-red-100 py-1 px-3 rounded-md border-2 border-red-500 cursor-pointer'>Capital Weather</button>
            </div>
            {weather.length !== 0 ?
            <div className='border-2 border-gray-200 w-1/4 p-5 mt-10 mb-10 rounded-md shodow-md mx-auto'>
                <br />
                <img src={weather?.current?.weather_icons[0]} alt="" className='w-full h-48' />
                <h4 className='text-lg font-semibold'>Temperature : {weather?.current?.temperature}</h4>
                <h4 className='text-lg font-semibold'>Precip : {weather?.current?.precip}</h4>
                <h4 className='text-lg font-semibold'>Wind Speed : {weather?.current?.wind_speed }</h4>
            </div>: 
                <div className='flex justify-center mt-20 mb-10'>
                    {loading? <CircularProgress />:null}
                </div>
            }
            <div className='flex justify-center mb-16'>
                <Link to="/" className='bg-red-100 py-1 px-3 rounded-md border-2 border-red-500 cursor-pointer '>Back to Home</Link>
            </div>
        </>
    )
}

export default CountryWeather;