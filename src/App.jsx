import React, { useState, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import Preloader from './components/Preloader';
import { ThemeProvider } from './context/ThemeContext';

// Lazy load sections
const Hero = React.lazy(() => import('./sections/Hero'));
const About = React.lazy(() => import('./sections/About'));
const Skills = React.lazy(() => import('./sections/Skills'));
const TechRadar = React.lazy(() => import('./sections/TechRadar'));
const TechStack = React.lazy(() => import('./sections/TechStack'));
const TechTimeline = React.lazy(() => import('./sections/TechTimeline'));
const Stats = React.lazy(() => import('./sections/Stats'));
const Projects = React.lazy(() => import('./sections/Projects'));
const Experience = React.lazy(() => import('./sections/Experience'));
const Achievements = React.lazy(() => import('./sections/Achievements'));
const Blog = React.lazy(() => import('./sections/Blog'));
const Contact = React.lazy(() => import('./sections/Contact'));
const HireMe = React.lazy(() => import('./pages/HireMe'));

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <ThemeProvider>
      <Router>
        <AnimatePresence mode='wait'>
          {loading && <Preloader onComplete={() => setLoading(false)} />}
        </AnimatePresence>

        {!loading && (
          <>
            <CustomCursor />
            <ScrollProgress />
            <BackToTop />
            <NavBar />
            <Suspense fallback={<div className="d-flex justify-content-center align-items-center min-vh-100 text-white">Loading...</div>}>
              <Routes>
                <Route path="/" element={
                  <main>
                    <Hero />
                    <About />
                    <Skills />
                    <TechRadar />
                    <TechStack />
                    <TechTimeline />
                    <Stats />
                    <Projects />
                    <Experience />
                    <Achievements />
                    <Blog />
                    <Contact />
                  </main>
                } />
                <Route path="/hire-me" element={<HireMe />} />
              </Routes>
            </Suspense>
            <Footer />
          </>
        )}
      </Router>
    </ThemeProvider>
  );
}

export default App;
