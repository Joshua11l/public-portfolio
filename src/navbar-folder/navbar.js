import React, { useState, useEffect } from 'react';
import { Nav, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBriefcase, faProjectDiagram, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import logoImg from './logo1.PNG';
import './navbar.css';
import AnimatedBurger from './AnimatedBurger';

const NavBar = () => {
  const [navBackground, setNavBackground] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavBackground(true);
    } else {
      setNavBackground(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('scroll', changeBackground);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', changeBackground);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Function to scroll to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // for smooth scrolling
    });
  };

  // Function to toggle the navbar
  const toggleNavbar = () => setIsOpen(!isOpen);

  // Function to handle link click and set active state
  const handleLinkClick = (e) => {
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => link.classList.remove('active'));
    if (e.currentTarget) {
      e.currentTarget.classList.add('active');
    }
    if (window.innerWidth < 992) {
      toggleNavbar();
    }

    // Remove the active class after a delay
    setTimeout(() => {
      if (e.currentTarget) {
        e.currentTarget.classList.remove('active');
      }
    }, 300); // Adjust the delay as needed
  };

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${navBackground ? 'navbar-dark bg-dark' : 'navbar-transparent'}`}>
      <div className="container-fluid">
        <button className="navbar-brand logo" onClick={scrollToTop} style={{ background: 'none', border: 'none' }}>
          <img src={logoImg} height="50" className="d-inline-block align-top" alt="Your Logo" />
        </button>
        <div style={{ display: windowWidth >= 992 ? 'none' : 'block', zIndex: 1030 }}>
          <AnimatedBurger isOpen={isOpen} toggle={toggleNavbar} />
        </div>
        <div className={`${isOpen ? 'show' : ''} collapse navbar-collapse`} id="responsive-navbar-nav">
          <Nav className={`ms-auto ${isOpen ? 'nav-open' : ''}`}>
            <Nav.Link href="#about" onClick={handleLinkClick}>
              <FontAwesomeIcon icon={faUser} /> About
            </Nav.Link>
            <Nav.Link href="#experience" onClick={handleLinkClick}>
              <FontAwesomeIcon icon={faBriefcase} /> Experience
            </Nav.Link>
            <Nav.Link href="#projects" onClick={handleLinkClick}>
              <FontAwesomeIcon icon={faProjectDiagram} /> Projects
            </Nav.Link>
            <Nav.Link href="#contact" onClick={handleLinkClick}>
              <FontAwesomeIcon icon={faEnvelope} /> Contact Me
            </Nav.Link>
            <Button
              variant="outline-light"
              href="https://drive.google.com/file/d/1eFOvkIvbRdON54GGV8b03J1LdXB6aV1M/view?usp=sharing"
              target="_blank"
              className="resume-button"
            >
              Resume
            </Button>
          </Nav>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
