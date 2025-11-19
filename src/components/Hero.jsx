import Spline from '@splinetool/react-spline'
import { ChevronRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black pointer-events-none" />
      <div className="h-[68vh] md:h-[78vh] w-full">
        <Spline scene="https://prod.spline.design/xXD1hOqciVNtJX50/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 flex items-end md:items-center">
        <div className="mx-auto max-w-7xl px-6 pb-12 md:pb-0">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-black/40 px-3 py-1 text-xs text-orange-300/80 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500 animate-pulse" /> Live beta
            </div>
            <h1 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight text-white">
              SeedCodes — where futuristic ideas become working code
            </h1>
            <p className="mt-4 text-slate-300/90 text-base md:text-lg">
              Explore a collection of experimental projects spanning AI, web, and creative tech — engineered with precision and a touch of play.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-b from-orange-500 to-amber-600 px-4 py-2.5 text-sm font-medium text-black shadow-[0_10px_40px_-10px_rgba(251,146,60,0.65)] hover:brightness-110 transition">
                Browse projects <ChevronRight className="h-4 w-4" />
              </a>
              <a href="#about" className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-white hover:bg-white/10 transition">
                About SeedCodes
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
