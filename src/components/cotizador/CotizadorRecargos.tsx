import { CloudRain, Clock, PackageCheck, MapPin, AlertCircle } from 'lucide-react';

const RECARGOS = [
  {
    icon: CloudRain,
    title: 'Recargo por Lluvia',
    desc: '30% en servicios generales (hasta 50% en despachos inmediatos). Por seguridad vial de nuestros cadetes en asfalto mojado.',
  },
  {
    icon: Clock,
    title: 'Tiempo de Espera en Puerta',
    desc: 'Primeros 10 minutos sin cargo. A partir del minuto 11 se abonan $2.200 por cada bloque de 10 minutos adicionales.',
  },
  {
    icon: PackageCheck,
    title: 'Bulto Extra o Sobredimensionado',
    desc: 'La tarifa incluye hasta 5 kg y 40 × 40 × 30 cm. Paquetes con mayor volumen o peso extra se cotizan desde $1.800 de adicional.',
  },
  {
    icon: MapPin,
    title: 'Paradas Intermedias',
    desc: 'Paradas extras en el mismo trayecto urbano (hasta 2 km de desvío) adicionan un 50% del tramo correspondiente.',
  },
];

export default function CotizadorRecargos() {
  return (
    <div className="p-2 rounded-2xl bg-brand-blue-50/80 border border-brand-blue-100/60 mt-12">
      <div className="bg-white rounded-xl p-6 sm:p-8">
        <div className="flex items-center gap-2 mb-6">
          <AlertCircle className="w-5 h-5 text-brand-blue-500" />
          <h3 className="font-display text-2xl uppercase tracking-tight text-brand-blue-500">
            Condiciones y Recargos Operativos
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {RECARGOS.map((rec) => {
            const Icon = rec.icon;
            return (
              <div key={rec.title} className="p-4 rounded-xl bg-brand-blue-50/50 border border-brand-blue-100/50 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-brand-blue-100 text-brand-blue-500 flex items-center justify-center">
                  <Icon className="w-4 h-4" />
                </div>
                <h4 className="font-subheading text-base font-bold uppercase tracking-wider text-brand-blue-500">
                  {rec.title}
                </h4>
                <p className="font-sans text-xs text-brand-blue-500/80 leading-relaxed">
                  {rec.desc}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-6 pt-4 border-t border-brand-blue-50 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-sans text-brand-blue-500/70">
          <p>
            * Tarifas sujetas a vigencia 2026. Los tiempos de traslado pueden variar en días de lluvia o alta congestión vial.
          </p>
          <span className="font-bold text-brand-blue-500">
            No emitimos Factura A. Comprobantes fiscales Monotributo.
          </span>
        </div>
      </div>
    </div>
  );
}
