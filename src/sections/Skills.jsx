import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

const skills = [
    { name: 'React.js', level: 90, category: 'Frontend' },
    { name: 'JavaScript (ES6+)', level: 85, category: 'Frontend' },
    { name: 'Node.js', level: 80, category: 'Backend' },
    { name: 'Express.js', level: 80, category: 'Backend' },
    { name: 'MongoDB', level: 85, category: 'Database' },
    { name: 'Python', level: 80, category: 'Data Science' },
    { name: 'Scikit-learn', level: 75, category: 'AI/ML' },
    { name: 'SQL / MySQL', level: 80, category: 'Database' },
];

const Skills = () => {
    return (
        <section id="skills" className="py-5">
            <Container>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="display-4 fw-bold mb-5 text-center" style={{ color: 'var(--text-color)' }}>
                        My <span style={{ color: 'var(--primary-color)' }}>Skills</span>
                    </h2>

                    <Row className="g-4">
                        {skills.map((skill, index) => (
                            <Col key={index} md={6} lg={3}>
                                <motion.div
                                    whileHover={{ y: -10, scale: 1.02 }}
                                    className="glass-card p-4 rounded-4 h-100 position-relative overflow-hidden group"
                                >
                                    <div
                                        className="position-absolute top-0 start-0 w-100 h-100"
                                        style={{
                                            background: 'linear-gradient(45deg, rgba(0, 242, 255, 0.1), rgba(112, 0, 255, 0.1))',
                                            opacity: 0,
                                            transition: 'opacity 0.3s ease'
                                        }}
                                    />

                                    <h4 className="mb-3" style={{ color: 'var(--text-color)' }}>{skill.name}</h4>
                                    <div className="d-flex justify-content-between mb-2 small" style={{ color: 'var(--text-muted)' }}>
                                        <span>{skill.category}</span>
                                        <span>{skill.level}%</span>
                                    </div>
                                    <div className="progress" style={{ height: '6px', backgroundColor: 'rgba(255,255,255,0.1)' }}>
                                        <motion.div
                                            className="progress-bar"
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            transition={{ duration: 1, delay: index * 0.1 }}
                                            style={{
                                                background: 'linear-gradient(90deg, #00f2ff, #7000ff)',
                                                borderRadius: '10px'
                                            }}
                                        />
                                    </div>
                                </motion.div>
                            </Col>
                        ))}
                    </Row>
                </motion.div>
            </Container>
        </section>
    );
};

export default Skills;
