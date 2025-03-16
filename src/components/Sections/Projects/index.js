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
                name={"Megapix"}
                description={
                  "Megapix es una plataforma tecnológica diseñada para facilitar las transacciones financieras entre Argentina y Brasil. Integrada con la tecnología PIX del Banco Central de Brasil, permite a individuos, pymes y grandes empresas argentinas ampliar su alcance comercial, mientras que los usuarios brasileños pueden realizar transacciones inmediatas sin complicaciones ni aplicaciones adicionales."
                }
                image={"megapix.jpg"}
                technologies={["Next.js", "ChakraUI", "TypeScript"]}
                url="https://francocampaiola.com/projects/megapix"
              />
              <ProjectCard
                name={"Propinita"}
                description={
                  "Propinita es una aplicación web para vincular tu billetera virtual y poder recibir propinas de tus clientes."
                }
                image={"propinita.png"}
                technologies={["Next.js", "ChakraUI", "TypeScript"]}
                url={"https://landing.propinita.app"}
              />
              <ProjectCard
                name={"Portfolio"}
                description={
                  "Portfolio es mi portafolio personal, donde puedes ver mis proyectos y contactarme."
                }
                image={"portfolio.png"}
                technologies={["Next.js", "TailwindCSS", "JavaScript"]}
                url={"https://francocampaiola.com"}
              />
            </>
          ) : (
            <>
              <ProjectCard
                name={"Megapix"}
                description={
                  "Megapix is a technological platform designed to facilitate financial transactions between Argentina and Brazil. Integrated with the PIX technology from the Central Bank of Brazil, it allows individuals, SMEs, and large Argentine companies to expand their commercial reach, while Brazilian users can conduct immediate transactions without complications or additional applications."
                }
                image={"megapix.jpg"}
                technologies={["Next.js", "ChakraUI", "TypeScript"]}
                url="https://francocampaiola.com/projects/megapix"
              />
              <ProjectCard
                name={"Propinita"}
                description={
                  "Propinita is a web application to link your virtual wallet and be able to receive tips from your clients."
                }
                image={"propinita.png"}
                technologies={["Next.js", "ChakraUI", "TypeScript"]}
                url={"https://landing.propinita.app"}
              />
              <ProjectCard
                name={"Portfolio"}
                description={
                  "Portfolio is my personal portfolio, where you can see my projects and contact me."
                }
                image={"portfolio.png"}
                technologies={["Next.js", "TailwindCSS", "JavaScript"]}
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
