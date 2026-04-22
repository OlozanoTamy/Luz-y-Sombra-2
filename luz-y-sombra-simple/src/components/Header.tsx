import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold text-primary">Luz & Sombra</h1>
          <p className="text-xs text-accent">CORTINAS</p>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          <a href="#servicios" className="text-dark hover:text-primary transition">Servicios</a>
          <a href="#productos" className="text-dark hover:text-primary transition">Productos</a>
          <a href="#contacto" className="text-dark hover:text-primary transition">Contacto</a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-light border-t border-border">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <a href="#servicios" className="text-dark hover:text-primary">Servicios</a>
            <a href="#productos" className="text-dark hover:text-primary">Productos</a>
            <a href="#contacto" className="text-dark hover:text-primary">Contacto</a>
          </div>
        </nav>
      )}
    </header>
  )
}
