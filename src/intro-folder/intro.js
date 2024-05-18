import React, { useEffect, useState, useMemo } from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import './intro.css';
import myPic from './me.jpeg';

const Introduction = () => {
  const messages = useMemo(() => [
    [
      "Your favorite ",
      { text: "Computer Science", style: { color: 'rgb(65, 157, 255)', fontWeight: 'bold' } },
      " student!"
    ],
    [
      "Attending ",
      { text: "California State University, Fullerton", style: { color: 'rgb(65, 157, 255)', fontWeight: 'bold' } },
      "."
    ]
  ], []);

  const [messageIndex, setMessageIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible(v => !v);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    const currentMessage = messages[messageIndex].reduce((acc, part) => acc + (typeof part === 'string' ? part : part.text), '');
    const typeSpeed = deleting ? 90 : 130;

    const timer = setTimeout(() => {
      if (deleting) {
        if (charIndex > 0) {
          setCharIndex(charIndex - 1);
        } else {
          setDeleting(false);
          setMessageIndex((messageIndex + 1) % messages.length);
        }
      } else {
        if (charIndex < currentMessage.length) {
          setCharIndex(charIndex + 1);
        } else {
          if (messageIndex === 0 && !showButton) {
            setShowButton(true);
          }
          setTimeout(() => setDeleting(true), 3000);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, deleting, messageIndex, messages, showButton]);

  const renderText = () => {
    let currentLength = 0;
    return messages[messageIndex].map((part, index) => {
      const text = typeof part === 'string' ? part : part.text;
      const style = typeof part === 'object' ? part.style : {};
      const partLength = text.length;
      const displayText = charIndex > currentLength ? text.substring(0, Math.min(partLength, charIndex - currentLength)) : '';
      currentLength += partLength;
      return <span key={index} style={style}>{displayText}</span>;
    });
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="intro-container">
      <Container fluid className="intro-content-container">
        <Row className="h-100">
          <Col sm={12} md={6} className="d-flex align-items-center justify-content-center text-center order-md-2">
            <Image src={myPic} fluid className="intro-image" />
          </Col>
          <Col sm={12} md={6} className="d-flex flex-column align-items-center justify-content-center text-center order-md-1">
            <div className="intro-message">
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 1.3 }}
              >
                Hello, I'm Joshua Lopez!
              </motion.h1>
              <p className="intro-text">
                {renderText()}
                <span className={`typing-cursor ${cursorVisible ? 'visible' : ''}`}>|</span>
              </p>
              {showButton && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Button onClick={scrollToContact} className="contact-me-btn mt-3">Contact Me</Button>
                </motion.div>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Introduction;
