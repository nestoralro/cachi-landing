import { CapturaDesktop } from './ui/CapturaDesktop'

/**
 * Frame de laptop hecho con CSS: pantalla oscura con la captura adentro
 * y una base/teclado simulados abajo. Ancho máximo 700px, responsive.
 * @param {{ src: string, alt: string }} props
 */
export function MockupLaptop({ src, alt }) {
  return (
    <div className="mx-auto w-full max-w-[700px]">
      <div className="rounded-t-xl border-[10px] border-b-0 border-gray-800 bg-gray-800 p-1.5 shadow-2xl sm:rounded-t-2xl sm:border-[14px]">
        <CapturaDesktop src={src} alt={alt} className="rounded-md bg-black sm:rounded-lg" />
      </div>

      <div
        className="relative mx-auto h-3.5 w-[104%] -translate-x-[2%] bg-gradient-to-b from-gray-300 to-gray-400 shadow-md sm:h-5"
        style={{ clipPath: 'polygon(1.5% 0, 98.5% 0, 100% 100%, 0 100%)' }}
      >
        <div className="absolute left-1/2 top-0 h-1.5 w-16 -translate-x-1/2 rounded-b-md bg-gray-500/50 sm:w-20" />
      </div>
    </div>
  )
}
