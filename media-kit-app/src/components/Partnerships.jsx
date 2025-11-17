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
      iconPath: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z'
    },
    {
      title: 'Co-Created Series',
      description: 'Multi episode recipe or training series that lives on Jared\'s channels, your channels, or both. For example a game day fuel series presented by a grocery partner, or an offensive line recovery series with a technology or supplement brand.',
      iconPath: 'M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z'
    },
    {
      title: 'White Label Content Production',
      description: 'Jared develops and films performance and food content that your brand can use on its own channels. This gives you authentic NFL level storytelling without needing your own on camera talent.',
      iconPath: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z'
    },
    {
      title: 'Speaking and Live Appearances',
      description: 'Keynotes, panels, and live demos for camps, clinics, conferences, or in store events. Topics include offensive line performance, youth sports and nutrition, and high impact cooking for athletes and families.',
      iconPath: 'M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z'
    },
    {
      title: 'Veldheer Lineman Vault Integration',
      description: 'Sponsored challenges, education modules, or product features inside the Vault. This reaches motivated offensive linemen who are already investing in their performance.',
      iconPath: 'M13 10V3L4 14h7v7l9-11h-7z'
    },
    {
      title: 'Custom Programs',
      description: 'Concepts like a Fuel Your Line program presented by a performance meat or CPG brand, or a data driven recovery project with a wearable or health technology partner.',
      iconPath: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4'
    },
  ]

  return (
    <section
      id="partnerships"
      ref={ref}
      className="relative pt-40 pb-32 md:pt-52 md:pb-40 lg:pt-60 lg:pb-48 bg-veldheer-gray"
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
            className="text-base md:text-lg lg:text-xl text-gray-300 text-center max-w-4xl mx-auto mb-20 lg:mb-28 leading-relaxed font-body font-normal"
          >
            Jared is intentional about the brands he works with. The right partners gain access to an audience that trusts him with their training, their kids, and their kitchens.
          </motion.p>

          {/* Partnership Opportunities Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-20 lg:mb-28">
            {opportunities.map((opportunity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="group bg-gradient-to-br from-veldheer-accent to-veldheer-dark p-8 lg:p-10 border-l-4 border-veldheer-gold hover:border-veldheer-bronze transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-veldheer-gold/10 group-hover:bg-veldheer-gold/20 transition-colors duration-300 flex items-center justify-center">
                    <svg
                      className="w-10 h-10 text-veldheer-gold"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d={opportunity.iconPath} />
                    </svg>
                  </div>
                </div>

                <h3 className="text-xl lg:text-2xl font-display font-bold text-veldheer-gold group-hover:text-white mb-4 transition-colors duration-300">
                  {opportunity.title}
                </h3>
                <p className="text-gray-300 group-hover:text-white leading-relaxed font-body font-normal text-base md:text-lg transition-colors duration-300 mb-6">
                  {opportunity.description}
                </p>

                {/* CTA Button */}
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault()
                    document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="inline-flex items-center gap-2 mt-auto pt-4 text-veldheer-gold group-hover:text-white font-heading font-semibold text-sm tracking-wider uppercase transition-colors duration-300"
                >
                  <span>Learn More</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="bg-gradient-to-r from-veldheer-gold via-veldheer-gold to-veldheer-bronze p-10 md:p-16 lg:p-20 text-center"
          >
            <p className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-veldheer-dark mb-10 leading-relaxed italic max-w-4xl mx-auto">
              "If your brand is serious about serving athletes, families, and long term performance, Veldheer Life is ready to build something real with you."
            </p>

            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })
              }}
              className="inline-flex items-center gap-3 bg-veldheer-dark text-veldheer-gold px-12 py-5 font-heading font-bold text-lg md:text-xl tracking-wider uppercase hover:bg-white hover:text-veldheer-dark transition-all duration-300 transform hover:scale-105 shadow-2xl border-2 border-veldheer-dark"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Let's Partner</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Partnerships
