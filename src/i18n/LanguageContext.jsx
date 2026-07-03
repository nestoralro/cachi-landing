import { createContext, useContext, useEffect, useState } from 'react'
import { translations } from './translations'

const LanguageContext = createContext(null)

function idiomaInicial() {
  const guardado = localStorage.getItem('cachi-idioma')
  if (guardado === 'es' || guardado === 'en') return guardado
  return navigator.language?.toLowerCase().startsWith('es') ? 'es' : 'en'
}

/** Provee el idioma actual (es|en), su setter, y el bloque de textos ya traducidos. */
export function LanguageProvider({ children }) {
  const [idioma, setIdioma] = useState(idiomaInicial)

  useEffect(() => {
    localStorage.setItem('cachi-idioma', idioma)
    document.documentElement.lang = idioma
  }, [idioma])

  function alternarIdioma() {
    setIdioma((actual) => (actual === 'es' ? 'en' : 'es'))
  }

  return (
    <LanguageContext.Provider value={{ idioma, setIdioma, alternarIdioma, textos: translations[idioma] }}>
      {children}
    </LanguageContext.Provider>
  )
}

/** Hook para leer el idioma actual y sus textos: const { textos, idioma, alternarIdioma } = useIdioma(). */
export function useIdioma() {
  const contexto = useContext(LanguageContext)
  if (!contexto) throw new Error('useIdioma debe usarse dentro de <LanguageProvider>')
  return contexto
}
