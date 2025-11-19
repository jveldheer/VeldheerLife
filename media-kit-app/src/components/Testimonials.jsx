import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

const Testimonials = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      quote: "Jared was one of my all time favorite teammates, smart, honest, and a true technician. The way he approached the game was thoughtful, disciplined, and all about mastering the details. Anyone learning from him is in great hands.",
      author: "Larry Fitzgerald",
      title: "11-time Pro Bowl Wide Receiver",
      type: "athlete",
      icon: "🏈"
    },
    {
      quote: "As a parent, I trust Jared to teach my son not just how to be a better lineman, but how to be a better young man. His approach to training, nutrition, and mindset is exactly what families need in youth sports.",
      author: "Sarah M.",
      title: "Parent of Vault Member",
      type: "parent",
      icon: "👨‍👩‍👧‍👦"
    },
    {
      quote: "Working with Jared gave our brand authentic access to a performance-focused audience that actually engages with content. His credibility and storytelling ability delivered results that exceeded our projections.",
      author: "Marketing Director",
      title: "Major Cookware Brand",
      type: "brand",
      icon: "🤝"
    },
    {
      quote: "The Lineman Vault completely changed how I train. Having an NFL veteran break down technique and programming specifically for O-line work has been game-changing. Best investment I've made in my football career.",
      author: "Marcus T.",
      title: "High School Offensive Lineman",
      type: "athlete",
      icon: "💪"
    },
    {
      quote: "Jared's content authentically showcases our products in real-world applications. The engagement rates and audience sentiment far surpassed typical influencer partnerships. He's the real deal.",
      author: "Brand Partnership Manager",
      title: "Performance Nutrition Company",
      type: "brand",
      icon: "📊"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 7000) // Auto-rotate every 7 seconds

    return () => clearInterval(timer)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section
      id="testimonials"
      ref={ref}
      className="relative py-24 md:py-32 bg-veldheer-accent"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #c9a961 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              What People <span className="text-veldheer-gold">Are Saying</span>
            </h2>
            <div className="w-24 h-1 bg-veldheer-gold mx-auto mb-6"></div>
            <p className="text-xl md:text-2xl text-gray-400 font-heading font-medium">
              Trusted by Athletes, Families, and Brands
            </p>
          </motion.div>

          {/* Testimonial Carousel */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-veldheer-dark to-veldheer-gray p-10 md:p-16 border-4 border-veldheer-gold relative overflow-hidden min-h-[400px] flex items-center"
              >
                {/* Quote Mark */}
                <div className="absolute top-0 left-0 text-veldheer-gold/10 text-9xl font-display leading-none pl-4">
                  "
                </div>

                <div className="relative z-10 w-full">
                  {/* Icon */}
                  <div className="text-5xl mb-6 text-center">
                    {testimonials[currentIndex].icon}
                  </div>

                  {/* Quote */}
                  <p className="text-xl md:text-2xl lg:text-3xl font-display font-semibold text-white mb-8 leading-relaxed italic text-center">
                    "{testimonials[currentIndex].quote}"
                  </p>

                  {/* Author */}
                  <div className="text-center">
                    <div className="text-xl md:text-2xl font-heading font-bold text-veldheer-gold">
                      {testimonials[currentIndex].author}
                    </div>
                    <div className="text-lg text-gray-400 font-body mt-2">
                      {testimonials[currentIndex].title}
                    </div>
                  </div>
                </div>

                {/* Decorative Quote Mark */}
                <div className="absolute bottom-0 right-0 text-veldheer-gold/10 text-9xl font-display leading-none pr-4 transform rotate-180">
                  "
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-veldheer-gold hover:bg-veldheer-bronze text-veldheer-dark p-4 transition-all duration-300 transform hover:scale-110 z-20"
              aria-label="Previous testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-veldheer-gold hover:bg-veldheer-bronze text-veldheer-dark p-4 transition-all duration-300 transform hover:scale-110 z-20"
              aria-label="Next testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-3 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-veldheer-gold w-8'
                      : 'bg-veldheer-gold/30 hover:bg-veldheer-gold/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Social Proof Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-3 gap-6 mt-16"
          >
            <div className="bg-veldheer-dark p-6 border-b-4 border-veldheer-gold text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-veldheer-gold mb-2">
                100+
              </div>
              <div className="text-sm text-gray-400 font-heading uppercase tracking-wide">
                Vault Members
              </div>
            </div>
            <div className="bg-veldheer-dark p-6 border-b-4 border-veldheer-gold text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-veldheer-gold mb-2">
                500+
              </div>
              <div className="text-sm text-gray-400 font-heading uppercase tracking-wide">
                Athletes Trained
              </div>
            </div>
            <div className="bg-veldheer-dark p-6 border-b-4 border-veldheer-gold text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-veldheer-gold mb-2">
                10+
              </div>
              <div className="text-sm text-gray-400 font-heading uppercase tracking-wide">
                Brand Partners
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
