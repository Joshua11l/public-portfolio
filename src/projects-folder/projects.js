import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './projects.css';  // Assuming custom CSS is stored here
import newPic from './2.png';
import newPic1 from './6.png';
import newPic2 from './7.png';

const projects = [
    {
        id: 1,
        title: "Divine Messenger",
        description: "Developed a digital solution for a funeral home to streamline operations using a user-centric interface and database architecture implemented in Flutter, while meticulously managing project timelines to maintain high quality standards.",
        technologies: "Flutter, Dart, Javascript, Firebase, HTML, Documentaro",
        imageUrl: newPic
    },
    {
        id: 2,
        title: "Movie Recommendation Website",
        description: "Created a visually captivating movie recommendation app with a neon-themed interface. Features include real-time search, genre-based discovery, and a responsive design, utilizing TMDB API for fetching real-time data.",
        technologies: "HTML, TypeScript, Bootstrap, CSS, SvelteKit",
        imageUrl: newPic2
    },
    {
        id: 3,
        title: "My Portfolio",
        description: "Engineered an interactive portfolio using JSX and React. Enhanced the interface with Bootstrap, CSS, and Framer Motion for dynamic animations and responsive layouts, integrating React Awesome Icons for added aesthetic appeal.",
        technologies: "JSX, HTML, React, Bootstrap, CSS, Framer Motion",
        imageUrl: newPic1
    }
];

const Projects = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    React.useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <Container className="mt-5 projects-section" id="projects">
            <motion.h2 
                className="text-center mb-3 projects-header"
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={containerVariants}
            >
                My Projects
            </motion.h2>
            <motion.div
                className="row"
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={containerVariants}
            >
                {projects.map((project) => (
                    <Col md={6} lg={4} className="mb-4" key={project.id}>
                        <motion.div
                            variants={cardVariants}
                            transition={{ duration: 0.5, ease: 'easeOut' }}
                        >
                            <Card className="project-card">
                                <Card.Img variant="top" src={project.imageUrl} />
                                <Card.Body>
                                    <Card.Title className="project-card-title">{project.title}</Card.Title>
                                    <Card.Text className="project-card-description">{project.description}</Card.Text>
                                    <Card.Text className="project-card-technologies">
                                        <strong>Technologies:</strong> {project.technologies}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </motion.div>
                    </Col>
                ))}
            </motion.div>
        </Container>
    );
};

export default Projects;
