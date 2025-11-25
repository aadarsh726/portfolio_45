import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import * as LucideIcons from 'lucide-react';
import { stats } from '../data/stats';

const Stats = () => {
    const { ref, inView } = useInView({
        threshold: 0.3,
        triggerOnce: true
    });

    return (
        <section id="stats" className="py-5 position-relative overflow-hidden">
            {/* Background Glow */}
            <div
                className="position-absolute top-50 start-50 translate-middle"
                style={{
                    width: '800px',
                    height: '800px',
                    background: 'radial-gradient(circle, rgba(112, 0, 255, 0.15) 0%, rgba(0, 0, 0, 0) 70%)',
                    filter: 'blur(80px)',
                    zIndex: 0,
                    pointerEvents: 'none'
                }}
            />

            <Container className="position-relative" style={{ zIndex: 1 }}>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="display-4 fw-bold mb-5 text-center" style={{ color: 'var(--text-color)' }}>
                        By The <span style={{ color: 'var(--primary-color)' }}>Numbers</span>
                    </h2>

                    <Row className="g-4" ref={ref}>
                        {stats.map((stat, index) => {
                            const Icon = LucideIcons[stat.icon];

                            return (
                                <Col key={stat.id} md={6} lg={4}>
                                    <motion.div
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={inView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                        className="glass-card p-5 rounded-4 text-center h-100 position-relative overflow-hidden"
                                    >
                                        {/* Glow Effect */}
                                        <motion.div
                                            className="position-absolute top-0 start-50 translate-middle-x"
                                            style={{
                                                width: '100px',
                                                height: '100px',
                                                background: `radial-gradient(circle, ${stat.color}40 0%, transparent 70%)`,
                                                filter: 'blur(30px)',
                                                zIndex: 0
                                            }}
                                            animate={{
                                                scale: [1, 1.2, 1],
                                                opacity: [0.5, 0.8, 0.5]
                                            }}
                                            transition={{
                                                duration: 3,
                                                repeat: Infinity,
                                                ease: "easeInOut"
                                            }}
                                        />

                                        {/* Icon */}
                                        <motion.div
                                            className="mb-3 position-relative"
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                        >
                                            <div
                                                className="d-inline-flex p-3 rounded-circle"
                                                style={{
                                                    background: `${stat.color}20`,
                                                    border: `2px solid ${stat.color}40`
                                                }}
                                            >
                                                {Icon && <Icon size={32} style={{ color: stat.color }} />}
                                            </div>
                                        </motion.div>

                                        {/* Counter */}
                                        <h2 className="display-3 fw-bold mb-2 position-relative" style={{ color: 'var(--text-color)' }}>
                                            {inView && (
                                                <CountUp
                                                    end={stat.value}
                                                    duration={2.5}
                                                    suffix={stat.suffix}
                                                />
                                            )}
                                        </h2>

                                        {/* Label */}
                                        <p className="mb-0 text-uppercase small fw-bold position-relative" style={{ letterSpacing: '2px', color: 'var(--text-muted)' }}>
                                            {stat.label}
                                        </p>
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

export default Stats;
