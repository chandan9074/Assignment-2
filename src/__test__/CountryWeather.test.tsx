import { cleanup } from '@testing-library/react';
import * as services from '../services/services';

beforeEach(cleanup);

it("Render Country data perfectly", ()=>{
    return services.fetchCountryData("bangladesh").then(data => expect(data.length).toEqual(1));
})

it("Render Weather data perfectly", ()=>{
    return services.fetchCountryWeatherData("Dhaka").then(data => expect.objectContaining(data));
})

it("Test error for Country data", async()=>{
    const error = await services.fetchCountryData("2")
    expect(error).toHaveProperty("status",404);
})

it("Test error for Weather datas", async()=>{
    const error = await services.fetchCountryWeatherData("2");
    expect(error).toHaveProperty("success",false);
})
