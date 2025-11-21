import { useState, useEffect } from 'react'
import { Menu, X, Github, Mail, Phone } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur bg-slate-900/60 border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="font-bold text-white text-lg tracking-tight">Nishit<span className="text-blue-400">.dev</span></a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-slate-300 hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
            <div className="flex items-center gap-4">
              <a href="https://github.com/nishitkumawat" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white"><Github size={20} /></a>
              <a href="mailto:nishit1060@gmail.com" className="text-slate-300 hover:text-white"><Mail size={20} /></a>
              <a href="tel:+919104513411" className="text-slate-300 hover:text-white"><Phone size={20} /></a>
            </div>
          </nav>

          <button className="md:hidden text-slate-200" onClick={() => setOpen((s) => !s)} aria-label="Toggle Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-3">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="block text-slate-300 hover:text-white" onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}
