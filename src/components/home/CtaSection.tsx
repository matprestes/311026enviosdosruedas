import Link from 'next/link';
import Image from 'next/image';
import { MessageSquare, ArrowRight, ShieldCheck, Clock, MapPin } from 'lucide-react';

export default function CtaSection() {
  return (
    <section className="bg-brand-blue-500 text-white py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background radial glow & speed vectors */}
      <div
        className="absolute inset-0 pointer-events-none select-none opacity-20"
        aria-hidden="true"
      >
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-brand-yellow-500 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-white blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10 space-y-8">
        {/* Unboxed Kicker with Avatar Graphic */}
        <div className="inline-flex items-center gap-3">
          <div className="relative w-12 h-12 shrink-0 drop-shadow-md">
            <Image
              src="/elementos/escribinos_transparent.webp"
              alt="Escribinos por WhatsApp Envíos DosRuedas"
              fill
              sizes="48px"
              className="object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-[0.24em] text-brand-yellow-400">
            <span>05</span>
            <span className="text-white/40" aria-hidden="true">/</span>
            <span>Respuesta Inmediata</span>
            <span className="text-white/40" aria-hidden="true">·</span>
            <span className="text-white/90">Coordinación al Toque</span>
          </div>
        </div>

        {/* Display Headline */}
        <h2 className="font-display text-4xl sm:text-6xl uppercase tracking-tight text-white leading-none text-balance">
          ¿Tenés un paquete listo para despachar en <span className="text-brand-yellow-400">Mar del Plata</span>?
        </h2>

        {/* Paragraph */}
        <p className="font-sans text-lg sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed font-light text-balance">
          Cotizá online de forma instantánea según la distancia vial real o escribinos directo a nuestro WhatsApp comercial para coordinar con un operador en vivo.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link
            href="/cotizar"
            className="w-full sm:w-auto bg-brand-yellow-500 hover:bg-brand-yellow-400 active:bg-brand-yellow-600 text-brand-blue-500 font-subheading text-xl font-bold uppercase tracking-wider px-9 py-4 rounded-full shadow-[0_12px_28px_rgba(255,236,1,0.3)] transition-all duration-200 hover:scale-105 inline-flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow-500 focus-visible:ring-offset-2"
          >
            <span>Cotizá tu Envío Online</span>
            <ArrowRight className="w-5 h-5 stroke-[2.5]" aria-hidden="true" />
          </Link>
          <a
            href="https://wa.me/5492236602699?text=Hola!%20Quiero%20coordinar%20un%20env%C3%ADo%20en%20Mar%20del%20Plata"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto border-2 border-white/80 hover:bg-white/10 text-white font-subheading text-xl font-bold uppercase tracking-wider px-9 py-4 rounded-full transition-colors inline-flex items-center justify-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
          >
            <MessageSquare className="w-5 h-5 text-brand-yellow-400" aria-hidden="true" />
            <span>WhatsApp: 223 660-2699</span>
          </a>
        </div>

        {/* Trust Badges Strip */}
        <div className="pt-8 border-t border-white/15 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs font-mono text-white/80">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-brand-yellow-400" aria-hidden="true" />
            Base Central: Friuli 1972
          </span>
          <span className="text-white/30 hidden sm:inline" aria-hidden="true">·</span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-brand-yellow-400" aria-hidden="true" />
            Lun a Vie 09:00 a 18:00 / Sáb 10:00 a 15:00
          </span>
          <span className="text-white/30 hidden sm:inline" aria-hidden="true">·</span>
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-yellow-400" aria-hidden="true" />
            Flota Propia · Cero Tercerización
          </span>
        </div>
      </div>
    </section>
  );
}
