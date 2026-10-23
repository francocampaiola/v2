// Todo el contenido del portfolio, en español e inglés. Los datos de cada milestone salen del CV, LinkedIn,
// los repos de cada proyecto y el backlog de Notion de FACHA: nada de números inventados.

export const SITE_URL = "https://francocampaiola.com";
export const EMAIL = "franco@francocampaiola.com";

export const LINKS = {
  linkedin: "https://www.linkedin.com/in/francocampaiola/",
  github: "https://github.com/francocampaiola",
  x: "https://x.com/francocampaiola",
  cv: { es: "/cv.pdf", en: "/resume.pdf" },
};

// Los milestones de la home. `visual` elige la animación (src/components/milestones/visuals.js) y `size`
// el ancho en la grilla de escritorio (1 a 3 columnas de 6).
export const MILESTONES = [
  {
    id: "views",
    visual: "views",
    size: "wide",
    tint: "violet",
    org: "NotChatBot",
    year: "2025",
    es: {
      title: "Dashboards que se arman pidiéndolos",
      body: "Hice Views en NotChatBot: le pedís a la IA el tablero que necesitás y lo arma con métricas en tiempo real. Después lo ajustás hablándole, desde el chat o desde otra IA conectada.",
    },
    en: {
      title: "Dashboards you build by asking",
      body: "I built Views at NotChatBot: you ask the AI for the dashboard you need and it builds it with live metrics. Then you tweak it by talking to it, from the chat or from another connected AI.",
    },
  },
  {
    id: "facha",
    visual: "facha",
    size: "narrow",
    tint: "pink",
    org: "FACHA",
    year: "2026",
    es: {
      title: "Fundé FACHA",
      body: "Una herramienta para marcas de ropa: conectan su tienda y les arma fotos, videos y campañas con sus propios productos.",
    },
    en: {
      title: "I founded FACHA",
      body: "A tool for clothing brands: they connect their store and it creates photos, videos and campaigns with their own products.",
    },
  },
  {
    id: "harness",
    visual: "harness",
    size: "half",
    tint: "accent",
    org: "FACHA",
    year: "2026",
    es: {
      title: "Un equipo de agentes que programa solo",
      body: "Escribo lo que quiero en Notion y un sistema que armé en un servidor lo convierte en código revisado, listo para que lo apruebe. En cuatro semanas terminó 435 tareas.",
    },
    en: {
      title: "A team of agents that codes on its own",
      body: "I write what I want in Notion and a system I built on a server turns it into reviewed code, ready for my approval. In four weeks it finished 435 tasks.",
    },
  },
  {
    id: "voice",
    visual: "voice",
    size: "half",
    tint: "sky",
    org: "FACHA",
    year: "2026",
    es: {
      title: "Le hablo al backlog",
      body: "Desde el celular, en modo voz, le cuento a ChatGPT qué quiero hacer y queda cargado como tarea en Notion, lista para que los agentes la tomen.",
    },
    en: {
      title: "I talk to my backlog",
      body: "From my phone, in voice mode, I tell ChatGPT what I want to build and it lands in Notion as a task, ready for the agents to pick up.",
    },
  },
  {
    id: "seo",
    visual: "seo",
    size: "narrow",
    tint: "accent",
    org: "FACHA",
    year: "2026",
    es: {
      title: "La web de FACHA, mucho más rápida",
      body: "En el celular, la home pasó de tardar 7,2 s en mostrarse a menos de 3 s (en pruebas de laboratorio). Y el blog lo mantiene un agente de SEO.",
    },
    en: {
      title: "FACHA's site, much faster",
      body: "On mobile, the home page went from 7.2 s to show up to under 3 s (in lab tests). And the blog is kept up to date by an SEO agent.",
    },
  },
  {
    id: "persi",
    visual: "persi",
    size: "narrow",
    tint: "warm",
    org: "Persi",
    year: "2026",
    es: {
      title: "Mis finanzas, en una charla",
      body: "Persi reemplazó mi Excel: le digo “gasté 28 lucas en Coto con la Visa” y lo registra. También le pregunto desde Claude o ChatGPT.",
    },
    en: {
      title: "My finances, in a chat",
      body: "Persi replaced my spreadsheet: I say “I spent 28k at the supermarket with my Visa” and it logs it. I can also ask it from Claude or ChatGPT.",
    },
  },
  {
    id: "grayola",
    visual: "grayola",
    size: "narrow",
    tint: "accent",
    org: "Grayola",
    year: "2025",
    es: {
      title: "De developer a Tech Lead en 3 meses",
      body: "Entré a Grayola como developer y a los tres meses pasé a liderar el desarrollo de la plataforma: cuentas, proyectos y pagos por suscripción.",
    },
    en: {
      title: "From developer to Tech Lead in 3 months",
      body: "I joined Grayola as a developer and three months later I was leading the platform's development: accounts, projects and subscription payments.",
    },
  },
  {
    id: "megapix",
    visual: "megapix",
    size: "half",
    tint: "accent",
    org: "Alkimiaz",
    year: "2024",
    es: {
      title: "Pagar con Pix en Argentina",
      body: "En Alkimiaz trabajé en Megapix, una plataforma para que los brasileños paguen con Pix en Argentina. El lanzamiento salió en la prensa.",
    },
    en: {
      title: "Paying with Pix in Argentina",
      body: "At Alkimiaz I worked on Megapix, a platform that lets Brazilians pay with Pix in Argentina. The launch made the news.",
    },
  },
  {
    id: "propinita",
    visual: "propinita",
    size: "half",
    tint: "pink",
    org: "Propinita",
    year: "2025",
    es: {
      title: "Mi tesis: propinas sin efectivo",
      body: "Para recibirme diseñé y desarrollé Propinita: dejás propina escaneando un QR y pagás con Mercado Pago. Con marca, landing y plan comercial.",
    },
    en: {
      title: "My thesis: cashless tips",
      body: "To graduate I designed and built Propinita: you leave a tip by scanning a QR code and paying with Mercado Pago. Brand, landing page and go-to-market plan included.",
    },
  },
];

export const PROJECTS = [
  {
    id: "facha",
    name: "FACHA",
    url: "https://facha.app",
    image: "/milestones/16-petroleum-hoodie-studio.webp",
    es: { kind: "Producto propio", body: "Fotos, videos y campañas para marcas de ropa, a partir de su propio catálogo." },
    en: { kind: "My product", body: "Photos, videos and campaigns for clothing brands, made from their own catalog." },
  },
  {
    id: "persi",
    name: "Persi",
    tint: "warm",
    es: { kind: "Producto propio", body: "Finanzas personales con un asistente de IA: registra gastos hablándole, avisa vencimientos y arma gráficos." },
    en: { kind: "My product", body: "Personal finance with an AI assistant: log expenses by talking, get due-date reminders and charts." },
  },
  {
    id: "reservita",
    name: "Reservita",
    url: "https://reservita.app",
    tint: "sky",
    es: { kind: "Producto propio", body: "Una app para tomar reservas online." },
    en: { kind: "My product", body: "An app to take bookings online." },
  },
  {
    id: "alquimia",
    name: "Alquimia Crochet",
    url: "https://alquimiacrochet.com",
    tint: "violet",
    es: { kind: "Sitio", body: "El sitio de Alquimia Crochet, el emprendimiento de tejido de mi mamá." },
    en: { kind: "Website", body: "The website for Alquimia Crochet, my mom's crochet business." },
  },
  {
    id: "propinita",
    name: "Propinita",
    url: "/projects/propinita",
    image: "/propinita.png",
    es: { kind: "Tesis", body: "Propinas digitales con QR y Mercado Pago. Mi proyecto final de la carrera." },
    en: { kind: "Thesis", body: "Digital tips with QR codes and Mercado Pago. My final degree project." },
  },
  {
    id: "grayola",
    name: "Grayola",
    url: "/projects/grayola",
    image: "/grayola.png",
    es: { kind: "Tech Lead", body: "Plataforma de diseño por suscripción para empresas." },
    en: { kind: "Tech Lead", body: "A design-as-a-subscription platform for companies." },
  },
  {
    id: "megapix",
    name: "Megapix",
    url: "/projects/megapix",
    image: "/megapix.jpg",
    es: { kind: "Alkimiaz", body: "Pagos con Pix para brasileños en Argentina." },
    en: { kind: "Alkimiaz", body: "Pix payments for Brazilians in Argentina." },
  },
  {
    id: "polynomium",
    name: "Polynomium",
    url: "https://polynomium-web-gray.vercel.app/",
    image: "/polynomium.png",
    es: { kind: "Sitio", body: "Sitio institucional." },
    en: { kind: "Website", body: "Company website." },
  },
];

export const EXPERIENCE = [
  {
    org: "NotChatBot",
    url: "https://notchatbot.com",
    period: { es: "Oct 2025 — hoy", en: "Oct 2025 — now" },
    role: "Full Stack Developer",
    es: "Una plataforma que usa IA para que las empresas atiendan a sus clientes. Ahí hice Views, los dashboards que se arman pidiéndolos.",
    en: "A platform that uses AI so companies can talk to their customers. That's where I built Views, dashboards you build by asking.",
  },
  {
    org: "Grayola",
    url: "https://grayola.io",
    period: { es: "May — Oct 2025", en: "May — Oct 2025" },
    role: "Full Stack Developer → Tech Lead",
    es: "Diseño por suscripción para empresas. Lideré el desarrollo de la plataforma desde la idea hasta el lanzamiento.",
    en: "Design as a subscription for companies. I led the platform's development from idea to launch.",
  },
  {
    org: "Alkimiaz",
    url: "https://alkimiaz.com",
    period: { es: "May 2024 — May 2025", en: "May 2024 — May 2025" },
    role: "Full Stack Developer",
    es: "Trabajé en Megapix, pagos con Pix entre Brasil y Argentina, junto a los equipos de diseño y backend.",
    en: "I worked on Megapix, Pix payments between Brazil and Argentina, with the design and backend teams.",
  },
  {
    org: "Novocap",
    url: "https://www.novocap.com",
    period: { es: "Jul 2017 — May 2024", en: "Jul 2017 — May 2024" },
    role: { es: "Analista de Sistemas", en: "Systems Analyst" },
    es: "Casi siete años en IT: acompañé la implementación de SAP S/4HANA y llevé Microsoft Teams e Intune a toda la empresa.",
    en: "Almost seven years in IT: I supported the SAP S/4HANA rollout and brought Microsoft Teams and Intune to the whole company.",
  },
];

export const SKILLS = [
  {
    id: "product",
    es: { title: "Producto", body: "De la idea al lanzamiento: entender qué hace falta, diseñarlo y llevarlo a producción.", proof: ["FACHA", "Persi", "Propinita"] },
    en: { title: "Product", body: "From idea to launch: figuring out what's needed, designing it and shipping it.", proof: ["FACHA", "Persi", "Propinita"] },
  },
  {
    id: "ai",
    es: { title: "IA y agentes", body: "Productos que usan IA de verdad y agentes que trabajan solos, con control humano.", proof: ["Views", "harness-os", "Persi AI", "MCP"] },
    en: { title: "AI & agents", body: "Products that really use AI, and agents that work on their own with a human in control.", proof: ["Views", "harness-os", "Persi AI", "MCP"] },
  },
  {
    id: "seo",
    es: {
      title: "SEO",
      body: "Sitios rápidos, bien descriptos para Google y preparados para que los lean las IAs.",
      proof: ["Carga en celular: 7,2 s → menos de 3 s", "Blog mantenido por un agente", "llms.txt", "Datos estructurados"],
    },
    en: {
      title: "SEO",
      body: "Fast websites, well described for Google and ready to be read by AIs.",
      proof: ["Mobile load: 7.2 s → under 3 s", "Blog run by an agent", "llms.txt", "Structured data"],
    },
  },
  {
    id: "web",
    es: { title: "Desarrollo web", body: "Apps y sitios modernos, rápidos y fáciles de usar.", proof: ["React", "Next.js", "TypeScript", "Tailwind"] },
    en: { title: "Web development", body: "Modern, fast and easy-to-use apps and websites.", proof: ["React", "Next.js", "TypeScript", "Tailwind"] },
  },
  {
    id: "payments",
    es: { title: "Pagos", body: "Cobros, suscripciones y billeteras, en Argentina y afuera.", proof: ["Stripe", "Mercado Pago", "Pix"] },
    en: { title: "Payments", body: "Checkouts, subscriptions and wallets, in Argentina and abroad.", proof: ["Stripe", "Mercado Pago", "Pix"] },
  },
  {
    id: "lead",
    es: { title: "Liderazgo", body: "Ordenar el trabajo de un equipo y hablar el idioma de los fundadores.", proof: ["Tech Lead en Grayola"] },
    en: { title: "Leadership", body: "Organizing a team's work and speaking the founders' language.", proof: ["Tech Lead at Grayola"] },
  },
];

export const POSTS = [
  {
    slug: "harness-os-notion-chatgpt-voz",
    date: "2026-10-23",
    cover: "/blog/harness-os/flujo-ticket.svg",
    es: {
      title: "Cómo armé un sistema que convierte tickets de Notion en Pull Requests (y lo manejo hablando con ChatGPT)",
      description:
        "harness-os corre en un servidor, toma tareas de Notion, las planifica, las programa, las revisa y abre el PR solo. Así lo armé y así lo manejo en modo voz desde ChatGPT.",
    },
  },
];

export const UI = {
  es: {
    nav: { milestones: "Milestones", projects: "Proyectos", experience: "Experiencia", skills: "Skills", blog: "Blog" },
    hero: {
      kicker: "Franco Campaiola · Buenos Aires",
      title: "Armo productos con IA, de la idea al lanzamiento.",
      lead: "Soy desarrollador full stack y fundador de FACHA. Me gusta construir cosas que la gente usa: herramientas con IA, pagos, y sistemas que trabajan solos.",
      contact: "Escribime",
      cv: "Descargar CV",
      now: "Hoy en NotChatBot",
    },
    sections: {
      milestones: { title: "Cosas que hice y de las que estoy orgulloso.", lead: "Algunos hitos de mis trabajos y proyectos, contados con la pieza que los explica." },
      projects: { title: "Proyectos", lead: "Productos propios, trabajos y sitios." },
      experience: { title: "Dónde trabajé" },
      skills: { title: "Lo que sé hacer", lead: "Cada skill, con algo concreto que lo demuestra." },
      blog: { title: "Blog", lead: "Notas sobre cómo armo las cosas." },
      contact: { title: "¿Armamos algo?", lead: "Escribime por mail o por LinkedIn." },
    },
    visit: "Ver sitio",
    read: "Leer nota",
    more: "Ver proyecto",
    back: "Volver",
    language: "Idioma",
  },
  en: {
    nav: { milestones: "Milestones", projects: "Projects", experience: "Experience", skills: "Skills", blog: "Blog" },
    hero: {
      kicker: "Franco Campaiola · Buenos Aires",
      title: "I build AI products, from idea to launch.",
      lead: "I'm a full stack developer and the founder of FACHA. I like building things people use: AI tools, payments, and systems that work on their own.",
      contact: "Get in touch",
      cv: "Download resume",
      now: "Now at NotChatBot",
    },
    sections: {
      milestones: { title: "Things I built and I'm proud of.", lead: "A few milestones from my jobs and projects, told with the piece that explains them." },
      projects: { title: "Projects", lead: "My own products, client work and websites." },
      experience: { title: "Where I've worked" },
      skills: { title: "What I do", lead: "Each skill, with something concrete that backs it up." },
      blog: { title: "Blog", lead: "Notes on how I build things." },
      contact: { title: "Let's build something", lead: "Email me or reach out on LinkedIn." },
    },
    visit: "Visit site",
    read: "Read post",
    more: "See project",
    back: "Back",
    language: "Language",
  },
};
