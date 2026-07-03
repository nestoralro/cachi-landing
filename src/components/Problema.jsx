import { BrainCircuit, MapPinOff, TrendingDown } from 'lucide-react'
import { useIdioma } from '../i18n/LanguageContext'
import { ScrollReveal } from './ui/ScrollReveal'

const ICONOS = [BrainCircuit, MapPinOff, TrendingDown]

export function Problema() {
  const { textos } = useIdioma()

  return (
    <section className="bg-white px-5 py-20 sm:px-10 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal as="h2" className="mb-14 text-center text-3xl font-normal text-brand-navy sm:text-4xl">
          {textos.problema.titulo}
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {textos.problema.tarjetas.map((texto, indice) => {
            const Icono = ICONOS[indice]
            return (
              <ScrollReveal
                key={texto}
                retraso={indice * 120}
                className="flex flex-col items-center gap-4 rounded-2xl border border-brand-light bg-brand-light/40 p-8 text-center"
              >
                <Icono className="h-12 w-12 text-brand-gold" strokeWidth={1.5} aria-hidden="true" />
                <p className="text-lg text-brand-navy">{texto}</p>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
