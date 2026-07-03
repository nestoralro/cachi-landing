/**
 * Las capturas de escritorio crudas (public/screenshots/*-desktop.png)
 * incluyen la barra de Chrome/macOS arriba y el Dock abajo — este
 * wrapper las recorta con CSS para dejar visible solo el contenido de
 * la app. Los porcentajes salen de medir directamente esas capturas
 * (misma resolución y misma ventana en las 4), así que valen para
 * cualquier *-desktop.png de la carpeta.
 * @param {{ src: string, alt: string, className?: string, imgClassName?: string }} props
 */
export function CapturaDesktop({ src, alt, className = '', imgClassName = '' }) {
  return (
    <div className={`relative overflow-hidden ${className}`} style={{ aspectRatio: '1.9' }}>
      <img
        src={src}
        alt={alt}
        className={`absolute w-full transition-transform duration-500 ease-out ${imgClassName}`}
        style={{ top: '-16%' }}
      />
    </div>
  )
}
