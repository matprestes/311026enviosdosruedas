import type { Metadata } from 'next';
import Link from 'next/link';
import { Users, HelpCircle, Share2, ArrowRight } from 'lucide-react';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.enviosdosruedas.com';

export const metadata: Metadata = {
  title: 'Nosotros | Envíos DosRuedas Mar del Plata',
  description: 'Conocé la empresa detrás de la logística en moto más confiable de Mar del Plata. Flota propia, base en Friuli 1972, preguntas frecuentes y redes oficiales.',
  alternates: { canonical: `${baseUrl}/nosotros` },
};

const SECTIONS = [
  {
    href: '/nosotros/sobre-nosotros',
    icon: Users,
    title: 'Sobre Nosotros',
    desc: 'Nuestra historia, valores de compromiso en la calle, equipo propio y base operativa en Friuli 1972.',
    cta: 'Conocer Nuestra Historia',
  },
  {
    href: '/nosotros/preguntas-frecuentes',
    icon: HelpCircle,
    title: 'Preguntas Frecuentes (FAQs)',
    desc: 'Respuestas claras sobre tarifas, límites de peso (5 kg), recargo por lluvia, tolerancia de espera y medios de pago.',
    cta: 'Ver Respuestas a Dudas',
  },
  {
    href: '/nosotros/nuestras-redes',
    icon: Share2,
    title: 'Nuestras Redes Oficiales',
    desc: 'Canales directos de WhatsApp, Instagram y Facebook para estar comunicados en tiempo real con la base.',
    cta: 'Explorar Redes',
  },
];

export default function NosotrosPage() {
  return (
    <main className="min-h-dvh bg-white text-brand-blue-500 pb-20">
      <section className="bg-brand-blue-500 text-white pt-16 pb-14 px-4 sm:px-6 lg:px-8 border-b border-brand-blue-400">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-yellow-500 bg-brand-blue-400/50 px-3 py-1 rounded-full border border-brand-blue-300/40 inline-block">
            Identidad y Confianza
          </span>
          <h1 className="font-display text-4xl sm:text-6xl uppercase tracking-tight text-white leading-none">
            INSTITUCIONAL: ENVÍOS DOSRUEDAS
          </h1>
          <p className="font-sans text-base sm:text-lg text-brand-blue-50/90 max-w-2xl mx-auto leading-relaxed">
            Mensajería en moto marplatense construida sobre el compromiso, la palabra y la presencia real en la calle.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {SECTIONS.map((sec) => {
            const Icon = sec.icon;
            return (
              <div key={sec.href} className="p-1.5 rounded-2xl bg-brand-blue-50/80 border border-brand-blue-100/60 shadow-xs hover:-translate-y-1 transition-all">
                <div className="bg-white rounded-xl p-6 sm:p-7 border border-brand-blue-100/40 h-full flex flex-col justify-between space-y-6">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-brand-blue-50 text-brand-blue-500 flex items-center justify-center mb-5 border border-brand-blue-100/60">
                      <Icon className="w-6 h-6 stroke-[2]" />
                    </div>
                    <h2 className="font-display text-2xl uppercase tracking-tight text-brand-blue-500 mb-2">
                      {sec.title}
                    </h2>
                    <p className="font-sans text-sm text-brand-blue-500/80 leading-relaxed">
                      {sec.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-brand-blue-50">
                    <Link
                      href={sec.href}
                      className="inline-flex items-center gap-2 font-subheading text-base font-bold uppercase tracking-wider text-brand-blue-500 hover:text-brand-blue-400 transition-colors group"
                    >
                      <span>{sec.cta}</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Physical Base banner */}
        <div className="p-2 rounded-2xl bg-brand-blue-50/80 border border-brand-blue-100/60">
          <div className="bg-white rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <span className="font-mono text-xs font-bold text-brand-blue-400 uppercase">
                Operaciones Centralizadas
              </span>
              <h3 className="font-display text-2xl uppercase text-brand-blue-500">
                Base Operativa Fija: Friuli 1972, Mar del Plata
              </h3>
              <p className="font-sans text-xs sm:text-sm text-brand-blue-500/80">
                Atención y recepción de paquetes: Lunes a Viernes de 09:00 a 18:00 hs · Sábados de 10:00 a 15:00 hs.
              </p>
            </div>
            <Link
              href="/contacto"
              className="bg-brand-blue-500 hover:bg-brand-blue-400 text-white font-subheading text-base font-bold uppercase tracking-wider px-6 py-3 rounded-xl transition-colors shrink-0"
            >
              Ver Datos de Contacto →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
