import { ClipboardList, Landmark, Map, QrCode, ShoppingCart, Truck } from 'lucide-react'
import { useIdioma } from '../i18n/LanguageContext'
import { ScrollReveal } from './ui/ScrollReveal'

const ICONOS = [ClipboardList, QrCode, Map, ShoppingCart, Landmark, Truck]

export function Modulos() {
  const { textos } = useIdioma()

  return (
    <section className="bg-brand-light/50 px-5 py-20 sm:px-10 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal as="h2" className="text-center text-3xl font-normal text-brand-navy sm:text-4xl">
          {textos.modulos.titulo}
        </ScrollReveal>
        <ScrollReveal as="p" retraso={80} className="mt-3 text-center text-lg text-brand-navy/60">
          {textos.modulos.subtitulo}
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {textos.modulos.lista.map((modulo, indice) => {
            const Icono = ICONOS[indice]
            return (
              <ScrollReveal
                key={modulo.nombre}
                retraso={(indice % 3) * 100}
                className="flex flex-col gap-3 rounded-2xl bg-white p-7 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-navy text-brand-gold">
                  <Icono className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-normal text-brand-navy">{modulo.nombre}</h3>
                <p className="text-brand-navy/70">{modulo.descripcion}</p>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
