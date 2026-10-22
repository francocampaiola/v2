import type { Localized } from "@/lib/i18n";

export const profile = {
  name: "Franco Campaiola",
  email: "franco@francocampaiola.com",
  url: "https://francocampaiola.com",
  // Mostrar/ocultar el badge "Abierto a nuevas oportunidades"
  available: true,
  role: { es: "Software Engineer & Founder", en: "Software Engineer & Founder" },
  tagline: {
    es: "Construyo productos con IA, diseño y código.",
    en: "Building products with AI, design & code.",
  },
  headline: {
    es: "Construyo productos, no solo software.",
    en: "I build products, not just software.",
  },
  intro: {
    es: "Soy ingeniero de software y builder independiente en Argentina. Combino código, IA y pensamiento de producto para convertir ideas en productos digitales útiles.",
    en: "I'm a software engineer and independent builder from Argentina. I combine code, AI and product thinking to turn ideas into useful digital products.",
  },
  about: {
    es: [
      "Llevo más de 8 años en tecnología. Empecé del lado de sistemas e infraestructura en Novocap, y eso me dejó una costumbre: pensar en cómo se opera y se mantiene lo que construyo, no solo en cómo se ve.",
      "Hoy trabajo en NotChatbot, un CRM con IA para ecommerce, y en paralelo construyo FACHA, mi propio producto. Eso me deja ver los productos desde dos lados: el de quien desarrolla dentro de un equipo y el de quien decide qué construir, por qué y con qué plata.",
      "Estudié en la Universidad Tecnológica Nacional y me recibí de Técnico en Diseño y Desarrollo Web en Escuela Da Vinci. Me muevo cómodo entre el diseño y el código: no necesito un Figma terminado para pensar una buena experiencia.",
    ],
    en: [
      "I've been in tech for over 8 years. I started on the systems and infrastructure side at Novocap, which left me with a habit: thinking about how what I build is operated and maintained, not just how it looks.",
      "Today I work at NotChatbot, an AI CRM for ecommerce, and on the side I'm building FACHA, my own product. That lets me see products from two sides: as an engineer inside a team, and as the person deciding what to build, why, and with whose money.",
      "I studied at Universidad Tecnológica Nacional and graduated in Web Design and Development from Escuela Da Vinci. I'm comfortable moving between design and code: I don't need a finished Figma file to think through a good experience.",
    ],
  },
  principles: [
    {
      title: { es: "Problema antes que stack", en: "Problem before stack" },
      body: {
        es: "Entender qué duele y a quién, antes de elegir con qué construirlo.",
        en: "Understand what hurts and for whom before choosing what to build it with.",
      },
    },
    {
      title: { es: "La IA propone, el código verifica", en: "AI proposes, code verifies" },
      body: {
        es: "Uso modelos donde hace falta criterio y código determinístico en todo lo demás.",
        en: "Models where judgment is needed, deterministic code everywhere else.",
      },
    },
    {
      title: { es: "De punta a punta", en: "End to end" },
      body: {
        es: "Del modelo de datos y los pagos al último detalle de la interfaz.",
        en: "From the data model and payments to the last detail of the interface.",
      },
    },
  ],
  social: [
    { label: "GitHub", href: "https://github.com/francocampaiola" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/francocampaiola/" },
    { label: "X", href: "https://x.com/francocampaiola" },
  ],
  skills: ["TypeScript", "Next.js", "React", "Convex", "Supabase", "Stripe", "MCP", "AI agents", "Docker", "UX/UI"],
};

export type CaseSection = { title: Localized; body: Localized };

export type Project = {
  slug: string;
  status?: Localized;
  name: string | Localized;
  year: string;
  url?: string;
  cover: string;
  summary: Localized;
  role: Localized;
  period: Localized;
  stack: string[];
  sections: CaseSection[];
  highlights: Localized<string[]>;
  gallery: { src: string; width: number; height: number; alt: Localized }[];
};

export const projects: Project[] = [
  {
    slug: "facha",
    name: "FACHA",
    year: "2026",
    url: "https://facha.app",
    cover: "/facha/cover.webp",
    status: { es: "En construcción y validación", en: "Building & validating" },
    summary: {
      es: "Workspace con IA para marcas de ropa que venden online: entiende la marca y el catálogo, detecta qué producto conviene mover y deja el contenido listo para publicar.",
      en: "AI workspace for fashion brands that sell online: it understands the brand and catalog, spots which product to push and leaves the content ready to publish.",
    },
    role: { es: "Fundador — producto, diseño e ingeniería", en: "Founder — product, design & engineering" },
    period: { es: "En curso", en: "Ongoing" },
    stack: ["Next.js 16", "TypeScript", "Convex", "Clerk", "MCP", "OpenRouter", "Sentry", "Vitest"],
    sections: [
      {
        title: { es: "El problema", en: "The problem" },
        body: {
          es: "En una marca chica de ropa, una sola persona lleva el catálogo, Instagram, la tienda, los lanzamientos y las campañas. La información está repartida entre la tienda, Meta, las fotos, el stock y las métricas, y conectarla para decidir qué hacer cada semana es puro trabajo mental. Las herramientas de IA que existen arrancan en la generación de imágenes, que es el final del problema, no el principio.",
          en: "At a small fashion brand, one person runs the catalog, Instagram, the store, launches and campaigns. Information is scattered across the store, Meta, photos, stock and metrics, and connecting it to decide what to do each week is pure mental overhead. Existing AI tools start at image generation, which is the end of the problem, not the beginning.",
        },
      },
      {
        title: { es: "Qué construí", en: "What I built" },
        body: {
          es: "El onboarding lee la web de la marca y un LLM propone un kit de marca (tono, cliente, identidad visual) que la persona revisa: solo se guarda lo que confirma. FACHA se conecta por OAuth a Mercado Libre y Shopify, e importa y sincroniza a diario catálogo, stock y ventas. Con eso detecta oportunidades sobre productos reales, arma un brief comercial y creativo, propone conceptos de anuncio y genera imágenes fieles a la prenda con su copy. También expone un servidor MCP para usar FACHA desde Claude o ChatGPT.",
          en: "Onboarding reads the brand's website and an LLM proposes a brand kit (tone, customer, visual identity) that the person reviews: only what they confirm is saved. FACHA connects via OAuth to Mercado Libre and Shopify and imports and syncs catalog, stock and sales daily. From there it spots opportunities on real products, builds a commercial and creative brief, proposes ad concepts and generates on-brand images of the actual garment with copy. It also exposes an MCP server so FACHA can be used from Claude or ChatGPT.",
        },
      },
      {
        title: { es: "Decisiones clave", en: "Key decisions" },
        body: {
          es: "La IA propone, el servidor verifica: cada acción recomendada tiene que citar evidencia (ventas, stock, catálogo) que el servidor comprueba, y lo que no tiene sustento se descarta. Las oportunidades usan señales simples, trazables y con orden determinístico, en lugar de un modelo opaco, hasta que haya datos para algo mejor. Y la generación de imágenes es una capacidad dentro del producto, no el producto: el valor está en decidir qué mostrar.",
          en: "AI proposes, the server verifies: every recommended action must cite evidence (sales, stock, catalog) that the server checks, and anything unsupported is dropped. Opportunities use simple, traceable signals with deterministic ordering instead of an opaque model, until there's data for something better. And image generation is a capability inside the product, not the product: the value is in deciding what to show.",
        },
      },
      {
        title: { es: "Dónde está hoy", en: "Where it stands" },
        body: {
          es: "Es un producto propio en etapa de validación, con el sitio y la app en producción. No muestro tracción ni testimonios porque todavía no los tengo: cuando haya resultados reales, van a estar acá.",
          en: "It's my own product, currently in validation, with the website and app in production. I don't show traction or testimonials because I don't have them yet: when there are real results, they'll be here.",
        },
      },
    ],
    highlights: {
      es: [
        "Integraciones OAuth con Mercado Libre y Shopify, con sincronización diaria",
        "Recomendaciones con evidencia verificada por el servidor",
        "Servidor MCP para usar FACHA desde Claude o ChatGPT",
      ],
      en: [
        "OAuth integrations with Mercado Libre and Shopify, synced daily",
        "Recommendations backed by server-verified evidence",
        "MCP server to use FACHA from Claude or ChatGPT",
      ],
    },
    gallery: [
      { src: "/facha/why-facha.webp", width: 1600, height: 1025, alt: { es: "Catálogo, oportunidades y contenido; FACHA desde el chat vía MCP", en: "Catalog, opportunities and content; FACHA from chat via MCP" } },
      { src: "/facha/how-it-works.webp", width: 1600, height: 838, alt: { es: "De la tienda a una idea lista para publicar", en: "From the store to a ready-to-publish idea" } },
      { src: "/facha/ads.webp", width: 1600, height: 1034, alt: { es: "Ideas de anuncio a partir de un producto", en: "Ad ideas from a product" } },
      { src: "/facha/what-you-can-do.webp", width: 1600, height: 1190, alt: { es: "Integraciones con tiendas y redes", en: "Store and social integrations" } },
    ],
  },
  {
    slug: "agents",
    name: { es: "Agentes para FACHA", en: "Agents for FACHA" },
    year: "2026",
    cover: "/agents/cover.webp",
    status: { es: "Experimentos en curso", en: "Ongoing experiments" },
    summary: {
      es: "Tres sistemas de agentes que hacen trabajo real para FACHA: uno lleva un ticket hasta un Pull Request, otro trabaja el SEO todos los días y otro produce videos cada hora.",
      en: "Three agent systems doing real work for FACHA: one takes a ticket all the way to a pull request, another works on SEO every day, and another produces videos every hour.",
    },
    role: { es: "Diseño y desarrollo", en: "Design & engineering" },
    period: { es: "2026 — en curso", en: "2026 — ongoing" },
    stack: ["Bun", "TypeScript", "Docker", "SQLite", "Claude Code", "Codex", "GitHub Apps", "Notion API", "Search Console API"],
    sections: [
      {
        title: { es: "harness-os: del ticket al Pull Request", en: "harness-os: from ticket to pull request" },
        body: {
          es: "Corre permanentemente en una VPS y lleva un ticket de Notion hasta un PR listo para revisión humana. Un agente planner escribe la spec; yo la apruebo; un implementer la construye; un quality gate corre lint, tipos, tests y build; y un reviewer de otra familia de modelos revisa el diff contra la spec. Si hay problemas bloqueantes, hay hasta tres ciclos de corrección. Nunca hace merge: eso lo hace siempre una persona.",
          en: "It runs permanently on a VPS and takes a Notion ticket to a PR ready for human review. A planner agent writes the spec; I approve it; an implementer builds it; a quality gate runs lint, types, tests and build; and a reviewer from a different model family checks the diff against the spec. Blocking issues get up to three fix cycles. It never merges: a person always does.",
        },
      },
      {
        title: { es: "seo-agent: SEO que se mide solo", en: "seo-agent: self-measuring SEO" },
        body: {
          es: "Todas las madrugadas mide facha.app en Google Search Console, revisa qué pasó con los cambios de hace 2 y 4 semanas y decide si hay una mejora clara que hacer: títulos, descripciones o una nota nueva. Un segundo agente revisa que no invente datos ni prometa funciones que FACHA no tiene, y el script descarta cualquier cambio fuera de los archivos permitidos. Cada página queda congelada 28 días después de un cambio para poder atribuir el resultado.",
          en: "Every night it measures facha.app in Google Search Console, reviews what happened with changes from 2 and 4 weeks ago, and decides whether there's a clear improvement to make: titles, descriptions or a new article. A second agent checks it doesn't invent facts or promise features FACHA doesn't have, and the script discards any change outside the allowed files. Each page is frozen for 28 days after a change so the result can be attributed.",
        },
      },
      {
        title: { es: "Estudio de videos", en: "Video studio" },
        body: {
          es: "Una rutina de Claude Code produce cada hora un video nuevo para las redes de FACHA: idea, guion para ElevenLabs y video en 9:16, 1:1 y 16:9. Los previews llegan a Google Drive con un aviso en Discord, y cada video tiene un archivo de feedback (👍 o 👎 y por qué) que alimenta las siguientes producciones.",
          en: "A Claude Code routine produces a new video for FACHA's social channels every hour: idea, ElevenLabs script and video in 9:16, 1:1 and 16:9. Previews land in Google Drive with a Discord notification, and each video has a feedback file (👍 or 👎 and why) that feeds the next productions.",
        },
      },
      {
        title: { es: "Lo que aprendí", en: "What I learned" },
        body: {
          es: "El harness decide, el prompt no: todo lo que se puede resolver con código (elegir tareas, validar, commitear, publicar) es código determinístico, y los modelos solo hacen lo que requiere criterio. La seguridad sale de lo que el sandbox no tiene: los agentes corren en containers efímeros sin tokens de GitHub, de Notion ni acceso al host. Y un run nunca espera a una persona: si necesita una decisión, termina y la pide.",
          en: "The harness decides, not the prompt: everything that can be solved with code (picking tasks, validating, committing, publishing) is deterministic code, and models only do what requires judgment. Security comes from what the sandbox doesn't have: agents run in ephemeral containers with no GitHub or Notion tokens and no host access. And a run never waits on a person: if it needs a decision, it stops and asks.",
        },
      },
    ],
    highlights: {
      es: [
        "Planner, implementer y reviewer en containers aislados, orquestados por código",
        "Cambios de SEO medidos a 2 y 4 semanas, con límites duros sobre qué puede tocar",
        "Producción de video automática con feedback humano en el loop",
      ],
      en: [
        "Planner, implementer and reviewer in isolated containers, orchestrated by code",
        "SEO changes measured at 2 and 4 weeks, with hard limits on what it can touch",
        "Automated video production with human feedback in the loop",
      ],
    },
    gallery: [],
  },
  {
    slug: "grayola",
    name: "Grayola",
    year: "2025",
    url: "https://grayola.io",
    cover: "/grayola.png",
    summary: {
      es: "Plataforma B2B de diseño como servicio: suscripciones con créditos, gestión de pedidos y pagos recurrentes.",
      en: "B2B design-as-a-service platform: credit-based subscriptions, request management and recurring payments.",
    },
    role: { es: "Tech Lead y Product Engineer", en: "Tech Lead & Product Engineer" },
    period: { es: "May 2025 — Oct 2025", en: "May 2025 — Oct 2025" },
    stack: ["Next.js", "TypeScript", "Supabase", "Stripe", "AWS", "Docker", "shadcn/ui"],
    sections: [
      {
        title: { es: "Contexto", en: "Context" },
        body: {
          es: "Grayola conecta empresas con diseñadores a través de una suscripción mensual con créditos. Las empresas cargan pedidos de diseño (briefs) y el equipo los produce. Había que pasar de una idea validada a un producto que pudiera cobrar y operar.",
          en: "Grayola connects companies with designers through a monthly credit-based subscription. Companies submit design requests (briefs) and the team delivers them. The goal was to go from a validated idea to a product that could charge customers and run day to day.",
        },
      },
      {
        title: { es: "Qué hice", en: "What I did" },
        body: {
          es: "Lideré el desarrollo técnico del MVP de punta a punta, trabajando directo con los fundadores para priorizar el roadmap. Definí la arquitectura sobre Next.js y Supabase, armé la autenticación y los permisos por organización, e implementé el flujo de briefs y el catálogo de servicios.",
          en: "I led the MVP's technical development end to end, working directly with the founders to prioritize the roadmap. I defined the architecture on Next.js and Supabase, built authentication and per-organization permissions, and implemented the brief workflow and the service catalog.",
        },
      },
      {
        title: { es: "Decisiones clave", en: "Key decisions" },
        body: {
          es: "Usé Supabase para tener base de datos, auth y storage con un equipo chico, y apoyarme en Row Level Security en lugar de reescribir permisos en cada endpoint. Modelé la facturación con Stripe Subscriptions y webhooks como fuente de verdad, para que el saldo de créditos nunca dependa del cliente.",
          en: "I chose Supabase to get database, auth and storage with a small team, relying on Row Level Security instead of rewriting permissions in every endpoint. I modeled billing with Stripe Subscriptions and webhooks as the source of truth, so the credit balance never depends on the client.",
        },
      },
    ],
    highlights: {
      es: [
        "Suscripciones y créditos con Stripe, sincronizados por webhooks",
        "Permisos por organización con Row Level Security",
        "Flujo completo de briefs: carga, seguimiento y entrega",
      ],
      en: [
        "Stripe subscriptions and credits, synced through webhooks",
        "Per-organization permissions with Row Level Security",
        "Complete brief workflow: submission, tracking and delivery",
      ],
    },
    gallery: [
      { src: "/grayola/grayola_home.png", width: 2880, height: 1364, alt: { es: "Dashboard de Grayola", en: "Grayola dashboard" } },
      { src: "/grayola/grayola_briefs.png", width: 2880, height: 1364, alt: { es: "Listado de briefs", en: "Brief list" } },
      { src: "/grayola/grayola_brief_web.png", width: 2880, height: 1364, alt: { es: "Detalle de un brief", en: "Brief detail" } },
      { src: "/grayola/grayola_catalog.png", width: 2880, height: 1364, alt: { es: "Catálogo de servicios", en: "Service catalog" } },
    ],
  },
  {
    slug: "megapix",
    name: "Megapix",
    year: "2024",
    cover: "/megapix.jpg",
    summary: {
      es: "Pagos transfronterizos entre Argentina y Brasil: comercios argentinos cobran con PIX en reales y convierten a USDT.",
      en: "Cross-border payments between Argentina and Brazil: Argentine merchants get paid via PIX in reais and convert to USDT.",
    },
    role: { es: "Full Stack Developer en Alkimiaz", en: "Full Stack Developer at Alkimiaz" },
    period: { es: "May 2024 — May 2025", en: "May 2024 — May 2025" },
    stack: ["Next.js", "TypeScript", "Chakra UI", "TanStack Query", "Zod", "Docker", "Sentry"],
    sections: [
      {
        title: { es: "Contexto", en: "Context" },
        body: {
          es: "Megapix es un producto de la fintech Polynomium. Permite que comercios argentinos reciban pagos de turistas brasileños con PIX, el sistema de pagos instantáneos del Banco Central de Brasil, y conviertan esos reales a USDT sin intermediarios informales.",
          en: "Megapix is a product by the fintech Polynomium. It lets Argentine merchants accept payments from Brazilian tourists through PIX, the Central Bank of Brazil's instant payment system, and convert those reais to USDT without informal intermediaries.",
        },
      },
      {
        title: { es: "Qué hice", en: "What I did" },
        body: {
          es: "Desarrollé el frontend de la plataforma dentro del equipo de Alkimiaz: los flujos de cobro, el onboarding de comercios y los paneles de operaciones. Trabajamos con Scrum, y me ocupé también de los entornos con Docker y del monitoreo de errores en producción con Sentry.",
          en: "I built the platform's frontend as part of the Alkimiaz team: payment flows, merchant onboarding and operations dashboards. We worked in Scrum, and I also owned the Docker environments and production error monitoring with Sentry.",
        },
      },
      {
        title: { es: "Decisiones clave", en: "Key decisions" },
        body: {
          es: "En un producto de pagos, un formulario mal validado es plata mal cobrada. Centralicé las validaciones en esquemas de Zod compartidos con react-hook-form, y manejé el estado del servidor con TanStack Query para que los estados de cada operación (pendiente, acreditada, convertida) se reflejen sin recargar.",
          en: "In a payments product, a badly validated form means money charged wrong. I centralized validation in Zod schemas shared with react-hook-form, and handled server state with TanStack Query so each operation's status (pending, credited, converted) updates without a reload.",
        },
      },
    ],
    highlights: {
      es: [
        "Cobros con PIX y conversión a USDT",
        "Validaciones tipadas de punta a punta con Zod",
        "Monitoreo de errores en producción con Sentry",
      ],
      en: [
        "PIX payments and conversion to USDT",
        "End-to-end typed validation with Zod",
        "Production error monitoring with Sentry",
      ],
    },
    gallery: [
      { src: "/megapix/megapix_home_static.webp", width: 1200, height: 675, alt: { es: "Home de Megapix", en: "Megapix home" } },
      { src: "/megapix/megapix_pagossinfronteras_static.webp", width: 1200, height: 675, alt: { es: "Pagos sin fronteras", en: "Borderless payments" } },
      { src: "/megapix/megapix_negociossinlimites_static.webp", width: 1200, height: 675, alt: { es: "Negocios sin límites", en: "Business without limits" } },
      { src: "/megapix/megapix_phone_static.webp", width: 470, height: 900, alt: { es: "Megapix en mobile", en: "Megapix on mobile" } },
    ],
  },
  {
    slug: "propinita",
    name: "Propinita",
    year: "2025",
    cover: "/propinita.png",
    summary: {
      es: "Propinas digitales con QR y Mercado Pago. Producto propio: lo ideé, diseñé y desarrollé como fundador.",
      en: "Digital tips with QR codes and Mercado Pago. My own product: I conceived, designed and built it as founder.",
    },
    role: { es: "Fundador — diseño y desarrollo", en: "Founder — design & engineering" },
    period: { es: "2024 — 2025", en: "2024 — 2025" },
    stack: ["Next.js", "TypeScript", "Chakra UI", "Mercado Pago"],
    sections: [
      {
        title: { es: "Contexto", en: "Context" },
        body: {
          es: "Cada vez menos gente anda con efectivo, pero las propinas siguen funcionando como hace 50 años. Propinita nace de esa pregunta: que cualquier trabajador pueda recibir una propina escaneando un QR, directo a su billetera virtual y sin intermediarios.",
          en: "Fewer and fewer people carry cash, yet tipping still works like it did 50 years ago. Propinita started from that question: letting any worker receive a tip by scanning a QR code, straight to their digital wallet with no middleman.",
        },
      },
      {
        title: { es: "Qué hice", en: "What I did" },
        body: {
          es: "Todo: investigación, identidad, diseño de UX/UI y desarrollo. Lo construí como tesis de la Tecnicatura en Escuela Da Vinci. Incluye registro y onboarding, vinculación con Mercado Pago, generación de QR personales y un panel para ver las propinas recibidas.",
          en: "Everything: research, branding, UX/UI design and engineering. I built it as my thesis at Escuela Da Vinci. It includes sign-up and onboarding, Mercado Pago account linking, personal QR code generation and a dashboard to track received tips.",
        },
      },
      {
        title: { es: "Decisiones clave", en: "Key decisions" },
        body: {
          es: "El pago va directo de quien da la propina a la cuenta de Mercado Pago de quien la recibe: Propinita nunca toca la plata. Eso simplifica la parte regulatoria y genera confianza en los dos lados. El onboarding se diseñó para completarse desde el celular en pocos pasos, porque ahí es donde está el usuario.",
          en: "Payments go straight from the tipper to the recipient's Mercado Pago account: Propinita never holds the money. That simplifies compliance and builds trust on both sides. Onboarding was designed to be completed on a phone in a few steps, because that's where the user is.",
        },
      },
    ],
    highlights: {
      es: [
        "Producto propio, de la idea al lanzamiento",
        "Vinculación de cuentas y cobros con Mercado Pago",
        "QR personal por trabajador",
      ],
      en: [
        "My own product, from idea to launch",
        "Mercado Pago account linking and payments",
        "Personal QR code per worker",
      ],
    },
    gallery: [
      { src: "/propinita/propinita_home.png", width: 2880, height: 1644, alt: { es: "Home de Propinita", en: "Propinita home" } },
      { src: "/propinita/propinita_cobrar.png", width: 2880, height: 1364, alt: { es: "Pantalla para cobrar", en: "Get paid screen" } },
      { src: "/propinita/propinita_login.png", width: 2880, height: 1364, alt: { es: "Inicio de sesión", en: "Sign in" } },
      { src: "/propinita/propinita_new_account.png", width: 2880, height: 1364, alt: { es: "Creación de cuenta", en: "Account creation" } },
    ],
  },
];

// Experiencia profesional principal: tarjeta en "Trabajo seleccionado" sin página de caso propia
export const currentRole = {
  company: "NotChatbot",
  url: "https://notchatbot.com",
  cover: "/notchatbot/cover.webp",
  year: "2025 —",
  summary: {
    es: "CRM con IA para ecommerce que atiende y vende por WhatsApp, Instagram, Mercado Libre, email y chat web. Desarrollo herramientas basadas en IA, automatizaciones, integraciones y MCP para empresas.",
    en: "AI CRM for ecommerce that handles support and sales over WhatsApp, Instagram, Mercado Libre, email and web chat. I build AI-powered tools, automations, integrations and MCP for businesses.",
  },
  role: { es: "Full Stack Developer", en: "Full Stack Developer" },
};

export const experiments: { name: string; description: Localized }[] = [
  {
    name: "harness-os",
    description: { es: "Agentes que llevan un ticket de Notion hasta un PR", en: "Agents that take a Notion ticket to a PR" },
  },
  {
    name: "seo-agent",
    description: { es: "Un agente que mide y mejora el SEO cada día", en: "An agent that measures and improves SEO daily" },
  },
  {
    name: "studio",
    description: { es: "Un video nuevo para redes, cada hora", en: "A new social video, every hour" },
  },
];

export type Job = {
  company: string;
  url?: string;
  role: Localized;
  start: string;
  end?: string;
  summary: Localized;
};

export const experience: Job[] = [
  {
    company: "NotChatbot",
    url: "https://notchatbot.com",
    role: { es: "Full Stack Developer", en: "Full Stack Developer" },
    start: "2025",
    summary: {
      es: "CRM con IA para ecommerce. Desarrollo herramientas basadas en IA, automatizaciones, integraciones y MCP para empresas. Next.js, Convex y TypeScript.",
      en: "AI CRM for ecommerce. I build AI-powered tools, automations, integrations and MCP for businesses. Next.js, Convex and TypeScript.",
    },
  },
  {
    company: "Grayola",
    url: "https://grayola.io",
    role: { es: "Tech Lead y Product Engineer", en: "Tech Lead & Product Engineer" },
    start: "2025",
    end: "2025",
    summary: {
      es: "Lideré el desarrollo del MVP con los fundadores: arquitectura, auth, suscripciones con Stripe y gestión de pedidos.",
      en: "Led MVP development with the founders: architecture, auth, Stripe subscriptions and request management.",
    },
  },
  {
    company: "Alkimiaz",
    url: "https://alkimiaz.com",
    role: { es: "Full Stack Developer", en: "Full Stack Developer" },
    start: "2024",
    end: "2025",
    summary: {
      es: "Desarrollé Megapix, plataforma de pagos con PIX entre Argentina y Brasil, para la fintech Polynomium.",
      en: "Built Megapix, a PIX payments platform between Argentina and Brazil, for the fintech Polynomium.",
    },
  },
  {
    company: "Novocap S.A.",
    url: "https://www.novocap.com",
    role: { es: "Analista de Sistemas Ssr", en: "Ssr. Systems Analyst" },
    start: "2017",
    end: "2024",
    summary: {
      es: "Lideré la implementación de SAP S/4HANA, desarrollé sistemas internos y administré infraestructura, sitios corporativos y Microsoft 365.",
      en: "Led the SAP S/4HANA rollout, built internal systems and managed infrastructure, corporate websites and Microsoft 365.",
    },
  },
];

export const sites: { name: string; url: string; description: Localized }[] = [
  {
    name: "Polynomium",
    url: "https://polynomium-web-gray.vercel.app/",
    description: { es: "Sitio corporativo de la fintech", en: "Fintech corporate website" },
  },
  {
    name: "Alkimiaz",
    url: "https://alkimiaz-web.vercel.app/",
    description: { es: "Sitio corporativo de la software factory", en: "Software studio corporate website" },
  },
];
