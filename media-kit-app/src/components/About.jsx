import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-32 md:py-40 lg:py-48 bg-gradient-to-b from-veldheer-dark via-veldheer-gray to-veldheer-dark overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-veldheer-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-veldheer-bronze/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-24 lg:mb-32"
          >
            <div className="inline-block mb-4">
              <span className="text-veldheer-gold/60 font-heading text-sm tracking-widest uppercase">The Man Behind The Brand</span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6">
              About <span className="bg-gradient-to-r from-veldheer-gold to-veldheer-bronze bg-clip-text text-transparent">Jared</span>
            </h2>
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-veldheer-gold to-transparent mx-auto"></div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center mb-20 lg:mb-28"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-veldheer-gold to-veldheer-bronze rounded-full blur-3xl opacity-30"></div>
              <img
                src="/images/jared-profile.jpg"
                alt="Jared Veldheer"
                className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] rounded-full object-cover border-4 border-veldheer-gold shadow-2xl"
              />
            </div>
          </motion.div>

          {/* Content Grid */}
          <div className="max-w-6xl mx-auto space-y-16 lg:space-y-24 mb-24 lg:mb-32">
            {/* Core Intro */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center"
            >
              <p className="text-xl md:text-2xl lg:text-3xl text-gray-200 leading-relaxed font-body font-normal max-w-5xl mx-auto">
                Jared Veldheer is a <span className="text-veldheer-gold font-semibold">twelve-year NFL offensive lineman</span> who has turned everything he learned in the trenches into a life mission.
              </p>
            </motion.div>

            {/* Two Column Details */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid md:grid-cols-2 gap-8 lg:gap-12"
            >
              <div className="bg-gradient-to-br from-veldheer-gold/10 to-transparent p-8 lg:p-10 border-l-4 border-veldheer-gold">
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-body font-normal">
                  After more than a decade in the league, Jared has worn an apron as an elementary school lunch man, stepped into the kitchen on <span className="text-veldheer-gold font-semibold">Season 5 of Next Level Chef on FOX</span>, and launched the Veldheer Lineman Vault to teach the next generation how to move, fuel, and live for real strength.
                </p>
              </div>

              <div className="bg-gradient-to-br from-veldheer-bronze/10 to-transparent p-8 lg:p-10 border-l-4 border-veldheer-bronze">
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-body font-normal">
                  Today Veldheer Life brings all of that together: performance coaching for young athletes, nutrition and cooking content, faith-centered family life, travel, and unscripted moments from a six-foot-eight former lineman who still loves the weight room as much as the kitchen.
                </p>
              </div>
            </motion.div>

            {/* Core Brand Statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative p-12 lg:p-16 bg-gradient-to-r from-veldheer-gold via-veldheer-gold to-veldheer-bronze overflow-hidden"
            >
              <div className="absolute inset-0 bg-veldheer-dark/10"></div>
              <p className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-veldheer-dark leading-relaxed italic relative z-10 text-center">
                "Former NFL lineman teaching the next generation how to fuel and move for real strength on and off the field, all while giving back to his community."
              </p>
            </motion.div>
          </div>

          {/* Who Jared Reaches */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="text-center mb-16 lg:mb-20">
              <span className="text-veldheer-gold/60 font-heading text-sm md:text-base tracking-widest uppercase">Target Audience</span>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mt-4">
                Who <span className="text-veldheer-gold">Veldheer Life</span> Reaches
              </h3>
            </div>

            <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="group relative bg-gradient-to-br from-veldheer-accent to-veldheer-gray p-10 lg:p-12 border-l-4 border-veldheer-gold hover:border-veldheer-bronze transition-all duration-300"
              >
                <h4 className="text-2xl lg:text-3xl font-heading font-bold text-veldheer-gold mb-4 group-hover:text-white transition-colors duration-300">Athletes & Parents</h4>
                <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-body group-hover:text-white transition-colors duration-300">
                  Young athletes and their parents who want real training and real food
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="group relative bg-gradient-to-br from-veldheer-accent to-veldheer-gray p-10 lg:p-12 border-l-4 border-veldheer-gold hover:border-veldheer-bronze transition-all duration-300"
              >
                <h4 className="text-2xl lg:text-3xl font-heading font-bold text-veldheer-gold mb-4 group-hover:text-white transition-colors duration-300">Offensive Linemen</h4>
                <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-body group-hover:text-white transition-colors duration-300">
                  Offensive linemen who want to dominate physically and mentally
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="group relative bg-gradient-to-br from-veldheer-accent to-veldheer-gray p-10 lg:p-12 border-l-4 border-veldheer-gold hover:border-veldheer-bronze transition-all duration-300"
              >
                <h4 className="text-2xl lg:text-3xl font-heading font-bold text-veldheer-gold mb-4 group-hover:text-white transition-colors duration-300">Families</h4>
                <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-body group-hover:text-white transition-colors duration-300">
                  Families who want budget-friendly, high-protein, high-flavor meals that respect long-term health
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
