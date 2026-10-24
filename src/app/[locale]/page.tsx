import Image from "next/image";
import Link from "next/link";
import { HeroParticles, HeroRing } from "@/components/hero-particles";
import { jobs, milestones, profile, projects } from "@/content/data";
import { ui, type Locale } from "@/lib/i18n";

const riseDelay = (s: number) => ({ animationDelay: `${s}s` });

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const locale = (await params).locale as Locale;
  const t = ui[locale];

  return (
    <main>
      {/* Hero: escultura de partículas que cambia de forma */}
      <section aria-labelledby="hero-title" className="relative lg:-mt-[84px] lg:h-[860px]">
        <div className="absolute inset-0 hidden lg:block">
          <HeroParticles />
        </div>
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-60 bg-gradient-to-t from-bg from-15% to-transparent lg:block" />
        <div className="grid h-[260px] place-items-center lg:hidden">
          <HeroRing />
        </div>
        <div className="relative z-10 mx-auto flex h-full max-w-[1280px] flex-col justify-center gap-7 px-5 pt-2 sm:px-10 lg:pointer-events-none lg:pt-0">
          <p className="fade-in flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.14em] text-muted sm:text-xs">
            <span className="size-2 rounded-full bg-live [animation:blink_2.4s_infinite]" />
            {profile.role[locale]} · {profile.location}
          </p>
          <h1 id="hero-title" className="whitespace-nowrap text-[30px] font-medium leading-[1.05] tracking-[-0.04em] sm:text-6xl lg:text-[72px] lg:leading-none lg:tracking-[-0.045em]">
            <span className="block">
              <span className="rise" style={riseDelay(0.15)}>{profile.headline.start[locale].split(" ")[0]}</span>{" "}
              <span className="rise" style={riseDelay(0.25)}>{profile.headline.start[locale].split(" ").slice(1).join(" ")}</span>
            </span>
            <span className="block">
              <span className="rise font-serif font-normal italic tracking-[-0.02em] text-accent" style={riseDelay(0.4)}>
                {profile.headline.accent[locale]}
              </span>{" "}
              <span className="rise" style={riseDelay(0.5)}>{profile.headline.end[locale]}</span>
            </span>
          </h1>
          <p className="fade-in max-w-[500px] text-base leading-relaxed text-muted sm:text-[19px]" style={riseDelay(0.8)}>
            {profile.intro[locale]}
          </p>
          <div className="fade-in flex flex-wrap gap-3 lg:pointer-events-auto" style={riseDelay(1)}>
            <Link href="#trabajo" className="rounded-full bg-accent px-[22px] py-3.5 text-[15px] font-semibold text-bg transition-opacity hover:opacity-90">
              {t.heroCta}
            </Link>
            <Link href="#contacto" className="rounded-full border border-control px-[22px] py-3.5 text-[15px] transition-colors hover:border-subtle">
              {t.heroSecondary}
            </Link>
          </div>
        </div>
      </section>

      {/* Trabajo */}
      <section id="trabajo" className="mx-auto max-w-[1280px] px-5 pt-24 sm:px-10 lg:pt-36">
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <h2 className="text-3xl font-medium tracking-[-0.035em] sm:text-5xl">{t.sections.work}</h2>
          <a href={t.resumeFile} target="_blank" rel="noreferrer" className="text-sm text-muted transition-colors hover:text-fg">
            {t.resume} ↗
          </a>
        </div>
        <ol className="mt-8 flex flex-col sm:mt-10">
          {jobs.map((job, i) => (
            <li key={job.company} className="border-t border-rule">
              <Link href={`/${locale}/work/${job.company.toLowerCase()}`} className="group grid items-center gap-4 py-5 sm:grid-cols-[220px_minmax(0,1fr)_190px] sm:gap-8">
              <Image
                src={job.image}
                alt={job.alt[locale]}
                width={440}
                height={240}
                sizes="(min-width: 640px) 220px, 100vw"
                className="aspect-[11/6] w-full rounded-xl border border-border object-cover transition-transform duration-500 group-hover:scale-[1.02] sm:w-[220px]"
              />
              <div className="flex flex-col gap-1.5">
                <p className="text-xl font-medium tracking-tight sm:text-2xl">
                  <span className="transition-colors group-hover:text-accent">{job.company}</span>{" "}
                  <span className="font-normal text-subtle">· {job.role[locale]}</span>
                </p>
                <p className="text-[15px] leading-relaxed text-muted">{job.summary[locale]}</p>
              </div>
              <p className={`font-mono text-[13px] sm:text-right ${i === 0 ? "text-live" : "text-subtle"}`}>
                {job.start[locale]} — {job.end?.[locale] ?? t.present}
              </p>
              </Link>
            </li>
          ))}
        </ol>
      </section>

      {/* Proyectos personales */}
      <section id="proyectos" className="mx-auto max-w-[1280px] px-5 pt-24 sm:px-10 lg:pt-36">
        <h2 className="text-3xl font-medium tracking-[-0.035em] sm:text-5xl">{t.sections.projects}</h2>
        <div className="mt-8 grid gap-5 sm:mt-10 md:grid-cols-3">
          {projects.map((project) => {
            const card = (
              <>
                <Image
                  src={project.image}
                  alt={project.alt[locale]}
                  width={700}
                  height={467}
                  sizes="(min-width: 768px) 400px, 100vw"
                  className="h-60 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <div className="flex flex-col gap-2 px-7 py-6">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-[26px] font-medium tracking-tight">{project.name}</span>
                    {project.badge ? (
                      <span className="rounded-full bg-accent/15 px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.12em] text-accent-soft">
                        {project.badge[locale]}
                      </span>
                    ) : (
                      <span className="font-mono text-xs text-subtle">{project.period}</span>
                    )}
                  </div>
                  <p className="text-[15px] leading-relaxed text-muted">{project.summary[locale]}</p>
                  {project.slug && <p className="mt-1 text-sm text-fg">{t.readCase} →</p>}
                </div>
              </>
            );
            const className = "group flex flex-col overflow-hidden rounded-[22px] border border-border bg-surface";
            return project.slug ? (
              <Link key={project.name} href={`/${locale}/projects/${project.slug}`} className={className}>
                {card}
              </Link>
            ) : (
              <article key={project.name} className={className}>
                {card}
              </article>
            );
          })}
        </div>
      </section>

      {/* Hitos */}
      <section id="hitos" className="mx-auto grid max-w-[1280px] gap-8 px-5 pt-24 sm:px-10 lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-12 lg:pt-36">
        <div className="flex flex-col gap-3">
          <h2 className="text-3xl font-medium tracking-[-0.035em] sm:text-5xl">{t.sections.milestones}</h2>
          <p className="text-[15px] text-subtle">{t.milestonesIntro}</p>
        </div>
        <ul className="flex flex-col">
          {milestones.map((m) => (
            <li key={m.text.es} className="grid grid-cols-[56px_minmax(0,1fr)] items-baseline gap-5 border-t border-rule py-[18px] sm:grid-cols-[72px_minmax(0,1fr)]">
              <span className="font-mono text-[13px] text-accent">{m.year}</span>
              <span className="text-base leading-normal sm:text-[17px]">{m.text[locale]}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Contacto */}
      <section id="contacto" className="mx-auto max-w-[1280px] px-5 pb-8 pt-24 sm:px-10 lg:pt-36">
        <div className="grid items-center gap-8 rounded-[28px] bg-accent p-7 text-bg sm:p-12 md:grid-cols-[240px_minmax(0,1fr)] md:gap-12">
          <Image
            src="/pixel/me.webp"
            alt={t.portraitAlt}
            width={480}
            height={600}
            className="hidden h-[300px] w-[240px] rounded-[18px] bg-[#1a1b1e] object-cover object-[50%_8%] [image-rendering:pixelated] md:block"
          />
          <div className="flex flex-col gap-5">
            <h2 className="text-[40px] font-medium leading-[0.95] tracking-[-0.04em] sm:text-7xl lg:text-[84px] lg:leading-[0.92] lg:tracking-[-0.05em]">
              {t.contactTitle} <span className="font-serif font-normal italic">{t.contactAccent}</span>?
            </h2>
            <p className="max-w-[560px] text-base leading-normal sm:text-lg">{t.contactBody}</p>
            <div className="flex flex-wrap items-center gap-x-7 gap-y-3 text-base">
              <a href={`mailto:${profile.email}`} className="rounded-full bg-bg px-[22px] py-3.5 font-medium text-fg transition-opacity hover:opacity-90">
                {profile.email}
              </a>
              {profile.social.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="underline-offset-4 hover:underline">
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
