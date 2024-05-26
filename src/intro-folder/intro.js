import React, { useEffect, useState, useMemo } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useSpring, animated, useScroll } from '@react-spring/web';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './intro.css';
import img2 from './15.png';
import img3 from './16.png';
import img4 from './17.png';

const Introduction = () => {
  const messages = useMemo(() => [
    ["Your favorite ", <span className="highlight">Computer Science</span>, " student!"],
    ["Attending ", <span className="highlight">California State University, Fullerton</span>, "."]
  ], []);

  const [messageIndex, setMessageIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible(v => !v);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    const currentMessage = messages[messageIndex].reduce((acc, part) => acc + (typeof part === 'string' ? part : part.props.children), '');
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
          setTimeout(() => setDeleting(true), 3000);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, deleting, messageIndex, messages]);

  const renderText = () => {
    let currentLength = 0;
    return messages[messageIndex].map((part, index) => {
      const text = typeof part === 'string' ? part : part.props.children;
      const partLength = text.length;
      const displayText = charIndex > currentLength ? text.substring(0, Math.min(partLength, charIndex - currentLength)) : '';
      currentLength += partLength;
      return typeof part === 'string' ? displayText : <span key={index} className="highlight">{displayText}</span>;
    });
  };

  const { scrollY } = useScroll();
  const textSpring = useSpring({
    y: scrollY.to([0, 300], [0, -200]),
  });
  const leftImageSpring = useSpring({
    x: scrollY.to([0, 300], [0, 200]),
    y: scrollY.to([0, 300], [0, 0]),
    scale: scrollY.to([0, 300], [1, 0.5]),
    opacity: scrollY.to([0, 300], [1, 0]),
  });
  const rightImageSpring = useSpring({
    x: scrollY.to([0, 300], [0, -200]),
    y: scrollY.to([0, 300], [0, 0]),
    scale: scrollY.to([0, 300], [1, 0.5]),
    opacity: scrollY.to([0, 300], [1, 0]),
  });

  const scrollTextSpring = useSpring({
    y: scrollY.to([0, 300], [0, -100]),
  });

  return (
    <div className="intro-container">
      <Container fluid className="intro-content-container">
        <Row className="h-100 align-items-center justify-content-center text-center">
          <Col sm={4} className="d-flex flex-column align-items-center">
            <animated.div style={leftImageSpring} className="image-container">
              <div style={{width: '60%', height: '0', paddingBottom: '74%', position: 'relative'}}>
                <iframe src="https://giphy.com/embed/cIn5fTcjnKhStIeAef" width="100%" height="100%" style={{position: 'absolute'}} frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
              </div>
              <Image src={img2} fluid className="intro-image img-left" />
            </animated.div>
          </Col>
          <Col sm={4} className="d-flex flex-column align-items-center justify-content-center">
            <animated.div style={textSpring} className="intro-message">
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 1.3 }}
              >
                <span className="highlight">Joshua Lopez</span>
              </motion.h1>
              <p className="intro-text">
                {renderText()}
                <span className={`typing-cursor ${cursorVisible ? 'visible' : ''}`}>|</span>
              </p>
            </animated.div>
          </Col>
          <Col sm={4} className="d-flex flex-column align-items-center">
            <animated.div style={rightImageSpring} className="image-container">
              <Image src={img3} fluid className="intro-image mb-3" />
              <Image src={img4} fluid className="intro-image img-right" />
            </animated.div>
          </Col>
        </Row>
      </Container>
      <animated.div className="scroll-down-section" style={scrollTextSpring}>
        <p className="scroll-down-text">
          Scroll down
        </p>
        <div className="scroll-icon-container">
          <FontAwesomeIcon icon={faArrowDown} className="scroll-icon" />
        </div>
      </animated.div>
    </div>
  );
}

export default Introduction;
