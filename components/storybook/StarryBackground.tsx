"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  hue: number;
  size: number;
};

type Vortex = {
  x: number;
  y: number;
  strength: number;
  radius: number;
};

const PALETTE = [
  [11, 19, 43],
  [28, 37, 65],
  [30, 58, 138],
  [37, 99, 235],
  [252, 211, 77],
  [245, 158, 11],
] as const;

export function StarryBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    let reduced = media.matches;
    const onMotion = () => {
      reduced = media.matches;
    };
    media.addEventListener("change", onMotion);

    let width = 0;
    let height = 0;
    let frame = 0;
    let raf = 0;
    const particles: Particle[] = [];
    const vortices: Vortex[] = [];

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      vortices.length = 0;
      vortices.push(
        { x: width * 0.78, y: height * 0.2, strength: 1.35, radius: Math.min(width, height) * 0.28 },
        { x: width * 0.38, y: height * 0.42, strength: 1.1, radius: Math.min(width, height) * 0.42 },
        { x: width * 0.7, y: height * 0.72, strength: 0.85, radius: Math.min(width, height) * 0.26 },
      );

      const density = width < 720 ? 3800 : 1400;
      const cap = width < 720 ? 280 : 1400;
      const count = Math.round(Math.min(cap, (width * height) / density));
      particles.length = 0;
      for (let i = 0; i < count; i += 1) {
        particles.push(spawn(width, height));
      }
    };

    const drawStatic = () => {
      const sky = ctx.createLinearGradient(0, 0, width, height);
      sky.addColorStop(0, "#0b132b");
      sky.addColorStop(0.45, "#1c2541");
      sky.addColorStop(1, "#1e3a8a");
      ctx.fillStyle = sky;
      ctx.fillRect(0, 0, width, height);
      drawMoon(ctx, width * 0.78, height * 0.2, Math.min(width, height) * 0.08, 0);
    };

    const tick = () => {
      frame += 1;
      const t = frame * 0.004;

      ctx.fillStyle = "rgba(11, 19, 43, 0.18)";
      ctx.fillRect(0, 0, width, height);

      for (const particle of particles) {
        let ax = 0;
        let ay = 0;
        for (const vortex of vortices) {
          const dx = particle.x - vortex.x;
          const dy = particle.y - vortex.y;
          const dist = Math.hypot(dx, dy) + 12;
          const influence = Math.exp(-((dist * dist) / (vortex.radius * vortex.radius * 1.8)));
          const swirl = vortex.strength * influence;
          ax += (-dy / dist) * swirl;
          ay += (dx / dist) * swirl;
        }

        const drift = Math.sin(particle.x * 0.006 + t) * Math.cos(particle.y * 0.005 - t * 0.7);
        particle.vx = particle.vx * 0.92 + ax * 0.55 + drift * 0.12;
        particle.vy = particle.vy * 0.92 + ay * 0.55;
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life -= 0.004;

        if (
          particle.life <= 0 ||
          particle.x < -40 ||
          particle.y < -40 ||
          particle.x > width + 40 ||
          particle.y > height + 40
        ) {
          Object.assign(particle, spawn(width, height));
        }

        const color = PALETTE[particle.hue];
        const gold = particle.hue >= 4;
        ctx.strokeStyle = `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${gold ? 0.55 : 0.28})`;
        ctx.lineWidth = particle.size;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(particle.x, particle.y);
        ctx.lineTo(particle.x - particle.vx * 3.2, particle.y - particle.vy * 3.2);
        ctx.stroke();
      }

      drawMoon(ctx, vortices[0].x, vortices[0].y, Math.min(width, height) * 0.075, t);
      raf = window.requestAnimationFrame(tick);
    };

    resize();
    if (reduced) {
      drawStatic();
    } else {
      tick();
    }

    window.addEventListener("resize", resize);
    return () => {
      media.removeEventListener("change", onMotion);
      window.removeEventListener("resize", resize);
      window.cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 h-full w-full"
    />
  );
}

function spawn(width: number, height: number): Particle {
  const gold = Math.random() > 0.86;
  return {
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.6,
    vy: (Math.random() - 0.5) * 0.6,
    life: 0.4 + Math.random() * 0.8,
    hue: gold ? 4 + Math.floor(Math.random() * 2) : Math.floor(Math.random() * 4),
    size: gold ? 1.6 + Math.random() * 1.4 : 0.8 + Math.random() * 1.6,
  };
}

function drawMoon(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  radius: number,
  t: number,
) {
  const glow = ctx.createRadialGradient(x, y, radius * 0.2, x, y, radius * 4.2);
  glow.addColorStop(0, "rgba(254, 240, 138, 0.95)");
  glow.addColorStop(0.18, "rgba(252, 211, 77, 0.55)");
  glow.addColorStop(0.45, "rgba(30, 58, 138, 0.18)");
  glow.addColorStop(1, "rgba(11, 19, 43, 0)");
  ctx.fillStyle = glow;
  ctx.beginPath();
  ctx.arc(x, y, radius * 4.2, 0, Math.PI * 2);
  ctx.fill();

  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(t * 0.08);
  for (let i = 0; i < 10; i += 1) {
    ctx.rotate(Math.PI / 5);
    ctx.beginPath();
    ctx.strokeStyle = "rgba(254, 240, 138, 0.22)";
    ctx.lineWidth = 2;
    ctx.arc(0, 0, radius * (1.35 + i * 0.12), 0.15, 1.1);
    ctx.stroke();
  }
  ctx.restore();

  ctx.fillStyle = "#fef08a";
  ctx.beginPath();
  ctx.arc(x, y, radius * 0.55, 0, Math.PI * 2);
  ctx.fill();
}
