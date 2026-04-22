export default function ProductsSection() {
  const products = [
    {
      category: 'Esencial',
      items: ['Cortinas Blackout', 'Persianas Aluminio', 'Cortinas Lino'],
      price: 'Desde $500K',
    },
    {
      category: 'Premium',
      items: ['Cortinas Térmicas', 'Persianas Motorizadas', 'Cortinas Acústicas'],
      price: 'Desde $1.5M',
    },
    {
      category: 'Smart',
      items: ['Sistema Domótica', 'Control por App', 'Automatización Completa'],
      price: 'Desde $3M',
    },
  ]

  return (
    <section id="productos" className="py-20 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark mb-4">Nuestros Productos</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tres líneas de productos para cada presupuesto
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition border-t-4 border-primary">
              <h3 className="text-2xl font-bold text-primary mb-4">{product.category}</h3>
              <ul className="space-y-3 mb-6">
                {product.items.map((item, i) => (
                  <li key={i} className="flex gap-2 text-gray-700">
                    <span className="text-accent">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-lg font-semibold text-dark">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
