import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import * as LucideIcons from 'lucide-react';

const techStackData = [
    {
        id: 'react',
        title: 'React',
        icon: 'Atom',
        color: '#00f2ff',
        description: 'A JavaScript library for building user interfaces. I use it to create dynamic, single-page applications with reusable components.'
    },
    {
        id: 'nodejs',
        title: 'Node.js',
        icon: 'Server',
        color: '#7000ff',
        description: 'A JavaScript runtime built on Chrome\'s V8 engine. I use it for building scalable network applications and backend services.'
    },
    {
        id: 'express',
        title: 'Express',
        icon: 'Zap',
        color: '#00f2ff',
        description: 'A minimal and flexible Node.js web application framework. It simplifies the process of building robust APIs and web servers.'
    },
    {
        id: 'python',
        title: 'Python',
        icon: 'FileCode2',
        color: '#9000ff',
        description: 'A versatile programming language. I use it for data analysis, machine learning, and backend development.'
    },
    {
        id: 'sql',
        title: 'SQL',
        icon: 'Database',
        color: '#00d9ff',
        description: 'Standard language for relational database management. I use it to query, update, and manage data in relational databases.'
    },
    {
        id: 'mongodb',
        title: 'MongoDB',
        icon: 'Database',
        color: '#8000ff',
        description: 'A NoSQL database program. I use it for storing flexible, JSON-like documents in modern applications.'
    },
    {
        id: 'java',
        title: 'Java',
        icon: 'Coffee',
        color: '#ff0000',
        description: 'A high-level, class-based, object-oriented programming language. I use it for building robust and secure applications.'
    },
    {
        id: 'git',
        title: 'Git',
        icon: 'GitBranch',
        color: '#f05032',
        description: 'A distributed version control system. I use it to track changes in source code during software development.'
    },
    {
        id: 'firebase',
        title: 'Firebase',
        icon: 'Flame',
        color: '#ffca28',
        description: 'A platform developed by Google for creating mobile and web applications. I use it for authentication, hosting, and real-time databases.'
    }
];

const TechStack = () => {
    const [expandedId, setExpandedId] = useState(null);

    return (
        <section id="tech-stack" className="py-5 position-relative">
            <Container>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="display-4 fw-bold mb-2 text-center" style={{ color: 'var(--text-color)' }}>
                        Tech <span style={{ color: 'var(--primary-color)' }}>Stack</span>
                    </h2>
                    <p className="text-center mb-5 fs-5" style={{ color: 'var(--text-muted)' }}>
                        Tools & Technologies I work with
                    </p>

                    <Row className="g-4 justify-content-center">
                        {techStackData.map((tech, index) => {
                            const Icon = LucideIcons[tech.icon] || LucideIcons.Code2;
                            const isExpanded = expandedId === tech.id;

                            return (
                                <Col key={tech.id} md={6} lg={4}>
                                    <motion.div
                                        layout
                                        onClick={() => setExpandedId(isExpanded ? null : tech.id)}
                                        className="glass-card p-4 rounded-4 h-100 position-relative overflow-hidden"
                                        style={{ cursor: 'pointer' }}
                                        whileHover={{ y: -5 }}
                                    >
                                        <div className="d-flex align-items-center gap-3 mb-3">
                                            <div
                                                className="p-2 rounded-circle"
                                                style={{
                                                    background: `${tech.color}20`,
                                                    border: `1px solid ${tech.color}40`
                                                }}
                                            >
                                                <Icon size={24} style={{ color: tech.color }} />
                                            </div>
                                            <h4 className="m-0 fw-bold" style={{ color: 'var(--text-color)' }}>{tech.title}</h4>
                                        </div>

                                        <AnimatePresence>
                                            {isExpanded && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: 'auto' }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    className="small"
                                                    style={{ color: 'var(--text-muted)' }}
                                                >
                                                    {tech.description}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>

                                        {!isExpanded && (
                                            <div className="text-center mt-2">
                                                <LucideIcons.ChevronDown size={20} style={{ color: 'var(--text-muted)' }} />
                                            </div>
                                        )}
                                    </motion.div>
                                </Col>
                            );
                        })}
                    </Row>
                </motion.div>
            </Container>
        </section>
    );
};

export default TechStack;
