import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const projects = [
  {
    id: 1,
    title: 'The Ivory Residency',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80',
    size: 'large',
  },
  {
    id: 2,
    title: 'Azure Lounge',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=600&q=80',
    size: 'small',
  },
  {
    id: 3,
    title: 'Terracotta House',
    category: 'Hospitality',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80',
    size: 'small',
  },
  {
    id: 4,
    title: 'Monochrome Studio',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80',
    size: 'large',
  },
  {
    id: 5,
    title: 'Golden Nook Cafe',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=80',
    size: 'small',
  },
]

export default function Portfolio() {
  const [hovered, setHovered] = useState(null)

  return (
    <section id="portfolio" className="py-28 bg-dark-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="text-gold-DEFAULT text-xs tracking-[0.25em] uppercase font-medium">Our Work</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-offwhite mt-2 leading-tight">
            Selected <span className="italic font-light text-gold-DEFAULT">Projects</span>
          </h2>
          <div className="w-12 h-px bg-gold-DEFAULT/60 mt-5" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 auto-rows-[280px] md:auto-rows-[300px]">
          {projects.map((p, i) => {
            const spanClass = p.size === 'large' ? 'md:col-span-2 md:row-span-2' : 'md:col-span-1'
            const orderClass = i === 4 ? 'md:col-start-2' : ''

            return (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                onMouseEnter={() => setHovered(p.id)}
                onMouseLeave={() => setHovered(null)}
                className={`relative overflow-hidden group cursor-pointer ${spanClass} ${orderClass}`}
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-dark-bg/0 group-hover:bg-dark-bg/60 transition-all duration-500" />
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-gold-DEFAULT text-[10px] tracking-[0.2em] uppercase">{p.category}</span>
                  <h3 className="font-display text-xl md:text-2xl font-semibold text-offwhite mt-1">{p.title}</h3>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
