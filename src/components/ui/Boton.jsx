const VARIANTES = {
  gold: 'bg-brand-gold text-white hover:bg-brand-gold-light',
  navy: 'bg-brand-navy text-white hover:bg-brand-navy-dark',
  contorno: 'border-2 border-white text-white hover:bg-white/10',
  contornoNavy: 'border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white',
}

/**
 * Botón compartido de la landing. Renderiza <a> si recibe href, <button> si no.
 * @param {{ variante?: keyof typeof VARIANTES, href?: string, onClick?: Function, children: React.ReactNode, className?: string, target?: string }} props
 */
export function Boton({ variante = 'gold', href, onClick, children, className = '', target, type = 'button' }) {
  const clases = `inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-base font-semibold transition-colors duration-200 ${VARIANTES[variante]} ${className}`

  if (href) {
    return (
      <a href={href} onClick={onClick} className={clases} target={target} rel={target ? 'noreferrer' : undefined}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={clases}>
      {children}
    </button>
  )
}
