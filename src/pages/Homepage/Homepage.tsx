import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { fetchCountryData } from '../../services/services';
import CircularProgress from '@mui/material/CircularProgress';

const Homepage :React.FunctionComponent = () =>{
    const [inputvalue, setInputvalue] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(false)
    const navigate = useNavigate();

    const handleInput : React.ChangeEventHandler<HTMLInputElement> = (e) =>{
        setInputvalue(e.target.value);
    }

    const handleResult = async ()=>{
        if(inputvalue){
            setLoading(true)
            const data = await fetchCountryData(inputvalue)
            // setCountry(data.length > 1 ? data[2] : data[0]);
            if(data.length >=1){
                setLoading(false)
                navigate(`/${inputvalue}`, {state:{countryData:data[0]}})
            }
            else{
                setLoading(false)
                navigate('/Not-Found')
            }
        }
    }

    return (
        <>
            {loading ? <div className='flex justify-center mt-10 mb-10'>
                <CircularProgress />
            </div> :
            <div className='w-1/2 mx-auto'>
                <div data-testid="input-form" className="border-2 border-gray-200 w-1/2 p-5 mt-10 mx-auto rounded-md shodow-md">
                    <label data-testid="countryLable" htmlFor="" className='text-xl font-semibold'>Contry Name:</label> <br />
                    <input data-testid="country-input" aria-label="country-value" type="text" name='country' placeholder='Enter country' onChange={(e)=>handleInput(e)} className="w-full mt-3 mb-4" required/>
                    {inputvalue ?
                    <Link data-testid="submit-button" to="" onClick={handleResult}  className='bg-red-100 py-1 px-3 rounded-md border-2 border-red-500 cursor-pointer'>Submit</Link>:
                    <Link data-testid="submit-button-disable" to="" className='bg-red-50 py-1 px-3 rounded-md border-2 border-red-200 text-gray-400 cursor-default'>Submit</Link>}
                </div>
            </div>}
        </>
    )
}

export default Homepage;

// to={`/${inputvalue}`}