import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faUser, faBriefcase, faProjectDiagram, faEnvelope
} from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import logoImg from './logo1.PNG';
import './navbar.css';

const NavBar = () => {
    const [navBackground, setNavBackground] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNavBackground(true);
        } else {
            setNavBackground(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeBackground);
        return () => {
            window.removeEventListener('scroll', changeBackground);
        };
    }, []);

    // Function to scroll to the top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // for smooth scrolling
        });
    };

    return (
        <Navbar expand="lg" fixed="top" className={navBackground ? 'navbar-dark bg-dark' : 'navbar-transparent'}>
            <Navbar.Brand className="logo" onClick={scrollToTop}>
                <img
                    src={logoImg}
                    height="50"
                    className="d-inline-block align-top"
                    alt="Your Logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                <Nav>
                    <Nav.Link href="#about"><FontAwesomeIcon icon={faUser} /> About</Nav.Link>
                    <Nav.Link href="#experience"><FontAwesomeIcon icon={faBriefcase} /> Experience</Nav.Link>
                    <Nav.Link href="#projects"><FontAwesomeIcon icon={faProjectDiagram} /> Projects</Nav.Link>
                    <Nav.Link href="#contact"><FontAwesomeIcon icon={faEnvelope} /> Contact Me</Nav.Link>
                    <Button variant="outline-light" href="https://drive.google.com/file/d/1eFOvkIvbRdON54GGV8b03J1LdXB6aV1M/view?usp=sharing" target="_blank" className="resume-button">Resume</Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;
