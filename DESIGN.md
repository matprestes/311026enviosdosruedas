---
design_system_name: "Envíos DosRuedas Design System"
version: "2.4.0"
architecture: "Next.js 15+ App Router · Tailwind CSS v4 · TypeScript"
brand:
  name: "Envíos DosRuedas"
  tagline: "El motor de tu última milla en Mar del Plata"
  base_city: "Mar del Plata, Argentina"
colors:
  primary_brand_blue: "#0950F6"
  accent_vial_yellow: "#FFEC01"
  canvas_pure_white: "#FFFFFF"
law_of_three_colors:
  white_surface_coverage: "65-75%"
  electric_blue_coverage: "20-25%"
  signal_yellow_coverage: "≤15% (Señal, foco y CTA, nunca superficie completa de página)"
dark_ceiling_invariant: "#0950F6 (Nada en la aplicación es más oscuro que el Azul Eléctrico #0950F6)"
---

# Design System: Envíos DosRuedas (Mar del Plata)

> Documentación canónica extraída por ingeniería inversa directa del código fuente en producción (`src/app/globals.css`, componentes en `src/components/`, tokens de Tailwind CSS v4 y configuraciones tipográficas).

---

## 1. Visual Theme & Atmosphere

### 1.1 Identidad y Estado de Ánimo (Mood & Tone)
El sistema visual de **Envíos DosRuedas** proyecta **velocidad urbana, precisión logística, solidez operativa e inmediatez costera**. Diseñado para el ecosistema comercial de Mar del Plata (e-commerce local, comercios gastronómicos, cadetería y Mercado Envíos Flex), combina la energía de una empresa de transporte ágil con el rigor técnico de una plataforma moderna.

- **Vibrante y Asertivo:** El contraste extremo entre el Azul Eléctrico (`#0950F6`) y el Amarillo Vial (`#FFEC01`) evoca señalética de tránsito de alta visibilidad, asfalto iluminado y cascos de mensajería profesional.
- **Luminosidad Controlada (White Canvas):** El lienzo primario es rigurosamente blanco (`#FFFFFF`). No existen fondos grises apagados ni modos oscuros que conviertan la UI en un panel genérico. Las superficies elevadas utilizan tintes suaves de azul (`#E6EEFE` al 80%) que conservan la frescura del mar y el aire libre.
- **Densidad Editorial y Técnica:** Coexisten grandes titulares en tipografía condensada de impacto (estilo póster urbano) con metadatos de alta densidad en fuente monoespaciada para coordenadas, tarifas, ventanas horarias de 3 horas y estados operativos.
- **Anti-AI Slop & Disciplina Zero-Pill:**
  - Prohibidos los gradientes violetas/púrpuras genéricos.
  - Prohibidos los chips de metadatos estáticos rodeados de bordes y rellenos artificiales (los metadatos son texto plano con separadores elegantes como `·`).
  - Prohibidos los textos con comentarios de código falsos (`// 01 ARCHITECTURE`) o badges de estado inventados (`LATENCY: 1.2s`).

### 1.2 Filosofía de Movimiento (Motion Philosophy - Emil Kowalski & Spring Physics)
El sistema implementa curvas bezier elásticas y retroalimentación táctil de alta velocidad:
- **`--ease-out` / `--ease-out-ui`:** `cubic-bezier(0.23, 1, 0.32, 1)` (Desaceleración suave y natural).
- **`--ease-snappy`:** `cubic-bezier(0.16, 1, 0.3, 1)` (Microinteracciones y pulsaciones de botones).
- **`--ease-drawer`:** `cubic-bezier(0.32, 0.72, 0, 1)` (Menús móviles y paneles emergentes).
- **Duraciones Estándar:**
  - Feedback / Click: `160ms`
  - Dropdowns / Hover: `200ms`
  - Modales / Diálogos: `250ms`
- **Accesibilidad Motriz:** Con `prefers-reduced-motion: reduce`, todas las animaciones continuas (`animate-floaty`, `animate-marquee-left`, etc.) se desactivan instantáneamente (`animation: none !important`), fijando las transformaciones sin saltos visuales.

---

## 2. Color Palette & Roles

El sistema implementa de forma inquebrantable la **Ley de los Tres Colores**. No existe ningún color más oscuro que el Azul Eléctrico `#0950F6` (Tope de Oscuridad Máxima). Quedan completamente neutralizadas en CSS las escalas por defecto de grises, verdes y negros (`--color-neutral-*`, `--color-stone-*`, `--color-green-*` = `initial`).

### 2.1 Escala Canónica de Azul Eléctrico (Tope Máximo de Oscuridad)
| Token Tailwind v4 | HEX | Uso Canónico en el Sistema |
| :--- | :--- | :--- |
| `--color-brand-blue-50` | `#E6EEFE` | Fondo suave, bezel exterior concéntrico (`/80`), estados hover ghost, skeleton loader |
| `--color-brand-blue-100` | `#BACEFD` | Bordes estructurales, divisores sutiles, línea inactiva del stepper |
| `--color-brand-blue-200` | `#8EAFFB` | Borde hover de tarjetas, trazados vectoriales secundarios, radio selectores inactivos |
| `--color-brand-blue-300` | `#628FF9` | Borde de input en reposo, hover de bisel exterior, acentos vectoriales |
| `--color-brand-blue-400` | `#3570F8` | Iconos de servicio, texto muted grande ($\ge 24\text{px}$), hover de fondos azules |
| `--color-brand-blue-500` | `#0950F6` | **Azul Primario Oficial**. Titulares H1/H2, foco, botones principales, navbar y footer |

### 2.2 Escala Canónica de Amarillo Vial (Señal y CTA - $\le 15\%$ Cobertura)
| Token Tailwind v4 | HEX | Uso Canónico en el Sistema |
| :--- | :--- | :--- |
| `--color-brand-yellow-50` | `#FFFDE6` | Fondo activo de tarjetas Mercado Envíos Flex |
| `--color-brand-yellow-100` | `#FFFAB8` | Badges de tarifa Flex, halo de pasos completados en wizard |
| `--color-brand-yellow-200` | `#FFF78A` | Borde de selección de servicio Flex |
| `--color-brand-yellow-300` | `#FFF45C` | Detalles de texto mono sobre fondo azul eléctrico |
| `--color-brand-yellow-400` | `#FFF12E` | Hover de CTA primario y botones de WhatsApp directo |
| `--color-brand-yellow-500` | `#FFEC01` | **Amarillo Vial Oficial**. CTA principal, chip de icono, píldora Knockout, barra decorativa footer |
| `--color-brand-yellow-600` | `#E6D400` | Estado presionado (`:active`) del CTA primario |

### 2.3 Lienzo y Superficies Base
| Token | HEX / Definición | Rol |
| :--- | :--- | :--- |
| `--color-white` / `--color-brand-white` | `#FFFFFF` | Lienzo universal de la página, tarjetas interiores y contraste alto |
| `--surface-page` | `var(--color-white)` | Fondo global del `<body>` |
| `--text-body` | `var(--color-brand-blue-500)` | Color del texto base (cero negro puro `#000000`, todo el texto hereda azul de marca) |

### 2.4 Sistema de Sombras Teñidas (Tinted Shadows)
**Regla Inviolable:** Todas las sombras se proyectan utilizando tinte de Azul de Marca (`rgba(9, 80, 246, ...)`) o resplandor de Amarillo Vial (`rgba(255, 236, 1, ...)`). **Jamás sombras negras o grises neutras.**
- `--shadow-xs`: `0 1px 2px rgba(9, 80, 246, 0.04)`
- `--shadow-sm`: `0 2px 4px rgba(9, 80, 246, 0.06), 0 1px 2px rgba(9, 80, 246, 0.03)`
- `--shadow-md`: `0 4px 8px rgba(9, 80, 246, 0.08), 0 2px 4px rgba(9, 80, 246, 0.04)`
- `--shadow-float`: `0 25px 50px -12px rgba(9, 80, 246, 0.15)` (Elevación de DoubleBezelCard)
- `--shadow-elevated`: `0 16px 40px rgba(9, 80, 246, 0.18)` (Botones y tarjetas flotantes)
- `--shadow-antigravity-deep`: `0 24px 64px rgba(9, 80, 246, 0.22)` (Hover dinámico de tarjetas)
- `--shadow-accent-sm`: `0 2px 4px rgba(255, 236, 1, 0.15)`
- `--shadow-cta-glow`: `0 0 28px rgba(255, 236, 1, 0.45), 0 8px 24px rgba(9, 80, 246, 0.18)` (Glow de CTA amarillo)

---

## 3. Typography Rules

El sistema utiliza cuatro familias tipográficas cargadas mediante `next/font/google` con `display: 'swap'` y `preload: true`, inyectadas como variables CSS en el `<html>`:

```
Outfit (Sans) + Anton (Display) + Bebas Neue (Subheading) + Geist Mono (Mono)
```

### 3.1 Familias y Roles
1. **Display Heading (`--font-display`):**
   - **Fuente:** `Anton` / `Anton SC` (Fallback: `Impact`, `Arial Black`, sans-serif).
   - **Aplicación:** Grandes títulos de héroe, remates de impacto en mayúsculas sostenidas, H1, H2, precios destacados.
   - **Transformación:** Siempre `uppercase`, interlineado ultra-condensado (`leading: 0.85 - 0.92`), tracking negativo (`-0.03em` a `-0.05em`), `text-wrap: balance`.
2. **Subheadings y Acciones (`--font-subheading`):**
   - **Fuente:** `Bebas Neue` (Fallback: `Impact`, `Arial Narrow`, sans-serif).
   - **Aplicación:** Botones CTA (`CTANestedPill`), chips de navegación, badges de categoría, labels de formularios, pestañas y pasos del stepper.
   - **Transformación:** Siempre `uppercase`, peso 700 / Bold, tracking expandido (`tracking-wider` / `0.05em`).
3. **Cuerpo y Lectura (`--font-sans`):**
   - **Fuente:** `Outfit` (Fallback: `system-ui`, `-apple-system`, `sans-serif`).
   - **Aplicación:** Párrafos descriptivos, explicaciones operativas, preguntas frecuentes, textos legales.
   - **Características:** Peso regular (400) y medio (500), interlineado cómodo (`leading-relaxed` / `1.625`), alta legibilidad en pantallas retina.
4. **Datos y Métricas (`--font-mono`):**
   - **Fuente:** `Geist Mono` (Fallback: `ui-monospace`, `Menlo`, `monospace`).
   - **Aplicación:** Distancias en kilómetros (`km`), horarios y ventanas de corte (`15:00 hs`), importes en moneda (`$AR`), coordenadas geográficas (`-38.0055, -57.5426`).
   - **Características:** `font-variant-numeric: tabular-nums` para alineación columnar impecable.

### 3.2 Escala Tipográfica Fluida (`clamp()`)
- `.text-display`: `font-size: clamp(3rem, 5vw, 4.5rem); line-height: 0.85; letter-spacing: -0.05em;`
- `.text-h1`: `font-size: clamp(2.25rem, 4vw, 3rem); line-height: 0.9; letter-spacing: -0.025em;`
- `.text-h2`: `font-size: clamp(1.75rem, 3vw, 2.25rem); line-height: 0.9; letter-spacing: -0.02em;`
- `Text Kicker (Pre-heading)`: `font-mono text-xs uppercase tracking-[0.2em] font-semibold`

---

## 4. Component Stylings (Component-First Architecture)

### 4.1 `DoubleBezelCard` (Firma Geométrica del Sistema)
Contenedor principal con sistema de doble bisel concéntrico que genera profundidad física sin utilizar sombras oscuras pesadas:
- **Bisel Exterior (`double-bezel-outer`):**
  - Fondo: `color-mix(in srgb, var(--color-brand-blue-50) 80%, transparent)` (`#E6EEFE` al 80%).
  - Borde: `1px solid var(--color-brand-blue-100)`.
  - Radio: `rounded-2xl` (`16px`).
  - Padding: `0.5rem` (`8px`).
  - Sombra: `var(--shadow-float)`.
  - Hover: `border-color: var(--color-brand-blue-300)` y `box-shadow: var(--shadow-antigravity-deep)`.
- **Panel Interior (`double-bezel-inner`):**
  - Radio Concéntrico Matemático: $r_{\text{inner}} = r_{\text{outer}} - \text{padding} = 16\text{px} - 8\text{px} \to 12\text{px}$ (`rounded-xl`).
  - Fondo Variante Light: `bg-white text-brand-blue-500 border border-brand-blue-50/50`.
  - Fondo Variante Dark: `bg-brand-blue-500 text-white border border-white/10`.
  - Padding interior: `p-6` (`24px`).
  - Sombra interior: `inset 0 2px 4px rgba(9, 80, 246, 0.06)`.

### 4.2 `CTANestedPill` (Control Interactivo Canónico)
Elemento unificado para botones (`<button>`) y enlaces (`<Link>`), con micro-chip circular integrado para flechas o iconos:
- **Estructura Base:**
  - `inline-flex items-center justify-between rounded-full font-subheading uppercase tracking-wider font-bold`
  - Altura mínima accesible: `min-h-[44px]` (cumplimiento WCAG AA para objetivos táctiles).
  - Transición fluida: `duration-160 ease-out`.
  - Presionado: `active:scale-[0.97]`.
- **Chip de Icono Anidado (`cta-nested-icon`):**
  - Tamaño: `w-8 h-8 rounded-full flex items-center justify-center shrink-0 ml-3`.
  - Desplazamiento coordinado en hover del padre: `group-hover:translate-x-1`.
- **Variantes Oficiales:**
  1. `variant="primary"`: Fondo Amarillo Vial (`#FFEC01`), texto Azul Eléctrico (`#0950F6`), borde amarillo, resplandor `shadow-accent-sm hover:shadow-cta-glow`. Chip de icono transparente que se llena de azul en hover.
  2. `variant="blue"`: (Para montar sobre fondos amarillos) Fondo Azul Eléctrico (`#0950F6`), texto blanco, borde azul, chip amarillo vial con icono azul.
  3. `variant="elevated"`: Fondo blanco, texto Azul Eléctrico, borde `#BACEFD`, sombra flotante `shadow-elevated hover:shadow-hover-lift`.
  4. `variant="outline"`: Fondo transparente, borde de 2px en Azul Eléctrico (`border-2 border-brand-blue-500`), hover en `#E6EEFE`.
  5. `variant="ghost"`: Sin borde ni fondo en reposo, hover en `#E6EEFE`.
- **Anillo de Foco Bimodal (Accesibilidad):**
  - Sobre fondos oscuros/azules: `focus-visible:ring-brand-yellow-500 focus-visible:ring-offset-brand-blue-500`.
  - Sobre fondos blancos: `focus-visible:ring-brand-blue-500 focus-visible:ring-offset-white`.

### 4.3 `Knockout` (Remate Tipográfico de Palabras Clave)
Píldora rotada (`-rotate-1`) que destaca conceptos clave en el H1 de los héroes:
- **Variante Yellow (sobre azul):** `bg-brand-yellow-500 text-brand-blue-500 shadow-[0_0_28px_rgba(255,236,1,0.45)]`.
- **Variante Blue (sobre amarillo):** `bg-brand-blue-500 text-white shadow-[0_0_24px_rgba(9,80,246,0.28)]`.
- **Contraste:** Ratio garantizado de 4.94:1 (Cumplimiento WCAG AA).

### 4.4 `InputField` (Campos de Formulario y Cotizador)
- **Altura fija de toque:** `h-11 min-h-[44px]`.
- **Estructura:** Borde de 2px `border-brand-blue-300`, radio `rounded-xl`, fondo blanco, texto en Azul Eléctrico `#0950F6`.
- **Icono integrado:** Cuando existe icono, padding izquierdo `pl-10` con contenedor absoluto centrado.
- **Label superior:** `font-subheading text-xs uppercase tracking-wider text-brand-blue-500 font-bold`.
- **Estados de Foco:** `focus:border-brand-blue-500 focus:ring-2 focus:ring-brand-blue-500/20`.
- **Estados de Error:** `border-red-500 focus:border-red-500 ring-2 ring-red-500/20 text-red-600` con mensaje de alerta en `font-mono text-2xs`.

### 4.5 `RadioCardGroup` (Selector de Servicios)
Tarjetas de radio interactivo para cotizaciones rápidas:
- **Express (Urgente):** Al seleccionarse adopta `bg-brand-blue-500 text-white border-brand-blue-500 shadow-md` con checkmark en amarillo vial.
- **LowCost (Económico):** Al seleccionarse adopta `bg-brand-blue-50 border-brand-blue-200 text-brand-blue-500 shadow-sm`.
- **Flex (MercadoLibre):** Al seleccionarse adopta `bg-brand-yellow-50 border-brand-yellow-200 text-brand-blue-500`.

### 4.6 `Badge` (Etiquetas de Estado y Confianza)
- **Tipografía:** `font-subheading font-bold uppercase tracking-wider`.
- **Variantes:**
  - `urgent` / `accent`: `bg-brand-yellow-500 text-brand-blue-500 border-brand-yellow-400`.
  - `secure` / `economic`: `bg-brand-blue-50 text-brand-blue-500 border-brand-blue-200`.
  - `flex`: `bg-brand-yellow-100 text-brand-blue-500 border-brand-yellow-200`.
  - `primary`: `bg-brand-blue-500 text-white border-brand-blue-500`.

---

## 5. Layout Principles & Responsiveness

### 5.1 Ancho de Contenedor y Rejilla Maestro
- **Ancho Máximo Canónico:** `max-w-7xl` (`80rem` / `1280px`).
- **Padding Horizontal Responsivo de Contenedor:**
  - Móvil (<640px): `px-4` (`16px`)
  - Tablet (640px - 1024px): `px-6` (`24px`)
  - Desktop (>1024px): `px-8` (`32px`)
- **Espaciado Vertical entre Secciones (`section`):**
  - Móvil: `py-14` (`56px`)
  - Tablet: `py-20` (`80px`)
  - Desktop: `py-24` (`96px`)
  - Variable CSS de referencia: `--spacing-section-y: 6rem`.

### 5.2 `BentoGrid` (Composición Asimétrica de 12 Columnas)
El layout de servicios utiliza una grilla modular de 12 columnas:
- **Hero Items (Servicio Express, Fulfillment 3PL):** `lg:col-span-7 md:col-span-12 col-span-1`.
- **Standard Items (Reparto LowCost, Mercado Envíos Flex):** `lg:col-span-5 md:col-span-6 col-span-1`.
- **Full Width Items (Cotizador / Banner de Conversión):** `col-span-12`.
- **Altura de filas base:** `auto-rows-[minmax(340px,auto)] md:auto-rows-95`.

### 5.3 Reglas de Colapso Móvil (<768px)
- **Linearización Estricta:** Todas las grillas asimétricas (`col-span-7`, `col-span-5`) colapsan automáticamente a una única columna vertical (`grid-cols-1`).
- **Botones y CTAs en Móvil:** Los botones dentro de héroes y footers se expanden a ancho completo (`w-full sm:w-auto`), manteniendo el padding interno y el chip de icono visible.
- **Scroll Horizontal Seguro en Tablas/Carruseles:** Los carruseles de métricas y logos emplean scroll horizontal no bloqueante (`overflow-x-auto` con `snap-x mandatory` o animación `marquee-left`).
- **Alineación de Texto:** En los héroes, el texto se mantiene siempre alineado a la izquierda (`text-left`), evitando el centrado forzado que destruye el ritmo visual de titulares condensados de gran tamaño.

---

## 6. Design System Notes for Stitch & UI Generation

Al diseñar o generar nuevas pantallas, componentes o vistas mediante herramientas de prototipado o Stitch, se deben cumplir obligatoriamente estas reglas:

1. **Cero Grises Neutros y Cero Negros Puros:**
   - Todo texto oscuro debe usar `--color-brand-blue-500` (`#0950F6`).
   - Todo texto secundario o atenuado debe ser un tono de azul (`--color-brand-blue-400`, `#3570F8`) o una opacidad controlada sobre azul (`text-white/80`, `text-brand-blue-500/70`).
2. **Jerarquía Visual de Fondos:**
   - Fondo general: Blanco puro (`#FFFFFF`).
   - Fondos de Hero / Bloques de Impacto: Azul Eléctrico (`#0950F6`) con trama procedural sutil (`HeroProceduralBackground`) o gradientes radiales al 5-8% de opacidad.
   - Fondos de Tarjetas: Blanco puro encapsulado en doble bisel azul claro (`#E6EEFE/80`).
3. **El Amarillo Vial es Señal, no Piso:**
   - El Amarillo Vial (`#FFEC01`) jamás debe usarse como fondo de pantalla completa o fondo de secciones enteras. Su cobertura máxima nunca debe superar el 15% del área visible.
   - Su rol exclusivo es guiar la mirada: botones de conversión, chips de estado urgente, resaltado de precios o remates `Knockout`.
4. **Respeto a las Tipografías Oficiales:**
   - Títulos siempre en `Anton` (`font-display`) mayúsculas compactas.
   - Botones siempre en `Bebas Neue` (`font-subheading`) mayúsculas tracking expandido.
   - Párrafos siempre en `Outfit` (`font-sans`).
   - Datos tabulares, distancias y precios siempre en `Geist Mono` (`font-mono`).
5. **Composición de Botones:**
   - No crear botones huérfanos con etiquetas `<button className="rounded-full bg-yellow-400">`. Utilizar siempre la primitiva `<CTANestedPill>` con su correspondiente variante y chip de icono a la derecha.
6. **Manejo de Imágenes (`next/image`):**
   - Siempre incluir `referrerPolicy="no-referrer"`.
   - Elementos LCP (above-the-fold) deben llevar `priority` y `fetchPriority="high"` con descriptor `sizes` estricto (ej. `(min-width: 1024px) 460px, 92vw`).
   - Elementos secundarios deben llevar `loading="lazy"` y `decoding="async"`.
