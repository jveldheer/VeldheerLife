import { motion } from 'framer-motion'

const Hero = ({ opacity }) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-veldheer-dark"
    >
      {/* Hero Background with Image */}
      <div className="absolute inset-0">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/hero-background.jpg)',
          }}
        ></div>

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-veldheer-dark/70"></div>

        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-veldheer-gold/10 via-transparent to-veldheer-bronze/5"></div>

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, #c9a961 2px, #c9a961 4px),
                           repeating-linear-gradient(90deg, transparent, transparent 2px, #c9a961 2px, #c9a961 4px)`,
          backgroundSize: '100px 100px'
        }}></div>

        {/* Spotlight effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-veldheer-gold/5 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        style={{ opacity }}
        className="container mx-auto px-6 text-center z-10 relative"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Main Logo/Title */}
          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl font-display font-black mb-6 tracking-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <span className="block bg-gradient-to-r from-veldheer-gold via-white to-veldheer-gold bg-clip-text text-transparent">
              VELDHEER
            </span>
            <span className="block text-white mt-2">LIFE</span>
          </motion.h1>

          {/* Divider with accent */}
          <motion.div
            className="flex items-center justify-center gap-4 my-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div
              className="h-px bg-gradient-to-r from-transparent via-veldheer-gold to-transparent"
              initial={{ width: 0 }}
              animate={{ width: 200 }}
              transition={{ duration: 1, delay: 0.7 }}
            />
          </motion.div>

          {/* Hero Tagline */}
          <motion.p
            className="text-xl md:text-2xl lg:text-3xl font-heading font-semibold text-veldheer-gold max-w-4xl mx-auto leading-relaxed tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Faith · Family · Food · Football · Performance
          </motion.p>

          <motion.p
            className="text-lg md:text-xl lg:text-2xl font-body text-gray-300 max-w-3xl mx-auto mt-6 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            Former NFL lineman teaching the next generation how to fuel and move for real strength on and off the field
          </motion.p>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-wrap justify-center gap-8 mt-12 mb-12"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-veldheer-gold">241K+</div>
              <div className="text-sm text-gray-400 uppercase tracking-wide mt-1">Followers</div>
            </div>
            <div className="w-px bg-veldheer-gold/30"></div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-veldheer-gold">8M</div>
              <div className="text-sm text-gray-400 uppercase tracking-wide mt-1">Monthly Views</div>
            </div>
            <div className="w-px bg-veldheer-gold/30"></div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-veldheer-gold">12</div>
              <div className="text-sm text-gray-400 uppercase tracking-wide mt-1">NFL Seasons</div>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 bg-veldheer-gold text-veldheer-dark px-10 py-5 font-heading font-bold text-lg tracking-wider uppercase hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-2xl relative overflow-hidden"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })
              }}
            >
              <span className="relative z-10">Partner With Us</span>
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-r from-veldheer-bronze to-veldheer-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4, repeat: Infinity, repeatType: 'reverse', repeatDelay: 0.5 }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-gray-500 uppercase tracking-widest">Scroll</span>
            <svg
              className="w-6 h-6 text-veldheer-gold"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
