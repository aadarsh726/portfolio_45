import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

const experiences = [
    {
        id: 1,
        role: 'Web Developer (Academic)',
        company: 'Academic Projects',
        period: 'Present',
        description: 'Built multiple MERN stack and Python-based applications, including dashboards, authentication systems, and AI mini-projects. Worked on designing UI, integrating backend APIs, and testing features. Gained experience in Git, deployment, and responsive design.'
    },
    {
        id: 2,
        role: 'Data Science Trainee',
        company: 'SkillUp India Program',
        period: 'Present',
        description: 'Hands-on training in Python, Data Cleaning, EDA, Machine Learning, and Deep Learning. Completed mini-projects like spam detection, forecasting, and classification models while working with real datasets.'
    }
];

const Experience = () => {
    return (
        <section id="experience" className="py-5">
            <Container>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="display-4 fw-bold mb-5 text-center" style={{ color: 'var(--text-color)' }}>
                        My <span style={{ color: 'var(--primary-color)' }}>Journey</span>
                    </h2>

                    <div className="position-relative mx-auto" style={{ maxWidth: '800px' }}>
                        {/* Vertical Line */}
                        <div
                            className="position-absolute top-0 start-0 h-100 d-none d-md-block"
                            style={{
                                left: '50%',
                                width: '2px',
                                background: 'linear-gradient(to bottom, #00f2ff, #7000ff)',
                                transform: 'translateX(-50%)'
                            }}
                        />

                        {experiences.map((exp, index) => (
                            <Row key={exp.id} className={`mb-5 align-items-center ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}>
                                <Col md={6} className={`text-md-${index % 2 === 0 ? 'end' : 'start'} mb-3 mb-md-0`}>
                                    <motion.div
                                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.2 }}
                                        className="glass-card p-4 rounded-4 position-relative"
                                    >
                                        <h4 className="mb-1" style={{ color: 'var(--text-color)' }}>{exp.role}</h4>
                                        <h5 className="text-primary mb-2">{exp.company}</h5>
                                        <p className="small mb-0" style={{ color: 'var(--text-muted)' }}>{exp.description}</p>

                                        {/* Arrow for desktop */}
                                        <div
                                            className={`position-absolute top-50 d-none d-md-block`}
                                            style={{
                                                [index % 2 === 0 ? 'right' : 'left']: '-10px',
                                                marginTop: '-10px',
                                                borderTop: '10px solid transparent',
                                                borderBottom: '10px solid transparent',
                                                [index % 2 === 0 ? 'borderLeft' : 'borderRight']: '10px solid rgba(255, 255, 255, 0.1)'
                                            }}
                                        />
                                    </motion.div>
                                </Col>

                                <Col md={6} className={`text-md-${index % 2 === 0 ? 'start' : 'end'} ps-md-5 pe-md-5`}>
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        transition={{ duration: 0.4, delay: index * 0.2 }}
                                        className="d-inline-block"
                                    >
                                        <span
                                            className="badge rounded-pill px-3 py-2"
                                            style={{
                                                background: 'rgba(112, 0, 255, 0.2)',
                                                border: '1px solid #7000ff',
                                                color: '#fff'
                                            }}
                                        >
                                            {exp.period}
                                        </span>
                                    </motion.div>
                                </Col>
                            </Row>
                        ))}
                    </div>
                </motion.div>
            </Container>
        </section>
    );
};

export default Experience;
