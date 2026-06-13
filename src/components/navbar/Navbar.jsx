import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handle = (href) => {
    setOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-dark-surface/95 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          <a href="#home" onClick={() => handle('#home')} className="flex items-baseline gap-1">
            <span className="font-display text-2xl font-bold text-offwhite tracking-wide">VIVID.</span>
            <span className="text-gold-DEFAULT text-2xl font-bold">✦</span>
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <button
                key={l.name}
                onClick={() => handle(l.href)}
                className="px-5 py-2 text-sm text-muted hover:text-gold-DEFAULT transition-colors duration-300 tracking-wide"
              >
                {l.name}
              </button>
            ))}
            <button
              onClick={() => handle('#contact')}
              className="ml-6 px-6 py-2.5 text-sm text-offwhite border border-gold-DEFAULT/40 hover:border-gold-DEFAULT hover:text-gold-DEFAULT transition-all duration-300 tracking-wide"
            >
              Book Consultation
            </button>
          </div>

          <button onClick={() => setOpen(!open)} className="lg:hidden text-offwhite text-2xl leading-none">
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-dark-surface border-t border-white/5"
          >
            <div className="px-6 py-5 space-y-2">
              {links.map((l) => (
                <button
                  key={l.name}
                  onClick={() => handle(l.href)}
                  className="block w-full text-left py-3 text-sm text-muted hover:text-gold-DEFAULT transition-colors"
                >
                  {l.name}
                </button>
              ))}
              <button
                onClick={() => handle('#contact')}
                className="block w-full mt-3 py-3 text-sm text-offwhite border border-gold-DEFAULT/40 hover:border-gold-DEFAULT transition-all text-center"
              >
                Book Consultation
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
