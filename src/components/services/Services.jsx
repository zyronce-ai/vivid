import { motion } from 'framer-motion'

const services = [
  { number: '01', title: 'Residential Design', desc: 'Homes that feel like you. From compact apartments to sprawling villas — every square foot intentional.' },
  { number: '02', title: 'Commercial Interiors', desc: 'Offices, clinics, boutiques — brand-forward spaces that work as hard as you do.' },
  { number: '03', title: 'Hospitality Design', desc: 'Restaurants, cafes, hotels. Atmosphere that brings people back, again and again.' },
  { number: '04', title: 'Renovation & Styling', desc: 'Breathing new life into old spaces. Cosmetic refreshes to full gut renovations.' },
  { number: '05', title: 'Turnkey Solutions', desc: 'End-to-end execution from concept to curtains. You show up when it\'s done.' },
  { number: '06', title: 'Consultation', desc: 'Expert advice, mood boards, material selection, and vendor referrals — a la carte.' },
]

export default function Services() {
  return (
    <section id="services" className="py-28 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="text-gold-DEFAULT text-xs tracking-[0.25em] uppercase font-medium">What We Do</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-offwhite mt-2 leading-tight">
            Services <span className="italic font-light text-gold-DEFAULT">we offer</span>
          </h2>
          <div className="w-12 h-px bg-gold-DEFAULT/60 mt-5" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group border border-white/5 p-8 md:p-10 hover:bg-dark-card/50 transition-all duration-500"
            >
              <span className="font-display text-6xl md:text-7xl font-bold text-gold-DEFAULT/10 group-hover:text-gold-DEFAULT/20 transition-all duration-500">
                {s.number}
              </span>
              <h3 className="font-display text-xl md:text-2xl font-semibold text-offwhite mt-2 group-hover:text-gold-DEFAULT transition-colors duration-500">
                {s.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed mt-3">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
