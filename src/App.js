import React from 'react';
import Header from './components/header/Header.jsx';
import Home from './home/Home.jsx'
import About from './components/about/About.jsx';
import CourseHome from './components/allcourses/CourseHome.jsx';
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Team from './components/team/Team.jsx';
import Price from './components/pricing/Price.jsx';
import Blog from './components/blog/Blog.jsx';
import Contact from './components/contact/Contact.jsx';
import Footer from './components/footer/Footer.jsx';
// import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
const App = () => {
  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' exact Component={Home}/>
          <Route path='/about' exact Component={About}/>
          <Route path='/courses' exact Component={CourseHome}/>
          <Route path='/team' exact Component={Team}/>
          <Route path='/price' exact Component={Price}/>
          <Route path='/journal' exact Component={Blog}/>
          <Route path='/contact' exact Component={Contact}/>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App