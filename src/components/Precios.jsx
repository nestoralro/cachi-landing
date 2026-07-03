import { useIdioma } from '../i18n/LanguageContext'
import { ScrollReveal } from './ui/ScrollReveal'
import { Boton } from './ui/Boton'

export function Precios() {
  const { textos } = useIdioma()

  return (
    <section className="bg-white px-5 py-20 sm:px-10 sm:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <ScrollReveal as="h2" className="text-3xl font-normal text-brand-navy sm:text-4xl">
          {textos.precios.titulo}
        </ScrollReveal>

        <ScrollReveal
          retraso={100}
          className="mt-10 rounded-3xl border-2 border-brand-navy/10 bg-brand-light/40 p-10 sm:p-14"
        >
          <p className="font-serif text-5xl text-brand-navy sm:text-6xl">
            {textos.precios.precio}
            <span className="text-lg font-sans text-brand-navy/50">{textos.precios.periodo}</span>
          </p>
          <p className="mt-4 text-brand-navy/70">{textos.precios.incluye}</p>

          <Boton href="#contacto" variante="gold" className="mt-8">
            {textos.precios.cta}
          </Boton>

          <p className="mt-6 text-xs text-brand-navy/40">{textos.precios.nota}</p>
        </ScrollReveal>
      </div>
    </section>
  )
}
