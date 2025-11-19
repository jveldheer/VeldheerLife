import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Metrics from './components/Metrics'
import Media from './components/Media'
import LinemanVault from './components/LinemanVault'
import Culinary from './components/Culinary'
import Charity from './components/Charity'
import Contact from './components/Contact'
import './App.css'

function App() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])

  return (
    <div className="App">
      <Navigation />
      <Hero opacity={opacity} />
      <About />
      <Metrics />
      <Media />
      <LinemanVault />
      <Culinary />
      <Charity />
      <Contact />
    </div>
  )
}

export default App
