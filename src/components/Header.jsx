const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'Projects', href: '#projects' },
  { label: 'Publications', href: '#publications' },
  { label: 'Media', href: '#media' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-black/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-20 flex items-center justify-between">
        <nav className="hidden sm:flex items-center gap-8 text-xs font-medium tracking-widest uppercase">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="py-1 border-b border-transparent hover:border-black transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3.5 ml-auto">
          <span className="font-serif italic text-lg sm:text-xl tracking-tight">
            Evans Kwasi
          </span>
          <div className="w-8 h-8 rounded-full border border-black flex items-center justify-center shrink-0">
            <span className="font-serif text-xs">EK</span>
          </div>
        </div>
      </div>

      <nav className="sm:hidden flex items-center gap-6 overflow-x-auto px-6 pb-3 text-xs font-medium tracking-widest uppercase">
        {NAV_LINKS.map((link) => (
          <a key={link.label} href={link.href} className="whitespace-nowrap">
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  )
}
