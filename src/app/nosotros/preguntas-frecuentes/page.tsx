import type { Metadata } from 'next';
import FaqHero from '@/components/nosotros/preguntas-frecuentes/FaqHero';
import FaqCategories from '@/components/nosotros/preguntas-frecuentes/Faq-categories';
import FaqCta from '@/components/nosotros/preguntas-frecuentes/FaqCta';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.enviosdosruedas.com';

export const metadata: Metadata = {
  title: 'Preguntas Frecuentes (FAQs) | Envíos DosRuedas',
  description: 'Respuestas a dudas sobre tarifas, peso máximo, recargos por lluvia, tiempos de espera y medios de pago en Envíos DosRuedas Mar del Plata.',
  alternates: { canonical: `${baseUrl}/nosotros/preguntas-frecuentes` },
};

export default function FaqsPage() {
  return (
    <main className="min-h-dvh bg-white text-brand-blue-500">
      <FaqHero />
      <FaqCategories />
      <FaqCta />
    </main>
  );
}

