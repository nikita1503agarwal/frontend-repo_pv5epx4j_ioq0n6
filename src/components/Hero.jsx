import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

const NeonBadge = () => (
  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 border border-cyan-400/30 text-cyan-200 text-xs tracking-wider uppercase backdrop-blur-md shadow-[0_0_40px_0_rgba(34,211,238,0.25)]">
    <span className="w-1.5 h-1.5 rounded-full bg-cyan-300 animate-pulse" />
    Live Build Mode
  </div>
)

export default function Hero() {
  return (
    <section className="relative h-[100svh] overflow-hidden bg-black text-white">
      {/* Glow gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 w-[60vh] h-[60vh] rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute -bottom-16 -right-16 w-[55vh] h-[55vh] rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(56,189,248,0.08),transparent_45%),radial-gradient(circle_at_30%_80%,rgba(217,70,239,0.08),transparent_40%)]" />
      </div>

      {/* Spline 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* soft vignette overlay */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.4)_100%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 sm:px-10 flex items-center">
        <div className="w-full sm:max-w-2xl">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }} className="mb-5">
            <NeonBadge />
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.8, ease: 'easeOut' }} className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-fuchsia-300 drop-shadow-[0_0_20px_rgba(34,211,238,0.25)]">
              Royal Bengal
            </span>
            <span className="block mt-2 text-slate-100/90 font-light">— Developer</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.65 }} className="mt-6 text-slate-300/90 leading-relaxed max-w-xl">
            Building cinematic, high-performance web experiences with a dark, minimal, and futuristic edge.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.65 }} className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#work" className="group relative inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium tracking-wide">
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 opacity-70 blur-md group-hover:opacity-90 transition" />
              <span className="relative rounded-full bg-slate-900/70 border border-cyan-400/40 px-6 py-3 text-cyan-100 backdrop-blur-md shadow-[inset_0_0_0_1px_rgba(34,211,238,0.25),0_0_0_1px_rgba(0,0,0,0.2)] group-hover:shadow-[inset_0_0_0_1px_rgba(34,211,238,0.35),0_0_25px_0_rgba(56,189,248,0.25)] transition">
                View Work
              </span>
            </a>
            <a href="#about" className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium tracking-wide border border-slate-700/60 bg-slate-900/50 text-slate-200 backdrop-blur-md hover:border-cyan-400/40 hover:text-cyan-100 transition">
              About
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 1 }} className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2">
        <div className="h-10 w-[2px] bg-gradient-to-b from-transparent via-cyan-400/70 to-transparent animate-[pulse_2.5s_ease-in-out_infinite]" />
      </motion.div>
    </section>
  )
}
