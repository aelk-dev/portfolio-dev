import React from "react";
import Navbar from "./components/Layout/Navigation/Navbar";
import Hero from "./components/Home/Hero";

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
        </main>
      </div>
    </>
  );
};

export default App;
