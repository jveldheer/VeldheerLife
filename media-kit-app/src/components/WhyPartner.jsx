import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const WhyPartner = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const benefits = [
    {
      icon: '🎯',
      title: 'Deeply Engaged Male Audience',
      description: 'Access to a performance-focused male demographic (90%+) that actively spends on training, nutrition, gear, and recovery technology'
    },
    {
      icon: '🏆',
      title: '12-Year NFL Veteran & TV Personality',
      description: 'Credibility earned through 12 seasons in the NFL and featured on Next Level Chef Season 5, bringing authentic authority to every partnership'
    },
    {
      icon: '📈',
      title: 'Proven Organic Reach & Engagement',
      description: 'Generating 8 million monthly organic views with high engagement rates that translate to real brand impact and conversions'
    },
  ]

  return (
    <section
      id="why-partner"
      ref={ref}
      className="relative py-20 md:py-28 bg-veldheer-gray"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #c9a961 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              Why Partner with <span className="text-veldheer-gold">Veldheer Life</span>
            </h2>
            <div className="w-24 h-1 bg-veldheer-gold mx-auto mb-6"></div>
            <p className="text-xl md:text-2xl text-gray-400 font-heading font-medium max-w-3xl mx-auto">
              What Makes This Partnership Opportunity Different
            </p>
          </motion.div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                className="bg-veldheer-dark p-8 border-t-4 border-veldheer-gold hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="text-6xl mb-6">{benefit.icon}</div>
                <h3 className="text-2xl font-display font-bold text-veldheer-gold mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 leading-relaxed font-body text-lg">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA Panel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-gradient-to-r from-veldheer-gold to-veldheer-bronze p-10 md:p-12 text-center"
          >
            <p className="text-2xl md:text-3xl font-display font-bold text-veldheer-dark mb-6 leading-relaxed">
              Brands who partner with Veldheer Life gain authentic access to an audience that trusts Jared with their training, their families, and their kitchens
            </p>
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })
              }}
              className="inline-block bg-veldheer-dark text-veldheer-gold px-10 py-4 rounded-none font-heading font-bold text-lg tracking-wider uppercase hover:bg-veldheer-gray transition-all duration-300 transform hover:scale-105 shadow-2xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Talk Partnership
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default WhyPartner
