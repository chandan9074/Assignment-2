import { cleanup } from '@testing-library/react';
import * as services from '../services/services';

beforeEach(cleanup);

it("Render Country data perfectly", ()=>{
    return services.fetchCountryData("bangladesh").then(data => expect(data.length).toEqual(1));
})

it("Render Weather data perfectly", ()=>{
    return services.fetchCountryWeatherData("Dhaka").then(data => expect.objectContaining(data));
})

it("Test error for Country data", ()=>{
    return services.fetchCountryData("2").catch(e =>
    expect(e).toEqual({
      message: 'Not Found',
    }),
  );
})

it("Test error for Weather data", ()=>{
    return services.fetchCountryWeatherData("2").catch(e =>
    expect(e).toEqual({
      error: 'Not Found',
    }),
  );
})
