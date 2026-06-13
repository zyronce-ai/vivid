import { motion } from 'framer-motion'

const items = ['Residential', 'Commercial', 'Hospitality', 'Renovation', 'Turnkey']

export default function Marquee() {
  return (
    <section className="py-8 border-y border-white/5 bg-dark-surface overflow-hidden">
      <div className="flex whitespace-nowrap">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: '-50%' }}
          transition={{ duration: 30, ease: 'linear', repeat: Infinity }}
          className="flex gap-12 shrink-0"
        >
          {[...items, ...items].map((item, i) => (
            <span key={i} className="text-sm text-muted tracking-[0.2em] uppercase flex items-center gap-12">
              {item}
              <span className="text-gold-DEFAULT/40">✦</span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
