import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Calendar, Code2, Database, Brain } from 'lucide-react';

const timelineData = [
    {
        year: '2022',
        title: 'The Beginning',
        description: 'Started my journey with HTML & CSS. Built my first static websites and learned the fundamentals of web development.',
        icon: Code2,
        color: '#00f2ff',
        skills: ['HTML', 'CSS', 'JavaScript Basics']
    },
    {
        year: '2023',
        title: 'Programming Foundations',
        description: 'Dove deep into programming logic with Java and Python. Started solving DSA problems to build a strong algorithmic foundation.',
        icon: Code2, // Using Code2 as generic programming icon
        color: '#7000ff',
        skills: ['Java', 'DSA', 'Python']
    },
    {
        year: '2024',
        title: 'Full Stack Development',
        description: 'Mastered the MERN stack and SQL. Built complex full-stack applications like EduShare and started exploring data analytics.',
        icon: Database,
        color: '#00f2ff',
        skills: ['MERN Stack', 'SQL', 'Data Analytics']
    },
    {
        year: '2025',
        title: 'Advanced Tech & AI',
        description: 'Integrating Machine Learning into web apps. Building advanced portfolios and exploring the intersection of AI and Web Dev.',
        icon: Brain,
        color: '#9000ff',
        skills: ['Machine Learning', 'Advanced React', 'WebGL']
    }
];

const TechTimeline = () => {
    return (
        <section id="timeline" className="py-5 position-relative">
            <Container>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="display-4 fw-bold mb-2 text-center" style={{ color: 'var(--text-color)' }}>
                        My <span style={{ color: 'var(--primary-color)' }}>Journey</span>
                    </h2>
                    <p className="text-center mb-5 fs-5" style={{ color: 'var(--text-muted)' }}>
                        Evolution of my technical skills
                    </p>

                    <div className="position-relative mx-auto" style={{ maxWidth: '800px' }}>
                        {/* Vertical Line */}
                        <div
                            className="position-absolute start-50 translate-middle-x h-100"
                            style={{
                                width: '2px',
                                background: 'linear-gradient(to bottom, transparent, #7000ff, #00f2ff, transparent)',
                                zIndex: 0
                            }}
                        />

                        {timelineData.map((item, index) => {
                            const isEven = index % 2 === 0;
                            return (
                                <div key={item.year} className={`d-flex justify-content-between align-items-center mb-5 ${isEven ? 'flex-row-reverse' : ''}`}>
                                    {/* Content Side */}
                                    <div className="w-50 px-4">
                                        <motion.div
                                            initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.6, delay: index * 0.1 }}
                                            viewport={{ once: true }}
                                            className={`glass-card p-4 rounded-4 position-relative ${isEven ? 'text-start' : 'text-end'}`}
                                            whileHover={{ scale: 1.02 }}
                                        >
                                            <div className={`d-flex align-items-center gap-2 mb-2 ${isEven ? '' : 'justify-content-end'}`}>
                                                <span className="fw-bold" style={{ color: item.color }}>{item.year}</span>
                                            </div>
                                            <h4 className="fw-bold mb-2" style={{ color: 'var(--text-color)' }}>{item.title}</h4>
                                            <p className="small mb-3" style={{ color: 'var(--text-muted)' }}>{item.description}</p>

                                            <div className={`d-flex flex-wrap gap-2 ${isEven ? '' : 'justify-content-end'}`}>
                                                {item.skills.map(skill => (
                                                    <span
                                                        key={skill}
                                                        className="badge rounded-pill"
                                                        style={{
                                                            background: `${item.color}15`,
                                                            color: item.color,
                                                            border: `1px solid ${item.color}40`
                                                        }}
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </motion.div>
                                    </div>

                                    {/* Center Dot */}
                                    <div className="position-relative d-flex justify-content-center align-items-center" style={{ width: '60px', zIndex: 1 }}>
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            whileInView={{ scale: 1 }}
                                            transition={{ duration: 0.4, delay: index * 0.1 }}
                                            viewport={{ once: true }}
                                            className="rounded-circle d-flex justify-content-center align-items-center"
                                            style={{
                                                width: '50px',
                                                height: '50px',
                                                background: '#0a0a0a',
                                                border: `2px solid ${item.color}`,
                                                boxShadow: `0 0 15px ${item.color}60`
                                            }}
                                        >
                                            <item.icon size={24} style={{ color: item.color }} />
                                        </motion.div>
                                    </div>

                                    {/* Empty Side for spacing */}
                                    <div className="w-50"></div>
                                </div>
                            );
                        })}
                    </div>
                </motion.div>
            </Container>
        </section>
    );
};

export default TechTimeline;
