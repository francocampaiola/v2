import type { Localized } from "@/lib/i18n";

// Las páginas de caso de cada trabajo y proyecto personal (FACHA tiene la suya, con su grilla de demos).
export type CaseKind = "work" | "project";

export type Case = {
  slug: string;
  kind: CaseKind;
  name: string;
  status?: Localized;
  summary: Localized;
  meta: { role: Localized; period: Localized; stack: string; link?: { label: string; href: string } };
  demoCaption: Localized;
  context: { label: Localized; title: Localized; body: Localized };
  built: { title: Localized; items: Localized<string[]> };
  decisions: { label: Localized; items: { title: Localized; body: Localized }[] };
  outcome: { title: Localized; body: Localized };
  image: string;
  imageAlt: Localized;
};

const sample = {
  es: "Demo con datos de ejemplo, recreada a partir del producto.",
  en: "Demo with sample data, recreated from the product.",
};

export const cases: Case[] = [
  {
    slug: "notchatbot",
    kind: "work",
    name: "NotChatbot",
    status: { es: "Rol actual", en: "Current role" },
    summary: {
      es: "CRM con IA para ecommerce. Soy el responsable de las métricas del producto y construí Views: dashboards inteligentes que se arman hablándole a una IA.",
      en: "AI CRM for ecommerce. I own the product's metrics and built Views: smart dashboards you create by talking to an AI.",
    },
    meta: {
      role: { es: "Full Stack Developer · Responsable de métricas", en: "Full Stack Developer · Metrics owner" },
      period: { es: "oct 2025 — hoy", en: "Oct 2025 — now" },
      stack: "Next.js · Convex · TypeScript · Vercel · LLMs",
      link: { label: "notchatbot.com", href: "https://notchatbot.com" },
    },
    demoCaption: sample,
    context: {
      label: { es: "01 — El problema", en: "01 — The problem" },
      title: {
        es: "Las marcas tienen miles de conversaciones por día, y entenderlas no puede depender de un reporte fijo.",
        en: "Brands have thousands of conversations a day, and understanding them can't depend on a fixed report.",
      },
      body: {
        es: "NotChatbot atiende y vende por WhatsApp, Instagram, Mercado Libre, email y chat web. Los datos estaban, pero cada pregunta nueva (¿qué canal vende más?, ¿cuánto resuelve la IA sola?, ¿dónde se traban las consultas?) era un pedido al equipo. Las métricas fijas responden las preguntas de ayer, no las de hoy.",
        en: "NotChatbot handles support and sales over WhatsApp, Instagram, Mercado Libre, email and web chat. The data was there, but every new question (which channel sells most? how much does the AI solve on its own? where do conversations get stuck?) was a request to the team. Fixed metrics answer yesterday's questions, not today's.",
      },
    },
    built: {
      title: { es: "Views: le preguntás a la IA y te arma el dashboard.", en: "Views: ask the AI and it builds the dashboard." },
      items: {
        es: [
          "Views: el usuario pide en lenguaje natural lo que quiere ver y la IA arma un dashboard con KPIs, gráficos y tablas",
          "Dashboards que se guardan, se ajustan conversando (“sumale el mes pasado”) y se actualizan solos con datos nuevos",
          "La capa de métricas del producto: definiciones, cálculos y consultas que alimentan Views y los reportes",
          "Funcionalidades full stack con integraciones de IA y de ecommerce, en Next.js y Convex",
        ],
        en: [
          "Views: users ask in plain language for what they want to see and the AI builds a dashboard with KPIs, charts and tables",
          "Dashboards that are saved, refined by chatting (“add last month”) and refresh themselves with new data",
          "The product's metrics layer: the definitions, calculations and queries behind Views and reporting",
          "Full-stack features with AI and ecommerce integrations, in Next.js and Convex",
        ],
      },
    },
    decisions: {
      label: { es: "03 — Decisiones clave", en: "03 — Key decisions" },
      items: [
        {
          title: { es: "La IA arma la vista, el sistema calcula", en: "AI builds the view, the system computes" },
          body: {
            es: "El modelo traduce la pregunta en qué métricas mostrar y cómo. Los números salen siempre de las consultas, nunca del modelo.",
            en: "The model turns the question into which metrics to show and how. Numbers always come from queries, never from the model.",
          },
        },
        {
          title: { es: "Una sola definición por métrica", en: "One definition per metric" },
          body: {
            es: "Cada métrica se define una vez y se reutiliza en Views y en los reportes: el mismo número dice lo mismo en todos lados.",
            en: "Each metric is defined once and reused in Views and reports: the same number means the same thing everywhere.",
          },
        },
        {
          title: { es: "Dashboards que se conversan", en: "Dashboards you talk to" },
          body: {
            es: "En lugar de un editor de gráficos, el dashboard se ajusta pidiendo cambios. El que sabe del negocio no necesita saber de datos.",
            en: "Instead of a chart editor, you refine the dashboard by asking. Business people don't need to be data people.",
          },
        },
      ],
    },
    outcome: {
      title: { es: "Soy el responsable de las métricas de NotChatbot.", en: "I own NotChatbot's metrics." },
      body: {
        es: "Views pasó de idea a funcionalidad del producto, y todo lo que se mide en NotChatbot pasa por la capa de métricas que mantengo.",
        en: "Views went from idea to product feature, and everything measured in NotChatbot goes through the metrics layer I maintain.",
      },
    },
    image: "/pixel/notchatbot.webp",
    imageAlt: { es: "Franco programando junto al carpincho de NotChatbot, en pixel art", en: "Franco coding next to the NotChatbot capybara, in pixel art" },
  },
  {
    slug: "grayola",
    kind: "work",
    name: "Grayola",
    summary: {
      es: "Plataforma B2B de diseño como servicio. Fui Tech Lead y el responsable del MVP, de la arquitectura al primer cobro.",
      en: "B2B design-as-a-service platform. I was Tech Lead and owned the MVP, from architecture to the first payment.",
    },
    meta: {
      role: { es: "Tech Lead · Responsable del MVP", en: "Tech Lead · MVP owner" },
      period: { es: "may 2025 — oct 2025", en: "May 2025 — Oct 2025" },
      stack: "Next.js · Supabase · Stripe · AWS · shadcn/ui",
      link: { label: "grayola.io", href: "https://grayola.io" },
    },
    demoCaption: sample,
    context: {
      label: { es: "01 — El contexto", en: "01 — The context" },
      title: {
        es: "Las empresas necesitan diseño todas las semanas, pero contratar un equipo propio es caro y lento.",
        en: "Companies need design every week, but hiring an in-house team is slow and expensive.",
      },
      body: {
        es: "Grayola resuelve eso con una suscripción mensual de créditos: la empresa carga un pedido de diseño (un brief) y un equipo de diseñadores lo produce. Había que pasar de una idea validada a un producto que pudiera cobrar, recibir pedidos y entregarlos.",
        en: "Grayola solves it with a monthly credit subscription: the company submits a design request (a brief) and a team of designers delivers it. The goal was to go from a validated idea to a product that could charge, take requests and deliver them.",
      },
    },
    built: {
      title: { es: "El MVP completo, trabajando directo con los fundadores.", en: "The whole MVP, working directly with the founders." },
      items: {
        es: [
          "La arquitectura full stack sobre Next.js y Supabase",
          "Autenticación y permisos por organización",
          "Suscripciones con créditos en Stripe, con pagos recurrentes",
          "El flujo de briefs: carga, seguimiento y entrega",
          "Catálogo de servicios y gestión de proyectos",
        ],
        en: [
          "The full-stack architecture on Next.js and Supabase",
          "Authentication and per-organization permissions",
          "Credit-based subscriptions on Stripe, with recurring billing",
          "The brief workflow: submission, tracking and delivery",
          "Service catalog and project management",
        ],
      },
    },
    decisions: {
      label: { es: "03 — Decisiones clave", en: "03 — Key decisions" },
      items: [
        {
          title: { es: "Base de datos, auth y storage en un solo lugar", en: "Database, auth and storage in one place" },
          body: {
            es: "Con un equipo chico, Supabase dio todo lo necesario sin montar infraestructura propia, y los permisos viven en la base.",
            en: "With a small team, Supabase covered everything without running our own infrastructure, and permissions live in the database.",
          },
        },
        {
          title: { es: "Stripe como fuente de verdad", en: "Stripe as the source of truth" },
          body: {
            es: "Los créditos se actualizan con los eventos de Stripe, así el saldo nunca depende de lo que diga el navegador.",
            en: "Credits update from Stripe events, so the balance never depends on what the browser says.",
          },
        },
        {
          title: { es: "Un MVP que cobra desde el día uno", en: "An MVP that charges from day one" },
          body: {
            es: "Prioricé el circuito completo (pagar, pedir, recibir) antes que cualquier detalle: validar el modelo era lo urgente.",
            en: "I prioritized the full loop (pay, request, receive) over any detail: validating the model was what mattered.",
          },
        },
      ],
    },
    outcome: {
      title: { es: "Llevé el MVP de cero a producción.", en: "I took the MVP from zero to production." },
      body: {
        es: "Fue mi primera vez como Tech Lead: definir el roadmap con los fundadores, decidir la arquitectura y entregar un producto que cobra y opera.",
        en: "My first time as Tech Lead: shaping the roadmap with the founders, choosing the architecture and shipping a product that charges and operates.",
      },
    },
    image: "/pixel/grayola.webp",
    imageAlt: { es: "Franco liderando al equipo de diseño de Grayola frente a un tablero kanban, en pixel art", en: "Franco leading Grayola's design team in front of a kanban board, in pixel art" },
  },
  {
    slug: "alkimiaz",
    kind: "work",
    name: "Alkimiaz",
    summary: {
      es: "Software factory donde desarrollé Megapix, la plataforma de la fintech Polynomium para cobrar con PIX entre Argentina y Brasil.",
      en: "Software studio where I built Megapix, fintech Polynomium's platform for PIX payments between Argentina and Brazil.",
    },
    meta: {
      role: { es: "Full Stack Developer", en: "Full Stack Developer" },
      period: { es: "may 2024 — may 2025", en: "May 2024 — May 2025" },
      stack: "Next.js · TypeScript · TanStack Query · Zod · Docker · Sentry",
      link: { label: "alkimiaz.com", href: "https://alkimiaz.com" },
    },
    demoCaption: sample,
    context: {
      label: { es: "01 — El problema", en: "01 — The problem" },
      title: {
        es: "Los turistas brasileños pagan con PIX, pero un comercio argentino no tenía cómo cobrarlo.",
        en: "Brazilian tourists pay with PIX, but an Argentine shop had no way to accept it.",
      },
      body: {
        es: "PIX es el sistema de pagos instantáneos del Banco Central de Brasil. Megapix le permite a un comercio argentino cobrar en reales con un QR y convertirlos a USDT al instante, sin cambistas ni efectivo.",
        en: "PIX is the Central Bank of Brazil's instant payment system. Megapix lets an Argentine shop charge in reais with a QR code and convert them to USDT instantly, with no money changers or cash.",
      },
    },
    built: {
      title: { es: "El frontend de un producto donde cada error es plata.", en: "The frontend of a product where every bug is money." },
      items: {
        es: [
          "Flujos de cobro con QR PIX y estados de cada operación",
          "Onboarding de comercios y paneles de operaciones",
          "Validaciones tipadas de punta a punta con Zod",
          "Entornos con Docker y monitoreo de errores en producción con Sentry",
        ],
        en: [
          "PIX QR payment flows and the status of each operation",
          "Merchant onboarding and operations dashboards",
          "End-to-end typed validation with Zod",
          "Docker environments and production error monitoring with Sentry",
        ],
      },
    },
    decisions: {
      label: { es: "03 — Decisiones clave", en: "03 — Key decisions" },
      items: [
        {
          title: { es: "Validar una sola vez", en: "Validate once" },
          body: {
            es: "Los mismos esquemas de Zod validan el formulario y la respuesta del servidor: un monto mal escrito no llega a ningún lado.",
            en: "The same Zod schemas validate the form and the server response: a mistyped amount goes nowhere.",
          },
        },
        {
          title: { es: "El estado de cada pago, siempre a la vista", en: "Every payment's status, always visible" },
          body: {
            es: "Con TanStack Query, cada operación pasa de pendiente a acreditada y convertida sin recargar la página.",
            en: "With TanStack Query, each operation moves from pending to credited and converted without reloading.",
          },
        },
        {
          title: { es: "Enterarse antes que el comercio", en: "Know before the merchant does" },
          body: {
            es: "Sentry en producción para ver los errores en el momento, no cuando llega el reclamo.",
            en: "Sentry in production to see errors as they happen, not when the complaint arrives.",
          },
        },
      ],
    },
    outcome: {
      title: { es: "Fintech, Scrum y producción real.", en: "Fintech, Scrum and real production." },
      body: {
        es: "Trabajé con los equipos de diseño y backend en un producto con dinero de por medio, donde la experiencia de cobro tiene que ser rápida y no puede fallar.",
        en: "I worked with the design and backend teams on a product that moves money, where checkout has to be fast and can't fail.",
      },
    },
    image: "/pixel/alkimiaz.webp",
    imageAlt: { es: "Franco con un QR de pago entre Buenos Aires y Río de Janeiro, en pixel art", en: "Franco holding a payment QR between Buenos Aires and Rio de Janeiro, in pixel art" },
  },
  {
    slug: "novocap",
    kind: "work",
    name: "Novocap",
    summary: {
      es: "Laboratorio farmacéutico donde pasé casi siete años en sistemas: SAP S/4HANA, la infraestructura de la compañía y su paso a Microsoft 365.",
      en: "Pharmaceutical company where I spent almost seven years in IT: SAP S/4HANA, the company's infrastructure and its move to Microsoft 365.",
    },
    meta: {
      role: { es: "Analista de Sistemas Ssr", en: "Ssr. Systems Analyst" },
      period: { es: "jul 2017 — may 2024", en: "Jul 2017 — May 2024" },
      stack: "SAP S/4HANA · Active Directory · Microsoft 365 · Intune",
      link: { label: "novocap.com", href: "https://www.novocap.com" },
    },
    demoCaption: sample,
    context: {
      label: { es: "01 — El contexto", en: "01 — The context" },
      title: {
        es: "En un laboratorio, los sistemas no pueden fallar: de ellos dependen compras, producción y calidad.",
        en: "In a lab, systems can't fail: purchasing, production and quality depend on them.",
      },
      body: {
        es: "Entré a sistemas en 2017 y crecí con la compañía: del soporte diario a gestionar el ERP, la infraestructura y la adopción de nuevas herramientas para toda la empresa.",
        en: "I joined IT in 2017 and grew with the company: from day-to-day support to managing the ERP, the infrastructure and the rollout of new tools company-wide.",
      },
    },
    built: {
      title: { es: "El ERP, la infraestructura y la gente que la usa.", en: "The ERP, the infrastructure and the people who use it." },
      items: {
        es: [
          "Gestión de SAP S/4HANA: usuarios, roles, soporte y solicitudes de servicio",
          "La incorporación de IT de cada persona nueva: cuentas, accesos y equipos",
          "Active Directory, Office 365 y SharePoint",
          "Lideré la implementación de Microsoft Teams e Intune",
          "Los sitios corporativos de la compañía",
        ],
        en: [
          "SAP S/4HANA management: users, roles, support and service requests",
          "IT onboarding for every new hire: accounts, access and devices",
          "Active Directory, Office 365 and SharePoint",
          "Led the Microsoft Teams and Intune rollout",
          "The company's corporate websites",
        ],
      },
    },
    decisions: {
      label: { es: "03 — Lo que me llevé", en: "03 — What I took away" },
      items: [
        {
          title: { es: "Pensar en quién lo opera", en: "Think about who runs it" },
          body: {
            es: "Lo que se construye también hay que mantenerlo, soportarlo y explicarlo. Esa costumbre me la llevé a cada producto.",
            en: "Whatever you build also has to be maintained, supported and explained. I carried that habit into every product.",
          },
        },
        {
          title: { es: "Las herramientas se adoptan, no se instalan", en: "Tools are adopted, not installed" },
          body: {
            es: "Implementar Teams e Intune fue tanto acompañar a la gente como configurar sistemas.",
            en: "Rolling out Teams and Intune was as much about helping people as configuring systems.",
          },
        },
        {
          title: { es: "Procesos que no dependan de una persona", en: "Processes that don't depend on one person" },
          body: {
            es: "Solicitudes, accesos e incorporaciones con un circuito claro: así sistemas escala con la empresa.",
            en: "Requests, access and onboarding with a clear process: that's how IT scales with the company.",
          },
        },
      ],
    },
    outcome: {
      title: { es: "La base de todo lo que hice después.", en: "The foundation for everything that came next." },
      body: {
        es: "Siete años de sistemas en una empresa real me dieron algo que no se aprende programando: entender cómo se usa y se sostiene la tecnología todos los días.",
        en: "Seven years of IT at a real company gave me something you don't learn coding: understanding how technology is used and sustained every day.",
      },
    },
    image: "/pixel/novocap.webp",
    imageAlt: { es: "Franco en la sala de sistemas de Novocap, con un monitor CRT y un rack de servidores, en pixel art", en: "Franco in Novocap's IT room with a CRT monitor and a server rack, in pixel art" },
  },
  {
    slug: "propinita",
    kind: "project",
    name: "Propinita",
    status: { es: "Proyecto de tesis", en: "Thesis project" },
    summary: {
      es: "Propinas digitales con QR y Mercado Pago. Mi tesis en Escuela Da Vinci y mi primer producto propio, de la investigación al lanzamiento.",
      en: "Digital tips with QR codes and Mercado Pago. My thesis at Escuela Da Vinci and my first product, from research to launch.",
    },
    meta: {
      role: { es: "Fundador · Producto, diseño e ingeniería", en: "Founder · Product, design and engineering" },
      period: { es: "2024 — 2025", en: "2024 — 2025" },
      stack: "Next.js · TypeScript · Chakra UI · Mercado Pago",
    },
    demoCaption: sample,
    context: {
      label: { es: "01 — El problema", en: "01 — The problem" },
      title: {
        es: "Cada vez menos gente anda con efectivo, pero las propinas siguen funcionando como hace 50 años.",
        en: "Fewer people carry cash, yet tipping still works like it did 50 years ago.",
      },
      body: {
        es: "Mozos, repartidores y cualquiera que vive en parte de las propinas pierde plata cuando el cliente no tiene billetes. Propinita nace de esa pregunta: que dejar una propina sea tan fácil como escanear un QR.",
        en: "Waiters, couriers and anyone who partly lives on tips lose money when customers don't carry cash. Propinita started from that question: making a tip as easy as scanning a QR code.",
      },
    },
    built: {
      title: { es: "Todo: investigación, marca, UX/UI y desarrollo.", en: "All of it: research, brand, UX/UI and engineering." },
      items: {
        es: [
          "Registro y onboarding pensados para completarse desde el celular",
          "Vinculación de la cuenta de Mercado Pago de cada trabajador",
          "Un QR personal por trabajador para recibir propinas",
          "Un panel para ver las propinas recibidas",
        ],
        en: [
          "Sign-up and onboarding designed to be completed on a phone",
          "Linking each worker's Mercado Pago account",
          "A personal QR code per worker to receive tips",
          "A dashboard to see the tips received",
        ],
      },
    },
    decisions: {
      label: { es: "03 — Decisiones clave", en: "03 — Key decisions" },
      items: [
        {
          title: { es: "Propinita nunca toca la plata", en: "Propinita never holds the money" },
          body: {
            es: "El pago va directo de quien deja la propina a la cuenta de Mercado Pago de quien la recibe. Más simple y más confiable.",
            en: "Payments go straight from the tipper to the recipient's Mercado Pago account. Simpler and more trustworthy.",
          },
        },
        {
          title: { es: "Mobile first de verdad", en: "Truly mobile first" },
          body: {
            es: "El que deja la propina está con el celular en la mano: el flujo entero se resuelve en pocos toques.",
            en: "The tipper has a phone in hand: the whole flow takes a few taps.",
          },
        },
        {
          title: { es: "Ganar los dos lados", en: "Both sides win" },
          body: {
            es: "Para el trabajador, plata que antes se perdía. Para el cliente, la forma más cómoda de agradecer.",
            en: "For the worker, money that used to be lost. For the customer, the easiest way to say thanks.",
          },
        },
      ],
    },
    outcome: {
      title: { es: "Presentado como “Chau efectivo, hola gratitud”.", en: "Presented as “Goodbye cash, hello gratitude”." },
      body: {
        es: "Fue mi tesis y mi primera experiencia llevando una idea propia hasta un producto, con marca, investigación y un modelo pensado para los dos lados.",
        en: "It was my thesis and my first time taking my own idea all the way to a product, with a brand, research and a model built for both sides.",
      },
    },
    image: "/pixel/propinita.webp",
    imageAlt: { es: "Un cliente deja una propina con QR en un café mientras Franco programa Propinita, en pixel art", en: "A customer leaves a QR tip in a café while Franco builds Propinita, in pixel art" },
  },
  {
    slug: "persi",
    kind: "project",
    name: "Persi",
    status: { es: "En uso personal", en: "In personal use" },
    summary: {
      es: "Mi app de finanzas y del día a día, con un asistente de IA que registra gastos por voz. Reemplazó mi planilla de Excel.",
      en: "My finance and day-to-day app, with an AI assistant that logs expenses by voice. It replaced my Excel spreadsheet.",
    },
    meta: {
      role: { es: "Producto, diseño e ingeniería", en: "Product, design and engineering" },
      period: { es: "2026", en: "2026" },
      stack: "Next.js 16 · Convex · Clerk · Claude API · MCP",
    },
    demoCaption: sample,
    context: {
      label: { es: "01 — El problema", en: "01 — The problem" },
      title: {
        es: "Una planilla de Excel sirve hasta que tenés que cargar cada gasto a mano.",
        en: "A spreadsheet works until you have to enter every expense by hand.",
      },
      body: {
        es: "Llevaba mis finanzas en Excel: cuotas, tarjetas, vencimientos y promociones que terminan. Quería decir “gasté 28 lucas en Coto con la Visa” y que quede registrado bien, en la cuenta correcta y sin errores de redondeo.",
        en: "I tracked my finances in Excel: installments, cards, due dates and promotions that expire. I wanted to say “spent 28k at Coto with the Visa” and have it recorded right, in the right account and without rounding errors.",
      },
    },
    built: {
      title: { es: "Finanzas, tareas y recordatorios, con un asistente adentro.", en: "Finances, tasks and reminders, with an assistant inside." },
      items: {
        es: [
          "Dashboard del mes con comparación contra el mismo período anterior",
          "Movimientos, cuentas, tarjetas con cuotas y vencimientos recurrentes",
          "Persi AI: registra y consulta con tool calling, y muestra cómo calculó cada respuesta",
          "Importador de Excel y CSV con detección de duplicados y reversión",
          "Servidor MCP para usar Persi desde Claude o ChatGPT, y notificaciones push",
        ],
        en: [
          "Monthly dashboard compared against the same period last month",
          "Transactions, accounts, cards with installments and recurring due dates",
          "Persi AI: logs and answers with tool calling, and shows how it computed each answer",
          "Excel and CSV importer with duplicate detection and rollback",
          "An MCP server to use Persi from Claude or ChatGPT, plus push notifications",
        ],
      },
    },
    decisions: {
      label: { es: "03 — Decisiones clave", en: "03 — Key decisions" },
      items: [
        {
          title: { es: "Claude interpreta, Convex calcula", en: "Claude interprets, Convex computes" },
          body: {
            es: "El modelo entiende el pedido y elige herramientas tipadas; todos los montos y totales los calcula el servidor.",
            en: "The model understands the request and picks typed tools; every amount and total is computed by the server.",
          },
        },
        {
          title: { es: "Dinero exacto", en: "Exact money" },
          body: {
            es: "Importes en centavos enteros y fechas civiles de Buenos Aires: un gasto del 31 a las 23:30 nunca cae en el mes siguiente.",
            en: "Amounts in integer cents and Buenos Aires civil dates: an expense on the 31st at 11:30 pm never lands in the next month.",
          },
        },
        {
          title: { es: "Nada se duplica", en: "Nothing duplicates" },
          body: {
            es: "Cada operación lleva un id idempotente: un reintento del asistente o una reimportación no cargan el gasto dos veces.",
            en: "Each operation carries an idempotent id: an assistant retry or a re-import never logs an expense twice.",
          },
        },
      ],
    },
    outcome: {
      title: { es: "La uso todos los días.", en: "I use it every day." },
      body: {
        es: "Persi reemplazó mi planilla: registro gastos hablando, veo el mes de un vistazo y la consulto desde Claude cuando estoy en otra cosa.",
        en: "Persi replaced my spreadsheet: I log expenses by talking, see the month at a glance and check it from Claude when I'm doing something else.",
      },
    },
    image: "/pixel/persi.webp",
    imageAlt: { es: "Franco dictándole un gasto a Persi desde el sillón, en pixel art", en: "Franco dictating an expense to Persi from the couch, in pixel art" },
  },
];

// El orden para "siguiente caso": trabajos y después proyectos personales
export const caseOrder = ["notchatbot", "grayola", "alkimiaz", "novocap", "facha", "propinita", "persi"];

export function caseHref(locale: string, slug: string) {
  const c = cases.find((x) => x.slug === slug);
  return `/${locale}/${c?.kind === "work" ? "work" : "projects"}/${slug}`;
}
