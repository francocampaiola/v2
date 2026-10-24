import Image from "next/image";
import Link from "next/link";
import { CaseDemo } from "@/components/cases/demos";
import { caseHref, caseOrder, type Case } from "@/content/cases";
import { jobs, projects } from "@/content/data";
import { ui, type Locale } from "@/lib/i18n";

const labels = {
  es: { role: "Rol", period: "Período", stack: "Stack", link: "Link", work: "Experiencia laboral", project: "Proyecto personal", built: "02 — Qué hice", outcome: "04 — Resultado", next: "Siguiente" },
  en: { role: "Role", period: "Period", stack: "Stack", link: "Link", work: "Work experience", project: "Personal project", built: "02 — What I did", outcome: "04 — Outcome", next: "Next" },
};

// El nombre del caso que sigue, para el enlace del final (FACHA no está en `cases`)
function nextCase(slug: string) {
  const next = caseOrder[(caseOrder.indexOf(slug) + 1) % caseOrder.length];
  const name = jobs.find((j) => j.company.toLowerCase() === next)?.company ?? projects.find((p) => p.name.toLowerCase() === next)?.name ?? next;
  return { slug: next, name };
}

export function CaseView({ data, locale }: { data: Case; locale: Locale }) {
  const l = labels[locale];
  const t = ui[locale];
  const next = nextCase(data.slug);
  const meta = [
    [l.role, data.meta.role[locale]],
    [l.period, data.meta.period[locale]],
    [l.stack, data.meta.stack],
  ];

  return (
    <main>
      <div className="mx-auto flex max-w-[1360px] items-center justify-between gap-4 px-5 sm:px-10">
        <Link href={`/${locale}#${data.kind === "work" ? "trabajo" : "proyectos"}`} className="inline-flex items-center gap-2.5 text-sm text-muted transition-colors hover:text-fg">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M13 8H3M7 4 3 8l4 4" />
          </svg>
          {t.back}
        </Link>
        <span className="font-mono text-xs text-subtle">{data.kind === "work" ? l.work : l.project}</span>
      </div>

      {/* Encabezado */}
      <section className="mx-auto grid max-w-[1360px] items-end gap-10 px-5 pt-12 sm:px-10 lg:grid-cols-[minmax(0,1fr)_420px] lg:gap-16 lg:pt-14">
        <div className="flex flex-col gap-5">
          {data.status && (
            <span className="self-start rounded-full border border-control px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-muted">{data.status[locale]}</span>
          )}
          <h1 className="break-words text-6xl font-medium leading-[0.85] tracking-[-0.06em] sm:text-[120px]">{data.name}</h1>
          <p className="max-w-[680px] text-lg leading-snug text-muted sm:text-[22px]">{data.summary[locale]}</p>
        </div>
        <dl className="grid grid-cols-2 gap-6 rounded-[20px] border border-border bg-surface p-7">
          {meta.map(([label, value]) => (
            <div key={label} className={label === l.stack ? "col-span-2" : undefined}>
              <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-subtle">{label}</dt>
              <dd className="mt-1.5 text-[15px]">{value}</dd>
            </div>
          ))}
          {data.meta.link && (
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-subtle">{l.link}</dt>
              <dd className="mt-1.5 text-[15px]">
                <a href={data.meta.link.href} target="_blank" rel="noreferrer" className="hover:text-accent">{data.meta.link.label} ↗</a>
              </dd>
            </div>
          )}
        </dl>
      </section>

      {/* La demo */}
      <section className="mx-auto max-w-[1360px] px-5 pt-14 sm:px-10">
        <div className="flex flex-col gap-5 rounded-[32px] border border-white/6 bg-[#0e1012] p-4 text-[#f7f7f5] sm:p-7">
          <CaseDemo slug={data.slug} locale={locale} />
          <p className="font-mono text-[11px] text-[#7c7c76]">{data.demoCaption[locale]}</p>
        </div>
      </section>

      {/* Contexto */}
      <section className="mx-auto grid max-w-[1360px] gap-8 px-5 pt-24 sm:px-10 lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-16 lg:pt-36">
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">{data.context.label[locale]}</p>
        <div className="flex max-w-[820px] flex-col gap-6">
          <p className="font-serif text-4xl leading-[1.08] sm:text-[52px]">{data.context.title[locale]}</p>
          <p className="text-lg leading-relaxed text-muted">{data.context.body[locale]}</p>
        </div>
      </section>

      {/* Qué hice */}
      <section className="mx-auto grid max-w-[1360px] items-center gap-12 px-5 pt-24 sm:px-10 lg:grid-cols-2 lg:pt-36">
        <div className="flex flex-col gap-6">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">{l.built}</p>
          <p className="font-serif text-4xl leading-[1.1] sm:text-[44px]">{data.built.title[locale]}</p>
          <ul className="flex flex-col">
            {data.built.items[locale].map((item) => (
              <li key={item} className="border-t border-rule py-4 text-base text-muted last:border-b">{item}</li>
            ))}
          </ul>
        </div>
        <Image
          src={data.image}
          alt={data.imageAlt[locale]}
          width={1400}
          height={900}
          sizes="(min-width: 1024px) 640px, 100vw"
          className="aspect-[3/2] w-full rounded-[28px] border border-border object-cover"
        />
      </section>

      {/* Decisiones o aprendizajes */}
      <section className="mx-auto max-w-[1360px] px-5 pt-24 sm:px-10 lg:pt-36">
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">{data.decisions.label[locale]}</p>
        <div className="mt-10 grid border-t border-rule md:grid-cols-3">
          {data.decisions.items.map((d, i) => (
            <div key={d.title.es} className={`flex flex-col gap-3.5 pt-9 md:px-8 ${i === 0 ? "md:pl-0" : "md:border-l md:border-rule"} ${i === 2 ? "md:pr-0" : ""}`}>
              <p className="font-serif text-[34px] leading-[1.1]">{d.title[locale]}</p>
              <p className="text-base leading-relaxed text-muted">{d.body[locale]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Resultado */}
      <section className="mx-auto grid max-w-[1360px] gap-8 px-5 pt-24 sm:px-10 lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-16 lg:pt-36">
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">{l.outcome}</p>
        <div className="flex max-w-[820px] flex-col gap-5">
          <p className="text-[26px] leading-snug">{data.outcome.title[locale]}</p>
          <p className="text-[17px] leading-relaxed text-muted">{data.outcome.body[locale]}</p>
        </div>
      </section>

      <section className="mx-auto max-w-[1360px] px-5 pb-16 pt-24 sm:px-10 lg:pt-36">
        <Link href={next.slug === "facha" ? `/${locale}/projects/facha` : caseHref(locale, next.slug)} className="flex items-center justify-between gap-10 rounded-[28px] border border-border bg-surface p-9 transition-colors hover:border-subtle">
          <span className="flex flex-col gap-3">
            <span className="font-mono text-xs uppercase tracking-[0.14em] text-subtle">{l.next}</span>
            <span className="text-4xl font-medium tracking-[-0.04em] sm:text-[56px]">{next.name}</span>
          </span>
          <svg width="40" height="40" viewBox="0 0 16 16" fill="none" stroke="#ff6a3d" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M3 8h10M9 4l4 4-4 4" />
          </svg>
        </Link>
      </section>
    </main>
  );
}
