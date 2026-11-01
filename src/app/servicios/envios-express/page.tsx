import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Zap, Clock, PackageCheck, AlertCircle, CheckCircle2, ArrowRight, Phone } from 'lucide-react';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.enviosdosruedas.com';

export const metadata: Metadata = {
  title: 'Envíos Express en Mar del Plata (Franja de 3 hs)',
  description: 'Servicio de mensajería urgente en moto en Mar del Plata. Entrega en franja de 3 hs a coordinar con 2 hs de anticipación. Corte diario: 15:00 hs.',
  alternates: { canonical: `${baseUrl}/servicios/envios-express` },
};

export default function EnviosExpressPage() {
  return (
    <main className="min-h-dvh bg-white text-brand-blue-500 pb-20">
      {/* Hero */}
      <section className="bg-brand-blue-500 text-white pt-16 pb-14 px-4 sm:px-6 lg:px-8 border-b border-brand-blue-400">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-3">
            <div className="relative w-10 h-10 shrink-0 drop-shadow-md">
              <Image
                src="/elementos/icono_express.webp"
                alt="Ícono Servicio Express Envíos DosRuedas"
                fill
                sizes="40px"
                priority
                fetchPriority="high"
                className="object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-yellow-500 bg-brand-blue-400/50 px-3 py-1 rounded-full border border-brand-blue-300/40 inline-block">
              Servicio Prioritario
            </span>
          </div>
          <h1 className="font-display text-4xl sm:text-6xl uppercase tracking-tight text-white leading-none">
            ENVÍOS EXPRESS EN MAR DEL PLATA
          </h1>
          <p className="font-sans text-base sm:text-lg text-brand-blue-50/90 max-w-2xl mx-auto leading-relaxed">
            Tu encomienda entregada en una franja horaria acotada de 3 hs, coordinada con al menos 2 hs de anticipación previa.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Info */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-2 rounded-2xl bg-brand-blue-50/80 border border-brand-blue-100/60 shadow-sm">
              <div className="bg-white rounded-xl p-6 sm:p-8 space-y-4">
                <h2 className="font-display text-2xl uppercase tracking-tight text-brand-blue-500">
                  ¿Cómo funciona el servicio Express?
                </h2>
                <p className="font-sans text-sm text-brand-blue-500/85 leading-relaxed">
                  El servicio Express está diseñado para situaciones donde la velocidad y la certeza horaria son prioritarias: documentación legal o bancaria, llaves, repuestos urgentes de automotor o entregas especiales a clientes que solo pueden recibir en un horario específico.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-brand-blue-50/60 border border-brand-blue-100/50">
                    <Clock className="w-5 h-5 text-brand-blue-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-sans text-sm text-brand-blue-500 block">Franja de 3 hs a coordinar</strong>
                      <span className="text-xs text-brand-blue-500/80">Elegís la ventana horaria (ej: 14:00 a 17:00 hs) solicitándola con 2 hs de antelación.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-lg bg-brand-blue-50/60 border border-brand-blue-100/50">
                    <Clock className="w-5 h-5 text-brand-blue-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-sans text-sm text-brand-blue-500 block">Corte diario: 15:00 hs</strong>
                      <span className="text-xs text-brand-blue-500/80">Las solicitudes ingresadas después de las 15:00 hs se programan para la primera franja del día siguiente.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-lg bg-brand-blue-50/60 border border-brand-blue-100/50">
                    <PackageCheck className="w-5 h-5 text-brand-blue-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-sans text-sm text-brand-blue-500 block">Bulto Estándar</strong>
                      <span className="text-xs text-brand-blue-500/80">Hasta 5 kg y medidas de hasta 40 × 40 × 30 cm. Excedentes desde $1.800.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Legal / Fiscal Notice */}
            <div className="p-4 rounded-xl bg-brand-blue-50 border border-brand-blue-100 text-xs text-brand-blue-500/80 flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-brand-blue-500 shrink-0 mt-0.5" />
              <span>Régimen Monotributo. Emitimos comprobantes fiscales legales tipo C. No emitimos Factura A.</span>
            </div>
          </div>

          {/* Pricing Table Card & Visual Showcase */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative w-full h-48 sm:h-56 rounded-2xl overflow-hidden border border-brand-blue-100 shadow-sm bg-brand-blue-50">
              <Image
                src="/elementos/envios_express.webp"
                alt="Cadete Express en moto Mar del Plata"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center"
                priority
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-2 rounded-2xl bg-brand-blue-500 text-white shadow-lg border border-brand-blue-400">
              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  <span className="font-mono text-xs font-bold text-brand-yellow-500 uppercase">
                    Escala Oficial 2026
                  </span>
                  <h3 className="font-display text-3xl uppercase tracking-tight text-white mt-1">
                    Tarifario Express MDQ
                  </h3>
                </div>

                <div className="space-y-2 font-mono text-sm">
                  <div className="flex justify-between p-3 rounded-lg bg-brand-blue-400/50 border border-brand-blue-300/40">
                    <span>Tramo 0 a 3 km (Base)</span>
                    <strong className="text-brand-yellow-500 font-bold">$3.700</strong>
                  </div>
                  <div className="flex justify-between p-3 rounded-lg bg-brand-blue-400/50 border border-brand-blue-300/40">
                    <span>Tramo 3 a 5 km</span>
                    <strong className="text-brand-yellow-500 font-bold">$4.600</strong>
                  </div>
                  <div className="flex justify-between p-3 rounded-lg bg-brand-blue-400/50 border border-brand-blue-300/40">
                    <span>Tramo 5 a 7 km</span>
                    <strong className="text-brand-yellow-500 font-bold">$6.100</strong>
                  </div>
                  <div className="flex justify-between p-3 rounded-lg bg-brand-blue-400/50 border border-brand-blue-300/40">
                    <span>Tramo 7 a 10 km</span>
                    <strong className="text-brand-yellow-500 font-bold">$8.200</strong>
                  </div>
                  <div className="flex justify-between p-3 rounded-lg bg-brand-blue-400/50 border border-brand-blue-300/40 text-xs">
                    <span>Excedente más de 10 km</span>
                    <strong className="text-brand-yellow-500 font-bold">$1.000 / km total</strong>
                  </div>
                </div>

                <div className="pt-2 flex flex-col gap-3">
                  <Link
                    href="/cotizar"
                    className="w-full bg-brand-yellow-500 hover:bg-brand-yellow-400 text-brand-blue-500 font-subheading text-lg font-bold uppercase tracking-wider py-3.5 rounded-full shadow-accent-sm text-center transition-transform hover:scale-102 flex items-center justify-center gap-2"
                  >
                    COTIZAR ENVÍO EXPRESS ONLINE
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="https://wa.me/5492236602699?text=Hola!%20Necesito%20un%20Env%C3%ADo%20Express%20en%20franja%20de%203%20hs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full border border-white/60 hover:bg-white/10 text-white font-subheading text-base font-bold uppercase tracking-wider py-3 rounded-full text-center transition-colors flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4 text-brand-yellow-500" />
                    COORDINAR POR WHATSAPP
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
