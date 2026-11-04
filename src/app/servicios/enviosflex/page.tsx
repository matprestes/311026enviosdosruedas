import type { Metadata } from 'next';
import Link from 'next/link';
import OptimizedImage from '@/components/ui/OptimizedImage';
import { Clock, ShieldCheck, Phone } from 'lucide-react';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.enviosdosruedas.com';

export const metadata: Metadata = {
  title: 'Mercado Envíos Flex en Mar del Plata',
  description: 'Entregá el mismo día a tus compradores de Mercado Libre en Mar del Plata. Corte de retiro a las 15:00 hs y entrega antes de las 20:00 hs.',
  alternates: { canonical: `${baseUrl}/servicios/enviosflex` },
};

export default function EnviosFlexPage() {
  return (
    <main className="min-h-dvh bg-white text-brand-blue-500 pb-20">
      <section className="bg-brand-blue-500 text-white pt-16 pb-14 px-4 sm:px-6 lg:px-8 border-b border-brand-blue-400">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-yellow-500 bg-brand-blue-400/50 px-3 py-1 rounded-full border border-brand-blue-300/40 inline-block">
            Logística Mercado Libre
          </span>
          <h1 className="font-display text-4xl sm:text-6xl uppercase tracking-tight text-white leading-none">
            MERCADO ENVÍOS FLEX EN MAR DEL PLATA
          </h1>
          <p className="font-sans text-base sm:text-lg text-brand-blue-50/90 max-w-2xl mx-auto leading-relaxed">
            Llegá el mismo día a tus compradores de Mercado Libre y destacá tus publicaciones con el rayo de Flex. Flota propia y seguimiento real.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="p-2 rounded-2xl bg-brand-blue-50/80 border border-brand-blue-100/60 shadow-sm">
              <div className="bg-white rounded-xl p-6 sm:p-8 space-y-4">
                <h2 className="font-display text-2xl uppercase tracking-tight text-brand-blue-500">
                  Mantené tu reputación verde entregando en tiempo récord
                </h2>
                <p className="font-sans text-sm text-brand-blue-500/85 leading-relaxed">
                  Mercado Libre premia a las publicaciones con entrega Flex con mayor visibilidad en los resultados de búsqueda. Envíos DosRuedas retira los paquetes rotulados de tu local, taller o depósito a las 15:00 hs y los entrega en la misma jornada antes de las 20:00 hs.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-brand-blue-50/60 border border-brand-blue-100/50">
                    <Clock className="w-5 h-5 text-brand-blue-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-sans text-sm text-brand-blue-500 block">Corte de retiro: 15:00 hs</strong>
                      <span className="text-xs text-brand-blue-500/80">Retiramos por tu punto de despacho o podés dejarlos en nuestra base de Friuli 1972.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-lg bg-brand-blue-50/60 border border-brand-blue-100/50">
                    <Clock className="w-5 h-5 text-brand-blue-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-sans text-sm text-brand-blue-500 block">Límite de entrega: 20:00 hs</strong>
                      <span className="text-xs text-brand-blue-500/80">Cumplimiento estricto de la ventana oficial de entrega el mismo día.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-lg bg-brand-blue-50/60 border border-brand-blue-100/50">
                    <ShieldCheck className="w-5 h-5 text-brand-blue-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-sans text-sm text-brand-blue-500 block">Soporte ante compradores ausentes</strong>
                      <span className="text-xs text-brand-blue-500/80">El cadete se comunica telefónicamente en la puerta y documenta el intento para resguardar tu cuenta.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-brand-blue-50 border border-brand-blue-100 text-xs text-brand-blue-500/80">
              ¿Vendés mucho volumen en Mercado Libre? Podés consultar nuestra <Link href="/guias/envios-flex-mar-del-plata" className="text-brand-blue-500 font-bold underline">Guía Especializada Flex en Mar del Plata →</Link>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="relative w-full h-48 sm:h-56 rounded-2xl overflow-hidden border border-brand-blue-100 shadow-sm bg-brand-blue-50">
              <OptimizedImage
                src="/elementos/envios_flex.webp"
                alt="Mercado Envíos Flex en el día Mar del Plata"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center"
                aboveTheFold={false}
              />
            </div>

            <div className="p-2 rounded-2xl bg-brand-blue-500 text-white shadow-lg border border-brand-blue-400">
              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  <span className="font-mono text-xs font-bold text-brand-yellow-500 uppercase">
                    Esquemas Comerciales Flex
                  </span>
                  <h3 className="font-display text-3xl uppercase tracking-tight text-white mt-1">
                    Modalidades y Tarifas
                  </h3>
                </div>

                <div className="space-y-3 font-sans text-sm">
                  <div className="p-4 rounded-xl bg-brand-blue-400/50 border border-brand-blue-300/40">
                    <div className="flex justify-between items-center mb-1">
                      <strong className="font-subheading text-lg uppercase text-brand-yellow-500">Nivel 1: Por Kilometraje</strong>
                      <span className="font-mono font-bold">Tarifa LowCost</span>
                    </div>
                    <p className="text-xs text-brand-blue-50/90">Tarifa según tramo kilométrico desde $3.000 para vendedores ocasionales.</p>
                  </div>

                  <div className="p-4 rounded-xl bg-brand-blue-400/50 border border-brand-blue-300/40">
                    <div className="flex justify-between items-center mb-1">
                      <strong className="font-subheading text-lg uppercase text-brand-yellow-500">Nivel 2: Tope Zonas 4 y 5</strong>
                      <span className="font-mono font-bold">$6.500 tope</span>
                    </div>
                    <p className="text-xs text-brand-blue-50/90">Tope máximo protegido para zonas alejadas dentro del partido de Gral. Pueyrredón.</p>
                  </div>

                  <div className="p-4 rounded-xl bg-brand-blue-400/50 border border-brand-blue-300/40">
                    <div className="flex justify-between items-center mb-1">
                      <strong className="font-subheading text-lg uppercase text-brand-yellow-500">Nivel 3: Tarifa Plana Unificada</strong>
                      <span className="font-mono font-bold text-brand-yellow-500">$4.500 fijo</span>
                    </div>
                    <p className="text-xs text-brand-blue-50/90">Precio único a cualquier punto de la ciudad para vendedores de más de 10 paquetes diarios.</p>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="https://wa.me/5492236602699?text=Hola!%20Quiero%20sumar%20Mercado%20Env%C3%ADos%20Flex%20a%20mi%20tienda"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-brand-yellow-500 hover:bg-brand-yellow-400 text-brand-blue-500 font-subheading text-lg font-bold uppercase tracking-wider py-3.5 rounded-full shadow-accent-sm text-center transition-transform hover:scale-102 flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4 text-brand-blue-500" />
                    SUMAR FLEX A MI TIENDA POR WHATSAPP
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
