"use client";

import Image from "next/image";
import Link from "next/link";
import { EMAIL, EXPERIENCE, LINKS, MILESTONES, POSTS, PROJECTS, SKILLS } from "@/content/site";
import { VISUALS } from "../milestones/visuals";
import { useCopy } from "../site/hooks";

function SectionHead({ id, title, lead }) {
  return (
    <div className="grid gap-3 lg:grid-cols-2 lg:items-end lg:gap-12">
      <h2 id={id} className="max-w-[560px] text-[28px] leading-[1.15] lg:text-[36px]">
        {title}
      </h2>
      {lead ? <p className="c2 max-w-[440px]">{lead}</p> : null}
    </div>
  );
}

/* ——— Hero ——— */

export function Hero() {
  const { ui, lang } = useCopy();
  return (
    <section aria-labelledby="hero-title" className="wrap pt-14 pb-4 lg:pt-24">
      <p className="c2 flex items-center gap-2 text-[13px]">
        <span className="size-1.5 rounded-full bg-[var(--accent)]" aria-hidden="true" />
        {ui.hero.kicker}
      </p>
      <h1 id="hero-title" className="mt-4 max-w-[900px] text-[38px] leading-[1.05] tracking-[-0.03em] sm:text-[52px] lg:text-[68px]">
        {ui.hero.title}
      </h1>
      <p className="c2 mt-5 max-w-[620px] text-[16px] leading-7 lg:text-[17px]">{ui.hero.lead}</p>
      <div className="mt-7 flex flex-wrap gap-2.5">
        <a href={`mailto:${EMAIL}`} className="btn btn-solid">
          {ui.hero.contact}
        </a>
        <a href={LINKS.cv[lang]} target="_blank" rel="noopener" className="btn btn-quiet">
          {ui.hero.cv}
        </a>
        <a href={LINKS.linkedin} target="_blank" rel="noopener" className="btn btn-quiet">
          LinkedIn
        </a>
      </div>
      {/* Marquesina con los nombres de lo que armé */}
      <div className="relative mt-14 overflow-hidden border-y border-[var(--line)] py-4 [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)] lg:mt-20">
        <div className="marquee flex w-max gap-10 text-[15px] text-[var(--ink-3)]" aria-hidden="true">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex gap-10">
              {["FACHA", "NotChatBot · Views", "harness-os", "Persi", "Grayola", "Megapix", "Propinita", "Reservita", "Alquimia Crochet"].map((name) => (
                <span key={name} className="whitespace-nowrap">
                  {name}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ——— Milestones ——— */

const SPAN = { wide: "lg:col-span-4", narrow: "lg:col-span-2", half: "lg:col-span-3" };

function MilestoneCard({ item }) {
  const { pick } = useCopy();
  const copy = pick(item);
  const Visual = VISUALS[item.visual];
  return (
    <article className={`card flex flex-col gap-4 p-2.5 ${SPAN[item.size]}`}>
      <Visual tint={item.tint} />
      <div className="px-2 pb-3">
        <p className="c3 flex items-center gap-2 text-[12px]">
          <span className="font-medium text-[var(--ink-2)]">{item.org}</span>
          <span aria-hidden="true">·</span>
          {item.year}
        </p>
        <h3 className="mt-1.5 text-[19px] leading-6">{copy.title}</h3>
        <p className="c2 mt-1.5 text-[14px] leading-[22px]">{copy.body}</p>
      </div>
    </article>
  );
}

export function Milestones() {
  const { ui } = useCopy();
  return (
    <section id="milestones" aria-labelledby="milestones-title" className="wrap scroll-mt-20 pt-16 lg:pt-24">
      <SectionHead id="milestones-title" title={ui.sections.milestones.title} lead={ui.sections.milestones.lead} />
      <div className="mt-8 grid grid-cols-1 gap-3 md:grid-cols-2 lg:mt-12 lg:grid-cols-6">
        {MILESTONES.map((item) => (
          <MilestoneCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

/* ——— Proyectos ——— */

const TILE_TINT = {
  warm: "linear-gradient(135deg,#b8663a,#2a1a12)",
  sky: "linear-gradient(135deg,#2a6aa6,#111a26)",
  violet: "linear-gradient(135deg,#6a5bd6,#17142e)",
};

function ProjectCard({ project }) {
  const { ui, pick } = useCopy();
  const copy = pick(project);
  const external = project.url?.startsWith("http");
  const body = (
    <>
      <div className="stage relative aspect-[16/10] bg-[var(--s2)]" style={project.tint ? { backgroundImage: TILE_TINT[project.tint] } : undefined}>
        {project.image ? (
          <Image src={project.image} alt="" fill sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
        ) : (
          <span className="absolute inset-0 grid place-items-center text-[26px] font-medium tracking-[-0.02em] text-white/90" style={{ fontFamily: "Satoshi" }}>
            {project.name}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col px-2 pt-3 pb-2">
        <p className="c3 text-[12px]">{copy.kind}</p>
        <h3 className="mt-1 text-[17px]">{project.name}</h3>
        <p className="c2 mt-1 text-[14px] leading-[21px]">{copy.body}</p>
        {project.url ? (
          <span className="mt-3 inline-flex items-center gap-1 text-[13px] font-medium">
            {external ? ui.visit : ui.more}
            <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
              {external ? "↗" : "→"}
            </span>
          </span>
        ) : null}
      </div>
    </>
  );
  if (!project.url) return <li className="card flex flex-col p-2.5">{body}</li>;
  return (
    <li className="flex">
      <a
        href={project.url}
        {...(external ? { target: "_blank", rel: "noopener" } : {})}
        className="card group flex w-full flex-col p-2.5 transition-colors hover:bg-[var(--s2)]"
      >
        {body}
      </a>
    </li>
  );
}

export function Projects() {
  const { ui } = useCopy();
  return (
    <section id="projects" aria-labelledby="projects-title" className="wrap scroll-mt-20 pt-20 lg:pt-32">
      <SectionHead id="projects-title" title={ui.sections.projects.title} lead={ui.sections.projects.lead} />
      <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ul>
    </section>
  );
}

/* ——— Experiencia ——— */

export function Experience() {
  const { ui, pick } = useCopy();
  return (
    <section id="experience" aria-labelledby="experience-title" className="wrap scroll-mt-20 pt-20 lg:pt-32">
      <SectionHead id="experience-title" title={ui.sections.experience.title} />
      <ol className="mt-8 border-t border-[var(--line)] lg:mt-12">
        {EXPERIENCE.map((job) => (
          <li key={job.org} className="grid gap-2 border-b border-[var(--line)] py-6 lg:grid-cols-[200px_240px_1fr] lg:gap-8">
            <p className="c3 text-[13px] tabular-nums">{pick(job.period)}</p>
            <div>
              <a href={job.url} target="_blank" rel="noopener" className="font-medium hover:text-[var(--accent)]">
                {job.org}
              </a>
              <p className="c2 text-[13px]">{typeof job.role === "string" ? job.role : pick(job.role)}</p>
            </div>
            <p className="c2 text-[14px] leading-[22px]">{pick(job)}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

/* ——— Skills ——— */

export function Skills() {
  const { ui, pick } = useCopy();
  return (
    <section id="skills" aria-labelledby="skills-title" className="wrap scroll-mt-20 pt-20 lg:pt-32">
      <SectionHead id="skills-title" title={ui.sections.skills.title} lead={ui.sections.skills.lead} />
      <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
        {SKILLS.map((skill) => {
          const copy = pick(skill);
          const featured = skill.id === "seo";
          return (
            <li
              key={skill.id}
              className={`card flex flex-col gap-3 p-5 ${featured ? "border-[#8ff0c84d] bg-[linear-gradient(160deg,#10392c,#131417_60%)]" : ""}`}
            >
              <h3 className="text-[18px]">{copy.title}</h3>
              <p className="c2 text-[14px] leading-[22px]">{copy.body}</p>
              <ul className="mt-auto flex flex-wrap gap-1.5 pt-1">
                {copy.proof.map((p) => (
                  <li key={p} className="chip">
                    {p}
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

/* ——— Blog ——— */

export function BlogTeaser() {
  const { ui, pick } = useCopy();
  return (
    <section aria-labelledby="blog-title" className="wrap pt-20 lg:pt-32">
      <SectionHead id="blog-title" title={ui.sections.blog.title} lead={ui.sections.blog.lead} />
      <ul className="mt-8 grid gap-3 lg:mt-12">
        {POSTS.map((post) => {
          const copy = pick(post);
          return (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="card group grid gap-5 p-2.5 transition-colors hover:bg-[var(--s2)] lg:grid-cols-[1.1fr_1fr] lg:items-center">
                <div className="stage relative aspect-[1200/520] bg-[#0e1012]">
                  <Image src={post.cover} alt="" fill sizes="(min-width: 1024px) 560px, 100vw" className="object-cover" />
                </div>
                <div className="px-2 pb-3 lg:pr-6">
                  <p className="c3 text-[12px]">{new Date(post.date).toLocaleDateString("es-AR", { day: "numeric", month: "long", year: "numeric" })}</p>
                  <h3 className="mt-1.5 text-[20px] leading-7 lg:text-[24px] lg:leading-8">{copy?.title ?? post.es.title}</h3>
                  <p className="c2 mt-2 text-[14px] leading-[22px]">{copy?.description ?? post.es.description}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-[13px] font-medium">
                    {ui.read} <span aria-hidden="true">→</span>
                  </span>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
