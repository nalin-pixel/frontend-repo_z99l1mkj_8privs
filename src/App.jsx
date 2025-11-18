import { useEffect, useMemo, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductCard from './components/ProductCard'
import Footer from './components/Footer'

function App() {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(() => {
    fetch(`${baseUrl}/products`)
      .then(r => r.json())
      .then(async data => {
        if (!Array.isArray(data)) return
        setProducts(data)
        if (data.length === 0) {
          // seed demo products then reload
          await fetch(`${baseUrl}/seed`, { method: 'POST' })
          const res = await fetch(`${baseUrl}/products`)
          const seeded = await res.json()
          setProducts(seeded)
        }
      })
      .catch(() => {})
  }, [baseUrl])

  const addToCart = (p) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === p.id)
      if (existing) {
        return prev.map(i => i.id === p.id ? { ...i, quantity: i.quantity + 1 } : i)
      }
      return [...prev, { ...p, quantity: 1, size: p.sizes?.[0] || 'M', color: p.colors?.[0] || 'black' }]
    })
  }

  const removeFromCart = (id) => setCart(prev => prev.filter(i => i.id !== id))

  const total = useMemo(() => cart.reduce((s, i) => s + i.price * i.quantity, 0), [cart])

  const checkout = async () => {
    if (cart.length === 0) return
    const order = {
      items: cart.map(i => ({
        product_id: i.id,
        title: i.title,
        price: i.price,
        size: i.size,
        color: i.color,
        quantity: i.quantity,
        image_url: i.image_url,
      })),
      subtotal: total,
      shipping: 0,
      total,
      customer: { name: 'לקוח חוף', email: 'customer@example.com', address: 'חוף הים 1' }
    }
    const res = await fetch(`${baseUrl}/orders`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(order) })
    if (res.ok) {
      setCart([])
      alert('הזמנה התקבלה! תודה 🎉')
    } else {
      const err = await res.json().catch(() => ({}))
      alert(`שגיאה בהזמנה: ${err.detail || 'נסה שוב'}`)
    }
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-white" dir="rtl">
      <Navbar onCartClick={checkout} />
      <Hero />

      <section id="editorial" className="max-w-7xl mx-auto px-4 mt-8">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="rounded-3xl overflow-hidden ring-1 ring-white/10 bg-white/5 aspect-[16/9]" />
          <div className="rounded-3xl overflow-hidden ring-1 ring-white/10 bg-white/5 aspect-[16/9]" />
          <div className="rounded-3xl overflow-hidden ring-1 ring-white/10 bg-white/5 aspect-[16/9]" />
        </div>
      </section>

      <section id="drops" className="max-w-7xl mx-auto px-4 mt-10">
        <div className="flex items-end justify-between mb-4">
          <h2 className="text-2xl font-extrabold tracking-tight">הדרופ הנוכחי</h2>
          <p className="text-neutral-400 text-sm">מהדורה מוגבלת • מלאי מתעדכן</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map(p => (
            <ProductCard key={p.id} product={p} onAdd={addToCart} />
          ))}
        </div>
      </section>

      {cart.length > 0 && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-xl ring-1 ring-white/15 rounded-2xl p-4 w-[90vw] max-w-2xl">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-white/80">
              <span className="font-bold">{cart.length} פריטים</span>
              <span>•</span>
              <span className="font-extrabold text-white">סה"כ ₪{total}</span>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={() => setCart([])} className="px-4 py-2 bg-white/5 hover:bg-white/15 rounded-xl ring-1 ring-white/10">נקה</button>
              <button onClick={checkout} className="px-4 py-2 bg-white text-neutral-900 rounded-xl hover:bg-neutral-200">לתשלום</button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}

export default App
