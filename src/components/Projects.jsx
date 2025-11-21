import { motion } from 'framer-motion'

const projects = [
  {
    title: 'BrandFlow - Market and Manage',
    date: 'July 2025',
    description:
      'Full-stack business management platform with client, employee, task, document, mailing, and marketing modules. React + Django REST Framework.',
    tags: ['React', 'Django', 'DRF', 'Tailwind'],
    link: '#',
  },
  {
    title: 'WorkFlow',
    date: 'Aug 2024',
    description:
      'Desktop Employee Chat Management System using Java Swing with a conversational workflow for managing employees.',
    tags: ['Java', 'Swing'],
    link: '#',
  },
  {
    title: 'Speed Air Booking',
    date: 'Aug 2024',
    description:
      'Java Swing app to search, book, and manage flight reservations with a streamlined UI.',
    tags: ['Java', 'Swing'],
    link: '#',
  },
  {
    title: 'FINTRACK',
    date: 'Feb 2025',
    description:
      'Financial management app for inventory, billing, and analytics. Built with Django + Bootstrap.',
    tags: ['Django', 'Bootstrap', 'SQL'],
    link: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-white"
        >
          Projects
        </motion.h2>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              target={p.link.startsWith('http') ? '_blank' : undefined}
              rel={p.link.startsWith('http') ? 'noreferrer' : undefined}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="block p-6 rounded-2xl bg-slate-800/50 border border-white/10 hover:border-white/20 hover:bg-slate-800/70 transition"
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-xl font-semibold text-white">{p.title}</h3>
                <span className="text-xs text-slate-400 whitespace-nowrap">{p.date}</span>
              </div>
              <p className="mt-2 text-slate-300">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded-full bg-white/10 text-white text-xs">
                    {t}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
