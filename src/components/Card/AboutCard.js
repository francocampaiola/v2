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
            Soy desarrollador frontend con más de 6 años de experiencia.
            Actualmente, creo interfaces dinámicas y escalables con React.js,
            Next.js y me encuentro aprendiendo React Native. Me enfoco en
            soluciones eficientes con código limpio y bien estructurado.
          </p>
          <p className="mb-4">
            Estudié en la{" "}
            <Link
              className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
              href="https://fra.utn.edu.ar/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Universidad Tecnológica Nacional
            </Link>{" "}
            y actualmente finalizo mi Tecnicatura en Diseño y Desarrollo Web en{" "}
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
            Me apasiona la tecnología y el aprendizaje constante, aplicando
            herramientas como TypeScript, Expo y Docker. Tengo experiencia con
            SSR y middlewares, optimizando flujos de trabajo con Figma y GitHub.
          </p>
        </>
      ) : (
        <>
          <p className="mb-4">
            I am a frontend developer with over 6 years of experience.
            Currently, I build dynamic and scalable interfaces with React.js,
            Next.js, and I am learning React Native. My focus is on efficient
            solutions with clean and well-structured code.
          </p>
          <p className="mb-4">
            I studied at{" "}
            <Link
              className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
              href="https://fra.utn.edu.ar/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Universidad Tecnológica Nacional
            </Link>{" "}
            and I am finishing my Web Design and Development Degree at{" "}
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
            I am passionate about technology and continuous learning, applying
            tools like TypeScript, Expo, and Docker. I have experience with SSR
            and middlewares, optimizing workflows with Figma and GitHub.
          </p>
        </>
      )}
    </div>
  );
};

export default AboutCard;
