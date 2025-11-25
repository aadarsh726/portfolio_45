import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { achievements } from '../data/achievements';

const Achievements = () => {
    const certifications = achievements.filter(a => a.type === 'Certification');
    const accomplishments = achievements.filter(a => a.type === 'Achievement');

    const AchievementCard = ({ achievement, index }) => {
        const Icon = LucideIcons[achievement.icon];

        return (
            <Col md={6} lg={4}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.03 }}
                    viewport={{ once: true, amount: 0.3 }}
                    whileHover={{ y: -10 }}
                    className="glass-card p-4 rounded-4 h-100 position-relative overflow-hidden"
                    style={{ cursor: 'pointer' }}
                >
                    {/* Static Background Glow */}
                    <div
                        className="position-absolute"
                        style={{
                            top: '50%',
                            left: '50%',
                            width: '150px',
                            height: '150px',
                            background: `radial-gradient(circle, ${achievement.color}30 0%, transparent 70%)`,
                            filter: 'blur(40px)',
                            transform: 'translate(-50%, -50%)',
                            zIndex: 0,
                            pointerEvents: 'none'
                        }}
                    />

                    {/* Content */}
                    <div className="position-relative" style={{ zIndex: 1 }}>
                        {/* Icon Badge */}
                        <div className="mb-3">
                            <div
                                className="d-inline-flex p-3 rounded-circle"
                                style={{
                                    background: `${achievement.color}20`,
                                    border: `2px solid ${achievement.color}`,
                                    boxShadow: `0 0 20px ${achievement.color}40`
                                }}
                            >
                                {Icon && <Icon size={28} style={{ color: achievement.color }} />}
                            </div>
                        </div>

                        {/* Title */}
                        <h4 className="fw-bold mb-2" style={{ color: 'var(--text-color)' }}>{achievement.title}</h4>

                        {/* Issuer/Description */}
                        {achievement.issuer && (
                            <p className="small mb-2" style={{ color: 'var(--text-muted)' }}>
                                <span className="fw-semibold">{achievement.issuer}</span>
                            </p>
                        )}
                        {achievement.description && (
                            <p className="small mb-2" style={{ color: 'var(--text-muted)' }}>
                                {achievement.description}
                            </p>
                        )}

                        {/* Date Badge */}
                        <div className="mt-3">
                            <span
                                className="badge px-3 py-2"
                                style={{
                                    background: `${achievement.color}15`,
                                    color: achievement.color,
                                    border: `1px solid ${achievement.color}40`
                                }}
                            >
                                {achievement.date}
                            </span>
                        </div>
                    </div>


                </motion.div>
            </Col>
        );
    };

    return (
        <section id="achievements" className="py-5 position-relative">
            <Container>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="display-4 fw-bold mb-2 text-center" style={{ color: 'var(--text-color)' }}>
                        Achievements & <span style={{ color: 'var(--secondary-color)' }}>Certifications</span>
                    </h2>
                    <p className="text-center mb-5 fs-5" style={{ color: 'var(--text-muted)' }}>
                        Milestones in my learning journey
                    </p>

                    {/* Certifications */}
                    <div className="mb-5">
                        <h3 className="h4 mb-4 d-flex align-items-center gap-2" style={{ color: 'var(--text-color)' }}>
                            <LucideIcons.Award size={24} style={{ color: 'var(--primary-color)' }} />
                            Certifications
                        </h3>
                        <Row className="g-4">
                            {certifications.map((cert, index) => (
                                <AchievementCard key={cert.id} achievement={cert} index={index} />
                            ))}
                        </Row>
                    </div>

                    {/* Accomplishments */}
                    <div>
                        <h3 className="h4 mb-4 d-flex align-items-center gap-2" style={{ color: 'var(--text-color)' }}>
                            <LucideIcons.Trophy size={24} style={{ color: 'var(--secondary-color)' }} />
                            Key Accomplishments
                        </h3>
                        <Row className="g-4">
                            {accomplishments.map((accomplishment, index) => (
                                <AchievementCard key={accomplishment.id} achievement={accomplishment} index={index} />
                            ))}
                        </Row>
                    </div>
                </motion.div>
            </Container>
        </section>
    );
};

export default Achievements;
