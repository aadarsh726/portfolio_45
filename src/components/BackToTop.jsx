import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={scrollToTop}
                    className="position-fixed bottom-0 end-0 m-4 p-3 rounded-circle border-0 d-flex align-items-center justify-content-center z-3"
                    style={{
                        background: 'linear-gradient(45deg, #00f2ff, #7000ff)',
                        boxShadow: '0 0 20px rgba(112, 0, 255, 0.4)',
                        width: '50px',
                        height: '50px',
                        zIndex: 999
                    }}
                >
                    <ArrowUp color="white" size={24} />
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default BackToTop;
