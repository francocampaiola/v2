"use client";
import React from "react";
import { useLanguage } from "@/context/LanguageContext";

const Footer = () => {
  const { language } = useLanguage();

  return (
    <>
      {language === "es" ? (
        <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
          <p>
            Diseñado en{" "}
            <a
              href="https://www.figma.com/"
              className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Figma (abriéndose en una nueva pestaña)"
            >
              Figma
            </a>{" "}
            y desarrollado en{" "}
            <a
              href="https://code.visualstudio.com/"
              className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Visual Studio Code (abriéndose en una nueva pestaña)"
            >
              Visual Studio Code.
            </a>{" "}
            <br />
            Realizado con{" "}
            <a
              href="https://nextjs.org/"
              className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Next.js (abriéndose en una nueva pestaña)"
            >
              Next.js
            </a>{" "}
            y{" "}
            <a
              href="https://tailwindcss.com/"
              className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Tailwind CSS (abriéndose en una nueva pestaña)"
            >
              Tailwind CSS
            </a>
            , desplegado con{" "}
            <a
              href="https://vercel.com/"
              className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Vercel (abriéndose en una nueva pestaña)"
            >
              Vercel
            </a>
            . Inspirado en el portfolio de{" "}
            <a
              href="https://brittanychiang.com/"
              className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Brittany Chiang (abriéndose en una nueva pestaña)"
            >
              Brittany Chiang
            </a>
            .
          </p>
        </footer>
      ) : (
        <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
          <p>
            Loosely designed in{" "}
            <a
              href="https://www.figma.com/"
              className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Figma (opens in a new tab)"
            >
              Figma
            </a>{" "}
            and coded in{" "}
            <a
              href="https://code.visualstudio.com/"
              className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Visual Studio Code (opens in a new tab)"
            >
              Visual Studio Code
            </a>{" "}
            by yours truly. Built with{" "}
            <a
              href="https://nextjs.org/"
              className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Next.js (opens in a new tab)"
            >
              Next.js
            </a>{" "}
            and{" "}
            <a
              href="https://tailwindcss.com/"
              className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Tailwind CSS (opens in a new tab)"
            >
              Tailwind CSS
            </a>
            , deployed with{" "}
            <a
              href="https://vercel.com/"
              className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Vercel (opens in a new tab)"
            >
              Vercel
            </a>
            . Inspired in{" "}
            <a
              href="https://brittanychiang.com/"
              className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Brittany Chiang (abriéndose en una nueva pestaña)"
            >
              Brittany Chiang
            </a>
            's portfolio.
          </p>
        </footer>
      )}
    </>
  );
};

export default Footer;
