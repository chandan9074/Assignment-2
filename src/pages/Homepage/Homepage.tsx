import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Homepage :React.FunctionComponent = () =>{
    const [inputvalue, setInputvalue] = useState<string>("")

    const handleInput : React.ChangeEventHandler<HTMLInputElement> = (e) =>{
        setInputvalue(e.target.value);
    }

    return (
        <div className='w-1/2 mx-auto'>
            <div data-test="input-form" className="border-2 border-gray-200 w-1/2 p-5 mt-10 mx-auto rounded-md shodow-md">
                <label data-test="countryLable" htmlFor="" className='text-xl font-semibold'>Contry Name:</label> <br />
                <input data-test="country-input" type="text" name='country' placeholder='Enter country' onChange={(e)=>handleInput(e)} className="w-full mt-3 mb-4" required/>
                {inputvalue ?
                <Link data-test="submit-button" to={`/${inputvalue}`} className='bg-red-100 py-1 px-3 rounded-md border-2 border-red-500 cursor-pointer'>Submit</Link>:
                <Link data-test="submit-button" to="" className='bg-red-50 py-1 px-3 rounded-md border-2 border-red-200 text-gray-400 cursor-default'>Submit</Link>}
            </div>
        </div>
    )
}

export default Homepage;