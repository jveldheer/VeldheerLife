import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 300px
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToContact = () => {
    document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })
    setIsExpanded(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 100 }}
          className="fixed bottom-8 right-8 z-50"
        >
          {/* Expanded Options */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="absolute bottom-20 right-0 bg-veldheer-dark border-4 border-veldheer-gold p-4 rounded-none shadow-2xl min-w-[280px]"
              >
                <div className="space-y-3">
                  <button
                    onClick={scrollToContact}
                    className="w-full bg-veldheer-gold hover:bg-veldheer-bronze text-veldheer-dark px-6 py-3 rounded-none font-heading font-bold text-sm tracking-wider uppercase transition-all duration-300 text-left flex items-center justify-between"
                  >
                    <span>Book Strategy Call</span>
                    <span>📞</span>
                  </button>
                  <button
                    onClick={scrollToContact}
                    className="w-full bg-veldheer-accent hover:bg-veldheer-gray text-white px-6 py-3 rounded-none font-heading font-bold text-sm tracking-wider uppercase transition-all duration-300 text-left flex items-center justify-between border-2 border-veldheer-gold"
                  >
                    <span>Partnership Deck</span>
                    <span>📄</span>
                  </button>
                  <button
                    onClick={scrollToContact}
                    className="w-full bg-veldheer-accent hover:bg-veldheer-gray text-white px-6 py-3 rounded-none font-heading font-bold text-sm tracking-wider uppercase transition-all duration-300 text-left flex items-center justify-between border-2 border-veldheer-gold"
                  >
                    <span>General Inquiry</span>
                    <span>💬</span>
                  </button>
                </div>

                {/* Close Button */}
                <button
                  onClick={() => setIsExpanded(false)}
                  className="absolute -top-3 -right-3 bg-veldheer-gold hover:bg-veldheer-bronze text-veldheer-dark w-8 h-8 rounded-full flex items-center justify-center font-bold transition-all duration-300"
                >
                  ×
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Button */}
          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-veldheer-gold hover:bg-veldheer-bronze text-veldheer-dark px-8 py-4 rounded-none font-heading font-bold text-lg tracking-wider uppercase shadow-2xl transition-all duration-300 flex items-center gap-3"
          >
            <span>Let's Talk</span>
            <motion.span
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              ▼
            </motion.span>
          </motion.button>

          {/* Pulse Effect */}
          {!isExpanded && (
            <motion.div
              className="absolute inset-0 bg-veldheer-gold rounded-none -z-10"
              animate={{
                scale: [1, 1.2, 1.2, 1],
                opacity: [0.7, 0, 0, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default FloatingCTA
