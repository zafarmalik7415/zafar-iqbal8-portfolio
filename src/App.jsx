import { useState } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectModal from "./components/ProjectModal";

export default function App() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <div className="app">
      <Nav />
      <main>
        <Hero />
        <Services />
        <Projects onSelect={setActiveProject} />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </div>
  );
}
