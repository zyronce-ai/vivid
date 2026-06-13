import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [errors, setErrors] = useState({})

  const validate = () => {
    const err = {}
    if (!form.name.trim()) err.name = 'Please enter your name'
    if (!form.email.trim()) {
      err.email = 'Please enter your email'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      err.email = 'Please enter a valid email address'
    }
    if (form.phone && !/^[\d\s+\-()]{7,15}$/.test(form.phone)) {
      err.phone = 'Please enter a valid phone number'
    }
    if (!form.message.trim()) err.message = 'Please tell us about your project'
    setErrors(err)
    return Object.keys(err).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return
    const msg = `Hi Vivid Interior!%0A%0AName: ${encodeURIComponent(form.name)}%0AEmail: ${encodeURIComponent(form.email)}%0APhone: ${encodeURIComponent(form.phone || 'N/A')}%0AMessage: ${encodeURIComponent(form.message)}`
    window.open(`https://wa.me/916353960524?text=${msg}`, '_blank')
    setForm({ name: '', email: '', phone: '', message: '' })
    setErrors({})
  }

  const clearError = (field) => {
    if (errors[field]) setErrors((prev) => { const next = { ...prev }; delete next[field]; return next })
  }

  const fields = [
    { key: 'name', type: 'text', placeholder: 'Your Name', required: true },
    { key: 'email', type: 'email', placeholder: 'Email Address', required: true },
    { key: 'phone', type: 'tel', placeholder: 'Phone (optional)', required: false },
    { key: 'message', type: 'textarea', placeholder: 'Tell us about your project...', required: true },
  ]

  return (
    <section id="contact" className="py-28 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="text-gold-DEFAULT text-xs tracking-[0.25em] uppercase font-medium">Get in Touch</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-offwhite mt-2 leading-tight">
            Let's <span className="italic font-light text-gold-DEFAULT">create</span>
          </h2>
          <div className="w-12 h-px bg-gold-DEFAULT/60 mt-5" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="h-[220px] border border-white/5 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5000!2d72.8366099!3d21.1507578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDA5JzAyLjciTiA3MsKwNTAnMTEuOCJF!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(0.9) hue-rotate(180deg) saturate(0.5)' }}
                allowFullScreen=""
                loading="lazy"
                title="Vivid Interior Studio Location"
              />
            </div>
            <div>
              <h4 className="text-offwhite font-display text-lg font-semibold mb-1">Studio</h4>
              <p className="text-muted text-sm leading-relaxed">
                S-85/86, New Bamroli Rd,<br />
                opp. Chikuwadi, Pandesara,<br />
                Surat, Gujarat 394221
              </p>
            </div>
            <div>
              <h4 className="text-offwhite font-display text-lg font-semibold mb-1">Contact</h4>
              <p className="text-muted text-sm">+91 63539 60524</p>
              <p className="text-muted text-sm">hello@vividinterior.in</p>
            </div>
            <div>
              <h4 className="text-offwhite font-display text-lg font-semibold mb-1">Hours</h4>
              <p className="text-muted text-sm">Mon — Sat: 10:00 AM — 8:00 PM</p>
              <p className="text-muted text-sm">Sunday: By appointment</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <form onSubmit={handleSubmit} noValidate className="space-y-8">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) => { setForm({ ...form, name: e.target.value }); clearError('name') }}
                  className={`w-full bg-transparent border-0 border-b pb-3 text-offwhite text-sm placeholder-muted/60 focus:outline-none transition-colors duration-300 ${errors.name ? 'border-gold-DEFAULT' : 'border-white/10 focus:border-gold-DEFAULT/60'}`}
                />
                {errors.name && <p className="text-gold-DEFAULT text-xs mt-1.5">{errors.name}</p>}
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={(e) => { setForm({ ...form, email: e.target.value }); clearError('email') }}
                  className={`w-full bg-transparent border-0 border-b pb-3 text-offwhite text-sm placeholder-muted/60 focus:outline-none transition-colors duration-300 ${errors.email ? 'border-gold-DEFAULT' : 'border-white/10 focus:border-gold-DEFAULT/60'}`}
                />
                {errors.email && <p className="text-gold-DEFAULT text-xs mt-1.5">{errors.email}</p>}
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Phone (optional)"
                  value={form.phone}
                  onChange={(e) => { setForm({ ...form, phone: e.target.value }); clearError('phone') }}
                  className={`w-full bg-transparent border-0 border-b pb-3 text-offwhite text-sm placeholder-muted/60 focus:outline-none transition-colors duration-300 ${errors.phone ? 'border-gold-DEFAULT' : 'border-white/10 focus:border-gold-DEFAULT/60'}`}
                />
                {errors.phone && <p className="text-gold-DEFAULT text-xs mt-1.5">{errors.phone}</p>}
              </div>
              <div>
                <textarea
                  rows={3}
                  placeholder="Tell us about your project..."
                  value={form.message}
                  onChange={(e) => { setForm({ ...form, message: e.target.value }); clearError('message') }}
                  className={`w-full bg-transparent border-0 border-b pb-3 text-offwhite text-sm placeholder-muted/60 focus:outline-none transition-colors duration-300 resize-none ${errors.message ? 'border-gold-DEFAULT' : 'border-white/10 focus:border-gold-DEFAULT/60'}`}
                />
                {errors.message && <p className="text-gold-DEFAULT text-xs mt-1.5">{errors.message}</p>}
              </div>
              <button
                type="submit"
                className="w-full border border-gold-DEFAULT/40 py-3.5 text-sm text-offwhite hover:border-gold-DEFAULT hover:text-gold-DEFAULT transition-all duration-500 tracking-wider uppercase"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
