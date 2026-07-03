import { useState } from 'react'
import { useIdioma } from '../i18n/LanguageContext'
import { ScrollReveal } from './ui/ScrollReveal'
import { Boton } from './ui/Boton'
import { construirLinkWhatsApp } from '../utils/whatsapp'

const CAMPOS_INICIALES = { nombre: '', empresa: '', whatsapp: '', vendedores: '' }

function construirMensaje(datos, idioma) {
  if (idioma === 'ES') {
    return [
      'Hola, quiero conocer más sobre Cachi.',
      `Nombre: ${datos.nombre}`,
      `Empresa: ${datos.empresa}`,
      `WhatsApp: ${datos.whatsapp}`,
      `Número de vendedores: ${datos.vendedores}`,
    ].join('\n')
  }
  return [
    "Hi, I'd like to learn more about Cachi.",
    `Name: ${datos.nombre}`,
    `Company: ${datos.empresa}`,
    `WhatsApp: ${datos.whatsapp}`,
    `Number of salespeople: ${datos.vendedores}`,
  ].join('\n')
}

export function CTAFinal() {
  const { textos } = useIdioma()
  const [datos, setDatos] = useState(CAMPOS_INICIALES)

  function cambiar(campo, valor) {
    setDatos((actual) => ({ ...actual, [campo]: valor }))
  }

  function alEnviar(evento) {
    evento.preventDefault()
    const mensaje = construirMensaje(datos, textos.idioma)
    window.open(construirLinkWhatsApp(mensaje), '_blank')
  }

  return (
    <section id="contacto" className="bg-brand-light/50 px-5 py-20 sm:px-10 sm:py-28">
      <div className="mx-auto max-w-lg">
        <ScrollReveal as="h2" className="text-center text-3xl font-normal text-brand-navy sm:text-4xl">
          {textos.ctaFinal.titulo}
        </ScrollReveal>

        <ScrollReveal retraso={100}>
          <form onSubmit={alEnviar} className="mt-10 flex flex-col gap-4 rounded-2xl bg-white p-8 shadow-sm">
            <div className="flex flex-col gap-1">
              <label htmlFor="nombre" className="text-sm font-medium text-brand-navy">
                {textos.ctaFinal.form.nombre}
              </label>
              <input
                id="nombre"
                required
                value={datos.nombre}
                onChange={(evento) => cambiar('nombre', evento.target.value)}
                className="rounded-lg border border-gray-300 px-4 py-2.5 focus:border-brand-navy focus:outline-none focus:ring-1 focus:ring-brand-navy"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="empresa" className="text-sm font-medium text-brand-navy">
                {textos.ctaFinal.form.empresa}
              </label>
              <input
                id="empresa"
                required
                value={datos.empresa}
                onChange={(evento) => cambiar('empresa', evento.target.value)}
                className="rounded-lg border border-gray-300 px-4 py-2.5 focus:border-brand-navy focus:outline-none focus:ring-1 focus:ring-brand-navy"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="whatsapp" className="text-sm font-medium text-brand-navy">
                {textos.ctaFinal.form.whatsapp}
              </label>
              <input
                id="whatsapp"
                type="tel"
                required
                value={datos.whatsapp}
                onChange={(evento) => cambiar('whatsapp', evento.target.value)}
                placeholder="+57 300 000 0000"
                className="rounded-lg border border-gray-300 px-4 py-2.5 focus:border-brand-navy focus:outline-none focus:ring-1 focus:ring-brand-navy"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="vendedores" className="text-sm font-medium text-brand-navy">
                {textos.ctaFinal.form.vendedores}
              </label>
              <input
                id="vendedores"
                type="number"
                min="1"
                required
                value={datos.vendedores}
                onChange={(evento) => cambiar('vendedores', evento.target.value)}
                className="rounded-lg border border-gray-300 px-4 py-2.5 focus:border-brand-navy focus:outline-none focus:ring-1 focus:ring-brand-navy"
              />
            </div>

            <Boton type="submit" variante="navy" className="mt-2 w-full">
              {textos.ctaFinal.form.enviar}
            </Boton>
          </form>
        </ScrollReveal>
      </div>
    </section>
  )
}
