import { useEffect, useRef, useState } from 'react'

/**
 * Devuelve un ref y un booleano "visible": cuando el elemento entra en
 * pantalla al hacer scroll, visible pasa a true (y se queda así — no
 * se re-oculta al salir de pantalla, para no repetir la animación cada
 * vez que el usuario sube y baja).
 * @param {{ umbral?: number }} opciones
 */
export function useScrollReveal({ umbral = 0.15 } = {}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const elemento = ref.current
    if (!elemento) return

    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          setVisible(true)
          observador.disconnect()
        }
      },
      { threshold: umbral },
    )

    observador.observe(elemento)
    return () => observador.disconnect()
  }, [umbral])

  return { ref, visible }
}
