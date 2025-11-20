import React from 'react'
import Hero from './components/Hero'
import ParallaxSection from './components/ParallaxSection'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="bg-black min-h-screen text-white font-[var(--font-geist-mono)]">
      {/* floating particles */}
      <div className="pointer-events-none fixed inset-0 opacity-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(56,189,248,0.08),transparent_35%),radial-gradient(circle_at_90%_20%,rgba(217,70,239,0.08),transparent_35%)]" />
      </div>

      <Hero />
      <ParallaxSection />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
