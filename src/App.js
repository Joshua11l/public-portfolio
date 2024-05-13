// App.js
import React from 'react';
import './App.css';
import Introduction from './intro-folder/intro';
import NavBar from './navbar-folder/navbar';
import About from './about-folder/about';
import Experience from './exp-folder/exp';
import Projects from './projects-folder/projects'; // Assuming the Projects component is in a file named 'Projects.js'
import Contact from './contact-folder/contact'; // Import Contact component
import Footer from './footer/footer'; // Import Footer component

function App() {
  return (
    <div className="App">
      <NavBar />
      <Introduction />
      <About />
      <Experience />
      <Projects /> {/* Added the Projects component */}
      <Contact /> {/* Added the Contact component */}
      <Footer /> {/* Added the Footer component */}
    </div>
  );
}

export default App;
