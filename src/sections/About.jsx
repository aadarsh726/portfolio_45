import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-5 position-relative">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="display-4 fw-bold mb-5 text-center" style={{ color: 'var(--text-color)' }}>
                        About <span style={{ color: 'var(--secondary-color)' }}>Me</span>
                    </h2>

                    <Row className="justify-content-center">
                        <Col lg={10}>
                            <div className="glass-card p-5 rounded-4">
                                <Row className="align-items-center">
                                    <Col md={4} className="mb-4 mb-md-0 text-center">
                                        <div
                                            className="rounded-circle mx-auto"
                                            style={{
                                                width: '200px',
                                                height: '200px',
                                                background: 'linear-gradient(45deg, #00f2ff, #7000ff)',
                                                padding: '4px'
                                            }}
                                        >
                                            <img
                                                src="/profile.jpg"
                                                alt="Aadarsh Gupta"
                                                className="w-100 h-100 rounded-circle object-fit-cover"
                                                style={{ border: '4px solid #0a0a0a' }}
                                            />
                                        </div>
                                    </Col>
                                    <Col md={8}>
                                        <h3 className="h2 mb-3" style={{ color: 'var(--text-color)' }}>Who am I?</h3>
                                        <p className="fs-5 mb-4" style={{ color: 'var(--text-muted)' }}>
                                            I am a B.Sc. IT student with strong skills in MERN stack development, Data Science, and AI-based applications. I enjoy building practical, real-world projects that combine clean UI with intelligent features. My goal is to secure an internship where I can contribute, learn advanced technologies, and work on meaningful products.
                                        </p>
                                        <div className="d-flex gap-4" style={{ color: 'var(--text-color)' }}>
                                            <div>
                                                <h4 className="fw-bold" style={{ color: 'var(--primary-color)' }}>Mumbai</h4>
                                                <span className="small text-uppercase tracking-wider">Location</span>
                                            </div>
                                            <div>
                                                <h4 className="fw-bold" style={{ color: 'var(--primary-color)' }}>4+</h4>
                                                <span className="small text-uppercase tracking-wider">Projects</span>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </motion.div>
            </Container>
        </section>
    );
};

export default About;
