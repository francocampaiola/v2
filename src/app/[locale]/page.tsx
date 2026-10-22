import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "@/components/icons";
import { PostList } from "@/components/post-list";
import { Section } from "@/components/section";
import { currentRole, experience, experiments, profile, projects, sites } from "@/content/data";
import { localize, ui, type Locale } from "@/lib/i18n";
import { getPosts } from "@/lib/writing";

const featuredWork = ["grayola", "megapix", "propinita"];

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const locale = (await params).locale as Locale;
  const t = ui[locale];
  const facha = projects.find((p) => p.slug === "facha")!;
  const work = featuredWork.map((slug) => projects.find((p) => p.slug === slug)!);
  const posts = getPosts(locale);

  return (
    <main className="mx-auto flex max-w-2xl flex-col gap-24 px-6 pb-16 pt-16 sm:pt-24">
      {/* Hero */}
      <section className="rise" style={{ "--i": 0 } as React.CSSProperties}>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-subtle">{profile.role[locale]}</p>
          {profile.available && (
            <p className="inline-flex items-center gap-2 rounded-full border border-border px-2.5 py-0.5 text-xs text-muted">
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-60 motion-reduce:animate-none" />
                <span className="relative inline-flex size-1.5 rounded-full bg-emerald-500" />
              </span>
              {t.available}
            </p>
          )}
        </div>
        <h1 className="mt-6 text-balance text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl">
          {profile.headline[locale]}
        </h1>
        <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted">{profile.intro[locale]}</p>
        <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm">
          <a href="#work" className="group inline-flex items-center gap-1.5 rounded-full bg-fg px-4 py-2 font-medium text-bg transition-opacity hover:opacity-85">
            {t.exploreWork}
            <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
          </a>
          <a href="#about" className="text-muted transition-colors hover:text-fg">
            {t.moreAbout}
          </a>
          <a href={t.resumeFile} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-1 text-muted transition-colors hover:text-fg">
            CV
            <ArrowUpRight className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </section>

      {/* 01 — Construyendo ahora */}
      <Section id="building" number="01" title={t.sections.building} index={1}>
        <Link href={`/${locale}/projects/facha`} className="group block">
          <div className="relative aspect-[2/1] overflow-hidden rounded-xl border border-border bg-surface">
            <Image
              src={facha.cover}
              alt=""
              fill
              priority
              sizes="(min-width: 672px) 624px, 100vw"
              className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.025] motion-reduce:transition-none"
            />
          </div>
          <div className="mt-4 flex items-baseline justify-between gap-4">
            <h3 className="font-medium tracking-tight">{localize(facha.name, locale)}</h3>
            {facha.status && <span className="font-mono text-xs text-subtle">{facha.status[locale]}</span>}
          </div>
          <p className="mt-1 text-pretty text-sm leading-relaxed text-muted">{facha.summary[locale]}</p>
          <ReadMore label={t.readCase} />
        </Link>

        <div className="mt-10 rounded-2xl border border-border p-5 sm:p-6">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-subtle">{t.experiments}</p>
          <ul className="mt-4 flex flex-col">
            {experiments.map((e) => (
              <li key={e.name} className="flex flex-col gap-0.5 border-t border-border py-3 text-sm first:border-t-0 first:pt-0 sm:flex-row sm:items-baseline sm:gap-3">
                <span className="shrink-0 font-mono text-xs text-fg sm:w-24">{e.name}</span>
                <span className="text-muted">{e.description[locale]}</span>
              </li>
            ))}
          </ul>
          <Link href={`/${locale}/projects/agents`} className="group mt-2 inline-flex items-center gap-1.5 text-sm">
            {t.seeHow}
            <ArrowRight className="text-accent transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </Section>

      {/* 02 — Trabajo seleccionado */}
      <Section id="work" number="02" title={t.sections.work} index={2}>
        <a href={currentRole.url} target="_blank" rel="noreferrer" className="group block">
          <div className="relative aspect-[2/1] overflow-hidden rounded-xl border border-border bg-surface">
            <Image
              src={currentRole.cover}
              alt=""
              fill
              sizes="(min-width: 672px) 624px, 100vw"
              className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.025] motion-reduce:transition-none"
            />
          </div>
          <div className="mt-4 flex items-baseline justify-between gap-4">
            <h3 className="font-medium tracking-tight">
              {currentRole.company} <span className="font-normal text-muted">· {currentRole.role[locale]}</span>
            </h3>
            <span className="font-mono text-xs text-subtle">{t.currentRole}</span>
          </div>
          <p className="mt-1 text-pretty text-sm leading-relaxed text-muted">{currentRole.summary[locale]}</p>
          <p className="mt-3 inline-flex items-center gap-1.5 text-sm">
            {t.visitSite}
            <ArrowUpRight className="text-accent transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </p>
        </a>

        <ul className="mt-10 flex flex-col">
          {work.map((project) => (
            <li key={project.slug} className="border-t border-border first:border-t-0">
              <Link href={`/${locale}/projects/${project.slug}`} className="group flex gap-4 py-5 sm:gap-6">
                <div className="relative aspect-[2/1] w-32 shrink-0 self-start overflow-hidden rounded-lg border border-border bg-surface sm:w-44">
                  <Image
                    src={project.cover}
                    alt=""
                    fill
                    sizes="176px"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:transition-none"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-medium tracking-tight">{localize(project.name, locale)}</h3>
                    <span className="font-mono text-xs text-subtle">{project.year}</span>
                  </div>
                  <p className="mt-1 text-pretty text-sm leading-relaxed text-muted">{project.summary[locale]}</p>
                  <ReadMore label={t.readCase} />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      {/* 03 — Escritos (solo si hay publicados) */}
      {posts.length > 0 && (
        <Section id="writing" number="03" title={t.sections.writing} index={3}>
          <PostList posts={posts.slice(0, 3)} locale={locale} />
          <Link href={`/${locale}/writing`} className="group mt-2 inline-flex items-center gap-1.5 text-sm">
            {t.allPosts}
            <ArrowRight className="text-accent transition-transform group-hover:translate-x-0.5" />
          </Link>
        </Section>
      )}

      {/* Experiencia */}
      <Section id="experience" number={posts.length > 0 ? "04" : "03"} title={t.sections.experience} index={4}>
        <ol className="flex flex-col">
          {experience.map((job) => (
            <li key={job.company} className="grid gap-1 border-t border-border py-5 first:border-t-0 first:pt-0 sm:grid-cols-[7rem_1fr] sm:gap-6">
              <p className="font-mono text-xs leading-6 text-subtle">
                {job.start} — {job.end ?? t.present}
              </p>
              <div>
                <h3 className="text-sm">
                  <span className="font-medium">{job.role[locale]}</span>
                  <span className="text-muted"> · </span>
                  {job.url ? (
                    <a href={job.url} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-0.5 text-muted transition-colors hover:text-fg">
                      {job.company}
                      <ArrowUpRight className="opacity-0 transition-opacity group-hover:opacity-100" />
                    </a>
                  ) : (
                    <span className="text-muted">{job.company}</span>
                  )}
                </h3>
                <p className="mt-1.5 text-pretty text-sm leading-relaxed text-muted">{job.summary[locale]}</p>
              </div>
            </li>
          ))}
        </ol>
        <ul className="mt-6 flex flex-wrap gap-1.5" aria-label="Stack">
          {profile.skills.map((skill) => (
            <li key={skill} className="rounded-full border border-border px-2.5 py-0.5 font-mono text-[11px] text-muted">
              {skill}
            </li>
          ))}
        </ul>
        <a href={t.resumeFile} target="_blank" rel="noreferrer" className="group mt-6 inline-flex items-center gap-1 text-sm">
          {t.resume}
          <ArrowUpRight className="text-accent transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </Section>

      {/* Sobre mí */}
      <Section id="about" number={posts.length > 0 ? "05" : "04"} title={t.sections.about} index={5}>
        <div className="flex flex-col gap-4 text-pretty leading-relaxed text-muted">
          {profile.about[locale].map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>

        <h3 className="mt-12 font-mono text-xs uppercase tracking-[0.14em] text-subtle">{t.sections.principles}</h3>
        <ol className="mt-4 flex flex-col">
          {profile.principles.map((principle, i) => (
            <li key={principle.title.en} className="grid grid-cols-[2rem_1fr] border-t border-border py-4 text-sm first:border-t-0 first:pt-0">
              <span className="font-mono text-xs leading-6 text-accent">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <p className="font-medium">{principle.title[locale]}</p>
                <p className="mt-1 text-muted">{principle.body[locale]}</p>
              </div>
            </li>
          ))}
        </ol>

        <h3 className="mt-12 font-mono text-xs uppercase tracking-[0.14em] text-subtle">{t.sections.sites}</h3>
        <ul className="mt-4 flex flex-col">
          {sites.map((site) => (
            <li key={site.name}>
              <a href={site.url} target="_blank" rel="noreferrer" className="group flex items-baseline gap-3 border-t border-border py-3 text-sm">
                <span className="font-medium">{site.name}</span>
                <span className="flex-1 truncate text-muted">{site.description[locale]}</span>
                <ArrowUpRight className="text-subtle transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg" />
              </a>
            </li>
          ))}
        </ul>
      </Section>

      {/* Contacto */}
      <Section id="contact" title={t.sections.contact} index={6}>
        <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
          <p className="text-2xl font-medium tracking-tight">{t.contactTitle}</p>
          <p className="mt-2 max-w-md text-pretty text-sm leading-relaxed text-muted">{t.contactBody}</p>
          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm">
            <a href={`mailto:${profile.email}`} className="group inline-flex items-center gap-1.5 font-medium">
              {profile.email}
              <ArrowRight className="text-accent transition-transform group-hover:translate-x-0.5" />
            </a>
            {profile.social.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="text-muted transition-colors hover:text-fg">
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </Section>
    </main>
  );
}

function ReadMore({ label }: { label: string }) {
  return (
    <p className="mt-3 inline-flex items-center gap-1.5 text-sm text-fg">
      <span className="bg-gradient-to-r from-accent to-accent bg-[length:0%_1px] bg-left-bottom bg-no-repeat pb-0.5 transition-[background-size] duration-300 group-hover:bg-[length:100%_1px]">
        {label}
      </span>
      <ArrowRight className="text-accent transition-transform group-hover:translate-x-0.5" />
    </p>
  );
}
