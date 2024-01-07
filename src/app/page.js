import React from "react";
import { LanguageProvider } from "@/context/LanguageContext";
import Content from "@/components/Content";
import Sidebar from "@/components/Sections/Sidebar";

const Page = () => {
  return (
    <LanguageProvider>
      <Sidebar />
      <Content />
    </LanguageProvider>
  );
};

export default Page;
