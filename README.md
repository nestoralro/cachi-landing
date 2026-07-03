# Cachi — Landing Page

Landing page de una sola página (bilingüe ES/EN) para Cachi, la plataforma B2B de fuerza de ventas. Proyecto Vite + React + Tailwind, independiente de la app principal (`plataforma-b2b`).

## Desarrollo local

```bash
npm install
npm run dev
```

## Variables de entorno

Copia `.env.example` a `.env` y completa:

```
VITE_WHATSAPP_NESTOR=573000000000
```

Número de WhatsApp (formato internacional, solo dígitos) al que llegan los mensajes del botón "Contactar por WhatsApp" y del formulario de contacto.

## Build

```bash
npm run build
```

## Estructura

- `src/i18n/` — traducciones (ES/EN) y el contexto de idioma.
- `src/components/` — una sección de la página por archivo.
- `public/` — logo de Cachi (ya recortado en ícono cuadrado y logo horizontal, en versión clara y oscura).
