import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="content">
        <Hero />
        <section className="section-wrap" id="about">
          <About />
        </section>
        <section className="section-wrap" id="experience">
          <Experience />
        </section>
        <section className="section-wrap" id="education">
          <Education />
        </section>
        <section className="section-wrap" id="skills">
          <Skills />
        </section>
        <section className="section-wrap" id="projects">
          <Projects />
        </section>
        <section className="section-wrap" id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
