"use client";
import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import WebsiteCard from "../../Card/WebsiteCard";

const Websites = () => {
  const { language } = useLanguage();

  return (
    <section
      id="websites"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Websites"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          {language === "es" ? "Sitios Web" : "Websites"}
        </h2>
      </div>
      <div>
        <ul className="group/list">
          {language === "es" ? (
            <>
              <WebsiteCard
                name={"Polynomium"}
                description={
                  "Sitio web corporativo para la fintech argentina Polynomium. Desarrollé una landing page moderna y responsive que comunica efectivamente la propuesta de valor de la empresa, optimizada para conversión y posicionamiento SEO. Implementé diseño centrado en el usuario con navegación intuitiva y elementos visuales que reflejan la innovación tecnológica de la empresa."
                }
                image={"polynomium.png"}
                technologies={["Next.js", "TailwindCSS", "TypeScript", "SEO"]}
                url={"https://polynomium.com"}
                targetBlank={true}
              />
              <WebsiteCard
                name={"Alkimiaz"}
                description={
                  "Sitio web corporativo para Alkimiaz, empresa especializada en soluciones tecnológicas. Creé una plataforma web profesional que destaca los servicios y experiencia de la empresa, con diseño moderno y funcionalidades interactivas que mejoran la experiencia del usuario y facilitan el contacto con potenciales clientes."
                }
                image={"alkimiaz.png"}
                technologies={["Next.js", "TailwindCSS", "JavaScript", "SEO"]}
                url={"https://alkimiaz.com"}
                targetBlank={true}
              />
            </>
          ) : (
            <>
              <WebsiteCard
                name={"Polynomium"}
                description={
                  "Corporate website for the Argentine fintech Polynomium. I developed a modern and responsive landing page that effectively communicates the company's value proposition, optimized for conversion and SEO positioning. I implemented user-centered design with intuitive navigation and visual elements that reflect the company's technological innovation."
                }
                image={"polynomium.jpg"}
                technologies={["Next.js", "TailwindCSS", "TypeScript", "SEO"]}
                url={"https://polynomium.com"}
                targetBlank={true}
              />
              <WebsiteCard
                name={"Alkimiaz"}
                description={
                  "Corporate website for Alkimiaz, a company specialized in technological solutions. I created a professional web platform that highlights the company's services and experience, with modern design and interactive features that improve user experience and facilitate contact with potential clients."
                }
                image={"alkimiaz.jpg"}
                technologies={["Next.js", "TailwindCSS", "JavaScript", "SEO"]}
                url={"https://alkimiaz.com"}
                targetBlank={true}
              />
            </>
          )}
        </ul>
      </div>
    </section>
  );
};

export default Websites;
