import { motion } from 'framer-motion'

const skills = [
  { name: 'Python', level: 90 },
  { name: 'Java', level: 80 },
  { name: 'Django', level: 85 },
  { name: 'REST API', level: 85 },
  { name: 'React', level: 75 },
  { name: 'MongoDB', level: 80 },
  { name: 'Tailwind', level: 85 },
  { name: 'Bootstrap', level: 80 },
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-white"
        >
          Skills
        </motion.h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {skills.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="p-5 rounded-xl bg-slate-800/50 border border-white/10"
            >
              <div className="flex items-center justify-between mb-2">
                <p className="text-slate-200 font-medium">{s.name}</p>
                <p className="text-slate-400 text-sm">{s.level}%</p>
              </div>
              <div className="h-2 rounded bg-slate-700 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="h-full bg-gradient-to-r from-blue-500 to-cyan-400"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
