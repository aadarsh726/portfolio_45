import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin } from 'lucide-react';

const Hero = () => {
    React.useEffect(() => {
        const initUnicorn = () => {
            if (window.UnicornStudio) {
                window.UnicornStudio.init();
            }
        };

        if (window.UnicornStudio) {
            initUnicorn();
        } else {
            // Fallback if script loads after component mounts
            const checkInterval = setInterval(() => {
                if (window.UnicornStudio) {
                    initUnicorn();
                    clearInterval(checkInterval);
                }
            }, 100);
            return () => clearInterval(checkInterval);
        }
    }, []);

    return (
        <section id="home" className="position-relative d-flex align-items-center min-vh-100 overflow-hidden bg-black">
            {/* Background Gradient */}
            <div
                className="position-absolute w-100 h-100"
                style={{
                    background: 'radial-gradient(circle at 50% 50%, #1a1a1a 0%, #000000 100%)',
                    zIndex: 0
                }}
            />

            {/* Unicorn Studio Animation */}
            <div
                className="position-absolute top-50 start-50 translate-middle"
                style={{
                    zIndex: 1,
                    opacity: 0.6, // Adjust opacity to blend with background
                    pointerEvents: 'none'
                }}
            >
                <div data-us-project="B3ngNwmACnVbwLlWSx4s" style={{ width: '1440px', height: '900px' }}></div>
            </div>

            {/* Overlay Gradient for better text readability */}
            <div
                className="position-absolute w-100 h-100"
                style={{
                    background: 'radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.8) 100%)',
                    pointerEvents: 'none',
                    zIndex: 1
                }}
            />

            {/* Ambient Glow Effects */}
            <div
                className="position-absolute top-50 start-50 translate-middle"
                style={{
                    width: '600px',
                    height: '600px',
                    background: 'radial-gradient(circle, rgba(0, 242, 255, 0.15) 0%, rgba(0, 0, 0, 0) 70%)',
                    filter: 'blur(60px)',
                    zIndex: 1,
                    pointerEvents: 'none'
                }}
            />

            <Container className="position-relative" style={{ zIndex: 2 }}>
                <Row className="align-items-center">
                    <Col lg={10} className="mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="d-inline-block mb-4 px-4 py-2 rounded-pill border border-secondary border-opacity-25"
                                style={{
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    backdropFilter: 'blur(10px)'
                                }}
                            >
                                <span className="text-uppercase tracking-widest small fw-bold" style={{ color: '#00f2ff', letterSpacing: '3px' }}>
                                    Hello, I'm
                                </span>
                            </motion.div>

                            <h1 className="display-1 fw-bold mb-4 text-white lh-1" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', textShadow: '0 0 30px rgba(255,255,255,0.1)' }}>
                                Aadarsh Gupta
                            </h1>

                            <h2 className="h2 mb-5 fw-light text-white-50">
                                Full-Stack Developer <span style={{ color: '#7000ff' }}>&</span> Data Science Learner
                            </h2>

                            <p className="lead mb-5 text-light opacity-75 mx-auto fs-4" style={{ maxWidth: '700px', fontWeight: 300 }}>
                                I build <span className="text-white fw-normal">intelligent</span>, <span className="text-white fw-normal">modern</span> digital experiences that merge creativity with code.
                            </p>

                            <div className="d-flex justify-content-center gap-4 flex-wrap mb-5">
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <Button
                                        href="#contact"
                                        variant="primary"
                                        size="lg"
                                        className="rounded-pill px-5 py-3 fw-bold d-flex align-items-center gap-2"
                                        style={{
                                            background: 'linear-gradient(135deg, #00f2ff 0%, #00c3ff 100%)',
                                            border: 'none',
                                            boxShadow: '0 0 30px rgba(0, 242, 255, 0.3)',
                                            fontSize: '1.1rem'
                                        }}
                                    >
                                        Hire Me <ArrowRight size={22} />
                                    </Button>
                                </motion.div>

                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <Button
                                        href="#projects"
                                        variant="outline-light"
                                        size="lg"
                                        className="rounded-pill px-5 py-3 fw-bold glass-card border-0"
                                        style={{
                                            background: 'rgba(255, 255, 255, 0.05)',
                                            backdropFilter: 'blur(10px)',
                                            fontSize: '1.1rem'
                                        }}
                                    >
                                        View Projects
                                    </Button>
                                </motion.div>
                            </div>

                            <div className="d-flex justify-content-center gap-4">
                                <motion.a
                                    href="https://github.com/aadarsh726"
                                    target="_blank"
                                    whileHover={{ y: -5, color: '#00f2ff', scale: 1.1 }}
                                    className="text-white-50 transition-colors p-2"
                                >
                                    <Github size={28} />
                                </motion.a>
                                <motion.a
                                    href="https://www.linkedin.com/in/aadarsh-gupta-76a525286"
                                    target="_blank"
                                    whileHover={{ y: -5, color: '#00f2ff', scale: 1.1 }}
                                    className="text-white-50 transition-colors p-2"
                                >
                                    <Linkedin size={28} />
                                </motion.a>
                            </div>
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Hero;
