import React from 'react'
import'./home.css'
import Hero from './hero/Hero'
import AboutCard from '../components/about/AboutCard'
import HAbout from './HAbout'
const Home = () => {
  return (
    <>
      <Hero />
      <AboutCard />
      <HAbout />
      {/* <AboutCard /> */}
    </>
  )
}

export default Home