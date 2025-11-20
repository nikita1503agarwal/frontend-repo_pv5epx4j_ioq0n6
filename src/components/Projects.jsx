import React from 'react'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Neon Commerce',
    desc: 'Dark e-commerce concept with holographic product cards and fluid micro-interactions.',
  },
  {
    title: 'Quantum Dashboard',
    desc: 'Cinematic analytics with glass panels, neon outlines, and depth-graded parallax.',
  },
  {
    title: 'Spectra Studio',
    desc: 'Portfolio engine with 3D scenes, curved separators, and particle fields.',
  },
]

export default function Projects() {
  return (
    <section id="work" className="relative bg-[#07090E] text-slate-100 py-28">
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.5),transparent_35%),radial-gradient(circle_at_80%_90%,rgba(217,70,239,0.5),transparent_35%)] blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl sm:text-4xl font-semibold tracking-tight">
          Featured Projects
        </motion.h2>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href="#"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative rounded-2xl p-6 h-56 overflow-hidden border border-slate-800/80 bg-slate-900/40 backdrop-blur-xl shadow-[0_10px_40px_-20px_rgba(0,0,0,0.6)]"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(600px_circle_at_var(--x,50%)_var(--y,50%),rgba(56,189,248,0.18),transparent_40%)]" />
              <div className="absolute -inset-px rounded-2xl border border-transparent group-hover:border-cyan-400/40 transition" />
              <div className="relative z-10">
                <h3 className="text-xl font-medium text-slate-50">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-300/90">{p.desc}</p>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-16">
          <div className="relative h-24">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent blur-xl opacity-60" />
            <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
