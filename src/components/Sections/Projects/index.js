"use client";
import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import ProjectCard from "../../Card/ProjectCard";

const Projects = () => {
  const { language } = useLanguage();

  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Selected projects"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          {language === "es" ? "Projectos" : "Projects"}
        </h2>
      </div>
      <div>
        <ul className="group/list">
          {language === "es" ? (
            <>
              <ProjectCard
                name={"Grayola"}
                description={
                  "Plataforma digital B2B innovadora basada en el modelo DaaS (Design as a Service). Desarrollé una solución full-stack escalable con arquitectura de alto rendimiento, sistemas de autenticación robustos, integración de pagos con Stripe y gestión avanzada de proyectos. La plataforma optimiza la experiencia del usuario y genera valor medible para empresas."
                }
                image={"grayola.png"}
                technologies={[
                  "Next.js",
                  "Supabase",
                  "Stripe",
                  "Shadcn UI",
                  "AWS",
                ]}
                url="/projects/grayola"
                targetBlank={false}
              />
              <ProjectCard
                name={"Megapix"}
                description={
                  "Plataforma fintech de pagos de alto rendimiento integrada con el sistema PIX de Brasil. Implementé arquitecturas frontend escalables optimizando la experiencia del usuario y conversión. Desarrollé sistemas avanzados de gestión de formularios, manejo eficiente de datos y validaciones robustas, asegurando estabilidad y rendimiento en producción."
                }
                image={"megapix.jpg"}
                technologies={["Next.js", "ChakraUI", "TypeScript", "Docker"]}
                url="/projects/megapix"
                targetBlank={false}
              />
              <ProjectCard
                name={"Propinita"}
                description={
                  "Aplicación web fintech para facilitar la recepción de propinas digitales. Desarrollé una solución completa que permite a profesionales y comercios vincular sus billeteras virtuales y recibir pagos de forma segura y eficiente, optimizando la experiencia del usuario final."
                }
                image={"propinita.png"}
                technologies={[
                  "Next.js",
                  "ChakraUI",
                  "TypeScript",
                  "MercadoPago",
                ]}
                url={"/projects/propinita"}
                targetBlank={false}
              />
              <ProjectCard
                name={"Portfolio"}
                description={
                  "Portfolio personal desarrollado con tecnologías modernas y diseño responsive. Implementé una arquitectura optimizada para SEO, con navegación intuitiva y experiencia de usuario fluida, destacando proyectos y habilidades técnicas de manera profesional."
                }
                image={"francocampaiola.png"}
                technologies={["Next.js", "TailwindCSS", "JavaScript", "SEO"]}
                url={"https://francocampaiola.com"}
              />
            </>
          ) : (
            <>
              <ProjectCard
                name={"Grayola"}
                description={
                  "Innovative B2B digital platform based on the DaaS (Design as a Service) model. I developed a scalable full-stack solution with high-performance architecture, robust authentication systems, Stripe payment integration and advanced project management. The platform optimizes user experience and generates measurable value for businesses."
                }
                image={"grayola.png"}
                technologies={[
                  "Next.js",
                  "Supabase",
                  "Stripe",
                  "Shadcn UI",
                  "AWS",
                ]}
                url="/projects/grayola"
              />
              <ProjectCard
                name={"Megapix"}
                description={
                  "High-performance fintech payment platform integrated with Brazil's PIX system. I implemented scalable frontend architectures optimizing user experience and conversion. I developed advanced form management systems, efficient data handling and robust validations, ensuring stability and performance in production."
                }
                image={"megapix.jpg"}
                technologies={["Next.js", "ChakraUI", "TypeScript", "Docker"]}
                url="/projects/megapix"
              />
              <ProjectCard
                name={"Propinita"}
                description={
                  "Fintech web application to facilitate digital tip reception. I developed a complete solution that allows professionals and businesses to link their virtual wallets and receive payments securely and efficiently, optimizing the end user experience."
                }
                image={"propinita.png"}
                technologies={[
                  "Next.js",
                  "ChakraUI",
                  "TypeScript",
                  "MercadoPago",
                ]}
                url={"/projects/propinita"}
                targetBlank={false}
              />
              <ProjectCard
                name={"Portfolio"}
                description={
                  "Personal portfolio developed with modern technologies and responsive design. I implemented an SEO-optimized architecture with intuitive navigation and fluid user experience, professionally showcasing projects and technical skills."
                }
                image={"francocampaiola.png"}
                technologies={["Next.js", "TailwindCSS", "JavaScript", "SEO"]}
                url={"https://francocampaiola.com"}
              />
            </>
          )}
        </ul>
        {/* <div className="mt-12">
          <Link
            className="inline-flex items-center leading-tight font-semibold text-slate-200 group"
            aria-label="View Full Project Archive"
            href="/projects"
          >
            <span>
              <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                View Full Project
              </span>
              <span className="whitespace-nowrap">
                <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                  Archive
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            </span>
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default Projects;
