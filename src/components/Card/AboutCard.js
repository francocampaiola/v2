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
            Desde que tengo memoria, tuve mucha curiosidad por entender el
            funcionamiento de la tecnología. En el 2016, apenas concluí la
            secundaria, me sumergí de lleno en el fascinante mundo del
            desarrollo. Estudié en la
            <Link
              className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
              href="https://fra.utn.edu.ar/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Universidad Tecnológica Nacional (abriéndose en una nueva pestaña)"
            >
              {" "}
              Universidad Tecnológica Nacional
            </Link>
            , donde aprendí las bases de la programación.
          </p>
          <p className="mb-4">
            Hoy, ya finalizando mi Tecnicatura en Diseño y Desarrollo Web en
            <Link
              className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
              href="https://davinci.edu.ar/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Escuela Da Vinci (abriéndose en una nueva pestaña)"
            >
              {" "}
              Escuela Da Vinci
            </Link>
            , me enfoco particularmente en el diseño y la experiencia de
            usuario. En esta carrera me enfoqué en dominar JavaScript y sus
            frameworks más famosos, como React y Vue.
          </p>
          <p>
            Actualmente, mi objetivo es crear aplicaciones utilizando
            <Link
              className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
              href="https://nextjs.org/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Next.js (abriéndose en una nueva pestaña)"
            >
              {" "}
              Next.js
            </Link>
            , en donde las mismas hagan un diferencial por su experiencia de
            usuario, simplicidad e innovación.
          </p>
        </>
      ) : (
        <>
          <p className="mb-4">
            For as long as I can remember, I have been very curious to
            understand how technology works. In 2016, right after finishing high
            school, I immersed myself in the fascinating world of development. I
            studied programming at
            <Link
              className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
              href="https://fra.utn.edu.ar/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Universidad Tecnológica Nacional (opens in a new tab)"
            >
              {" "}
              Universidad Tecnológica Nacional
            </Link>
            , where I learned the basics of programming.
          </p>
          <p className="mb-4">
            Today, already finishing my Degree in Web Design and Development at
            <Link
              className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
              href="https://davinci.edu.ar/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Escuela Da Vinci (opens in a new tab)"
            >
              {" "}
              Escuela Da Vinci
            </Link>
            , I focus particularly on design and user experience. In this career
            I focused on mastering JavaScript and its most famous frameworks,
            such as React and Vue.
          </p>
          <p>
            Currently, my goal is to create applications using
            <Link
              className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
              href="https://nextjs.org/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Next.js (opens in a new tab)"
            >
              {" "}
              Next.js
            </Link>
            , where they make a difference for their user experience, simplicity
            and innovation.
          </p>
        </>
      )}
    </div>
  );
};

export default AboutCard;
