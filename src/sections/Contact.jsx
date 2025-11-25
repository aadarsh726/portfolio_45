import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone } from 'lucide-react';
import UnicornCanvas from '../components/UnicornCanvas';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const subject = `Portfolio Contact from ${formData.name}`;
        const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
        window.location.href = `mailto:aadarshgupta376@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    };

    return (
        <section id="contact" className="py-5 position-relative overflow-hidden">
            {/* Background Particles */}
            <UnicornCanvas
                projectId="placeholder-particles" // User to replace
                className="position-absolute w-100 h-100"
                style={{ opacity: 0.5 }}
            />

            <Container className="position-relative z-1">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="display-4 fw-bold mb-5 text-center" style={{ color: 'var(--text-color)' }}>
                        Get In <span style={{ color: 'var(--primary-color)' }}>Touch</span>
                    </h2>

                    <Row className="justify-content-center">
                        <Col lg={10}>
                            <div className="glass-card p-5 rounded-4">
                                <Row>
                                    <Col md={5} className="mb-5 mb-md-0 border-end border-secondary border-opacity-25">
                                        <h3 className="mb-4" style={{ color: 'var(--text-color)' }}>Contact Info</h3>
                                        <div className="d-flex flex-column gap-4">
                                            <div className="d-flex align-items-center gap-3" style={{ color: 'var(--text-muted)' }}>
                                                <div className="p-3 rounded-circle" style={{ background: 'rgba(0, 242, 255, 0.1)' }}>
                                                    <Mail style={{ color: '#00f2ff' }} />
                                                </div>
                                                <div>
                                                    <h6 className="mb-0" style={{ color: 'var(--text-color)' }}>Email</h6>
                                                    <span>aadarshgupta376@gmail.com</span>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center gap-3" style={{ color: 'var(--text-muted)' }}>
                                                <div className="p-3 rounded-circle" style={{ background: 'rgba(112, 0, 255, 0.1)' }}>
                                                    <Phone style={{ color: '#7000ff' }} />
                                                </div>
                                                <div>
                                                    <h6 className="mb-0" style={{ color: 'var(--text-color)' }}>Phone</h6>
                                                    <span>+91-9819409625</span>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center gap-3" style={{ color: 'var(--text-muted)' }}>
                                                <div className="p-3 rounded-circle" style={{ background: 'rgba(255, 255, 255, 0.1)' }}>
                                                    <MapPin style={{ color: 'var(--text-color)' }} />
                                                </div>
                                                <div>
                                                    <h6 className="mb-0" style={{ color: 'var(--text-color)' }}>Location</h6>
                                                    <span>Mumbai, India</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col md={7} className="ps-md-5">
                                        <h3 className="mb-4" style={{ color: 'var(--text-color)' }}>Send Message</h3>
                                        <Form onSubmit={handleSubmit}>
                                            <Row>
                                                <Col md={6} className="mb-3">
                                                    <Form.Control
                                                        type="text"
                                                        name="name"
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                        placeholder="Your Name"
                                                        className="bg-transparent text-white border-secondary"
                                                        style={{ padding: '12px' }}
                                                        required
                                                    />
                                                </Col>
                                                <Col md={6} className="mb-3">
                                                    <Form.Control
                                                        type="email"
                                                        name="email"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        placeholder="Your Email"
                                                        className="bg-transparent text-white border-secondary"
                                                        style={{ padding: '12px' }}
                                                        required
                                                    />
                                                </Col>
                                            </Row>
                                            <Form.Group className="mb-4">
                                                <Form.Control
                                                    as="textarea"
                                                    rows={4}
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    placeholder="Your Message"
                                                    className="bg-transparent text-white border-secondary"
                                                    required
                                                />
                                            </Form.Group>
                                            <Button
                                                type="submit"
                                                variant="primary"
                                                size="lg"
                                                className="w-100 rounded-pill fw-bold d-flex align-items-center justify-content-center gap-2"
                                                style={{
                                                    background: 'linear-gradient(45deg, #00f2ff, #7000ff)',
                                                    border: 'none'
                                                }}
                                            >
                                                Send Message <Send size={18} />
                                            </Button>
                                        </Form>
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

export default Contact;
