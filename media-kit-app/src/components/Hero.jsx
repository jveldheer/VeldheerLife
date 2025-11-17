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
        className="container mx-auto px-6 lg:px-8 text-center z-10 relative py-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Main Logo/Title */}
          <motion.h1
            className="text-6xl md:text-8xl lg:text-[10rem] xl:text-[12rem] font-display font-black mb-8 lg:mb-12 tracking-tight leading-none"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <span className="block bg-gradient-to-r from-veldheer-gold via-white to-veldheer-gold bg-clip-text text-transparent">
              VELDHEER
            </span>
            <span className="block text-white mt-4 lg:mt-6">LIFE</span>
          </motion.h1>

          {/* Divider with accent */}
          <motion.div
            className="flex items-center justify-center gap-4 my-10 lg:my-14"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div
              className="h-px bg-gradient-to-r from-transparent via-veldheer-gold to-transparent w-32 md:w-48 lg:w-64"
              initial={{ width: 0 }}
              animate={{ width: 256 }}
              transition={{ duration: 1, delay: 0.7 }}
            />
          </motion.div>

          {/* Hero Tagline */}
          <motion.p
            className="text-xl md:text-2xl lg:text-4xl font-heading font-semibold text-veldheer-gold max-w-5xl mx-auto leading-relaxed tracking-wide mb-8 lg:mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Faith · Family · Food · Football · Performance
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="max-w-4xl mx-auto mb-16 lg:mb-20"
          >
            <div className="bg-veldheer-dark/90 backdrop-blur-md p-8 md:p-10 lg:p-12 border-l-4 border-veldheer-gold">
              <p className="text-lg md:text-xl lg:text-2xl font-body text-white leading-relaxed font-normal text-center">
                Former NFL lineman teaching the next generation how to fuel and move for real strength on and off the field
              </p>
            </div>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-20 mb-16 lg:mb-20"
          >
            <div className="text-center px-4">
              <div className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-veldheer-gold mb-2">241K+</div>
              <div className="text-sm md:text-base lg:text-lg text-gray-400 uppercase tracking-wider font-heading">Followers</div>
            </div>
            <div className="hidden md:block w-px bg-veldheer-gold/30"></div>
            <div className="text-center px-4">
              <div className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-veldheer-gold mb-2">8M</div>
              <div className="text-sm md:text-base lg:text-lg text-gray-400 uppercase tracking-wider font-heading">Monthly Views</div>
            </div>
            <div className="hidden md:block w-px bg-veldheer-gold/30"></div>
            <div className="text-center px-4">
              <div className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-veldheer-gold mb-2">12</div>
              <div className="text-sm md:text-base lg:text-lg text-gray-400 uppercase tracking-wider font-heading">NFL Seasons</div>
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
              className="group inline-flex items-center gap-4 bg-veldheer-gold text-veldheer-dark px-14 py-7 font-heading font-bold text-lg md:text-xl lg:text-2xl tracking-wider uppercase hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-2xl relative overflow-hidden border-2 border-veldheer-gold"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })
              }}
            >
              <span className="relative z-10">Partner With Us</span>
              <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-r from-veldheer-bronze to-veldheer-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
