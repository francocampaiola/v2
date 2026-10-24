export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "es";

export type Localized<T = string> = Record<Locale, T>;

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export const ui = {
  es: {
    nav: { work: "Trabajo", projects: "Proyectos", milestones: "Hitos", contact: "Hablemos" },
    switchLangLabel: "Ver el sitio en inglés",
    heroCta: "Ver mi trabajo",
    heroSecondary: "Escribime",
    sections: {
      work: "Trabajo",
      projects: "Proyectos personales",
      milestones: "Hitos",
      writing: "Escritos",
    },
    milestonesIntro: "Cosas que construí, aprendí o conté.",
    resume: "CV completo",
    resumeFile: "/cv.pdf",
    present: "hoy",
    readCase: "Ver caso",
    contactTitle: "¿Construimos",
    contactAccent: "algo",
    contactBody:
      "Soy Franco, de Buenos Aires. Si estás armando un equipo de producto o querés construir algo con IA, escribime.",
    portraitAlt: "Franco Campaiola en pixel art",
    back: "Volver",
    personalProject: "Proyecto personal",
    writingIntro: "Notas sobre construir productos con IA: decisiones de arquitectura, trade-offs y lo que aprendo construyendo FACHA.",
    noPosts: "Todavía no hay escritos publicados.",
    minRead: "min de lectura",
    draft: "Borrador",
    notFound: "Esta página no existe.",
  },
  en: {
    nav: { work: "Work", projects: "Projects", milestones: "Milestones", contact: "Let's talk" },
    switchLangLabel: "View the site in Spanish",
    heroCta: "See my work",
    heroSecondary: "Get in touch",
    sections: {
      work: "Work",
      projects: "Personal projects",
      milestones: "Milestones",
      writing: "Writing",
    },
    milestonesIntro: "Things I built, learned or shared.",
    resume: "Full resume",
    resumeFile: "/resume.pdf",
    present: "now",
    readCase: "Read case study",
    contactTitle: "Shall we build",
    contactAccent: "something",
    contactBody:
      "I'm Franco, from Buenos Aires. If you're building a product team or want to build something with AI, get in touch.",
    portraitAlt: "Franco Campaiola in pixel art",
    back: "Back",
    personalProject: "Personal project",
    writingIntro: "Notes on building products with AI: architecture decisions, trade-offs and what I learn building FACHA.",
    noPosts: "No published writing yet.",
    minRead: "min read",
    draft: "Draft",
    notFound: "This page doesn't exist.",
  },
} satisfies Localized<unknown>;
