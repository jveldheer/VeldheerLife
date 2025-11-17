import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Media = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const mediaFeatures = [
    {
      title: 'NFL Films',
      description: 'Coverage that brings viewers inside life in the trenches and the mindset it takes to play offensive line at the highest level',
      type: 'Television'
    },
    {
      title: 'All or Nothing: Arizona Cardinals',
      description: 'Featured in the Amazon docu series that follows a full NFL season inside the building, on the field, and in the locker room',
      type: 'Streaming'
    },
    {
      title: 'The Today Show',
      description: 'National feature on Jared\'s work as an elementary school lunch man, focused on how he brought real food and performance nutrition thinking into school meals for kids',
      type: 'Television'
    },
    {
      title: 'Next Level Chef Season 5',
      description: 'Cast member on Gordon Ramsay\'s hit cooking competition series on FOX, where Jared brings his lineman mentality into the kitchen and shows what performance based cooking looks like under real pressure',
      type: 'Television',
      featured: true
    },
    {
      title: 'The Washington Post',
      description: 'Profile on Jared\'s mission as a lunch man to upgrade what kids eat at school and connect great food with long term health and performance',
      type: 'Print'
    },
  ]

  return (
    <section
      id="media"
      ref={ref}
      className="relative py-32 md:py-40 lg:py-48 bg-veldheer-gray"
    >
      <div className="container mx-auto px-6 lg:px-8">
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

          {/* Media Feature Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-20 lg:mb-28"
          >
            <div className="relative overflow-hidden group">
              <img
                src="/images/jared-media.jpg"
                alt="Jared Veldheer media appearances"
                className="w-full h-96 md:h-[32rem] lg:h-[40rem] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-veldheer-dark/90 via-veldheer-dark/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 lg:p-16">
                <p className="text-white font-display font-bold text-2xl md:text-3xl lg:text-4xl leading-tight">
                  Trusted by national networks and media outlets
                </p>
              </div>
            </div>
          </motion.div>

          {/* Media Features Grid */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {mediaFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className={`relative bg-veldheer-accent p-8 ${
                  feature.featured
                    ? 'md:col-span-2 border-4 border-veldheer-gold'
                    : 'border-t-4 border-veldheer-gold'
                }`}
              >
                {feature.featured && (
                  <div className="absolute top-0 right-0 bg-veldheer-gold text-veldheer-dark px-4 py-2 font-heading font-bold text-sm tracking-wider uppercase">
                    Featured
                  </div>
                )}

                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className={`font-display font-bold text-white ${
                        feature.featured ? 'text-3xl md:text-4xl' : 'text-2xl md:text-3xl'
                      }`}>
                        {feature.title}
                      </h3>
                    </div>
                    <span className="inline-block bg-veldheer-gold text-veldheer-dark px-3 py-1 text-xs font-heading font-bold tracking-wider uppercase">
                      {feature.type}
                    </span>
                  </div>
                </div>

                <p className={`text-gray-300 leading-relaxed font-body ${
                  feature.featured ? 'text-lg md:text-xl' : 'text-base md:text-lg'
                }`}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

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
        </div>
      </div>
    </section>
  )
}

export default Media
