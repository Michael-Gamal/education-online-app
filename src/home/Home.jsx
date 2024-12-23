import React from 'react'
import'./home.css'
// import Hero from './hero/Hero'
import AboutCard from '../components/about/AboutCard'
import HAbout from './HAbout'
import Test from './testimonals/Test'
import Hblog from './Hblog'
import Hprice from './Hprice'
import Header from '../components/header/Header'
import Hero from './hero/Hero'
// import Header from '../components/header/Header'
const Home = () => {
  return (
    <>
      <Hero />
      <AboutCard />
      <HAbout />
      <Test />
      <Hblog />
      <Hprice />
    </>
  )
}

export default Home