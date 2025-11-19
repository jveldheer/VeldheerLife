import { motion } from 'framer-motion'

const Hero = ({ opacity }) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-veldheer-dark via-veldheer-gray to-veldheer-dark"
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, #c9a961 2px, #c9a961 4px),
                           repeating-linear-gradient(90deg, transparent, transparent 2px, #c9a961 2px, #c9a961 4px)`,
          backgroundSize: '100px 100px'
        }}></div>
      </div>

      <motion.div
        style={{ opacity }}
        className="container mx-auto px-6 text-center z-10"
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
            <span className="block text-veldheer-gold">VELDHEER</span>
            <span className="block text-white mt-2">LIFE</span>
          </motion.h1>

          {/* Divider */}
          <motion.div
            className="w-32 h-1 bg-veldheer-gold mx-auto my-8"
            initial={{ width: 0 }}
            animate={{ width: 128 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          />

          {/* Hero Tagline */}
          <motion.p
            className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-veldheer-gold max-w-4xl mx-auto leading-relaxed mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            High-Performance Food & Fitness for Athletes and Families
          </motion.p>

          <motion.p
            className="text-lg md:text-xl lg:text-2xl font-body text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            Former NFL lineman teaching the next generation how to fuel and move for real strength on and off the field
          </motion.p>

          {/* Key Metrics Above the Fold */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="bg-veldheer-accent/80 backdrop-blur-sm p-6 border-b-4 border-veldheer-gold">
              <div className="text-4xl md:text-5xl font-display font-bold text-veldheer-gold">
                241K+
              </div>
              <div className="text-sm md:text-base text-gray-300 font-heading uppercase tracking-wide mt-2">
                Total Social Followers
              </div>
            </div>
            <div className="bg-veldheer-accent/80 backdrop-blur-sm p-6 border-b-4 border-veldheer-gold">
              <div className="text-4xl md:text-5xl font-display font-bold text-veldheer-gold">
                8M
              </div>
              <div className="text-sm md:text-base text-gray-300 font-heading uppercase tracking-wide mt-2">
                Monthly Video Views
              </div>
            </div>
            <div className="bg-veldheer-accent/80 backdrop-blur-sm p-6 border-b-4 border-veldheer-gold">
              <div className="text-4xl md:text-5xl font-display font-bold text-veldheer-gold">
                90%+
              </div>
              <div className="text-sm md:text-base text-gray-300 font-heading uppercase tracking-wide mt-2">
                Male Audience
              </div>
            </div>
            <div className="bg-veldheer-accent/80 backdrop-blur-sm p-6 border-b-4 border-veldheer-gold">
              <div className="text-4xl md:text-5xl font-display font-bold text-veldheer-gold">
                12
              </div>
              <div className="text-sm md:text-base text-gray-300 font-heading uppercase tracking-wide mt-2">
                NFL Seasons
              </div>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <a
              href="#contact"
              className="inline-block bg-veldheer-gold text-veldheer-dark px-10 py-4 rounded-none font-heading font-bold text-lg tracking-wider uppercase hover:bg-veldheer-bronze transition-all duration-300 transform hover:scale-105 shadow-2xl"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Partner With Us
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6, repeat: Infinity, repeatType: 'reverse', repeatDelay: 0.5 }}
        >
          <svg
            className="w-8 h-8 text-veldheer-gold"
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
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
