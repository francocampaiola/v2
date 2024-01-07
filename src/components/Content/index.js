import React from "react";
import Experience from "../Sections/Experience";
import Projects from "../Sections/Projects";
import Footer from "../Sections/Footer";
import LanguageSelector from "../LanguageSelector";
import About from "../Sections/About";

const Content = ({}) => {
  return (
    <main id="content" className="pt-14 lg:pt-24 lg:w-1/2 lg:py-24">
      <LanguageSelector />
      <About />
      <Experience />
      <Projects />
      <Footer />
    </main>
  );
};

export default Content;
