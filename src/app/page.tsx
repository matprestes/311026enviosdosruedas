import type { Metadata } from 'next';
import HeroAnimado from '@/components/home/HeroAnimado';
import SegmentosHome from '@/components/home/SegmentosHome';
import ServicesOverview from '@/components/home/ServicesOverview';
import EmprendedoresHome from '@/components/home/EmprendedoresHome';
import SocialProofSection from '@/components/home/SocialProofSection';
import CtaSection from '@/components/home/CtaSection';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.enviosdosruedas.com';

export const metadata: Metadata = {
  title: 'Mensajería en moto en Mar del Plata | Envíos DosRuedas',
  description: 'Mensajería en moto y logística e-commerce en Mar del Plata. Envíos Express en franja de 3 hs, Mercado Envíos Flex en el día y reparto LowCost. Cotizá online.',
  alternates: { canonical: `${baseUrl}/` },
  openGraph: {
    title: 'Mensajería en moto en Mar del Plata | Envíos DosRuedas',
    description: 'La solución logística y última milla de mayor confianza en Mar del Plata. Envíos Express, MercadoLibre Flex, ruteo eficiente y cadetería inteligente.',
    url: `${baseUrl}/`,
    type: 'website',
    locale: 'es_AR',
    images: [`${baseUrl}/og-image.jpg`],
  },
};

export default function HomePage() {
  return (
    <div id="home-page-container" className="bg-white text-brand-blue-500 overflow-x-hidden">
      <HeroAnimado />
      <SegmentosHome />
      <ServicesOverview />
      <EmprendedoresHome />
      <SocialProofSection />
      <CtaSection />
    </div>
  );
}
