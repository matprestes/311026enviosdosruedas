import Link from 'next/link';
import { Calculator, ArrowRight } from 'lucide-react';

export default function ConversionBanner() {
  return (
    <div className="p-2 rounded-2xl bg-brand-blue-500 text-white shadow-md border border-brand-blue-400">
      <div className="p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center sm:text-left">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-brand-yellow-500 bg-brand-blue-400/50 px-3 py-1 rounded-full border border-brand-blue-300/40 inline-block">
            Cálculo Inmediato
          </span>
          <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-white">
            ¿Preferís cotizar tu viaje ahora mismo?
          </h3>
          <p className="font-sans text-sm text-brand-blue-50/90 max-w-xl">
            Compará al instante las opciones Express y LowCost según el trazado exacto de asfalto en Mar del Plata.
          </p>
        </div>

        <Link
          href="/cotizar"
          className="bg-brand-yellow-500 hover:bg-brand-yellow-400 active:bg-brand-yellow-600 text-brand-blue-500 font-subheading text-lg font-bold uppercase tracking-wider px-6 py-3.5 rounded-full shadow-accent-sm transition-transform hover:scale-105 shrink-0 inline-flex items-center gap-2"
        >
          <Calculator className="w-5 h-5 stroke-[2.5]" />
          IR AL COTIZADOR
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
