import { useEffect, useState } from 'react'
import { LanguageToggle } from './LanguageToggle'

/**
 * Barra superior fija: logo + toggle de idioma. Empieza transparente
 * sobre el hero navy (logo claro) y, al pasar el hero, se vuelve un
 * fondo blanco con el logo oscuro para seguir siendo legible.
 */
export function Header() {
  const [conFondo, setConFondo] = useState(false)

  useEffect(() => {
    function alScrollear() {
      setConFondo(window.scrollY > window.innerHeight * 0.7)
    }
    window.addEventListener('scroll', alScrollear, { passive: true })
    return () => window.removeEventListener('scroll', alScrollear)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between px-5 py-4 transition-colors duration-300 sm:px-10 ${
        conFondo ? 'bg-white/95 shadow-sm backdrop-blur' : 'bg-transparent'
      }`}
    >
      <img
        src={conFondo ? '/cachi-logo-horizontal.png' : '/cachi-logo-horizontal-claro.png'}
        alt="Cachi"
        className="h-7 w-auto sm:h-8"
      />
      <LanguageToggle oscuro={!conFondo} />
    </header>
  )
}
