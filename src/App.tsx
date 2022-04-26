import React from 'react';
import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import './App.css';
import CountryWeather from './pages/CountryWeather/CountryWeather';
import Homepage from './pages/Homepage/Homepage';
import NotFound from './pages/Homepage/NotFound';

function App() {
  return (
    <div className="App" data-testid="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/Not-Found" element={<NotFound />}></Route>
          <Route path="/:str" element={<CountryWeather />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
