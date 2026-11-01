'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Bike, Phone, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const SERVICES = [
  { name: 'Envíos Express (3 hs)', href: '/servicios/envios-express', badge: 'Urgente' },
  { name: 'Envíos LowCost (En el día)', href: '/servicios/envios-lowcost', badge: 'Económico' },
  { name: 'Mercado Envíos Flex', href: '/servicios/enviosflex', badge: 'Mercado Libre' },
  { name: 'Depósito & Fulfillment', href: '/servicios/deposito-fulfillment', badge: 'Stock' },
  { name: 'Empresas & Cuenta Corriente', href: '/servicios/empresas-cuenta-corriente', badge: 'B2B' },
  { name: 'Cobro Contra Reembolso', href: '/servicios/envios-contrareembolso', badge: 'Cobranza' },
  { name: 'Plan Emprendedores', href: '/servicios/plan-emprendedores', badge: 'Tiendas' },
];

export default function OptimizedHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/95 border-b border-brand-blue-100/60 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link 
          href="/" 
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-brand-blue-500 rounded-lg p-1"
          aria-label="Envíos DosRuedas - Inicio"
        >
          <div className="w-10 h-10 rounded-xl bg-brand-blue-500 text-brand-yellow-500 flex items-center justify-center font-bold shadow-sm group-hover:scale-105 transition-transform">
            <Bike className="w-6 h-6 stroke-[2.5]" />
          </div>
          <div className="flex flex-col">
            <span className="font-display tracking-tight text-brand-blue-500 text-2xl uppercase leading-none">
              ENVÍOS DOSRUEDAS
            </span>
            <span className="font-mono text-[11px] font-bold tracking-widest text-brand-blue-400 uppercase">
              Mar del Plata · Flota Propia
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {/* Services Menu Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <button
              onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              className={`font-subheading text-lg font-bold uppercase tracking-wider flex items-center gap-1.5 py-2 transition-colors ${
                pathname.startsWith('/servicios') ? 'text-brand-blue-500 font-extrabold' : 'text-brand-blue-500/85 hover:text-brand-blue-500'
              }`}
              aria-expanded={servicesDropdownOpen}
              aria-haspopup="true"
            >
              SERVICIOS
              <ChevronDown className={`w-4 h-4 transition-transform ${servicesDropdownOpen ? 'rotate-180 text-brand-blue-500' : 'text-brand-blue-400'}`} />
            </button>

            <AnimatePresence>
              {servicesDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.16 }}
                  className="absolute top-full left-0 w-80 p-2 bg-brand-blue-50/90 border border-brand-blue-100/80 rounded-2xl shadow-lg z-50 backdrop-blur-md"
                >
                  <div className="bg-white rounded-xl p-3 border border-brand-blue-100/50 space-y-1">
                    <Link
                      href="/servicios"
                      onClick={() => setServicesDropdownOpen(false)}
                      className="block px-3 py-2 rounded-lg font-subheading text-base font-bold uppercase text-brand-blue-500 hover:bg-brand-blue-50 transition-colors border-b border-brand-blue-50 pb-2 mb-1"
                    >
                      Todos los Servicios →
                    </Link>
                    {SERVICES.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        onClick={() => setServicesDropdownOpen(false)}
                        className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-brand-blue-50/80 transition-colors group"
                      >
                        <span className="font-sans text-sm font-semibold text-brand-blue-500 group-hover:text-brand-blue-400">
                          {s.name}
                        </span>
                        <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded-full bg-brand-blue-50 text-brand-blue-500 group-hover:bg-brand-yellow-100">
                          {s.badge}
                        </span>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            href="/cobertura"
            className={`font-subheading text-lg font-bold uppercase tracking-wider transition-colors ${
              pathname === '/cobertura' ? 'text-brand-blue-500 font-extrabold underline decoration-brand-yellow-500 decoration-2 underline-offset-4' : 'text-brand-blue-500/85 hover:text-brand-blue-500'
            }`}
          >
            COBERTURA
          </Link>

          <Link
            href="/nosotros"
            className={`font-subheading text-lg font-bold uppercase tracking-wider transition-colors ${
              pathname.startsWith('/nosotros') ? 'text-brand-blue-500 font-extrabold underline decoration-brand-yellow-500 decoration-2 underline-offset-4' : 'text-brand-blue-500/85 hover:text-brand-blue-500'
            }`}
          >
            NOSOTROS
          </Link>

          <Link
            href="/contacto"
            className={`font-subheading text-lg font-bold uppercase tracking-wider transition-colors ${
              pathname === '/contacto' ? 'text-brand-blue-500 font-extrabold underline decoration-brand-yellow-500 decoration-2 underline-offset-4' : 'text-brand-blue-500/85 hover:text-brand-blue-500'
            }`}
          >
            CONTACTO
          </Link>
        </nav>

        {/* Action Button & Contact Shortcut */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href="https://wa.me/5492236602699?text=Hola!%20Quiero%20hacer%20un%20env%C3%ADo%20en%20Mar%20del%20Plata"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-mono text-xs font-bold text-brand-blue-500 hover:text-brand-blue-400 px-3 py-2 rounded-lg bg-brand-blue-50/70 border border-brand-blue-100 transition-colors"
            aria-label="Contactar por WhatsApp al 223 660-2699"
          >
            <MessageSquare className="w-3.5 h-3.5 text-brand-blue-500" />
            <span>223 660-2699</span>
          </a>

          <Link
            href="/cotizar"
            className="bg-brand-yellow-500 hover:bg-brand-yellow-400 active:bg-brand-yellow-600 text-brand-blue-500 px-5 py-2.5 rounded-full font-subheading font-bold uppercase text-lg tracking-wider shadow-accent-sm transition-all duration-200 hover:scale-105 inline-flex items-center gap-2"
          >
            COTIZAR ONLINE
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl text-brand-blue-500 hover:bg-brand-blue-50 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-blue-500"
          aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white border-b border-brand-blue-100 px-4 pt-3 pb-6 space-y-4 shadow-xl"
          >
            <div className="space-y-1">
              <Link
                href="/cotizar"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full bg-brand-yellow-500 text-brand-blue-500 font-subheading text-xl font-bold uppercase tracking-wider py-3.5 rounded-full flex items-center justify-center gap-2 shadow-accent-sm mb-4"
              >
                COTIZAR ONLINE AHORA
              </Link>

              <div className="font-subheading text-sm font-bold text-brand-blue-400 uppercase tracking-widest px-3 py-1">
                Servicios Principales
              </div>
              {SERVICES.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3 py-2 text-brand-blue-500 hover:bg-brand-blue-50 rounded-lg font-sans text-sm font-semibold"
                >
                  <span>{s.name}</span>
                  <span className="font-mono text-xs bg-brand-blue-50 px-2 py-0.5 rounded text-brand-blue-500">
                    {s.badge}
                  </span>
                </Link>
              ))}

              <div className="pt-2 border-t border-brand-blue-100 mt-2 space-y-1">
                <Link
                  href="/cobertura"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 font-subheading text-lg font-bold uppercase text-brand-blue-500 hover:bg-brand-blue-50 rounded-lg"
                >
                  COBERTURA Y RADIOS
                </Link>
                <Link
                  href="/nosotros"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 font-subheading text-lg font-bold uppercase text-brand-blue-500 hover:bg-brand-blue-50 rounded-lg"
                >
                  SOBRE NOSOTROS
                </Link>
                <Link
                  href="/contacto"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 font-subheading text-lg font-bold uppercase text-brand-blue-500 hover:bg-brand-blue-50 rounded-lg"
                >
                  CONTACTO DIRECTO
                </Link>
              </div>

              <div className="pt-3">
                <a
                  href="https://wa.me/5492236602699?text=Hola!%20Quiero%20coordinar%20un%20env%C3%ADo%20en%20Mar%20del%20Plata"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-brand-blue-500 text-white rounded-xl font-subheading uppercase font-bold text-lg"
                >
                  <Phone className="w-4 h-4 text-brand-yellow-500" />
                  WHATSAPP: 223 660-2699
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
