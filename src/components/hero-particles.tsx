"use client";

import { useEffect, useRef } from "react";

const COUNT = 9000;
const SHAPE_MS = 4200;

// Cuatro formas con la misma cantidad de puntos: esfera, onda, hélice y nudo (2,3)
function buildShapes(n: number) {
  const sphere = new Float32Array(n * 3);
  const wave = new Float32Array(n * 3);
  const helix = new Float32Array(n * 3);
  const knot = new Float32Array(n * 3);
  const golden = Math.PI * (3 - Math.sqrt(5));
  const side = Math.ceil(Math.sqrt(n));
  for (let i = 0; i < n; i++) {
    const y = 1 - (i / (n - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const th = golden * i;
    sphere.set([Math.cos(th) * r * 2.2, y * 2.2, Math.sin(th) * r * 2.2], i * 3);

    const gx = (i % side) / side - 0.5;
    const gz = Math.floor(i / side) / side - 0.5;
    wave.set([gx * 6.5, Math.sin(gx * 9) * 0.45 + Math.cos(gz * 7) * 0.45, gz * 6.5], i * 3);

    const t = (i / n) * Math.PI * 10;
    const strand = i % 2 ? Math.PI : 0;
    helix.set([Math.cos(t + strand) * 1.2, (i / n) * 5 - 2.5, Math.sin(t + strand) * 1.2], i * 3);

    const u = (i / n) * Math.PI * 2;
    const rr = 1.3 + 0.45 * Math.cos(3 * u);
    const jitter = ((i * 9301 + 49297) % 233280) / 233280 - 0.5;
    knot.set(
      [rr * Math.cos(2 * u) + jitter * 0.18, 0.9 * Math.sin(3 * u) + jitter * 0.18, rr * Math.sin(2 * u) + jitter * 0.18],
      i * 3,
    );
  }
  return [sphere, wave, helix, knot];
}

export function HeroParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const host = canvas?.parentElement;
    if (!canvas || !host) return;
    // En celular va el anillo de CSS: no vale la pena cargar WebGL
    if (!window.matchMedia("(min-width: 1024px)").matches) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let disposed = false;
    let cleanup = () => {};

    import("three").then((T) => {
      if (disposed) return;
      const renderer = new T.WebGLRenderer({ canvas, antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      const scene = new T.Scene();
      const camera = new T.PerspectiveCamera(42, 1, 0.1, 100);
      camera.position.set(0, 0.4, 8.5);

      const shapes = buildShapes(COUNT);
      const pos = new Float32Array(shapes[0]);
      const colors = new Float32Array(COUNT * 3);
      const base = new T.Color(0xeeece7);
      const accent = new T.Color(0xff6a3d);
      for (let i = 0; i < COUNT; i++) {
        const c = i % 11 === 0 ? accent : base;
        colors.set([c.r, c.g, c.b], i * 3);
      }
      const geometry = new T.BufferGeometry();
      geometry.setAttribute("position", new T.BufferAttribute(pos, 3));
      geometry.setAttribute("color", new T.BufferAttribute(colors, 3));
      const material = new T.PointsMaterial({ size: 0.032, vertexColors: true, transparent: true, opacity: 0.9, depthWrite: false });
      const group = new T.Group();
      group.add(new T.Points(geometry, material));
      scene.add(group);

      const resize = () => {
        const w = host.clientWidth || 1;
        const h = host.clientHeight || 1;
        renderer.setSize(w, h, false);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        group.position.x = w > 900 ? 2.6 : 0;
      };
      resize();
      const observer = new ResizeObserver(resize);
      observer.observe(host);

      const mouse = { x: 0, y: 0 };
      const section = host.parentElement ?? host;
      const onMove = (e: PointerEvent) => {
        const rect = host.getBoundingClientRect();
        mouse.x = (e.clientX - rect.left) / rect.width - 0.5;
        mouse.y = (e.clientY - rect.top) / rect.height - 0.5;
      };
      section.addEventListener("pointermove", onMove);

      let shape = 0;
      const timer = reduced ? undefined : window.setInterval(() => (shape = (shape + 1) % shapes.length), SHAPE_MS);

      let raf = 0;
      const clock = new T.Clock();
      const tick = () => {
        const t = clock.getElapsedTime();
        const target = shapes[shape];
        const k = reduced ? 1 : 0.045;
        for (let i = 0; i < COUNT * 3; i += 3) {
          // Cada partícula viaja a su lugar en la forma nueva, con una pequeña respiración
          const wob = reduced ? 0 : Math.sin(t * 1.4 + i * 0.013) * 0.015;
          pos[i] += (target[i] - pos[i]) * k + wob;
          pos[i + 1] += (target[i + 1] - pos[i + 1]) * k;
          pos[i + 2] += (target[i + 2] - pos[i + 2]) * k - wob;
        }
        geometry.attributes.position.needsUpdate = true;
        if (!reduced) {
          group.rotation.y += 0.0025 + mouse.x * 0.004;
          group.rotation.x += (-mouse.y * 0.5 + 0.15 - group.rotation.x) * 0.04;
        }
        renderer.render(scene, camera);
        if (!reduced) raf = requestAnimationFrame(tick);
      };
      tick();

      cleanup = () => {
        cancelAnimationFrame(raf);
        window.clearInterval(timer);
        observer.disconnect();
        section.removeEventListener("pointermove", onMove);
        geometry.dispose();
        material.dispose();
        renderer.dispose();
      };
    });

    return () => {
      disposed = true;
      cleanup();
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className="absolute inset-0 block size-full" />;
}

// Versión liviana para el celular: anillos de puntos que giran
export function HeroRing() {
  return (
    <svg
      viewBox="0 0 240 240"
      aria-hidden="true"
      className="size-60 [animation:spin_40s_linear_infinite]"
    >
      <circle cx="120" cy="120" r="108" fill="none" stroke="#eeece7" strokeOpacity="0.5" strokeWidth="2" strokeDasharray="1 7" strokeLinecap="round" />
      <circle cx="120" cy="120" r="84" fill="none" stroke="#eeece7" strokeOpacity="0.35" strokeWidth="2" strokeDasharray="1 6" strokeLinecap="round" />
      <circle cx="120" cy="120" r="60" fill="none" stroke="#ff6a3d" strokeWidth="2.5" strokeDasharray="1 9" strokeLinecap="round" />
      <circle cx="120" cy="120" r="36" fill="none" stroke="#eeece7" strokeOpacity="0.25" strokeWidth="2" strokeDasharray="1 5" strokeLinecap="round" />
    </svg>
  );
}
