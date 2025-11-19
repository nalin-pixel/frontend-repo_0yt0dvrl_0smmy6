export default function About() {
  return (
    <section id="about" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">A playground for future tech</h2>
          <p className="mt-4 text-slate-300/90">
            SeedCodes curates bold experiments across AI, creative coding, and modern web — designed to inspire and ship fast. Each build is modular, documented, and crafted with attention to visual detail.
          </p>
          <p className="mt-3 text-slate-400">
            From interactive 3D to data-driven systems, the focus is clear: turn ambitious ideas into tangible prototypes and products.
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <ul className="grid grid-cols-2 gap-4 text-sm text-slate-300">
            <li className="rounded-xl bg-black/40 border border-white/10 p-4"><span className="block text-2xl font-semibold text-white">3D</span> Interactive scenes</li>
            <li className="rounded-xl bg-black/40 border border-white/10 p-4"><span className="block text-2xl font-semibold text-white">AI</span> Generative features</li>
            <li className="rounded-xl bg-black/40 border border-white/10 p-4"><span className="block text-2xl font-semibold text-white">Web</span> Modern stacks</li>
            <li className="rounded-xl bg-black/40 border border-white/10 p-4"><span className="block text-2xl font-semibold text-white">UX</span> Motion & polish</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
