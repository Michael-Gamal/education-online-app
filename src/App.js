import React from 'react';
import Header from './components/header/Header.jsx';
import Home from './home/Home.jsx'
import About from './components/about/About.jsx';
// import './components/header/header.css'  
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
const App = () => {
  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' exact Component={Home}/>
          <Route path='/about' exact Component={About}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App