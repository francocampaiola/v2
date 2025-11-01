"use client";
import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import ExperienceCard from "../../Card/ExperienceCard";

const Experience = () => {
  const { language } = useLanguage();

  return (
    <section
      id="experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="My experience"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="mb-8 text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          {language === "es" ? "Experiencia" : "Experience"}
        </h2>
      </div>
      {language === "es" ? (
        <>
        <ExperienceCard
            dateInit={"Oct 2025"}
            dateEnd={"Presente"}
            position={"Full Stack Developer "}
            companyUrl={"https://notchatbot.com"}
            company={"NotChatBot"}
            description={
              "Formo parte del equipo de desarrollo de una plataforma que utiliza inteligencia artificial para automatizar la comunicación entre empresas y usuarios. Participo en la creación de nuevas funcionalidades, mantenimiento y optimización del sistema. Colaboro con el equipo en la implementación de mejoras, resolución de incidencias y revisión del flujo general del producto. Esta experiencia me permite seguir creciendo como desarrollador, aportando en un entorno colaborativo y en proyectos que integran inteligencia artificial con soluciones enfocadas en la experiencia del usuario."
            }
            technologies={[
              "Next.js",
              "Convex",
              "Vercel",
              "TypeScript",
              "Shadcn UI",
            ]}
          />
          <ExperienceCard
            dateInit={"May 2025"}
            dateEnd={"Oct 2025"}
            position={"Tech Lead e Ingeniero de Producto "}
            companyUrl={"https://grayola.io"}
            company={"Grayola"}
            description={
              "Lidero el desarrollo técnico y estratégico de una plataforma digital B2B innovadora basada en el modelo DaaS (Design as a Service). Arquitecto y escalo soluciones full-stack de alto rendimiento utilizando Next.js, Supabase, Stripe y Shadcn UI. Diseño e implemento sistemas de autenticación robustos, gestión de proyectos avanzada e integración de pagos con lógica de suscripciones escalable. Defino estrategias UX/UI que optimizan la conversión y experiencia del usuario. Mi rol ejecutivo combina liderazgo técnico con visión estratégica de producto, colaborando directamente con fundadores para ejecutar roadmaps tecnológicos y desarrollar MVPs de alto impacto que generan valor medible para el negocio."
            }
            technologies={[
              "Next.js",
              "Supabase",
              "Amazon Web Services (AWS)",
              "Stripe",
              "Docker",
              "Shadcn UI",
            ]}
          />
          <ExperienceCard
            dateInit={"May 2024"}
            dateEnd={"May 2025"}
            position={"Full Stack Developer "}
            company={"Alkimiaz"}
            companyUrl={"https://alkimiaz.com"}
            description={
              "Desarrollé y optimicé Megapix, una plataforma de pagos fintech de alto rendimiento integrada con el sistema PIX de Brasil. Implementé arquitecturas frontend escalables utilizando Next.js, TypeScript y ChakraUI, optimizando la experiencia del usuario y la conversión. Integré sistemas avanzados de gestión de formularios con react-hook-form, implementé manejo eficiente de datos con TanStack Query y validaciones robustas con Zod. Colaboré en metodologías ágiles SCRUM utilizando Jira, implementé contenedores Docker para entornos controlados y configuré monitoreo de errores con Sentry, asegurando la estabilidad y rendimiento de la plataforma en producción."
            }
            technologies={[
              "TypeScript",
              "React",
              "Next.js",
              "Docker",
              "Chakra UI",
              "Jira",
            ]}
          />
          <ExperienceCard
            dateInit={"Jul 2017"}
            dateEnd={"May 2024"}
            position={"Analista de Sistemas Ssr "}
            company={"Novocap S.A."}
            companyUrl={"https://www.novocap.com"}
            description={
              "Lideré la implementación y optimización de SAP S/4 HANA, desarrollando sistemas empresariales internos bajo metodologías ágiles SCRUM que mejoraron la eficiencia operacional en un 40%. Arquitecturé y gestioné sitios web corporativos, administré infraestructura de redes y servidores en Active Directory, implementé estrategias de gestión de usuarios y permisos en Office 365 y SharePoint Online. Optimicé la gestión de la flota de dispositivos móviles corporativos, implementando políticas de seguridad y automatización que redujeron los tiempos de respuesta en un 60%."
            }
            technologies={[
              "SAP S/4 HANA",
              "Git",
              "Powershell",
              "Docker",
              "Microsoft Azure",
              "Microsoft Teams",
              "Office 365",
            ]}
          />
        </>
      ) : (
        <>
        <ExperienceCard
            dateInit={"Oct 2025"}
            dateEnd={"Present"}
            position={"Full Stack Developer "}
            company={"NotChatBot"}
            companyUrl={"https://notchatbot.com"}
            description={
              "I’m part of the development team of a platform that leverages artificial intelligence to automate communication between companies and users. I contribute to building new features, maintaining and optimizing the system, and collaborating with the team on improvements, issue resolution, and reviewing the overall product flow. This experience allows me to continue growing as a developer, contributing in a collaborative environment and working on projects that integrate AI with user-focused solutions."
            }
            technologies={[
              "Next.js",
              "Convex",
              "Vercel",
              "TypeScript",
              "Shadcn UI",
            ]}
          />
          <ExperienceCard
            dateInit={"May 2025"}
            dateEnd={"Oct 2025"}
            position={"Tech Lead & Product Engineer "}
            company={"Grayola"}
            description={
              "I lead the technical and strategic development of an innovative B2B digital platform based on the DaaS (Design as a Service) model. I architect and scale high-performance full-stack solutions using Next.js, Supabase, Stripe and Shadcn UI. I design and implement robust authentication systems, advanced project management and scalable payment integration with subscription logic. I define UX/UI strategies that optimize conversion and user experience. My executive role combines technical leadership with strategic product vision, collaborating directly with founders to execute technology roadmaps and develop high-impact MVPs that generate measurable business value."
            }
            technologies={[
              "Next.js",
              "Supabase",
              "Amazon Web Services (AWS)",
              "Stripe",
              "Docker",
              "Shadcn UI",
            ]}
          />
          <ExperienceCard
            dateInit={"May 2024"}
            dateEnd={"May 2025"}
            position={"Full Stack Developer "}
            company={"Alkimiaz"}
            companyUrl={"https://alkimiaz.com"}
            description={
              "I developed and optimized Megapix, a high-performance fintech payment platform integrated with Brazil's PIX system. I implemented scalable frontend architectures using Next.js, TypeScript and ChakraUI, optimizing user experience and conversion rates. I integrated advanced form management systems with react-hook-form, implemented efficient data handling with TanStack Query and robust validations with Zod. I collaborated in SCRUM agile methodologies using Jira, implemented Docker containers for controlled environments and configured error monitoring with Sentry, ensuring platform stability and performance in production."
            }
            technologies={[
              "TypeScript",
              "React",
              "Next.js",
              "Docker",
              "Chakra UI",
              "Jira",
            ]}
          />
          <ExperienceCard
            dateInit={"Jul 2017"}
            dateEnd={"May 2024"}
            position={"Ssr. Systems Analyst "}
            company={"Novocap S.A."}
            companyUrl={"https://www.novocap.com"}
            description={
              "I led the implementation and optimization of SAP S/4 HANA, developing internal enterprise systems under SCRUM agile methodologies that improved operational efficiency by 40%. I architected and managed corporate websites, administered network and server infrastructure in Active Directory, implemented user and permission management strategies in Office 365 and SharePoint Online. I optimized corporate mobile device fleet management, implementing security policies and automation that reduced response times by 60%."
            }
            technologies={[
              "SAP S/4 HANA",
              "Git",
              "Powershell",
              "Docker",
              "Microsoft Azure",
              "Microsoft Teams",
              "Office 365",
            ]}
          />
        </>
      )}

      <div className="mt-2">
        {language === "es" ? (
          <a
            className="inline-flex items-baseline leading-tight hover:text-teal-300 focus-visible:text-teal-300 font-semibold text-slate-200 group/link text-base mb-12 lg:mb-32"
            href="/cv.pdf"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Ver CV completo (abriéndose en una nueva pestaña)"
          >
            <span>
              Ver <span></span>
              <span className="inline-block">
                detalle completo
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            </span>
          </a>
        ) : (
          <a
            className="inline-flex items-baseline leading-tight hover:text-teal-300 focus-visible:text-teal-300 font-semibold text-slate-200 group/link text-base mb-32"
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="View full resume (opens in a new tab)"
          >
            <span>
              View <span></span>
              <span className="inline-block">
                full resume
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            </span>
          </a>
        )}
      </div>
    </section>
  );
};

export default Experience;
