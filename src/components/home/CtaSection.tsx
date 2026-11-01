import Link from 'next/link';
import Image from 'next/image';
import { MessageSquare, ArrowRight } from 'lucide-react';

export default function CtaSection() {
  return (
    <section className="bg-brand-blue-500 text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-5xl mx-auto text-center relative z-10 space-y-8">
        <div className="inline-flex items-center gap-3">
          <div className="relative w-14 h-14 shrink-0 drop-shadow-md">
            <Image
              src="/elementos/escribinos_transparent.webp"
              alt="Escribinos por WhatsApp Envíos DosRuedas"
              fill
              sizes="56px"
              className="object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-yellow-500 bg-brand-blue-400/50 px-4 py-1.5 rounded-full border border-brand-blue-300/40 inline-block">
            Sin Vueltas · Respuesta Inmediata
          </span>
        </div>

        <h2 className="font-display text-4xl sm:text-6xl uppercase tracking-tight text-white leading-none">
          ¿Tenés un paquete listo para despachar en Mar del Plata?
        </h2>

        <p className="font-sans text-lg sm:text-xl text-brand-blue-50/90 max-w-2xl mx-auto leading-relaxed">
          Cotizá online de forma instantánea según la distancia vial real o escribinos directo a nuestro WhatsApp comercial para coordinar con un operador.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href="/cotizar"
            className="w-full sm:w-auto bg-brand-yellow-500 hover:bg-brand-yellow-400 active:bg-brand-yellow-600 text-brand-blue-500 font-subheading text-xl font-bold uppercase tracking-wider px-8 py-4 rounded-full shadow-cta-glow transition-all duration-200 hover:scale-105 inline-flex items-center justify-center gap-2"
          >
            Cotizá tu Envío Online
            <ArrowRight className="w-5 h-5 stroke-[2.5]" />
          </Link>
          <a
            href="https://wa.me/5492236602699?text=Hola!%20Quiero%20coordinar%20un%20env%C3%ADo%20en%20Mar%20del%20Plata"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto border-2 border-white/80 hover:bg-white/10 text-white font-subheading text-xl font-bold uppercase tracking-wider px-8 py-4 rounded-full transition-colors inline-flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-5 h-5 text-brand-yellow-500" />
            WhatsApp: 223 660-2699
          </a>
        </div>
      </div>
    </section>
  );
}
