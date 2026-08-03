import Background from "./components/effects/Background";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero/Hero";
import About from "./components/sections/About/About";
import Projects from "./components/sections/projects/Projects";
import Skills from "./components/sections/skills/Skills";
import Experience from "./components/sections/experience/Experience";
import Contact from "./components/sections/contact/Contact";
import Footer from "./components/layout/Footer";
import ScrollProgress from "./components/effects/ScrollProgress";

export default function App() {
  return (
    <>
      <Background />
      <ScrollProgress/>
      <Navbar />
      <Hero />
       <About />
       <Experience/>
       <Projects />

       <Skills/>

       <Contact/>
       <Footer/>
    </>
  );
}