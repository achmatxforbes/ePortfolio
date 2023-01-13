import './App.css';
import React from 'react';
import Navbar from '../src/components/navbar.js';
import Home from '../src/components/home.js';
import About from '../src/components/about.js';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} exact/>
        <Route path='/About' element={<About/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
