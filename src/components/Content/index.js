import React from "react";
import AboutCard from "../AboutCard";
import Experience from "../Experience";

const Content = () => {
  return (
    <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
      <AboutCard />
      <Experience />
    </main>
  );
};

export default Content;
