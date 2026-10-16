import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import About from "./components/About/About.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Journey from "./components/Journey/Journey.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
