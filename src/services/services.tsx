import * as React from 'react';

export const fetchCountryData = (countryName : string) =>{
    return fetch(`https://restcountries.com/v3.1/name/${countryName}`)
            .then(res=>res.json())
            .then(data=> {
                return data;
            })
            .catch(error =>{
                return error;
            })
}
export const fetchCountryWeatherData = (capitalCityName : string ) =>{
    return fetch(`http://api.weatherstack.com/current?access_key=83e5ef91ac4dde545cd8c258eef2d864&query=${capitalCityName}`)
            .then(res=>res.json())
            .then(data=> {
                return data;
            })
            .catch(error =>{
                return error;
            })
}