import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import ImageSlider from './components/ImageSlider'
import QuotesCarousel from './components/QuotesCarousel'
import Introduction from './components/Introduction'
import AboutSection from './components/AboutSection'
import StatsSection from './components/StatsSection'
import JoinSection from './components/JoinSection'
import Footer from './components/Footer'
function App() {
  

  return (
    <>
      <Navbar/>
      <QuotesCarousel/>
      <ImageSlider/>
      <Introduction/>
      <AboutSection/>
      <StatsSection/>
      <JoinSection/>
      <Footer/>
    </>
  )
}

export default App
