import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { CheckCircle, Briefcase, Target, Mail, ArrowRight } from 'lucide-react';

const HireMe = () => {
    return (
        <section className="min-vh-100 d-flex align-items-center position-relative overflow-hidden pt-5 mt-5">
            {/* Background Elements */}
            <div
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{
                    background: 'radial-gradient(circle at 10% 20%, rgba(112, 0, 255, 0.1) 0%, transparent 40%)',
                    zIndex: -1
                }}
            />
            <div
                className="position-absolute bottom-0 end-0 w-100 h-100"
                style={{
                    background: 'radial-gradient(circle at 90% 80%, rgba(0, 242, 255, 0.1) 0%, transparent 40%)',
                    zIndex: -1
                }}
            />

            <Container>
                <Row className="justify-content-center text-center mb-5">
                    <Col lg={8}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="display-3 fw-bold mb-4" style={{ color: 'var(--text-color)' }}>
                                Ready to <span style={{ color: 'var(--primary-color)' }}>Accelerate</span> Your Team?
                            </h1>
                            <p className="lead mb-5" style={{ color: 'var(--text-muted)' }}>
                                I'm currently open for <span className="fw-bold" style={{ color: 'var(--text-color)' }}>Internship</span> opportunities.
                                Bringing a blend of full-stack expertise, creative problem-solving, and a passion for building scalable applications.
                            </p>
                        </motion.div>
                    </Col>
                </Row>

                <Row className="g-4 mb-5">
                    <Col md={4}>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="glass-card p-4 rounded-4 h-100"
                        >
                            <div className="d-flex align-items-center gap-3 mb-3">
                                <div className="p-2 rounded-circle bg-primary bg-opacity-10">
                                    <Target size={24} className="text-primary" />
                                </div>
                                <h4 className="m-0" style={{ color: 'var(--text-color)' }}>Why Me?</h4>
                            </div>
                            <ul className="list-unstyled" style={{ color: 'var(--text-muted)' }}>
                                <li className="mb-2 d-flex gap-2"><CheckCircle size={18} className="text-success flex-shrink-0" /> Quick learner & adaptable</li>
                                <li className="mb-2 d-flex gap-2"><CheckCircle size={18} className="text-success flex-shrink-0" /> Strong MERN stack foundation</li>
                                <li className="mb-2 d-flex gap-2"><CheckCircle size={18} className="text-success flex-shrink-0" /> Passionate about UI/UX</li>
                                <li className="d-flex gap-2"><CheckCircle size={18} className="text-success flex-shrink-0" /> Problem-solving mindset</li>
                            </ul>
                        </motion.div>
                    </Col>
                    <Col md={4}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="glass-card p-4 rounded-4 h-100"
                            style={{ border: '1px solid #00f2ff50', boxShadow: '0 0 20px rgba(0, 242, 255, 0.1)' }}
                        >
                            <div className="d-flex align-items-center gap-3 mb-3">
                                <div className="p-2 rounded-circle" style={{ background: 'rgba(0, 242, 255, 0.1)' }}>
                                    <Briefcase size={24} style={{ color: '#00f2ff' }} />
                                </div>
                                <h4 className="m-0" style={{ color: 'var(--text-color)' }}>What I Offer</h4>
                            </div>
                            <p className="mb-4" style={{ color: 'var(--text-muted)' }}>
                                I can contribute immediately to frontend development, API integration, and database management. I write clean, maintainable code and thrive in collaborative environments.
                            </p>
                            <Button
                                href="mailto:aadarsh.gupta@example.com"
                                className="w-100 rounded-pill py-2 fw-bold d-flex align-items-center justify-content-center gap-2"
                                style={{ background: 'linear-gradient(45deg, #00f2ff, #7000ff)', border: 'none' }}
                            >
                                <Mail size={18} /> Hire Me Now
                            </Button>
                        </motion.div>
                    </Col>
                    <Col md={4}>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="glass-card p-4 rounded-4 h-100"
                        >
                            <div className="d-flex align-items-center gap-3 mb-3">
                                <div className="p-2 rounded-circle bg-warning bg-opacity-10">
                                    <Target size={24} className="text-warning" />
                                </div>
                                <h4 className="m-0" style={{ color: 'var(--text-color)' }}>Ideal Roles</h4>
                            </div>
                            <ul className="list-unstyled" style={{ color: 'var(--text-muted)' }}>
                                <li className="mb-2 d-flex gap-2"><ArrowRight size={18} className="text-warning flex-shrink-0" /> Full Stack Developer Intern</li>
                                <li className="mb-2 d-flex gap-2"><ArrowRight size={18} className="text-warning flex-shrink-0" /> Frontend Developer Intern</li>
                                <li className="mb-2 d-flex gap-2"><ArrowRight size={18} className="text-warning flex-shrink-0" /> React Developer</li>
                                <li className="d-flex gap-2"><ArrowRight size={18} className="text-warning flex-shrink-0" /> Web Developer</li>
                            </ul>
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default HireMe;
