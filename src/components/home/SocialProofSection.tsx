import React from 'react';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Review {
  id: string;
  author: string;
  timeAgo: string;
  quoteHighlight: string;
  text: string;
  // color variant: 'blue' | 'white' | 'yellow'
  variant: 'blue' | 'white' | 'yellow';
}

// 6 reviews selected from source data, cleaned of emojis, no ownerResponse
const REVIEWS: Review[] = [
  {
    id: 'karen-herrera',
    author: 'Karen Herrera',
    timeAgo: 'Hace 13 semanas',
    quoteHighlight: 'RESOLVIERON MI PROBLEMA CON LA MEJOR PREDISPOSICIÓN',
    text: 'Excelente el servicio, rápidos, muy atentos, resolvieron mi problema con la mejor predisposición, los recomiendo ampliamente.',
    variant: 'blue',
  },
  {
    id: 'agustin-torres',
    author: 'Agustin Torres',
    timeAgo: 'Hace 48 semanas',
    quoteHighlight: 'IMPECABLE PARA LLEVAR PEDIDOS A NUESTROS CLIENTES',
    text: 'Lo usé varias veces para llevar pedidos a nuestros clientes. Impecable el servicio. Además hacen depósitos en cajeros sin problemas. Unos genios.',
    variant: 'white',
  },
  {
    id: 'alexis-bogarin',
    author: 'Alexis Bogarin',
    timeAgo: 'Hace 37 semanas',
    quoteHighlight: 'EL MEJOR SERVICIO PREMIUM DE LA ZONA',
    text: 'El mejor servicio premium de la zona en Mar del Plata. 100% recomendable por puntualidad y trato.',
    variant: 'yellow',
  },
  {
    id: 'lorenzo-elizagoyen',
    author: 'Lorenzo Elizagoyen',
    timeAgo: 'Hace 32 semanas',
    quoteHighlight: 'ATENCIÓN DE PRIMERA, RÁPIDO, CONFIABLE Y SEGURO',
    text: 'Excelente servicio, atención de primera, rápido, confiable y seguro. Recomendado 100% para envíos puntuales.',
    variant: 'white',
  },
  {
    id: 'emiliano-garri',
    author: 'Emiliano Garri',
    timeAgo: 'Hace 48 semanas',
    quoteHighlight: '¡LA MEJOR MENSAJERÍA DE MDP!',
    text: 'La mejor mensajería de Mar del Plata. Cumplen siempre con lo prometido y no te dejan tirado.',
    variant: 'blue',
  },
  {
    id: 'nahuari',
    author: 'NahuAri',
    timeAgo: 'Hace 48 semanas',
    quoteHighlight: '10 DE 10, RESPONSABLES POR SOBRE TODAS LAS COSAS',
    text: '10 de 10 muy buenos en lo que hacen, responsables por sobre todas las cosas, super recomendable para tu negocio.',
    variant: 'white',
  },
];

function ReviewCard({ review }: { review: Review }) {
  const isFeatured = review.variant === 'blue';

  return (
    <article
      className={cn(
        'group w-full rounded-2xl flex flex-col justify-between p-7 lg:p-8 min-h-80 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_-12px_rgba(9,80,246,0.12)] border relative overflow-hidden',
        isFeatured
          ? 'bg-brand-blue-500 text-white border-brand-blue-400 shadow-md'
          : 'bg-white text-slate-900 border-slate-200/80 shadow-xs'
      )}
    >
      {/* Top subtle highlight */}
      <div
        className={cn(
          'absolute top-0 inset-x-0 h-1 transition-opacity duration-300 opacity-0 group-hover:opacity-100',
          isFeatured ? 'bg-brand-yellow-400' : 'bg-brand-blue-500'
        )}
        aria-hidden="true"
      />

      <div>
        {/* Top Row: Rating & Date */}
        <div className="flex items-center justify-between mb-5">
          <div
            role="img"
            aria-label="Calificación: 5 de 5 estrellas"
            className={cn('flex gap-1 text-base', isFeatured ? 'text-brand-yellow-400' : 'text-amber-400')}
          >
            <span aria-hidden="true">★</span>
            <span aria-hidden="true">★</span>
            <span aria-hidden="true">★</span>
            <span aria-hidden="true">★</span>
            <span aria-hidden="true">★</span>
          </div>
          <span
            className={cn(
              'text-xs font-mono tracking-wider',
              isFeatured ? 'text-brand-yellow-400/90' : 'text-slate-400'
            )}
          >
            {review.timeAgo}
          </span>
        </div>

        {/* Review Heading */}
        <h3
          className={cn(
            'font-display text-lg sm:text-xl uppercase leading-snug mb-3 tracking-tight',
            isFeatured ? 'text-white' : 'text-brand-blue-500'
          )}
        >
          {review.quoteHighlight}
        </h3>

        {/* Review Body */}
        <p
          className={cn(
            'text-sm leading-relaxed font-sans',
            isFeatured ? 'text-brand-blue-50/90' : 'text-slate-600'
          )}
        >
          {review.text}
        </p>
      </div>

      {/* Author / Footer */}
      <div
        className={cn(
          'pt-5 mt-6 border-t flex items-center justify-between gap-3',
          isFeatured ? 'border-white/15' : 'border-slate-100'
        )}
      >
        <div className="flex items-center gap-3">
          <div
            aria-hidden="true"
            className={cn(
              'w-9 h-9 rounded-full font-bold flex items-center justify-center text-xs shrink-0',
              isFeatured
                ? 'bg-brand-yellow-400 text-brand-blue-500 shadow-xs'
                : 'bg-brand-blue-50 text-brand-blue-500 border border-brand-blue-100'
            )}
          >
            {review.author.charAt(0)}
          </div>
          <span
            className={cn(
              'font-semibold text-sm tracking-tight',
              isFeatured ? 'text-white' : 'text-slate-900'
            )}
          >
            {review.author}
          </span>
        </div>
        <span
          className={cn(
            'text-2xs font-mono uppercase tracking-wider',
            isFeatured ? 'text-white/60' : 'text-slate-400'
          )}
        >
          Google Maps
        </span>
      </div>
    </article>
  );
}

export default function SocialProofSection() {
  return (
    <section
      id="social-proof"
      aria-labelledby="social-proof-title"
      className="content-auto relative py-20 lg:py-24 bg-slate-50/70 border-y border-slate-200/80"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-12 lg:mb-16">
          {/* Rating Trust Kicker (Unboxed metadata with typographic separators) */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono font-semibold uppercase tracking-[0.22em] text-brand-blue-500 mb-3">
            <span>04</span>
            <span className="text-brand-blue-300" aria-hidden="true">/</span>
            <span className="text-amber-500 font-bold" aria-hidden="true">★★★★★</span>
            <span>5.0 / 5.0 en Google</span>
            <span className="text-brand-blue-300" aria-hidden="true">·</span>
            <span className="text-slate-500">+120 valoraciones auditadas</span>
          </div>

          {/* Main Title & Action Button */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <h2
              id="social-proof-title"
              className="font-display text-3xl sm:text-5xl lg:text-6xl leading-[0.92] tracking-tight uppercase text-brand-blue-500 max-w-4xl text-balance"
            >
              La palabra de quienes{' '}
              <span className="text-brand-blue-600 underline decoration-brand-yellow-500 decoration-4 underline-offset-8">
                venden y envían
              </span>{' '}
              en MDQ
            </h2>

            {/* Google Maps Link Button */}
            <div className="shrink-0 pt-2 lg:pt-0">
              <Link
                href="https://www.google.com/maps?q=Friuli+1972,+Mar+del+Plata"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full inline-flex items-center gap-2.5 border-2 border-brand-blue-500 text-brand-blue-500 hover:bg-brand-blue-500 hover:text-white px-7 py-3 min-h-11 font-subheading text-base sm:text-lg tracking-wider uppercase transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-500 focus-visible:ring-offset-2"
                aria-label="Ver todas las opiniones en Google Maps"
              >
                <span>Ver en Google Maps</span>
                <ExternalLink className="w-4 h-4 stroke-[2.5]" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </header>

        {/* Testimonials Grid: 3×2 = 6 cards */}
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 list-none p-0 m-0">
          {REVIEWS.map((review) => (
            <li key={review.id} className="flex">
              <ReviewCard review={review} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}