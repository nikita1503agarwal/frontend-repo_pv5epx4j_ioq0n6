import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function ParallaxSection() {
  const { scrollYProgress } = useScroll()
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -300])

  return (
    <section id="about" className="relative bg-[#05060A] text-slate-100 py-28 overflow-hidden">
      {/* Parallax background patterns */}
      <motion.div style={{ y: y2 }} className="pointer-events-none absolute inset-0 opacity-[0.08]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.35),transparent_30%),radial-gradient(circle_at_80%_30%,rgba(217,70,239,0.35),transparent_30%)] blur-3xl" />
      </motion.div>
      <motion.div style={{ y: y1 }} className="pointer-events-none absolute inset-0 opacity-20">
        <div className="w-full h-full bg-[linear-gradient(transparent_0,transparent_96%,rgba(56,189,248,0.25)_100%),linear-gradient(90deg,transparent_0,transparent_96%,rgba(217,70,239,0.25)_100%)] bg-[length:32px_32px]" />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid md:grid-cols-2 gap-10 items-stretch">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6 }} className="p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-cyan-400/20 shadow-[0_0_0_1px_rgba(0,0,0,0.2),0_20px_80px_-40px_rgba(0,0,0,0.6)]">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50">Futuristic, minimal, premium</h2>
            <p className="mt-4 text-slate-300/90 leading-relaxed">
              I craft immersive interfaces with cinematic depth, precision micro-interactions, and a focus on performance. Clean geometry, subtle glow, and modern typographic rhythm.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {['React','Three/Spline','Framer Motion','Tailwind','FastAPI'].map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full text-xs tracking-wide border border-cyan-400/30 text-cyan-100/90 bg-cyan-500/10">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.7 }} className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20" />
            <div className="relative aspect-[4/3] bg-[#0A0C12] border border-slate-700/60 rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(56,189,248,0.15),transparent_40%),radial-gradient(circle_at_70%_60%,rgba(217,70,239,0.15),transparent_45%)]" />
              <div className="absolute inset-4 rounded-2xl border border-cyan-400/30 bg-slate-900/50 backdrop-blur-md shadow-[inset_0_0_0_1px_rgba(34,211,238,0.2),0_10px_40px_-20px_rgba(34,211,238,0.3)]" />
              <div className="absolute bottom-4 left-4 text-xs text-cyan-100/70">Holographic UI preview</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
