import type { Metadata } from 'next';
import Image from 'next/image';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Phone } from 'lucide-react';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.enviosdosruedas.com';

export const metadata: Metadata = {
  title: 'Preguntas Frecuentes (FAQs) | Envíos DosRuedas',
  description: 'Respuestas a dudas sobre tarifas, peso máximo, recargos por lluvia, tiempos de espera y medios de pago en Envíos DosRuedas Mar del Plata.',
  alternates: { canonical: `${baseUrl}/nosotros/preguntas-frecuentes` },
};

const FAQS = [
  {
    q: '¿Qué peso y tamaño máximo puede tener un paquete estándar?',
    a: 'El paquete estándar contempla un peso de hasta 5 kg y un tamaño de hasta 40 × 40 × 30 cm (las dimensiones usuales de una caja de zapatos grande o una mochila de mensajería). Si tu bulto supera estas medidas o peso, se coordina como bulto extra o sobredimensionado con un adicional a partir de $1.800.',
  },
  {
    q: '¿Qué pasa si llueve el día de la entrega?',
    a: 'Por estrictas razones de seguridad vial de nuestros cadetes en asfalto mojado, los días de lluvia rige un recargo del 30% en servicios generales (y hasta el 50% en despachos inmediatos Express o LowCost). Asimismo, las ventanas de entrega pueden extenderse prudentemente para priorizar la integridad física de los conductores y el cuidado de los paquetes.',
  },
  {
    q: '¿Cuánto tiempo espera el cadete en la puerta?',
    a: 'Los primeros 10 minutos de espera en el punto de retiro o entrega son completamente sin cargo. A partir del minuto 11 en adelante, se computan bloques de espera de 10 minutos a razón de $2.200 por bloque adicional.',
  },
  {
    q: '¿Emiten Factura A?',
    a: 'No emitimos Factura A. Envíos DosRuedas opera bajo el Régimen Simplificado para Pequeños Contribuyentes (Monotributo). Emitimos comprobantes fiscales oficiales válidos tipo C para consumidor final o justificación de gastos comerciales.',
  },
  {
    q: '¿Cuáles son los medios de pago aceptados?',
    a: 'Aceptamos transferencias bancarias inmediatas a través de Alias o CBU, pagos mediante Mercado Pago (código QR o transferencia) y dinero en efectivo en mano al momento de la entrega o retiro.',
  },
  {
    q: '¿Cuál es la diferencia entre el servicio Express y el LowCost?',
    a: 'El servicio Express opera con una franja horaria acotada de 3 horas a elección del cliente (solicitada con al menos 2 horas de anticipación y corte a las 15:00 hs). El servicio LowCost es nuestra opción más económica por ruteo agrupado inteligente: el corte es a las 13:00 hs y los repartos se realizan durante la tarde hasta las 19:00 hs.',
  },
  {
    q: '¿Llegan a Batán, Sierra de los Padres o Chapadmalal?',
    a: 'Sí, cubrimos toda la periferia de Mar del Plata. Al encontrarse fuera del radio urbano regular de 10 km, estos trayectos se cotizan a razón de $1.000 por kilómetro lineal de ruta o tarifa convenida de antemano.',
  },
];

export default function FaqsPage() {
  return (
    <main className="min-h-dvh bg-white text-brand-blue-500 pb-20">
      <section className="bg-brand-blue-500 text-white pt-16 pb-14 px-4 sm:px-6 lg:px-8 border-b border-brand-blue-400 relative overflow-hidden">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 text-center md:text-left space-y-4">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-yellow-500 bg-brand-blue-400/50 px-3 py-1 rounded-full border border-brand-blue-300/40 inline-block">
              Respuestas Claras
            </span>
            <h1 className="font-display text-4xl sm:text-6xl uppercase tracking-tight text-white leading-none">
              PREGUNTAS FRECUENTES
            </h1>
            <p className="font-sans text-base sm:text-lg text-brand-blue-50/90 leading-relaxed">
              Todo lo que necesitás saber sobre condiciones operativas, pesos, lluvia y formas de pago antes de coordinar tu envío en Mar del Plata.
            </p>
          </div>

          <div className="md:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm h-52 sm:h-64 rounded-2xl overflow-hidden shadow-xl border-2 border-brand-blue-400 bg-brand-blue-400/40">
              <Image
                src="/elementos/hero_faq.webp"
                alt="Preguntas frecuentes y atención Envíos DosRuedas"
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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-12">
        <Accordion type="single" collapsible className="space-y-4">
          {FAQS.map((faq, idx) => (
            <AccordionItem
              key={idx}
              value={`faq-${idx}`}
              className="p-1.5 rounded-2xl bg-brand-blue-50/80 border border-brand-blue-100/60 shadow-xs"
            >
              <div className="bg-white rounded-xl px-6 py-2 border border-brand-blue-100/40">
                <AccordionTrigger className="font-subheading text-lg sm:text-xl font-bold uppercase tracking-wider text-left text-brand-blue-500 hover:text-brand-blue-400 py-4">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="font-sans text-sm text-brand-blue-500/85 leading-relaxed pt-2 pb-5 border-t border-brand-blue-50">
                  {faq.a}
                </AccordionContent>
              </div>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Still have questions with dudas_transparent image */}
        <div className="p-2 rounded-2xl bg-brand-blue-500 text-white shadow-md border border-brand-blue-400">
          <div className="p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16 shrink-0 drop-shadow-md">
                <Image
                  src="/elementos/dudas_transparent.webp"
                  alt="Dudas o consultas Envíos DosRuedas"
                  fill
                  sizes="64px"
                  loading="lazy"
                  decoding="async"
                  className="object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h3 className="font-display text-2xl uppercase tracking-tight text-white">
                  ¿Tenés una duda que no figura en esta lista?
                </h3>
                <p className="font-sans text-sm text-brand-blue-50/90 mt-1">
                  Escribinos directo a WhatsApp y un operador te responde al toque.
                </p>
              </div>
            </div>

            <a
              href="https://wa.me/5492236602699?text=Hola!%20Tengo%20una%20consulta%20sobre%20los%20env%C3%ADos%20en%20Mar%20del%20Plata"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-yellow-500 hover:bg-brand-yellow-400 text-brand-blue-500 font-subheading text-base font-bold uppercase tracking-wider px-6 py-3.5 rounded-full shadow-accent-sm transition-transform hover:scale-105 shrink-0 flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-brand-blue-500" />
              CONSULTAR POR WHATSAPP
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
