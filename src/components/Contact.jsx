import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [status, setStatus] = useState(null)

  const onSubmit = async (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.currentTarget))

    try {
      const email = 'nishit1060@gmail.com'
      const subject = encodeURIComponent(`Portfolio Contact from ${data.name}`)
      const body = encodeURIComponent(`${data.message}\n\nName: ${data.name}\nEmail: ${data.email}`)
      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`
      setStatus('Opening email client...')
    } catch (e) {
      setStatus('Something went wrong. Please try again later.')
    }
  }

  return (
    <section id="contact" className="relative py-24">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-white"
        >
          Contact
        </motion.h2>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-8 grid md:grid-cols-2 gap-6"
        >
          <input name="name" placeholder="Your name" required className="px-4 py-3 rounded-xl bg-slate-800/50 border border-white/10 text-white placeholder:text-slate-400 outline-none" />
          <input name="email" type="email" placeholder="Your email" required className="px-4 py-3 rounded-xl bg-slate-800/50 border border-white/10 text-white placeholder:text-slate-400 outline-none" />
          <textarea name="message" placeholder="Your message" rows={6} className="md:col-span-2 px-4 py-3 rounded-xl bg-slate-800/50 border border-white/10 text-white placeholder:text-slate-400 outline-none" />
          <div className="md:col-span-2 flex items-center gap-4">
            <button className="px-5 py-2.5 rounded-lg bg-blue-500 hover:bg-blue-600 text-white transition">Send</button>
            {status && <p className="text-slate-300 text-sm">{status}</p>}
          </div>
        </motion.form>
      </div>
    </section>
  )
}
