import Link from 'next/link';
import { User, Store, Briefcase, ArrowRight } from 'lucide-react';

const SEGMENTS = [
  {
    icon: User,
    tag: 'Particulares',
    title: 'Trámites y Encomiendas Personales',
    desc: 'Olvídate de hacer filas. Llevamos llaves, documentos, medicamentos, compras del día y encomiendas urgentes de punto a punto.',
    cta: 'Cotizar Mandado',
    href: '/cotizar',
  },
  {
    icon: Store,
    tag: 'Comercios y Emprendedores',
    title: 'Envíos en el Día y Mercado Envíos Flex',
    desc: 'Multiplicá tus ventas online entregando el mismo día con cadetes de confianza. Cobro contra reembolso con rendición en 24 hs.',
    cta: 'Ver Plan Emprendedores',
    href: '/servicios/plan-emprendedores',
  },
  {
    icon: Briefcase,
    tag: 'Empresas y Corporativos',
    title: 'Cadetería Fija y Cuenta Corriente',
    desc: 'Solución logística integral para distribuidoras, repuesteras y estudios jurídicos. Facturación quincenal o mensual unificada y remitos conformados.',
    cta: 'Solicitar Apertura B2B',
    href: '/servicios/empresas-cuenta-corriente',
  },
];

export default function SegmentosHome() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-blue-400 bg-brand-blue-50 px-3 py-1 rounded-full border border-brand-blue-100">
          Soluciones a Medida
        </span>
        <h2 className="font-display text-3xl sm:text-5xl uppercase tracking-tight text-brand-blue-500 mt-3 mb-4">
          ¿Qué tipo de envío necesitás coordinar?
        </h2>
        <p className="font-sans text-base sm:text-lg text-brand-blue-500/80 leading-relaxed">
          Diseñamos esquemas operativos específicos según el volumen, la urgencia y los requerimientos de tu negocio o necesidad personal.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {SEGMENTS.map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.tag} className="p-1.5 md:p-2 rounded-2xl bg-brand-blue-50/80 border border-brand-blue-100/60 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
              <div className="bg-white rounded-xl p-6 md:p-7 border border-brand-blue-100/40 h-full flex flex-col justify-between space-y-6">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-brand-blue-50 text-brand-blue-500 flex items-center justify-center mb-5 border border-brand-blue-100/60">
                    <Icon className="w-6 h-6 stroke-[2]" />
                  </div>
                  <span className="font-mono text-xs font-bold text-brand-blue-400 uppercase tracking-wider block mb-1">
                    {s.tag}
                  </span>
                  <h3 className="font-display text-2xl uppercase tracking-tight text-brand-blue-500 mb-3 leading-snug">
                    {s.title}
                  </h3>
                  <p className="font-sans text-sm text-brand-blue-500/80 leading-relaxed">
                    {s.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-brand-blue-50">
                  <Link
                    href={s.href}
                    className="inline-flex items-center gap-2 font-subheading text-base font-bold uppercase tracking-wider text-brand-blue-500 hover:text-brand-blue-400 transition-colors group"
                  >
                    <span>{s.cta}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
