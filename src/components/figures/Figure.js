"use client";

import { useEffect, useRef, useState } from "react";

// Una figura interactiva de anatomy (public/figures/<name>.html), embebida en un iframe del mismo dominio.
// Al cargar, mide la figura y la sigue midiendo (cambia de alto con el ancho). Sin JavaScript, el iframe
// igual la muestra con un alto aproximado.
export default function Figure({ name, title }) {
  const ref = useRef(null);
  const [height, setHeight] = useState(560);

  useEffect(() => {
    const frame = ref.current;
    if (!frame) return;
    let observer;
    const measure = () => {
      const page = frame.contentDocument?.querySelector(".iso-page");
      if (!page) return;
      // Desde el principio del documento hasta el borde de abajo del último elemento.
      const update = () => {
        const bottom = Math.max(...[...page.querySelectorAll("*")].map((el) => el.getBoundingClientRect().bottom));
        setHeight(Math.ceil(bottom + (frame.contentWindow?.scrollY ?? 0)) + 4);
      };
      update();
      observer?.disconnect();
      observer = new ResizeObserver(update);
      observer.observe(page);
    };
    // Si ya cargó antes de que corra este efecto, se mide ahora; si no, al terminar de cargar.
    if (frame.contentDocument?.readyState === "complete") measure();
    frame.addEventListener("load", measure);
    return () => {
      frame.removeEventListener("load", measure);
      observer?.disconnect();
    };
  }, []);

  return (
    <iframe
      ref={ref}
      src={`/figures/${name}.html`}
      title={title}
      loading="lazy"
      className="block w-full border-0"
      style={{ height }}
    />
  );
}
