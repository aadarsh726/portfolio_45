import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [expanded, setExpanded] = useState(false);
    const { theme, toggleTheme } = useTheme();
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Timeline', href: '#timeline' },
        { name: 'Blog', href: '#blog' },
        { name: 'Contact', href: '#contact' }
    ];

    const handleNavClick = (e, href) => {
        setExpanded(false);
        if (location.pathname !== '/') {
            e.preventDefault();
            navigate(`/${href}`);
        }
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'scrolled glass-card' : ''}`}
            style={{
                padding: scrolled ? '10px 0' : '20px 0',
                transition: 'all 0.3s ease-in-out',
                backgroundColor: scrolled ? 'rgba(10, 10, 10, 0.8)' : 'transparent'
            }}
        >
            <Container>
                <Navbar.Brand
                    href={location.pathname === '/' ? '#home' : '/#home'}
                    className="text-white fw-bold fs-4"
                >
                    AG<span style={{ color: '#00f2ff' }}>.</span>
                </Navbar.Brand>

                <Navbar.Toggle
                    aria-controls="basic-navbar-nav"
                    onClick={() => setExpanded(!expanded)}
                    className="border-0 text-white"
                >
                    {expanded ? <X size={28} /> : <Menu size={28} />}
                </Navbar.Toggle>

                <Navbar.Collapse id="basic-navbar-nav" className={expanded ? 'show' : ''}>
                    <Nav className="ms-auto align-items-center">
                        {navLinks.map((item) => (
                            <Nav.Link
                                key={item.name}
                                href={location.pathname === '/' ? item.href : `/${item.href}`}
                                className="text-white mx-2 position-relative nav-link-custom"
                                onClick={() => setExpanded(false)}
                            >
                                {item.name}
                            </Nav.Link>
                        ))}

                        <Button
                            variant="link"
                            className="text-white ms-2 p-2"
                            onClick={toggleTheme}
                        >
                            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                        </Button>

                        <Button
                            variant="outline-light"
                            className="ms-3 rounded-pill px-4"
                            style={{ borderColor: '#00f2ff', color: '#00f2ff' }}
                            onClick={() => {
                                setExpanded(false);
                                navigate('/hire-me');
                            }}
                        >
                            Hire Me
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </motion.nav>
    );
};

export default NavBar;
