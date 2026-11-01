'use client';

import React from 'react';
import OptimizedHeader from '@/components/layout/OptimizedHeader';
import CarruselRedes from '@/components/layout/CarruselRedes';
import OptimizedFooter from '@/components/layout/OptimizedFooter';

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <>
      <OptimizedHeader />
      <main className="flex-1 w-full flex flex-col">{children}</main>
      <CarruselRedes />
      <OptimizedFooter />
    </>
  );
}
