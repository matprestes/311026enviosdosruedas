'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, ContactShadows, OrbitControls } from '@react-three/drei';
import { motion, AnimatePresence } from 'motion/react';
import { Box, Eye, RotateCw, ShieldCheck, Zap, ChevronUp, ChevronDown } from 'lucide-react';
import { CTANestedPill } from '@/components/ui/CTANestedPill';

function MotoModel({ autoRotate, scrollProgress }: { autoRotate: boolean; scrollProgress: number }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    const elapsedTime = state.clock.getElapsedTime();
    let targetRotationY = autoRotate ? elapsedTime * 0.35 : groupRef.current.rotation.y;
    targetRotationY += scrollProgress * 2.0;

    groupRef.current.rotation.y = THREE.MathUtils.damp(
      groupRef.current.rotation.y,
      targetRotationY,
      4,
      delta
    );

    const targetPosY = Math.sin(elapsedTime * 1.5) * 0.04 + Math.min(scrollProgress * 0.4, 1.2);
    groupRef.current.position.y = THREE.MathUtils.damp(
      groupRef.current.position.y,
      targetPosY,
      4,
      delta
    );
  });

  return (
    <group ref={groupRef}>
      {/* 1. Chassis */}
      <mesh position={[0, 0.6, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.8, 0.6, 1.8]} />
        <meshStandardMaterial color="#ffec01" roughness={0.2} metalness={0.8} />
      </mesh>

      {/* 2. Front & Rear Wheels */}
      <mesh position={[0, 0.35, 1.1]} rotation={[0, 0, Math.PI / 2]} castShadow>
        <cylinderGeometry args={[0.35, 0.35, 0.25, 24]} />
        <meshStandardMaterial color="#111111" roughness={0.9} metalness={0.1} />
      </mesh>
      <mesh position={[0, 0.35, -1.1]} rotation={[0, 0, Math.PI / 2]} castShadow>
        <cylinderGeometry args={[0.35, 0.35, 0.25, 24]} />
        <meshStandardMaterial color="#111111" roughness={0.9} metalness={0.1} />
      </mesh>

      {/* 3. Front Fork & Handlebar */}
      <mesh position={[0, 0.8, 1.0]} rotation={[-0.25, 0, 0]} castShadow>
        <cylinderGeometry args={[0.06, 0.06, 1.1, 12]} />
        <meshStandardMaterial color="#ffffff" roughness={0.1} metalness={0.95} />
      </mesh>
      <mesh position={[0, 1.3, 0.9]} rotation={[0, 0, Math.PI / 2]} castShadow>
        <cylinderGeometry args={[0.04, 0.04, 1.0, 12]} />
        <meshStandardMaterial color="#ffffff" roughness={0.1} metalness={0.95} />
      </mesh>

      {/* 4. Windshield */}
      <mesh position={[0, 1.3, 0.65]} rotation={[-0.4, 0, 0]}>
        <boxGeometry args={[0.6, 0.5, 0.05]} />
        <meshPhysicalMaterial color="#ffffff" transmission={0.9} opacity={1} transparent roughness={0.1} ior={1.5} />
      </mesh>

      {/* 5. Seat */}
      <mesh position={[0, 0.95, -0.1]} castShadow>
        <boxGeometry args={[0.6, 0.15, 0.9]} />
        <meshStandardMaterial color="#071536" roughness={0.7} />
      </mesh>

      {/* 6. Delivery Cargo Trunk */}
      <mesh position={[0, 1.2, -0.8]} castShadow receiveShadow>
        <boxGeometry args={[1.1, 1.0, 1.1]} />
        <meshStandardMaterial color="#ffffff" roughness={0.5} metalness={0.05} />
      </mesh>

      {/* 7. Accent Badge */}
      <mesh position={[0, 1.3, -0.24]}>
        <boxGeometry args={[0.8, 0.3, 0.05]} />
        <meshStandardMaterial color="#ffec01" roughness={0.2} metalness={0.8} />
      </mesh>

      {/* 8. Headlight */}
      <mesh position={[0, 0.9, 1.35]}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshStandardMaterial color="#ffec01" emissive="#ffec01" emissiveIntensity={0.8} />
      </mesh>
    </group>
  );
}

export default function HomeHero3D() {
  const [isDockOpen, setIsDockOpen] = useState(true);
  const [activeView, setActiveView] = useState<'standard' | 'cargo' | 'top'>('standard');
  const [autoRotate, setAutoRotate] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  const controlsRef = useRef<any>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollDist = window.scrollY;
      setScrollProgress(scrollDist * 0.0025);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleViewChange = (view: 'standard' | 'cargo' | 'top') => {
    setActiveView(view);
    if (!controlsRef.current) return;
    const controls = controlsRef.current;
    const camera = controls.object;

    if (view === 'standard') {
      camera.position.set(6, 3.5, 6);
      controls.target.set(0, 0.8, 0);
    } else if (view === 'cargo') {
      camera.position.set(0, 2.2, -3.5);
      controls.target.set(0, 1.0, -0.8);
    } else if (view === 'top') {
      camera.position.set(0.1, 8, 0.1);
      controls.target.set(0, 0, 0);
    }
    controls.update();
  };

  return (
    <div className="relative w-full h-[520px] sm:h-[600px] lg:h-[680px] bg-brand-blue-500 overflow-hidden rounded-3xl shadow-2xl border border-white/20">
      {/* React Three Fiber Canvas with Environment preset='city' and ContactShadows */}
      <Canvas
        shadows
        camera={{ position: [6, 3.5, 6], fov: 45 }}
        gl={{ antialias: true, powerPreference: 'high-performance' }}
        className="w-full h-full cursor-grab active:cursor-grabbing"
      >
        <color attach="background" args={['#062f96']} />
        <fog attach="fog" args={['#062f96', 10, 40]} />

        {/* Studio & City Environment lighting */}
        <Environment preset="city" environmentIntensity={0.8} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[8, 12, 6]} intensity={1.5} castShadow shadow-mapSize={[1024, 1024]} />

        {/* Ground Asphalt Plane */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
          <planeGeometry args={[40, 40]} />
          <meshStandardMaterial color="#071536" roughness={0.85} metalness={0.1} />
        </mesh>

        {/* Road strip */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 0]} receiveShadow>
          <planeGeometry args={[3, 40]} />
          <meshStandardMaterial color="#0950f6" roughness={0.7} metalness={0.2} />
        </mesh>

        {/* Contact Shadows for Realistic Grounding */}
        <ContactShadows
          position={[0, 0.02, 0]}
          opacity={0.65}
          scale={12}
          blur={2.5}
          far={3.5}
          resolution={256}
          color="#000000"
        />

        {/* 10-Part Procedural Delivery Moto */}
        <MotoModel autoRotate={autoRotate} scrollProgress={scrollProgress} />

        {/* OrbitControls */}
        <OrbitControls
          ref={controlsRef}
          enableDamping
          dampingFactor={0.05}
          maxPolarAngle={Math.PI / 2 - 0.05}
          minDistance={3}
          maxDistance={14}
        />
      </Canvas>

      {/* Top Floating Badge */}
      <div className="absolute top-6 left-6 z-10 flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white text-xs font-subheading uppercase tracking-widest shadow-lg pointer-events-none">
        <span className="w-2.5 h-2.5 rounded-full bg-brand-yellow-500 animate-pulse" />
        <span>Simulador 3D Envíos DosRuedas · Mar del Plata</span>
      </div>

      {/* Collapsible Bottom Control Dock (Zero Viewport Occlusion) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 w-[92%] max-w-2xl">
        <div className="bg-brand-blue-600/90 backdrop-blur-xl border border-white/25 rounded-2xl p-4 shadow-[0_20px_50px_rgba(7,21,54,0.5)] text-white">
          <div className="flex items-center justify-between pb-3 border-b border-white/15">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-brand-yellow-500" />
              <span className="font-subheading text-sm uppercase tracking-wider font-bold">
                Panel de Control 3D Interactivo
              </span>
            </div>
            <button
              onClick={() => setIsDockOpen(!isDockOpen)}
              className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label={isDockOpen ? 'Minimizar controles' : 'Maximizar controles'}
            >
              {isDockOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
            </button>
          </div>

          <AnimatePresence>
            {isDockOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="pt-3 space-y-3"
              >
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => handleViewChange('standard')}
                    className={`py-2 px-3 rounded-xl font-subheading text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                      activeView === 'standard'
                        ? 'bg-brand-yellow-500 text-brand-blue-500 font-bold shadow-sm'
                        : 'bg-white/10 text-white hover:bg-white/15'
                    }`}
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Vista General</span>
                  </button>

                  <button
                    onClick={() => handleViewChange('cargo')}
                    className={`py-2 px-3 rounded-xl font-subheading text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                      activeView === 'cargo'
                        ? 'bg-brand-yellow-500 text-brand-blue-500 font-bold shadow-sm'
                        : 'bg-white/10 text-white hover:bg-white/15'
                    }`}
                  >
                    <Box className="w-3.5 h-3.5" />
                    <span>Caja / Baúl Flex</span>
                  </button>

                  <button
                    onClick={() => setAutoRotate(!autoRotate)}
                    className={`py-2 px-3 rounded-xl font-subheading text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                      autoRotate
                        ? 'bg-brand-yellow-500 text-brand-blue-500 font-bold shadow-sm'
                        : 'bg-white/10 text-white hover:bg-white/15'
                    }`}
                  >
                    <RotateCw className="w-3.5 h-3.5" />
                    <span>{autoRotate ? 'Rotación Activa' : 'Pausar Giro'}</span>
                  </button>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 border-t border-white/10 text-xs font-sans text-brand-blue-50">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-brand-yellow-500" />
                    <span>Flota propia en Mar del Plata · Cero tercerización</span>
                  </span>
                  <CTANestedPill href="/cotizar" variant="primary" size="default" className="py-2 px-4 text-xs">
                    Cotizar Envío Ahora
                  </CTANestedPill>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
