import React from 'react';
import { Container, Carousel, Card } from 'react-bootstrap';
import './projects.css';  // Assuming custom CSS is stored here
import newPic from './2.png';
import newPic1 from './6.png';
import newPic2 from './7.png';


const projects = [
    {
        "id": 1,
        "title": "Divine Messenger",
        "description": "Developed a digital solution for a funeral home to streamline operations using a user-centric interface and database architecture implemented in Flutter, while meticulously managing project timelines to maintain high quality standards.",
        "technologies": "Flutter, Dart, Javascript, Firebase, HTML",
        "imageUrl": newPic
    },
    {
        "id": 2,
        "title": "Movie Recommendation Website",
        "description": "Created a visually captivating movie recommendation app with a neon-themed interface. Features include real-time search, genre-based discovery, and a responsive design, utilizing TMDB API for fetching real-time data.",
        "technologies": "HTML, TypeScript, Bootstrap, CSS, SvelteKit",
        "imageUrl": newPic1
    },
    {
        "id": 3,
        "title": "My Portfolio",
        "description": "Engineered an interactive portfolio using JSX and React. Enhanced the interface with Bootstrap, CSS, and Framer Motion for dynamic animations and responsive layouts, integrating React Awesome Icons for added aesthetic appeal.",
        "technologies": "JSX, HTML, React, Bootstrap, CSS, Framer Motion",
        "imageUrl": newPic2
    }
    
    
];


    


const Projects = () => {
    return (
        <Container className="mt-5 projects-section" id="projects">
            <h2 className="text-center mb-3 projects-header">My Projects</h2>
            <Carousel>
                {projects.map(project => (
                    <Carousel.Item key={project.id} className="project-carousel-item">
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
                    </Carousel.Item>
                ))}
            </Carousel>
        </Container>
    );
}

export default Projects;
