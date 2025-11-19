import { useEffect, useState } from 'react'
import { Globe, Github, Tag } from 'lucide-react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Projects() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeTag, setActiveTag] = useState('')

  useEffect(() => {
    const url = new URL(`${API_BASE}/api/projects`)
    if (activeTag) url.searchParams.set('tag', activeTag)
    fetch(url.toString())
      .then(r => r.json())
      .then(data => setProjects(data))
      .finally(() => setLoading(false))
  }, [activeTag])

  const tags = Array.from(new Set(projects.flatMap(p => p.tags || []))).slice(0, 8)

  return (
    <section id="projects" className="relative py-16 md:py-24 bg-[radial-gradient(ellipse_at_top,rgba(251,146,60,0.08),transparent_40%)]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">Featured projects</h2>
            <p className="text-slate-400 mt-2">A rotating set of experimental builds and tools.</p>
          </div>
          {tags.length > 0 && (
            <div className="hidden md:flex items-center gap-2">
              <button onClick={() => setActiveTag('')} className={`px-3 py-1.5 text-xs rounded-full border ${activeTag === '' ? 'border-orange-400 text-orange-300' : 'border-white/10 text-slate-300'} bg-black/30`}>All</button>
              {tags.map(t => (
                <button key={t} onClick={() => setActiveTag(t)} className={`px-3 py-1.5 text-xs rounded-full border ${activeTag === t ? 'border-orange-400 text-orange-300' : 'border-white/10 text-slate-300'} bg-black/30 flex items-center gap-1`}>
                  <Tag className="h-3 w-3" /> {t}
                </button>
              ))}
            </div>
          )}
        </div>

        {loading ? (
          <div className="mt-10 text-slate-400">Loading projects…</div>
        ) : (
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <article key={p.id || p._id} className="group rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-5 hover:border-orange-400/40 transition">
                <div className="aspect-video rounded-lg bg-black/40 border border-white/10 overflow-hidden">
                  {p.thumbnail ? (
                    <img src={p.thumbnail} alt={p.title} className="h-full w-full object-cover" />
                  ) : (
                    <div className="h-full w-full grid place-items-center text-slate-500 text-sm">No thumbnail</div>
                  )}
                </div>
                <h3 className="mt-4 text-white font-semibold tracking-tight text-lg">{p.title}</h3>
                <p className="mt-1 text-slate-400 text-sm line-clamp-2">{p.description}</p>
                {p.tags?.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {p.tags.slice(0,4).map(t => (
                      <span key={t} className="text-[10px] uppercase tracking-wide text-orange-300/80 bg-orange-500/10 border border-orange-500/20 px-2 py-0.5 rounded-full">{t}</span>
                    ))}
                  </div>
                )}
                <div className="mt-4 flex items-center gap-3">
                  {p.live_url && (
                    <a href={p.live_url} target="_blank" className="inline-flex items-center gap-1.5 text-xs text-slate-200 hover:text-white">
                      <Globe className="h-3.5 w-3.5" /> Live
                    </a>
                  )}
                  {p.github_url && (
                    <a href={p.github_url} target="_blank" className="inline-flex items-center gap-1.5 text-xs text-slate-200 hover:text-white">
                      <Github className="h-3.5 w-3.5" /> Code
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
