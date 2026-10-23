import { BlogTeaser, Experience, Hero, Milestones, Projects, Skills } from "@/components/home/sections";

// La home: quién soy, los milestones animados, proyectos, experiencia, skills y el blog.
export default function Page() {
  return (
    <>
      <Hero />
      <Milestones />
      <Projects />
      <Experience />
      <Skills />
      <BlogTeaser />
    </>
  );
}
