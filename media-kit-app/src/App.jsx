import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import WhyPartner from './components/WhyPartner'
import Partnerships from './components/Partnerships'
import SuccessStories from './components/SuccessStories'
import Testimonials from './components/Testimonials'
import Media from './components/Media'
import About from './components/About'
import Metrics from './components/Metrics'
import LinemanVault from './components/LinemanVault'
import Culinary from './components/Culinary'
import Brands from './components/Brands'
import Contact from './components/Contact'
import FloatingCTA from './components/FloatingCTA'
import './App.css'

function App() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])

  return (
    <div className="App">
      <Navigation />
      <Hero opacity={opacity} />
      <WhyPartner />
      <Partnerships />
      <SuccessStories />
      <Testimonials />
      <Media />
      <About />
      <Metrics />
      <LinemanVault />
      <Culinary />
      <Brands />
      <Contact />
      <FloatingCTA />
    </div>
  )
}

export default App
