import { useIdioma } from '../i18n/LanguageContext'
import { ScrollReveal } from './ui/ScrollReveal'
import { MockupLaptop } from './MockupLaptop'
import { MockupCelularCapturas } from './MockupCelularCapturas'

const CAPTURAS_CELULAR = [
  { src: '/screenshots/dashboard-mobile.png', alt: 'Captura móvil de Cachi 1' },
  { src: '/screenshots/mapa-mobile.png', alt: 'Captura móvil de Cachi 2' },
  { src: '/screenshots/pedidos-mobile.png', alt: 'Captura móvil de Cachi 3' },
]

export function AppEnAccion() {
  const { textos } = useIdioma()

  return (
    <section className="bg-brand-navy px-5 py-20 sm:px-10 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal as="h2" className="text-center text-3xl font-normal text-white sm:text-4xl">
          {textos.appEnAccion.titulo}
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 items-start gap-16 lg:grid-cols-2 lg:gap-12">
          <ScrollReveal className="flex flex-col items-center gap-6">
            <MockupLaptop src="/screenshots/dashboard-desktop.png" alt="Dashboard de Cachi en escritorio" />
            <p className="max-w-md text-center text-white/70">{textos.appEnAccion.textoLaptop}</p>
          </ScrollReveal>

          <ScrollReveal retraso={150} className="flex flex-col items-center gap-6">
            <MockupCelularCapturas imagenes={CAPTURAS_CELULAR} />
            <p className="max-w-md text-center text-white/70">{textos.appEnAccion.textoCelular}</p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
