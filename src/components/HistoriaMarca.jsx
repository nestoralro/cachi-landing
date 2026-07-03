import { useIdioma } from '../i18n/LanguageContext'
import { ScrollReveal } from './ui/ScrollReveal'

export function HistoriaMarca() {
  const { textos } = useIdioma()

  return (
    <section className="relative overflow-hidden bg-brand-navy px-5 py-20 text-center text-white sm:px-10 sm:py-28">
      <img
        src="/cachi-icono.png"
        alt=""
        className="pointer-events-none absolute -top-10 -left-10 h-40 w-40 -rotate-12 opacity-10 sm:h-56 sm:w-56"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-2xl">
        <ScrollReveal as="h2" className="text-3xl font-normal sm:text-4xl">
          {textos.historia.titulo}
        </ScrollReveal>
        <ScrollReveal retraso={120} as="p" className="mt-6 text-lg text-white/80 sm:text-xl">
          {textos.historia.texto}
        </ScrollReveal>
      </div>
    </section>
  )
}
