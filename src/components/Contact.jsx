import React from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section className="relative bg-[#06070C] text-slate-100 py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(56,189,248,0.1),transparent_40%),radial-gradient(circle_at_80%_50%,rgba(217,70,239,0.1),transparent_40%)]" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 sm:px-10">
        <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-2xl sm:text-3xl font-semibold tracking-tight">
          Let’s build something cinematic
        </motion.h3>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.05 }} className="mt-3 text-slate-300/90 max-w-2xl">
          Available for high-end web experiences, product sites, and interactive storytelling.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="mt-8 p-8 rounded-3xl border border-cyan-400/20 bg-slate-900/40 backdrop-blur-xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 justify-between">
            <div>
              <div className="text-sm uppercase tracking-widest text-cyan-300/80">Email</div>
              <a href="mailto:hi@royalbengal.dev" className="text-lg text-slate-50 hover:text-cyan-200 transition">hi@royalbengal.dev</a>
            </div>
            <a href="#" className="group relative inline-flex items-center rounded-full px-6 py-3">
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 opacity-70 blur-md group-hover:opacity-90 transition" />
              <span className="relative rounded-full bg-slate-900/70 border border-cyan-400/40 px-6 py-3 text-cyan-100 backdrop-blur-md">Start a project</span>
            </a>
          </div>
        </motion.div>

        <div className="mt-10 text-xs text-slate-500">© {new Date().getFullYear()} Royal Bengal</div>
      </div>
    </section>
  )
}
