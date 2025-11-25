import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import { techRadarSkills, techCategories, orbitRadii } from '../data/techRadar';
import '../styles/TechRadar.scss';

const TechRadar = () => {
    const [hoveredSkill, setHoveredSkill] = useState(null);

    return (
        <section id="tech-radar" className="tech-radar-section py-5">
            <Container>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="display-4 fw-bold mb-2 text-center" style={{ color: 'var(--text-color)' }}>
                        Tech <span style={{ color: 'var(--primary-color)' }}>Radar</span>
                    </h2>
                    <p className="text-center mb-5 fs-5" style={{ color: 'var(--text-muted)' }}>
                        My technology stack visualized
                    </p>

                    {/* Radar Container */}
                    <div className="radar-container">
                        <div className="radar-core">
                            {/* Center Circle */}
                            <div className="center-circle">
                                <span className="center-text">SKILLS</span>
                            </div>

                            {/* Orbit Rings */}
                            {[1, 2, 3].map((orbit) => (
                                <div
                                    key={orbit}
                                    className="orbit-ring"
                                    style={{
                                        width: `${orbitRadii[orbit] * 2}px`,
                                        height: `${orbitRadii[orbit] * 2}px`
                                    }}
                                />
                            ))}

                            {/* Skill Nodes */}
                            {techRadarSkills.map((skill) => {
                                const radius = orbitRadii[skill.orbit];
                                const angleRad = (skill.angle * Math.PI) / 180;
                                const x = Math.cos(angleRad) * radius;
                                const y = Math.sin(angleRad) * radius;
                                const isHovered = hoveredSkill === skill.name;

                                return (
                                    <div
                                        key={skill.name}
                                        className="skill-node-wrapper"
                                        style={{
                                            position: 'absolute',
                                            left: '50%',
                                            top: '50%',
                                            transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                                            zIndex: 15
                                        }}
                                        onMouseEnter={() => setHoveredSkill(skill.name)}
                                        onMouseLeave={() => setHoveredSkill(null)}
                                    >
                                        {/* Skill Node */}
                                        <motion.div
                                            className="skill-node"
                                            style={{
                                                borderColor: skill.color,
                                                backgroundColor: `${skill.color}15`,
                                                boxShadow: isHovered
                                                    ? `0 0 30px ${skill.color}, 0 0 15px ${skill.color}80`
                                                    : `0 0 15px ${skill.color}60`
                                            }}
                                            whileHover={{ scale: 1.2 }}
                                            transition={{ type: 'spring', stiffness: 300 }}
                                        >
                                            <span
                                                className="skill-initial"
                                                style={{ color: skill.color }}
                                            >
                                                {skill.name.substring(0, 2).toUpperCase()}
                                            </span>
                                        </motion.div>

                                        {/* Tooltip */}
                                        <AnimatePresence>
                                            {isHovered && (
                                                <motion.div
                                                    className="skill-tooltip"
                                                    initial={{ opacity: 0, y: 10, scale: 0.8 }}
                                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                                    exit={{ opacity: 0, y: 10, scale: 0.8 }}
                                                    transition={{ duration: 0.2 }}
                                                    style={{
                                                        borderColor: `${skill.color}60`
                                                    }}
                                                >
                                                    <div className="tooltip-content">
                                                        <div className="tooltip-name">{skill.name}</div>
                                                        <div className="tooltip-category">{skill.category}</div>
                                                        <div
                                                            className="tooltip-proficiency"
                                                            style={{ color: skill.color }}
                                                        >
                                                            {skill.proficiency}% Proficiency
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="tooltip-dot"
                                                        style={{
                                                            backgroundColor: skill.color,
                                                            boxShadow: `0 0 10px ${skill.color}`
                                                        }}
                                                    />
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Legend */}
                    <div className="radar-legend">
                        {techCategories.map((category) => (
                            <motion.div
                                key={category.name}
                                className="legend-item"
                                whileHover={{ scale: 1.05 }}
                            >
                                <div
                                    className="legend-dot"
                                    style={{
                                        backgroundColor: category.color,
                                        boxShadow: `0 0 10px ${category.color}`
                                    }}
                                />
                                <span className="legend-name">{category.name}</span>
                                <span className="legend-count">({category.count})</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </Container>
        </section>
    );
};

export default TechRadar;
