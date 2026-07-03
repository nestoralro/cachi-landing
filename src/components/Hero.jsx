import { useIdioma } from '../i18n/LanguageContext'
import { CristalesFondo } from './CristalesFondo'
import { Boton } from './ui/Boton'
import { construirLinkWhatsApp } from '../utils/whatsapp'

export function Hero() {
  const { textos } = useIdioma()

  const mensajeWhatsapp =
    textos.idioma === 'ES'
      ? 'Hola, quiero saber más sobre Cachi para mi equipo de ventas.'
      : "Hi, I'd like to learn more about Cachi for my sales team."

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-brand-navy via-brand-navy to-brand-navy-dark px-5 pt-24 pb-16 text-center text-white">
      <CristalesFondo />

      <div className="animar-entrada relative z-10 flex max-w-2xl flex-col items-center gap-6">
        <img src="/cachi-icono.png" alt="Cachi" className="h-20 w-20 rounded-2xl sm:h-24 sm:w-24" />

        <h1 className="text-4xl leading-tight font-normal sm:text-6xl">{textos.hero.headline}</h1>

        <p className="max-w-xl text-lg text-white/80 sm:text-xl">{textos.hero.subtitulo}</p>

        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
          <Boton href="#como-funciona" variante="gold">
            {textos.hero.ctaDemo}
          </Boton>
          <Boton href={construirLinkWhatsApp(mensajeWhatsapp)} variante="contorno" target="_blank">
            {textos.hero.ctaWhatsapp}
          </Boton>
        </div>
      </div>
    </section>
  )
}
