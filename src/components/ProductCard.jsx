function ProductCard({ product, onAdd }) {
  return (
    <div className="group rounded-3xl overflow-hidden ring-1 ring-white/10 bg-white/5 hover:bg-white/10 backdrop-blur transition flex flex-col" dir="rtl">
      <div className="relative aspect-[4/5] overflow-hidden">
        <img src={product.image_url} alt={product.title} className="w-full h-full object-cover group-hover:scale-[1.03] transition duration-500" />
        {product.featured && (
          <span className="absolute top-3 right-3 bg-cyan-500 text-white text-xs px-2 py-1 rounded-full">מומלץ</span>
        )}
      </div>
      <div className="p-4 flex flex-col gap-2 grow text-white/90">
        <h3 className="font-semibold text-white">{product.title}</h3>
        <p className="text-sm text-white/70 line-clamp-2">{product.description}</p>
        <div className="mt-auto flex items-center justify-between">
          <div className="font-extrabold text-white">₪{product.price}</div>
          <button onClick={() => onAdd(product)} className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-xl transition ring-1 ring-white/15">הוספה</button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
