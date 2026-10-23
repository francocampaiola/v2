"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { UI } from "@/content/site";

// El texto de la interfaz en el idioma elegido, y un helper para los objetos { es, en }.
export function useCopy() {
  const { language } = useLanguage();
  const lang = language === "en" ? "en" : "es";
  return { lang, ui: UI[lang], pick: (item) => item?.[lang] ?? item?.es ?? item };
}

export function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const media = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    if (!media) return;
    setReduced(media.matches);
    const onChange = () => setReduced(media.matches);
    media.addEventListener?.("change", onChange);
    return () => media.removeEventListener?.("change", onChange);
  }, []);
  return reduced;
}

// Si el elemento está en pantalla (las animaciones solo corren ahí).
export function useInView(options = { threshold: 0.25 }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), options);
    observer.observe(node);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps -- las opciones son fijas por componente.
  }, []);
  return [ref, inView];
}

// Un guion en loop: avanza de a un paso cada `durations[step]` ms mientras está en pantalla. Con movimiento
// reducido se queda en el último paso (el estado completo de la animación).
export function useScript(durations, active) {
  const reduced = useReducedMotion();
  const last = durations.length - 1;
  const [step, setStep] = useState(0);
  useEffect(() => {
    if (reduced || !active) return;
    const timer = setTimeout(() => setStep((s) => (s >= last ? 0 : s + 1)), durations[step]);
    return () => clearTimeout(timer);
  }, [step, active, reduced, last, durations]);
  return reduced ? last : step;
}

// Texto que se escribe solo hasta `full` cuando `on` es true.
// `restart` en true vuelve a empezar (al recomenzar el loop de la animación).
export function useTyping(full, on, speed = 28, restart = false) {
  const reduced = useReducedMotion();
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (restart && !reduced) setCount(0);
  }, [restart, reduced]);
  useEffect(() => {
    if (reduced) {
      setCount(full.length);
      return;
    }
    if (!on) {
      setCount(0);
      return;
    }
    if (count >= full.length) return;
    const timer = setTimeout(() => setCount((c) => c + 2), speed);
    return () => clearTimeout(timer);
  }, [on, count, full, speed, reduced]);
  return { text: full.slice(0, count), done: count >= full.length };
}
