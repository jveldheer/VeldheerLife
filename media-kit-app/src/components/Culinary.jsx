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

            {/* Right Column - Culinary Highlights */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              {/* Key Culinary Stats */}
              <div className="bg-gradient-to-br from-veldheer-gold/10 to-veldheer-bronze/5 border-2 border-veldheer-gold/30 p-8">
                <h4 className="text-2xl font-display font-bold text-veldheer-gold mb-6">Culinary Credentials</h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">🍳</div>
                    <div>
                      <div className="font-heading font-bold text-white text-lg">Season 5 Cast Member</div>
                      <div className="text-gray-400 font-body">Next Level Chef on FOX</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">🏫</div>
                    <div>
                      <div className="font-heading font-bold text-white text-lg">School Lunch Man</div>
                      <div className="text-gray-400 font-body">Served real food to hundreds of kids</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">🥩</div>
                    <div>
                      <div className="font-heading font-bold text-white text-lg">Performance Nutrition</div>
                      <div className="text-gray-400 font-body">12 years fueling an NFL body</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Themes */}
              <div className="bg-veldheer-accent border-l-4 border-veldheer-gold p-6">
                <h4 className="text-xl font-heading font-bold text-white mb-4">Popular Content Themes</h4>
                <ul className="space-y-3 text-gray-300 font-body">
                  <li className="flex items-center gap-3">
                    <span className="text-veldheer-gold">▸</span>
                    High-protein meal prep
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-veldheer-gold">▸</span>
                    Budget-friendly family dinners
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-veldheer-gold">▸</span>
                    Live fire and grill cooking
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-veldheer-gold">▸</span>
                    Game day recipes
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Next Level Chef Feature */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="relative bg-gradient-to-br from-veldheer-gold via-veldheer-gold to-veldheer-bronze p-10 md:p-16 mb-16 overflow-hidden"
          >
            <div className="absolute inset-0 bg-veldheer-dark/10"></div>
            <div className="relative z-10 text-center max-w-4xl mx-auto">
              <div className="inline-block bg-veldheer-dark/80 backdrop-blur-sm px-6 py-3 mb-6 border-2 border-veldheer-dark">
                <span className="text-veldheer-gold font-heading font-bold text-sm tracking-widest uppercase">Featured On National Television</span>
              </div>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-veldheer-dark mb-6">
                Next Level Chef <span className="block mt-2">Season 5 on FOX</span>
              </h3>
              <p className="text-xl md:text-2xl text-veldheer-dark/90 leading-relaxed font-body mb-8">
                On Season 5 of Next Level Chef Jared brings the Veldheer Life philosophy into one of the most intense cooking environments on television. Under the mentorship of world-class chefs he combines NFL-level composure with real food cooking to prove that performance food can be exciting, bold, and fun to watch.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-veldheer-dark/80 font-heading font-semibold">
                <div className="flex items-center gap-2">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/><path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/></svg>
                  <span>Millions of Viewers</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                  <span>Gordon Ramsay Mentor</span>
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
