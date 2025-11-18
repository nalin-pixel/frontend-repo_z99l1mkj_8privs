function Footer(){
  return (
    <footer className="mt-24 border-t border-white/10 bg-neutral-950" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-6 items-center text-neutral-300">
        <p>© {new Date().getFullYear()} Surf Tee Studio — מיוצר באהבה לים.</p>
        <nav className="flex items-center gap-6 justify-start md:justify-end">
          <a href="#about" className="hover:text-white transition">על המותג</a>
          <a href="#shipping" className="hover:text-white transition">משלוחים והחזרות</a>
          <a href="#contact" className="hover:text-white transition">צור קשר</a>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
