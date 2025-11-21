import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />

      <footer className="py-8 border-t border-white/10 text-center text-slate-400">
        © {new Date().getFullYear()} Nishit Kumawat. Built with love and clean code.
      </footer>
    </div>
  )
}

export default App
