import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Education from "./pages/Education";
import Projects from "./pages/Projects";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
       
        <Navbar />
        <main className="flex h-91.5vh ">
        
          <Sidebar />
          <section className=" app w-10/14 h-screen ">
            
            <Routes>
             
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/education" element={<Education />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="contact" element={<Contact />} />
            </Routes>
          </section>
        </main>
      </BrowserRouter>
    </>
  );
};

export default App;
