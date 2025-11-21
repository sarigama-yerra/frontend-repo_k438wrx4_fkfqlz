import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(1000px_400px_at_top_right,rgba(59,130,246,0.15),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-white"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 text-slate-300 max-w-3xl"
        >
          I'm a 5th-semester engineering student focused on building reliable, scalable products. I enjoy backend problem solving and full-stack delivery — from designing REST APIs to shipping polished UI with React and Tailwind.
        </motion.p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: 'Languages', value: 'Python, Java, JavaScript' },
            { label: 'Frameworks', value: 'Django, React, Express' },
            { label: 'Databases', value: 'MongoDB, SQL' },
            { label: 'Tools', value: 'GitHub, Tailwind, Bootstrap' },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="p-5 rounded-xl bg-slate-800/50 border border-white/10 text-slate-200"
            >
              <p className="text-slate-400 text-sm">{item.label}</p>
              <p className="mt-1 font-medium">{item.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
