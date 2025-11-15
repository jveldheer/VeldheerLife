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
      className="relative py-24 md:py-32 bg-veldheer-gray"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6">
              About <span className="text-veldheer-gold">Jared</span>
            </h2>
            <div className="w-24 h-1 bg-veldheer-gold mx-auto"></div>
          </motion.div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square bg-veldheer-accent rounded-none overflow-hidden border-4 border-veldheer-gold">
                <div className="w-full h-full flex items-center justify-center text-veldheer-gold/30">
                  <div className="text-center">
                    <svg className="w-32 h-32 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                    <p className="font-heading text-sm tracking-wider uppercase">Insert Jared's Photo</p>
                  </div>
                </div>
              </div>
              {/* Decorative Element */}
              <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-veldheer-gold -z-10"></div>
            </motion.div>

            {/* Right Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-body">
                Jared Veldheer is a twelve year NFL offensive lineman who has turned everything he learned in the trenches into a life mission. Under the Veldheer Life brand he coaches offensive linemen, builds real world strength programs, cooks high performance meals, and serves families who want better health and better food.
              </p>

              <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-body">
                After more than a decade in the league with a helmet on, Jared has worn an apron as an elementary school lunch man, stepped into the kitchen on <span className="text-veldheer-gold font-semibold">Season 5 of Next Level Chef on FOX</span>, and launched the Veldheer Lineman Vault to teach the next generation how to move, fuel, and live for real strength.
              </p>

              <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-body">
                Today Veldheer Life brings all of that together. Performance coaching for young athletes, nutrition and cooking content, faith centered family life, travel, and unscripted moments from a six foot eight former lineman who still loves the weight room as much as the kitchen.
              </p>

              {/* Core Brand Statement */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-10 p-6 bg-veldheer-dark border-l-4 border-veldheer-gold"
              >
                <p className="text-lg md:text-xl font-heading font-semibold text-white leading-relaxed italic">
                  "Former NFL lineman teaching the next generation how to fuel and move for real strength on and off the field, all while giving back to his community."
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* Who Jared Reaches */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-20"
          >
            <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-8 text-center">
              Who <span className="text-veldheer-gold">Veldheer Life</span> Reaches
            </h3>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-veldheer-accent p-8 border-t-4 border-veldheer-gold">
                <div className="text-veldheer-gold text-4xl mb-4">🏈</div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Young athletes and their parents who want real training and real food
                </p>
              </div>

              <div className="bg-veldheer-accent p-8 border-t-4 border-veldheer-gold">
                <div className="text-veldheer-gold text-4xl mb-4">💪</div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Offensive linemen who want to dominate physically and mentally
                </p>
              </div>

              <div className="bg-veldheer-accent p-8 border-t-4 border-veldheer-gold">
                <div className="text-veldheer-gold text-4xl mb-4">🍳</div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Families who want budget friendly, high protein, high flavor meals that respect long term health
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
