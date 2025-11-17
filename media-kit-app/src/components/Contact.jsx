import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const contactInfo = {
    email: 'jared@veldheerlife.com',
    websites: [
      { label: 'veldheerlife.com', url: 'https://veldheerlife.com' },
      { label: 'thevlv.com', url: 'https://thevlv.com' },
    ],
    social: [
      { platform: 'Instagram', handle: '@jaredv68', url: 'https://instagram.com/jaredv68' },
      { platform: 'TikTok', handle: '@jveldheer', url: 'https://tiktok.com/@jveldheer' },
      { platform: 'YouTube', handle: 'JaredVeldheer68', url: 'https://youtube.com/@JaredVeldheer68' },
      { platform: 'Facebook', handle: 'Jared Veldheer fan page', url: 'https://facebook.com/jaredveldheer' },
      { platform: 'X', handle: '@veldheer68', url: 'https://x.com/veldheer68' },
    ]
  }

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-32 md:py-40 lg:py-48 bg-veldheer-dark"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, #c9a961 35px, #c9a961 37px)`,
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6">
              Contact & <span className="text-veldheer-gold">Connect</span>
            </h2>
            <div className="w-24 h-1 bg-veldheer-gold mx-auto mb-6"></div>
            <p className="text-xl md:text-2xl text-gray-400 font-heading font-medium">
              For Partnerships, Media, and Collaboration Inquiries
            </p>
          </motion.div>

          {/* Main Contact Info */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Left Column - Primary Contact */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Email */}
              <div className="bg-veldheer-accent p-8 border-l-4 border-veldheer-gold">
                <h3 className="text-2xl font-display font-bold text-veldheer-gold mb-4">
                  Email
                </h3>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-2xl md:text-3xl text-white hover:text-veldheer-gold transition-colors duration-300 font-body break-all"
                >
                  {contactInfo.email}
                </a>
              </div>

              {/* Websites */}
              <div className="bg-veldheer-accent p-8 border-l-4 border-veldheer-gold">
                <h3 className="text-2xl font-display font-bold text-veldheer-gold mb-4">
                  Websites
                </h3>
                <div className="space-y-3">
                  {contactInfo.websites.map((site, index) => (
                    <a
                      key={index}
                      href={site.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-xl md:text-2xl text-white hover:text-veldheer-gold transition-colors duration-300 font-body"
                    >
                      {site.label} →
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column - Social Media */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-veldheer-accent p-8 border-l-4 border-veldheer-gold"
            >
              <h3 className="text-2xl font-display font-bold text-veldheer-gold mb-6">
                Social Media
              </h3>
              <div className="space-y-5">
                {contactInfo.social.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="flex items-center justify-between group hover:bg-veldheer-dark p-4 transition-all duration-300 border-b-2 border-veldheer-gold/20 hover:border-veldheer-gold"
                  >
                    <div>
                      <div className="font-heading font-bold text-white text-lg group-hover:text-veldheer-gold transition-colors duration-300">
                        {social.platform}
                      </div>
                      <div className="text-gray-400 font-body">
                        {social.handle}
                      </div>
                    </div>
                    <svg
                      className="w-6 h-6 text-veldheer-gold transform group-hover:translate-x-2 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-center bg-gradient-to-r from-veldheer-gold to-veldheer-bronze p-12 md:p-16"
          >
            <div className="mb-8">
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-display font-black tracking-tight text-veldheer-dark mb-2">
                VELDHEER LIFE
              </h3>
              <p className="text-xl md:text-2xl font-heading font-medium text-veldheer-dark">
                Faith. Family. Food. Football. Performance.
              </p>
            </div>

            <p className="text-lg md:text-xl lg:text-2xl font-display font-semibold text-veldheer-dark max-w-3xl mx-auto leading-relaxed italic">
              "If your brand is serious about serving athletes, families, and long term performance, Veldheer Life is ready to build something real with you."
            </p>
          </motion.div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-16 text-center text-gray-500 font-body"
          >
            <p>© {new Date().getFullYear()} Veldheer Life. All rights reserved.</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
