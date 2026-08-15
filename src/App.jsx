import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Highlights from "./components/Highlights.jsx";
import Journey from "./components/Journey.jsx";
import Focus from "./components/Focus.jsx";
import Github from "./components/Github.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import WhatsAppButton from "./components/WhatsAppButton.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Highlights />
        <Journey />
        <Focus />
        <Github />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
