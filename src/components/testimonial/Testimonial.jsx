import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    quote: 'We gave Vivid a brief, not a blueprint. They turned it into a home that feels like an extension of who we are. Every corner has a story.',
    author: '— Meera & Rahul Shah',
    role: 'The Ivory Residency',
  },
  {
    quote: 'Our cafe went from overlooked to overbooked. The design is warm, inviting, and completely original. Exactly what we needed.',
    author: '— Kavya Patel',
    role: 'Golden Nook Cafe',
  },
  {
    quote: 'Professional, punctual, and ridiculously talented. They transformed our office into a space people actually enjoy walking into.',
    author: '— Arjun Mehta',
    role: 'Azure Lounge',
  },
]

export default function Testimonial() {
  const [current, setCurrent] = useState(0)
  const loaded = useRef(false)

  useEffect(() => {
    const t = setInterval(() => setCurrent((p) => (p + 1) % testimonials.length), 5000)
    return () => clearInterval(t)
  }, [])

  useEffect(() => {
    if (loaded.current) return
    loaded.current = true
    const script = document.createElement('script')
    script.src = 'https://elfsightcdn.com/platform.js'
    script.async = true
    document.body.appendChild(script)
    return () => { if (script.parentNode) script.parentNode.removeChild(script) }
  }, [])

  return (
    <section className="py-28 bg-dark-surface">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-gold-DEFAULT text-xs tracking-[0.25em] uppercase font-medium">Testimonials</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-offwhite mt-2 leading-tight">
            What <span className="italic font-light text-gold-DEFAULT">they say</span>
          </h2>
          <div className="w-12 h-px bg-gold-DEFAULT/60 mx-auto mt-5 mb-12" />
        </motion.div>

        <div className="max-w-3xl mx-auto text-center">
          <div className="relative min-h-[220px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-dark-card px-8 md:px-14 py-12 md:py-14 w-full"
              >
                <p className="text-offwhite/85 font-display text-lg md:text-xl italic leading-relaxed">
                  "{testimonials[current].quote}"
                </p>
                <div className="mt-6">
                  <p className="text-gold-DEFAULT text-sm font-medium">{testimonials[current].author}</p>
                  <p className="text-muted text-xs mt-1">{testimonials[current].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-3 mt-8 mb-16">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-px transition-all duration-500 ${
                  i === current ? 'w-10 bg-gold-DEFAULT' : 'w-6 bg-white/15'
                }`}
              />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="text-gold-DEFAULT text-xs tracking-[0.25em] uppercase font-medium">Google Reviews</span>
          <div className="w-12 h-px bg-gold-DEFAULT/60 mx-auto mt-5" />
        </motion.div>

        <div
          className="elfsight-app-48e61d79-cb44-4c1a-b35e-23ad439ce05b"
          data-elfsight-app-lazy
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-10"
        >
          <a
            href="https://www.google.com/maps/place/VIVID+DESIGN/@21.1500473,72.8357838,17z/data=!4m16!1m9!3m8!1s0x3be053849c62b39d:0xf5dc37bf9870146c!2sVIVID+DESIGN!8m2!3d21.1507578!4d72.8366099!9m1!1b1!16s%2Fg%2F11h55ybsm3!3m5!1s0x3be053849c62b39d:0xf5dc37bf9870146c!8m2!3d21.1507578!4d72.8366099!16s%2Fg%2F11h55ybsm3?entry=ttu&g_ep=EgoyMDI2MDYxMC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-gold-DEFAULT/40 px-8 py-3 text-sm text-offwhite hover:border-gold-DEFAULT hover:text-gold-DEFAULT transition-all duration-500 tracking-wider uppercase"
          >
            Write a Review
          </a>
        </motion.div>
      </div>
    </section>
  )
}
