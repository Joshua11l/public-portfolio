import React, { useState } from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { motion } from 'framer-motion';
import './exp.css'; // Assuming your CSS is in Experience.css

// Rename Nav.Link to NavLink to avoid conflicts
const { Link: NavLink } = Nav;

const experiences = [
    {
        id: 'exp1',
        title: 'Divine Software Systems',
        jobTitle: 'Co-Founder & Software Engineering Lead',
        description: (
            <ul>
                <li>Co-founded and led a web and app development team that collaborates with various companies to revolutionize their online presence.</li>
                <li>Spearheaded the development of dynamic, responsive websites using varias frameworks, ensuring optimal user experience across multiple platforms.</li>
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

    return (
        <Container className="custom-container mt-5" id="experience">
            <Row className="justify-content-center">
                <Col md={12} className="text-center mb-4 exp-title">
                    <h2>Work Experience</h2>
                </Col>
            </Row>
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
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h3>{exp.title}</h3>  {/* Company Title */}
                            <h5>{exp.jobTitle}</h5>  {/* Job Title */}
                            <div className="description-text">{exp.description}</div>
                        </motion.div>
                    ))}
                </Col>
            </Row>
        </Container>
    );
};

export default Experience;
