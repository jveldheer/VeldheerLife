import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const SuccessStories = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [expandedStory, setExpandedStory] = useState(null)

  const caseStudies = [
    {
      id: 1,
      category: 'Premium Cookware Brand',
      challenge: 'Needed authentic content that demonstrated product quality in real kitchen environments while reaching performance-minded audiences',
      solution: 'Created a 6-episode recipe series featuring high-protein athlete meals, showcasing product durability and cooking results',
      results: [
        '100K+ average views per video',
        '8.5% engagement rate (3x industry average)',
        '25% increase in brand search traffic',
        '12% conversion lift from content viewers'
      ],
      icon: '🍳',
      color: 'veldheer-gold'
    },
    {
      id: 2,
      category: 'Regenerative Meat Producer',
      challenge: 'Educate consumers about regenerative agriculture benefits while demonstrating practical cooking applications',
      solution: 'Developed multi-episode storytelling series connecting farm practices to family meals, with focus on protein quality for athletes',
      results: [
        '2M+ total views across platforms',
        '15K+ direct product page visits',
        '89% positive sentiment in comments',
        'Expanded distribution to 3 new retail partners'
      ],
      icon: '🥩',
      color: 'veldheer-bronze'
    },
    {
      id: 3,
      category: 'Performance Technology Brand',
      challenge: 'Build credibility with serious athletes and demonstrate product efficacy beyond marketing claims',
      solution: 'Integrated wearables and recovery tools into authentic training content with the Lineman Vault community',
      results: [
        'Reached 100+ paying vault members',
        '72% product consideration increase',
        '45% click-through rate to product site',
        'Generated 500+ qualified leads'
      ],
      icon: '⌚',
      color: 'veldheer-gold'
    },
  ]

  return (
    <section
      id="success-stories"
      ref={ref}
      className="relative py-24 md:py-32 bg-veldheer-dark"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(30deg, #c9a961 12%, transparent 12.5%, transparent 87%, #c9a961 87.5%, #c9a961), linear-gradient(150deg, #c9a961 12%, transparent 12.5%, transparent 87%, #c9a961 87.5%, #c9a961)',
          backgroundSize: '80px 140px'
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
              Success <span className="text-veldheer-gold">Stories</span>
            </h2>
            <div className="w-24 h-1 bg-veldheer-gold mx-auto mb-6"></div>
            <p className="text-xl md:text-2xl text-gray-400 font-heading font-medium max-w-3xl mx-auto">
              Proven Results from Strategic Brand Partnerships
            </p>
          </motion.div>

          {/* Case Studies Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                className="bg-veldheer-gray border-t-4 border-veldheer-gold hover:bg-veldheer-accent transition-all duration-300"
              >
                <div className="p-8">
                  {/* Icon and Category */}
                  <div className="text-5xl mb-4">{study.icon}</div>
                  <h3 className="text-2xl font-display font-bold text-veldheer-gold mb-4">
                    {study.category}
                  </h3>

                  {/* Challenge */}
                  <div className="mb-6">
                    <h4 className="text-sm font-heading font-bold text-veldheer-bronze uppercase tracking-wide mb-2">
                      Challenge
                    </h4>
                    <p className="text-gray-300 font-body leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="mb-6">
                    <h4 className="text-sm font-heading font-bold text-veldheer-bronze uppercase tracking-wide mb-2">
                      Solution
                    </h4>
                    <p className="text-gray-300 font-body leading-relaxed">
                      {study.solution}
                    </p>
                  </div>

                  {/* Results */}
                  <div className="bg-veldheer-dark p-6 border-l-4 border-veldheer-gold mb-4">
                    <h4 className="text-sm font-heading font-bold text-veldheer-gold uppercase tracking-wide mb-4">
                      Results Delivered
                    </h4>
                    <ul className="space-y-2">
                      {study.results.map((result, i) => (
                        <li key={i} className="flex items-start text-gray-300">
                          <span className="text-veldheer-gold mr-2">✓</span>
                          <span className="font-body text-sm">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* See Details Link */}
                  <button
                    onClick={() => setExpandedStory(expandedStory === study.id ? null : study.id)}
                    className="text-veldheer-gold hover:text-veldheer-bronze font-heading font-bold text-sm uppercase tracking-wide transition-colors duration-300"
                  >
                    {expandedStory === study.id ? 'Hide Details ▲' : 'See Full Details ▼'}
                  </button>

                  {/* Expanded Details */}
                  {expandedStory === study.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 pt-4 border-t-2 border-veldheer-gold/30"
                    >
                      <p className="text-gray-400 font-body text-sm italic">
                        Full case study details available upon request. Contact us to discuss specific metrics, timelines, and how we can deliver similar results for your brand.
                      </p>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-gradient-to-r from-veldheer-gold to-veldheer-bronze p-10 md:p-12 text-center"
          >
            <p className="text-2xl md:text-3xl font-display font-bold text-veldheer-dark mb-6 leading-relaxed">
              Ready to Build Your Own Success Story?
            </p>
            <p className="text-lg md:text-xl text-veldheer-dark font-body mb-8 max-w-3xl mx-auto">
              These anonymized case studies represent real partnerships that delivered measurable results. Let's discuss how Veldheer Life can drive similar outcomes for your brand.
            </p>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })
              }}
              className="inline-block bg-veldheer-dark text-veldheer-gold px-10 py-4 rounded-none font-heading font-bold text-lg tracking-wider uppercase hover:bg-veldheer-gray transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Request Partnership Deck
            </a>
          </motion.div>

          {/* Confidentiality Note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-8 text-center"
          >
            <p className="text-sm text-gray-500 font-body italic">
              *Additional case studies and specific partnership details available under NDA. All metrics verified and documented.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default SuccessStories
