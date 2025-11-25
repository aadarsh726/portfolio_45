import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ onComplete }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + 1;
            });
        }, 20); // Adjust speed here (20ms * 100 = 2000ms = 2s)

        const timeout = setTimeout(() => {
            onComplete();
        }, 2500); // Wait a bit after reaching 100%

        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, [onComplete]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ y: -window.innerHeight, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
            className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-black z-3"
            style={{ zIndex: 99999 }}
        >
            <div className="text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-4"
                >
                    <h1 className="display-1 fw-bold text-white mb-0" style={{ fontFamily: 'Outfit, sans-serif' }}>
                        {count}%
                    </h1>
                </motion.div>

                <div className="overflow-hidden">
                    <motion.div
                        initial={{ y: 100 }}
                        animate={{ y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        <span className="text-uppercase tracking-widest text-white-50 small" style={{ letterSpacing: '5px' }}>
                            Loading Experience
                        </span>
                    </motion.div>
                </div>

                {/* Progress Bar Line */}
                <div className="mt-4 mx-auto position-relative" style={{ width: '200px', height: '2px', background: 'rgba(255,255,255,0.1)' }}>
                    <motion.div
                        className="h-100 bg-primary"
                        initial={{ width: 0 }}
                        animate={{ width: `${count}%` }}
                        style={{
                            background: 'linear-gradient(90deg, #00f2ff, #7000ff)',
                            boxShadow: '0 0 20px rgba(0, 242, 255, 0.5)'
                        }}
                    />
                </div>
            </div>
        </motion.div>
    );
};

export default Preloader;
