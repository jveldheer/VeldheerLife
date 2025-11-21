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
      <div className="mb-32 md:mb-40 lg:mb-48">
        <About />
      </div>
      <div className="mb-32 md:mb-40 lg:mb-48">
        <Metrics />
      </div>
      <div className="mb-32 md:mb-40 lg:mb-48">
        <Media />
      </div>
      <div className="mb-32 md:mb-40 lg:mb-48">
        <Culinary />
      </div>
      <div className="mb-32 md:mb-40 lg:mb-48">
        <LinemanVault />
      </div>
      <div className="mb-32 md:mb-40 lg:mb-48">
        <Charity />
      </div>
      <Contact />

      {/* Floating Collaboration Button */}
      <a
        href="mailto:jared@veldheerlife.com?subject=Collaboration Opportunity"
        className="fixed right-6 md:right-8 bottom-8 md:bottom-12 z-50 group"
        aria-label="Email for collaboration"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-br from-veldheer-gold to-veldheer-bronze p-4 md:p-5 rounded-full shadow-2xl border-2 border-white/20 hover:shadow-veldheer-gold/50 transition-all duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6 md:w-7 md:h-7 text-veldheer-dark"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>

          {/* Tooltip */}
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap bg-veldheer-dark text-white px-4 py-2 rounded-lg text-sm font-heading font-bold tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            Collaborate with Jared
          </span>
        </motion.div>
      </a>
    </div>
  )
}

export default App
