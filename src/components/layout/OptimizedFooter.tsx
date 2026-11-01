import Link from 'next/link';
import { Bike, MapPin, Phone, Mail, Clock, AlertTriangle } from 'lucide-react';

export default function OptimizedFooter() {
  return (
    <footer className="mt-auto relative z-10">
      {/* 6px Brand Yellow Stripe */}
      <div className="h-1.5 w-full bg-brand-yellow-500" />

      {/* Main Footer Container */}
      <div className="bg-brand-blue-500 text-white pt-16 pb-12 px-4 sm:px-6 lg:px-8 border-t border-brand-blue-400">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Column 1: Identity & Physical Base */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white text-brand-blue-500 flex items-center justify-center font-bold shadow-sm">
                <Bike className="w-6 h-6 stroke-[2.5]" />
              </div>
              <span className="font-display tracking-tight text-white text-2xl uppercase">
                ENVÍOS DOSRUEDAS
              </span>
            </div>

            <p className="font-sans text-sm text-brand-blue-50/90 leading-relaxed max-w-sm">
              Logística y mensajería urbana en moto en Mar del Plata. Flota 100% propia, cadetes asegurados y base física de operaciones.
            </p>

            <div className="space-y-2 text-xs font-sans text-brand-blue-50/90 pt-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-yellow-500 shrink-0" />
                <span>Friuli 1972, Mar del Plata, Buenos Aires</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-yellow-500 shrink-0" />
                <a href="https://wa.me/5492236602699" className="hover:text-brand-yellow-500 transition-colors font-mono font-bold">
                  +54 9 223 660-2699
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-yellow-500 shrink-0" />
                <a href="mailto:matiascejas@enviosdosruedas.com" className="hover:text-brand-yellow-500 transition-colors">
                  matiascejas@enviosdosruedas.com
                </a>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <Clock className="w-4 h-4 text-brand-yellow-500 shrink-0" />
                <span>Lun a Vie 09:00 - 18:00 hs · Sáb 10:00 - 15:00 hs</span>
              </div>
            </div>
          </div>

          {/* Column 2: Servicios */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-subheading text-lg font-bold uppercase tracking-wider text-brand-yellow-500">
              Servicios Logísticos
            </h3>
            <ul className="space-y-2 text-sm font-sans">
              <li>
                <Link href="/servicios/envios-express" className="text-white/85 hover:text-white hover:underline transition-colors">
                  Envíos Express (Franja de 3 hs)
                </Link>
              </li>
              <li>
                <Link href="/servicios/envios-lowcost" className="text-white/85 hover:text-white hover:underline transition-colors">
                  Envíos LowCost (En el día)
                </Link>
              </li>
              <li>
                <Link href="/servicios/enviosflex" className="text-white/85 hover:text-white hover:underline transition-colors">
                  Mercado Envíos Flex MDQ
                </Link>
              </li>
              <li>
                <Link href="/servicios/deposito-fulfillment" className="text-white/85 hover:text-white hover:underline transition-colors">
                  Depósito & Fulfillment
                </Link>
              </li>
              <li>
                <Link href="/servicios/empresas-cuenta-corriente" className="text-white/85 hover:text-white hover:underline transition-colors">
                  Cuenta Corriente Empresas
                </Link>
              </li>
              <li>
                <Link href="/servicios/envios-contrareembolso" className="text-white/85 hover:text-white hover:underline transition-colors">
                  Cobro Contra Reembolso
                </Link>
              </li>
              <li>
                <Link href="/servicios/plan-emprendedores" className="text-white/85 hover:text-white hover:underline transition-colors">
                  Plan Emprendedores
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Empresa y Contacto */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-subheading text-lg font-bold uppercase tracking-wider text-brand-yellow-500">
              Empresa y Atención
            </h3>
            <ul className="space-y-2 text-sm font-sans">
              <li>
                <Link href="/cotizar" className="text-brand-yellow-400 font-bold hover:underline transition-colors">
                  Cotizador Unificado Online →
                </Link>
              </li>
              <li>
                <Link href="/cobertura" className="text-white/85 hover:text-white hover:underline transition-colors">
                  Cobertura y Radios Zonales
                </Link>
              </li>
              <li>
                <Link href="/nosotros/sobre-nosotros" className="text-white/85 hover:text-white hover:underline transition-colors">
                  Sobre Nosotros y Flota Propia
                </Link>
              </li>
              <li>
                <Link href="/nosotros/preguntas-frecuentes" className="text-white/85 hover:text-white hover:underline transition-colors">
                  Preguntas Frecuentes (FAQs)
                </Link>
              </li>
              <li>
                <Link href="/nosotros/nuestras-redes" className="text-white/85 hover:text-white hover:underline transition-colors">
                  Nuestras Redes Sociales
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-white/85 hover:text-white hover:underline transition-colors">
                  Contacto y Base Central
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Guías y Legales */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="font-subheading text-lg font-bold uppercase tracking-wider text-brand-yellow-500">
              Guías y Legales
            </h3>
            <ul className="space-y-2 text-sm font-sans">
              <li>
                <Link href="/guias/envios-flex-mar-del-plata" className="text-white/85 hover:text-white hover:underline transition-colors">
                  Guía Flex Mar del Plata
                </Link>
              </li>
              <li>
                <Link href="/terminos-y-condiciones" className="text-white/85 hover:text-white hover:underline transition-colors">
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link href="/politica-de-privacidad" className="text-white/85 hover:text-white hover:underline transition-colors">
                  Política de Privacidad
                </Link>
              </li>
            </ul>

            <div className="p-3 bg-brand-blue-400/40 border border-brand-blue-300/40 rounded-xl mt-4 flex items-start gap-2 text-xs text-brand-blue-50/90">
              <AlertTriangle className="w-4 h-4 text-brand-yellow-500 shrink-0 mt-0.5" />
              <span>Régimen Monotributo. Emitimos comprobantes fiscales legales. No emitimos Factura A.</span>
            </div>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="max-w-7xl mx-auto pt-8 mt-10 border-t border-brand-blue-400/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-blue-50/80 font-sans">
          <p>© 2026 Envíos DosRuedas · Mar del Plata, Argentina. Todos los derechos reservados.</p>
          <p className="font-mono text-brand-yellow-500/90">
            Cadetería Segura · Sin intermediarios
          </p>
        </div>
      </div>
    </footer>
  );
}
