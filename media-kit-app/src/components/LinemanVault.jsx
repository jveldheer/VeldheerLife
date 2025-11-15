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

            {/* Right Column - Image Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square bg-veldheer-accent border-4 border-veldheer-gold overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-veldheer-gold/30">
                  <div className="text-center p-8">
                    <svg className="w-32 h-32 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                    </svg>
                    <p className="font-heading text-sm tracking-wider uppercase">Insert Vault Training Photo</p>
                  </div>
                </div>
              </div>
              {/* Decorative Element */}
              <div className="absolute -bottom-6 -left-6 w-full h-full border-2 border-veldheer-gold -z-10"></div>
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
