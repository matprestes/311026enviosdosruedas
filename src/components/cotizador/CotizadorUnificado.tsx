'use client';

import { useState } from 'react';
import { calculateExpressPrice, calculateLowCostPrice } from '@/lib/pricing';
import { MapPin, Navigation, Phone, Clock, CloudRain, Package, CheckCircle2 } from 'lucide-react';

const MDQ_PRESETS = [
  { name: 'Base Central (Friuli 1972)', address: 'Friuli 1972, Mar del Plata', kmOffset: 0 },
  { name: 'Microcentro (Plaza San Martín)', address: 'San Martín 2400, Mar del Plata', kmOffset: 2.8 },
  { name: 'Zona Güemes (Comercial)', address: 'Güemes 3100, Mar del Plata', kmOffset: 3.5 },
  { name: 'Puerto y Playa Grande', address: 'Av. Juan B. Justo y Martínez de Hoz', kmOffset: 5.2 },
  { name: 'Parque Luro / Constitución', address: 'Av. Constitución 5000, Mar del Plata', kmOffset: 6.8 },
  { name: 'Faro / Punta Mogotes', address: 'Av. de los Trabajadores 4500', kmOffset: 8.5 },
  { name: 'Batán (Periferia)', address: 'Ruta 88 Km 9, Batán', kmOffset: 14.2 },
];

export default function CotizadorUnificado() {
  const [origen, setOrigen] = useState('Friuli 1972, Mar del Plata');
  const [destino, setDestino] = useState('San Martín 2400, Mar del Plata');
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [paquete, setPaquete] = useState('');
  const [distanceKm, setDistanceKm] = useState<number>(3.8);
  const [esLluvia, setEsLluvia] = useState(false);
  const [bultoExtra, setBultoExtra] = useState(false);

  // Price calculation
  const rawExpress = calculateExpressPrice(distanceKm);
  const rawLowCost = calculateLowCostPrice(distanceKm);

  // Apply modifiers
  const expressFinal = typeof rawExpress === 'number'
    ? Math.round(rawExpress * (esLluvia ? 1.3 : 1) + (bultoExtra ? 1800 : 0))
    : 'consultar';

  const lowCostFinal = typeof rawLowCost === 'number'
    ? Math.round(rawLowCost * (esLluvia ? 1.3 : 1) + (bultoExtra ? 1800 : 0))
    : 'consultar';

  // Format WhatsApp message
  const getWhatsAppUrl = (tipo: 'EXPRESS' | 'LOWCOST', precio: number | 'consultar') => {
    const precioStr = precio === 'consultar' ? 'A cotizar por km de ruta' : `$${precio.toLocaleString('es-AR')}`;
    const text = `Hola Envíos DosRuedas! Quiero confirmar un pedido:%0A%0A` +
      `🛵 *Servicio:* ${tipo === 'EXPRESS' ? 'Express (Franja 3 hs)' : 'LowCost (Reparto en el día)'}%0A` +
      `📍 *Origen:* ${encodeURIComponent(origen)}%0A` +
      `🏁 *Destino:* ${encodeURIComponent(destino)}%0A` +
      `📏 *Distancia:* ${distanceKm} km%0A` +
      `💰 *Tarifa estimada:* ${precioStr}%0A` +
      (esLluvia ? `🌧️ *Recargo por lluvia aplicado (30%)*%0A` : '') +
      (bultoExtra ? `📦 *Bulto extra incluido (+$1.800)*%0A` : '') +
      (nombre ? `👤 *Cliente:* ${encodeURIComponent(nombre)}%0A` : '') +
      (telefono ? `📞 *Tel:* ${encodeURIComponent(telefono)}%0A` : '') +
      (paquete ? `📝 *Detalle:* ${encodeURIComponent(paquete)}%0A` : '') +
      `%0A¿Podemos coordinar para hoy?`;

    return `https://wa.me/5492236602699?text=${text}`;
  };

  return (
    <div className="space-y-10">
      {/* Input Form Card */}
      <div className="p-2 rounded-2xl bg-brand-blue-50/80 border border-brand-blue-100/60 shadow-sm">
        <div className="bg-white rounded-xl p-6 sm:p-8 border border-brand-blue-100/40">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-brand-blue-50">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-brand-blue-500">
                1. Datos del Recorrido en Mar del Plata
              </h2>
              <p className="font-sans text-sm text-brand-blue-500/80">
                Ingresá las direcciones de retiro y entrega para estimar el kilometraje vial.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold text-brand-blue-400">Atajos rápidos:</span>
              <button
                type="button"
                onClick={() => {
                  setOrigen('Friuli 1972, Mar del Plata');
                  setDestino('Güemes 3100, Mar del Plata');
                  setDistanceKm(3.5);
                }}
                className="text-xs font-mono font-bold px-2.5 py-1 bg-brand-blue-50 text-brand-blue-500 hover:bg-brand-blue-100 rounded-lg transition-colors"
              >
                Base → Güemes
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Origen */}
            <div className="space-y-2">
              <label htmlFor="origen-input" className="flex items-center gap-2 font-subheading text-base font-bold uppercase tracking-wider text-brand-blue-500">
                <MapPin className="w-4 h-4 text-brand-blue-500" />
                Punto de Retiro (Origen)
              </label>
              <input
                id="origen-input"
                type="text"
                value={origen}
                onChange={(e) => setOrigen(e.target.value)}
                placeholder="Ej: Friuli 1972 o San Martín 2500"
                className="w-full bg-white border border-brand-blue-100 focus:border-brand-blue-500 focus:ring-1 focus:ring-brand-blue-500 rounded-xl px-4 py-3 text-brand-blue-500 font-sans outline-none transition-colors"
              />
              <div className="flex flex-wrap gap-1.5 pt-1">
                <span className="text-[11px] font-sans text-brand-blue-400">Sugerencias:</span>
                {MDQ_PRESETS.slice(0, 3).map((p) => (
                  <button
                    key={p.name}
                    type="button"
                    onClick={() => setOrigen(p.address)}
                    className="text-[11px] font-mono text-brand-blue-500 hover:underline"
                  >
                    {p.name.split(' (')[0]} ·
                  </button>
                ))}
              </div>
            </div>

            {/* Destino */}
            <div className="space-y-2">
              <label htmlFor="destino-input" className="flex items-center gap-2 font-subheading text-base font-bold uppercase tracking-wider text-brand-blue-500">
                <Navigation className="w-4 h-4 text-brand-yellow-500 fill-brand-yellow-500" />
                Punto de Entrega (Destino)
              </label>
              <input
                id="destino-input"
                type="text"
                value={destino}
                onChange={(e) => setDestino(e.target.value)}
                placeholder="Ej: Güemes 3100 o Av. Constitución 5000"
                className="w-full bg-white border border-brand-blue-100 focus:border-brand-blue-500 focus:ring-1 focus:ring-brand-blue-500 rounded-xl px-4 py-3 text-brand-blue-500 font-sans outline-none transition-colors"
              />
              <div className="flex flex-wrap gap-1.5 pt-1">
                <span className="text-[11px] font-sans text-brand-blue-400">Sugerencias:</span>
                {MDQ_PRESETS.slice(2, 6).map((p) => (
                  <button
                    key={p.name}
                    type="button"
                    onClick={() => {
                      setDestino(p.address);
                      setDistanceKm(p.kmOffset);
                    }}
                    className="text-[11px] font-mono text-brand-blue-500 hover:underline"
                  >
                    {p.name.split(' (')[0]} ·
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Distance Slider / Selector */}
          <div className="mt-8 p-4 rounded-xl bg-brand-blue-50/60 border border-brand-blue-100/60">
            <div className="flex items-center justify-between mb-3">
              <label htmlFor="distance-slider" className="font-subheading text-base font-bold uppercase tracking-wider text-brand-blue-500">
                Distancia Vial Estimada en Mar del Plata
              </label>
              <span className="font-mono text-xl font-extrabold text-brand-blue-500 bg-white px-3 py-1 rounded-lg border border-brand-blue-200">
                {distanceKm.toFixed(1)} km
              </span>
            </div>
            <input
              id="distance-slider"
              type="range"
              min="0.5"
              max="25"
              step="0.5"
              value={distanceKm}
              aria-label="Distancia vial estimada en kilómetros"
              onChange={(e) => setDistanceKm(parseFloat(e.target.value))}
              className="w-full accent-brand-blue-500 cursor-pointer"
            />
            <div className="flex justify-between text-[11px] font-mono text-brand-blue-400 mt-2">
              <span>0 a 3 km (Base)</span>
              <span>5 km</span>
              <span>7 km</span>
              <span>10 km (Límite Urbano)</span>
              <span>15 km (Periferia)</span>
              <span>20+ km (Especial)</span>
            </div>
          </div>

          {/* Optional Modifiers & Client Details */}
          <div className="mt-6 pt-6 border-t border-brand-blue-50 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label htmlFor="client-name" className="block text-xs font-mono font-bold text-brand-blue-500 uppercase mb-1">
                Tu Nombre o Comercio
              </label>
              <input
                id="client-name"
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Ej: Tienda MDQ"
                className="w-full text-xs p-2.5 rounded-lg border border-brand-blue-100 text-brand-blue-500 outline-none focus:border-brand-blue-500"
              />
            </div>

            <div>
              <label htmlFor="client-phone" className="block text-xs font-mono font-bold text-brand-blue-500 uppercase mb-1">
                Teléfono de Contacto
              </label>
              <input
                id="client-phone"
                type="text"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
                placeholder="Ej: 223 123-4567"
                className="w-full text-xs p-2.5 rounded-lg border border-brand-blue-100 text-brand-blue-500 outline-none focus:border-brand-blue-500"
              />
            </div>

            <div className="md:col-span-2">
              <label htmlFor="client-detail" className="block text-xs font-mono font-bold text-brand-blue-500 uppercase mb-1">
                Detalle del Paquete / Observaciones
              </label>
              <input
                id="client-detail"
                type="text"
                value={paquete}
                onChange={(e) => setPaquete(e.target.value)}
                placeholder="Ej: Sobre con documentos, repuesto de moto, indumentaria..."
                className="w-full text-xs p-2.5 rounded-lg border border-brand-blue-100 text-brand-blue-500 outline-none focus:border-brand-blue-500"
              />
            </div>

            <div className="flex items-center gap-2 pt-5">
              <input
                id="lluvia-check"
                type="checkbox"
                checked={esLluvia}
                onChange={(e) => setEsLluvia(e.target.checked)}
                className="w-4 h-4 rounded text-brand-blue-500 accent-brand-blue-500 cursor-pointer"
              />
              <label htmlFor="lluvia-check" className="text-xs font-sans font-semibold text-brand-blue-500 cursor-pointer flex items-center gap-1">
                <CloudRain className="w-3.5 h-3.5 text-brand-blue-400" />
                Día de lluvia (+30%)
              </label>
            </div>

            <div className="flex items-center gap-2 pt-5">
              <input
                id="bulto-check"
                type="checkbox"
                checked={bultoExtra}
                onChange={(e) => setBultoExtra(e.target.checked)}
                className="w-4 h-4 rounded text-brand-blue-500 accent-brand-blue-500 cursor-pointer"
              />
              <label htmlFor="bulto-check" className="text-xs font-sans font-semibold text-brand-blue-500 cursor-pointer flex items-center gap-1">
                <Package className="w-3.5 h-3.5 text-brand-blue-400" />
                Bulto extra / +5kg (+$1.800)
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Comparison Results Cards */}
      <div>
        <div className="mb-4">
          <h2 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-brand-blue-500">
            2. Comparativa de Tarifas y Confirmación Inmediata
          </h2>
          <p className="font-sans text-sm text-brand-blue-500/80">
            Seleccioná la modalidad que necesitás y confirmá tu solicitud directamente por WhatsApp con todos los datos precargados.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Card Express */}
          <div className="p-2 rounded-2xl bg-brand-blue-50/80 border border-brand-blue-100/70 shadow-sm">
            <div className="bg-white rounded-xl p-6 sm:p-8 h-full flex flex-col justify-between border border-brand-blue-100/40">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-bold px-3 py-1 bg-brand-blue-50 text-brand-blue-500 rounded-full uppercase">
                    Servicio Prioritario
                  </span>
                  <span className="font-mono text-xs text-brand-blue-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    Corte: 15:00 hs
                  </span>
                </div>

                <h3 className="font-display text-3xl uppercase tracking-tight text-brand-blue-500 mb-1">
                  ENVÍO EXPRESS
                </h3>
                <p className="font-sans text-sm text-brand-blue-400 font-semibold mb-6">
                  Entrega en franja de 3 hs a coordinar (con 2 hs de anticipación)
                </p>

                <div className="p-5 rounded-xl bg-brand-blue-50/60 border border-brand-blue-100 mb-6 flex items-baseline justify-between">
                  <div>
                    <span className="font-sans text-xs text-brand-blue-400 block font-medium">
                      Tarifa Calculada ({distanceKm} km)
                    </span>
                    <span className="font-mono text-4xl sm:text-5xl font-extrabold text-brand-blue-500 tracking-tight">
                      {expressFinal === 'consultar' ? 'A Consultar' : `$${expressFinal.toLocaleString('es-AR')}`}
                    </span>
                  </div>
                  <span className="font-mono text-xs text-brand-blue-400 text-right">
                    {expressFinal === 'consultar' ? 'Destino periférico' : 'Final en asfalto'}
                  </span>
                </div>

                <ul className="space-y-2.5 mb-8 text-xs sm:text-sm font-sans text-brand-blue-500/85">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue-500 shrink-0" />
                    <span>Cadete en moto asignado de inmediato.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue-500 shrink-0" />
                    <span>Ventana de entrega reducida de 3 horas.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue-500 shrink-0" />
                    <span>Tolerancia de 10 min en puerta sin cargo.</span>
                  </li>
                </ul>
              </div>

              <div>
                <a
                  href={getWhatsAppUrl('EXPRESS', expressFinal)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 rounded-full bg-brand-blue-500 hover:bg-brand-blue-400 text-white font-subheading text-lg font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-transform hover:scale-102"
                >
                  <Phone className="w-4 h-4 text-brand-yellow-500" />
                  CONFIRMAR EXPRESS POR WHATSAPP
                </a>
              </div>
            </div>
          </div>

          {/* Card LowCost */}
          <div className="p-2 rounded-2xl bg-brand-blue-500 border-2 border-brand-yellow-500 shadow-md">
            <div className="bg-white rounded-xl p-6 sm:p-8 h-full flex flex-col justify-between border border-brand-yellow-500/30">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-bold px-3 py-1 bg-brand-yellow-500 text-brand-blue-500 rounded-full uppercase">
                    Tarifa Más Económica
                  </span>
                  <span className="font-mono text-xs text-brand-blue-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    Corte: 13:00 hs
                  </span>
                </div>

                <h3 className="font-display text-3xl uppercase tracking-tight text-brand-blue-500 mb-1">
                  ENVÍO LOWCOST
                </h3>
                <p className="font-sans text-sm text-brand-blue-400 font-semibold mb-6">
                  Reparto programado en el día (entrega hasta las 19:00 hs)
                </p>

                <div className="p-5 rounded-xl bg-brand-yellow-50/70 border border-brand-yellow-200 mb-6 flex items-baseline justify-between">
                  <div>
                    <span className="font-sans text-xs text-brand-blue-400 block font-medium">
                      Tarifa Calculada ({distanceKm} km)
                    </span>
                    <span className="font-mono text-4xl sm:text-5xl font-extrabold text-brand-blue-500 tracking-tight">
                      {lowCostFinal === 'consultar' ? 'A Consultar' : `$${lowCostFinal.toLocaleString('es-AR')}`}
                    </span>
                  </div>
                  <span className="font-mono text-xs text-brand-blue-400 text-right">
                    {lowCostFinal === 'consultar' ? 'Destino periférico' : 'Ruteo agrupado'}
                  </span>
                </div>

                <ul className="space-y-2.5 mb-8 text-xs sm:text-sm font-sans text-brand-blue-500/85">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue-500 shrink-0" />
                    <span>El precio por kilómetro más bajo de la ciudad.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue-500 shrink-0" />
                    <span>Recepción de pedidos hasta las 13:00 hs.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue-500 shrink-0" />
                    <span>Entregas de 14:00 a 19:00 hs en la misma jornada.</span>
                  </li>
                </ul>
              </div>

              <div>
                <a
                  href={getWhatsAppUrl('LOWCOST', lowCostFinal)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 rounded-full bg-brand-yellow-500 hover:bg-brand-yellow-400 active:bg-brand-yellow-600 text-brand-blue-500 font-subheading text-lg font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-accent-sm transition-transform hover:scale-102"
                >
                  <Phone className="w-4 h-4 text-brand-blue-500" />
                  CONFIRMAR LOWCOST POR WHATSAPP
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
