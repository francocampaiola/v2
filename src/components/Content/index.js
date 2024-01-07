import React from "react";
import AboutCard from "../AboutCard";
import Experience from "../Experience";
import Projects from "../Projects";
import Footer from "../Footer";
import LanguageSelector from "../LanguageSelector";

const Content = ({}) => {
  return (
    <main id="content" className="pt-14 lg:pt-24 lg:w-1/2 lg:py-24">
      <LanguageSelector />
      <AboutCard />
      <Experience />
      <Projects />
      <Footer />
    </main>
  );
};

export default Content;
