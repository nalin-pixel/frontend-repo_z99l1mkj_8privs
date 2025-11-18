import { ShoppingCart, Waves } from 'lucide-react'

function Navbar({ onCartClick }) {
  return (
    <header className="w-full sticky top-0 z-40 bg-white/70 backdrop-blur border-b border-slate-200" dir="rtl">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-blue-100 text-blue-600">
            <Waves size={22} />
          </div>
          <div className="leading-tight">
            <p className="font-extrabold text-slate-900 tracking-tight">Surf Tee Co.</p>
            <p className="text-xs text-slate-500">חולצות גלישה איכותיות</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-slate-600">
          <a href="#featured" className="hover:text-slate-900 transition">מומלצים</a>
          <a href="#catalog" className="hover:text-slate-900 transition">קטלוג</a>
          <a href="#about" className="hover:text-slate-900 transition">עלינו</a>
        </nav>

        <button onClick={onCartClick} className="relative inline-flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-slate-800 transition">
          <ShoppingCart size={18} />
          <span>עגלה</span>
        </button>
      </div>
    </header>
  )
}

export default Navbar
