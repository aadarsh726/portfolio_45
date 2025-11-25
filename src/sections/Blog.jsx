import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { articles } from '../data/articles';
import ArticleModal from '../components/ArticleModal';

const Blog = () => {
    const [selectedArticle, setSelectedArticle] = useState(null);

    return (
        <section id="blog" className="py-5 position-relative">
            <Container>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="display-4 fw-bold mb-2 text-center" style={{ color: 'var(--text-color)' }}>
                        Latest <span style={{ color: 'var(--secondary-color)' }}>Articles</span>
                    </h2>
                    <p className="text-center mb-5 fs-5" style={{ color: 'var(--text-muted)' }}>
                        Thoughts on technology and development
                    </p>

                    <Row className="g-4">
                        {articles.map((post, index) => (
                            <Col key={post.id} md={6} lg={4}>
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    whileHover={{ y: -10 }}
                                    className="glass-card h-100 rounded-4 overflow-hidden d-flex flex-column"
                                >
                                    <div className="p-4 flex-grow-1 d-flex flex-column">
                                        <div className="d-flex gap-2 mb-3 flex-wrap">
                                            {post.tags.map(tag => (
                                                <span
                                                    key={tag}
                                                    className="badge rounded-pill"
                                                    style={{
                                                        background: `${post.color}15`,
                                                        color: post.color,
                                                        border: `1px solid ${post.color}40`
                                                    }}
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        <h4 className="fw-bold mb-3" style={{ color: 'var(--text-color)' }}>{post.title}</h4>
                                        <p className="small mb-4 flex-grow-1" style={{ color: 'var(--text-muted)' }}>
                                            {post.excerpt}
                                        </p>

                                        <div className="d-flex justify-content-between align-items-center small mt-auto pt-3 border-top border-secondary border-opacity-25" style={{ color: 'var(--text-muted)' }}>
                                            <div className="d-flex align-items-center gap-2">
                                                <Calendar size={14} />
                                                <span>{post.date}</span>
                                            </div>
                                            <div className="d-flex align-items-center gap-2">
                                                <User size={14} />
                                                <span>{post.author}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-3 bg-black bg-opacity-25 text-end">
                                        <Button
                                            variant="link"
                                            onClick={() => setSelectedArticle(post)}
                                            className="text-decoration-none p-0 d-inline-flex align-items-center gap-2"
                                            style={{ color: post.color }}
                                        >
                                            Read More <ArrowRight size={16} />
                                        </Button>
                                    </div>
                                </motion.div>
                            </Col>
                        ))}
                    </Row>
                </motion.div>
            </Container>

            {/* Article Modal */}
            <AnimatePresence>
                {selectedArticle && (
                    <ArticleModal
                        article={selectedArticle}
                        onClose={() => setSelectedArticle(null)}
                    />
                )}
            </AnimatePresence>
        </section>
    );
};

export default Blog;
