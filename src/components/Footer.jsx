export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-white/10 bg-black/60">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-slate-400 text-sm">© SeedCodes. Built for the future.</p>
        <div className="text-slate-400 text-sm">
          <a href="mailto:hello@seedcodes.dev" className="hover:text-white">hello@seedcodes.dev</a>
        </div>
      </div>
    </footer>
  )
}
