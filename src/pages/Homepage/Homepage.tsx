import React, { useState } from 'react';
import { fetchCountryData, fetchCountryWeatherData } from '../../services/services';


const Homepage = () =>{
    // const {state} = useLocation();
    // console.log(state.data)
    const [inputvalue, setInputvalue] = useState<string>("")
    const [country, setCountry] = useState<any>([])
    const [weather, setWeather] = useState<any>([])
    const handleInput = (e:any) =>{
        setInputvalue(e.target.value);
        // console.log(inputvalue);
    }

    const handleSubmit = async (e:any) =>{
        e.preventDefault();
        
        const response = await fetchCountryData(inputvalue);
        setCountry(response)
        setWeather([]);
        // console.log(response)
    }

    const handleWeaher = async () =>{
        const response = await fetchCountryWeatherData(country[0].capital)
        setWeather(response);
    }
    return (
        <div className='w-1/2 mx-auto'>
            <form data-test="input-form" onSubmit={(e)=>handleSubmit(e)} className="border-2 border-gray-200 w-1/2 p-5 mt-10 mx-auto rounded-md shodow-md">
                <label data-test="countryLable" htmlFor="" className='text-xl font-semibold'>Contry Name:</label> <br />
                <input data-test="country-input" type="text" name='country' placeholder='Enter country' onChange={(e)=>handleInput(e)} className="w-full mt-3" required/>
                {inputvalue ?
                <input data-test="submit-button" type="submit" value="Submit" className='bg-red-100 py-1 px-3 rounded-md mt-3 border-2 border-red-500 cursor-pointer' />:
                <input data-test="submit-button" type="submit" value="Submit" className='bg-red-50 py-1 px-3 rounded-md mt-3 border-2 border-red-200 text-gray-400' disabled />}
            </form>
            <div className='flex'>
                {country.length !== 0 ?
                <div className='border-2 border-gray-200 w-1/2 p-5 mt-10 rounded-md shodow-md'>
                    <br />
                    <img src={country[0]?.flags.png} alt="" className='w-full h-48' />
                    <h4 className='text-xl font-semibold'>Capital City : {country[0]?.capital}</h4>
                    <h4 className='text-lg font-semibold'>Population : {country[0]?.population}</h4>
                    <h4 className='text-lg font-semibold'>Latlng: 
                        {country[0]?.latlng.map((lat:number)=>(
                            <span> {lat} </span>
                        ))}
                    </h4>
                    <br />
                    {country.length !==0 ?<button onClick={handleWeaher} className='bg-red-100 py-1 px-3 rounded-md border-2 border-red-500 cursor-pointer'>Capital Weather</button>:null}
                </div>:null }
                {weather.length !== 0 ?
                <div className='border-2 border-gray-200 w-1/2 p-5 mt-10 rounded-md shodow-md ml-5'>
                    <br />
                    <img src={weather?.current?.weather_icons[0]} alt="" className='w-full h-48' />
                    <h4 className='text-lg font-semibold'>Temperature : {weather?.current?.temperature}</h4>
                    <h4 className='text-lg font-semibold'>Precip : {weather?.current?.precip}</h4>
                    <h4 className='text-lg font-semibold'>Wind Speed : {weather?.current?.wind_speed }</h4>
                </div>: null }
            </div>
        </div>
    )
}

export default Homepage;