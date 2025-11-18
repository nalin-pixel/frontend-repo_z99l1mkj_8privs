function Hero() {
  return (
    <section className="relative overflow-hidden" dir="rtl">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.15),transparent_40%),radial-gradient(ellipse_at_bottom_left,rgba(14,165,233,0.15),transparent_40%)]" />
      <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight">
            חולצות גלישה שבאות מהגל
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            קולקציה ייחודית בהשראת החופים, הזריחות והסווּל. בד נעים, גזרה נוחה ועיצוב שמדבר ים.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#catalog" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg transition">צפו בקטלוג</a>
            <a href="#featured" className="bg-slate-900 hover:bg-slate-800 text-white px-5 py-3 rounded-lg transition">מומלצים</a>
          </div>
        </div>
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=1600&auto=format&fit=crop"
            alt="Surfer Tee"
            className="rounded-2xl shadow-2xl border border-slate-200"
          />
          <div className="absolute -bottom-4 -left-4 bg-white shadow-xl rounded-xl px-4 py-3 border border-slate-200">
            <p className="text-sm text-slate-600">100% כותנה אורגנית • ייצור מקומי</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
