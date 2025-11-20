import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const Media = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isExpanded, setIsExpanded] = useState(false)

  const mediaFeatures = [
    {
      title: 'The Today Show',
      description: 'National feature on Jared\'s work as an elementary school lunch man, focused on how he brought real food and performance nutrition thinking into school meals for kids',
      type: 'Television',
      logo: '/images/today-logo.png'
    },
    {
      title: 'Next Level Chef Season 5',
      description: 'Cast member on Gordon Ramsay\'s hit cooking competition series on FOX, where Jared brings his lineman mentality into the kitchen and shows what performance based cooking looks like under real pressure',
      type: 'Television',
      featured: true,
      logo: '/images/NLC-logo.png'
    },
    {
      title: 'NFL Films',
      description: 'Coverage that brings viewers inside life in the trenches and the mindset it takes to play offensive line at the highest level',
      type: 'Television',
      logo: '/images/nfl-films-logo.png'
    },
    {
      title: 'All or Nothing: Arizona Cardinals',
      description: 'Featured in the Amazon docu series that follows a full NFL season inside the building, on the field, and in the locker room',
      type: 'Streaming',
      logo: '/images/all-or-nothing-logo.png'
    },
    {
      title: 'The Washington Post',
      description: 'Profile on Jared\'s mission as a lunch man to upgrade what kids eat at school and connect great food with long term health and performance',
      type: 'Print',
      logo: '/images/wp-logo.png'
    },
  ]

  return (
    <section
      id="media"
      ref={ref}
      className="relative pt-40 pb-32 md:pt-56 md:pb-40 lg:pt-72 lg:pb-56 xl:pt-80 xl:pb-64 bg-veldheer-gray"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6">
              Media & <span className="text-veldheer-gold">Press</span>
            </h2>
            <div className="w-24 h-1 bg-veldheer-gold mx-auto mb-6"></div>
            <p className="text-2xl text-gray-400 font-heading font-medium">
              Trusted Voice in Football, Food, and Family Life
            </p>
          </motion.div>

          {/* Intro */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base md:text-lg lg:text-xl text-gray-300 text-center max-w-4xl mx-auto mb-20 lg:mb-28 leading-relaxed font-body font-normal"
          >
            Jared's story has reached both hardcore football fans and everyday families. As a twelve year NFL offensive lineman who later stepped into an elementary school cafeteria to serve better food to kids, his work has been showcased on major sports and national news platforms.
          </motion.p>

          {/* Media Features Carousel */}
          <div className="relative">
            <div className="overflow-x-auto scrollbar-hide pb-8">
              <div className="flex gap-6 lg:gap-8 min-w-max px-4 md:px-0">
                {mediaFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className={`relative bg-veldheer-accent transition-all duration-300 ${
                      isExpanded
                        ? 'w-[400px] md:w-[500px] lg:w-[600px] border-4 border-veldheer-gold p-8'
                        : 'w-[300px] md:w-[350px] lg:w-[400px] border-t-4 border-veldheer-gold p-6'
                    } flex-shrink-0`}
                  >
                    {feature.featured && isExpanded && (
                      <div className="absolute top-0 right-0 bg-veldheer-gold text-veldheer-dark px-6 py-3 font-heading font-bold text-xs md:text-sm tracking-wider uppercase">
                        Premiers January 29th, 2026
                      </div>
                    )}

                    <div className={`flex items-start justify-between ${isExpanded ? 'mb-4' : 'mb-0'}`}>
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-3">
                          {feature.logo && (
                            <div className={`flex-shrink-0 bg-white p-2 rounded flex items-center justify-center ${
                              isExpanded ? 'w-12 h-12 md:w-14 md:h-14' : 'w-10 h-10 md:w-12 md:h-12'
                            }`}>
                              <img
                                src={feature.logo}
                                alt={`${feature.title} logo`}
                                className="max-w-full max-h-full object-contain"
                              />
                            </div>
                          )}
                          <h3 className={`font-display font-bold text-white ${
                            isExpanded
                              ? feature.featured
                                ? 'text-2xl md:text-3xl'
                                : 'text-xl md:text-2xl'
                              : 'text-lg md:text-xl'
                          }`}>
                            {feature.title}
                          </h3>
                        </div>
                        <span className="inline-block bg-veldheer-gold text-veldheer-dark px-3 py-1 text-xs font-heading font-bold tracking-wider uppercase">
                          {feature.type}
                        </span>
                      </div>
                    </div>

                    {isExpanded && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        transition={{ duration: 0.3 }}
                        className={`text-gray-300 leading-relaxed font-body ${
                          feature.featured ? 'text-base md:text-lg' : 'text-sm md:text-base'
                        }`}
                      >
                        {feature.description}
                      </motion.p>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="text-center mt-4">
              <p className="text-veldheer-gold/60 text-sm font-heading tracking-wider uppercase">
                ← Scroll to explore →
              </p>
            </div>
          </div>

          {/* Expand/Collapse Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-10 text-center"
          >
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="group inline-flex items-center gap-3 bg-veldheer-gold hover:bg-veldheer-bronze text-veldheer-dark px-8 py-4 font-heading font-bold text-base md:text-lg tracking-wide uppercase transition-all duration-300 border-2 border-veldheer-gold hover:border-veldheer-bronze"
            >
              <span>{isExpanded ? 'Show Less' : 'Read More Details'}</span>
              <svg
                className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </motion.div>

          {/* Additional Context */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-16 text-center"
          >
            <p className="text-base md:text-lg text-gray-400 font-body font-normal italic max-w-3xl mx-auto">
              These platforms have introduced Jared's unique combination of NFL experience, performance cooking, and community service to millions of viewers across sports, lifestyle, and mainstream media.
            </p>
          </motion.div>

          {/* Behind the Scenes Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-20 lg:mt-28"
          >
            <div className="relative overflow-hidden group">
              <img
                src="/images/jared-filming.jpg"
                alt="Jared Veldheer filming content"
                className="w-full h-96 md:h-[32rem] lg:h-[40rem] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-veldheer-dark/90 via-veldheer-dark/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 lg:p-16">
                <p className="text-white font-display font-bold text-2xl md:text-3xl lg:text-4xl leading-tight mb-4">
                  Creating Content That Connects
                </p>
                <p className="text-gray-200 font-body text-base md:text-lg lg:text-xl max-w-3xl">
                  Behind the scenes bringing authentic stories from football, food, and family life to screens across the country
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Media
