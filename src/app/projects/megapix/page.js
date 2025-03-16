"use client";
import React from "react";
import { LanguageProvider, useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Sections/Footer";
import LanguageSelector from "@/components/LanguageSelector";

const Megapix = () => {
  const { language } = useLanguage();
  return (
    <div className="inset-0 z-30 transition duration-300 lg:absolute">
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
        <div className="lg:py-24">
          <LanguageSelector />
          <Link href="/">
            <div className="group mb-2 inline-flex items-center font-semibold leading-tight text-teal-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="mr-1 h-4 w-4 rotate-180 transition-transform"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Franco Campaiola
            </div>
          </Link>
          {language === "es" ? (
            <>
              <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                Megapix
              </h1>
              <div className="items-center mt-4 md:flex">
                <p className="mt-4 text-xl text-slate-300 pr-8 mb-4 order-2 md:order-1">
                  Megapix es una plataforma tecnológica innovadora desarrollada
                  por la fintech argentina Polynomium para facilitar las
                  transacciones financieras entre Argentina y Brasil. Integrada
                  con la tecnología PIX, respaldada por el Banco Central de
                  Brasil, Megapix permite a los comerciantes argentinos recibir
                  pagos en reales brasileños y convertirlos instantáneamente a
                  USDT (una criptomoneda equivalente al valor del dólar). Los
                  comerciantes pueden luego optar por mantener sus fondos en
                  USDT o convertirlos a pesos argentinos, con la posibilidad de
                  retirar el dinero en sus cuentas bancarias o billeteras
                  digitales. Esta solución elimina las barreras tradicionales
                  del cambio de divisas, minimiza la necesidad de manejar
                  efectivo y elimina el uso de intermediarios de baja
                  confiabilidad, mejorando y beneficiando el comercio, el
                  consumo y el turismo entre ambos países.
                </p>
                <Image
                  src={"/megapix/megapix_phone.webp"}
                  alt="Megapix"
                  loading="lazy"
                  width={"150"}
                  height={"300"}
                  className="mx-auto order-1 md:order-2"
                />
              </div>
              <div className="items-center mt-8 md:flex gap-3 justify-between">
                <Image
                  src={"/megapix/megapix_home.webp"}
                  className="hidden md:block"
                  alt="Megapix"
                  loading="lazy"
                  width={"500"}
                  height={"300"}
                />
                <p className="mt-4 text-xl text-slate-300 ml-4 pr-8 mb-4 md:order-1">
                  La plataforma consta de una aplicación web desarrollada con el
                  framework{" "}
                  <Link
                    className="font-bold text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                    href="https://nextjs.org/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Next.js
                  </Link>{" "}
                  de React, donde utilizamos TypeScript como lenguaje de
                  programación,{" "}
                  <Link
                    className="font-bold text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                    href="https://www.chakra-ui.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    ChakraUI{" "}
                  </Link>
                  como librería de componentes, react-hook-form para la gestión
                  de formularios, TanStack Query para el manejo de datos y Zod
                  para la validación de entradas en los formularios. El proyecto
                  se llevó a cabo utilizando SCRUM con Jira, Docker para
                  ejecutar el código y configurar entornos controlados, y Sentry
                  para el monitoreo de errores.
                </p>
              </div>
              <p className="text-4xl font-extrabold text-center m-8 leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                Megapix: La revolución en pagos transfronterizos entre Argentina
                y Brasil
              </p>
              <div className="items-center mt-8 md:flex gap-3 justify-between">
                <Image
                  src={"/megapix/megapix_negociossinlimites.webp"}
                  width={800}
                  height={300}
                  alt="Megapix Negocios sin limites"
                />
                <Image
                  src={"/megapix/megapix_pagossinfronteras.webp"}
                  width={800}
                  height={300}
                  alt="Megapix Pagos sin fronteras"
                />
              </div>
            </>
          ) : (
            <>
              <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                Megapix
              </h1>
              <div className="items-center mt-4 md:flex">
                <p className="mt-4 text-xl text-slate-300 pr-8 mb-4 order-2 md:order-1">
                  Megapix is an innovative technology platform developed by the
                  Argentine fintech Polynomium to facilitate financial
                  transactions between Argentina and Brazil. Integrated with PIX
                  technology, backed by the Central Bank of Brazil, Megapix
                  allows Argentine merchants to receive payments in Brazilian
                  reais and instantly convert them to USDT (a cryptocurrency
                  equivalent to the value of the US dollar). Merchants can then
                  choose to keep their funds in USDT or convert them to
                  Argentine pesos, with the option to withdraw the money into
                  their bank accounts or digital wallets. This solution
                  eliminates traditional currency exchange barriers, minimizes
                  the need to handle cash, and removes the use of unreliable
                  intermediaries, enhancing and benefiting trade, consumption,
                  and tourism between both countries.
                </p>
                <Image
                  src={"/megapix/megapix_phone.webp"}
                  alt="Megapix"
                  loading="lazy"
                  width={"150"}
                  height={"300"}
                  className="mx-auto order-1 md:order-2"
                />
              </div>
              <div className="items-center mt-8 md:flex gap-3 justify-between">
                <Image
                  src={"/megapix/megapix_home.webp"}
                  className="hidden md:block"
                  alt="Megapix"
                  loading="lazy"
                  width={"500"}
                  height={"300"}
                />
                <p className="mt-4 text-xl text-slate-300 ml-4 pr-8 mb-4 md:order-1">
                  The platform consists of a web application developed with the{" "}
                  <Link
                    className="font-bold text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                    href="https://nextjs.org/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Next.js
                  </Link>{" "}
                  framework from React, using TypeScript as the programming
                  language,{" "}
                  <Link
                    className="font-bold text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                    href="https://www.chakra-ui.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    ChakraUI{" "}
                  </Link>
                  as the component library, react-hook-form for form management,
                  TanStack Query for data handling, and Zod for input validation
                  in forms. The project was carried out using SCRUM with Jira,
                  Docker for running the code and setting up controlled
                  environments, and Sentry for error monitoring.
                </p>
              </div>
              <p className="text-4xl font-extrabold text-center m-8 leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                Megapix: The Revolution in Cross-Border Payments Between
                Argentina and Brazil
              </p>
              <div className="items-center mt-8 md:flex gap-3 justify-between">
                <Image
                  src={"/megapix/megapix_negociossinlimites.webp"}
                  width={800}
                  height={300}
                  alt="Megapix Business Without Limits"
                />
                <Image
                  src={"/megapix/megapix_pagossinfronteras.webp"}
                  width={800}
                  height={300}
                  alt="Megapix Borderless Payments"
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const Page = () => {
  return (
    <LanguageProvider>
      <Megapix />
    </LanguageProvider>
  );
};

export default Page;
