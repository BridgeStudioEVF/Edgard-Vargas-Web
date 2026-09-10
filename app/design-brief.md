# Design brief — Landing Edgard Vargas

- **Design read**: landing personal de un director general de agencia (software + marketing digital). Audiencia: clientes potenciales B2B, prensa, socios. Registro emocional: reservado, serio, editorial fino de negocios.
- **Concept spine**: la página funciona como una nota editorial de negocios sobre una persona: fotografía sobria de prensa, tipografía de periódico, compresión asimétrica con aire, y una sola firma azul como única concesión al color. "El dossier de un director general."
- **Delivery tier**: `editorial` (micro-motion; el usuario eligió Non-animated en el intake).
- **Animation mode**: `non-animated — "No animada (recomendada para tu caso)" elegida por el usuario en el intake`.
- **Locked palette**:
  - Azul eléctrico `#2155FF` — único acento, usado con avaricia (una línea en el hero, un CTA sólido, un detalle en footer).
  - Tinta `#0A0A0A`. Hueso `#F4F4F2`. Blanco `#FFFFFF`.
  - Defensa: paleta cerrada del cliente (brief Edgard Vargas). Prohibido: degradados, neón, hologramas, clichés de IA. No coincide con ninguna familia prohibida.
- **Locked type**: **Archivo** (grotesca de periódico; display y texto) + **Source Serif 4** (solo para la cita del manifiesto). Justificación del serif: el brief del cliente pide explícitamente tono Monocle / Bloomberg Businessweek, editorial de negocios; la cita serif es la voz editorial del manifiesto.
- **Section plan** (5 secciones, 4 familias, sin repetición consecutiva):
  1. Nav fija (64px, hairline inferior, monograma EV) — familia: barra.
  2. Hero full-bleed fotográfico (foto oficina) con bloque de texto en esquina inferior izquierda, min-h-[100dvh] — familia: photo-overlay.
  3. Manifiesto — split editorial asimétrico: cita serif grande + bio a la izquierda, foto camisa 3:4 a la derecha — familia: editorial-split.
  4. Qué hace Bridge — filas hairline (Software / Marketing digital / Datos unificados), sin tarjetas — familia: hairline-rows.
  5. Contacto — split con foto perfil azul + titular + CTA — familia: split-cta.
  6. Footer mínimo (monograma, Guadalajara, © 2026) — familia: minimal.
- **Asset plan**: las 3 fotos web del cliente (hero oficina 2048×1152, camisa 1536×2048, perfil azul 1536×2048) + OG 1200×630 (crop de la horizontal) + branding de portada/favicon (generate_app_branding) + grano de película (SVG noise inline).
- **CTA inventory** (cada uno con identidad de interacción propia, sin clase compartida):
  1. "Lee el manifiesto" — scroll al manifiesto, hero; ghost con subrayado que se dibuja al hover.
  2. "Escribirme" — mailto, sección contacto; bloque sólido #2155FF con empuje táctil al active.
  3. "LinkedIn" — enlace externo, contacto; outline tinta con flecha diagonal.
- **Signature effect**: una sola línea azul `#2155FF` que se dibuja al cargar (stroke-dashoffset) sobre el hero; grano de película fijo (SVG noise, pointer-events-none); parallax sutil del hero ligado al scroll (solo transform).
- **Motion budget**: solo lo anterior; todo gated por prefers-reduced-motion; reveals de texto disparan en mount (nunca opacity:0 esperando viewport).
- **Constraints**: cero em-dash / en-dash; máx. 1 eyebrow por 3 secciones (se usará 0); SSR-safe; sin placeholders; copy en español, registro serio sin jerga de IA.