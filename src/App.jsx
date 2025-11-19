import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(ellipse_at_center,rgba(255,115,0,0.06),transparent_45%)]" />
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Footer />
    </div>
  )
}

export default App
