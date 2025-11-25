import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <motion.div
            className="position-fixed top-0 start-0 h-1 bg-primary z-3"
            style={{
                scaleX,
                transformOrigin: "0%",
                height: "4px",
                width: "100%",
                background: "linear-gradient(90deg, #00f2ff, #7000ff)",
                zIndex: 10000
            }}
        />
    );
};

export default ScrollProgress;
