import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

// Force rebuild - spacing update 2025-11-20
const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  // Scroll animation for quote overlay
  const quoteRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: quoteRef,
    offset: ["start end", "end start"]
  })

  const quoteOpacity = useTransform(scrollYProgress, [0, 0.3, 0.5, 0.7, 1], [0, 1, 1, 1, 0])
  const quoteScale = useTransform(scrollYProgress, [0, 0.3, 0.5, 0.7, 1], [0.8, 1, 1, 1, 0.95])
  const quoteY = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, -50])

  return (
    <section
      id="about"
      ref={ref}
      className="relative pt-72 pb-64 md:pt-80 md:pb-72 lg:pt-96 lg:pb-80 xl:pt-96 xl:pb-96 bg-gradient-to-b from-veldheer-dark via-veldheer-gray to-veldheer-dark overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-veldheer-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-veldheer-bronze/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 lg:px-8 max-w-6xl relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
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
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center mb-20 lg:mb-28"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-veldheer-gold to-veldheer-bronze rounded-full blur-3xl opacity-30"></div>
              <img
                src="/images/profile-picture.jpg"
                alt="Jared Veldheer"
                className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] rounded-full object-cover border-4 border-veldheer-gold shadow-2xl"
              />
            </div>
          </motion.div>

          {/* Larry Fitzgerald Quote - Full Width Overlay with Scroll Animation */}
          <motion.div
            ref={quoteRef}
            style={{
              opacity: quoteOpacity,
              scale: quoteScale,
              y: quoteY
            }}
            className="relative -mt-10 mb-20 lg:mb-28"
          >
            <div className="bg-gradient-to-br from-veldheer-dark/95 via-veldheer-gray/95 to-veldheer-dark/95 backdrop-blur-md border-y-4 border-veldheer-gold py-16 md:py-20 lg:py-24 px-6 md:px-12 lg:px-20 shadow-2xl">
              <div className="max-w-5xl mx-auto text-center">
                <p className="text-2xl md:text-3xl lg:text-4xl text-white font-heading font-semibold leading-relaxed italic mb-8">
                  "Jared was one of my all-time favorite teammates, smart, honest, and a true technician. The way he approached the game was thoughtful, disciplined, and all about mastering the details. Anyone learning from him is in great hands."
                </p>
                <div className="inline-block">
                  <p className="text-veldheer-gold font-display font-bold text-2xl md:text-3xl lg:text-4xl tracking-wide mb-2">
                    — Larry Fitzgerald
                  </p>
                  <p className="text-gray-400 font-body text-base md:text-lg">
                    Hall of Fame WR, Arizona Cardinals
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Grid */}
          <div className="max-w-6xl mx-auto space-y-24 lg:space-y-32 mb-32 lg:mb-40">

            {/* Two Column Details */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid md:grid-cols-2 gap-12 lg:gap-16"
            >
              <div className="bg-gradient-to-br from-veldheer-gold/10 to-transparent p-10 lg:p-12 border-l-4 border-veldheer-gold">
                <p className="text-lg md:text-xl text-gray-300 leading-loose font-body font-normal">
                  After more than a decade in the league, Jared has worn an apron as an elementary school lunch man, stepped into the kitchen on <span className="text-veldheer-gold font-semibold">Season 5 of Next Level Chef on FOX</span>, and launched the Veldheer Lineman Vault to teach the next generation how to move, fuel, and live for real strength.
                </p>
              </div>

              <div className="bg-gradient-to-br from-veldheer-bronze/10 to-transparent p-10 lg:p-12 border-l-4 border-veldheer-bronze">
                <p className="text-lg md:text-xl text-gray-300 leading-loose font-body font-normal">
                  Today Veldheer Life brings all of that together: performance coaching for young athletes, nutrition and cooking content, faith-centered family life, travel, and unscripted moments from a six-foot-eight former lineman who still loves the weight room as much as the kitchen.
                </p>
              </div>
            </motion.div>

            {/* NFL Career Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-24 lg:mt-32"
            >
              <div className="bg-veldheer-dark border-4 border-veldheer-gold p-10 md:p-14 lg:p-20">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-center text-white mb-16 lg:mb-20">
                  NFL Career <span className="text-veldheer-gold">Achievements</span>
                </h3>

                {/* Horizontal Scrolling Carousel */}
                <div className="overflow-x-auto scrollbar-hide pb-6">
                  <div className="flex gap-8 lg:gap-10 min-w-max px-2">
                    <div className="bg-gradient-to-br from-veldheer-gold/10 to-transparent border-l-4 border-veldheer-gold p-8 w-[300px] md:w-[340px] flex-shrink-0">
                      <div className="text-veldheer-gold font-heading font-bold text-sm uppercase tracking-wider mb-2">2014 Cardinals</div>
                      <div className="text-white font-display text-xl md:text-2xl font-bold">Team MVP</div>
                    </div>

                    <div className="bg-gradient-to-br from-veldheer-gold/10 to-transparent border-l-4 border-veldheer-gold p-8 w-[300px] md:w-[340px] flex-shrink-0">
                      <div className="text-veldheer-gold font-heading font-bold text-sm uppercase tracking-wider mb-3">2015 Cardinals</div>
                      <div className="text-white font-display text-xl md:text-2xl font-bold mb-2">Co-Captain</div>
                      <div className="text-gray-400 font-body text-sm mt-2">NFC West Champions, NFC Championship</div>
                    </div>

                    <div className="bg-gradient-to-br from-veldheer-gold/10 to-transparent border-l-4 border-veldheer-gold p-8 w-[300px] md:w-[340px] flex-shrink-0">
                      <div className="text-veldheer-gold font-heading font-bold text-sm uppercase tracking-wider mb-3">Career</div>
                      <div className="text-white font-display text-xl md:text-2xl font-bold">119 Games Started</div>
                    </div>

                    <div className="bg-gradient-to-br from-veldheer-gold/10 to-transparent border-l-4 border-veldheer-gold p-8 w-[300px] md:w-[340px] flex-shrink-0">
                      <div className="text-veldheer-gold font-heading font-bold text-sm uppercase tracking-wider mb-3">Elite Status</div>
                      <div className="text-white font-display text-xl md:text-2xl font-bold mb-2">Called Out of Retirement Twice</div>
                      <div className="text-gray-400 font-body text-sm mt-2">Stayed in exceptional shape</div>
                    </div>

                    <div className="bg-gradient-to-br from-veldheer-gold/10 to-transparent border-l-4 border-veldheer-gold p-8 w-[300px] md:w-[340px] flex-shrink-0">
                      <div className="text-veldheer-gold font-heading font-bold text-sm uppercase tracking-wider mb-3">Teams</div>
                      <div className="text-white font-display text-lg md:text-xl font-bold leading-relaxed">Raiders, Cardinals, Broncos, Packers, Colts</div>
                    </div>

                    <div className="bg-gradient-to-br from-veldheer-gold/10 to-transparent border-l-4 border-veldheer-gold p-8 w-[300px] md:w-[340px] flex-shrink-0">
                      <div className="text-veldheer-gold font-heading font-bold text-sm uppercase tracking-wider mb-3">Recognition</div>
                      <div className="text-white font-display text-xl md:text-2xl font-bold">Game Ball from Every Team</div>
                    </div>
                  </div>
                </div>

                {/* Scroll Indicator */}
                <div className="text-center mt-10">
                  <p className="text-veldheer-gold/60 font-heading text-xs uppercase tracking-wider">
                    ← Scroll to see all achievements →
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Who Jared Reaches */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-32 lg:mt-40"
          >
            <div className="text-center mb-20 lg:mb-24">
              <span className="text-veldheer-gold/60 font-heading text-sm md:text-base tracking-widest uppercase">Target Audience</span>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mt-6">
                Who <span className="text-veldheer-gold">Veldheer Life</span> Reaches
              </h3>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="max-w-5xl mx-auto mb-28 lg:mb-36"
            >
              <div className="bg-gradient-to-br from-veldheer-gold/10 to-veldheer-bronze/5 p-12 lg:p-16 border-4 border-veldheer-gold">
                <p className="text-xl md:text-2xl lg:text-3xl text-gray-100 leading-loose font-body font-normal text-center">
                  Veldheer Life reaches <span className="text-veldheer-gold font-semibold">young athletes and their parents</span> seeking real training and nutrition, <span className="text-veldheer-gold font-semibold">offensive linemen</span> who want to dominate physically and mentally, <span className="text-veldheer-gold font-semibold">NFL fans</span> who follow the game, <span className="text-veldheer-gold font-semibold">foodie athletes</span> who care about flavor and performance, and <span className="text-veldheer-gold font-semibold">families</span> looking for budget-friendly, high-protein meals that fuel long-term health.
                </p>
              </div>
            </motion.div>

            {/* Feature Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="mt-16 lg:mt-20"
            >
              <div className="relative overflow-hidden group">
                <img
                  src="/images/jared-traeger.jpg"
                  alt="Jared Veldheer cooking with Traeger"
                  className="w-full h-96 md:h-[32rem] lg:h-[40rem] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-veldheer-dark/90 via-veldheer-dark/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 lg:p-16">
                  <p className="text-white font-display font-bold text-2xl md:text-3xl lg:text-4xl leading-tight mb-4">
                    Bringing Performance Nutrition to Life
                  </p>
                  <p className="text-gray-200 font-body text-base md:text-lg lg:text-xl max-w-3xl">
                    From home cooking to serving as lunch program director, creating meals that fuel real performance for athletes and families
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
