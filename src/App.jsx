import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Marquee from './components/marquee/Marquee'
import About from './components/about/About'
import Portfolio from './components/portfolio/Portfolio'
import Services from './components/services/Services'
import Testimonial from './components/testimonial/Testimonial'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import WhatsAppButton from './components/whatsapp/WhatsAppButton'

export default function App() {
  return (
    <div className="min-h-screen bg-dark-bg">
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Portfolio />
      <Services />
      <Testimonial />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
