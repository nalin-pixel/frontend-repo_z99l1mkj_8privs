import { ShoppingCart, Waves } from 'lucide-react'

function Navbar({ onCartClick }) {
  return (
    <header className="w-full sticky top-0 z-50 border-b border-white/10 bg-gradient-to-b from-neutral-900/80 to-neutral-900/30 backdrop-blur-xl" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
          <div className="p-2 rounded-xl bg-cyan-500/15 text-cyan-300 ring-1 ring-cyan-400/30 group-hover:bg-cyan-500/25 transition">
            <Waves size={22} />
          </div>
          <div className="leading-tight">
            <p className="font-extrabold tracking-tight text-white text-lg">Surf Tee Studio</p>
            <p className="text-xs text-neutral-400">ללבוש את הים</p>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#editorial" className="text-neutral-300 hover:text-white transition">מגזין</a>
          <a href="#drops" className="text-neutral-300 hover:text-white transition">קולקציה</a>
          <a href="#about" className="text-neutral-300 hover:text-white transition">על המותג</a>
        </nav>

        <button onClick={onCartClick} className="relative inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-xl transition ring-1 ring-white/20">
          <ShoppingCart size={18} />
          <span>תשלום</span>
        </button>
      </div>
    </header>
  )
}

export default Navbar
