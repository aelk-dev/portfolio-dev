import React from "react";
import Navbar from "./components/Layout/Navigation/Navbar";
import Hero from "./components/sections/Hero/Hero";
import About from "./components/sections/About/About";
import Projects from "./components/sections/Projects/Projects";
import Skills from "./components/sections/Skills/Skills";
import Contact from "./components/sections/Contact/Contact";
import Footer from "./components/sections/Footer/footer";

const App = () => {
  return (
    <>
      <div
        className="
        min-h-screen bg-linear-to-br 
        from-purple-400 via-fuchsia-200 
        to-fuchsia-50 dark:from-gray-900 
        dark:via-purple-950 dark:to-gray-900
        transition-colors
        "
      >
        <Navbar />
        <main className="relative z-10">
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;
