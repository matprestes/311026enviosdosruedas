import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, AlertCircle, ArrowRight } from 'lucide-react';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.enviosdosruedas.com';

export const metadata: Metadata = {
  title: 'Cobertura de Envíos en Mar del Plata',
  description: 'Conocé los 5 radios zonales de entrega en moto en Mar del Plata: Centro, Puerto, Norte, Oeste y zonas periféricas como Batán y Sierra de los Padres.',
  alternates: { canonical: `${baseUrl}/cobertura` },
  openGraph: {
    title: 'Cobertura de Envíos en Mar del Plata | Envíos DosRuedas',
    description: 'Radios urbanos y zonas de entrega habitual en Mar del Plata.',
    url: `${baseUrl}/cobertura`,
  },
};

const ZONAS = [
  {
    id: 'z1',
    name: 'Zona 1: Centro y Macrocentro',
    barrios: 'Plaza San Martín, Güemes, Plaza Mitre, La Perla, Terminal Vieja (Paseo Aldrey), Estación Ferroautomotora y Microcentro.',
    status: 'Frecuencia Continua',
    color: 'border-l-4 border-l-brand-blue-500',
    tiempo: 'Entrega ágil en el día',
  },
  {
    id: 'z2',
    name: 'Zona 2: Puerto y Sur Urbano',
    barrios: 'Puerto Comercial, Alem, Playa Grande, Bosque Peralta Ramos, Punta Mogotes, Alfar hasta el Faro de la Memoria.',
    status: 'Frecuencia Diaria',
    color: 'border-l-4 border-l-brand-blue-400',
    tiempo: 'Rondas fijas mañana y tarde',
  },
  {
    id: 'z3',
    name: 'Zona 3: Norte y Constitución',
    barrios: 'Parque Luro, Av. Constitución comercial, Barrio Estrada, Zacagnini, Aeropuerto Astor Piazzolla y Estación Camet.',
    status: 'Frecuencia Diaria',
    color: 'border-l-4 border-l-brand-blue-300',
    tiempo: 'Rondas fijas mañana y tarde',
  },
  {
    id: 'z4',
    name: 'Zona 4: Oeste Urbano',
    barrios: 'Los Galpones, Regional, Libertad, San Cayetano, Av. Colón al fondo, Autódromo y Barrio Belgrano.',
    status: 'Frecuencia Diaria',
    color: 'border-l-4 border-l-brand-blue-200',
    tiempo: 'Rondas diarias programadas',
  },
  {
    id: 'z5',
    name: 'Zona 5: Periferia y Destinos Especiales',
    barrios: 'Batán, Sierra de los Padres, Camet Norte, Santa Clara del Mar, Chapadmalal y Acantilados.',
    status: 'Tarifa por Km ($1.000/km)',
    color: 'border-l-4 border-l-brand-yellow-500',
    tiempo: 'Coordinación con anticipación',
  },
];

export default function CoberturaPage() {
  return (
    <main className="min-h-dvh bg-white text-brand-blue-500 pb-20">
      {/* Hero */}
      <section className="bg-brand-blue-500 text-white pt-16 pb-14 px-4 sm:px-6 lg:px-8 border-b border-brand-blue-400">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-yellow-500 bg-brand-blue-400/50 px-3 py-1 rounded-full border border-brand-blue-300/40 inline-block">
            Alcance Territorial · Mar del Plata
          </span>
          <h1 className="font-display text-4xl sm:text-6xl uppercase tracking-tight text-white leading-none">
            COBERTURA DE ENVÍOS EN MAR DEL PLATA
          </h1>
          <p className="font-sans text-base sm:text-lg text-brand-blue-50/90 max-w-2xl mx-auto leading-relaxed">
            Llegamos a cada rincón de la ciudad con cadetería propia y base fija en Friuli 1972. Conocé nuestros radios urbanos de entrega habitual y las condiciones para zonas periféricas.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-12">
        {/* Base Operativa Highlight */}
        <div className="p-2 rounded-2xl bg-brand-blue-50/80 border border-brand-blue-100/60 shadow-sm">
          <div className="bg-white rounded-xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-brand-blue-500 text-brand-yellow-500 flex items-center justify-center shrink-0 shadow-sm">
                <MapPin className="w-8 h-8 stroke-[2.5]" />
              </div>
              <div>
                <span className="font-mono text-xs font-bold text-brand-blue-400 uppercase">
                  Centro Neurálgico de Despacho
                </span>
                <h2 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-brand-blue-500">
                  Base Central: Friuli 1972, Mar del Plata
                </h2>
                <p className="font-sans text-sm text-brand-blue-500/80">
                  Punto de salida matutino y vespertino de cadetes hacia todos los cuadrantes de la ciudad.
                </p>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=Friuli+1972,+Mar+del+Plata"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-blue-50 text-brand-blue-500 border border-brand-blue-200 hover:bg-brand-blue-500 hover:text-white font-subheading text-base font-bold uppercase tracking-wider px-6 py-3 rounded-xl transition-colors shrink-0"
            >
              Ver en Google Maps →
            </a>
          </div>
        </div>

        {/* Zones Grid */}
        <div>
          <div className="mb-6">
            <h2 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-brand-blue-500">
              Detalle de los 5 Radios Zonales
            </h2>
            <p className="font-sans text-sm text-brand-blue-500/80">
              Nuestra red cubre desde el microcentro hasta los accesos por rutas 2, 11 y 88.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ZONAS.map((z) => (
              <div key={z.id} className="p-1.5 rounded-2xl bg-brand-blue-50/80 border border-brand-blue-100/60 shadow-xs hover:-translate-y-1 transition-transform">
                <div className={`bg-white rounded-xl p-6 h-full flex flex-col justify-between ${z.color}`}>
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-display text-xl uppercase tracking-tight text-brand-blue-500 flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-brand-blue-500" />
                        {z.name}
                      </span>
                    </div>

                    <p className="font-sans text-xs sm:text-sm text-brand-blue-500/85 leading-relaxed mb-6">
                      {z.barrios}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-brand-blue-50 flex items-center justify-between text-xs font-mono">
                    <span className="font-bold text-brand-blue-500">{z.status}</span>
                    <span className="text-brand-blue-400">{z.tiempo}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Periferia Callout */}
        <div className="p-2 rounded-2xl bg-brand-blue-500 text-white shadow-md border border-brand-blue-400">
          <div className="p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-brand-yellow-500" />
                <h3 className="font-display text-2xl uppercase tracking-tight text-brand-yellow-500">
                  Condiciones para Destinos de Periferia
                </h3>
              </div>
              <p className="font-sans text-sm text-brand-blue-50/90 max-w-2xl leading-relaxed">
                Los traslados hacia Batán, Sierra de los Padres, Camet Norte, Santa Clara o Chapadmalal superan el radio urbano automático de 10 km. Se cotizan a razón de $1.000 por kilómetro lineal de ruta o tarifa acordada previamente.
              </p>
            </div>

            <Link
              href="/cotizar"
              className="bg-brand-yellow-500 hover:bg-brand-yellow-400 text-brand-blue-500 font-subheading text-lg font-bold uppercase tracking-wider px-6 py-3.5 rounded-full shadow-accent-sm transition-transform hover:scale-105 shrink-0 inline-flex items-center gap-2"
            >
              COTIZAR RECORRIDO AHORA
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
