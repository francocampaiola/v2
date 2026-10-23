"use client";

import Image from "next/image";
import { useCopy, useInView, useScript, useTyping } from "../site/hooks";

// Las animaciones de los milestones. Cada una es un guion corto en loop (useScript) que corre solo en
// pantalla; con movimiento reducido se ve el último paso, que muestra la pieza completa. Los números de
// las piezas de producto (Views, Persi) son datos de ejemplo y lo dicen.

const TINTS = {
  violet: "radial-gradient(120% 90% at 0% 0%, #4b3fb0 0%, #231d55 45%, #121216 100%)",
  pink: "radial-gradient(120% 90% at 100% 0%, #b8417a 0%, #5a1f3f 45%, #141215 100%)",
  accent: "radial-gradient(120% 90% at 0% 100%, #1f7a5c 0%, #10392c 45%, #111315 100%)",
  sky: "radial-gradient(120% 90% at 100% 100%, #2a6aa6 0%, #16324f 45%, #111316 100%)",
  warm: "radial-gradient(120% 90% at 0% 0%, #b8663a 0%, #55301d 45%, #141211 100%)",
};

export function Stage({ tint, className = "", children, innerRef }) {
  return (
    <div
      ref={innerRef}
      className={`stage h-[280px] sm:h-[300px] ${className}`}
      style={{
        backgroundColor: "#121316",
        backgroundImage: `radial-gradient(rgba(255,255,255,0.09) 1px, transparent 1.2px), ${TINTS[tint]}`,
        backgroundSize: "18px 18px, 100% 100%",
      }}
    >
      {children}
    </div>
  );
}

function Sample({ children }) {
  return <span className="absolute bottom-2.5 right-3 z-10 text-[10px] text-white/55">{children}</span>;
}

function Check({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={`size-3.5 ${className}`} fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
      <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ——— Views (NotChatBot): pedís un dashboard y se arma con métricas en vivo; después lo iterás ——— */

const VIEWS_STEPS = [2600, 1100, 3400, 2600, 1000, 4200];
const CHANNELS = [
  { name: "WhatsApp", value: 0.92 },
  { name: "Instagram", value: 0.64 },
  { name: "Web", value: 0.41 },
  { name: "Email", value: 0.22 },
];
const HOURS = [0.2, 0.28, 0.35, 0.6, 0.82, 0.74, 0.9, 0.66, 0.5, 0.58, 0.38, 0.3];

export function ViewsVisual({ tint }) {
  const { lang } = useCopy();
  const [ref, inView] = useInView();
  const step = useScript(VIEWS_STEPS, inView);
  const es = lang === "es";
  const p1 = es ? "Armame un dashboard con las conversaciones de esta semana por canal" : "Build me a dashboard of this week's conversations by channel";
  const p2 = es ? "Sumale las conversaciones por hora" : "Add conversations by hour";
  const t1 = useTyping(p1, inView, 28, step === 0);
  const t2 = useTyping(p2, step >= 3);
  const showDash = step >= 2;
  const showHours = step >= 5;
  const generating = step === 1 || step === 4;
  return (
    <Stage tint={tint} innerRef={ref}>
      <div className="absolute inset-0 grid grid-cols-1 gap-3 p-3 sm:grid-cols-[38%_1fr] sm:p-4">
        {/* Chat */}
        <div className="panel flex min-h-0 flex-col gap-2 p-3 max-sm:hidden">
          <div className="flex items-center justify-between text-[11px] text-white/60">
            <span>Views</span>
            <span className="flex items-center gap-1">
              <span className="size-1.5 rounded-full bg-[var(--accent)] anim-breathe" />
              {es ? "IA" : "AI"}
            </span>
          </div>
          <p className="self-end rounded-xl rounded-br-sm bg-white/10 px-2.5 py-1.5 text-[12px] leading-[17px]">
            {t1.text}
            {!t1.done && <span className="caret" />}
          </p>
          {step >= 2 && (
            <p className="anim-rise text-[12px] leading-[17px] text-white/75">
              {es ? "Listo: 3 indicadores y el gráfico por canal, en tiempo real." : "Done: 3 KPIs and the by-channel chart, live."}
            </p>
          )}
          {step >= 3 && (
            <div className="anim-rise mt-auto flex flex-col gap-1.5">
              <span className="self-end rounded-full bg-[#a99bff33] px-2 py-0.5 text-[10px] text-[var(--violet)]">
                {es ? "desde Claude · MCP" : "from Claude · MCP"}
              </span>
              <p className="self-end rounded-xl rounded-br-sm bg-white/10 px-2.5 py-1.5 text-[12px] leading-[17px]">
                {t2.text}
                {!t2.done && <span className="caret" />}
              </p>
            </div>
          )}
        </div>

        {/* Dashboard */}
        <div className="panel relative flex min-h-0 flex-col gap-2.5 overflow-hidden p-3">
          {/* En el celular el chat no entra: el pedido va arriba del tablero. */}
          <p className="truncate rounded-lg bg-white/10 px-2.5 py-1.5 text-[11px] sm:hidden">
            {step >= 3 ? t2.text : t1.text}
            <span className="caret" />
          </p>
          <div className="flex items-center justify-between">
            <span className="text-[12px] font-medium">{es ? "Conversaciones · esta semana" : "Conversations · this week"}</span>
            <span className="flex items-center gap-1 text-[10px] text-[var(--accent)]">
              <span className="size-1.5 rounded-full bg-[var(--accent)] anim-breathe" />
              {es ? "En vivo" : "Live"}
            </span>
          </div>
          {!showDash ? (
            <div className="grid flex-1 grid-cols-3 gap-2" aria-hidden="true">
              {[0, 1, 2].map((i) => (
                <div key={i} className={`rounded-lg ${generating ? "shimmer" : "bg-white/5"}`} />
              ))}
            </div>
          ) : (
            <>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { k: es ? "Conversaciones" : "Conversations", v: "1.284" },
                  { k: es ? "Resueltas por IA" : "Solved by AI", v: "82%" },
                  { k: es ? "Respuesta" : "Response", v: "12 s" },
                ].map((kpi, i) => (
                  <div key={kpi.k} className="anim-rise rounded-lg bg-white/[0.06] p-2" style={{ animationDelay: `${i * 90}ms` }}>
                    <p className="truncate text-[10px] text-white/55">{kpi.k}</p>
                    <p className="text-[17px] font-medium leading-6 tabular-nums">{kpi.v}</p>
                  </div>
                ))}
              </div>
              <div className={`grid min-h-0 flex-1 gap-2 ${showHours ? "grid-cols-2" : "grid-cols-1"}`}>
                <div className="flex min-h-0 flex-col justify-end gap-1.5 rounded-lg bg-white/[0.04] p-2">
                  {CHANNELS.map((c, i) => (
                    <div key={c.name} className="flex items-center gap-2">
                      <span className="w-14 shrink-0 truncate text-[10px] text-white/60">{c.name}</span>
                      <span className="h-2 flex-1 rounded-full bg-white/5">
                        <span
                          className="anim-grow-x block h-full rounded-full bg-[var(--violet)]"
                          style={{ width: `${c.value * 100}%`, animationDelay: `${200 + i * 90}ms` }}
                        />
                      </span>
                    </div>
                  ))}
                </div>
                {showHours && (
                  <div className="anim-rise flex min-h-0 items-end gap-[3px] rounded-lg bg-white/[0.04] p-2">
                    {HOURS.map((h, i) => (
                      <span
                        
                        key={i}
                        className="anim-grow-y flex-1 rounded-t-sm bg-[var(--accent)]"
                        style={{ height: `${h * 100}%`, animationDelay: `${i * 50}ms` }}
                      />
                    ))}
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
      <Sample>{es ? "datos de ejemplo" : "sample data"}</Sample>
    </Stage>
  );
}

/* ——— FACHA: de la foto del producto a la campaña ——— */

const FACHA_STEPS = [1800, 1500, 3800];
const FACHA_OUT = [
  { src: "/milestones/16-petroleum-hoodie-studio.webp", alt: { es: "El buzo en una foto de estudio", en: "The hoodie in a studio shot" } },
  { src: "/milestones/buzo-petroleo-calle.webp", alt: { es: "El buzo en la calle", en: "The hoodie on the street" } },
  { src: "/milestones/19-nimbo-ad.webp", alt: { es: "Un anuncio de la campaña", en: "A campaign ad" } },
];

export function FachaVisual({ tint }) {
  const { lang, pick } = useCopy();
  const [ref, inView] = useInView();
  const step = useScript(FACHA_STEPS, inView);
  return (
    <Stage tint={tint} innerRef={ref}>
      <div className="absolute inset-0 flex flex-col gap-2.5 p-3 sm:p-4">
        <div className="panel flex items-center gap-2.5 p-2">
          <span className="relative size-11 shrink-0 overflow-hidden rounded-lg bg-white">
            <Image src="/milestones/15-petroleum-hoodie-product.webp" alt={lang === "es" ? "Foto del producto: un buzo" : "Product photo: a hoodie"} fill sizes="44px" className="object-contain" />
          </span>
          <p className="text-[12px] leading-4">
            {lang === "es" ? "Armame la campaña del Buzo Petróleo" : "Make the campaign for the Petróleo hoodie"}
          </p>
        </div>
        <div className="grid min-h-0 flex-1 grid-cols-3 gap-2">
          {FACHA_OUT.map((item, i) => (
            <div key={item.src} className="relative overflow-hidden rounded-xl bg-white/5">
              {step === 1 && <div className="shimmer absolute inset-0" />}
              {step >= 2 && (
                <div className="anim-rise absolute inset-0" style={{ animationDelay: `${i * 120}ms` }}>
                  <Image src={item.src} alt={pick(item.alt)} fill sizes="(min-width: 1024px) 120px, 30vw" className="object-cover" />
                </div>
              )}
            </div>
          ))}
        </div>
        <p className="flex items-center gap-1.5 text-[11px] text-white/70">
          {step >= 2 ? (
            <>
              <Check className="text-[var(--accent)]" />
              {lang === "es" ? "15 fotos y 1 video listos" : "15 photos and 1 video ready"}
            </>
          ) : (
            <span className="anim-breathe">{lang === "es" ? "Generando…" : "Generating…"}</span>
          )}
        </p>
      </div>
    </Stage>
  );
}

/* ——— harness-os: un ticket viaja de Notion al Pull Request ——— */

const HARNESS_STEPS = [1300, 1300, 1300, 1300, 2600];
const COLUMNS = { es: ["Ready", "Planifica", "Programa", "Revisa"], en: ["Ready", "Plans", "Codes", "Reviews"] };

export function HarnessVisual({ tint }) {
  const { lang } = useCopy();
  const [ref, inView] = useInView();
  const step = useScript(HARNESS_STEPS, inView);
  const col = Math.min(step, 3);
  const cols = COLUMNS[lang];
  return (
    <Stage tint={tint} innerRef={ref}>
      <div className="absolute inset-0 flex flex-col gap-3 p-3 sm:p-4">
        <div className="grid min-h-0 flex-1 grid-cols-4 gap-2">
          {cols.map((name, i) => (
            <div key={name} className="panel flex min-h-0 flex-col gap-1.5 p-2">
              <span className="truncate text-[9px] font-medium uppercase text-white/55 sm:text-[10px] sm:tracking-wider">{name}</span>
              {/* Tickets quietos de fondo */}
              <span className="h-6 rounded-md bg-white/[0.05]" />
              {i % 2 === 0 && <span className="h-6 rounded-md bg-white/[0.05]" />}
              {col === i && step < 4 && (
                <span key={step} className="anim-rise rounded-md border border-[#8ff0c880] bg-[#8ff0c826] px-1.5 py-1 text-[10px] leading-[13px]">
                  {lang === "es" ? "Exportar a CSV" : "Export to CSV"}
                  {i > 0 && i < 4 && <span className="anim-breathe mt-0.5 block text-[9px] text-[var(--accent)]">{lang === "es" ? "agente…" : "agent…"}</span>}
                </span>
              )}
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between gap-2">
          <span
            className={`flex h-8 items-center gap-1.5 rounded-full px-3 text-[12px] font-medium transition-all duration-500 ${
              step >= 4 ? "bg-[var(--accent)] text-[var(--accent-ink)]" : "bg-white/10 text-white/50"
            }`}
          >
            {step >= 4 && <Check />}
            {lang === "es" ? "Pull Request listo para revisar" : "Pull Request ready for review"}
          </span>
          <span className="text-right text-[11px] leading-4 text-white/70">
            <span className="block text-[18px] font-medium leading-6 text-white tabular-nums">435</span>
            {lang === "es" ? "tareas en 4 semanas" : "tasks in 4 weeks"}
          </span>
        </div>
      </div>
    </Stage>
  );
}

/* ——— Voz: le hablás a ChatGPT y aparece el ticket en Notion ——— */

const VOICE_STEPS = [3200, 3600];

export function VoiceVisual({ tint }) {
  const { lang } = useCopy();
  const [ref, inView] = useInView();
  const step = useScript(VOICE_STEPS, inView);
  const said = lang === "es" ? "“Quiero que los usuarios puedan exportar sus datos a CSV”" : "“I want users to be able to export their data to CSV”";
  const typed = useTyping(said, inView, 40, step === 0);
  return (
    <Stage tint={tint} innerRef={ref}>
      <div className="absolute inset-0 flex flex-col gap-3 p-3 sm:p-4">
        <div className="panel flex items-center gap-3 p-3">
          <span className="grid size-10 shrink-0 place-items-center rounded-full bg-white text-[#111]">
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <rect x="9" y="3" width="6" height="11" rx="3" />
              <path d="M5 11a7 7 0 0 0 14 0M12 18v3" strokeLinecap="round" />
            </svg>
          </span>
          <div className="flex h-8 flex-1 items-center gap-[3px]" aria-hidden="true">
            {Array.from({ length: 28 }, (_, i) => (
              <span
                
                key={i}
                className={`w-[3px] flex-1 rounded-full bg-white/70 ${step === 0 ? "anim-wave" : ""}`}
                style={{ height: `${30 + ((i * 37) % 70)}%`, animationDelay: `${(i % 7) * 90}ms`, transform: step === 0 ? undefined : "scaleY(0.25)" }}
              />
            ))}
          </div>
          <span className="text-[10px] text-white/55">ChatGPT</span>
        </div>
        <p className="px-1 text-[13px] leading-5 text-white/85">
          {typed.text}
          {!typed.done && <span className="caret" />}
        </p>
        <div className="mt-auto">
          {step >= 1 ? (
            <div className="anim-rise panel p-3">
              <div className="flex items-center justify-between text-[10px] text-white/55">
                <span>Notion · Development Backlog</span>
                <span className="rounded-full bg-[#ff7ab833] px-2 py-0.5 text-[var(--pink)]">Ready</span>
              </div>
              <p className="mt-1.5 text-[13px] font-medium">{lang === "es" ? "Exportar los datos a CSV" : "Export data to CSV"}</p>
              <p className="mt-1 text-[11px] leading-4 text-white/60">
                {lang === "es" ? "3 criterios de aceptación · Feature · P2" : "3 acceptance criteria · Feature · P2"}
              </p>
            </div>
          ) : (
            <div className="h-[86px] rounded-[14px] border border-dashed border-white/15" />
          )}
        </div>
      </div>
    </Stage>
  );
}

/* ——— SEO: la home en celular, de 7,2 s a menos de 3 s ——— */

const SEO_STEPS = [1300, 2600, 3600];

export function SeoVisual({ tint }) {
  const { lang } = useCopy();
  const [ref, inView] = useInView();
  const step = useScript(SEO_STEPS, inView);
  const fast = step >= 1;
  const checks = lang === "es" ? ["Datos estructurados", "llms.txt para las IAs", "Blog con agente de SEO"] : ["Structured data", "llms.txt for AIs", "Blog run by an SEO agent"];
  return (
    <Stage tint={tint} innerRef={ref}>
      <div className="absolute inset-0 flex flex-col gap-3 p-3 sm:p-4">
        <div className="panel p-3">
          <p className="text-[11px] text-white/60">{lang === "es" ? "Home de facha.app en celular" : "facha.app home on mobile"}</p>
          <p className="mt-1 flex items-baseline gap-1.5">
            <span className={`text-[30px] font-medium leading-9 tabular-nums transition-colors duration-700 ${fast ? "text-[var(--accent)]" : "text-[#ff8a7a]"}`}>
              {fast ? "2,9 s" : "7,2 s"}
            </span>
            <span className="text-[11px] text-white/55">{lang === "es" ? "hasta ver la página" : "until the page shows"}</span>
          </p>
          <span className="mt-2 block h-2 rounded-full bg-white/10">
            <span
              className={`block h-full rounded-full transition-all duration-[1600ms] ease-out ${fast ? "bg-[var(--accent)]" : "bg-[#ff8a7a]"}`}
              style={{ width: fast ? "29%" : "72%" }}
            />
          </span>
        </div>
        <ul className="flex flex-col gap-1.5">
          {checks.map((c, i) => (
            <li key={c} className={`flex items-center gap-2 text-[12px] ${step >= 2 ? "anim-rise" : "opacity-0"}`} style={{ animationDelay: `${i * 140}ms` }}>
              <span className="grid size-5 place-items-center rounded-full bg-[#8ff0c833] text-[var(--accent)]">
                <Check />
              </span>
              {c}
            </li>
          ))}
        </ul>
      </div>
      <Sample>{lang === "es" ? "pruebas de laboratorio" : "lab tests"}</Sample>
    </Stage>
  );
}

/* ——— Persi: registrás un gasto hablándole ——— */

const PERSI_STEPS = [2400, 1000, 4000];
const MONTH = [
  { k: { es: "Súper", en: "Groceries" }, v: 0.78 },
  { k: { es: "Casa", en: "Home" }, v: 0.6 },
  { k: { es: "Salidas", en: "Going out" }, v: 0.42 },
  { k: { es: "Transporte", en: "Transport" }, v: 0.26 },
];

export function PersiVisual({ tint }) {
  const { lang, pick } = useCopy();
  const [ref, inView] = useInView();
  const step = useScript(PERSI_STEPS, inView);
  const msg = lang === "es" ? "gasté 28 lucas en Coto con la Visa" : "spent 28k at the supermarket with my Visa";
  const typed = useTyping(msg, inView, 34, step === 0);
  return (
    <Stage tint={tint} innerRef={ref}>
      <div className="absolute inset-0 flex flex-col gap-2.5 p-3 sm:p-4">
        <p className="self-end rounded-xl rounded-br-sm px-2.5 py-1.5 text-[12px] leading-[17px]" style={{ background: "rgba(255,255,255,0.12)" }}>
          {typed.text}
          {!typed.done && <span className="caret" />}
        </p>
        {step === 1 && <span className="anim-breathe text-[11px] text-white/60">Persi AI…</span>}
        {step >= 2 && (
          <>
            <div className="anim-rise panel p-2.5">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-[11px] text-[var(--accent)]">
                  <Check /> {lang === "es" ? "Gasto registrado" : "Expense logged"}
                </span>
                <span className="text-[10px] text-white/50">{lang === "es" ? "Deshacer" : "Undo"}</span>
              </div>
              <p className="mt-1 flex items-baseline justify-between gap-2">
                <span className="text-[12px]">{lang === "es" ? "Coto · Supermercado" : "Supermarket"}</span>
                <span className="text-[15px] font-medium tabular-nums">$ 28.000</span>
              </p>
              <p className="text-[10px] text-white/55">Visa · {lang === "es" ? "hoy" : "today"}</p>
            </div>
            <div className="anim-rise flex flex-col gap-1.5" style={{ animationDelay: "160ms" }}>
              {MONTH.map((m, i) => (
                <div key={m.k.es} className="flex items-center gap-2">
                  <span className="w-[68px] shrink-0 truncate text-[10px] text-white/60">{pick(m.k)}</span>
                  <span className="h-1.5 flex-1 rounded-full bg-white/10">
                    <span className="anim-grow-x block h-full rounded-full bg-[var(--warm)]" style={{ width: `${m.v * 100}%`, animationDelay: `${200 + i * 80}ms` }} />
                  </span>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
      <Sample>{lang === "es" ? "datos de ejemplo" : "sample data"}</Sample>
    </Stage>
  );
}

/* ——— Grayola: de developer a Tech Lead ——— */

const GRAYOLA_STEPS = [1400, 1800, 3200];

export function GrayolaVisual({ tint }) {
  const { lang } = useCopy();
  const [ref, inView] = useInView();
  const step = useScript(GRAYOLA_STEPS, inView);
  const months = lang === "es" ? ["May", "Jun", "Jul", "Ago", "Sep", "Oct"] : ["May", "Jun", "Jul", "Aug", "Sep", "Oct"];
  return (
    <Stage tint={tint} innerRef={ref}>
      <div className="absolute inset-0 flex flex-col justify-center gap-4 p-3 sm:p-4">
        <div className="flex flex-col gap-2">
          <span className={`panel self-start px-3 py-2 text-[12px] ${step >= 0 ? "anim-rise" : ""}`}>Full Stack Developer</span>
          {step >= 1 && (
            <span className="anim-rise self-end rounded-[14px] bg-[var(--accent)] px-3 py-2 text-[13px] font-medium text-[var(--accent-ink)]">
              Tech Lead
            </span>
          )}
        </div>
        <div>
          <span className="relative block h-1.5 rounded-full bg-white/10">
            <span
              className="block h-full rounded-full bg-[var(--accent)] transition-all duration-[1400ms] ease-out"
              style={{ width: step === 0 ? "10%" : step === 1 ? "55%" : "100%" }}
            />
            <span className="absolute top-1/2 size-3 -translate-y-1/2 rounded-full border-2 border-[#111] bg-white" style={{ left: "calc(55% - 6px)" }} />
          </span>
          <div className="mt-2 flex justify-between text-[10px] text-white/55">
            {months.map((m) => (
              <span key={m}>{m}</span>
            ))}
          </div>
        </div>
        {step >= 2 && (
          <div className="anim-rise flex flex-wrap gap-1.5">
            {(lang === "es" ? ["Cuentas", "Proyectos", "Suscripciones"] : ["Accounts", "Projects", "Subscriptions"]).map((x) => (
              <span key={x} className="chip bg-white/10 text-white/80">
                <Check className="text-[var(--accent)]" /> {x}
              </span>
            ))}
          </div>
        )}
      </div>
    </Stage>
  );
}

/* ——— Megapix: pagar con Pix ——— */

const MEGAPIX_STEPS = [1600, 1400, 3400];

function FakeQr() {
  // Un patrón fijo con forma de QR: es decorativo.
  const cells = [];
  for (let y = 0; y < 13; y++) {
    for (let x = 0; x < 13; x++) {
      const finder = (x < 4 && y < 4) || (x > 8 && y < 4) || (x < 4 && y > 8);
      const on = finder ? (x % 3 === 0 || y % 3 === 0 || (x % 3 === 1 && y % 3 === 1)) : (x * 7 + y * 11 + x * y) % 3 === 0;
      if (on) cells.push(<rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" />);
    }
  }
  return (
    <svg viewBox="0 0 13 13" className="size-full" fill="#111" aria-hidden="true" shapeRendering="crispEdges">
      {cells}
    </svg>
  );
}

export function MegapixVisual({ tint }) {
  const { lang } = useCopy();
  const [ref, inView] = useInView();
  const step = useScript(MEGAPIX_STEPS, inView);
  return (
    <Stage tint={tint} innerRef={ref}>
      <div className="absolute inset-0 flex items-center justify-center gap-4 p-3 sm:p-4">
        <div className="panel flex w-[150px] flex-col items-center gap-2 p-3">
          <span className="text-[11px] text-white/60">{lang === "es" ? "Pagá con Pix" : "Pay with Pix"}</span>
          <span className={`relative size-[96px] rounded-lg bg-white p-1.5 transition-opacity ${step === 2 ? "opacity-30" : ""}`}>
            <FakeQr />
            {step === 1 && <span className="absolute inset-x-1.5 top-1/2 h-0.5 bg-[var(--accent)] anim-breathe" />}
          </span>
          <span className="h-5 text-[11px]">
            {step === 1 && <span className="anim-breathe text-white/70">{lang === "es" ? "Procesando…" : "Processing…"}</span>}
            {step === 2 && (
              <span className="anim-rise flex items-center gap-1 text-[var(--accent)]">
                <Check /> {lang === "es" ? "Pago aprobado" : "Payment approved"}
              </span>
            )}
          </span>
        </div>
        <div className="flex max-w-[180px] flex-col gap-2 max-sm:hidden">
          <span className="chip self-start bg-white/10 text-white/80">🇧🇷 → 🇦🇷</span>
          {step >= 2 && (
            <p className="anim-rise panel p-2.5 text-[11px] leading-4 text-white/80">
              {lang === "es"
                ? "“Lanzan una herramienta tecnológica que integra Pix y busca facilitar las transacciones de los brasileños en Argentina”"
                : "“A new tool integrates Pix to make payments easier for Brazilians in Argentina” (press)"}
            </p>
          )}
        </div>
      </div>
    </Stage>
  );
}

/* ——— Propinita: propina con QR ——— */

const PROPINITA_STEPS = [1500, 1500, 3200];

export function PropinitaVisual({ tint }) {
  const { lang } = useCopy();
  const [ref, inView] = useInView();
  const step = useScript(PROPINITA_STEPS, inView);
  const tips = ["10%", "15%", "20%"];
  return (
    <Stage tint={tint} innerRef={ref}>
      <div className="absolute inset-0 flex items-center justify-center gap-4 p-3 sm:p-4">
        <div className="panel flex w-[200px] flex-col gap-3 p-3">
          <div className="flex items-center gap-2">
            <span className="grid size-8 place-items-center rounded-full bg-[#ff7ab840] text-[14px]">🛎️</span>
            <div>
              <p className="text-[12px] font-medium">{lang === "es" ? "Mesa 4 · Tomás" : "Table 4 · Tomás"}</p>
              <p className="text-[10px] text-white/55">{lang === "es" ? "Dejá tu propina" : "Leave a tip"}</p>
            </div>
          </div>
          {step < 2 ? (
            <div className="grid grid-cols-3 gap-1.5">
              {tips.map((tip) => (
                <span
                  key={tip}
                  className={`grid h-9 place-items-center rounded-lg text-[12px] font-medium transition-colors duration-300 ${
                    step >= 1 && tip === "15%" ? "bg-[var(--pink)] text-[#1a0610]" : "bg-white/10"
                  }`}
                >
                  {tip}
                </span>
              ))}
            </div>
          ) : (
            <div className="anim-rise flex flex-col items-center gap-1 py-1">
              <span className="text-[22px]" aria-hidden="true">
                💛
              </span>
              <p className="text-[13px] font-medium">{lang === "es" ? "¡Gracias!" : "Thank you!"}</p>
              <p className="text-[10px] text-white/55">Mercado Pago</p>
            </div>
          )}
        </div>
        <p className="max-w-[150px] text-[12px] leading-[17px] text-white/75 max-sm:hidden">
          {lang === "es" ? "“Chau efectivo, hola gratitud.”" : "“Bye cash, hello gratitude.”"}
        </p>
      </div>
    </Stage>
  );
}

export const VISUALS = {
  views: ViewsVisual,
  facha: FachaVisual,
  harness: HarnessVisual,
  voice: VoiceVisual,
  seo: SeoVisual,
  persi: PersiVisual,
  grayola: GrayolaVisual,
  megapix: MegapixVisual,
  propinita: PropinitaVisual,
};
