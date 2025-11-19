import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Brands = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const partnerCategories = [
    {
      category: 'Major Sports Apparel Brand',
      icon: '👟',
      description: 'Provided real-world feedback from 12 NFL seasons on what elite athletes need from gear, fit, and footwear',
      value: 'Product Development & Athlete Insights'
    },
    {
      category: 'Premium Outdoor Cooking Equipment',
      icon: '🔥',
      description: 'Created game day and family cooking content centered on live-fire flavor and approachable outdoor recipes',
      value: 'Content Creation & Recipe Development'
    },
    {
      category: 'Regenerative Meat Producer',
      icon: '🥩',
      description: 'Highlighted high-quality animal protein, regenerative practices, and practical nutrition for athletes and families',
      value: 'Brand Storytelling & Education'
    },
    {
      category: 'Heritage Cookware Company',
      icon: '🍳',
      description: 'Featured premium cookware in authentic kitchen content, pairing durable products with high-performance recipes',
      value: 'Product Integration & Demonstration'
    },
    {
      category: 'Advanced Health & Recovery Technology',
      icon: '💊',
      description: 'Educated athletes on evidence-based supplementation and recovery strategies trusted in professional sports',
      value: 'Athlete Education & Trust Building'
    },
  ]

  const partnershipOpportunities = [
    {
      icon: '⚡',
      title: 'Performance & Sports Technology',
      description: 'Wearables, recovery tools, and health tracking systems for serious athletes'
    },
    {
      icon: '🥘',
      title: 'Food & Nutrition Brands',
      description: 'Meat, better-for-you CPG, pantry staples, and real ingredients'
    },
    {
      icon: '👨‍👩‍👧‍👦',
      title: 'Family & Youth Focused',
      description: 'Brands committed to real performance and health for the next generation'
    },
    {
      icon: '🏋️',
      title: 'Training & Equipment',
      description: 'Gym equipment, coaching tools, and performance gear'
    },
  ]

  return (
    <section
      id="brands"
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
              Partnership <span className="text-veldheer-gold">Experience</span>
            </h2>
            <div className="w-24 h-1 bg-veldheer-gold mx-auto mb-6"></div>
            <p className="text-xl md:text-2xl text-gray-400 font-heading font-medium max-w-3xl mx-auto">
              Proven Track Record Across Multiple Brand Categories
            </p>
          </motion.div>

          {/* Intro */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 text-center max-w-4xl mx-auto mb-16 leading-relaxed font-body"
          >
            Jared has partnered with leaders across sports, cooking, and performance categories. Each collaboration focuses on delivering value, not just visibility—connecting authentic storytelling with measurable results.
          </motion.p>

          {/* Past Partnership Categories */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-20"
          >
            <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-10 text-center">
              Past Partnership <span className="text-veldheer-gold">Categories</span>
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partnerCategories.map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="bg-veldheer-gray p-8 border-b-4 border-veldheer-gold hover:bg-veldheer-accent transition-all duration-300"
                >
                  {/* Icon */}
                  <div className="text-5xl mb-6">{partner.icon}</div>

                  {/* Category */}
                  <h4 className="text-xl font-display font-bold text-veldheer-gold mb-4">
                    {partner.category}
                  </h4>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed font-body mb-4">
                    {partner.description}
                  </p>

                  {/* Value Delivered */}
                  <div className="pt-4 border-t-2 border-veldheer-gold/30">
                    <p className="text-sm font-heading text-veldheer-bronze uppercase tracking-wide mb-1">
                      Value Delivered
                    </p>
                    <p className="text-white font-body text-sm">
                      {partner.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Confidentiality Note */}
            <p className="text-center text-gray-500 font-body italic mt-8">
              *Specific brand names and detailed metrics available upon request under NDA
            </p>
          </motion.div>

          {/* Partnership Opportunities for 2025 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="bg-gradient-to-br from-veldheer-accent to-veldheer-gray p-10 md:p-16 border-4 border-veldheer-gold"
          >
            <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-4 text-center">
              Open Partnership Categories for <span className="text-veldheer-gold">2025</span>
            </h3>
            <p className="text-gray-400 text-center mb-10 font-body text-lg">
              We work collaboratively with each partner to meet their unique goals
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {partnershipOpportunities.map((opportunity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                  className="text-center bg-veldheer-dark p-8 border-t-4 border-veldheer-gold"
                >
                  <div className="text-5xl mb-4">{opportunity.icon}</div>
                  <h4 className="text-lg font-heading font-bold text-veldheer-gold mb-3">
                    {opportunity.title}
                  </h4>
                  <p className="text-gray-300 font-body leading-relaxed text-sm">
                    {opportunity.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Brands
