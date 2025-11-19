import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Partnerships = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const partnershipLanes = [
    {
      title: 'Sponsored Content & Brand Integration',
      description: 'Authentic product integration in training, cooking, or family content across all platforms',
      result: 'Generated 100K+ views per video for premium cookware brand with 8.5% engagement rate',
      icon: '📱',
      color: 'veldheer-gold'
    },
    {
      title: 'Live & Virtual Experiences',
      description: 'Keynotes, camps, clinics, and in-store activations focused on performance, nutrition, and athlete development',
      result: 'Led 7 years of youth football camps with 500+ athletes trained and equipped by partner brands',
      icon: '🎤',
      color: 'veldheer-bronze'
    },
    {
      title: 'Culinary Collaborations',
      description: 'Recipe series, product features, and cooking content that showcases your brand in real kitchens with real families',
      result: 'Created multi-episode series generating 2M+ views for regenerative meat producer',
      icon: '🍳',
      color: 'veldheer-gold'
    },
    {
      title: 'Veldheer Lineman Vault Integration',
      description: 'Exclusive access to 100+ paying members through sponsored challenges, training modules, and product education',
      result: 'Delivered targeted reach to motivated offensive linemen actively investing in their performance',
      icon: '🏋️',
      color: 'veldheer-bronze'
    },
  ]

  return (
    <section
      id="partnerships"
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
              Partnership <span className="text-veldheer-gold">Opportunities</span>
            </h2>
            <div className="w-24 h-1 bg-veldheer-gold mx-auto mb-6"></div>
            <p className="text-xl md:text-2xl text-gray-400 font-heading font-medium max-w-3xl mx-auto">
              Four Proven Ways to Partner with Veldheer Life
            </p>
          </motion.div>

          {/* Partnership Lanes Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {partnershipLanes.map((lane, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                className="bg-veldheer-accent p-8 border-l-4 border-veldheer-gold hover:bg-veldheer-dark transition-all duration-300"
              >
                <div className="text-5xl mb-6">{lane.icon}</div>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-veldheer-gold mb-4">
                  {lane.title}
                </h3>
                <p className="text-gray-300 leading-relaxed font-body text-lg mb-6">
                  {lane.description}
                </p>

                {/* Result Badge */}
                <div className="bg-veldheer-dark border-l-4 border-veldheer-bronze p-4 mb-6">
                  <p className="text-sm font-heading text-veldheer-bronze uppercase tracking-wide mb-2">
                    Proven Result
                  </p>
                  <p className="text-white font-body leading-relaxed">
                    {lane.result}
                  </p>
                </div>

                {/* CTA Button */}
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault()
                    document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="inline-block bg-veldheer-gold text-veldheer-dark px-6 py-3 rounded-none font-heading font-bold text-sm tracking-wider uppercase hover:bg-veldheer-bronze transition-all duration-300 transform hover:scale-105"
                >
                  Let's Talk
                </a>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="bg-gradient-to-r from-veldheer-dark via-veldheer-accent to-veldheer-dark p-10 md:p-16 border-4 border-veldheer-gold text-center"
          >
            <p className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-white mb-8 leading-relaxed italic">
              "If your brand is serious about serving athletes, families, and long term performance,
              <span className="text-veldheer-gold"> Veldheer Life</span> is ready to build something real with you."
            </p>

            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })
              }}
              className="inline-block bg-veldheer-gold text-veldheer-dark px-12 py-5 rounded-none font-heading font-bold text-xl tracking-wider uppercase hover:bg-veldheer-bronze transition-all duration-300 transform hover:scale-105 shadow-2xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Partner
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Partnerships
