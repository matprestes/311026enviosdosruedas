'use client';

import React, { useEffect, useRef } from 'react';
import { useReducedMotion } from 'motion/react';

// Design System Official Canvas Palette (Matches @theme tokens)
const COLOR_YELLOW_VIAL = '#FFEC01';       // var(--color-brand-yellow-500)
const COLOR_BLUE_STRUCTURAL = '#BACEFD';   // var(--color-brand-blue-100)
const COLOR_CANVAS_WHITE = '#FFFFFF';      // var(--color-white)

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  isHub?: boolean;
  label?: string;
}

interface Pulse {
  fromNode: number;
  toNode: number;
  progress: number;
  speed: number;
  color: string;
}

export default function NetworkCanvasWrapper() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 600);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
      initNetwork();
    };

    window.addEventListener('resize', handleResize);

    const HUB_LABELS = ['Base Friuli 1972', 'Centro MDQ', 'Playa Grande', 'Puerto', 'Constitución', 'Güemes'];
    let nodes: Node[] = [];
    let pulses: Pulse[] = [];

    const initNetwork = () => {
      const nodeCount = Math.min(24, Math.max(12, Math.floor(width / 70)));
      nodes = [];
      pulses = [];

      for (let i = 0; i < nodeCount; i++) {
        const isHub = i < HUB_LABELS.length;
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          radius: isHub ? 3.5 : 2,
          color: isHub ? COLOR_YELLOW_VIAL : COLOR_BLUE_STRUCTURAL,
          isHub,
          label: isHub ? HUB_LABELS[i] : undefined,
        });
      }

      // Initial pulses along logistics routes
      for (let i = 0; i < 4; i++) {
        pulses.push({
          fromNode: Math.floor(Math.random() * nodes.length),
          toNode: Math.floor(Math.random() * nodes.length),
          progress: Math.random(),
          speed: 0.004 + Math.random() * 0.006,
          color: Math.random() > 0.4 ? COLOR_YELLOW_VIAL : COLOR_CANVAS_WHITE,
        });
      }
    };

    initNetwork();

    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const maxDist = 180;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw logistics connection lines
      for (let i = 0; i < nodes.length; i++) {
        const n1 = nodes[i];

        if (!shouldReduceMotion) {
          n1.x += n1.vx;
          n1.y += n1.vy;
          if (n1.x < 0 || n1.x > width) n1.vx *= -1;
          if (n1.y < 0 || n1.y > height) n1.vy *= -1;
        }

        // Connection to mouse
        const dMouse = Math.hypot(n1.x - mouseX, n1.y - mouseY);
        if (dMouse < 140) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(255, 236, 1, ${0.25 * (1 - dMouse / 140)})`;
          ctx.lineWidth = 1;
          ctx.moveTo(n1.x, n1.y);
          ctx.lineTo(mouseX, mouseY);
          ctx.stroke();
        }

        // Connections between nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const dist = Math.hypot(n1.x - n2.x, n1.y - n2.y);
          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.16;
            ctx.beginPath();
            ctx.strokeStyle = n1.isHub || n2.isHub 
              ? `rgba(255, 236, 1, ${alpha * 1.5})`
              : `rgba(186, 206, 253, ${alpha})`;
            ctx.lineWidth = n1.isHub || n2.isHub ? 1.2 : 0.8;
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.stroke();
          }
        }
      }

      // Draw moving delivery pulses along routes
      if (!shouldReduceMotion) {
        for (let p of pulses) {
          p.progress += p.speed;
          if (p.progress >= 1) {
            p.progress = 0;
            p.fromNode = Math.floor(Math.random() * nodes.length);
            p.toNode = Math.floor(Math.random() * nodes.length);
          }

          const n1 = nodes[p.fromNode];
          const n2 = nodes[p.toNode];
          if (n1 && n2) {
            const dist = Math.hypot(n1.x - n2.x, n1.y - n2.y);
            if (dist < maxDist * 1.5) {
              const px = n1.x + (n2.x - n1.x) * p.progress;
              const py = n1.y + (n2.y - n1.y) * p.progress;

              ctx.beginPath();
              ctx.arc(px, py, 2.5, 0, Math.PI * 2);
              ctx.fillStyle = p.color;
              ctx.shadowColor = p.color;
              ctx.shadowBlur = 6;
              ctx.fill();
              ctx.shadowBlur = 0;
            }
          }
        }
      }

      // Draw nodes
      for (let node of nodes) {
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        if (node.isHub) {
          ctx.shadowColor = COLOR_YELLOW_VIAL;
          ctx.shadowBlur = 8;
        }
        ctx.fill();
        ctx.shadowBlur = 0;

        // Label for key hubs using Geist Mono font variable
        if (node.isHub && node.label && width > 640) {
          ctx.font = '10px var(--font-mono), monospace';
          ctx.fillStyle = 'rgba(255, 255, 255, 0.55)';
          ctx.fillText(node.label, node.x + 6, node.y + 3);
        }
      }

      if (!shouldReduceMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [shouldReduceMotion]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none w-full h-full z-0 opacity-40 mix-blend-screen"
      aria-hidden="true"
    />
  );
}
