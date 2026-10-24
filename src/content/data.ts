import type { Localized } from "@/lib/i18n";

export const profile = {
  name: "Franco Campaiola",
  email: "franco@francocampaiola.com",
  url: "https://francocampaiola.com",
  role: { es: "Software Engineer", en: "Software Engineer" },
  location: "Buenos Aires",
  // El título del hero va en tres partes: la del medio lleva la serif en naranja
  headline: {
    start: { es: "Construyo productos,", en: "I build products," },
    accent: { es: "no solo", en: "not just" },
    end: { es: "software.", en: "software." },
  },
  intro: {
    es: "Más de 8 años llevando ideas a producción: pagos, SaaS, inteligencia artificial y agentes.",
    en: "8+ years taking ideas to production: payments, SaaS, artificial intelligence and agents.",
  },
  social: [
    { label: "GitHub", href: "https://github.com/francocampaiola" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/francocampaiola/" },
    { label: "X", href: "https://x.com/francocampaiola" },
  ],
};

export type Job = {
  company: string;
  url: string;
  role: Localized;
  start: Localized;
  end?: Localized;
  summary: Localized;
  image: string;
  alt: Localized;
};

export const jobs: Job[] = [
  {
    company: "NotChatbot",
    url: "https://notchatbot.com",
    role: { es: "Full Stack Developer", en: "Full Stack Developer" },
    start: { es: "oct 2025", en: "Oct 2025" },
    summary: {
      es: "CRM con IA para ecommerce: automatizaciones, integraciones y MCP.",
      en: "AI CRM for ecommerce: automations, integrations and MCP.",
    },
    image: "/pixel/notchatbot.webp",
    alt: {
      es: "Franco programando junto al carpincho de NotChatbot, en pixel art",
      en: "Franco coding next to the NotChatbot capybara, in pixel art",
    },
  },
  {
    company: "Grayola",
    url: "https://grayola.io",
    role: { es: "Tech Lead", en: "Tech Lead" },
    start: { es: "may 2025", en: "May 2025" },
    end: { es: "oct 2025", en: "Oct 2025" },
    summary: {
      es: "Lideré el MVP de diseño como servicio: Stripe, auth y pedidos.",
      en: "Led the design-as-a-service MVP: Stripe, auth and requests.",
    },
    image: "/pixel/grayola.webp",
    alt: {
      es: "Franco liderando al equipo de diseño de Grayola frente a un tablero kanban, en pixel art",
      en: "Franco leading Grayola's design team in front of a kanban board, in pixel art",
    },
  },
  {
    company: "Alkimiaz",
    url: "https://alkimiaz.com",
    role: { es: "Full Stack Developer", en: "Full Stack Developer" },
    start: { es: "may 2024", en: "May 2024" },
    end: { es: "may 2025", en: "May 2025" },
    summary: {
      es: "Megapix: cobros con PIX en reales, convertidos a USDT.",
      en: "Megapix: PIX payments in reais, converted to USDT.",
    },
    image: "/pixel/alkimiaz.webp",
    alt: {
      es: "Franco con un QR de pago entre Buenos Aires y Río de Janeiro, en pixel art",
      en: "Franco holding a payment QR between Buenos Aires and Rio de Janeiro, in pixel art",
    },
  },
  {
    company: "Novocap",
    url: "https://www.novocap.com",
    role: { es: "Analista de Sistemas", en: "Systems Analyst" },
    start: { es: "jul 2017", en: "Jul 2017" },
    end: { es: "may 2024", en: "May 2024" },
    summary: {
      es: "SAP S/4HANA, sistemas internos e infraestructura.",
      en: "SAP S/4HANA, internal systems and infrastructure.",
    },
    image: "/pixel/novocap.webp",
    alt: {
      es: "Franco en la sala de sistemas de Novocap, con un monitor CRT y un rack de servidores, en pixel art",
      en: "Franco in Novocap's IT room with a CRT monitor and a server rack, in pixel art",
    },
  },
];

export type Project = {
  name: string;
  slug?: string;
  period: string;
  badge?: Localized;
  summary: Localized;
  image: string;
  alt: Localized;
};

export const projects: Project[] = [
  {
    name: "FACHA",
    slug: "facha",
    period: "2026",
    badge: { es: "En validación", en: "In validation" },
    summary: {
      es: "IA para marcas de ropa: del catálogo a una idea lista para publicar.",
      en: "AI for fashion brands: from the catalog to a ready-to-publish idea.",
    },
    image: "/pixel/facha.webp",
    alt: {
      es: "Franco presentando FACHA: un abrigo convertido en varias imágenes de anuncio, en pixel art",
      en: "Franco presenting FACHA: a coat turned into several ad images, in pixel art",
    },
  },
  {
    name: "Propinita",
    period: "2024 — 2025",
    summary: {
      es: "Propinas digitales con QR y Mercado Pago. Mi tesis y mi primer producto.",
      en: "Digital tips with QR codes and Mercado Pago. My thesis and my first product.",
    },
    image: "/pixel/propinita.webp",
    alt: {
      es: "Un cliente deja una propina con QR en un café mientras Franco programa Propinita, en pixel art",
      en: "A customer leaves a QR tip in a café while Franco builds Propinita, in pixel art",
    },
  },
  {
    name: "Persi",
    period: "2026",
    summary: {
      es: "Finanzas y tareas con un asistente de IA que registra gastos por voz.",
      en: "Finances and tasks with an AI assistant that logs expenses by voice.",
    },
    image: "/pixel/persi.webp",
    alt: {
      es: "Franco dictándole un gasto a Persi desde el sillón, en pixel art",
      en: "Franco dictating an expense to Persi from the couch, in pixel art",
    },
  },
];

export const milestones: { year: string; text: Localized }[] = [
  {
    year: "2026",
    text: {
      es: "Armé un sistema de agentes que lleva un ticket de Notion hasta un Pull Request.",
      en: "Built an agent system that takes a Notion ticket all the way to a pull request.",
    },
  },
  {
    year: "2026",
    text: {
      es: "Persi: mi app de finanzas, usable desde Claude o ChatGPT por MCP.",
      en: "Persi: my finance app, usable from Claude or ChatGPT through MCP.",
    },
  },
  {
    year: "2025",
    text: { es: "Primera vez como Tech Lead, en Grayola.", en: "First time as Tech Lead, at Grayola." },
  },
  {
    year: "2025",
    text: {
      es: "Me recibí de Técnico en Diseño y Desarrollo Web (Escuela Da Vinci).",
      en: "Graduated in Web Design and Development (Escuela Da Vinci).",
    },
  },
  {
    year: "2025",
    text: {
      es: "Presenté Propinita: “Chau efectivo, hola gratitud”.",
      en: "Presented Propinita: “Goodbye cash, hello gratitude”.",
    },
  },
];
