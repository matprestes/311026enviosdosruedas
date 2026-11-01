import Image from 'next/image';

export default function ContactHero() {
  return (
    <section className="bg-brand-blue-500 text-white pt-16 pb-14 px-4 sm:px-6 lg:px-8 border-b border-brand-blue-400 relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-7 text-center md:text-left space-y-4">
          <div className="inline-flex items-center gap-3">
            <div className="relative w-12 h-12 shrink-0 drop-shadow-md">
              <Image
                src="/elementos/escribinos_transparent.webp"
                alt="Escribinos por WhatsApp Mar del Plata"
                fill
                sizes="48px"
                className="object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-yellow-500 bg-brand-blue-400/50 px-3 py-1 rounded-full border border-brand-blue-300/40 inline-block">
              Atención al Cliente · Mar del Plata
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl uppercase tracking-tight text-white leading-none">
            CONTACTO Y BASE CENTRAL
          </h1>
          <p className="font-sans text-base sm:text-lg text-brand-blue-50/90 leading-relaxed">
            Estamos para ayudarte a resolver tus entregas en Mar del Plata. Escribinos directamente por WhatsApp para una cotización inmediata o completá el formulario para propuestas comerciales.
          </p>
        </div>

        <div className="md:col-span-5 flex justify-center">
          <div className="relative w-full max-w-sm h-52 sm:h-64 rounded-2xl overflow-hidden shadow-xl border-2 border-brand-blue-400 bg-brand-blue-400/40">
            <Image
              src="/elementos/hero_contacto.webp"
              alt="Central de atención y cadetería Envíos DosRuedas Mar del Plata"
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              className="object-cover object-center"
              priority
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
