function ProductCard({ product, onAdd }) {
  return (
    <div className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition flex flex-col" dir="rtl">
      <div className="relative aspect-square overflow-hidden">
        <img src={product.image_url} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition" />
        {product.featured && (
          <span className="absolute top-3 right-3 bg-blue-600 text-white text-xs px-2 py-1 rounded">מומלץ</span>
        )}
      </div>
      <div className="p-4 flex flex-col gap-2 grow">
        <h3 className="font-bold text-slate-900">{product.title}</h3>
        <p className="text-sm text-slate-600 line-clamp-2">{product.description}</p>
        <div className="mt-auto flex items-center justify-between">
          <div className="font-extrabold text-slate-900">₪{product.price}</div>
          <button onClick={() => onAdd(product)} className="bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-slate-800 transition">הוספה</button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
