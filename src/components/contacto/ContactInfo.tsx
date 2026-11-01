'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, ExternalLink, Copy, Check, Shield } from 'lucide-react';

export default function ContactInfo() {
  const [copied, setCopied] = useState(false);

  const copyPhoneNumber = () => {
    navigator.clipboard.writeText('+5492236602699');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6 h-full flex flex-col justify-between">
      {/* Bento Grid Item 1: Physical Base */}
      <div className="p-2 rounded-2xl bg-brand-blue-50/80 border border-brand-blue-100/60 shadow-sm">
        <div className="bg-white rounded-xl p-6 sm:p-7 border border-brand-blue-100/40">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-brand-blue-50 text-brand-blue-500 flex items-center justify-center">
                <MapPin className="w-4 h-4 text-brand-yellow-500 fill-brand-yellow-500" />
              </span>
              <span className="font-mono text-xs font-bold text-brand-blue-400 uppercase">
                Base Operativa Fija
              </span>
            </div>
            <a
              href="https://maps.google.com/?q=Friuli+1972,+Mar+del+Plata"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono font-bold text-brand-blue-500 hover:text-brand-blue-400 flex items-center gap-1"
            >
              Abrir Mapa <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <h3 className="font-display text-2xl uppercase tracking-tight text-brand-blue-500 mb-1">
            Friuli 1972, Mar del Plata
          </h3>
          <p className="font-sans text-xs sm:text-sm text-brand-blue-500/80 leading-relaxed mb-4">
            Base física propia con depósito y recepción de paquetes. Punto de DropOFF para bonificación del 20% en tus envíos.
          </p>

          <div className="p-3 rounded-lg bg-brand-blue-50/70 border border-brand-blue-100/60 flex items-center justify-between text-xs font-mono text-brand-blue-500">
            <span>Coordenadas GPS:</span>
            <span className="font-bold">38°00&apos;19.8&quot;S 57°32&apos;33.4&quot;W</span>
          </div>
        </div>
      </div>

      {/* Bento Grid Item 2 & 3: Phone & Schedules */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        
        {/* Phone / WhatsApp */}
        <div className="p-2 rounded-2xl bg-brand-blue-50/80 border border-brand-blue-100/60 shadow-sm">
          <div className="bg-white rounded-xl p-6 border border-brand-blue-100/40 h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Phone className="w-4 h-4 text-brand-blue-500" />
                <span className="font-mono text-xs font-bold text-brand-blue-400 uppercase">
                  Teléfono & WhatsApp
                </span>
              </div>
              <p className="font-mono text-lg font-extrabold text-brand-blue-500 mb-1">
                +54 9 223 660-2699
              </p>
              <p className="font-sans text-xs text-brand-blue-500/75">
                Llamadas directas o mensajes para cotización en asfalto.
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-brand-blue-50 flex items-center gap-2">
              <button
                type="button"
                onClick={copyPhoneNumber}
                className="flex-1 py-2 px-3 rounded-lg border border-brand-blue-200 text-xs font-mono font-bold text-brand-blue-500 hover:bg-brand-blue-50 transition-colors flex items-center justify-center gap-1.5"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
                {copied ? 'Copiado!' : 'Copiar número'}
              </button>
            </div>
          </div>
        </div>

        {/* Schedules */}
        <div className="p-2 rounded-2xl bg-brand-blue-50/80 border border-brand-blue-100/60 shadow-sm">
          <div className="bg-white rounded-xl p-6 border border-brand-blue-100/40 h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-4 h-4 text-brand-blue-500" />
                <span className="font-mono text-xs font-bold text-brand-blue-400 uppercase">
                  Horarios de Atención
                </span>
              </div>
              <p className="font-sans text-xs font-bold text-brand-blue-500 mb-1">
                Lunes a Viernes: 09:00 a 18:00 hs
              </p>
              <p className="font-sans text-xs font-bold text-brand-blue-500 mb-2">
                Sábados: 10:00 a 15:00 hs
              </p>
              <p className="font-sans text-[11px] text-brand-blue-500/75">
                Corte LowCost: 13:00 hs · Corte Express: 15:00 hs
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-brand-blue-50">
              <span className="inline-flex items-center gap-1 font-mono text-[11px] text-brand-blue-400 font-bold">
                <Shield className="w-3.5 h-3.5" /> Flota Asegurada
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* Bento Grid Item 4: Email & Fiscal Notice */}
      <div className="p-2 rounded-2xl bg-brand-blue-50/80 border border-brand-blue-100/60 shadow-sm">
        <div className="bg-white rounded-xl p-5 border border-brand-blue-100/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-blue-50 text-brand-blue-500 flex items-center justify-center shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <span className="font-mono text-xs text-brand-blue-400 uppercase font-bold block">
                Correo Institucional
              </span>
              <a href="mailto:matiascejas@enviosdosruedas.com" className="font-sans text-sm font-bold text-brand-blue-500 hover:underline">
                matiascejas@enviosdosruedas.com
              </a>
            </div>
          </div>

          <div className="text-right text-xs font-sans text-brand-blue-500/80">
            <span className="font-bold text-brand-blue-500 block">Régimen Monotributo</span>
            <span>No emitimos Factura A.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
