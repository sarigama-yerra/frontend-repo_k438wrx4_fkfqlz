import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/60 to-slate-950/80 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-white"
        >
          <p className="text-blue-300/90 mb-3">Software Developer • FSD & Backend</p>
          <h1 className="text-4xl sm:text-6xl font-bold leading-tight tracking-tight">
            Hi, I'm Nishit Kumawat
          </h1>
          <p className="text-slate-300 mt-6 text-lg max-w-xl">
            I build scalable web apps and APIs with React, Django, and modern databases. Passionate about clean architecture and seamless UX.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="px-5 py-2.5 rounded-lg bg-blue-500 hover:bg-blue-600 text-white transition">View Projects</a>
            <a href="#contact" className="px-5 py-2.5 rounded-lg border border-white/20 hover:border-white/40 text-white transition">Contact</a>
          </div>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          viewport={{ once: true }}
          className="relative grid grid-cols-2 gap-3 z-10"
        >
          {['Python','Java','Django','React','REST API','MongoDB','Tailwind','Bootstrap'].map((t, i) => (
            <motion.li
              key={t}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 * i, duration: 0.4 }}
              className="px-4 py-3 rounded-xl bg-white/10 backdrop-blur border border-white/10 text-white text-sm"
            >
              {t}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
