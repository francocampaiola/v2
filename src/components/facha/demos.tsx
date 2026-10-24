"use client";

/* eslint-disable @next/next/no-img-element -- íconos SVG chicos y decorativos */
import Image from "next/image";
import type { Locale } from "@/lib/i18n";
import { useStepLoop } from "./use-step-loop";

// Las demos de FACHA recreadas con el lenguaje de su landing, en modo oscuro: guiones de pasos en loop,
// transiciones de 700 ms con la curva de FACHA y datos de ejemplo de una marca ficticia.

const shown = (visible: boolean) => (visible ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0");
const cx = (...classes: (string | false | undefined)[]) => classes.filter(Boolean).join(" ");

function Check({ size = 12, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <path d="M3 8.5 6.5 12 13 4.5" />
    </svg>
  );
}

const copy = {
  es: {
    brandTitle: "Tu marca, según FACHA",
    brandReady: "Contexto listo",
    traits: ["Urbana", "Colores tierra", "Tono cercano", "Básicos que se reponen"],
    opportunities: [
      ["Volvió a tener stock", "Tapado"],
      ["Nuevo sin fotos de campaña", "Suéter"],
      ["Se vende y casi no lo mostrás", "Remera"],
    ],
    generating: (n: number) => `Generando ${n}/3`,
    generated: "3 listas",
    connected: "FACHA conectado",
    ask: "¿Qué producto conviene mover esta semana?",
    tool: "Usó FACHA · ver oportunidades",
    answer: "El tapado de paño: volvió a tener stock y hace dos meses que no tiene fotos nuevas.",
    coat: "Tapado de paño",
    createImages: "Crear imágenes",
    apps: "Aplicaciones",
    request: "FACHA quiere acceder a tu tienda",
    viewProducts: "Ver productos, fotos y stock",
    viewSales: "Ver ventas y precios",
    accept: "Aceptar y conectar",
    importing: "Importando productos",
    storeConnected: "Conectada",
  },
  en: {
    brandTitle: "Your brand, according to FACHA",
    brandReady: "Context ready",
    traits: ["Urban", "Earth tones", "Friendly tone", "Restocked basics"],
    opportunities: [
      ["Back in stock", "Coat"],
      ["New, no campaign photos", "Sweater"],
      ["Sells but rarely shown", "T-shirt"],
    ],
    generating: (n: number) => `Generating ${n}/3`,
    generated: "3 ready",
    connected: "FACHA connected",
    ask: "Which product should I push this week?",
    tool: "Used FACHA · view opportunities",
    answer: "The wool coat: it's back in stock and hasn't had new photos in two months.",
    coat: "Wool coat",
    createImages: "Create images",
    apps: "Apps",
    request: "FACHA wants to access your store",
    viewProducts: "View products, photos and stock",
    viewSales: "View sales and prices",
    accept: "Accept and connect",
    importing: "Importing products",
    storeConnected: "Connected",
  },
};

// "Conoce la marca": los rasgos aparecen de a uno sobre el panel de vidrio
export function BrandDemo({ locale }: { locale: Locale }) {
  const c = copy[locale];
  const { ref, step } = useStepLoop<HTMLDivElement>(8, 520);
  const done = step >= c.traits.length + 1;
  return (
    <div ref={ref} aria-hidden="true" className="absolute inset-x-5 bottom-5 rounded-[20px] bg-[rgba(22,24,26,0.78)] p-4 backdrop-blur-[16px] backdrop-saturate-[1.6] lg:inset-x-7 lg:bottom-7">
      <div className="flex items-center justify-between gap-2">
        <span className="text-xs font-semibold text-[#aeaea8]">{c.brandTitle}</span>
        <span className={cx("fx-ease inline-flex items-center gap-1 text-xs font-semibold text-[#5fb572]", done ? "opacity-100" : "opacity-0")}>
          <Check />
          {c.brandReady}
        </span>
      </div>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {c.traits.map((trait, i) => (
          <span
            key={trait}
            className={cx(
              "fx-ease inline-flex h-8 items-center rounded-full px-3 text-[13px] font-medium",
              i === 0 ? "bg-[rgba(255,111,181,0.14)]" : "bg-[#1c1f21]",
              step > i ? "translate-y-0 scale-100 opacity-100" : "translate-y-1 scale-95 opacity-0",
            )}
          >
            {trait}
          </span>
        ))}
      </div>
    </div>
  );
}

// "Detecta qué mover": las oportunidades entran de a una y se marca la principal
export function OpportunitiesDemo({ locale }: { locale: Locale }) {
  const c = copy[locale];
  const { ref, step } = useStepLoop<HTMLUListElement>(8, 520);
  const picked = step >= 4;
  return (
    <ul ref={ref} aria-hidden="true" className="flex flex-col gap-2">
      {c.opportunities.map(([label, product], i) => {
        const highlight = picked && i === 0;
        return (
          <li
            key={label}
            className={cx(
              "fx-ease flex items-center gap-2.5 rounded-[14px] px-3 py-2.5 text-sm",
              shown(step > i),
              highlight ? "bg-[rgba(255,111,181,0.14)] font-semibold" : "bg-[#1c1f21] font-medium",
            )}
          >
            <span className="relative inline-flex size-2">
              {highlight && <span className="fx-ping absolute inset-0 rounded-full bg-[#ff6fb5]" />}
              <span className={cx("fx-ease relative size-2 rounded-full", highlight ? "bg-[#ff6fb5]" : "bg-[#5a5d61]")} />
            </span>
            {label}
            <span className="ml-auto text-xs font-normal text-[#aeaea8]">{product}</span>
          </li>
        );
      })}
    </ul>
  );
}

const GENERATED = ["/facha-demo/hoodie-street.webp", "/facha-demo/hoodie-studio.webp", "/facha-demo/hoodie-product.webp"];

// "Crea el contenido": tres imágenes del mismo buzo se generan una por una
export function GenerationDemo({ locale }: { locale: Locale }) {
  const c = copy[locale];
  const { ref, step } = useStepLoop<HTMLDivElement>(7, 560);
  const ready = Math.min(step, GENERATED.length);
  const done = ready === GENERATED.length;
  return (
    <div ref={ref} aria-hidden="true">
      <div className="grid grid-cols-3 gap-1.5">
        {GENERATED.map((src, i) => (
          <div key={src} className="relative aspect-[4/5] overflow-hidden rounded-[10px] bg-[#1c1f21]">
            <span className="fx-shimmer absolute inset-0" />
            <Image
              src={src}
              alt=""
              fill
              sizes="120px"
              className={cx("fx-ease object-cover", i < ready ? "scale-100 opacity-100 blur-none" : "scale-105 opacity-0 blur-md")}
            />
          </div>
        ))}
      </div>
      <div className="mt-2.5 flex items-center gap-2 text-xs">
        <span className="relative h-1 flex-1 overflow-hidden rounded-full bg-[#1c1f21]">
          <span
            className={cx("fx-ease absolute inset-y-0 left-0 rounded-full", done ? "bg-[#5fb572]" : "bg-[#f7f7f5]")}
            style={{ width: `${((ready + 0.3) / (GENERATED.length + 0.3)) * 100}%` }}
          />
        </span>
        <span className="w-[86px] text-right font-semibold text-[#aeaea8]">{done ? c.generated : c.generating(ready + 1)}</span>
      </div>
    </div>
  );
}

// "Desde tu chat": Claude usa FACHA por MCP
export function ChatDemo({ locale }: { locale: Locale }) {
  const c = copy[locale];
  const { ref, step } = useStepLoop<HTMLDivElement>(9, 480);
  return (
    <div ref={ref} aria-hidden="true" className="flex flex-col gap-2.5 rounded-[20px] border border-[rgba(247,247,245,0.08)] bg-[#262624] p-4 text-[#faf9f5]">
      <div className="flex items-center gap-2 border-b border-[#3a3a37] pb-2.5">
        <img src="/facha-demo/ic-claude.svg" alt="" className="size-4" />
        <span className="text-[13px] font-semibold">Claude</span>
        <span className="ml-auto inline-flex items-center gap-1 rounded-full bg-[#1c1f21] px-2 py-0.5 text-[11px] font-semibold text-[#aeaea8]">
          <img src="/facha-demo/favicon.svg" alt="" className="size-3" />
          {c.connected}
        </span>
      </div>
      <p className={cx("fx-ease max-w-[85%] self-end rounded-2xl bg-[#141413] px-3 py-2 text-[13px]", shown(step >= 1))}>{c.ask}</p>
      <div className="relative min-h-[112px]">
        <span className={cx("fx-ease absolute left-0 top-0 inline-flex gap-1", step === 2 ? "opacity-100" : "opacity-0")}>
          <span className="fx-dot size-1.5 rounded-full bg-[#8d8b83]" />
          <span className="fx-dot size-1.5 rounded-full bg-[#8d8b83] [animation-delay:150ms]" />
          <span className="fx-dot size-1.5 rounded-full bg-[#8d8b83] [animation-delay:300ms]" />
        </span>
        <div className={cx("fx-ease flex flex-col gap-2", shown(step >= 3))}>
          <span className="inline-flex w-max items-center gap-1.5 rounded-lg border border-[#3a3a37] bg-[#16181a] px-2 py-1 text-[11px] text-[#aeaea8]">
            <img src="/facha-demo/favicon.svg" alt="" className="size-3" />
            {c.tool}
          </span>
          <p className={cx("fx-ease text-sm leading-5", shown(step >= 4))} style={{ fontFamily: "Georgia, serif" }}>
            {c.answer}
          </p>
          <div className={cx("fx-ease flex items-center gap-2 rounded-xl border border-[#3a3a37] bg-[#16181a] p-1.5", shown(step >= 5))}>
            <Image src="/facha-demo/coat.webp" alt="" width={64} height={64} className="size-8 rounded-lg object-cover object-[50%_8%]" />
            <span className="flex-1 text-xs font-semibold">{c.coat}</span>
            <span className="rounded-full bg-[#ff6fb5] px-2.5 py-1 text-[11px] font-semibold text-[#0e1012]">{c.createImages}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const STORES = [
  { name: "Shopify", icon: "/facha-demo/ic-shopify.svg", color: "#008060", pressed: "#006e52" },
  { name: "Mercado Libre", icon: "/facha-demo/ic-ml.svg", color: "#3483fa", pressed: "#2968c8" },
];
const STEPS_PER_STORE = 8;
const IMPORTED = [0, 0, 0, 42, 96, 128, 128, 128];

// Una capa sale y recién después entra la otra: nunca se ven las dos encimadas
const layer = (visible: boolean) =>
  visible
    ? "opacity-100 translate-y-0 transition-[opacity,transform] duration-500 delay-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
    : "pointer-events-none opacity-0 translate-y-1 transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]";

// "Conecta la tienda": la pantalla de permisos de cada ecommerce y la importación del catálogo
export function StoreConnectDemo({ locale }: { locale: Locale }) {
  const c = copy[locale];
  const { ref, step } = useStepLoop<HTMLDivElement>(STORES.length * STEPS_PER_STORE, 900);
  const store = STORES[Math.floor(step / STEPS_PER_STORE)];
  const local = step % STEPS_PER_STORE;
  const importing = local >= 2;
  const imported = IMPORTED[local];
  const done = local >= 5;
  return (
    <div ref={ref} aria-hidden="true" className="relative w-full max-w-[300px] self-center overflow-hidden rounded-[20px] bg-[#16181a] shadow-[0_12px_32px_rgba(0,0,0,0.35)]">
      <div className="flex items-center gap-2 border-b border-[rgba(247,247,245,0.08)] px-4 py-3">
        <img src={store.icon} alt="" className="h-4 w-auto" />
        <span className="text-[13px] font-semibold">{store.name}</span>
        <span className="ml-auto text-[11px] text-[#aeaea8]">{c.apps}</span>
      </div>
      <div className="relative h-[164px]">
        <div className={cx("absolute inset-0 flex flex-col p-4", layer(!importing))}>
          <div className="flex items-center gap-2">
            <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-lg bg-[#26292b]">
              <img src="/facha-demo/logo-white.svg" alt="" className="h-2.5 w-auto" />
            </span>
            <span className="text-[13px] font-semibold leading-4">{c.request}</span>
          </div>
          <ul className="mt-3 flex flex-col gap-1.5 text-xs text-[#aeaea8]">
            <li className="flex items-center gap-1.5"><Check /> {c.viewProducts}</li>
            <li className="flex items-center gap-1.5"><Check /> {c.viewSales}</li>
          </ul>
          <span
            className={cx(
              "mt-auto inline-flex h-9 items-center justify-center rounded-lg text-[13px] font-semibold text-white transition-[transform,background-color] duration-200",
              local === 1 && "scale-[0.97]",
            )}
            style={{ background: local === 1 ? store.pressed : store.color }}
          >
            {c.accept}
          </span>
        </div>
        <div className={cx("absolute inset-0 flex flex-col justify-center p-4", layer(importing))}>
          <div className="flex items-center justify-center gap-3">
            <span className="inline-flex size-11 items-center justify-center rounded-xl bg-[#1c1f21]">
              <img src={store.icon} alt="" className="h-5 w-auto" />
            </span>
            <span className="relative h-0.5 w-14 overflow-hidden rounded-full bg-[#1c1f21]">
              <span className={cx("absolute inset-0", !done && "fx-flow")} style={{ background: store.color }} />
            </span>
            <span className="inline-flex size-11 items-center justify-center rounded-xl bg-[#26292b]">
              <img src="/facha-demo/logo-white.svg" alt="" className="h-3 w-auto" />
            </span>
          </div>
          <div className="mt-4 flex items-baseline justify-between text-xs">
            <span className="font-semibold">{done ? c.storeConnected : c.importing}</span>
            <span className="tabular-nums text-[#aeaea8]">{imported}/128</span>
          </div>
          <span className="relative mt-1.5 h-1.5 overflow-hidden rounded-full bg-[#1c1f21]">
            <span
              className={cx("fx-ease absolute inset-y-0 left-0 rounded-full", done ? "bg-[#5fb572]" : "bg-[#f7f7f5]")}
              style={{ width: `${(imported / 128) * 100}%` }}
            />
          </span>
        </div>
      </div>
    </div>
  );
}
