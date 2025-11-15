import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Partnerships = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const opportunities = [
    {
      title: 'Sponsored Short Form Video Content',
      description: 'Reels, TikTok, and YouTube Shorts that feature your product inside real training, cooking, or family life moments. Every piece is designed to teach first so that the promotion feels natural and earned.',
      icon: '📱'
    },
    {
      title: 'Co-Created Series',
      description: 'Multi episode recipe or training series that lives on Jared\'s channels, your channels, or both. For example a game day fuel series presented by a grocery partner, or an offensive line recovery series with a technology or supplement brand.',
      icon: '🎬'
    },
    {
      title: 'White Label Content Production',
      description: 'Jared develops and films performance and food content that your brand can use on its own channels. This gives you authentic NFL level storytelling without needing your own on camera talent.',
      icon: '🎥'
    },
    {
      title: 'Speaking and Live Appearances',
      description: 'Keynotes, panels, and live demos for camps, clinics, conferences, or in store events. Topics include offensive line performance, youth sports and nutrition, and high impact cooking for athletes and families.',
      icon: '🎤'
    },
    {
      title: 'Veldheer Lineman Vault Integration',
      description: 'Sponsored challenges, education modules, or product features inside the Vault. This reaches motivated offensive linemen who are already investing in their performance.',
      icon: '🏋️'
    },
    {
      title: 'Custom Programs',
      description: 'Concepts like a Fuel Your Line program presented by a performance meat or CPG brand, or a data driven recovery project with a wearable or health technology partner.',
      icon: '⚡'
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
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6">
              Ways to <span className="text-veldheer-gold">Work With Jared</span>
            </h2>
            <div className="w-24 h-1 bg-veldheer-gold mx-auto mb-6"></div>
            <p className="text-2xl text-gray-400 font-heading font-medium">
              How Brands Can Partner With Veldheer Life
            </p>
          </motion.div>

          {/* Intro */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 text-center max-w-4xl mx-auto mb-16 leading-relaxed font-body"
          >
            Jared is intentional about the brands he works with. The right partners gain access to an audience that trusts him with their training, their kids, and their kitchens.
          </motion.p>

          {/* Partnership Opportunities Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {opportunities.map((opportunity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="bg-veldheer-accent p-8 border-t-4 border-veldheer-gold hover:bg-veldheer-dark transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-5xl mb-4">{opportunity.icon}</div>
                <h3 className="text-2xl font-display font-bold text-veldheer-gold mb-4">
                  {opportunity.title}
                </h3>
                <p className="text-gray-300 leading-relaxed font-body">
                  {opportunity.description}
                </p>
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
