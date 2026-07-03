import { Check, X } from 'lucide-react'
import { useIdioma } from '../i18n/LanguageContext'
import { ScrollReveal } from './ui/ScrollReveal'

function Celda({ valor, esCachi }) {
  if (valor === true) {
    return <Check className={`mx-auto h-5 w-5 ${esCachi ? 'text-brand-gold' : 'text-green-600'}`} aria-hidden="true" />
  }
  if (valor === false) {
    return <X className="mx-auto h-5 w-5 text-gray-300" aria-hidden="true" />
  }
  return <span className={esCachi ? 'font-semibold text-brand-navy' : 'text-gray-500'}>{valor}</span>
}

export function Comparativa() {
  const { textos } = useIdioma()

  return (
    <section className="bg-brand-light/50 px-5 py-20 sm:px-10 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <ScrollReveal as="h2" className="mb-14 text-center text-3xl font-normal text-brand-navy sm:text-4xl">
          {textos.comparativa.titulo}
        </ScrollReveal>

        <ScrollReveal className="overflow-x-auto rounded-2xl bg-white shadow-sm">
          <table className="w-full min-w-[520px] border-collapse text-center text-sm sm:text-base">
            <thead>
              <tr>
                <th className="p-4 text-left text-brand-navy/50"></th>
                {textos.comparativa.columnas.map((columna, indice) => (
                  <th
                    key={columna}
                    className={`p-4 font-serif text-lg font-normal ${
                      indice === 0 ? 'rounded-t-2xl bg-brand-navy text-brand-gold' : 'text-brand-navy'
                    }`}
                  >
                    {columna}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {textos.comparativa.filas.map((fila) => (
                <tr key={fila.etiqueta} className="border-t border-brand-light">
                  <td className="p-4 text-left font-medium text-brand-navy">{fila.etiqueta}</td>
                  {fila.valores.map((valor, indice) => (
                    <td key={indice} className={`p-4 ${indice === 0 ? 'bg-brand-light/40' : ''}`}>
                      <Celda valor={valor} esCachi={indice === 0} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </ScrollReveal>
      </div>
    </section>
  )
}
