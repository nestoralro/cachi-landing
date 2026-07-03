import { useScrollReveal } from '../../hooks/useScrollReveal'

/**
 * Envuelve cualquier contenido y lo anima al entrar en pantalla.
 * @param {{ children: React.ReactNode, retraso?: number, className?: string, as?: string }} props
 */
export function ScrollReveal({ children, retraso = 0, className = '', as: Etiqueta = 'div' }) {
  const { ref, visible } = useScrollReveal()

  return (
    <Etiqueta
      ref={ref}
      className={`scroll-reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: visible ? `${retraso}ms` : '0ms' }}
    >
      {children}
    </Etiqueta>
  )
}
