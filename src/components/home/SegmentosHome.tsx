import Link from 'next/link';
import { User, Store, Briefcase, ArrowRight, ShieldCheck } from 'lucide-react';

const SEGMENTS = [
  {
    number: '01',
    icon: User,
    tag: 'Particulares · Trámites',
    title: 'Trámites y Encomiendas Personales',
    desc: 'Olvidate de hacer filas o perder la mañana. Trasladamos llaves, documentación legal, medicamentos, compras del día y paquetes urgentes puerta a puerta.',
    benefit: 'Franja de 3 hs o entrega inmediata',
    cta: 'Cotizar Mandado',
    href: '/cotizar',
  },
  {
    number: '02',
    icon: Store,
    tag: 'Comercios · E-Commerce',
    title: 'Envíos en el Día y Mercado Envíos Flex',
    desc: 'Multiplicá tus ventas online entregando el mismo día con cadetes de confianza. Cobro contra reembolso integrado y rendición formal en 24 hs.',
    benefit: 'Retiro bonificado en tu local',
    cta: 'Ver Plan Emprendedores',
    href: '/servicios/plan-emprendedores',
  },
  {
    number: '03',
    icon: Briefcase,
    tag: 'Empresas · Cuenta Corriente',
    title: 'Cadetería Corporativa & Ruteo B2B',
    desc: 'Solución logística integral para distribuidoras, repuesteras y estudios profesionales. Facturación unificada A/B quincenal o mensual con remitos conformados.',
    benefit: 'Atención prioritaria y soporte dedicado',
    cta: 'Solicitar Apertura B2B',
    href: '/servicios/empresas-cuenta-corriente',
  },
];

export default function SegmentosHome() {
  return (
    <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header with quiet unboxed kicker and balanced title */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="flex items-center justify-center gap-2 text-xs font-mono font-semibold uppercase tracking-[0.22em] text-brand-blue-500/75 mb-3">
          <span>Soluciones a Medida</span>
          <span className="text-brand-yellow-500" aria-hidden="true">/</span>
          <span>Mar del Plata Urbana y Gral. Pueyrredón</span>
        </div>
        <h2 className="font-display text-3xl sm:text-5xl uppercase tracking-tight text-brand-blue-500 mb-4 text-balance leading-[0.94]">
          ¿Qué tipo de envío necesitás coordinar?
        </h2>
        <p className="font-sans text-base sm:text-lg text-brand-blue-500/80 leading-relaxed text-balance">
          Diseñamos esquemas operativos específicos según el volumen, la urgencia y los requerimientos de tu negocio o necesidad personal.
        </p>
      </div>

      {/* Architectural Bento Grid with Single-Elevation Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {SEGMENTS.map((s) => {
          const Icon = s.icon;
          return (
            <div
              key={s.number}
              className="group relative rounded-2xl bg-white border border-slate-200/90 hover:border-brand-blue-500/40 p-7 lg:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-15px_rgba(9,80,246,0.12)] overflow-hidden"
            >
              {/* Subtle accent line on hover */}
              <div
                className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-brand-yellow-500 via-brand-blue-500 to-brand-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                aria-hidden="true"
              />

              {/* Watermark index number */}
              <span
                aria-hidden="true"
                className="absolute right-6 top-5 font-display text-5xl text-brand-blue-500/10 font-bold select-none pointer-events-none group-hover:text-brand-blue-500/20 transition-colors"
              >
                {s.number}
              </span>

              <div>
                {/* Icon header with high-contrast badge */}
                <div className="w-13 h-13 rounded-xl bg-brand-blue-50 text-brand-blue-500 group-hover:bg-brand-blue-500 group-hover:text-brand-yellow-400 flex items-center justify-center mb-6 border border-brand-blue-100/70 transition-colors duration-300 shadow-xs">
                  <Icon className="w-6 h-6 stroke-[2]" aria-hidden="true" />
                </div>

                {/* Unboxed category tag */}
                <span className="font-mono text-xs font-bold text-brand-blue-400 uppercase tracking-wider block mb-2">
                  {s.tag}
                </span>

                {/* Card Title */}
                <h3 className="font-display text-2xl uppercase tracking-tight text-brand-blue-500 mb-3.5 leading-snug group-hover:text-brand-blue-600 transition-colors">
                  {s.title}
                </h3>

                {/* Description */}
                <p className="font-sans text-sm text-brand-blue-500/80 leading-relaxed mb-6">
                  {s.desc}
                </p>

                {/* Key Benefit marker */}
                <div className="flex items-center gap-2 text-xs font-sans font-medium text-brand-blue-500/90 py-2 px-3 rounded-lg bg-slate-50 border border-slate-100 mb-6">
                  <ShieldCheck className="w-4 h-4 text-brand-yellow-500 shrink-0" aria-hidden="true" />
                  <span>{s.benefit}</span>
                </div>
              </div>

              {/* Card Footer / CTA */}
              <div className="pt-4 border-t border-slate-100">
                <Link
                  href={s.href}
                  className="inline-flex items-center justify-between w-full font-subheading text-base font-bold uppercase tracking-wider text-brand-blue-500 group-hover:text-brand-blue-600 transition-colors"
                >
                  <span>{s.cta}</span>
                  <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-brand-yellow-400 group-hover:text-brand-blue-500 flex items-center justify-center transition-all duration-200">
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                  </div>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
