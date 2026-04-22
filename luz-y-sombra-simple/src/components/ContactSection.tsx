import { useState } from 'react'
import { Phone, Mail, MapPin } from 'lucide-react'
import { saveContactInquiry } from '../lib/firestoreService'
import { toast, Toaster } from 'sonner'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: '',
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      await saveContactInquiry(formData)
      toast.success('¡Mensaje enviado exitosamente!')
      toast.info('Nos pondremos en contacto en menos de 2 horas.')
      setFormData({ nombre: '', email: '', telefono: '', mensaje: '' })
    } catch (error) {
      console.error('Error:', error)
      toast.error('Error al enviar el mensaje. Intenta de nuevo.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <Toaster position="top-center" />
      <section id="contacto" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">Contáctanos Hoy</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Agendar tu asesoría personalizada es fácil. Completa el formulario o comunícate directamente.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-light rounded-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-dark mb-2">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark mb-2">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    placeholder="+57 300 000 0000"
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark mb-2">
                    Mensaje
                  </label>
                  <textarea
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    placeholder="Cuéntanos sobre tu proyecto..."
                    rows={5}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-primary"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition font-semibold disabled:opacity-50"
                >
                  {isLoading ? 'Enviando...' : 'Enviar Solicitud'}
                </button>

                <p className="text-xs text-gray-600 text-center">
                  Nos pondremos en contacto en menos de 2 horas.
                </p>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-dark mb-6">Información de Contacto</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-dark">Teléfono</p>
                      <p className="text-gray-600">+57 (1) 555-0000</p>
                      <p className="text-sm text-gray-600">Lunes a viernes, 8am - 6pm</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-dark">Correo</p>
                      <p className="text-gray-600">info@luzysombra.com</p>
                      <p className="text-sm text-gray-600">Respuesta en menos de 2 horas</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-dark">Ubicación</p>
                      <p className="text-gray-600">Bogotá, Colombia</p>
                      <p className="text-sm text-gray-600">Atendemos toda la ciudad y Sabana</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-6 border border-primary/20">
                <h4 className="font-semibold text-dark mb-2">¿Prefieres WhatsApp?</h4>
                <p className="text-gray-600 mb-4">Envíanos un mensaje directo y te responderemos al instante.</p>
                <a
                  href="https://wa.me/573001234567?text=Hola%20Luz%20%26%20Sombra%2C%20me%20gustaría%20agendar%20una%20asesoría"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition font-medium"
                >
                  Chatear en WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
