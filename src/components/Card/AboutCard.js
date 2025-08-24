"use client";
import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";

const AboutCard = () => {
  const { language } = useLanguage();

  return (
    <div>
      {language === "es" ? (
        <>
          <p className="mb-4">
            Soy un desarrollador full-stack senior con más de 8 años de
            experiencia en desarrollo web y aplicaciones móviles. Especializado
            en React.js, Next.js y tecnologías modernas, diseño y desarrollo
            soluciones digitales escalables que optimizan la experiencia del
            usuario y generan resultados medibles para empresas.
          </p>
          <p className="mb-4">
            Di mis primeros pasos en la{" "}
            <Link
              className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
              href="https://fra.utn.edu.ar/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Universidad Tecnológica Nacional
            </Link>{" "}
            y recientemente completé mi Tecnicatura en Diseño y Desarrollo Web
            en{" "}
            <Link
              className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
              href="https://davinci.edu.ar/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Escuela Da Vinci
            </Link>
            , con énfasis en diseño y experiencia de usuario.
          </p>
          <p>
            Mi expertise incluye TypeScript, React Native, Docker y
            arquitecturas cloud. Implemento mejores prácticas de desarrollo con
            metodologías ágiles, optimización de rendimiento y SEO técnico.
            Colaboro estrechamente con equipos de diseño y producto para
            entregar soluciones que superen las expectativas del cliente.
          </p>
        </>
      ) : (
        <>
          <p className="mb-4">
            I am a senior full-stack developer with over 8 years of experience
            in web development and mobile applications. Specialized in React.js,
            Next.js and modern technologies, I design and develop scalable
            digital solutions that optimize user experience and deliver
            measurable results for businesses.
          </p>
          <p className="mb-4">
            I took my first steps at{" "}
            <Link
              className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
              href="https://fra.utn.edu.ar/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Universidad Tecnológica Nacional
            </Link>{" "}
            and recently completed my Web Design and Development Degree at{" "}
            <Link
              className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
              href="https://davinci.edu.ar/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Escuela Da Vinci
            </Link>
            , focusing on design and user experience.
          </p>
          <p>
            My expertise includes TypeScript, React Native, Docker and cloud
            architectures. I implement development best practices with agile
            methodologies, performance optimization and technical SEO. I
            collaborate closely with design and product teams to deliver
            solutions that exceed client expectations.
          </p>
        </>
      )}
    </div>
  );
};

export default AboutCard;
