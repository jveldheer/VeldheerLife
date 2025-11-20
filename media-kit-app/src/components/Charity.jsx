import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const Charity = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <section
      id="charity"
      ref={ref}
      className="relative pt-40 pb-32 md:pt-56 md:pb-40 lg:pt-72 lg:pb-56 xl:pt-80 xl:pb-64 bg-veldheer-dark overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/stay-in-the-game.jpg"
          alt="Stay in the Game Fund"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-veldheer-dark/60 via-veldheer-dark/50 to-veldheer-dark/60"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 lg:mb-20"
          >
            <div className="inline-block mb-4">
              <span className="text-veldheer-gold/60 font-heading text-sm tracking-widest uppercase">Giving Back</span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6">
              Stay in the <span className="text-veldheer-gold">Game</span> Fund
            </h2>
            <div className="w-24 h-1 bg-veldheer-gold mx-auto"></div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br from-veldheer-gold/10 to-transparent p-12 md:p-16 lg:p-20 border-l-4 border-veldheer-gold mb-16"
          >
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-200 leading-loose font-body font-normal text-center">
              The <span className="text-veldheer-gold font-semibold">"Stay in the Game"</span> fund supports local youth charities and initiatives that help young athletes access the training, nutrition, and resources they need to reach their full potential.
            </p>
          </motion.div>

          {/* Expand/Collapse Button */}
          <div className="text-center mb-16">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="bg-veldheer-gold text-veldheer-dark px-10 py-5 font-heading font-bold text-base md:text-lg uppercase tracking-wider hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              {isExpanded ? 'Show Less' : 'Read More About Stay in the Game'}
            </button>
          </div>

          {/* Collapsible Content */}
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-gradient-to-br from-veldheer-gold/10 to-transparent p-12 md:p-16 lg:p-20 border-l-4 border-veldheer-gold mb-20"
              >
                <p className="text-lg md:text-xl text-gray-300 leading-loose font-body font-normal text-center max-w-4xl mx-auto">
                  Through this fund, Jared partners with community organizations to provide equipment, coaching, nutrition education, and mentorship to kids who might otherwise be left on the sidelines.
                </p>
              </motion.div>

              {/* Impact Areas */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-16 text-center">
                  Where We <span className="text-veldheer-gold">Focus</span>
                </h3>

                <div className="grid md:grid-cols-3 gap-10 lg:gap-12 mb-20">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="group bg-veldheer-accent p-10 lg:p-12 border-t-4 border-veldheer-gold hover:bg-veldheer-gray transition-colors duration-300"
                  >
                    <div className="mb-6">
                      <svg className="w-12 h-12 md:w-16 md:h-16 text-veldheer-gold mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                      </svg>
                    </div>
                    <h4 className="text-2xl font-heading font-bold text-veldheer-gold mb-4 text-center">Equipment Access</h4>
                    <p className="text-gray-300 text-base md:text-lg leading-relaxed font-body text-center">
                      Providing gear and equipment so every kid can suit up and play
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="group bg-veldheer-accent p-10 lg:p-12 border-t-4 border-veldheer-gold hover:bg-veldheer-gray transition-colors duration-300"
                  >
                    <div className="mb-6">
                      <svg className="w-12 h-12 md:w-16 md:h-16 text-veldheer-gold mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <h4 className="text-2xl font-heading font-bold text-veldheer-gold mb-4 text-center">Nutrition Education</h4>
                    <p className="text-gray-300 text-base md:text-lg leading-loose font-body text-center">
                      Teaching young athletes how to fuel their bodies for performance and long-term health
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="group bg-veldheer-accent p-10 lg:p-12 border-t-4 border-veldheer-gold hover:bg-veldheer-gray transition-colors duration-300"
                  >
                    <div className="mb-6">
                      <svg className="w-12 h-12 md:w-16 md:h-16 text-veldheer-gold mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h4 className="text-2xl font-heading font-bold text-veldheer-gold mb-4 text-center">Mentorship Programs</h4>
                    <p className="text-gray-300 text-base md:text-lg leading-relaxed font-body text-center">
                      Connecting young athletes with coaches and mentors who care about their development
                    </p>
                  </motion.div>
                </div>
              </motion.div>

              {/* Call to Action */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1 }}
                className="bg-gradient-to-r from-veldheer-gold to-veldheer-bronze p-14 md:p-18 lg:p-24 text-center"
              >
                <h3 className="text-3xl md:text-4xl font-display font-bold text-veldheer-dark mb-8">
                  Partner With Purpose
                </h3>
                <p className="text-lg md:text-xl text-veldheer-dark/90 leading-loose font-body font-normal mb-10 max-w-3xl mx-auto">
                  When you partner with Veldheer Life, you're not just reaching an audience—you're supporting a mission to help the next generation stay in the game and reach their potential.
                </p>
                <p className="text-base md:text-lg text-veldheer-dark font-body font-semibold italic">
                  A portion of partnership proceeds supports the Stay in the Game fund
                </p>
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Charity
