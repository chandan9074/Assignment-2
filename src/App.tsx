import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Homepage from './pages/Homepage/Homepage';
import CountryWeather from './pages/CountryWeather/CountryWeather';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/:str" element={<CountryWeather />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
