import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "@/components/icons";
import { projects } from "@/content/data";
import { localize, locales, ui, type Locale } from "@/lib/i18n";

type Params = Promise<{ locale: string; slug: string }>;

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((locale) => projects.map((p) => ({ locale, slug: p.slug })));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  const l = locale as Locale;
  return {
    title: localize(project.name, l),
    description: project.summary[l],
    alternates: {
      canonical: `/${l}/projects/${slug}`,
      languages: { es: `/es/projects/${slug}`, en: `/en/projects/${slug}` },
    },
    openGraph: { title: localize(project.name, l), description: project.summary[l], images: [project.cover] },
  };
}

export default async function ProjectPage({ params }: { params: Params }) {
  const { locale: rawLocale, slug } = await params;
  const locale = rawLocale as Locale;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();
  const project = projects[index];
  const next = projects[(index + 1) % projects.length];
  const t = ui[locale];

  const meta = [
    { label: t.role, value: project.role[locale] },
    { label: t.period, value: project.period[locale] },
    ...(project.status ? [{ label: locale === "es" ? "Estado" : "Status", value: project.status[locale] }] : []),
  ];

  return (
    <main className="mx-auto max-w-2xl px-6 pb-16 pt-10">
      <Link href={`/${locale}#work`} className="group inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-fg">
        <ArrowLeft className="transition-transform group-hover:-translate-x-0.5" />
        {t.back}
      </Link>

      <header className="rise mt-10" style={{ "--i": 0 } as React.CSSProperties}>
        <h1 className="text-3xl font-medium tracking-tight sm:text-4xl">{localize(project.name, locale)}</h1>
        <p className="mt-3 text-pretty text-lg leading-relaxed text-muted">{project.summary[locale]}</p>

        <dl className="mt-8 grid grid-cols-2 gap-4 border-y border-border py-5 text-sm sm:grid-cols-4">
          {meta.map((m) => (
            <div key={m.label}>
              <dt className="font-mono text-xs uppercase tracking-[0.14em] text-subtle">{m.label}</dt>
              <dd className="mt-1">{m.value}</dd>
            </div>
          ))}
          {project.url && (
            <div>
              <dt className="font-mono text-xs uppercase tracking-[0.14em] text-subtle">Link</dt>
              <dd className="mt-1">
                <a href={project.url} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-1 hover:text-accent">
                  {t.visit}
                  <ArrowUpRight className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </dd>
            </div>
          )}
        </dl>
      </header>

      <div className="rise relative mt-10 aspect-[2/1] overflow-hidden rounded-xl border border-border bg-surface" style={{ "--i": 1 } as React.CSSProperties}>
        <Image src={project.cover} alt="" fill priority sizes="(min-width: 672px) 624px, 100vw" className="object-cover object-top" />
      </div>

      <div className="rise mt-14 flex flex-col gap-12" style={{ "--i": 2 } as React.CSSProperties}>
        {project.sections.map((section) => (
          <section key={section.title.en}>
            <h2 className="font-medium tracking-tight">{section.title[locale]}</h2>
            <p className="mt-3 text-pretty leading-relaxed text-muted">{section.body[locale]}</p>
          </section>
        ))}

        <section>
          <h2 className="font-medium tracking-tight">{locale === "es" ? "Puntos destacados" : "Highlights"}</h2>
          <ul className="mt-3 flex flex-col gap-2 text-muted">
            {project.highlights[locale].map((h) => (
              <li key={h} className="flex gap-3">
                <span className="mt-[0.6em] size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                {h}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-medium tracking-tight">{t.stack}</h2>
          <ul className="mt-3 flex flex-wrap gap-1.5">
            {project.stack.map((s) => (
              <li key={s} className="rounded-full border border-border px-2.5 py-0.5 font-mono text-[11px] text-muted">
                {s}
              </li>
            ))}
          </ul>
        </section>
      </div>

      {project.gallery.length > 0 && (
        <div className="mt-14 flex flex-col gap-6">
          {project.gallery.map((img) => (
            <figure key={img.src} className={img.height > img.width ? "mx-auto w-full max-w-xs" : undefined}>
              <Image
                src={img.src}
                alt={img.alt[locale]}
                width={img.width}
                height={img.height}
                sizes="(min-width: 672px) 624px, 100vw"
                className="h-auto w-full rounded-xl border border-border bg-surface"
              />
              <figcaption className="mt-2 font-mono text-xs text-subtle">{img.alt[locale]}</figcaption>
            </figure>
          ))}
        </div>
      )}

      <Link href={`/${locale}/projects/${next.slug}`} className="group mt-16 flex items-center justify-between rounded-2xl border border-border p-6 transition-colors hover:bg-surface">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-subtle">{t.nextCase}</p>
          <p className="mt-1 text-lg font-medium tracking-tight">{localize(next.name, locale)}</p>
        </div>
        <ArrowRight className="size-5 text-accent transition-transform group-hover:translate-x-1" />
      </Link>
    </main>
  );
}
