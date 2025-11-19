import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Culinary = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const cookingFocus = [
    'High performance meals for athletes that deliver serious protein, smart carbs, and healthy fats without feeling like diet food',
    'Budget friendly cooking for young athletes who need fuel but do not have restaurant money',
    'Quick family weeknight meals that can feed kids, parents, and hungry teammates without sacrificing quality',
  ]

  const partnerOpportunities = [
    'Meat and grocery brands',
    'Better for you CPG and pantry staples',
    'Family and kids food brands that want to stand for more than empty calories',
    'Cookware, grill, and kitchen equipment partners who want their products used in a real home kitchen that still performs like a studio',
  ]

  return (
    <section
      id="culinary"
      ref={ref}
      className="relative py-24 md:py-32 bg-veldheer-dark"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #c9a961 1px, transparent 0)',
          backgroundSize: '40px 40px'
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
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6">
              Culinary Lane & <span className="text-veldheer-gold">Next Level Chef</span>
            </h2>
            <div className="w-24 h-1 bg-veldheer-gold mx-auto mb-6"></div>
            <p className="text-2xl md:text-3xl text-gray-400 font-heading font-medium">
              Feeding Athletes and Families with High Performance Food
            </p>
          </motion.div>

          {/* Intro */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 text-center max-w-4xl mx-auto mb-16 leading-relaxed font-body"
          >
            Under the Veldheer Life umbrella, food is not a side project. It is one of the main tools Jared uses to change lives. The same discipline that carried him through twelve NFL seasons now shows up on the cutting board and the stove.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Left Column - What Jared Cooks */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-3xl font-display font-bold text-white mb-8">
                What Jared <span className="text-veldheer-gold">Cooks & Teaches</span>
              </h3>

              <div className="space-y-6">
                {cookingFocus.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="bg-veldheer-accent p-6 border-l-4 border-veldheer-gold"
                  >
                    <p className="text-gray-300 text-lg leading-relaxed font-body">
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="mt-8 p-6 bg-veldheer-gray border-2 border-veldheer-gold"
              >
                <p className="text-lg text-gray-300 font-body leading-relaxed italic">
                  <span className="text-veldheer-gold font-semibold">Signature style includes</span> high powered protein bowls, smart uses of meat and eggs, big flavor sauces, and simple cooking methods that do not require a restaurant kitchen or a culinary degree.
                </p>
              </motion.div>
            </motion.div>

            {/* Right Column - Image Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              {/* Large Image */}
              <div className="aspect-video bg-veldheer-accent border-4 border-veldheer-gold overflow-hidden">
                <img
                  src="/images/cooking-main.jpg"
                  alt="Jared Veldheer cooking high-performance meals"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Small Images */}
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square bg-veldheer-accent border-2 border-veldheer-gold overflow-hidden">
                  <img
                    src="/images/cooking-dish.jpg"
                    alt="Plated high-performance meal"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square bg-veldheer-accent border-2 border-veldheer-gold overflow-hidden">
                  <img
                    src="/images/cooking-family.jpg"
                    alt="Family dinner preparation"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Next Level Chef Feature */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="bg-gradient-to-br from-veldheer-accent to-veldheer-gray p-10 md:p-16 border-4 border-veldheer-gold mb-16"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                  <span className="text-veldheer-gold">Next Level Chef</span> on FOX
                </h3>
                <p className="text-xl text-gray-300 leading-relaxed font-body mb-6">
                  On Season 5 of Next Level Chef Jared brings the Veldheer Life philosophy into one of the most intense cooking environments on television. Under the mentorship of world class chefs he combines NFL level composure with real food cooking to prove that performance food can be exciting, bold, and fun to watch.
                </p>
                <div className="inline-block bg-veldheer-gold text-veldheer-dark px-6 py-3 font-heading font-bold text-lg tracking-wider uppercase">
                  Season 5 Cast Member
                </div>
              </div>

              <div className="aspect-video bg-veldheer-dark border-4 border-veldheer-gold overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-veldheer-gold/30">
                  <div className="text-center">
                    <svg className="w-32 h-32 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                    <p className="font-heading text-sm tracking-wider uppercase">Insert Next Level Chef Still</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Partner Opportunities */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-8 text-center">
              This Makes Veldheer Life a <span className="text-veldheer-gold">Powerful Partner</span> For
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {partnerOpportunities.map((opportunity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                  className="bg-veldheer-gray p-6 border-t-4 border-veldheer-gold text-center hover:bg-veldheer-accent transition-colors duration-300"
                >
                  <p className="text-gray-300 font-body leading-relaxed">
                    {opportunity}
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

export default Culinary
