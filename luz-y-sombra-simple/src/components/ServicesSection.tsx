export default function ServicesSection() {
  const services = [
    {
      icon: '🌡️',
      title: 'Aislamiento Térmico',
      description: 'Cortinas celulares y telas térmicas que mantienen tu hogar cálido en invierno y fresco en verano.',
    },
    {
      icon: '🔇',
      title: 'Aislamiento Acústico',
      description: 'Reduce hasta 70% del ruido exterior. Perfecto para zonas de alto tráfico en Bogotá.',
    },
    {
      icon: '🏠',
      title: 'Domótica',
      description: 'Cortinas motorizadas controladas por app. Automatiza tu hogar con tecnología inteligente.',
    },
    {
      icon: '🎨',
      title: 'Diseño Personalizado',
      description: 'Asesoría profesional para elegir colores, texturas y estilos que complementen tu decoración.',
    },
  ]

  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark mb-4">Nuestros Servicios</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Soluciones integrales para tu hogar en Bogotá
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-light rounded-lg p-6 hover:shadow-lg transition">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-dark mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
