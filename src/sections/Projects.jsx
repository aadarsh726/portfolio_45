import React, { useState } from 'react';
import { Container, Row, Col, Badge, Modal, Button } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, X } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: 'EduShare',
        category: 'Full Stack',
        image: 'https://placehold.co/600x400',
        description: 'A full-stack MERN platform where students and teachers can share notes, question papers, resources, and educational content.',
        problem: 'Students often struggle to find organized, reliable study materials and past papers in one place.',
        approach: 'Built a centralized platform with role-based access. Implemented a robust search algorithm and category-based filtering.',
        challenges: 'Handling large file uploads and ensuring secure access control for different user roles.',
        results: 'Created a scalable repository of educational resources, improving accessibility for students.',
        learning: 'Mastered MERN stack authentication, file handling, and state management.',
        tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT Auth', 'Tailwind', 'Framer Motion'],
        github: 'https://github.com/aadarsh726/Edu-Share.git',
        demo: 'https://edushare-demo.vercel.app'
    },
    {
        id: 2,
        title: 'Email Spam Detection System',
        category: 'AI/ML',
        image: 'https://placehold.co/600x400',
        description: 'A machine learning model that classifies email content as spam or legitimate using NLP techniques.',
        problem: 'Email users are constantly bombarded with spam, which can be annoying and dangerous.',
        approach: 'Used NLP for text preprocessing (TF-IDF) and trained an SVM classifier on a labeled dataset.',
        challenges: 'Balancing precision and recall to avoid classifying important emails as spam.',
        results: 'Achieved high accuracy in detecting spam emails, demonstrating the power of NLP.',
        learning: 'Deepened understanding of text classification, feature extraction, and model evaluation metrics.',
        tech: ['Python', 'Scikit-learn', 'Pandas', 'NLTK'],
        github: 'https://github.com/aadarsh726/Email-spammer.git',
        demo: '#'
    },
    {
        id: 3,
        title: 'Operational Job Analytics Dashboard',
        category: 'Data Analysis',
        image: 'https://placehold.co/600x400',
        description: 'A MySQL analysis project using real job event data to uncover trends and metrics.',
        problem: 'Companies need to understand job market trends and operational efficiency but raw data is hard to interpret.',
        approach: 'Analyzed raw event data using advanced SQL queries to calculate key metrics like throughput and retention.',
        challenges: 'Cleaning inconsistent data and formulating complex queries for time-series analysis.',
        results: 'Provided actionable insights into job market trends and operational performance.',
        learning: 'Advanced SQL techniques including window functions, CTEs, and data cleaning strategies.',
        tech: ['SQL', 'MySQL Workbench', 'Excel'],
        github: 'https://github.com/aadarshgupta/job-analytics',
        demo: 'https://drive.google.com/file/d/1L1jNHwpRbAVTZIl7m8mvynSolOLzsQxu/view?usp=sharing'
    },
    {
        id: 4,
        title: 'Hiring Process Analytics',
        category: 'Data Analysis',
        image: 'https://placehold.co/600x400',
        description: 'Analyzes hiring data to uncover patterns and insights about recruitment processes.',
        problem: 'Recruitment processes can be inefficient and biased without data-driven monitoring.',
        approach: 'Conducted a comprehensive analysis of hiring data to identify bottlenecks and success rates.',
        challenges: 'Visualizing complex data relationships to make them understandable for stakeholders.',
        results: 'Identified key areas for improvement in the hiring pipeline.',
        learning: 'Data visualization best practices and interpreting HR analytics.',
        tech: ['Excel', 'Data Analysis'],
        github: '#',
        demo: 'https://drive.google.com/file/d/1NIVP5LlVyV96upFE3iV2Ssu0JZdt5Ccf/view?usp=sharing'
    },
    {
        id: 5,
        title: 'Anti-Gravity Portfolio',
        category: 'Full Stack',
        image: 'https://placehold.co/600x400',
        description: 'A modern, immersive portfolio website featuring anti-gravity physics animations, glassmorphism UI, and seamless page transitions.',
        problem: 'Traditional portfolios often feel static and unengaging, failing to showcase technical creativity.',
        approach: 'Leveraged React and Framer Motion to create a dynamic, interactive user experience with physics-based animations.',
        challenges: 'Optimizing complex animations for performance and ensuring responsiveness across all devices.',
        results: 'Delivered a unique, high-performance portfolio that effectively demonstrates frontend expertise.',
        learning: 'Advanced Framer Motion techniques, React performance optimization, and modern CSS architecture.',
        tech: ['React', 'Vite', 'Framer Motion', 'Bootstrap', 'SCSS'],
        github: 'https://github.com/aadarsh726/Portfolio.git',
        demo: '#'
    }
];

const Projects = () => {
    const [filter, setFilter] = useState('All');
    const [selectedProject, setSelectedProject] = useState(null);

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(p => p.category === filter);

    const categories = ['All', ...new Set(projects.map(p => p.category))];

    return (
        <section id="projects" className="py-5">
            <Container>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="display-4 fw-bold mb-5 text-center" style={{ color: 'var(--text-color)' }}>
                        Featured <span style={{ color: 'var(--secondary-color)' }}>Projects</span>
                    </h2>

                    <div className="d-flex justify-content-center gap-3 mb-5 flex-wrap">
                        {categories.map(cat => (
                            <Button
                                key={cat}
                                variant={filter === cat ? 'primary' : 'outline-secondary'}
                                onClick={() => setFilter(cat)}
                                className="rounded-pill px-4"
                                style={filter === cat ? {
                                    background: 'linear-gradient(45deg, #00f2ff, #7000ff)',
                                    border: 'none',
                                    color: '#fff'
                                } : {
                                    color: 'var(--text-color)',
                                    borderColor: 'var(--card-border)'
                                }}
                            >
                                {cat}
                            </Button>
                        ))}
                    </div>

                    <Row className="g-4">
                        <AnimatePresence mode='popLayout'>
                            {filteredProjects.map((project) => (
                                <Col key={project.id} md={6} lg={4}>
                                    <motion.div
                                        layout
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        transition={{ duration: 0.3 }}
                                        whileHover={{ y: -10 }}
                                        className="glass-card rounded-4 overflow-hidden h-100 cursor-pointer position-relative"
                                        onClick={() => setSelectedProject(project)}
                                        style={{
                                            cursor: 'pointer',
                                            border: '1px solid rgba(255, 255, 255, 0.1)',
                                            background: 'rgba(255, 255, 255, 0.03)'
                                        }}
                                    >

                                        <div className="p-5 d-flex flex-column h-100">
                                            <div className="mb-auto">
                                                <h3 className="mb-3 fw-bold" style={{ color: 'var(--text-color)' }}>{project.title}</h3>
                                                <p className="mb-4" style={{ lineHeight: '1.6', color: 'var(--text-muted)' }}>{project.description}</p>
                                            </div>
                                            <div className="d-flex gap-2 flex-wrap mt-4 pt-4 border-top border-secondary border-opacity-25">
                                                {project.tech.slice(0, 3).map((t, i) => (
                                                    <Badge
                                                        key={i}
                                                        bg="transparent"
                                                        className="border border-secondary fw-normal px-3 py-2"
                                                        style={{
                                                            backdropFilter: 'blur(5px)',
                                                            color: 'var(--text-muted)'
                                                        }}
                                                    >
                                                        {t}
                                                    </Badge>
                                                ))}
                                            </div>

                                            {/* Hover Gradient Effect */}
                                            <motion.div
                                                className="position-absolute top-0 start-0 w-100 h-100"
                                                initial={{ opacity: 0 }}
                                                whileHover={{ opacity: 1 }}
                                                transition={{ duration: 0.3 }}
                                                style={{
                                                    background: 'radial-gradient(circle at center, rgba(0, 242, 255, 0.1) 0%, transparent 70%)',
                                                    pointerEvents: 'none',
                                                    zIndex: -1
                                                }}
                                            />
                                        </div>
                                    </motion.div>
                                </Col>
                            ))}
                        </AnimatePresence>
                    </Row>
                </motion.div>

                {/* Project Modal */}
                <Modal
                    show={!!selectedProject}
                    onHide={() => setSelectedProject(null)}
                    centered
                    size="lg"
                    contentClassName="bg-transparent border-0"
                >
                    {selectedProject && (
                        <div className="glass-card rounded-4 overflow-hidden position-relative">
                            <Button
                                variant="link"
                                className="position-absolute top-0 end-0 text-white p-3 z-3"
                                onClick={() => setSelectedProject(null)}
                            >
                                <X size={24} />
                            </Button>



                            <div className="p-5">
                                <h3 className="mb-3" style={{ color: 'var(--text-color)' }}>{selectedProject.title}</h3>
                                <p className="mb-4" style={{ color: 'var(--text-muted)' }}>{selectedProject.description}</p>

                                <div className="row g-4 mb-4">
                                    <div className="col-md-6">
                                        <h6 className="text-primary mb-2">Problem</h6>
                                        <p className="small" style={{ color: 'var(--text-muted)' }}>{selectedProject.problem}</p>
                                    </div>
                                    <div className="col-md-6">
                                        <h6 className="text-primary mb-2">Approach</h6>
                                        <p className="small" style={{ color: 'var(--text-muted)' }}>{selectedProject.approach}</p>
                                    </div>
                                    <div className="col-md-6">
                                        <h6 className="text-primary mb-2">Challenges</h6>
                                        <p className="small" style={{ color: 'var(--text-muted)' }}>{selectedProject.challenges}</p>
                                    </div>
                                    <div className="col-md-6">
                                        <h6 className="text-primary mb-2">Results</h6>
                                        <p className="small" style={{ color: 'var(--text-muted)' }}>{selectedProject.results}</p>
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <h6 className="text-primary mb-2">Key Learning</h6>
                                    <p className="small" style={{ color: 'var(--text-muted)' }}>{selectedProject.learning}</p>
                                </div>

                                <div className="mb-4">
                                    <h6 className="text-primary mb-3">Tech Stack</h6>
                                    <div className="d-flex gap-2 flex-wrap">
                                        {selectedProject.tech.map((t, i) => (
                                            <Badge key={i} bg="dark" className="border border-secondary text-light px-3 py-2">
                                                {t}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>

                                <div className="d-flex gap-3">
                                    {selectedProject.github && selectedProject.github !== '#' && (
                                        <Button
                                            href={selectedProject.github}
                                            target="_blank"
                                            variant="outline-secondary"
                                            className="d-flex align-items-center gap-2 rounded-pill px-4"
                                            style={{ color: 'var(--text-color)', borderColor: 'var(--text-muted)' }}
                                        >
                                            <Github size={18} /> Source Code
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                </Modal>
            </Container>
        </section>
    );
};

export default Projects;
