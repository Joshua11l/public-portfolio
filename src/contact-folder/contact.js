import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import './contact.css'; // Ensure CSS is linked correctly

const Contact = () => {
    const [state, handleSubmit] = useForm("xbjnbyyo"); // Correctly set the Formspree form ID

    return (
        <Container className="contact-section mt-5" id="contact">
            <h2 className="text-center mb-4 contact-header">Contact Me</h2>
            <Row>
                <Col sm={12} md={6} className="social-links d-flex justify-content-center align-items-center mb-3">
                    <p className="mr-3 contact-me">Connect with me:</p>
                    <a href="https://www.facebook.com/profile.php?id=100012736188892&mibextid=LQQJ4d" className="social-icon mr-2"><FontAwesomeIcon icon={faFacebookF} /></a>
                    <a href="https://www.linkedin.com/in/joshua-lopez-811758252/" className="social-icon mr-2"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                    <a href="https://github.com/Joshua11l" className="social-icon"><FontAwesomeIcon icon={faGithub} /></a>
                </Col>
                <Col sm={12} md={6} className="contact-form">
                    {state.succeeded ? (
                        <div className="thank-you-message" style={{ color: 'rgb(65, 157, 255)' }}>
                            <h2 style={{ fontWeight: 'bold' }}>Thank you!</h2>
                            <p style={{ color: 'white' }}>Thanks for your message! I'll get back to you soon.</p>
                        </div>
                    ) : (
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="formBasicName">
                                <Form.Control type="text" name="name" placeholder="Full Name" size="md" className="mb-3 contact-input" />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="email" name="email" placeholder="Enter Email" size="md" className="mb-3 contact-input" />
                                <ValidationError prefix="Email" field="email" errors={state.errors} />
                            </Form.Group>
                            <Form.Group controlId="formBasicPhone">
                                <Form.Control type="tel" name="phone" placeholder="Enter Phone Number" size="md" className="mb-3 contact-input" />
                            </Form.Group>
                            <Form.Group controlId="formBasicMessage">
                                <Form.Control as="textarea" name="message" rows={3} placeholder="Your Message" size="md" className="mb-3 contact-input" />
                                <ValidationError prefix="Message" field="message" errors={state.errors} />
                            </Form.Group>
                            <Button variant="primary" type="submit" disabled={state.submitting}>
                                {state.submitting ? 'Sending...' : 'Send'}
                            </Button>
                        </Form>
                    )}
                </Col>
            </Row>
        </Container>
    );
};

export default Contact;
