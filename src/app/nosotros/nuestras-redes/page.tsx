import type { Metadata } from 'next';
import OptimizedImage from '@/components/ui/OptimizedImage';
import { MessageSquare, Instagram, Facebook, ArrowUpRight, ShieldCheck } from 'lucide-react';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.enviosdosruedas.com';

export const metadata: Metadata = {
  title: 'Nuestras Redes Sociales Oficiales | Envíos DosRuedas',
  description: 'Conectate con Envíos DosRuedas a través de nuestros canales oficiales en WhatsApp, Instagram y Facebook. Novedades y avisos operativos en Mar del Plata.',
  alternates: { canonical: `${baseUrl}/nosotros/nuestras-redes` },
};

const CHANNELS = [
  {
    name: 'WhatsApp Oficial',
    handle: '+54 9 223 660-2699',
    cta: 'Escribinos al WhatsApp',
    badge: 'Canal Primario',
    desc: 'El canal más rápido para cotizar en el acto, pedir un cadete express, solicitar cambio de franja o consultar el estado de tu paquete.',
    url: 'https://wa.me/5492236602699?text=Hola!%20Vengo%20de%20la%20p%C3%A1gina%20de%20redes%20sociales',
    icon: MessageSquare,
    bgHeader: 'bg-[#128C7E]',
    btnColor: 'bg-[#25D366] hover:bg-[#1ebe5b] text-white',
  },
  {
    name: 'Instagram Oficial',
    handle: '@enviosdosruedas',
    cta: 'Seguinos en Instagram',
    badge: 'Comunidad & Tips',
    desc: 'Historias diarias de nuestros cadetes en asfalto, tips de embalaje seguro, avisos meteorológicos de lluvia y promociones para tiendas online.',
    url: 'https://instagram.com/enviosdosruedas',
    icon: Instagram,
    bgHeader: 'bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737]',
    btnColor: 'bg-brand-blue-500 hover:bg-brand-blue-400 text-white',
  },
  {
    name: 'Facebook Comunidad',
    handle: '/enviosdosruedas',
    cta: 'Sumate en Facebook',
    badge: 'Novedades B2B',
    desc: 'Publicaciones institucionales, convenios con distribuidoras locales, valoraciones y novedades de mensajería en Mar del Plata.',
    url: 'https://facebook.com/enviosdosruedas',
    icon: Facebook,
    bgHeader: 'bg-[#1877F2]',
    btnColor: 'bg-[#1877F2] hover:bg-[#1464cc] text-white',
  },
];

export default function NuestrasRedesPage() {
  return (
    <main className="min-h-dvh bg-white text-brand-blue-500 pb-20">
      <section className="bg-brand-blue-500 text-white pt-16 pb-14 px-4 sm:px-6 lg:px-8 border-b border-brand-blue-400">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="flex items-center justify-center gap-3">
            <div className="relative w-12 h-12 shrink-0 drop-shadow-md">
              <OptimizedImage
                src="/elementos/seguinos_transparent.webp"
                alt="Seguinos en redes oficiales Envíos DosRuedas"
                fill
                sizes="48px"
                aboveTheFold={true}
                className="object-contain"
              />
            </div>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-yellow-500 bg-brand-blue-400/50 px-3 py-1 rounded-full border border-brand-blue-300/40 inline-block">
              Comunidad Digital
            </span>
          </div>
          <h1 className="font-display text-4xl sm:text-6xl uppercase tracking-tight text-white leading-none">
            NUESTRAS REDES SOCIALES
          </h1>
          <p className="font-sans text-base sm:text-lg text-brand-blue-50/90 max-w-2xl mx-auto leading-relaxed">
            Estamos comunicados permanentemente con los comerciantes, clientes y cadetes de Mar del Plata. Seguí nuestros canales oficiales.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CHANNELS.map((ch) => {
            const Icon = ch.icon;
            return (
              <div key={ch.name} className="p-1.5 rounded-2xl bg-brand-blue-50/80 border border-brand-blue-100/60 shadow-xs flex flex-col justify-between">
                <div className="bg-white rounded-xl p-6 border border-brand-blue-100/40 h-full flex flex-col justify-between space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-xs ${ch.bgHeader}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="font-mono text-[11px] font-bold px-2.5 py-1 bg-brand-blue-50 text-brand-blue-500 rounded-full border border-brand-blue-100">
                        {ch.badge}
                      </span>
                    </div>

                    <h2 className="font-display text-2xl uppercase tracking-tight text-brand-blue-500 mb-1">
                      {ch.name}
                    </h2>
                    <span className="font-mono text-xs text-brand-blue-400 font-bold block mb-3">
                      {ch.handle}
                    </span>
                    <p className="font-sans text-xs sm:text-sm text-brand-blue-500/80 leading-relaxed">
                      {ch.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-brand-blue-50">
                    <a
                      href={ch.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full py-3 rounded-full font-subheading text-base font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-transform hover:scale-102 ${ch.btnColor}`}
                    >
                      <span>{ch.cta}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="p-4 rounded-xl bg-brand-blue-50/80 border border-brand-blue-100 text-center text-xs font-sans text-brand-blue-500/80 max-w-2xl mx-auto flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-brand-blue-500 shrink-0" />
          <span>Verificá siempre que el número de contacto sea el oficial <strong>+54 9 223 660-2699</strong> para evitar estafas.</span>
        </div>
      </div>
    </main>
  );
}
