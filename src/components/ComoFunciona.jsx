import { useIdioma } from '../i18n/LanguageContext'
import { ScrollReveal } from './ui/ScrollReveal'
import { MockupCelular } from './MockupCelular'

export function ComoFunciona() {
  const { textos } = useIdioma()

  return (
    <section id="como-funciona" className="bg-white px-5 py-20 sm:px-10 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal as="h2" className="mb-14 text-center text-3xl font-normal text-brand-navy sm:text-4xl">
          {textos.comoFunciona.titulo}
        </ScrollReveal>

        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-16">
          <ScrollReveal className="order-2 flex-1 lg:order-1">
            <ol className="flex flex-col gap-8">
              {textos.comoFunciona.pasos.map((paso, indice) => (
                <li key={paso} className="flex items-start gap-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-navy font-serif text-lg text-brand-gold">
                    {indice + 1}
                  </span>
                  <p className="pt-1.5 text-lg text-brand-navy">{paso}</p>
                </li>
              ))}
            </ol>
          </ScrollReveal>

          <ScrollReveal retraso={150} className="order-1 flex-1 lg:order-2">
            <MockupCelular />
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
