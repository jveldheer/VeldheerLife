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
      ]
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
      ]
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
      ]
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
      ]
    },
  ]

  return (
    <section
      id="metrics"
      ref={ref}
      className="relative py-32 md:py-40 lg:py-48 bg-veldheer-dark"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #c9a961 1px, transparent 1px)',
          backgroundSize: '50px 50px'
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
              Audience & <span className="text-veldheer-gold">Performance</span>
            </h2>
            <div className="w-24 h-1 bg-veldheer-gold mx-auto mb-6"></div>
            <p className="text-base md:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto font-body font-normal">
              Growth driven almost entirely by organic content that teaches, entertains, and tells the truth about what it takes to be strong, healthy, and durable for the long term
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
                  className="bg-veldheer-gray p-8 border-l-4 border-veldheer-gold hover:bg-veldheer-accent transition-colors duration-300"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h4 className="text-2xl font-heading font-bold text-white mb-1">
                        {platform.name}
                      </h4>
                      <p className="text-veldheer-gold font-body">{platform.handle}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-display font-bold text-veldheer-gold">
                        {platform.followers}
                      </div>
                      <div className="text-sm text-gray-400 uppercase tracking-wide">Followers</div>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {platform.highlights.map((highlight, i) => (
                      <li key={i} className="pl-4 border-l-2 border-veldheer-gold/50 py-1 text-gray-300 font-body">
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
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
