import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useContext } from 'react';
import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import './App.css';
import Countries from './Components/Countries';
import CountryDetails from './Components/CountryDetails';
import Header from './Components/Header';
import { ThemeContext } from './context/ThemeContext';



const App = () => {

  const {dark} = useContext(ThemeContext);

  return (
      <>
        <BrowserRouter>

          <Header />
          <Routes>
            <Route path='/' element={<Countries />} />
            <Route path='/countries' element={<Countries />} />
            <Route path='/countries/:country' element={<CountryDetails />} />
          </Routes>
        </BrowserRouter>
      </>
  );
};

export default App;