import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

const CountUp = ({ end, duration = 2, isInView }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return

    let startTime
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) {
        window.requestAnimationFrame(step)
      }
    }
    window.requestAnimationFrame(step)
  }, [end, duration, isInView])

  return count
}

const Metrics = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isExpanded, setIsExpanded] = useState(false)

  const stats = [
    { number: 241, label: 'Thousand Total Social Followers', suffix: 'K+' },
    { number: 8, label: 'Million Organic Video Views (Last 28 Days)', suffix: 'M' },
    { number: 90, label: 'Male Audience Percentage', suffix: '%+' },
    { number: 12, label: 'Years in the NFL', suffix: '' },
  ]

  const platforms = [
    {
      name: 'Instagram',
      handle: '@jaredv68',
      followers: '143,764',
      highlights: [
        '4.2M video views (28 days)',
        '1.2M accounts reached',
        '217K content interactions',
        '452K story views',
      ],
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    {
      name: 'Facebook',
      handle: 'Jared Veldheer fan page',
      followers: '28,294',
      highlights: [
        '2.6M video views (28 days)',
        '950,600 viewers',
        '282 days of watch time',
        '92.5% male audience',
      ],
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    {
      name: 'TikTok',
      handle: '@jveldheer',
      followers: '48,800',
      highlights: [
        '1.7M total likes',
        '838K post views (28 days)',
        '439K total viewers',
        '136K new viewers',
      ],
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
        </svg>
      )
    },
    {
      name: 'YouTube',
      handle: 'JaredVeldheer68',
      followers: '4,930',
      highlights: [
        '300+ videos',
        '233K views (28 days)',
        '1,400 hours watch time',
        '21 min avg video length',
      ],
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    },
    {
      name: 'X',
      handle: '@veldheer68',
      followers: '15,700',
      highlights: [
        'Real-time updates',
        'Community engagement',
        'Behind the scenes content',
        'Training insights',
      ],
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    },
  ]

  return (
    <section
      id="metrics"
      ref={ref}
      className="relative pt-72 pb-64 md:pt-80 md:pb-72 lg:pt-96 lg:pb-80 xl:pt-96 xl:pb-96 bg-veldheer-dark"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #c9a961 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 max-w-6xl relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6">
              Audience & <span className="text-veldheer-gold">Performance</span>
            </h2>
            <div className="w-24 h-1 bg-veldheer-gold mx-auto mb-6"></div>
            <p className="text-base md:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto font-body font-normal">
              Growth driven almost entirely by organic content that teaches, entertains, and tells the truth about what it takes to be strong, healthy, and durable for the long term
            </p>
          </motion.div>

          {/* Context Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12 text-center"
          >
            <p className="text-sm md:text-base text-gray-500 font-body italic max-w-3xl mx-auto">
              Total follower count includes Instagram (143K), TikTok (48K), Facebook (28K), YouTube (4.9K), X/Twitter (16K+), and additional platforms
            </p>
          </motion.div>

          {/* Key Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-veldheer-accent p-8 border-b-4 border-veldheer-gold text-center"
              >
                <div className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-veldheer-gold mb-3">
                  <CountUp end={stat.number} isInView={isInView} />
                  {stat.suffix}
                </div>
                <div className="text-sm md:text-base text-gray-300 font-heading uppercase tracking-wide">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Platform Breakdown */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-10 text-center">
              Platform <span className="text-veldheer-gold">Highlights</span>
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
              {platforms.map((platform, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className={`bg-veldheer-gray border-l-4 border-veldheer-gold hover:bg-veldheer-accent transition-all duration-300 ${
                    isExpanded ? 'p-8' : 'p-6'
                  }`}
                >
                  <div className={`flex items-center justify-between ${isExpanded ? 'mb-6' : 'mb-0'}`}>
                    <div className="flex items-center gap-4">
                      <div className="text-veldheer-gold flex-shrink-0">
                        {platform.icon}
                      </div>
                      <div>
                        <h4 className={`font-heading font-bold text-white ${isExpanded ? 'text-2xl mb-1' : 'text-xl'}`}>
                          {platform.name}
                        </h4>
                        {isExpanded && (
                          <p className="text-veldheer-gold font-body">{platform.handle}</p>
                        )}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`font-display font-bold text-veldheer-gold ${isExpanded ? 'text-3xl' : 'text-2xl'}`}>
                        {platform.followers}
                      </div>
                      {isExpanded && (
                        <div className="text-sm text-gray-400 uppercase tracking-wide">Followers</div>
                      )}
                    </div>
                  </div>

                  {isExpanded && (
                    <motion.ul
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.3 }}
                      className="space-y-2"
                    >
                      {platform.highlights.map((highlight, i) => (
                        <li key={i} className="pl-4 border-l-2 border-veldheer-gold/50 py-1 text-gray-300 font-body">
                          {highlight}
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Expand/Collapse Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="mt-10 text-center"
            >
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="group inline-flex items-center gap-3 bg-veldheer-gold hover:bg-veldheer-bronze text-veldheer-dark px-8 py-4 font-heading font-bold text-base md:text-lg tracking-wide uppercase transition-all duration-300 border-2 border-veldheer-gold hover:border-veldheer-bronze"
              >
                <span>{isExpanded ? 'Show Less' : 'View Detailed Metrics'}</span>
                <svg
                  className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </motion.div>
          </motion.div>

          {/* Why This Matters */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-16 bg-gradient-to-r from-veldheer-gold to-veldheer-bronze p-10 text-center"
          >
            <h3 className="text-3xl font-display font-bold text-veldheer-dark mb-4">
              Why This Matters for Partners
            </h3>
            <p className="text-base md:text-lg text-veldheer-dark font-body max-w-4xl mx-auto leading-relaxed font-medium">
              Brands who work with Veldheer Life gain access to a deeply engaged, performance focused male audience that spends money on training, recovery tools, meat and grocery, game day food, technology, and long term health. The numbers above are driven by content that earns trust, which makes Jared a powerful voice when he puts his name behind a product or campaign.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Metrics
