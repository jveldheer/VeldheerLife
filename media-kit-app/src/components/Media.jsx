import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

const Media = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentSlide, setCurrentSlide] = useState(0)

  const mediaFeatures = [
    {
      title: 'Next Level Chef Season 5',
      outlet: 'FOX',
      description: 'Cast member on Gordon Ramsay\'s hit cooking competition series, bringing NFL lineman mentality into one of television\'s most intense cooking competitions',
      type: 'Television',
      featured: true,
      icon: '🎬'
    },
    {
      title: 'NFL Films',
      outlet: 'NFL Network',
      description: 'In-depth coverage showcasing life in the trenches and the mental approach required to play offensive line at the highest professional level',
      type: 'Television',
      icon: '🏈'
    },
    {
      title: 'All or Nothing',
      outlet: 'Amazon Prime',
      description: 'Featured in the acclaimed docu-series following a complete NFL season from inside the building, locker room, and on the field',
      type: 'Streaming',
      icon: '📺'
    },
    {
      title: 'The Today Show',
      outlet: 'NBC',
      description: 'National broadcast feature on transforming school lunch programs with real food and performance nutrition principles',
      type: 'Television',
      icon: '📡'
    },
    {
      title: 'The Washington Post',
      outlet: 'Print Media',
      description: 'In-depth profile on the mission to upgrade school meals and connect quality food with long-term health for young students',
      type: 'Print',
      icon: '📰'
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % mediaFeatures.length)
    }, 6000) // Auto-rotate every 6 seconds

    return () => clearInterval(timer)
  }, [mediaFeatures.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % mediaFeatures.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + mediaFeatures.length) % mediaFeatures.length)
  }

  return (
    <section
      id="media"
      ref={ref}
      className="relative py-24 md:py-32 bg-veldheer-gray"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              Media <span className="text-veldheer-gold">Credentials</span>
            </h2>
            <div className="w-24 h-1 bg-veldheer-gold mx-auto mb-6"></div>
            <p className="text-xl md:text-2xl text-gray-400 font-heading font-medium max-w-3xl mx-auto">
              Featured on Major Sports, Television, and Print Media
            </p>
          </motion.div>

          {/* Media Carousel */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-veldheer-accent p-10 md:p-12 border-4 border-veldheer-gold min-h-[400px]"
              >
                {/* Featured Badge */}
                {mediaFeatures[currentSlide].featured && (
                  <div className="inline-block bg-veldheer-gold text-veldheer-dark px-4 py-2 font-heading font-bold text-sm tracking-wider uppercase mb-6">
                    Featured
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Left - Content */}
                  <div>
                    {/* Icon */}
                    <div className="text-6xl mb-6">{mediaFeatures[currentSlide].icon}</div>

                    {/* Outlet */}
                    <div className="text-veldheer-bronze font-heading font-bold text-lg uppercase tracking-wide mb-2">
                      {mediaFeatures[currentSlide].outlet}
                    </div>

                    {/* Title */}
                    <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                      {mediaFeatures[currentSlide].title}
                    </h3>

                    {/* Type Badge */}
                    <span className="inline-block bg-veldheer-gold text-veldheer-dark px-3 py-1 text-xs font-heading font-bold tracking-wider uppercase mb-6">
                      {mediaFeatures[currentSlide].type}
                    </span>

                    {/* Description */}
                    <p className="text-gray-300 leading-relaxed font-body text-lg">
                      {mediaFeatures[currentSlide].description}
                    </p>
                  </div>

                  {/* Right - Image Placeholder */}
                  <div className="aspect-video bg-veldheer-dark border-4 border-veldheer-gold overflow-hidden flex items-center justify-center">
                    <div className="text-center text-veldheer-gold/30">
                      <svg className="w-20 h-20 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                      </svg>
                      <p className="text-xs uppercase tracking-wider font-heading">Insert Media Still</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-veldheer-gold hover:bg-veldheer-bronze text-veldheer-dark p-4 transition-all duration-300 transform hover:scale-110 z-20"
              aria-label="Previous media feature"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-veldheer-gold hover:bg-veldheer-bronze text-veldheer-dark p-4 transition-all duration-300 transform hover:scale-110 z-20"
              aria-label="Next media feature"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-3 mt-8">
              {mediaFeatures.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-veldheer-gold w-8'
                      : 'bg-veldheer-gold/30 hover:bg-veldheer-gold/50'
                  }`}
                  aria-label={`Go to ${mediaFeatures[index].title}`}
                />
              ))}
            </div>
          </div>

          {/* Media Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 bg-gradient-to-r from-veldheer-gold to-veldheer-bronze p-8 md:p-10 text-center"
          >
            <p className="text-xl md:text-2xl font-display font-bold text-veldheer-dark leading-relaxed">
              These platforms have introduced Jared's unique combination of NFL experience, performance cooking, and community service to millions of viewers across sports, lifestyle, and mainstream media
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Media
