import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Metrics', href: '#metrics' },
    { label: 'Media', href: '#media' },
    { label: 'Partners', href: '#brands' },
    { label: 'Vault', href: '#vault' },
    { label: 'Culinary', href: '#culinary' },
    { label: 'Contact', href: '#contact' },
  ]

  const scrollToSection = (e, href) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-veldheer-dark/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#hero"
            onClick={(e) => scrollToSection(e, '#hero')}
            className="text-2xl md:text-3xl font-display font-bold tracking-wider"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-veldheer-gold">VELDHEER</span>
            <span className="text-white ml-2">LIFE</span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-white hover:text-veldheer-gold transition-colors duration-300 font-heading font-medium text-sm tracking-wide uppercase whitespace-nowrap"
                whileHover={{ y: -2 }}
              >
                {item.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="bg-veldheer-gold text-veldheer-dark px-6 py-3 font-heading font-bold text-sm tracking-wider uppercase hover:bg-white transition-all duration-300 whitespace-nowrap ml-4"
              whileHover={{ scale: 1.05 }}
            >
              Partner With Us
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className="block text-white hover:text-veldheer-gold transition-colors duration-300 font-heading font-medium text-sm tracking-wide uppercase py-2"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, '#contact')}
                  className="block bg-veldheer-gold text-veldheer-dark px-6 py-3 font-heading font-bold text-sm tracking-wider uppercase hover:bg-white transition-all duration-300 text-center mt-4"
                >
                  Partner With Us
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default Navigation
