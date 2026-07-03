const NUMERO_NESTOR = import.meta.env.VITE_WHATSAPP_NESTOR

/** Arma el link wa.me con un número (dígitos, con código de país) y un mensaje. */
export function construirLinkWhatsApp(mensaje, numero = NUMERO_NESTOR) {
  const soloDigitos = (numero || '').replace(/\D/g, '')
  return `https://wa.me/${soloDigitos}?text=${encodeURIComponent(mensaje)}`
}
