export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "es";

export type Localized<T = string> = Record<Locale, T>;

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export const ui = {
  es: {
    nav: { building: "Construyendo", work: "Trabajo", writing: "Escritos", about: "Sobre mí" },
    available: "Abierto a nuevas oportunidades",
    sections: {
      building: "Construyendo ahora",
      work: "Trabajo seleccionado",
      experience: "Experiencia",
      principles: "Cómo trabajo",
      writing: "Escritos",
      sites: "Otros sitios",
      about: "Sobre mí",
      contact: "Contacto",
    },
    exploreWork: "Ver mi trabajo",
    moreAbout: "Más sobre mí",
    experiments: "Experimentos con agentes",
    seeHow: "Ver cómo funcionan",
    currentRole: "Rol actual",
    visitSite: "Ver sitio",
    writingIntro: "Notas sobre construir productos con IA: decisiones de arquitectura, trade-offs y lo que aprendo construyendo FACHA.",
    noPosts: "Todavía no hay escritos publicados.",
    allPosts: "Ver todos los escritos",
    minRead: "min de lectura",
    draft: "Borrador",
    resume: "Ver CV completo",
    resumeFile: "/cv.pdf",
    readCase: "Ver caso",
    present: "Presente",
    contactTitle: "¿Hablamos?",
    contactBody:
      "Si estás armando un equipo de producto, querés construir algo con IA o simplemente charlar de cómo llevar una idea a producto, escribime.",
    contactCta: "Escribime",
    back: "Volver",
    role: "Rol",
    period: "Período",
    stack: "Stack",
    visit: "Visitar sitio",
    nextCase: "Siguiente caso",
    switchLang: "English",
    switchLangLabel: "Ver el sitio en inglés",
    theme: "Cambiar tema",
    builtWith: "Diseñado y desarrollado por Franco Campaiola con Next.js y Tailwind CSS.",
    notFound: "Esta página no existe.",
    home: "Ir al inicio",
  },
  en: {
    nav: { building: "Building", work: "Work", writing: "Writing", about: "About" },
    available: "Open to new opportunities",
    sections: {
      building: "Currently building",
      work: "Selected work",
      experience: "Experience",
      principles: "How I work",
      writing: "Writing",
      sites: "Other websites",
      about: "About",
      contact: "Contact",
    },
    exploreWork: "Explore my work",
    moreAbout: "More about me",
    experiments: "Agent experiments",
    seeHow: "See how they work",
    currentRole: "Current role",
    visitSite: "Visit site",
    writingIntro: "Notes on building products with AI: architecture decisions, trade-offs and what I learn building FACHA.",
    noPosts: "No published writing yet.",
    allPosts: "See all writing",
    minRead: "min read",
    draft: "Draft",
    resume: "View full resume",
    resumeFile: "/resume.pdf",
    readCase: "Read case study",
    present: "Present",
    contactTitle: "Let's talk",
    contactBody:
      "If you're building a product team, want to build something with AI, or just want to talk about turning an idea into a product, get in touch.",
    contactCta: "Get in touch",
    back: "Back",
    role: "Role",
    period: "Period",
    stack: "Stack",
    visit: "Visit site",
    nextCase: "Next case study",
    switchLang: "Español",
    switchLangLabel: "View the site in Spanish",
    theme: "Toggle theme",
    builtWith: "Designed and built by Franco Campaiola with Next.js and Tailwind CSS.",
    notFound: "This page doesn't exist.",
    home: "Go home",
  },
} satisfies Localized<unknown>;

export function localize(value: string | Localized, locale: Locale): string {
  return typeof value === "string" ? value : value[locale];
}
