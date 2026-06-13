import { motion } from 'framer-motion'
import { motion as m } from 'framer-motion'

const values = [
  { number: '01', title: 'Integrity First', desc: 'Every material, every line, every promise — held to the highest standard.' },
  { number: '02', title: 'Contextual Design', desc: 'Spaces rooted in place, purpose, and the people who live in them.' },
  { number: '03', title: 'Craft Obsession', desc: 'We sweat the small stuff so you don\'t have to.' },
  { number: '04', title: 'Timeless Over Trend', desc: 'Design that outlasts seasons, styles, and fads.' },
]

export default function About() {
  return (
    <section id="about" className="py-28 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          <m.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img
              src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&q=80"
              alt="Vivid Interior Studio"
              className="w-full h-[520px] object-cover"
            />
          </m.div>

          <div>
            <m.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-gold-DEFAULT text-xs tracking-[0.25em] uppercase font-medium">About</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-offwhite mt-3 leading-tight">
                We design <span className="italic font-light text-gold-DEFAULT">lived-in</span> luxury.
              </h2>
              <div className="w-12 h-px bg-gold-DEFAULT/60 mt-6 mb-6" />
              <p className="text-muted text-sm leading-relaxed max-w-lg">
                Based in Surat, Vivid Interior is a boutique design studio that crafts intentional
                spaces for residential, commercial, and hospitality clients. We believe great design
                isn't about how it looks — it's about how it feels.
              </p>
              <p className="text-muted text-sm leading-relaxed mt-4 max-w-lg">
                From concept to completion, our process is collaborative, transparent, and rooted
                in craft. Every project is a conversation between material, light, and function.
              </p>
            </m.div>

            <div className="grid sm:grid-cols-2 gap-5 mt-12">
              {values.map((v, i) => (
                <m.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 + 0.3 }}
                  className="border border-white/5 p-5 hover:border-gold-DEFAULT/20 transition-all duration-500"
                >
                  <span className="text-gold-DEFAULT font-display text-3xl font-bold opacity-20">{v.number}</span>
                  <h4 className="text-offwhite font-display text-lg font-semibold mt-1">{v.title}</h4>
                  <p className="text-muted text-xs leading-relaxed mt-2">{v.desc}</p>
                </m.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
