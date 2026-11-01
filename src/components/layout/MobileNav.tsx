'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { createPortal } from 'react-dom';
import { motion, useReducedMotion } from 'motion/react';
import { ChevronDown, ChevronRight, Phone, X, MessageSquare } from 'lucide-react';
import { CTANestedPill } from '@/components/ui';
import { SUPPORT_PHONE } from '@/lib/promises';
import { trackAnalytics } from '@/lib/analytics';

const PHONE_HREF = `tel:+${SUPPORT_PHONE.replace(/\D/g, '')}`;
const WHATSAPP_HREF = `https://wa.me/5492236602699?text=Hola%20Envíos%20DosRuedas!%20Quiero%20hacer%20una%20consulta`;

export interface MobileNavItem {
  label: string;
  href?: string;
  icon?: React.ComponentType<{ className?: string }>;
  dropdownItems?: { label: string; href: string; icon?: React.ComponentType<{ className?: string }> }[];
}

export interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: MobileNavItem[];
  activeDropdown: string | null;
  onDropdownToggle: (label: string) => void;
}

const SPRING_PANEL = { type: 'spring', stiffness: 380, damping: 32 } as const;
const NAV_CONTAINER = { hidden: {}, visible: { transition: { staggerChildren: 0.07, delayChildren: 0.15 } } } as const;
const NAV_ITEM_VARIANT = { hidden: { opacity: 0, x: 24 }, visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 380, damping: 26 } } } as const;

// FIX ESLINT: useSyncExternalStore para mounted sin setState en effect
function useIsMounted() {
  return React.useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
}

export const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose, navItems, activeDropdown, onDropdownToggle }) => {
  const prefersReducedMotion = useReducedMotion();
  const mounted = useIsMounted();
  const drawerRef = React.useRef<HTMLDivElement>(null);
  const onCloseRef = React.useRef(onClose);

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onCloseRef.current();
        return;
      }
      if (e.key === 'Tab' && drawerRef.current) {
        const focusable = drawerRef.current.querySelectorAll<HTMLElement>('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    const t = setTimeout(() => drawerRef.current?.querySelector<HTMLElement>('button, [href]')?.focus(), 80);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      clearTimeout(t);
      document.getElementById('mobile-menu-toggle-opt')?.focus();
    };
  }, [isOpen]);

  const pathname = usePathname();

  if (!mounted) return null;

  const content = (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
        onClick={onClose}
        className="fixed inset-0 bg-brand-blue-500/70 backdrop-blur-md z-99 lg:hidden"
        aria-hidden="true"
      />
      <motion.div
        ref={drawerRef}
        id="mobile-navigation-dialog"
        role="dialog"
        aria-modal="true"
        aria-label="Menú principal de navegación"
        initial={prefersReducedMotion ? { x: 0 } : { x: '100%' }}
        animate={{ x: 0 }}
        exit={prefersReducedMotion ? { opacity: 0 } : { x: '100%' }}
        transition={SPRING_PANEL}
        className="fixed top-0 right-0 bottom-0 z-100 flex flex-col w-[88vw] max-w-[340px] h-dvh bg-brand-blue-500 text-white shadow-2xl border-l border-white/15 lg:hidden overscroll-contain"
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 shrink-0 h-16">
          <Link
            href="/"
            onClick={onClose}
            className="flex items-center gap-2.5 focus:outline-none focus:ring-2 focus:ring-brand-yellow-500/50 rounded-lg"
          >
            <span className="font-display text-xl tracking-tight uppercase select-none flex items-center gap-1.5 leading-none">
              <span className="text-white">Envíos</span>
              <span className="text-brand-yellow-500">DosRuedas</span>
            </span>
          </Link>
          <motion.button
            onClick={onClose}
            whileHover={prefersReducedMotion ? {} : { scale: 1.04 }}
            whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
            transition={{ type: 'spring', duration: 0.2, bounce: 0.1 }}
            className="p-2.5 rounded-xl bg-white/10 hover:bg-white/15 active:scale-95 text-white hover:text-brand-yellow-500 focus:outline-none focus:ring-2 focus:ring-brand-yellow-500/50 transition-colors cursor-pointer min-w-11 min-h-11 flex items-center justify-center border border-white/10"
            aria-label="Cerrar menú"
          >
            <X className="h-5 w-5" />
          </motion.button>
        </div>

        <div className="flex-1 overflow-y-auto overscroll-contain px-5 py-6 space-y-4">
          <motion.nav
            className="space-y-1.5"
            variants={prefersReducedMotion ? {} : NAV_CONTAINER}
            initial="hidden"
            animate="visible"
          >
            {navItems.map((item) => {
              const isDirectActive = item.href ? pathname === item.href : false;
              const isGroupActive = item.dropdownItems
                ? item.dropdownItems.some((sub) => pathname === sub.href)
                : false;
              const isActive = isDirectActive || isGroupActive;

              return (
                <motion.div
                  key={item.label}
                  variants={prefersReducedMotion ? {} : NAV_ITEM_VARIANT}
                  className="border-b border-white/10 pb-2 last:border-b-0 last:pb-0"
                >
                  {item.href ? (
                    <Link
                      href={item.href}
                      onClick={onClose}
                      aria-current={isDirectActive ? 'page' : undefined}
                      className={`flex items-center gap-3.5 py-2.5 px-3 rounded-xl text-lg font-subheading tracking-wider uppercase transition-all duration-150 ease-out min-h-12 focus:outline-none focus:ring-2 focus:ring-brand-yellow-500/50 ${
                        isDirectActive
                          ? 'text-brand-yellow-500 bg-white/15 font-bold border-l-4 border-brand-yellow-500 pl-3'
                          : 'text-white hover:text-brand-yellow-500 hover:bg-white/5'
                      }`}
                    >
                      {item.icon && <item.icon className="h-5 w-5 text-brand-yellow-500 shrink-0" />}
                      <span>{item.label}</span>
                    </Link>
                  ) : (
                    <div>
                      <button
                        type="button"
                        aria-expanded={activeDropdown === item.label}
                        onClick={() => onDropdownToggle(item.label)}
                        className={`w-full text-left py-2.5 px-3 rounded-xl text-lg font-subheading tracking-wider uppercase flex items-center justify-between cursor-pointer transition-all duration-150 ease-out min-h-12 focus:outline-none focus:ring-2 focus:ring-brand-yellow-500/50 ${
                          isActive
                            ? 'text-brand-yellow-500 bg-white/10 font-bold'
                            : 'text-white hover:bg-white/5'
                        }`}
                      >
                        <span className="flex items-center gap-3.5">
                          {item.icon && <item.icon className="h-5 w-5 text-brand-yellow-500 shrink-0" />}
                          <span>{item.label}</span>
                        </span>
                        <motion.span
                          animate={{ rotate: activeDropdown === item.label ? 180 : 0 }}
                          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                        >
                          <ChevronDown className="h-5 w-5 text-brand-yellow-500 shrink-0" />
                        </motion.span>
                      </button>

                      <div
                        className={`grid transition-[grid-template-rows,opacity] duration-200 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                          activeDropdown === item.label
                            ? 'grid-rows-[1fr] opacity-100'
                            : 'grid-rows-[0fr] opacity-0 pointer-events-none'
                        }`}
                      >
                        <div className="overflow-hidden pl-3 pr-1 py-1.5 flex flex-col gap-1">
                          {item.dropdownItems?.map((subItem, idx) => {
                            const SubIcon = subItem.icon || ChevronRight;
                            const isSubActive = pathname === subItem.href;

                            return (
                              <motion.div
                                key={subItem.href}
                                initial={prefersReducedMotion ? {} : { opacity: 0, x: 12 }}
                                animate={activeDropdown === item.label ? { opacity: 1, x: 0 } : { opacity: 0, x: 12 }}
                                transition={{ delay: idx * 0.03, type: 'spring', stiffness: 380, damping: 28 }}
                              >
                                <Link
                                  href={subItem.href}
                                  onClick={onClose}
                                  aria-current={isSubActive ? 'page' : undefined}
                                  className={`flex items-center gap-2.5 py-2 px-3 rounded-xl text-sm font-subheading uppercase tracking-wider transition-all duration-150 ease-out min-h-10.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow-500/50 ${
                                    isSubActive
                                      ? 'bg-brand-yellow-500 text-brand-blue-500 font-bold shadow-sm'
                                      : 'text-white hover:text-brand-yellow-500 hover:bg-black/15'
                                  }`}
                                >
                                  <div
                                    className={`p-1 rounded-lg shrink-0 ${
                                      isSubActive
                                        ? 'bg-brand-blue-500 text-brand-yellow-500'
                                        : 'bg-white/10 text-brand-yellow-500'
                                    }`}
                                  >
                                    <SubIcon className="h-3.5 w-3.5" />
                                  </div>
                                  <span className="truncate">{subItem.label}</span>
                                </Link>
                              </motion.div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </motion.nav>
        </div>

        {/* Footer Actions with Safe Area Support */}
        <div className="p-5 border-t border-white/10 space-y-3 shrink-0 bg-brand-blue-500 backdrop-blur-md mt-auto pb-[calc(1.25rem+env(safe-area-inset-bottom,0px))]">
          <div className="grid grid-cols-2 gap-2">
            <a
              href={PHONE_HREF}
              onClick={() => trackAnalytics.phoneClick(SUPPORT_PHONE, 'drawer_mobile')}
              className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/15 active:scale-95 border border-white/10 text-white hover:text-brand-yellow-500 font-mono text-xs font-bold transition-all min-h-11 focus:outline-none focus:ring-2 focus:ring-brand-yellow-500/50"
              aria-label="Llamar por teléfono"
            >
              <Phone className="h-4 w-4 text-brand-yellow-500" aria-hidden="true" />
              <span>Llamar</span>
            </a>

            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackAnalytics.whatsappClick('drawer_mobile_wa', 'WhatsApp')}
              className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/15 active:scale-95 border border-white/10 text-white hover:text-brand-yellow-500 font-mono text-xs font-bold transition-all min-h-11 focus:outline-none focus:ring-2 focus:ring-brand-yellow-500/50"
              aria-label="Consultar por WhatsApp"
            >
              <MessageSquare className="h-4 w-4 text-brand-yellow-500" aria-hidden="true" />
              <span>WhatsApp</span>
            </a>
          </div>

          <CTANestedPill
            id="drawer_cta"
            href="/cotizar"
            variant="primary"
            size="large"
            className="w-full justify-center min-h-11 py-3 text-sm active:scale-95"
            onClick={onClose}
          >
            Cotizá tu envío
          </CTANestedPill>
        </div>
      </motion.div>
    </>
  );

  return createPortal(content, document.body);
};

export default MobileNav;
