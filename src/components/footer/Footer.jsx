export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-dark-surface py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-baseline gap-1">
            <span className="font-display text-xl font-bold text-offwhite tracking-wide">VIVID.</span>
            <span className="text-gold-DEFAULT text-xl font-bold">✦</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="text-muted hover:text-gold-DEFAULT transition-colors duration-300 text-sm">Instagram</a>
            <a href="#" className="text-muted hover:text-gold-DEFAULT transition-colors duration-300 text-sm">Behance</a>
            <a href="#" className="text-muted hover:text-gold-DEFAULT transition-colors duration-300 text-sm">Pinterest</a>
            <a href="#" className="text-muted hover:text-gold-DEFAULT transition-colors duration-300 text-sm">LinkedIn</a>
          </div>
        </div>

        <div className="border-t border-white/5 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted text-xs">
            &copy; {new Date().getFullYear()} Vivid Interior. Spaces that speak.
          </p>
          <p className="text-muted text-xs">
            Surat — India
          </p>
        </div>
      </div>
    </footer>
  )
}
