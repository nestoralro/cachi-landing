import { useEffect, useState } from 'react'

const INTERVALO_MS = 3000

/**
 * Frame de celular hecho con CSS (notch arriba, botón home abajo) con
 * un carrusel automático de capturas reales, transición fundida entre
 * ellas y puntos indicadores debajo.
 * @param {{ imagenes: { src: string, alt: string }[] }} props
 */
export function MockupCelularCapturas({ imagenes }) {
  const [indice, setIndice] = useState(0)

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndice((actual) => (actual + 1) % imagenes.length)
    }, INTERVALO_MS)
    return () => clearInterval(intervalo)
  }, [imagenes.length])

  return (
    <div className="flex flex-col items-center">
      <div className="w-64 rounded-[2.5rem] border-[10px] border-black bg-black p-1.5 shadow-2xl sm:w-72">
        <div className="relative h-[26rem] overflow-hidden rounded-[1.8rem] bg-white sm:h-[30rem]">
          <div className="absolute left-1/2 top-0 z-20 h-5 w-28 -translate-x-1/2 rounded-b-2xl bg-black" />

          {imagenes.map((imagen, i) => (
            <img
              key={imagen.src}
              src={imagen.src}
              alt={imagen.alt}
              className={`absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-700 ease-in-out ${
                i === indice ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}

          <div className="absolute bottom-2 left-1/2 z-20 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 border-white/70" />
        </div>
      </div>

      <div className="mt-5 flex gap-2">
        {imagenes.map((imagen, i) => (
          <button
            key={imagen.src}
            type="button"
            aria-label={imagen.alt}
            onClick={() => setIndice(i)}
            className={`h-2 w-2 rounded-full transition-colors ${i === indice ? 'bg-brand-gold' : 'bg-white/30'}`}
          />
        ))}
      </div>
    </div>
  )
}
