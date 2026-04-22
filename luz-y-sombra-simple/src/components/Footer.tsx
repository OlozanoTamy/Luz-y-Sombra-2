export default function Footer() {
  return (
    <footer className="bg-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Luz & Sombra</h3>
            <p className="text-gray-400">Cortinas y persianas premium en Bogotá</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#servicios" className="hover:text-white transition">Aislamiento Térmico</a></li>
              <li><a href="#servicios" className="hover:text-white transition">Aislamiento Acústico</a></li>
              <li><a href="#servicios" className="hover:text-white transition">Domótica</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Productos</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#productos" className="hover:text-white transition">Línea Esencial</a></li>
              <li><a href="#productos" className="hover:text-white transition">Línea Premium</a></li>
              <li><a href="#productos" className="hover:text-white transition">Línea Smart</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Bogotá, Colombia</li>
              <li>+57 (1) 555-0000</li>
              <li>info@luzysombra.com</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2026 Luz & Sombra. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
