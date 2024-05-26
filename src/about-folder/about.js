import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython, faReact, faHtml5, faJsSquare, faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { faCode, faMobileAlt, faDatabase } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import './about.css'; // Ensure your CSS file is correctly linked
import aboutPic from './newimg.png';

const skills = [
  { name: 'Python', icon: faPython },
  { name: 'C++', icon: faCode },
  { name: 'Javascript', icon: faJsSquare },
  { name: 'HTML', icon: faHtml5 },
  { name: 'Typescript', icon: faJsSquare }, // Using Javascript icon for Typescript
  { name: 'Dart', icon: faCode }, // No specific icon for Dart, using generic code icon
  { name: 'React', icon: faReact },
  { name: 'Bootstrap', icon: faBootstrap },
  { name: 'Flutter', icon: faMobileAlt }, // Using mobile development icon for Flutter
  { name: 'Firebase', icon: faDatabase },
  { name: 'Svelte', icon: faCode }, // No specific icon for Svelte, using generic code icon
];

const About = () => {
  return (
    <Container className="py-5 about-container" id="about"> {/* Added ID here */}
      <Row className="justify-content-center">
        <Col md={6} className="d-flex justify-content-center align-items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="image-container">
              <img src={aboutPic} className="profile-image" alt="Joshua Lopez" />
            </div>
          </motion.div>
        </Col>
        <Col md={6} className="text-center">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="about-heading">About Me</h2>
            <p className="about-text">
              Hello! I'm Joshua Lopez, a Computer Science sophomore at California State University, Fullerton. My early interest in technology began with a Gameboy, leading to a lifelong passion for computers and technology. Today, I'm dedicated to using technology to solve real-world problems through skills in programming, analytical problem-solving, and collaborative development. <br /><br />
              Throughout my academic and professional journey, I have gained proficiency in C++, Python, JavaScript, and HTML, and I'm currently expanding into C# and Rust. My experience includes creating innovative solutions for various industries, including a startup, Divine Messenger, which revolutionizes workflow and database management for funeral home services. <br /><br />
              I aim to continue contributing to impactful projects and seek to establish meaningful connections within the tech industry. Thank you for taking the time to learn about my journey and aspirations.
            </p>
          </motion.div>
        </Col>
      </Row>
      <Row className="justify-content-center mt-4">
        <Col md={12} className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="skills-heading">Skills and Technologies</h3>
          </motion.div>
        </Col>
        {skills.map((skill) => (
          <Col key={skill.name} xs={6} sm={4} lg={2} className="mb-3 d-flex justify-content-center">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <Card className="skill-card d-flex flex-row align-items-center">
                <FontAwesomeIcon icon={skill.icon} size="lg" className="skill-icon" />
                <Card.Body>
                  <Card.Title className="skill-title">{skill.name}</Card.Title>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default About;
