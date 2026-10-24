"use client";

import type { Locale } from "@/lib/i18n";
import { useStepLoop } from "@/components/use-step-loop";

// Una demo animada por caso: un guion de pasos en loop con datos de ejemplo. Con movimiento reducido o
// fuera de pantalla queda en el último paso, con todo a la vista.

const cx = (...c: (string | false | undefined)[]) => c.filter(Boolean).join(" ");
const shown = (v: boolean) => (v ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0");
const pick = <T,>(locale: Locale, es: T, en: T) => (locale === "es" ? es : en);

function Check({ size = 14, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <path d="M3 8.5 6.5 12 13 4.5" />
    </svg>
  );
}

function Dots({ visible }: { visible: boolean }) {
  return (
    <span className={cx("fx-ease inline-flex gap-1", visible ? "opacity-100" : "opacity-0")}>
      <span className="fx-dot size-1.5 rounded-full bg-[#8d8b83]" />
      <span className="fx-dot size-1.5 rounded-full bg-[#8d8b83] [animation-delay:150ms]" />
      <span className="fx-dot size-1.5 rounded-full bg-[#8d8b83] [animation-delay:300ms]" />
    </span>
  );
}

// --- NotChatbot · Views: le pedís una vista a la IA y se arma el dashboard ---------------------------

const VIOLET = "#8b5cf6";

export function ViewsDemo({ locale }: { locale: Locale }) {
  const { ref, step } = useStepLoop<HTMLDivElement>(11, 620);
  const ask = pick(locale, "Mostrame las conversaciones de esta semana por canal y cuánto resolvió la IA sola", "Show me this week's conversations by channel and how much the AI solved on its own");
  const kpis = [
    { label: pick(locale, "Conversaciones", "Conversations"), value: "4.812" },
    { label: pick(locale, "Resueltas por la IA", "Solved by AI"), value: "87%" },
    { label: pick(locale, "Respuesta media", "Avg. response"), value: "12 s" },
  ];
  const channels = [
    { name: "WhatsApp", value: 92 },
    { name: "Instagram", value: 64 },
    { name: "Mercado Libre", value: 48 },
    { name: "Web", value: 27 },
  ];
  const line = "M0 34 L20 30 L40 32 L60 22 L80 24 L100 14 L120 16 L140 6";
  return (
    <div ref={ref} aria-hidden="true" className="flex flex-col gap-4 lg:flex-row">
      {/* El pedido */}
      <div className="flex flex-col gap-3 rounded-[20px] border border-white/8 bg-[#16181a] p-4 lg:w-[300px] lg:shrink-0">
        <div className="flex items-center gap-2 border-b border-white/8 pb-3">
          <span className="size-2 rounded-full" style={{ background: VIOLET }} />
          <span className="text-[13px] font-semibold">Views</span>
          <span className="ml-auto font-mono text-[11px] text-[#aeaea8]">{pick(locale, "Nueva vista", "New view")}</span>
        </div>
        <p className={cx("fx-ease self-end rounded-2xl bg-[#26292b] px-3 py-2 text-[13px] leading-5", shown(step >= 1))}>{ask}</p>
        <div className="min-h-[52px]">
          <Dots visible={step === 2} />
          <p className={cx("fx-ease text-[13px] leading-5 text-[#aeaea8]", shown(step >= 3))}>
            {pick(locale, "Armé una vista con 3 indicadores, conversaciones por canal y la tendencia de la semana.", "I built a view with 3 KPIs, conversations by channel and the week's trend.")}
          </p>
        </div>
        <span className={cx("fx-ease mt-auto inline-flex items-center gap-1.5 self-start rounded-full px-3 py-1.5 text-xs font-semibold", shown(step >= 9))} style={{ background: "rgba(139,92,246,0.16)", color: "#c4b5fd" }}>
          <Check size={12} /> {pick(locale, "Vista guardada", "View saved")}
        </span>
      </div>
      {/* El dashboard que se arma */}
      <div className="grid flex-1 grid-cols-3 gap-3">
        {kpis.map((k, i) => (
          <Tile key={k.label} ready={step >= 4 + i * 0.5} className="p-3.5">
            <p className="text-[11px] text-[#aeaea8]">{k.label}</p>
            <p className="mt-1 text-2xl font-semibold tabular-nums tracking-tight">{k.value}</p>
          </Tile>
        ))}
        <Tile ready={step >= 6} className="col-span-3 p-4 sm:col-span-2">
          <p className="text-[11px] text-[#aeaea8]">{pick(locale, "Conversaciones por canal", "Conversations by channel")}</p>
          <div className="mt-3 flex flex-col gap-2.5">
            {channels.map((c) => (
              <div key={c.name} className="grid grid-cols-[92px_minmax(0,1fr)] items-center gap-3 text-xs">
                <span className="text-[#aeaea8]">{c.name}</span>
                <span className="h-2.5 rounded-full bg-[#1c1f21]">
                  <span className="fx-ease block h-full rounded-full" style={{ width: step >= 7 ? `${c.value}%` : "0%", background: VIOLET }} />
                </span>
              </div>
            ))}
          </div>
        </Tile>
        <Tile ready={step >= 8} className="col-span-3 p-4 sm:col-span-1">
          <p className="text-[11px] text-[#aeaea8]">{pick(locale, "Tendencia", "Trend")}</p>
          <svg viewBox="0 0 140 40" className="mt-4 h-16 w-full" preserveAspectRatio="none">
            <path d={line} fill="none" stroke={VIOLET} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" pathLength={1} strokeDasharray="1" strokeDashoffset={step >= 8 ? 0 : 1} className="transition-[stroke-dashoffset] duration-1000 ease-out" />
          </svg>
        </Tile>
      </div>
    </div>
  );
}

// Un bloque del dashboard: mientras la IA lo arma se ve un esqueleto con shimmer
function Tile({ ready, className, children }: { ready: boolean; className: string; children: React.ReactNode }) {
  return (
    <div className={cx("relative overflow-hidden rounded-[16px] border border-white/8 bg-[#16181a]", className)}>
      <span className={cx("fx-shimmer fx-ease absolute inset-0", ready ? "opacity-0" : "opacity-100")} />
      <div className={cx("fx-ease relative", shown(ready))}>{children}</div>
    </div>
  );
}

// --- Grayola: un brief nuevo descuenta créditos y viaja por el tablero ------------------------------

const LIME = "#d4f25a";

export function GrayolaDemo({ locale }: { locale: Locale }) {
  const { ref, step } = useStepLoop<HTMLDivElement>(9, 700);
  const columns = pick(locale, ["Pendiente", "En diseño", "Entregado"], ["Pending", "In design", "Delivered"]);
  const moving = pick(locale, "Banner campaña Black Friday", "Black Friday campaign banner");
  const col = step < 3 ? 0 : step < 5 ? 1 : 2;
  const credits = step >= 2 ? 9 : 12;
  const others = [
    [pick(locale, "Post de lanzamiento", "Launch post"), 1],
    [pick(locale, "Video para Reels", "Reels video"), 1],
    [pick(locale, "Logo para evento", "Event logo"), 2],
    [pick(locale, "Presentación comercial", "Sales deck"), 2],
  ] as const;
  return (
    <div ref={ref} aria-hidden="true" className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-[16px] border border-white/8 bg-[#16181a] px-4 py-3">
        <span className="text-[13px] font-semibold">{pick(locale, "Plan Pro · suscripción mensual", "Pro plan · monthly subscription")}</span>
        <span className="flex items-center gap-2 text-xs">
          <span className="text-[#aeaea8]">{pick(locale, "Créditos", "Credits")}</span>
          <span className="fx-ease rounded-full px-2.5 py-1 font-semibold tabular-nums text-[#0e1012]" style={{ background: LIME }}>{credits}</span>
        </span>
        <span className={cx("fx-ease rounded-full bg-[#26292b] px-3 py-1.5 text-xs font-semibold", step === 1 ? "scale-95" : "scale-100")}>
          + {pick(locale, "Nuevo brief · 3 créditos", "New brief · 3 credits")}
        </span>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {columns.map((name, c) => (
          <div key={name} className="flex min-h-[220px] flex-col gap-2 rounded-[16px] bg-[#16181a] p-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#aeaea8]">{name}</p>
            {others.filter(([, oc]) => oc === c + 1 && c > 0).map(([label]) => (
              <span key={label} className="rounded-xl bg-[#1c1f21] px-3 py-2.5 text-xs">{label}</span>
            ))}
            {col === c && step >= 2 && (
              <span key={`${step >= 5}-${c}`} className="fx-ease rounded-xl border px-3 py-2.5 text-xs font-semibold" style={{ borderColor: LIME, background: "rgba(212,242,90,0.10)" }}>
                {moving}
                {c === 2 && (
                  <span className="mt-1.5 flex items-center gap-1 text-[11px] font-semibold" style={{ color: LIME }}>
                    <Check size={11} /> {pick(locale, "Listo para descargar", "Ready to download")}
                  </span>
                )}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// --- Alkimiaz · Megapix: cobro con PIX y conversión a USDT --------------------------------------------

const TEAL = "#3ee6c1";

export function MegapixDemo({ locale }: { locale: Locale }) {
  const { ref, step } = useStepLoop<HTMLDivElement>(8, 750);
  const paid = step >= 3;
  const converted = step >= 5;
  return (
    <div ref={ref} aria-hidden="true" className="flex flex-col items-center gap-5 sm:flex-row sm:justify-center sm:gap-8">
      {/* El celular del comercio */}
      <div className="w-[230px] rounded-[30px] border-4 border-[#26292b] bg-[#0b1513] p-4">
        <p className="text-center text-[11px] font-semibold uppercase tracking-[0.14em]" style={{ color: TEAL }}>Megapix</p>
        <p className="mt-3 text-center text-xs text-[#aeaea8]">{pick(locale, "Cobrar con PIX", "Charge with PIX")}</p>
        <p className="text-center text-2xl font-semibold tabular-nums">R$ 250,00</p>
        <div className="relative mx-auto mt-3 grid size-32 place-items-center rounded-2xl bg-white p-2">
          <div className={cx("fx-ease grid size-full grid-cols-7 gap-[2px]", paid ? "opacity-15" : "opacity-100")}>
            {Array.from({ length: 49 }, (_, i) => (
              <span key={i} className={((i * 7 + (i % 5) * 3) % 4 === 0 || [0, 1, 7, 8, 5, 6, 12, 13, 35, 36, 42, 43].includes(i)) ? "bg-[#0e1012]" : "bg-transparent"} />
            ))}
          </div>
          <span className={cx("fx-ease absolute grid size-12 place-items-center rounded-full text-[#0e1012]", paid ? "scale-100 opacity-100" : "scale-50 opacity-0")} style={{ background: TEAL }}>
            <Check size={22} />
          </span>
        </div>
        <p className="mt-3 h-4 text-center text-xs font-semibold" style={{ color: paid ? TEAL : "#aeaea8" }}>
          {step >= 1 && !paid ? pick(locale, "Esperando el pago…", "Waiting for payment…") : paid ? pick(locale, "Pago recibido", "Payment received") : ""}
        </p>
      </div>
      {/* La operación */}
      <div className="flex w-full max-w-[300px] flex-col gap-2.5">
        {[
          [pick(locale, "Pago PIX", "PIX payment"), "R$ 250,00", step >= 3],
          [pick(locale, "Acreditado", "Credited"), "R$ 250,00", step >= 4],
          [pick(locale, "Convertido a USDT", "Converted to USDT"), "≈ 44,90 USDT", converted],
        ].map(([label, value, on]) => (
          <div key={label as string} className={cx("fx-ease flex items-center justify-between rounded-[14px] border border-white/8 bg-[#16181a] px-4 py-3 text-sm", shown(on as boolean))}>
            <span className="flex items-center gap-2">
              <span className="grid size-5 place-items-center rounded-full text-[#0e1012]" style={{ background: TEAL }}><Check size={11} /></span>
              {label}
            </span>
            <span className="font-semibold tabular-nums">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// --- Novocap: el onboarding de IT de una persona nueva y su solicitud en el ERP -----------------------

const BLUE = "#3b82f6";

export function NovocapDemo({ locale }: { locale: Locale }) {
  const { ref, step } = useStepLoop<HTMLDivElement>(10, 600);
  const tasks = pick(
    locale,
    ["Usuario en Active Directory", "Licencia de Microsoft 365", "Equipo inscripto en Intune", "Acceso a Teams y SharePoint", "Rol en SAP S/4HANA"],
    ["Active Directory user", "Microsoft 365 license", "Device enrolled in Intune", "Teams and SharePoint access", "SAP S/4HANA role"],
  );
  const flow = pick(locale, ["Solicitud", "Aprobación", "Alta de rol", "Cerrada"], ["Request", "Approval", "Role created", "Closed"]);
  const flowStep = Math.min(3, Math.max(0, step - 5));
  return (
    <div ref={ref} aria-hidden="true" className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
      <div className="rounded-[20px] border border-white/8 bg-[#16181a] p-4">
        <div className="flex items-center justify-between border-b border-white/8 pb-3">
          <span className="text-[13px] font-semibold">{pick(locale, "Ingreso · Analista de Calidad", "New hire · Quality Analyst")}</span>
          <span className="font-mono text-[11px] text-[#aeaea8]">IT</span>
        </div>
        <ul className="mt-3 flex flex-col gap-2">
          {tasks.map((task, i) => {
            const done = step > i;
            return (
              <li key={task} className="flex items-center gap-2.5 rounded-xl bg-[#1c1f21] px-3 py-2.5 text-[13px]">
                <span className={cx("fx-ease grid size-5 place-items-center rounded-full", done ? "text-white" : "text-transparent")} style={{ background: done ? BLUE : "#26292b" }}>
                  <Check size={11} />
                </span>
                <span className={done ? "" : "text-[#aeaea8]"}>{task}</span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex flex-col rounded-[20px] border border-white/8 bg-[#16181a] p-4">
        <div className="flex items-center justify-between border-b border-white/8 pb-3">
          <span className="text-[13px] font-semibold">{pick(locale, "Solicitud de servicio #4721", "Service request #4721")}</span>
          <span className="rounded-full px-2.5 py-1 text-[11px] font-semibold" style={{ background: step >= 8 ? "rgba(95,181,114,0.16)" : "rgba(59,130,246,0.16)", color: step >= 8 ? "#5fb572" : "#93c5fd" }}>
            {step >= 8 ? pick(locale, "Resuelta", "Resolved") : pick(locale, "En curso", "In progress")}
          </span>
        </div>
        <p className="mt-3 text-[13px] text-[#aeaea8]">{pick(locale, "Acceso a compras en SAP S/4HANA", "Purchasing access in SAP S/4HANA")}</p>
        <ol className="mt-auto flex items-center gap-2 pt-6">
          {flow.map((label, i) => (
            <li key={label} className="flex flex-1 flex-col gap-2">
              <span className="fx-ease h-1.5 rounded-full" style={{ background: step >= 5 && i <= flowStep ? BLUE : "#26292b" }} />
              <span className={cx("text-[11px]", step >= 5 && i <= flowStep ? "text-[#f7f7f5]" : "text-[#7c7c76]")}>{label}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

// --- Propinita: escanear el QR, elegir la propina y pagar con Mercado Pago -----------------------------

const GOLD = "#e8b931";

export function PropinitaDemo({ locale }: { locale: Locale }) {
  const { ref, step } = useStepLoop<HTMLDivElement>(8, 750);
  const amounts = ["$ 500", "$ 1.000", "$ 2.000"];
  const chosen = step >= 2 ? 1 : -1;
  const paying = step >= 4;
  const done = step >= 5;
  return (
    <div ref={ref} aria-hidden="true" className="flex justify-center">
      <div className="w-[260px] rounded-[30px] border-4 border-[#26292b] bg-[#141108] p-5">
        <p className="text-center text-sm font-semibold" style={{ color: GOLD }}>propinita</p>
        <div className="relative mt-4 min-h-[290px]">
          <div className={cx("fx-ease absolute inset-0 flex flex-col gap-3", done ? "pointer-events-none opacity-0" : "opacity-100")}>
            <div className="flex items-center gap-3 rounded-2xl bg-[#1f1a0d] p-3">
              <span className="grid size-10 place-items-center rounded-full text-sm font-semibold text-[#141108]" style={{ background: GOLD }}>J</span>
              <span className="text-sm"><span className="block font-semibold">Juan</span><span className="text-xs text-[#aeaea8]">{pick(locale, "Mozo · Café Central", "Waiter · Café Central")}</span></span>
            </div>
            <p className="text-xs text-[#aeaea8]">{pick(locale, "¿Cuánto querés dejar?", "How much would you like to leave?")}</p>
            <div className="grid grid-cols-3 gap-2">
              {amounts.map((a, i) => (
                <span key={a} className="fx-ease rounded-xl border py-2.5 text-center text-xs font-semibold" style={{ borderColor: chosen === i ? GOLD : "#26292b", background: chosen === i ? "rgba(232,185,49,0.14)" : "transparent" }}>
                  {a}
                </span>
              ))}
            </div>
            <span className={cx("fx-ease mt-auto rounded-full py-3 text-center text-sm font-semibold text-white", step === 3 ? "scale-95" : "scale-100")} style={{ background: "#009ee3" }}>
              {paying ? pick(locale, "Procesando…", "Processing…") : pick(locale, "Pagar con Mercado Pago", "Pay with Mercado Pago")}
            </span>
          </div>
          <div className={cx("fx-ease absolute inset-0 flex flex-col items-center justify-center gap-3 text-center", done ? "opacity-100" : "pointer-events-none opacity-0")}>
            <span className="grid size-14 place-items-center rounded-full text-[#141108]" style={{ background: GOLD }}><Check size={26} /></span>
            <p className="text-lg font-semibold">{pick(locale, "¡Gracias!", "Thank you!")}</p>
            <p className="text-sm text-[#aeaea8]">{pick(locale, "Juan recibió tu propina de $ 1.000", "Juan received your $1,000 tip")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- Persi: dictás un gasto, el asistente lo registra y el mes se actualiza ----------------------------

const PERSI = "#3b82f6";

export function PersiDemo({ locale }: { locale: Locale }) {
  const { ref, step } = useStepLoop<HTMLDivElement>(10, 600);
  const saved = step >= 5;
  return (
    <div ref={ref} aria-hidden="true" className="grid gap-4 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
      <div className="flex flex-col gap-3 rounded-[20px] border border-white/8 bg-[#16181a] p-4">
        <div className="flex items-center gap-2 border-b border-white/8 pb-3">
          <span className="grid size-6 place-items-center rounded-md text-xs font-bold text-white" style={{ background: PERSI }}>P</span>
          <span className="text-[13px] font-semibold">Persi AI</span>
        </div>
        <p className={cx("fx-ease flex items-center gap-2 self-end rounded-2xl bg-[#26292b] px-3 py-2 text-[13px]", shown(step >= 1))}>
          <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" className="text-[#ff6a3d]"><rect x="5" y="1" width="6" height="10" rx="3" /><path d="M3 8a5 5 0 0 0 10 0" stroke="currentColor" strokeWidth="1.5" fill="none" /></svg>
          {pick(locale, "Gasté 28 lucas en Coto con la Visa", "Spent 28k at Coto with the Visa")}
        </p>
        <div className="min-h-[120px]">
          <Dots visible={step === 2} />
          <div className={cx("fx-ease flex flex-col gap-2", shown(step >= 3))}>
            <span className="inline-flex w-max items-center gap-1.5 rounded-lg border border-white/8 bg-[#1c1f21] px-2 py-1 font-mono text-[11px] text-[#aeaea8]">createTransaction</span>
            <div className={cx("fx-ease rounded-xl border bg-[#1c1f21] p-3", shown(step >= 4))} style={{ borderColor: saved ? "rgba(95,181,114,0.4)" : "rgba(247,247,245,0.08)" }}>
              <div className="flex items-center justify-between text-sm">
                <span className="font-semibold">Coto</span>
                <span className="font-semibold tabular-nums">$ 28.000,00</span>
              </div>
              <p className="mt-1 text-xs text-[#aeaea8]">{pick(locale, "Supermercado · Visa · hoy", "Groceries · Visa · today")}</p>
              <p className={cx("fx-ease mt-2 flex items-center gap-1 text-[11px] font-semibold text-[#5fb572]", saved ? "opacity-100" : "opacity-0")}>
                <Check size={11} /> {pick(locale, "Registrado", "Logged")}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 rounded-[20px] border border-white/8 bg-[#16181a] p-4">
        <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#aeaea8]">{pick(locale, "Este mes", "This month")}</p>
        <p className="text-3xl font-semibold tabular-nums tracking-tight">{saved ? "$ 412.300" : "$ 384.300"}</p>
        <p className="text-xs text-[#aeaea8]">{pick(locale, "Gastos · vs. mismo período del mes pasado", "Spending · vs. same period last month")}</p>
        <div className="mt-2 flex flex-col gap-2.5">
          {[
            [pick(locale, "Supermercado", "Groceries"), saved ? 78 : 62],
            [pick(locale, "Servicios", "Utilities"), 54],
            [pick(locale, "Transporte", "Transport"), 31],
          ].map(([label, value]) => (
            <div key={label as string} className="grid grid-cols-[96px_minmax(0,1fr)] items-center gap-3 text-xs">
              <span className="text-[#aeaea8]">{label}</span>
              <span className="h-2.5 rounded-full bg-[#1c1f21]">
                <span className="fx-ease block h-full rounded-full" style={{ width: `${value}%`, background: PERSI }} />
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const DEMOS: Record<string, (props: { locale: Locale }) => React.ReactNode> = {
  notchatbot: ViewsDemo,
  grayola: GrayolaDemo,
  alkimiaz: MegapixDemo,
  novocap: NovocapDemo,
  propinita: PropinitaDemo,
  persi: PersiDemo,
};

// Se elige del lado del cliente: un componente de servidor no puede recibir el mapa de componentes
export function CaseDemo({ slug, locale }: { slug: string; locale: Locale }) {
  const Demo = DEMOS[slug];
  return Demo ? <Demo locale={locale} /> : null;
}
