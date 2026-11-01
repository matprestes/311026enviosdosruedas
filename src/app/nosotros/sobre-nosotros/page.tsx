import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, MapPin, Award, ArrowRight } from 'lucide-react';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.enviosdosruedas.com';

export const metadata: Metadata = {
  title: 'Sobre Nosotros: Mensajería Real en Mar del Plata',
  description: 'Conocé la historia y valores de Envíos DosRuedas. Logística en moto marplatense con flota 100% propia, base en Friuli 1972 y sin tercerizaciones.',
  alternates: { canonical: `${baseUrl}/nosotros/sobre-nosotros` },
};

export default function SobreNosotrosPage() {
  return (
    <main className="min-h-dvh bg-white text-brand-blue-500 pb-20">
      <section className="bg-brand-blue-500 text-white pt-16 pb-14 px-4 sm:px-6 lg:px-8 border-b border-brand-blue-400">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-yellow-500 bg-brand-blue-400/50 px-3 py-1 rounded-full border border-brand-blue-300/40 inline-block">
            Nuestra Historia y Filosofía
          </span>
          <h1 className="font-display text-4xl sm:text-6xl uppercase tracking-tight text-white leading-none">
            SOBRE ENVÍOS DOSRUEDAS
          </h1>
          <p className="font-sans text-base sm:text-lg text-brand-blue-50/90 max-w-2xl mx-auto leading-relaxed">
            Mensajería en moto marplatense construida sobre el compromiso, la palabra y la presencia real en la calle.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-10 font-sans">
        
        {/* Main Narrative */}
        <div className="p-2 rounded-2xl bg-brand-blue-50/80 border border-brand-blue-100/60 shadow-sm">
          <div className="bg-white rounded-xl p-6 sm:p-10 space-y-6">
            <h2 className="font-display text-3xl uppercase tracking-tight text-brand-blue-500">
              Quiénes Somos
            </h2>
            <p className="text-brand-blue-500/85 leading-relaxed text-sm sm:text-base">
              Envíos DosRuedas nació en Mar del Plata con una premisa simple y clara: <strong>en logística urbana, la confianza no se delega en un algoritmo</strong>. Mientras el mercado se llenaba de aplicaciones multinacionales con repartidores anónimos y sin respaldo en caso de roturas o demoras, nosotros apostamos por un modelo transparente con cadetes propios, vehículos asegurados y una base física en la que siempre hay alguien para responder.
            </p>
            <p className="text-brand-blue-500/85 leading-relaxed text-sm sm:text-base">
              Hoy conectamos comercios de indumentaria, distribuidoras de repuestos, talleres, estudios profesionales y miles de particulares a lo largo y ancho de los 5 radios urbanos de la ciudad, desde el Microcentro hasta Batán y Chapadmalal.
            </p>
          </div>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 rounded-xl bg-brand-blue-50 border border-brand-blue-100 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-brand-blue-500 text-brand-yellow-500 flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5 stroke-[2.5]" />
            </div>
            <h3 className="font-display text-xl uppercase tracking-tight text-brand-blue-500">
              Flota 100% Propia
            </h3>
            <p className="text-xs text-brand-blue-500/80 leading-relaxed">
              No tercerizamos despachos. Cada cadete que retira en tu puerta es personal de nuestro equipo con seguro de accidentes y casco reglamentario.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-brand-blue-50 border border-brand-blue-100 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-brand-blue-500 text-brand-yellow-500 flex items-center justify-center font-bold">
              <MapPin className="w-5 h-5 stroke-[2.5]" />
            </div>
            <h3 className="font-display text-xl uppercase tracking-tight text-brand-blue-500">
              Base en Friuli 1972
            </h3>
            <p className="text-xs text-brand-blue-500/80 leading-relaxed">
              Ubicación física permanente donde podés acercar tus paquetes, conocer al equipo o coordinar acuerdos comerciales corporativos.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-brand-blue-50 border border-brand-blue-100 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-brand-blue-500 text-brand-yellow-500 flex items-center justify-center font-bold">
              <Award className="w-5 h-5 stroke-[2.5]" />
            </div>
            <h3 className="font-display text-xl uppercase tracking-tight text-brand-blue-500">
              La Palabra Vale
            </h3>
            <p className="text-xs text-brand-blue-500/80 leading-relaxed">
              Si pactamos una franja de 3 hs o un reparto LowCost en el día, lo cumplimos. Sin promesas falsas de 30 minutos imposibles en asfalto real.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pt-6">
          <Link
            href="/cotizar"
            className="bg-brand-yellow-500 hover:bg-brand-yellow-400 text-brand-blue-500 font-subheading text-lg font-bold uppercase tracking-wider px-8 py-4 rounded-full shadow-accent-sm transition-transform hover:scale-105 inline-flex items-center gap-2"
          >
            Cotizá tu Envío con Nosotros
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

      </div>
    </main>
  );
}
