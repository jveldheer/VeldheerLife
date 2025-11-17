import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Brands = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const partners = [
    {
      name: 'Nike',
      logo: '/images/nike-logo.png',
      description: 'Shared real world feedback from twelve seasons in the league on what big athletes actually need from gear, fit, and footwear'
    },
    {
      name: 'Traeger',
      logo: '/images/traeger-logo.png',
      description: 'Created game day and family cooking centered on live fire flavor, performance minded recipes, and approachable backyard content'
    },
    {
      name: 'US Wellness Meats',
      logo: '/images/us-wellness-logo.png',
      description: 'Highlighted the value of high quality animal protein, regenerative practices, and practical ways athletes and families can eat for strength'
    },
    {
      name: 'HexClad',
      logo: '/images/hexclad-logo.png',
      description: 'Featured HexClad cookware in the kitchen and on camera, matching durable pans with high powered recipes for athletes and families'
    },
    {
      name: 'Thorne',
      logo: '/images/thorne-logo.png',
      description: 'Used the same supplement line trusted in NFL locker rooms to teach athletes how to support recovery, sleep, and overall health with evidence based products'
    },
  ]

  const partnershipLanes = [
    {
      title: 'Performance Technology',
      description: 'Wearables, health technology, and recovery tools'
    },
    {
      title: 'Food & Grocery',
      description: 'Meat, better-for-you CPG products, and real ingredients'
    },
    {
      title: 'Family & Kids',
      description: 'Food brands that care about real performance and health'
    },
  ]

  return (
    <section
      id="brands"
      ref={ref}
      className="relative py-32 md:py-40 lg:py-48 bg-veldheer-dark"
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
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6">
              Brands & <span className="text-veldheer-gold">Partners</span>
            </h2>
            <div className="w-24 h-1 bg-veldheer-gold mx-auto mb-6"></div>
            <p className="text-2xl text-gray-400 font-heading font-medium">
              Brands That Trust Veldheer Life
            </p>
          </motion.div>

          {/* Intro */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base md:text-lg lg:text-xl text-gray-300 text-center max-w-4xl mx-auto mb-16 leading-relaxed font-body font-normal"
          >
            Jared has partnered with respected names in sport, cooking, and human performance. These collaborations have included product insight from an NFL veteran, athlete education, live events, and ongoing ambassador roles.
          </motion.p>

          {/* Selected Collaborations */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-20"
          >
            <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-10 text-center">
              Selected <span className="text-veldheer-gold">Collaborations</span>
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partners.map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="group bg-gradient-to-br from-veldheer-gray to-veldheer-accent p-8 border-l-4 border-veldheer-gold hover:border-veldheer-bronze transition-all duration-300"
                >
                  {/* Brand Logo & Name */}
                  <div className="mb-6 text-center">
                    <div className="flex justify-center mb-6">
                      <div className="bg-white p-4 rounded-lg w-32 h-32 flex items-center justify-center">
                        <img
                          src={partner.logo}
                          alt={`${partner.name} logo`}
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                    </div>
                    <h4 className="text-2xl font-display font-bold text-veldheer-gold group-hover:text-white transition-colors duration-300">
                      {partner.name}
                    </h4>
                    <div className="w-16 h-px bg-veldheer-gold mx-auto mt-3 group-hover:w-24 transition-all duration-300"></div>
                  </div>

                  <p className="text-gray-300 group-hover:text-white leading-relaxed font-body font-normal text-base md:text-lg text-center transition-colors duration-300">
                    {partner.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Top Partnership Lanes */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="bg-gradient-to-br from-veldheer-accent to-veldheer-gray p-10 md:p-16 border-4 border-veldheer-gold"
          >
            <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-4 text-center">
              Top Partnership Lanes for <span className="text-veldheer-gold">2025</span>
            </h3>
            <p className="text-gray-400 text-center mb-10 font-body font-normal text-base md:text-lg">
              Strategic alignment opportunities for maximum impact
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {partnershipLanes.map((lane, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                  className="text-center bg-veldheer-dark p-8 border-t-4 border-veldheer-gold"
                >
                  <h4 className="text-xl font-heading font-bold text-veldheer-gold mb-3">
                    {lane.title}
                  </h4>
                  <p className="text-gray-300 font-body font-normal leading-relaxed text-base md:text-lg">
                    {lane.description}
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
