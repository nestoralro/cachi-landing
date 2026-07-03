import { LanguageProvider } from './i18n/LanguageContext'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Problema } from './components/Problema'
import { Modulos } from './components/Modulos'
import { ComoFunciona } from './components/ComoFunciona'
import { AppEnAccion } from './components/AppEnAccion'
import { Comparativa } from './components/Comparativa'
import { Precios } from './components/Precios'
import { HistoriaMarca } from './components/HistoriaMarca'
import { CTAFinal } from './components/CTAFinal'
import { Footer } from './components/Footer'

function App() {
  return (
    <LanguageProvider>
      <Header />
      <main>
        <Hero />
        <Problema />
        <Modulos />
        <ComoFunciona />
        <AppEnAccion />
        <Comparativa />
        <Precios />
        <HistoriaMarca />
        <CTAFinal />
      </main>
      <Footer />
    </LanguageProvider>
  )
}

export default App
