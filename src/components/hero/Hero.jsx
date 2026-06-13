import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1800&q=80"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-dark-bg/85 via-dark-bg/60 to-dark-bg/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-dark-bg/20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="gold-rule max-w-[280px] mb-6">
            <span className="text-gold-DEFAULT text-xs tracking-[0.25em] uppercase font-medium">Surat — India</span>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-offwhite leading-[0.95]">
            Spaces<br />
            <span className="italic font-light text-gold-DEFAULT">that speak.</span>
          </h1>

          <div className="flex items-center gap-6 mt-10 mb-8">
            <div className="w-px h-16 bg-gold-DEFAULT/50" />
            <div className="space-y-2">
              <p className="text-offwhite/70 text-sm tracking-widest uppercase">Residential — Commercial — Hospitality</p>
              <div className="flex items-center gap-8">
                <div>
                  <span className="text-gold-DEFAULT font-display text-2xl font-semibold">180+</span>
                  <p className="text-muted text-xs tracking-wider mt-0.5">Projects</p>
                </div>
                <div className="w-px h-8 bg-white/10" />
                <div>
                  <span className="text-gold-DEFAULT font-display text-2xl font-semibold">10</span>
                  <p className="text-muted text-xs tracking-wider mt-0.5">Years</p>
                </div>
              </div>
            </div>
          </div>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            href="#portfolio"
            className="inline-block px-8 py-3.5 text-sm text-offwhite border border-gold-DEFAULT/40 hover:border-gold-DEFAULT hover:text-gold-DEFAULT transition-all duration-500 tracking-wider uppercase"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Explore Portfolio
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
