import { Menu, Github, Rocket } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-30">
      <nav className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative h-9 w-9 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 shadow-[0_0_40px_rgba(251,146,60,0.35)] grid place-items-center">
            <Rocket className="h-5 w-5 text-black" />
          </div>
          <div className="leading-tight">
            <p className="text-white font-semibold tracking-tight text-lg">SeedCodes</p>
            <p className="text-xs text-orange-300/70">Future-forward projects</p>
          </div>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-slate-300">
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-slate-300 hover:text-white">
            <Github className="h-4 w-4" />
            <span>GitHub</span>
          </a>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden text-slate-200">
          <Menu />
        </button>
      </nav>
      {open && (
        <div className="md:hidden px-6 pb-6">
          <div className="rounded-xl border border-white/10 bg-black/40 backdrop-blur p-4 space-y-2">
            <a href="#projects" className="block text-slate-300 hover:text-white">Projects</a>
            <a href="#about" className="block text-slate-300 hover:text-white">About</a>
            <a href="#contact" className="block text-slate-300 hover:text-white">Contact</a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="block text-slate-300 hover:text-white">GitHub</a>
          </div>
        </div>
      )}
    </header>
  );
}
