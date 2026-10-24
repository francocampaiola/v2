"use client";

import { useEffect, useRef, useState } from "react";

// Avanza un guion de pasos en loop mientras el elemento está en pantalla, como en la landing de FACHA.
// Sin JS, fuera de pantalla o con movimiento reducido queda en el último paso (el estado completo).
export function useStepLoop<T extends Element>(steps: number, stepMs: number) {
  const ref = useRef<T>(null);
  const [startedAt, setStartedAt] = useState<number | null>(null);
  const [now, setNow] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element || typeof IntersectionObserver === "undefined") return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const observer = new IntersectionObserver(
      ([entry]) => {
        const run = entry.isIntersecting && !reduced.matches;
        setStartedAt((previous) => (run ? (previous ?? Date.now()) : null));
      },
      { threshold: 0.35 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (startedAt === null) return;
    const timer = setInterval(() => setNow(Date.now()), stepMs);
    return () => clearInterval(timer);
  }, [startedAt, stepMs]);

  const step = startedAt === null ? steps - 1 : Math.max(0, Math.floor((now - startedAt) / stepMs)) % steps;
  return { ref, step };
}
