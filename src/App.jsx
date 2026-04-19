import React from "react";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div
      className="
      min-h-screen bg-linear-to-br 
      from-purple-400 via-fuchsia-200 
      to-fuchsia-50 dark:from-purple-900 
      dark:via-purple-500 dark:to-gray-800 
      transition-colors
      "
    >
      <Navbar />
    </div>
  );
};

export default App;
