import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const LinemanVault = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const vaultFeatures = [
    'A membership community for offensive linemen ages roughly thirteen to thirty',
    'Structured strength and conditioning programs designed by an NFL veteran and strength coach',
    'Skill development sessions focused on stance, footwork, pass protection, and run blocking',
    'Nutrition and recovery tactics that match the demands of big athletes',
    'A supportive environment where linemen can ask questions, send in film, and get direction',
  ]

  const proofPoints = [
    { number: '100+', label: 'Current Paying Members' },
    { number: '7', label: 'Years of Youth Camps' },
    { number: '12', label: 'NFL Seasons of Experience' },
  ]

  return (
    <section
      id="vault"
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
              Veldheer <span className="text-veldheer-gold">Lineman Vault</span>
            </h2>
            <div className="w-24 h-1 bg-veldheer-gold mx-auto mb-6"></div>
            <p className="text-2xl md:text-3xl text-gray-400 font-heading font-medium">
              Building Stronger Linemen for the Next Generation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
            {/* Left Column - Description */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-3xl font-display font-bold text-white mb-6">
                What the <span className="text-veldheer-gold">Vault</span> Is
              </h3>
              <p className="text-xl text-gray-300 leading-relaxed font-body mb-8">
                The Veldheer Lineman Vault is Jared's performance home base. It is an online community and training platform for offensive linemen who want an honest, practical blueprint to get stronger, faster, and more skilled on the field.
              </p>

              <ul className="space-y-4">
                {vaultFeatures.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="flex items-start bg-veldheer-accent p-4 border-l-4 border-veldheer-gold"
                  >
                    <span className="text-veldheer-gold mr-4 text-2xl font-bold">▸</span>
                    <span className="text-gray-300 text-lg font-body leading-relaxed">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Right Column - Value Highlights */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Platform Highlights */}
              <div className="bg-gradient-to-br from-veldheer-gold/10 to-transparent border-2 border-veldheer-gold/30 p-8">
                <h4 className="text-2xl font-display font-bold text-veldheer-gold mb-6">What Makes It Different</h4>
                <div className="space-y-4 text-gray-300 font-body text-lg leading-relaxed">
                  <p>
                    <span className="text-veldheer-gold font-semibold">NFL-Tested:</span> Training methods proven at the highest level of football
                  </p>
                  <p>
                    <span className="text-veldheer-gold font-semibold">Film Review:</span> Members can submit their own game film for personalized feedback
                  </p>
                  <p>
                    <span className="text-veldheer-gold font-semibold">Real Nutrition:</span> Meal plans and recipes built for big athletes who need real fuel
                  </p>
                  <p>
                    <span className="text-veldheer-gold font-semibold">Community Support:</span> Direct access to Jared and a brotherhood of linemen at every level
                  </p>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-veldheer-accent border-l-4 border-veldheer-gold p-6 text-center">
                  <div className="text-3xl font-display font-bold text-veldheer-gold mb-2">100+</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wide">Active Members</div>
                </div>
                <div className="bg-veldheer-accent border-l-4 border-veldheer-gold p-6 text-center">
                  <div className="text-3xl font-display font-bold text-veldheer-gold mb-2">7</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wide">Years Running</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Proof Points */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-16"
          >
            <h3 className="text-3xl font-display font-bold text-white mb-8 text-center">
              Proof & <span className="text-veldheer-gold">Scale</span>
            </h3>

            <div className="grid md:grid-cols-3 gap-8">
              {proofPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                  className="bg-veldheer-dark p-8 border-b-4 border-veldheer-gold text-center"
                >
                  <div className="text-5xl md:text-6xl font-display font-bold text-veldheer-gold mb-3">
                    {point.number}
                  </div>
                  <div className="text-base md:text-lg text-gray-300 font-heading uppercase tracking-wide">
                    {point.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="bg-gradient-to-r from-veldheer-gold to-veldheer-bronze p-10 md:p-16 relative overflow-hidden"
          >
            {/* Quote Mark */}
            <div className="absolute top-0 left-0 text-veldheer-dark/20 text-9xl font-display leading-none pl-4">
              "
            </div>

            <div className="relative z-10">
              <p className="text-2xl md:text-3xl lg:text-4xl font-display font-semibold text-veldheer-dark mb-8 leading-relaxed italic text-center">
                "Jared was one of my all time favorite teammates, smart, honest, and a true technician. The way he approached the game was thoughtful, disciplined, and all about mastering the details. Anyone learning from him is in great hands."
              </p>

              <div className="text-center">
                <div className="text-xl md:text-2xl font-heading font-bold text-veldheer-dark">
                  Larry Fitzgerald
                </div>
                <div className="text-lg text-veldheer-dark/80 font-body">
                  Eleven-time Pro Bowl Wide Receiver
                </div>
              </div>
            </div>

            {/* Decorative Quote Mark */}
            <div className="absolute bottom-0 right-0 text-veldheer-dark/20 text-9xl font-display leading-none pr-4 transform rotate-180">
              "
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default LinemanVault
