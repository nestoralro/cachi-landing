/**
 * Formas geométricas angulares de fondo, inspiradas en las facetas del
 * ícono de Cachi (un cristal de sal estilizado). Puramente decorativo.
 */
export function CristalesFondo() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <svg
        className="animar-flotar absolute -top-10 -right-16 h-72 w-72 opacity-10 sm:h-96 sm:w-96"
        viewBox="0 0 200 200"
        fill="none"
      >
        <polygon points="100,10 180,60 160,150 40,150 20,60" stroke="#C4872B" strokeWidth="2" />
        <polygon points="100,10 100,100 20,60" stroke="#C4872B" strokeWidth="1.5" />
        <polygon points="100,10 100,100 180,60" stroke="#C4872B" strokeWidth="1.5" />
        <polygon points="40,150 100,100 160,150" stroke="#C4872B" strokeWidth="1.5" />
      </svg>

      <svg
        className="animar-flotar absolute -bottom-24 -left-20 h-80 w-80 opacity-10 sm:h-[28rem] sm:w-[28rem]"
        style={{ animationDelay: '2s' }}
        viewBox="0 0 200 200"
        fill="none"
      >
        <polygon points="100,10 180,60 160,150 40,150 20,60" stroke="#E8F0FA" strokeWidth="2" />
        <polygon points="100,10 100,100 20,60" stroke="#E8F0FA" strokeWidth="1.5" />
        <polygon points="100,10 100,100 180,60" stroke="#E8F0FA" strokeWidth="1.5" />
      </svg>

      <svg
        className="animar-flotar absolute top-1/3 left-1/4 h-24 w-24 opacity-10 sm:h-32 sm:w-32"
        style={{ animationDelay: '4s' }}
        viewBox="0 0 200 200"
        fill="none"
      >
        <polygon points="100,10 180,60 160,150 40,150 20,60" stroke="#C4872B" strokeWidth="3" />
      </svg>
    </div>
  )
}
