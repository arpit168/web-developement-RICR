import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import Navbar from "./components/Navbar";
import About from "./components/about";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact_me from "./components/Contact_me";


function App() {
  return (
    <>
      <Navbar />
      <About />
      <Education />
      <Projects />
      <Contact_me/>
      
      
    </>
  );
}

export default App;
