# Implementation Plan - Immersive 3D Hero Showcase with Three.js

Implement an interactive 3D hero showcase on the home page featuring a composite 3-12 part procedural delivery moto and package box in Mar del Plata urban logistics context, adhering to all Three.js and PBR rendering guidelines.

## Proposed Changes

### 1. New Three.js Component (`src/components/home/HomeHero3D.tsx`)
- **WebGL Canvas & Lifecycle**: Isolated container using `useRef`, initializing `THREE.WebGLRenderer`, `PerspectiveCamera`, `Scene`, and `RoomEnvironment` PMREM reflection.
- **Procedural 3D Models (`THREE.Group`)**:
  - Delivery Moto: Composite 10-part procedural model (chassis, wheels with spokes/tires, delivery cargo trunk with package boxes, handlebars, windshield, headlight, seat, and ground contact shadow).
  - Environment: Procedural asphalt ground plane with road markings and atmospheric horizon fog.
- **Studio Lighting**: Warm directional key light with soft shadows, cool hemisphere fill, and environment reflections.
- **Interaction & Controls**: OrbitControls with exponential damping, auto-rotate toggle, and camera view presets.
- **Collapsible Bottom Dock**: Sleek horizontal control dock for toggling views, materials, or inspecting delivery packages without occluding the central 3D viewport.

### 2. Integration into Home Page Hero (`src/app/page.tsx`)
- Embed `HomeHero3D` into the hero section of the home page (`src/app/page.tsx`), providing an immersive visual showcase for Envíos DosRuedas.

## Verification Plan
- Run `compile_applet` and `lint_applet` to verify TypeScript types, imports, and successful production build.
