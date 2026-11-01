import Image from 'next/image';

export default function CotizadorHero() {
  return (
    <section className="bg-brand-blue-500 text-white pt-16 pb-12 px-4 sm:px-6 lg:px-8 border-b border-brand-blue-400">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          <div className="relative w-12 h-12 shrink-0 drop-shadow-md">
            <Image
              src="/elementos/planifica_transparent.webp"
              alt="Planificá tu recorrido en moto Mar del Plata"
              fill
              sizes="48px"
              className="object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-yellow-500 bg-brand-blue-400/50 px-3 py-1 rounded-full border border-brand-blue-300/40 inline-block">
            Cálculo Vial Exacto · Mar del Plata
          </span>
        </div>
        <h1 className="font-display text-4xl sm:text-6xl uppercase tracking-tight text-white leading-none">
          COTIZÁ TU ENVÍO EN MOTO
        </h1>
        <p className="font-sans text-base sm:text-lg text-brand-blue-50/90 max-w-2xl mx-auto leading-relaxed">
          Cargá el punto de retiro y entrega una sola vez. Nuestro cotizador calcula la distancia vial estimada y te muestra las tarifas Express y LowCost para que elijas la que mejor se adapte a tu necesidad.
        </p>
      </div>
    </section>
  );
}
