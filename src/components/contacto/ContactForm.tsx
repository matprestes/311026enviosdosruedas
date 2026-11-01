'use client';

import { useState } from 'react';
import { Send, MessageSquare, CheckCircle } from 'lucide-react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    email: '',
    tipo: 'Cotización Urgente',
    mensaje: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nombre || !formData.telefono) return;
    setSubmitted(true);
  };

  return (
    <div className="p-2 rounded-2xl bg-brand-blue-50/80 border border-brand-blue-100/60 shadow-sm h-full flex flex-col justify-between">
      <div className="bg-white rounded-xl p-6 sm:p-8 border border-brand-blue-100/40 h-full flex flex-col justify-between">
        <div>
          <h2 className="font-display text-2xl uppercase tracking-tight text-brand-blue-500 mb-2">
            Dejanos tu Consulta
          </h2>
          <p className="font-sans text-xs sm:text-sm text-brand-blue-500/80 mb-6">
            Completá este formulario y nuestro equipo comercial se comunicará a la brevedad.
          </p>

          {submitted ? (
            <div className="p-6 rounded-xl bg-brand-blue-50 border border-brand-blue-100 text-center space-y-3 my-8">
              <CheckCircle className="w-10 h-10 text-brand-blue-500 mx-auto" />
              <h3 className="font-display text-xl uppercase text-brand-blue-500">
                ¡Mensaje Recibido!
              </h3>
              <p className="font-sans text-xs text-brand-blue-500/85">
                Gracias {formData.nombre}. Te responderemos al teléfono {formData.telefono} en breve.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="text-xs font-mono font-bold text-brand-blue-500 underline pt-2"
              >
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="nombre-input" className="block text-xs font-mono font-bold uppercase tracking-wider text-brand-blue-500 mb-1">
                  Nombre o Comercio *
                </label>
                <input
                  id="nombre-input"
                  type="text"
                  required
                  value={formData.nombre}
                  onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                  placeholder="Ej: Tienda MDQ / Sofía Pérez"
                  className="w-full bg-white border border-brand-blue-100 focus:border-brand-blue-500 rounded-xl px-3.5 py-2.5 text-sm text-brand-blue-500 font-sans outline-none transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="telefono-input" className="block text-xs font-mono font-bold uppercase tracking-wider text-brand-blue-500 mb-1">
                    Teléfono / WhatsApp *
                  </label>
                  <input
                    id="telefono-input"
                    type="tel"
                    required
                    value={formData.telefono}
                    onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                    placeholder="Ej: 223 555-1234"
                    className="w-full bg-white border border-brand-blue-100 focus:border-brand-blue-500 rounded-xl px-3.5 py-2.5 text-sm text-brand-blue-500 font-sans outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email-input" className="block text-xs font-mono font-bold uppercase tracking-wider text-brand-blue-500 mb-1">
                    Correo Electrónico
                  </label>
                  <input
                    id="email-input"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="nombre@ejemplo.com"
                    className="w-full bg-white border border-brand-blue-100 focus:border-brand-blue-500 rounded-xl px-3.5 py-2.5 text-sm text-brand-blue-500 font-sans outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="tipo-select" className="block text-xs font-mono font-bold uppercase tracking-wider text-brand-blue-500 mb-1">
                  Tipo de Consulta
                </label>
                <select
                  id="tipo-select"
                  value={formData.tipo}
                  onChange={(e) => setFormData({ ...formData, tipo: e.target.value })}
                  className="w-full bg-white border border-brand-blue-100 focus:border-brand-blue-500 rounded-xl px-3.5 py-2.5 text-sm text-brand-blue-500 font-sans outline-none transition-colors"
                >
                  <option value="Cotización Urgente">Cotización de Envío Inmediato</option>
                  <option value="Mercado Envíos Flex">Integración Mercado Envíos Flex</option>
                  <option value="Depósito & Fulfillment">Depósito y Almacenaje de Stock</option>
                  <option value="Cuenta Corriente">Apertura de Cuenta Corriente Empresas</option>
                  <option value="Consulta General">Otra consulta general</option>
                </select>
              </div>

              <div>
                <label htmlFor="mensaje-input" className="block text-xs font-mono font-bold uppercase tracking-wider text-brand-blue-500 mb-1">
                  Detalles o Comentarios
                </label>
                <textarea
                  id="mensaje-input"
                  rows={3}
                  value={formData.mensaje}
                  onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                  placeholder="Contanos qué necesitás trasladar, direcciones aproximadas u horarios..."
                  className="w-full bg-white border border-brand-blue-100 focus:border-brand-blue-500 rounded-xl px-3.5 py-2.5 text-sm text-brand-blue-500 font-sans outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-brand-yellow-500 hover:bg-brand-yellow-400 active:bg-brand-yellow-600 text-brand-blue-500 font-subheading text-lg font-bold uppercase tracking-wider py-3.5 rounded-full shadow-accent-sm transition-transform hover:scale-102 flex items-center justify-center gap-2 mt-2"
              >
                <Send className="w-4 h-4 stroke-[2.5]" />
                ENVIAR MENSAJE
              </button>
            </form>
          )}
        </div>

        <div className="pt-6 border-t border-brand-blue-50 mt-6">
          <a
            href="https://wa.me/5492236602699?text=Hola!%20Vengo%20de%20la%20web%20y%20quiero%20hacer%20una%20consulta"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-brand-blue-500 hover:bg-brand-blue-400 text-white font-subheading text-base font-bold uppercase tracking-wider py-3 rounded-xl flex items-center justify-center gap-2 transition-colors"
          >
            <MessageSquare className="w-4 h-4 text-brand-yellow-500" />
            O CONSULTANOS DIRECTO POR WHATSAPP AL TOQUE
          </a>
        </div>
      </div>
    </div>
  );
}
