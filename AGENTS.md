# Envíos DosRuedas — Agent Guidelines & Guidelines de Proyecto

Este archivo define el contexto canónico, directrices de arquitectura y reglas de optimización de tokens para cualquier agente trabajando en este repositorio.

---

## 1. Stack Tecnológico & Arquitectura
- **Framework:** Next.js 15+ (App Router)
- **Lenguaje:** TypeScript (strict mode, `@/*` resuelve a `./src/*`)
- **Estilos:** Tailwind CSS v4 (`src/app/globals.css`)
- **Base de Datos & ORM:** PostgreSQL + Prisma (`prisma/schema.prisma`)
- **Animaciones:** Motion (`motion/react`)
- **UI & Primitivas:** Radix UI, Lucide React, React Icons

### Estructura de Directorios
```
src/
├── actions/     # Server Actions (mutaciones, cotizador, contacto)
├── app/         # App Router (layout, páginas, rutas de API)
├── components/  # Componentes reutilizables y modulares
├── hooks/       # Custom React hooks (ej. use-mobile)
└── lib/         # Clientes de BD, utilidades y funciones auxiliares
prisma/          # Definición de modelos de base de datos
public/          # Activos estáticos públicos
```

---

## 2. Invariantes del Sistema de Diseño (DESIGN.md)
1. **Ley de los Tres Colores:**
   - **Blanco Canvas (`#FFFFFF` / `65-75%`):** Fondo global (`--surface-page`) y tarjetas interiores.
   - **Azul Primario (`#0950F6` / `20-25%`):** Titulares H1/H2, botones principales, navbar, texto base. **Tope de oscuridad máxima:** Nada en la app es más oscuro que `#0950F6`. Prohibido el uso de negro puro (`#000000`) o grises apagados (`--color-neutral-*` neutralizados).
   - **Amarillo Vial (`#FFEC01` / `≤15%`):** Señalética, CTAs principales, badges de tarifa Flex y píldoras Knockout.
2. **Sombras con Tinte (Tinted Shadows):**
   - Nunca usar sombras negras o grises neutras. Siempre teñidas con azul (`rgba(9, 80, 246, ...)`) o amarillo vial (`rgba(255, 236, 1, ...)`).
3. **Tipografías:**
   - `--font-display`: Anton (`uppercase`, leading condensado `0.85-0.92`, balanceado).
   - `--font-subheading`: Bebas Neue (`uppercase`, bold, tracking expandido).
   - `--font-sans`: Outfit (texto corrido y lectura).
   - `--font-mono`: Geist Mono (`tabular-nums` para precios, km y horas).
4. **Componentes Canónicos:**
   - `DoubleBezelCard`: Contenedor con doble bisel concéntrico. Bisel exterior con `#E6EEFE` al 80%.
   - `CTANestedPill`: Botón con micro-chip circular para flechas/iconos integrados.
   - `Knockout`: Píldora rotada (`-rotate-1`) para acentuar palabras clave.

---

## 3. Protocolo de Optimización de Tokens (Token Economy)
Para maximizar la eficiencia y reducir el consumo innecesario de tokens de contexto y salida:
- **Respuestas Concisas:** Ve directo al punto. Evita introducciones ceremoniales, resúmenes triviales o explicaciones redundantes.
- **Ediciones Quirúrgicas:** Utiliza `edit_file` con fragmentos mínimos exactos. No reescribas archivos completos salvo cuando sea estrictamente necesario.
- **Lectura Segmentada:** Para archivos grandes (>100 líneas), utiliza siempre `StartLine` y `EndLine` en `read_file` para leer solo los bloques relevantes.
- **No re-inspeccionar invariantes:** No leas `DESIGN.md` ni `package.json` en cada turno; este archivo `AGENTS.md` ya contiene los tokens, colores y dependencias críticas.
- **Evitar exploraciones ciegas:** Conoce la estructura `src/` definida arriba antes de ejecutar comandos `dir` o búsquedas recursivas abiertas.
