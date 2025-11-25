import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Github, Linkedin, Twitter, Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-4 border-top border-secondary border-opacity-25" style={{ background: '#050505' }}>
            <Container>
                <Row className="align-items-center">
                    <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
                        <p className="mb-0 small" style={{ color: 'var(--text-muted)' }}>
                            &copy; {new Date().getFullYear()} Aadarsh Gupta. All rights reserved.
                        </p>
                    </Col>
                    <Col md={6} className="text-center text-md-end">
                        <div className="d-flex justify-content-center justify-content-md-end gap-3 mb-2">
                            <a href="https://github.com/aadarsh726" target="_blank" className="hover-primary transition-colors" style={{ color: 'var(--text-muted)' }}><Github size={20} /></a>
                            <a href="https://www.linkedin.com/in/aadarsh-gupta-76a525286" target="_blank" className="hover-primary transition-colors" style={{ color: 'var(--text-muted)' }}><Linkedin size={20} /></a>
                        </div>
                        <p className="mb-0 small d-flex align-items-center justify-content-center justify-content-md-end gap-1" style={{ color: 'var(--text-muted)' }}>
                            Made with <Heart size={14} fill="#7000ff" color="#7000ff" /> using React & Bootstrap
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
