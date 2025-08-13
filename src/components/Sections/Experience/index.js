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
            dateInit={"May 2025"}
            dateEnd={"Presente"}
            position={"Tech Lead "}
            companyUrl={"https://grayola.io"}
            company={"Grayola"}
            description={
              "Lidero el desarrollo técnico y estratégico de una plataforma digital B2B basada en un modelo DaaS (Design as a Service). Soy responsable de construir y escalar la arquitectura full-stack con Next.js, Supabase, Stripe y Shadcn UI, desarrollar sistemas de autenticación y gestión de proyectos, integrar sistemas de pago y lógica de suscripciones, y definir flujos UX desde la visión de negocio. Mi rol combina ejecución técnica hands-on con visión estratégica de producto, trabajando en estrecha colaboración con los fundadores para ejecutar el roadmap tecnológico y desarrollar MVPs rápidos e iterativos."
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
            position={"Ingeniero frontend "}
            company={"Polynomium"}
            description={
              "Participé en el proyecto Megapix, una plataforma de pagos integrada con el sistema PIX utilizado en Brasil, como desarrollador frontend. Megapix es una aplicación web desarrollada con el framework Next.js de React, donde utilizamos TypeScript como lenguaje de programación, ChakraUI como librería de componentes, react-hook-form para la gestión de formularios, TanStack Query para el manejo de datos y Zod para la validación de entradas en los formularios. El proyecto se llevó a cabo utilizando SCRUM con Jira, Docker para ejecutar el código y configurar entornos controlados, y Sentry para el monitoreo de errores."
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
              "Me encargué de coordinar la implementación y mantenimiento de SAP S/4 HANA, desarrollar sistemas internos bajo metodologías ágiles SCRUM y mejorar los procesos de OnBoarding en IT. También me encargo de gestionar la creación y mantenimiento de sitios web internos, administrar redes y servidores en Active Directory, manejar usuarios y permisos en Office 365 y SharePoint Online, y cuidar de la flota de dispositivos móviles de la empresa."
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
            dateInit={"May 2025"}
            dateEnd={"Present"}
            position={"Tech Lead & Product Engineer"}
            company={"Grayola"}
            description={
              "I lead the technical and strategic development of a B2B digital platform based on a DaaS (Design as a Service) model. I am responsible for building and scaling the full-stack architecture with Next.js, Supabase, Stripe and Shadcn UI, developing authentication systems and project management, integrating payment systems and subscription logic, and defining UX flows from the business vision. My role combines hands-on technical execution with strategic product vision, working closely with the founders to execute the technology roadmap and develop fast, iterative MVPs."
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
            position={"Frontend Engineer"}
            company={"Polynomium"}
            description={
              "I participated in the Megapix project, a payment platform integrated with the PIX system used in Brazil, as a frontend developer.  Megapix is a web application built with React's Next.js framework, using TypeScript as the programming language, ChakraUI as the component library, react-hook-form for form management, TanStack Query for data handling, and Zod for form input validation.  The project was developed following the SCRUM methodology with Jira, using Docker to run the code and set up controlled environments, and Sentry for error monitoring."
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
              "I was in charge of coordinating the implementation and maintenance of SAP S/4 HANA, developing internal systems under SCRUM agile methodologies and improving OnBoarding processes in IT. I am also in charge of managing the creation and maintenance of internal websites, administering networks and servers in Active Directory, managing users and permissions in Office 365 and SharePoint Online, and taking care of the company's fleet of mobile devices."
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
