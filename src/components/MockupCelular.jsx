import { QrCode } from 'lucide-react'

/** Mockup ilustrativo (no una captura real) de la app en un marco de celular. */
export function MockupCelular() {
  return (
    <div className="mx-auto w-64 rounded-[2.5rem] border-8 border-brand-navy bg-brand-navy p-2 shadow-xl sm:w-72">
      <div className="flex h-[26rem] flex-col overflow-hidden rounded-[1.8rem] bg-white sm:h-[30rem]">
        <div className="flex items-center justify-between bg-brand-navy px-4 py-3">
          <img src="/cachi-icono.png" alt="" className="h-6 w-6 rounded" />
          <span className="text-xs text-white/70">9:41</span>
        </div>

        <div className="flex flex-1 flex-col gap-3 p-4">
          <div className="flex items-center justify-center rounded-xl border-2 border-dashed border-brand-gold/50 bg-brand-light py-6">
            <QrCode className="h-16 w-16 text-brand-navy" strokeWidth={1.2} aria-hidden="true" />
          </div>

          {[1, 2, 3].map((fila) => (
            <div key={fila} className="flex items-center gap-3 rounded-lg bg-brand-light/60 p-3">
              <div className="h-8 w-8 shrink-0 rounded-full bg-brand-gold/30" />
              <div className="flex-1">
                <div className="h-2 w-3/4 rounded bg-brand-navy/20" />
                <div className="mt-1.5 h-2 w-1/2 rounded bg-brand-navy/10" />
              </div>
            </div>
          ))}

          <div className="mt-auto rounded-lg bg-brand-gold py-2.5 text-center text-sm font-semibold text-white">
            ✓
          </div>
        </div>
      </div>
    </div>
  )
}
