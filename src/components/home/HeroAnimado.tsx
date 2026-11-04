'use client';

import OptimizedImage from '@/components/ui/OptimizedImage';
import Link from 'next/link';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowRight, MapPin, Zap, ShieldCheck } from 'lucide-react';
import { CTANestedPill } from '@/components/ui/CTANestedPill';
import { Knockout } from '@/components/ui/Knockout';
import HeroProceduralBackground from '@/components/ui/HeroProceduralBackground';

/** Diferenciales del ticker. La lista se repite dos veces para que el bucle no se vea. */
const diferenciales = [
  'Envíos en el día',
  'Flota propia',
  'Cero tercerización',
  'Todo Mar del Plata',
  'Retiro en tu local',
];

const spring = { duration: 0.5, ease: [0.23, 1, 0.32, 1] as const };

export default function HeroAnimado() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="hero-animado"
      aria-label="Mensajería urbana y logística de última milla en todo Mar del Plata"
      className="relative isolate flex min-h-[92dvh] w-full flex-col overflow-hidden bg-brand-blue-500 text-white"
    >
      <HeroProceduralBackground variant="express" tone="blue" />

      {/* Decorative orbital ring in background */}
      <div
        aria-hidden="true"
        className="absolute z-[-1] top-[12%] right-[8%] w-[min(48vw,680px)] aspect-square border border-brand-yellow-500/20 rounded-full pointer-events-none shadow-[0_0_0_34px_rgba(255,236,1,0.035),0_0_0_86px_rgba(255,236,1,0.02)]"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 items-center px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-24">
        <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
          
          {/* COPY 7 — LEFT-ALIGNED */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={shouldReduceMotion ? { duration: 0 } : spring}
            className="space-y-6 lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 transform -rotate-1 border border-brand-yellow-500 rounded-full bg-brand-yellow-500 text-brand-blue-500 font-subheading text-sm font-bold uppercase tracking-wider shadow-[0_4px_18px_rgba(255,236,1,0.28)]">
              <Zap className="h-4 w-4 fill-current shrink-0" aria-hidden="true" />
              <span>Flota propia · Todo Mar del Plata</span>
            </div>

            <motion.h1
              initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={shouldReduceMotion ? { duration: 0 } : { ...spring, delay: 0.1 }}
              className="text-balance font-display text-4xl uppercase leading-[0.91] tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl xl:text-7xl max-w-[32ch]"
            >
              <span className="sr-only">Mensajería en moto en Mar del Plata: </span>
              <span className="block">El motor de tu</span>
              <Knockout className="whitespace-nowrap">última milla</Knockout>
              <span className="sr-only">. </span>
              <span className="block">Somos la solución a tus envíos</span>
            </motion.h1>

            <motion.p
              initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={shouldReduceMotion ? { duration: 0 } : { ...spring, delay: 0.15 }}
              className="font-sans text-base font-light leading-relaxed text-white/90 sm:text-lg max-w-[56ch]"
            >
              Mensajería y logística e-commerce en Mar del Plata: <strong className="text-white font-semibold">envíos en el día con motos propias.</strong> Llegamos a toda la ciudad y los repartidores son nuestros, sin tercerizar.
            </motion.p>

            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={shouldReduceMotion ? { duration: 0 } : { ...spring, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <CTANestedPill
                href="/cotizar"
                id="hero-cta-cotizar"
                variant="primary"
                size="large"
                className="w-full sm:w-auto justify-center focus-visible:ring-2 focus-visible:ring-brand-yellow-500 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-blue-500 shadow-accent"
              >
                Cotizá tu envío
              </CTANestedPill>
              <Link
                href="/servicios"
                className="inline-flex min-h-11 w-full sm:w-auto justify-center items-center gap-2 rounded-full font-subheading text-sm uppercase tracking-wider text-white border border-white/40 hover:border-white hover:bg-white/10 px-7 py-3 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow-500 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-blue-500 sm:text-base"
              >
                Ver servicios
                <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
              </Link>
            </motion.div>

            {/* Proof bullets */}
            <div className="flex flex-wrap gap-x-6 gap-y-3 pt-2 text-brand-blue-100 font-mono text-xs tracking-wider uppercase">
              <span className="inline-flex items-center gap-2">
                <i className="w-1.5 h-1.5 rotate-45 bg-brand-yellow-500 shadow-[0_0_6px_rgba(255,236,1,0.6)]" aria-hidden="true" />
                Envíos en el día
              </span>
              <span className="inline-flex items-center gap-2">
                <i className="w-1.5 h-1.5 rotate-45 bg-brand-yellow-500 shadow-[0_0_6px_rgba(255,236,1,0.6)]" aria-hidden="true" />
                Flota propia
              </span>
              <span className="inline-flex items-center gap-2">
                <i className="w-1.5 h-1.5 rotate-45 bg-brand-yellow-500 shadow-[0_0_6px_rgba(255,236,1,0.6)]" aria-hidden="true" />
                Cero tercerización
              </span>
              <span className="inline-flex items-center gap-2">
                <i className="w-1.5 h-1.5 rotate-45 bg-brand-yellow-500 shadow-[0_0_6px_rgba(255,236,1,0.6)]" aria-hidden="true" />
                Cobertura MDQ
              </span>
            </div>
          </motion.div>

          {/* MAPA 5 — Orbital rings + Map Image + Floating Chips */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.95 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={shouldReduceMotion ? { duration: 0 } : { ...spring, delay: 0.15 }}
            className="lg:col-span-5 relative flex items-center justify-center min-h-[460px] sm:min-h-[520px]"
          >
            {/* Orbital background ring */}
            <div className="absolute inset-0 m-auto w-[min(90vw,480px)] aspect-square border border-brand-yellow-500/35 rounded-full pointer-events-none before:absolute before:inset-[12%] before:border before:border-dashed before:border-brand-yellow-500/30 before:rounded-full after:absolute after:inset-[24%] after:border after:border-brand-blue-300/40 after:rounded-full" />

            {/* Pulse rings */}
            <span aria-hidden="true" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square w-[32%] rounded-full border-2 border-brand-yellow-500/70 animate-ping pointer-events-none" />
            <span aria-hidden="true" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square w-[32%] rounded-full border-2 border-brand-yellow-500/70 animate-ping pointer-events-none [animation-delay:1.1s]" />

            <div className="relative z-2 w-full max-w-[480px] transform -rotate-3 hover:-rotate-1 transition-transform duration-500">
              <OptimizedImage
                src="/assets/card_mapa.webp"
                alt="Mapa isométrico de cobertura de Envíos DosRuedas en Mar del Plata"
                width={560}
                height={560}
                aboveTheFold={true}
                sizes="(min-width: 1024px) 460px, 92vw"
                className="w-full h-auto drop-shadow-[0_24px_44px_rgba(2,27,94,0.45)] rounded-2xl"
              />

              {/* Floating Chip 1: Rider / Flota propia */}
              <motion.div
                whileHover={{ scale: 1.04 }}
                className="absolute top-[20%] -left-[4%] z-4 inline-flex items-center gap-3 bg-white text-brand-blue-500 px-3.5 py-2.5 rounded-xl border border-brand-blue-100 shadow-[0_12px_30px_rgba(7,21,54,0.25)]"
              >
                <div className="w-8 h-8 rounded-full bg-brand-blue-50 border-2 border-brand-yellow-500 flex items-center justify-center shrink-0 overflow-hidden relative">
                  <OptimizedImage
                    src="/persona_icono.webp"
                    alt="Repartidor de Envíos DosRuedas"
                    fill
                    sizes="32px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <strong className="block font-subheading text-xs uppercase tracking-wider text-brand-blue-500">
                    Flota propia
                  </strong>
                  <span className="font-mono text-[10px] text-brand-blue-500/80">Repartidores propios</span>
                </div>
              </motion.div>

              {/* Floating Chip 2: Base Friuli 1972 */}
              <motion.div
                whileHover={{ scale: 1.04 }}
                className="absolute bottom-[8%] -left-[2%] z-4 inline-flex items-center gap-3 bg-white text-brand-blue-500 px-3.5 py-2.5 rounded-xl border border-brand-blue-100 shadow-[0_12px_30px_rgba(7,21,54,0.25)]"
              >
                <div className="w-8 h-8 rounded-lg bg-brand-yellow-500 text-brand-blue-500 flex items-center justify-center shrink-0 font-bold">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <strong className="block font-subheading text-xs uppercase tracking-wider text-brand-blue-500">
                    Base Friuli 1972
                  </strong>
                  <span className="font-mono text-[10px] text-brand-blue-500/80">Mar del Plata</span>
                </div>
              </motion.div>

              {/* Floating Chip 3: Entrega en el día */}
              <motion.div
                whileHover={{ scale: 1.04 }}
                className="absolute top-[8%] -right-[2%] z-4 inline-flex items-center gap-3 bg-white text-brand-blue-500 px-3.5 py-2.5 rounded-xl border border-brand-blue-100 shadow-[0_12px_30px_rgba(7,21,54,0.25)]"
              >
                <div className="w-8 h-8 rounded-lg bg-brand-blue-500 text-brand-yellow-500 flex items-center justify-center shrink-0 font-bold">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <div>
                  <strong className="block font-subheading text-xs uppercase tracking-wider text-brand-blue-500">
                    Entrega en el día
                  </strong>
                  <span className="font-mono text-[10px] text-brand-blue-500/80">en todo MDQ</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Ticker de diferenciales */}
      <div className="relative z-20 overflow-hidden border-t border-white/18 bg-white/10 backdrop-blur-md">
        <h2 className="sr-only">Diferenciales de Envíos DosRuedas</h2>
        <div
          aria-hidden="true"
          className="animate-marquee-left flex w-max items-center py-3.5"
        >
          {[0, 1].map((copia) => (
            <ul key={copia} className="flex shrink-0 items-center">
              {diferenciales.map((d) => (
                <li
                  key={`${copia}-${d}`}
                  className="flex items-center gap-9 whitespace-nowrap px-6 font-subheading text-base uppercase tracking-[0.1em] text-white sm:text-lg"
                >
                  {d}
                  <span className="h-1.75 w-1.75 rotate-45 rounded-xs bg-brand-yellow-500 shadow-[0_0_8px_rgba(255,236,1,0.7)]" />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}