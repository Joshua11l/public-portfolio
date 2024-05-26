import React, { useState, useEffect } from 'react';
import { Nav, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBriefcase, faProjectDiagram, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import logoImg from './logo1.PNG';
import './navbar.css';
import AnimatedBurger from './AnimatedBurger';
import 'intersection-observer';

const NavBar = ({ sectionRefs }) => {
  const [navBackground, setNavBackground] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [activeLink, setActiveLink] = useState('');

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavBackground(true);
    } else {
      setNavBackground(false);
      setActiveLink('');
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const { about, experience, projects, contact } = sectionRefs;

      if (contact.current && contact.current.offsetTop <= scrollY + 100) {
        setActiveLink('contact');
      } else if (projects.current && projects.current.offsetTop <= scrollY + 100) {
        setActiveLink('projects');
      } else if (experience.current && experience.current.offsetTop <= scrollY + 100) {
        setActiveLink('experience');
      } else if (about.current && about.current.offsetTop <= scrollY + 100) {
        setActiveLink('about');
      } else {
        setActiveLink('');
      }
    };

    window.addEventListener('scroll', changeBackground);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', changeBackground);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [sectionRefs]);

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
  const handleLinkClick = (link) => {
    setActiveLink(link);
    if (window.innerWidth < 992) {
      toggleNavbar();
    }
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
            <Nav.Link href="#about" className={activeLink === 'about' ? 'active' : ''} onClick={() => handleLinkClick('about')}>
              <FontAwesomeIcon icon={faUser} /> About
            </Nav.Link>
            <Nav.Link href="#experience" className={activeLink === 'experience' ? 'active' : ''} onClick={() => handleLinkClick('experience')}>
              <FontAwesomeIcon icon={faBriefcase} /> Experience
            </Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active' : ''} onClick={() => handleLinkClick('projects')}>
              <FontAwesomeIcon icon={faProjectDiagram} /> Projects
            </Nav.Link>
            <Nav.Link href="#contact" className={activeLink === 'contact' ? 'active' : ''} onClick={() => handleLinkClick('contact')}>
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
