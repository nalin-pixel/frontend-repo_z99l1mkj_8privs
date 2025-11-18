function Footer(){
  return (
    <footer className="mt-20 border-t border-slate-200 bg-white" dir="rtl">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-slate-600">© {new Date().getFullYear()} Surf Tee Co. כל הזכויות שמורות</p>
        <nav className="flex items-center gap-6 text-slate-600">
          <a href="#about" className="hover:text-slate-900 transition">עלינו</a>
          <a href="#shipping" className="hover:text-slate-900 transition">משלוחים</a>
          <a href="#contact" className="hover:text-slate-900 transition">צור קשר</a>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
