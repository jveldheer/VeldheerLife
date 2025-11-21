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

  // Platform icon helper
  const getPlatformIcon = (platform) => {
    const icons = {
      Instagram: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      TikTok: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
        </svg>
      ),
      YouTube: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
      Facebook: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      X: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    }
    return icons[platform] || null
  }

  return (
    <section
      id="contact"
      ref={ref}
      className="relative pt-72 pb-64 md:pt-80 md:pb-72 lg:pt-96 lg:pb-80 xl:pt-96 xl:pb-96 bg-veldheer-dark"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, #c9a961 35px, #c9a961 37px)`,
        }}></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-20 relative z-10">
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
          <div className="grid md:grid-cols-2 gap-16 mb-24">
            {/* Left Column - Primary Contact */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-12"
            >
              {/* Email */}
              <div className="bg-veldheer-accent p-10 md:p-12 border-l-4 border-veldheer-gold">
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
              <div className="bg-veldheer-accent p-10 md:p-12 border-l-4 border-veldheer-gold">
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
              className="bg-veldheer-accent p-10 md:p-12 border-l-4 border-veldheer-gold"
            >
              <h3 className="text-2xl font-display font-bold text-veldheer-gold mb-6">
                Social Media
              </h3>
              <div className="flex flex-wrap gap-6 justify-center md:justify-start">
                {contactInfo.social.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="group bg-veldheer-dark hover:bg-veldheer-gold p-6 transition-all duration-300 transform hover:scale-110"
                    aria-label={social.platform}
                  >
                    {/* Platform Icon */}
                    <div className="text-veldheer-gold group-hover:text-veldheer-dark transition-colors duration-300 w-12 h-12 flex items-center justify-center">
                      {getPlatformIcon(social.platform)}
                    </div>
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
            className="text-center bg-gradient-to-r from-veldheer-gold to-veldheer-bronze p-16 md:p-20 lg:p-24"
          >
            <div className="mb-12">
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-display font-black tracking-tight text-veldheer-dark mb-4">
                VELDHEER LIFE
              </h3>
              <p className="text-xl md:text-2xl font-heading font-medium text-veldheer-dark">
                Faith. Family. Food. Football. Performance.
              </p>
            </div>

            <p className="text-lg md:text-xl lg:text-2xl font-display font-semibold text-veldheer-dark max-w-3xl mx-auto leading-loose italic">
              "If your brand is serious about serving athletes, families, and long term performance, Veldheer Life is ready to build something real with you."
            </p>
          </motion.div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-24 text-center text-gray-500 font-body"
          >
            <p>© {new Date().getFullYear()} Veldheer Life. All rights reserved.</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
