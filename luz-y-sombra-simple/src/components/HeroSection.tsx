export default function HeroSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-light to-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">🪟</div>
              <p className="text-primary font-semibold">Cortinas & Persianas Premium</p>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-6">
            <h2 className="text-5xl font-bold text-dark">
              Crea tu Refugio Perfecto
            </h2>
            <p className="text-lg text-gray-600">
              En Bogotá, el frío y el ruido son constantes. Luz & Sombra te ofrece soluciones premium de cortinas y persianas con aislamiento térmico y acústico.
            </p>
            <div className="space-y-3">
              <div className="flex gap-3">
                <span className="text-2xl">🌡️</span>
                <div>
                  <h3 className="font-semibold text-dark">Aislamiento Térmico</h3>
                  <p className="text-sm text-gray-600">Mantén tu hogar cálido en invierno</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-2xl">🔇</span>
                <div>
                  <h3 className="font-semibold text-dark">Aislamiento Acústico</h3>
                  <p className="text-sm text-gray-600">Reduce el ruido de la ciudad</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-2xl">🏠</span>
                <div>
                  <h3 className="font-semibold text-dark">Domótica</h3>
                  <p className="text-sm text-gray-600">Cortinas motorizadas inteligentes</p>
                </div>
              </div>
            </div>
            <a
              href="#contacto"
              className="inline-block px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition font-semibold"
            >
              Agendar Asesoría
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
