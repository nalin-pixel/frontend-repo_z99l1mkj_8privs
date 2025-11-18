function Hero() {
  return (
    <section id="top" className="relative overflow-hidden" dir="rtl">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-neutral-950" />
        <div className="absolute -top-40 -right-40 w-[60rem] h-[60rem] rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[50rem] h-[50rem] rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08),transparent_60%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="text-white">
          <p className="inline-block text-xs tracking-widest uppercase text-neutral-400 ring-1 ring-white/15 px-3 py-1 rounded-full">גל חדש נוחת בחוף</p>
          <h1 className="mt-5 text-4xl md:text-6xl font-black leading-[1.1] tracking-tight">
            קולקציית Surfer Essentials 2025
          </h1>
          <p className="mt-5 text-lg text-neutral-300 max-w-prose">
            חולצות גלישה פרימיום בעיצוב מינימליסטי ומגע רך במיוחד. מיוצרות באחריות, נבנו לים וליומיום.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#drops" className="bg-white text-neutral-900 px-5 py-3 rounded-xl hover:bg-neutral-200 transition">לרכישה מיידית</a>
            <a href="#editorial" className="bg-transparent text-white px-5 py-3 rounded-xl hover:bg-white/10 transition ring-1 ring-white/20">השראה</a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/5] overflow-hidden rounded-3xl ring-1 ring-white/10 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1519444793793-66f0b1a5cf5d?q=80&w=1600&auto=format&fit=crop"
              alt="Surf Editorial"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -left-5 bg-white/10 backdrop-blur rounded-2xl px-4 py-3 ring-1 ring-white/20 text-white">
            <p className="text-sm">100% כותנה אורגנית • ייבוש מהיר • גזרה משופרת</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
