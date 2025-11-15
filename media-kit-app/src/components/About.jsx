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
      className="relative py-24 md:py-32 bg-gradient-to-b from-veldheer-dark via-veldheer-gray to-veldheer-dark overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-veldheer-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-veldheer-bronze/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="inline-block mb-4">
              <span className="text-veldheer-gold/60 font-heading text-sm tracking-widest uppercase">The Man Behind The Brand</span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6">
              About <span className="bg-gradient-to-r from-veldheer-gold to-veldheer-bronze bg-clip-text text-transparent">Jared</span>
            </h2>
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-veldheer-gold to-transparent mx-auto"></div>
          </motion.div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-1 gap-12 items-center mb-16">
            {/* Single column content - no placeholder image */}

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8 max-w-4xl mx-auto"
            >
              <div className="bg-veldheer-accent/50 backdrop-blur-sm p-8 border border-veldheer-gold/20">
                <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-body">
                  Jared Veldheer is a <span className="text-veldheer-gold font-semibold">twelve-year NFL offensive lineman</span> who has turned everything he learned in the trenches into a life mission. Under the Veldheer Life brand, he coaches offensive linemen, builds real-world strength programs, cooks high-performance meals, and serves families who want better health and better food.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-veldheer-gold/10 to-transparent p-6 border-l-2 border-veldheer-gold">
                  <p className="text-lg text-gray-300 leading-relaxed font-body">
                    After more than a decade in the league with a helmet on, Jared has worn an apron as an elementary school lunch man, stepped into the kitchen on <span className="text-veldheer-gold font-semibold">Season 5 of Next Level Chef on FOX</span>, and launched the Veldheer Lineman Vault to teach the next generation how to move, fuel, and live for real strength.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-veldheer-bronze/10 to-transparent p-6 border-l-2 border-veldheer-bronze">
                  <p className="text-lg text-gray-300 leading-relaxed font-body">
                    Today Veldheer Life brings all of that together: performance coaching for young athletes, nutrition and cooking content, faith-centered family life, travel, and unscripted moments from a six-foot-eight former lineman who still loves the weight room as much as the kitchen.
                  </p>
                </div>
              </div>

              {/* Core Brand Statement */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative mt-12 p-10 bg-gradient-to-r from-veldheer-gold via-veldheer-gold to-veldheer-bronze overflow-hidden"
              >
                <div className="absolute inset-0 bg-veldheer-dark/10"></div>
                <p className="text-2xl md:text-3xl font-display font-bold text-veldheer-dark leading-relaxed italic relative z-10 text-center">
                  "Former NFL lineman teaching the next generation how to fuel and move for real strength on and off the field, all while giving back to his community."
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* Who Jared Reaches */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-20"
          >
            <div className="text-center mb-12">
              <span className="text-veldheer-gold/60 font-heading text-sm tracking-widest uppercase">Target Audience</span>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-white mt-3">
                Who <span className="text-veldheer-gold">Veldheer Life</span> Reaches
              </h3>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="group relative bg-gradient-to-br from-veldheer-accent to-veldheer-gray p-8 border border-veldheer-gold/30 hover:border-veldheer-gold transition-all duration-300"
              >
                <div className="absolute top-0 left-0 w-2 h-full bg-veldheer-gold transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>
                <div className="text-4xl mb-4 filter grayscale group-hover:grayscale-0 transition-all duration-300">🏈</div>
                <p className="text-gray-300 text-lg leading-relaxed group-hover:text-white transition-colors duration-300">
                  Young athletes and their parents who want real training and real food
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="group relative bg-gradient-to-br from-veldheer-accent to-veldheer-gray p-8 border border-veldheer-gold/30 hover:border-veldheer-gold transition-all duration-300"
              >
                <div className="absolute top-0 left-0 w-2 h-full bg-veldheer-gold transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>
                <div className="text-4xl mb-4 filter grayscale group-hover:grayscale-0 transition-all duration-300">💪</div>
                <p className="text-gray-300 text-lg leading-relaxed group-hover:text-white transition-colors duration-300">
                  Offensive linemen who want to dominate physically and mentally
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="group relative bg-gradient-to-br from-veldheer-accent to-veldheer-gray p-8 border border-veldheer-gold/30 hover:border-veldheer-gold transition-all duration-300"
              >
                <div className="absolute top-0 left-0 w-2 h-full bg-veldheer-gold transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>
                <div className="text-4xl mb-4 filter grayscale group-hover:grayscale-0 transition-all duration-300">🍳</div>
                <p className="text-gray-300 text-lg leading-relaxed group-hover:text-white transition-colors duration-300">
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
