import { useIdioma } from '../i18n/LanguageContext'

/** Toggle ES/EN — el idioma activo se ve resaltado en dorado. */
export function LanguageToggle({ oscuro = false }) {
  const { idioma, setIdioma } = useIdioma()

  const colorInactivo = oscuro ? 'text-white/50' : 'text-brand-navy/40'
  const colorActivo = 'text-brand-gold'

  return (
    <div className="flex items-center gap-1 text-sm font-semibold">
      <button
        type="button"
        onClick={() => setIdioma('es')}
        className={idioma === 'es' ? colorActivo : `${colorInactivo} hover:opacity-80`}
      >
        ES
      </button>
      <span className={oscuro ? 'text-white/30' : 'text-brand-navy/20'}>/</span>
      <button
        type="button"
        onClick={() => setIdioma('en')}
        className={idioma === 'en' ? colorActivo : `${colorInactivo} hover:opacity-80`}
      >
        EN
      </button>
    </div>
  )
}
