import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, User, Tag } from 'lucide-react';
import { Button } from 'react-bootstrap';

const ArticleModal = ({ article, onClose }) => {
    // Prevent body scroll when modal is open
    useEffect(() => {
        if (article) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [article]);

    if (!article) return null;

    return (
        <AnimatePresence>
            {article && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="position-fixed top-0 start-0 w-100 h-100"
                        style={{
                            background: 'rgba(0, 0, 0, 0.6)',
                            backdropFilter: 'blur(8px)',
                            zIndex: 1050,
                            cursor: 'pointer'
                        }}
                    />

                    {/* Modal Container */}
                    <div
                        className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center p-3"
                        style={{ zIndex: 1055, pointerEvents: 'none' }}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            className="glass-card w-100 rounded-4 overflow-hidden position-relative d-flex flex-column"
                            style={{
                                maxWidth: '800px',
                                maxHeight: '85vh',
                                pointerEvents: 'auto',
                                background: 'var(--card-bg)',
                                border: '1px solid var(--card-border)',
                                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                            }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Header Image/Gradient */}
                            <div
                                className="position-relative p-4 p-md-5"
                                style={{
                                    background: `linear-gradient(135deg, ${article.color}20, transparent)`,
                                    borderBottom: '1px solid rgba(255,255,255,0.05)'
                                }}
                            >
                                {/* Close Button */}
                                <Button
                                    variant="link"
                                    onClick={onClose}
                                    className="position-absolute top-0 end-0 m-3 p-2 rounded-circle d-flex align-items-center justify-content-center"
                                    style={{
                                        color: 'var(--text-muted)',
                                        background: 'rgba(255,255,255,0.05)',
                                        width: '40px',
                                        height: '40px',
                                        textDecoration: 'none'
                                    }}
                                >
                                    <X size={20} />
                                </Button>

                                {/* Tags */}
                                <div className="d-flex gap-2 mb-3 flex-wrap">
                                    {article.tags.map(tag => (
                                        <span
                                            key={tag}
                                            className="badge rounded-pill px-3 py-2 fw-normal"
                                            style={{
                                                background: `${article.color}20`,
                                                color: article.color,
                                                border: `1px solid ${article.color}40`
                                            }}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Title */}
                                <h2 className="display-6 fw-bold mb-3" style={{ color: 'var(--text-color)' }}>
                                    {article.title}
                                </h2>

                                {/* Metadata */}
                                <div className="d-flex gap-4 text-small" style={{ color: 'var(--text-muted)' }}>
                                    <div className="d-flex align-items-center gap-2">
                                        <Calendar size={16} style={{ color: article.color }} />
                                        <span>{article.date}</span>
                                    </div>
                                    <div className="d-flex align-items-center gap-2">
                                        <User size={16} style={{ color: article.color }} />
                                        <span>{article.author}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Scrollable Content */}
                            <div
                                className="p-4 p-md-5 overflow-auto custom-scrollbar"
                                style={{
                                    color: 'var(--text-paragraph)',
                                    lineHeight: '1.8',
                                    fontSize: '1.1rem'
                                }}
                            >
                                <div dangerouslySetInnerHTML={{ __html: article.content }} />
                            </div>

                            {/* Footer */}
                            <div className="p-4 border-top border-secondary border-opacity-10 bg-black bg-opacity-10 text-center">
                                <p className="mb-0 small" style={{ color: 'var(--text-muted)' }}>
                                    Thanks for reading! Feel free to check out my projects.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
};

export default ArticleModal;
