import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";
import { BrandDemo, ChatDemo, GenerationDemo, OpportunitiesDemo, StoreConnectDemo } from "@/components/facha/demos";
import { ui, type Locale } from "@/lib/i18n";

// Las tipografías de FACHA, solo para sus demos
const satoshi = localFont({ src: "../../fonts/satoshi-700.woff2", weight: "700", variable: "--font-satoshi", display: "swap" });
const switzer = localFont({
  src: [
    { path: "../../fonts/switzer-400.woff2", weight: "400" },
    { path: "../../fonts/switzer-500.woff2", weight: "500" },
    { path: "../../fonts/switzer-600.woff2", weight: "600" },
  ],
  variable: "--font-switzer",
  display: "swap",
});

const copy = {
  es: {
    status: "En construcción y validación",
    summary: "IA para marcas de ropa que venden online: entiende la marca y el catálogo, detecta qué producto conviene mover y deja el contenido listo para publicar.",
    meta: [
      ["Rol", "Producto, diseño e ingeniería"],
      ["Período", "2026 — en curso"],
      ["Stack", "Next.js 16 · Convex · Clerk · MCP"],
    ],
    cards: {
      brand: ["Conoce la marca.", "Lee el catálogo y la web.", "Trae el catálogo de la tienda, lo ordena y entiende cómo es la marca."],
      opportunities: ["Detecta qué mover.", "Sobre productos reales.", "Pocas oportunidades concretas, con la evidencia que las respalda."],
      generation: ["Crea el contenido.", "Fiel a la prenda.", "Imágenes y textos listos para publicar."],
      chat: ["Desde tu chat,", "con el catálogo adentro.", "Un servidor MCP para usar FACHA desde Claude o ChatGPT."],
      connect: ["Conecta la tienda.", "En un clic.", "OAuth con Shopify y Mercado Libre. Catálogo, stock y ventas se sincronizan a diario."],
    },
    rackAlt: "Perchero de una tienda de ropa",
    demoNote: "Demos con datos de ejemplo de una marca ficticia, recreadas a partir de la app.",
    problemLabel: "01 — El problema",
    problemTitle: "En una marca chica de ropa, una sola persona lleva el catálogo, Instagram, la tienda y las campañas.",
    problemBody: "La información está repartida entre la tienda, Meta, las fotos, el stock y las métricas. Las herramientas de IA arrancan en la generación de imágenes, que es el final del problema, no el principio.",
    builtLabel: "02 — Qué construí",
    builtTitle: "Del onboarding al anuncio terminado.",
    built: [
      "Onboarding que analiza la web y arma el kit de marca",
      "Integraciones OAuth con sincronización diaria",
      "Oportunidades sobre productos reales, con orden determinístico",
      "Brief comercial → conceptos → imagen + copy",
      "Servidor MCP para Claude y ChatGPT",
    ],
    adAlt: "Un anuncio terminado generado por FACHA para una marca ficticia",
    ready: "Lista para publicar",
    decisionsLabel: "03 — Decisiones clave",
    decisions: [
      ["La IA propone, el servidor verifica", "Toda recomendación cita evidencia que el servidor comprueba. Lo que no tiene sustento, se descarta."],
      ["Señales simples antes que modelos opacos", "Oportunidades trazables y explicables hasta tener datos de qué funciona."],
      ["La imagen no es el producto", "Generar es una capacidad. El valor está en decidir qué mostrar."],
    ],
    todayLabel: "04 — Dónde está hoy",
    todayTitle: "Producto propio en etapa de validación, con el sitio y la app en producción.",
    todayBody: "No muestro tracción ni testimonios porque todavía no los tengo. Cuando haya resultados reales, van a estar acá.",
    next: "Siguiente",
  },
  en: {
    status: "Building and validating",
    summary: "AI for fashion brands that sell online: it understands the brand and catalog, spots which product to push and leaves the content ready to publish.",
    meta: [
      ["Role", "Product, design and engineering"],
      ["Period", "2026 — ongoing"],
      ["Stack", "Next.js 16 · Convex · Clerk · MCP"],
    ],
    cards: {
      brand: ["Knows the brand.", "Reads the catalog and the website.", "Brings in the store catalog, organizes it and understands what the brand is like."],
      opportunities: ["Spots what to push.", "On real products.", "A few concrete opportunities, backed by evidence."],
      generation: ["Creates the content.", "True to the garment.", "Images and copy ready to publish."],
      chat: ["From your chat,", "with the catalog inside.", "An MCP server to use FACHA from Claude or ChatGPT."],
      connect: ["Connects the store.", "In one click.", "OAuth with Shopify and Mercado Libre. Catalog, stock and sales sync daily."],
    },
    rackAlt: "Clothing rack in a store",
    demoNote: "Demos with sample data from a fictional brand, recreated from the app.",
    problemLabel: "01 — The problem",
    problemTitle: "At a small fashion brand, one person runs the catalog, Instagram, the store and the campaigns.",
    problemBody: "Information is scattered across the store, Meta, photos, stock and metrics. AI tools start at image generation, which is the end of the problem, not the beginning.",
    builtLabel: "02 — What I built",
    builtTitle: "From onboarding to the finished ad.",
    built: [
      "Onboarding that reads the website and builds the brand kit",
      "OAuth integrations with daily sync",
      "Opportunities on real products, with deterministic ordering",
      "Commercial brief → concepts → image + copy",
      "MCP server for Claude and ChatGPT",
    ],
    adAlt: "A finished ad generated by FACHA for a fictional brand",
    ready: "Ready to publish",
    decisionsLabel: "03 — Key decisions",
    decisions: [
      ["AI proposes, the server verifies", "Every recommendation cites evidence the server checks. Anything unsupported is dropped."],
      ["Simple signals before opaque models", "Traceable, explainable opportunities until there's data on what works."],
      ["The image is not the product", "Generating is a capability. The value is in deciding what to show."],
    ],
    todayLabel: "04 — Where it stands",
    todayTitle: "My own product, in validation, with the website and app in production.",
    todayBody: "I don't show traction or testimonials because I don't have them yet. When there are real results, they'll be here.",
    next: "Next",
  },
};

const INTEGRATIONS = [
  { name: "Shopify", icon: "/facha-demo/ic-shopify.svg" },
  { name: "Mercado Libre", icon: "/facha-demo/ic-ml.svg" },
  { name: "Tiendanube", icon: "/facha-demo/ic-tn.svg" },
  { name: "Instagram", icon: "/facha-demo/ic-ig.svg" },
  { name: "Meta Ads", icon: "/facha-demo/ic-meta.svg" },
];

function CardTitle({ text, size = "text-[26px]" }: { text: string[]; size?: string }) {
  return (
    <>
      <h3 className={`font-[family-name:var(--font-satoshi)] ${size} leading-[1.02] tracking-[-0.035em]`}>
        <span className="font-bold">{text[0]}</span> <span className="font-medium text-[#aeaea8]">{text[1]}</span>
      </h3>
      <p className="mt-1.5 text-sm leading-[21px] text-[#aeaea8]">{text[2]}</p>
    </>
  );
}

export function fachaSummary(locale: Locale) {
  return copy[locale].summary;
}

export function FachaCase({ locale }: { locale: Locale }) {
  const c = copy[locale];
  const t = ui[locale];
  const card = "flex flex-col gap-5 rounded-[28px] border border-[rgba(247,247,245,0.08)] bg-[#16181a] p-6 lg:p-7";

  return (
    <main className={`${satoshi.variable} ${switzer.variable}`}>
      <div className="mx-auto flex max-w-[1360px] items-center justify-between gap-4 px-5 sm:px-10">
        <Link href={`/${locale}#proyectos`} className="inline-flex items-center gap-2.5 text-sm text-muted transition-colors hover:text-fg">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M13 8H3M7 4 3 8l4 4" />
          </svg>
          {t.back}
        </Link>
        <span className="font-mono text-xs text-subtle">{t.personalProject}</span>
      </div>

      {/* Encabezado */}
      <section className="mx-auto grid max-w-[1360px] items-end gap-10 px-5 pt-12 sm:px-10 lg:grid-cols-[minmax(0,1fr)_420px] lg:gap-16 lg:pt-14">
        <div className="flex flex-col gap-5">
          <span className="self-start rounded-full border border-control px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-muted">{c.status}</span>
          <h1 className="text-7xl font-medium leading-[0.85] tracking-[-0.06em] sm:text-[120px]">FACHA</h1>
          <p className="max-w-[680px] text-lg leading-snug text-muted sm:text-[22px]">{c.summary}</p>
        </div>
        <dl className="grid grid-cols-2 gap-6 rounded-[20px] border border-border bg-surface p-7">
          {c.meta.map(([label, value]) => (
            <div key={label}>
              <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-subtle">{label}</dt>
              <dd className="mt-1.5 text-[15px]">{value}</dd>
            </div>
          ))}
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-subtle">Link</dt>
            <dd className="mt-1.5 text-[15px]">
              <a href="https://facha.app" target="_blank" rel="noreferrer" className="hover:text-accent">facha.app ↗</a>
            </dd>
          </div>
        </dl>
      </section>

      {/* El producto funcionando: demos con el lenguaje de la landing de FACHA */}
      <section className="mx-auto max-w-[1360px] px-5 pt-14 sm:px-10">
        <div className="grid gap-4 rounded-[32px] border border-[rgba(247,247,245,0.06)] bg-[#0e1012] p-4 font-[family-name:var(--font-switzer)] text-[#f7f7f5] sm:p-7 lg:grid-cols-12">
          <article className="relative min-h-[440px] overflow-hidden rounded-[28px] bg-[#1c1f21] lg:col-span-5">
            <Image src="/facha-demo/rack.webp" alt={c.rackAlt} fill sizes="(min-width: 1024px) 520px, 100vw" className="object-cover" />
            <div className="absolute inset-x-0 top-0 bg-gradient-to-b from-[rgba(14,16,18,0.96)] via-[rgba(14,16,18,0.82)] via-55% to-transparent px-6 pb-[72px] pt-6 lg:px-7 lg:pt-7">
              <CardTitle text={c.cards.brand} size="text-[30px]" />
            </div>
            <BrandDemo locale={locale} />
          </article>

          <article className={`${card} lg:col-span-4`}>
            <OpportunitiesDemo locale={locale} />
            <div className="mt-auto"><CardTitle text={c.cards.opportunities} /></div>
          </article>

          <article className={`${card} lg:col-span-3`}>
            <GenerationDemo locale={locale} />
            <div className="mt-auto"><CardTitle text={c.cards.generation} /></div>
          </article>

          <article className="grid items-end gap-7 rounded-[28px] bg-[#1c1f21] p-6 lg:col-span-7 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)] lg:p-7">
            <div>
              <span className="mb-5 inline-flex size-12 items-center justify-center rounded-2xl bg-[#16181a] shadow-[0_8px_24px_rgba(0,0,0,0.3)]">
                <Image src="/facha-demo/ic-claude.svg" alt="" width={24} height={24} />
              </span>
              <CardTitle text={c.cards.chat} />
            </div>
            <ChatDemo locale={locale} />
          </article>

          <article className="flex flex-col gap-6 rounded-[28px] bg-[#1c1f21] p-6 lg:col-span-5 lg:p-7">
            <StoreConnectDemo locale={locale} />
            <div className="mt-auto"><CardTitle text={c.cards.connect} /></div>
          </article>

          <p className="font-mono text-[11px] text-[#7c7c76] lg:col-span-12">{c.demoNote}</p>
        </div>
      </section>

      {/* El problema */}
      <section className="mx-auto grid max-w-[1360px] gap-8 px-5 pt-24 sm:px-10 lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-16 lg:pt-36">
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">{c.problemLabel}</p>
        <div className="flex max-w-[820px] flex-col gap-6">
          <p className="font-serif text-4xl leading-[1.08] sm:text-[52px]">{c.problemTitle}</p>
          <p className="text-lg leading-relaxed text-muted">{c.problemBody}</p>
        </div>
      </section>

      {/* Qué construí */}
      <section className="mx-auto grid max-w-[1360px] items-center gap-12 px-5 pt-24 sm:px-10 lg:grid-cols-2 lg:pt-36">
        <div className="flex flex-col gap-6">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">{c.builtLabel}</p>
          <p className="font-serif text-4xl leading-[1.1] sm:text-[44px]">{c.builtTitle}</p>
          <ul className="flex flex-col">
            {c.built.map((item) => (
              <li key={item} className="border-t border-rule py-4 text-base text-muted last:border-b">{item}</li>
            ))}
          </ul>
        </div>
        <figure className="mx-auto flex w-full max-w-[460px] flex-col gap-4">
          <Image src="/facha-demo/nimbo-ad.webp" alt={c.adAlt} width={1080} height={1350} sizes="(min-width: 1024px) 460px, 100vw" className="h-auto w-full rounded-[28px]" />
          <figcaption className="inline-flex items-center gap-1.5 self-start rounded-full bg-[rgba(95,181,114,0.14)] px-3 py-1.5 font-[family-name:var(--font-switzer)] text-[13px] font-semibold text-[#5fb572]">
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 8.5 6.5 12 13 4.5" /></svg>
            {c.ready}
          </figcaption>
        </figure>
      </section>

      {/* Decisiones */}
      <section className="mx-auto max-w-[1360px] px-5 pt-24 sm:px-10 lg:pt-36">
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">{c.decisionsLabel}</p>
        <div className="mt-10 grid border-t border-rule md:grid-cols-3">
          {c.decisions.map(([title, body], i) => (
            <div key={title} className={`flex flex-col gap-3.5 pt-9 md:px-8 ${i === 0 ? "md:pl-0" : "md:border-l md:border-rule"} ${i === 2 ? "md:pr-0" : ""}`}>
              <p className="font-serif text-[34px] leading-[1.1]">{title}</p>
              <p className="text-base leading-relaxed text-muted">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Dónde está hoy */}
      <section className="mx-auto grid max-w-[1360px] items-center gap-12 px-5 pt-24 sm:px-10 lg:grid-cols-2 lg:pt-36">
        <ul className="flex flex-wrap gap-2.5 rounded-[28px] border border-[rgba(247,247,245,0.06)] bg-[#0e1012] p-7 font-[family-name:var(--font-switzer)]">
          {INTEGRATIONS.map((it) => (
            <li key={it.name} className="inline-flex h-12 items-center gap-2.5 rounded-full border border-[rgba(247,247,245,0.08)] bg-[#16181a] px-[18px] text-[15px] font-medium text-[#f7f7f5]">
              <Image src={it.icon} alt="" width={20} height={20} className="h-5 w-auto" />
              {it.name}
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-5">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">{c.todayLabel}</p>
          <p className="text-[22px] leading-normal">{c.todayTitle}</p>
          <p className="text-[17px] leading-relaxed text-muted">{c.todayBody}</p>
        </div>
      </section>

      <section className="mx-auto max-w-[1360px] px-5 pb-16 pt-24 sm:px-10 lg:pt-36">
        <Link href={`/${locale}/projects/propinita`} className="flex items-center justify-between gap-10 rounded-[28px] border border-border bg-surface p-9 transition-colors hover:border-subtle">
          <span className="flex flex-col gap-3">
            <span className="font-mono text-xs uppercase tracking-[0.14em] text-subtle">{c.next}</span>
            <span className="text-4xl font-medium tracking-[-0.04em] sm:text-[56px]">Propinita</span>
          </span>
          <svg width="40" height="40" viewBox="0 0 16 16" fill="none" stroke="#ff6a3d" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M3 8h10M9 4l4 4-4 4" />
          </svg>
        </Link>
      </section>
    </main>
  );
}
