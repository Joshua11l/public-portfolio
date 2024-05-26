import React, { useState } from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './exp.css'; // Assuming your CSS is in Experience.css
import img1 from './5.png';
import img2 from './6.png';
import img3 from './10.png';
import img4 from './11.png';
import img5 from './12.png';

// Rename Nav.Link to NavLink to avoid conflicts
const { Link: NavLink } = Nav;

const experiences = [
    {
        id: 'exp1',
        title: '(DSS) Divine Software Systems',
        jobTitle: 'Co-Founder & Software Engineering Lead',
        description: (
            <ul>
                <li>Co-founded and led a web and app development team that collaborates with various companies to revolutionize their online presence.</li>
                <li>Spearheaded the development of dynamic, responsive websites using various frameworks, ensuring optimal user experience across multiple platforms.</li>
                <li>Directed the creation of mobile applications tailored to enhance client engagement and expand their market reach.</li>
                <li>Implemented advanced technological solutions to significantly boost operational efficiency and client satisfaction.</li>
            </ul>
        ),
    },
    {
        id: 'exp2',
        title: 'HRR PR Consulting',
        jobTitle: 'Lead UI/UX & Web Development Consultant',
        description: (
            <ul className="description-text">
                <li>Hired as part of the web development team to create innovative websites and mobile applications for various clients.</li>
                <li>Designed and prototyped user-friendly, aesthetically pleasing interfaces, significantly improving user engagement by 30%.</li>
                <li>Worked closely with clients to understand their needs, ensuring that final products align perfectly with their business goals and audience expectations.</li>
                <li>Utilized a combination of modern design principles and technology tools to deliver responsive and visually compelling projects.</li>
            </ul>
        ),
    },
    {
        id: 'exp3',
        title: 'Farmers Insurance',
        jobTitle: 'Full Stack Developer',
        description: (
            <ul className="description-text">
                <li>Responsible for the maintenance and management of the company’s web platforms, ensuring high availability and reliability.</li>
                <li>Played a key role in engineering and maintaining robust insurance software solutions that enhanced system performance.</li>
                <li>Contributed to a 20% increase in process efficiency through continuous optimization and updates to the website's infrastructure.</li>
                <li>Collaborated closely with cross-functional teams to integrate new features and functionalities, enhancing user experience and operational capabilities.</li>
            </ul>
        ),
    },
    {
        id: 'exp4',
        title: 'Wings of Angels Transport Services',
        jobTitle: 'Lead Web Developer & Project Manager',
        description: (
            <ul className="description-text">
                <li>Revolutionized operational workflow and database management for a funeral transportation service using digital solutions.</li>
                <li>Developed a user-centric interface and robust database with Flutter, enhancing operational efficiency.</li>
                <li>Improved scalability and security for internal and external web platforms.</li>
                <li>Led the project from conception to completion, ensuring timely delivery and high quality standards.</li>
            </ul>
        ),
    },
    // More experiences can be added here.
];

const Experience = () => {
    const [activeId, setActiveId] = useState(experiences[0].id);

    // Handler for selecting a new experience
    const handleSelect = (selectedKey) => {
        setActiveId(selectedKey);
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000, // Make the slider slide quicker
    };

    const { ref: workRef, inView: workInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const { ref: companiesRef, inView: companiesInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <Container className="custom-container mt-5" id="experience">
            <Row className="justify-content-center">
                <Col md={12} className="text-center mb-4">
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        animate={workInView ? { x: 0, opacity: 1 } : {}}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="exp-title">Work Experience</h2>
                    </motion.div>
                </Col>
            </Row>
            <motion.div
                ref={workRef}
                initial={{ x: -100, opacity: 0 }}
                animate={workInView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5 }}
            >
                <div className="experience-container">
                    <Row>
                        <Col xs={3}>
                            <Nav variant="pills" className="flex-column" onSelect={handleSelect}>
                                {experiences.map((exp) => (
                                    <Nav.Item key={exp.id}>
                                        <NavLink
                                            eventKey={exp.id}
                                            active={exp.id === activeId}
                                        >
                                            {exp.title}
                                        </NavLink>
                                    </Nav.Item>
                                ))}
                            </Nav>
                        </Col>
                        <Col xs={9}>
                            {experiences.filter(exp => exp.id === activeId).map(exp => (
                                <motion.div
                                    key={exp.id}
                                    initial={{ opacity: 0, x: -100 }}
                                    animate={workInView ? { opacity: 1, x: 0 } : {}}
                                    exit={{ opacity: 0, x: 100 }}
                                    transition={{ duration: 0.5 }}
                                    className="experience-box"
                                >
                                    <h3>{exp.title}</h3>  {/* Company Title */}
                                    <h5>{exp.jobTitle}</h5>  {/* Job Title */}
                                    <div className="description-text">{exp.description}</div>
                                </motion.div>
                            ))}
                        </Col>
                    </Row>
                </div>
            </motion.div>
            <Row className="justify-content-center mt-5">
                <Col md={12} className="text-center mb-4">
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        animate={companiesInView ? { x: 0, opacity: 1 } : {}}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="companies-title">Companies I've Worked With</h2>
                    </motion.div>
                </Col>
                <Col md={12}>
                    <motion.div
                        ref={companiesRef}
                        initial={{ x: 100, opacity: 0 }}
                        animate={companiesInView ? { x: 0, opacity: 1 } : {}}
                        transition={{ duration: 0.5 }}
                    >
                        <Slider {...settings}>
                            <div className="carousel-image-container">
                                <img src={img1} alt="Placeholder 1" className="carousel-image" />
                            </div>
                            <div className="carousel-image-container">
                                <img src={img2} alt="Placeholder 2" className="carousel-image" />
                            </div>
                            <div className="carousel-image-container">
                                <img src={img3} alt="Placeholder 3" className="carousel-image" />
                            </div>
                            <div className="carousel-image-container">
                                <img src={img4} alt="Placeholder 4" className="carousel-image" />
                            </div>
                            <div className="carousel-image-container">
                                <img src={img5} alt="Placeholder 5" className="carousel-image" />
                            </div>
                        </Slider>
                    </motion.div>
                </Col>
            </Row>
        </Container>
    );
};

export default Experience;
