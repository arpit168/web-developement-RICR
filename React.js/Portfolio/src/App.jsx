import React from 'react'
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Education from './pages/Education';
import Projects from './pages/Projects';

const App = () => {
  return (
      <>
      
        <Navbar/>
        <main>
          <Sidebar/>

          <section>
            <Home/>
            <About/>
            <Education/>
            <Projects/>
            <Contact/>
           
            
          </section>
        </main>
      </>

  )
}

export default App;