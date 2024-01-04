import React from "react";
import Menu from "../Menu";
import Social from "../Social";

const Sidebar = () => {
  return (
    <>
      <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
          <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
            Franco Campaiola
          </h1>
          <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
            Frontend Developer
          </h2>
          <p className="mt-4 max-w-xs leading-normal">
            Ex proident ea magna consectetur consectetur et elit excepteur incididunt nisi.
          </p>
          <Menu />
      <Social />
      </header>
    </>
  );
};

export default Sidebar;
