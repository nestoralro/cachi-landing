import { Globe, Mail, MessageCircle } from 'lucide-react'
import { useIdioma } from '../i18n/LanguageContext'

export function Footer() {
  const { textos } = useIdioma()

  return (
    <footer className="bg-brand-navy-dark px-5 py-12 text-white sm:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="flex flex-col items-center gap-3 sm:items-start">
          <img src="/cachi-logo-horizontal-claro.png" alt="Cachi" className="h-7 w-auto" />
          <p className="text-sm text-white/50">
            {textos.footer.derechos} · {textos.footer.ubicacion}
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 sm:items-end">
          <div className="flex gap-5 text-sm text-white/60">
            <a href="#" className="hover:text-white">
              {textos.footer.privacidad}
            </a>
            <a href="#" className="hover:text-white">
              {textos.footer.terminos}
            </a>
          </div>
          {/* Placeholders: lucide-react ya no incluye logos de marca
              (Instagram/LinkedIn/Facebook) — se usan íconos genéricos
              hasta que haya links reales a las redes de Cachi. */}
          <div className="flex gap-4 text-white/50">
            <a href="#" aria-label="Instagram" className="hover:text-brand-gold">
              <Globe className="h-5 w-5" aria-hidden="true" />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-brand-gold">
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-brand-gold">
              <Mail className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
