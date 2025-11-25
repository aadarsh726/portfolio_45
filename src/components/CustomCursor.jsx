import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const mouseMove = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        };

        const handleMouseOver = (e) => {
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener("mousemove", mouseMove);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, []);

    const variants = {
        default: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
            height: 32,
            width: 32,
            backgroundColor: "transparent",
            border: "2px solid #00f2ff",
            mixBlendMode: "difference"
        },
        hover: {
            x: mousePosition.x - 32,
            y: mousePosition.y - 32,
            height: 64,
            width: 64,
            backgroundColor: "rgba(0, 242, 255, 0.1)",
            border: "2px solid #00f2ff",
            mixBlendMode: "difference"
        }
    };

    const dotVariants = {
        default: {
            x: mousePosition.x - 4,
            y: mousePosition.y - 4,
            height: 8,
            width: 8,
            backgroundColor: "#00f2ff"
        },
        hover: {
            x: mousePosition.x - 4,
            y: mousePosition.y - 4,
            height: 8,
            width: 8,
            backgroundColor: "#7000ff"
        }
    };

    return (
        <>
            <motion.div
                className="custom-cursor position-fixed rounded-circle pointer-events-none z-3 d-none d-md-block"
                variants={variants}
                animate={isHovering ? "hover" : "default"}
                transition={{ type: "spring", stiffness: 500, damping: 28 }}
                style={{ pointerEvents: 'none', zIndex: 9999 }}
            />
            <motion.div
                className="custom-cursor-dot position-fixed rounded-circle pointer-events-none z-3 d-none d-md-block"
                variants={dotVariants}
                animate={isHovering ? "hover" : "default"}
                transition={{ type: "spring", stiffness: 1000, damping: 50 }}
                style={{ pointerEvents: 'none', zIndex: 9999 }}
            />
        </>
    );
};

export default CustomCursor;
