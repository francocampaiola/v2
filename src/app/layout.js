import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";
import { EMAIL, LINKS, SITE_URL } from "@/content/site";

const TITLE = "Franco Campaiola · Desarrollador full stack y fundador de FACHA";
const DESCRIPTION =
  "Armo productos con IA, de la idea al lanzamiento. Fundador de FACHA, desarrollador en NotChatBot. Milestones, proyectos, experiencia y notas.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: TITLE, template: "%s · Franco Campaiola" },
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Franco Campaiola",
    title: TITLE,
    description: DESCRIPTION,
    locale: "es_AR",
    images: [{ url: "/milestones/16-petroleum-hoodie-studio.webp", width: 1000, height: 1330 }],
  },
  twitter: { card: "summary_large_image", creator: "@francocampaiola", title: TITLE, description: DESCRIPTION },
  icons: { icon: "/favicon.png", shortcut: "/favicon.png", apple: "/favicon.png" },
};

export const viewport = { themeColor: "#0b0c0e" };

// Quién es Franco, para Google y para las IAs que leen la página.
const PERSON = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Franco Campaiola",
  url: SITE_URL,
  email: `mailto:${EMAIL}`,
  jobTitle: "Full Stack Developer",
  worksFor: { "@type": "Organization", name: "NotChatBot", url: "https://notchatbot.com" },
  founder: { "@type": "Organization", name: "FACHA", url: "https://facha.app" },
  address: { "@type": "PostalAddress", addressLocality: "Buenos Aires", addressCountry: "AR" },
  alumniOf: [{ "@type": "EducationalOrganization", name: "Escuela Da Vinci" }],
  knowsAbout: ["Inteligencia artificial", "Agentes de IA", "SEO", "React", "Next.js", "TypeScript", "Pagos online"],
  sameAs: [LINKS.linkedin, LINKS.github, LINKS.x],
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON) }}
        />
        <LanguageProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-[var(--ink)] focus:px-3 focus:py-2 focus:text-[var(--bg)]"
          >
            Ir al contenido
          </a>
          <Nav />
          <main id="main">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
