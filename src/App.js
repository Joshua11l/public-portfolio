// App.js
import React, { useRef } from 'react';
import './App.css';
import Introduction from './intro-folder/intro';
import NavBar from './navbar-folder/navbar';
import About from './about-folder/about';
import Experience from './exp-folder/exp';
import Projects from './projects-folder/projects';
import Contact from './contact-folder/contact';
import Footer from './footer/footer';

function App() {
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const sectionRefs = {
    about: aboutRef,
    experience: experienceRef,
    projects: projectsRef,
    contact: contactRef,
  };

  return (
    <div className="App">
      <NavBar sectionRefs={sectionRefs} />
      <Introduction />
      <About ref={aboutRef} />
      <Experience ref={experienceRef} />
      <Projects ref={projectsRef} />
      <Contact ref={contactRef} />
      <Footer />
    </div>
  );
}

export default App;
