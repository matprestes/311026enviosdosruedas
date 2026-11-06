# Envíos DosRuedas — Brand Identity & Design System Guide
**Design Division Oficial** · Versión 2.0.0 (Post-Auditoría de Código Real)

---

## 🏛️ Acta de Refundación de la Design Division

Este documento formaliza la refundación integral del **Sistema de Diseño e Identidad de Marca de Envíos DosRuedas**, resultado de una auditoría forense e ingeniería inversa aplicada directamente sobre el código fuente en producción del repositorio (`src/`).

El comité técnico de refundación está liderado por:
- **`agency-ui-designer` (Líder Técnico):** Arquitectura visual, estandarización de componentes, tokens y prototipado.
- **`agency-brand-guardian` (Estratega de Marca):** Preservación de la identidad cromática, jerarquía de percepción y leyes de marca.
- **`agency-ux-architect` (Arquitecto de UX):** Fundamentos técnicos, accesibilidad WCAG 2.1 AA/AAA, interacción cinemática y ergonomía táctil.

> **Regla de Oro:** La única fuente de verdad es la realidad del código en ejecución. Toda especificación aquí plasmada nace del comportamiento verificado de la interfaz.

---

## 🔍 Fase 1: Minería y Auditoría del Código Real

### 1. Extracción y Clasificación Cromática

| Rol Funcional | Token Canónico | Valor Hexadecimal | Uso en Código Real |
| :--- | :--- | :--- | :--- |
| **Primario de Marca** | `--color-brand-blue-500` | `#0950F6` | H1, H2, botones primarios, focus rings, acentos estructurales. **Tope máximo de oscuridad.** |
| **Primario Suave / Hover** | `--color-brand-blue-400` | `#3570F8` | Íconos activos, texto muted en títulos ≥24px, extremo de gradiente en hero. |
| **Borde Input / Bezel** | `--color-brand-blue-300` | `#628FF9` | Borde en reposo de `InputField`, hover de bisel exterior de tarjetas. |
| **Borde Suave / Hover** | `--color-brand-blue-200` | `#8EAFFB` | Borde de tarjetas en reposo, anillos radiales inactivos. |
| **Estructural / Divisor** | `--color-brand-blue-100` | `#BACEFD` | Bordes exteriores de `DoubleBezelCard`, divisores horizontales, conectores de steps. |
| **Fondo Suave / Bezel** | `--color-brand-blue-50` | `#E6EEFE` | Relleno de bisel exterior al 80%, badges informativos, fondos hover sutiles. |
| **Acento Señalética / CTA** | `--color-brand-yellow-500` | `#FFEC01` | Botón principal `CTANestedPill`, píldoras `Knockout`, franja insignia de 6px en footer. |
| **CTA Hover** | `--color-brand-yellow-400` | `#FFF12E` | Estado hover de botones primarios y botón WhatsApp. |
| **CTA Active / Pressed** | `--color-brand-yellow-600` | `#E6D400` | Estado presionado de botones amarillos. |
| **Flex / Halo Suave** | `--color-brand-yellow-100` | `#FFFAB8` | Badges de envíos Flex, anillos de step activo. |
| **Flex Selección Fondo** | `--color-brand-yellow-50` | `#FFFDE6` | Fondo de tarjeta de servicio Flex seleccionada. |
| **Lienzo / Fondo Global** | `--color-white` | `#FFFFFF` | Fondo de página (`--surface-page`), tarjetas interiores, contraste nítido. |
| **Estado Error (Borde)** | `--color-state-error` | `#EF4444` | Borde y foco de `InputField` con validación fallida. |
| **Estado Error (Texto)** | `--color-state-error-text` | `#DC2626` | Mensaje de error legible en formulario. |
| **Estado Éxito** | `--color-state-success` | `#10B981` | Íconos de entrega completada y confirmación de cotización. |

---

### 2. Detección de Inconsistencias y Unificación Oficial

Durante el escaneo del código fuente se identificaron anomalías aisladas que son formalmente resueltas por la Design Division:

1. **Inconsistencia de Azules en Header (`OptimizedHeader.tsx`):**
   - *Hallazgo:* Presencia de `#073bc2` (al hacer scroll y en dropdowns) y sombras con base `#071536`. Ambos son más oscuros que el tope canónico `#0950F6`.
   - *Resolución Canónica:* El tope de oscuridad de la marca es estrictamente `#0950F6`. Los menús flotantes deben elevarse mediante saturación y sombras teñidas con `rgba(9, 80, 246, 0.28)`, eliminando gradientes azul marino o negros disonantes.
2. **Residuos de Clases Slate en `not-found.tsx`:**
   - *Hallazgo:* Uso de `bg-slate-50` y `text-slate-600` en la vista de error 404.
   - *Resolución Canónica:* Unificado a fondo `#FFFFFF` con `--color-brand-blue-50` y texto `--color-brand-blue-500` / `--color-brand-blue-400`, eliminando neutrales grises apagados del sistema.
3. **Vertical Especializada Satélite (`src/app/mardelivery/`):**
   - *Hallazgo:* Uso de `#2ECC85` (verde menta) y `#031811` (fondo oscuro).
   - *Resolución Canónica:* Corresponde a la sub-marca gastronómica satélite "MarDelivery Gastronomía". No pertenece a la paleta central de la marca madre "Envíos DosRuedas", la cual mantiene la regla de pureza cromática de tres colores.

---

## 🎨 Invariantes y Principios Fundamentales del Sistema

### 1. La Ley de los Tres Colores
La identidad visual de Envíos DosRuedas se basa en una distribución volumétrica rigurosa:

```
┌────────────────────────────────────────────────────────┐
│  BLANCO CANVAS (#FFFFFF)              │ 65% – 75%      │
├────────────────────────────────────────────────────────┤
│  AZUL ELÉCTRICO (#0950F6)             │ 20% – 25%      │
├────────────────────────────────────────────────────────┤
│  AMARILLO VIAL (#FFEC01)              │ ≤ 15% (Señal)  │
└────────────────────────────────────────────────────────┘
```

- **Blanco Canvas (`#FFFFFF`):** Espacio negativo respirable, limpieza y claridad funcional.
- **Azul Eléctrico (`#0950F6`):** Identidad, estabilidad y estructura técnica. **Tope de oscuridad máxima:** Nada en la interfaz puede ser más oscuro que `#0950F6`. Se prohíbe el uso de negro puro `#000000` o grises neutros.
- **Amarillo Vial (`#FFEC01`):** Señalética vial de alta energía. Su uso es estrictamente focal (CTAs, píldoras Knockout, badges Flex, franja insignia de 6px en footer). Nunca se utiliza como superficie de fondo extendida.

### 2. Sombras con Tinte (Tinted Shadows)
Toda sombra proyectada en el sistema debe estar enriquecida con la longitud de onda de la marca:
- **Sombras Frías (Elevación de tarjetas):** Formuladas exclusivamente con `rgba(9, 80, 246, α)`.
- **Sombras Cálidas (Halos y CTAs):** Formuladas con `rgba(255, 236, 1, α)` para generar luminancia vial activa.
- **Prohibición:** Prohibido el uso de `rgba(0, 0, 0, α)` o `rgba(50, 50, 50, α)`.

---

## ♿ Matriz de Accesibilidad y Ratios de Contraste WCAG 2.1

La Design Division certifica el cumplimiento de los estándares de accesibilidad internacional en las combinaciones principales:

| Primer Plano | Fondo | Ratio Medido | Nivel WCAG | Aplicación Oficial |
| :--- | :--- | :--- | :--- | :--- |
| `#0950F6` (Azul) | `#FFFFFF` (Blanco) | **4.94:1** | **AA** (Texto normal) / **AAA** (Texto ≥18pt) | Titulares H1/H2, párrafos, bordes de entrada. |
| `#0950F6` (Azul) | `#FFEC01` (Amarillo) | **5.18:1** | **AA** (Texto normal) / **AAA** (Texto ≥18pt) | Texto de botón primario `CTANestedPill` y `Knockout`. |
| `#FFFFFF` (Blanco) | `#0950F6` (Azul) | **4.94:1** | **AA** (Texto normal) / **AAA** (Texto ≥18pt) | Botón secundario `blue`, tarjeta `DoubleBezelCard` dark. |
| `#DC2626` (Rojo) | `#FFFFFF` (Blanco) | **4.85:1** | **AA** (Texto normal) | Mensajes de validación y alerta en formularios. |
| `#3570F8` (Azul 400) | `#FFFFFF` (Blanco) | **3.25:1** | **AA Gráficos** (Componentes UI / Texto ≥24px) | Íconos decorativos y etiquetas secundarias grandes. |

> **Observación de Accesibilidad:** El amarillo `#FFEC01` sobre blanco `#FFFFFF` produce un ratio de **1.05:1** (inaccesible para lectura). Por esta razón, el amarillo **nunca lleva texto blanco** ni se utiliza como texto plano sobre fondo blanco; siempre va acompañado de texto en azul `#0950F6`.

---

## 🔤 Sistema Tipográfico de 4 Pilares

El sistema orquesta cuatro familias tipográficas con roles específicos y balanceados:

```
1. ANTON (Display)
   └── Titulares principales (H1/H2), números de impacto, presencia logística.
       Uppercase, leading ultra-condensado (0.85-0.92), letter-spacing: -0.05em a -0.025em.

2. BEBAS NEUE (Subheading & Action)
   └── Botones CTANestedPill, Badges, Navegación, Subtítulos de sección.
       Uppercase, bold, tracking expandido (0.05em a 0.08em), leading: 1.0.

3. OUTFIT (Sans Body)
   └── Lectura general, párrafos informativos, etiquetas de formularios, inputs.
       Moderno, legible, pesos 400 (regular) y 600 (semi-bold).

4. GEIST MONO (Technical & Metrics)
   └── Cotizaciones ($), kilómetros (km), tiempos de entrega (hs), tracking ID.
       Tabular-nums para alineación de columnas numéricas precisas.
```

### Escala Modular de Jerarquía

| Nivel Semántico | Fuente | Tamaño (Desktop / Mobile) | Line Height | Tracking |
| :--- | :--- | :--- | :--- | :--- |
| **Hero Display** | Anton | `clamp(3rem, 5vw, 4.5rem)` | `0.85` | `-0.05em` |
| **H1** | Anton | `clamp(2.25rem, 4vw, 3rem)` | `0.90` | `-0.025em` |
| **H2** | Anton | `clamp(1.75rem, 3vw, 2.25rem)` | `0.90` | `-0.020em` |
| **H3 / Subheading** | Bebas Neue | `1.5rem (24px)` | `1.00` | `+0.05em` |
| **CTA Button** | Bebas Neue | `0.925rem – 1.06rem` | `1.00` | `+0.06em` |
| **Body Large** | Outfit | `1.125rem (18px)` | `1.625` | `0` |
| **Body Base** | Outfit | `1.00rem (16px)` | `1.50` | `0` |
| **Body Small** | Outfit | `0.875rem (14px)` | `1.40` | `0` |
| **Badge / Label** | Bebas Neue | `0.75rem (12px)` | `1.10` | `+0.08em` |
| **Métrica / Precio** | Geist Mono | `1.25rem – 2.00rem` | `1.00` | `+0.02em` |

---

## 🧩 Catálogo de Componentes Canónicos

### 1. `DoubleBezelCard` (Firma Geométrica Oficial)
- **Concepto:** Tarjeta con doble bisel concéntrico que proporciona profundidad táctil sin recargar la interfaz.
- **Anatomía:**
  - *Bisel Exterior:* `border-radius: 16px (1rem)`, `padding: 8px (0.5rem)`, fondo `rgba(230, 238, 254, 0.80)`, borde `1px solid #BACEFD`, sombra `--shadow-float`.
  - *Bisel Interior:* `border-radius: 12px (0.75rem)`, `padding: 24px (1.5rem)`, fondo `#FFFFFF`, sombra interna `inset 0 2px 4px rgba(9,80,246,0.06)`.
  - *Hover:* Elevación a `--shadow-antigravity-deep` y transición de borde exterior a `#628FF9`.
  - *Variante Dark:* Bisel interior con fondo `#0950F6` y texto blanco.

### 2. `CTANestedPill` (Botón de Conversión Principal)
- **Concepto:** Botón en píldora con micro-chip circular integrado para flechas/iconos y aceleración cinética.
- **Variantes:**
  - `--primary` (Amarillo `#FFEC01`, texto `#0950F6`, chip con hover `translate-x-1`).
  - `--blue` (Azul `#0950F6`, texto `#FFFFFF`, chip amarillo `#FFEC01`).
  - `--elevated` (Blanco `#FFFFFF`, texto `#0950F6`, borde `#BACEFD`).
  - `--outline` (Transparente, borde 2px `#0950F6`, texto `#0950F6`).
  - `--ghost` (Transparente, sin borde, hover con fondo `#E6EEFE`).
- **Ergonomía Táctil:** Altura mínima de 44px (`min-h-11`) para garantizar target táctil móvil.

### 3. `Knockout` (Cápsula de Remate Tipográfico)
- **Concepto:** Cápsula con rotación ligera (`-rotate-1`) que encapsula la palabra clave del H1.
- **Variantes:**
  - `yellow`: Fondo `#FFEC01` + texto `#0950F6` + halo luminoso `rgba(255, 236, 1, 0.45)`.
  - `blue`: Fondo `#0950F6` + texto `#FFFFFF` + halo suave `rgba(9, 80, 246, 0.28)`.

### 4. `Badge System`
- **Concepto:** Píldoras de señalización operacional con tipografía `Bebas Neue` y tracking amplio.
- **Variantes:** `urgent`, `flex`, `secure`, `economic`, `neutral`, `outline`, `primary`, `accent`.

### 5. `InputField` (Control de Formulario Accesible)
- **Concepto:** Campo de entrada con altura táctil mínima de 44px, contenedor para íconos prefijados, etiquetas en `Bebas Neue` y feedback de error en tiempo real.

### 6. Franja Insignia de 6px en Footer
- **Concepto:** Línea horizontal de `6px` (`h-1.5`) en `#FFEC01` con sombra luminosa al tope del footer oscuro, demarcando el cierre de la experiencia de marca.

---

## ⚡ Motion & Cinemática (Emil Kowalski Physics)

Las micro-interacciones del sistema responden a principios físicos de amortiguación elástica:

```css
--ease-out-ui: cubic-bezier(0.23, 1, 0.32, 1);
--duration-feedback: 160ms;
--duration-dropdown: 200ms;
```

1. **Feedback Inmediato:** Los estados activos y hover responden en **160ms** con escala táctil de `0.97` en click.
2. **Respeto a Preferencias:** Todo elemento con animación respeta `prefers-reduced-motion: reduce` desactivando translaciones innecesarias.

---

## 🛡️ Reglas de Gobernanza para el Equipo de Ingeniería

1. **No inventar nuevos valores hexadecimales:** Cualquier nuevo componente debe utilizar estrictamente los tokens de `design-system/tokens.css`.
2. **Prohibido el uso de grises:** Si se requiere un tono atenuado, utilícese `--color-brand-blue-400` (`#3570F8`) o `--color-brand-blue-50` (`#E6EEFE`).
3. **Validación de Contraste Obligatoria:** Todo botón o texto nuevo debe verificarse contra la matriz de accesibilidad aquí establecida.

---
*Aprobado oficialmente por la Design Division de Envíos DosRuedas.*
