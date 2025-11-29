import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import PillNav from './components/PillNav';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Research from './sections/Research';
import Achievements from './sections/Achievements';
import Leadership from './sections/Leadership';
import Contact from './sections/Contact';
import Footer from './components/Footer';

// Simple SVG Logo for PillNav
// Simple SVG Logo for PillNav

const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' }
];

function App() {
  const [activeSection, setActiveSection] = useState('#hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let current = '#hero';

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 100) {
          current = '#' + section.getAttribute('id');
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <PillNav
          logo="/logo.svg"
          logoAlt="Manideep Logo"
          items={navItems}
          activeHref={activeSection}
          baseColor="#112240"
          pillColor="#0a192f"
          pillTextColor="#ccd6f6"
          hoveredPillTextColor="#64ffda"
          className="custom-pill-nav"
        />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Research />
          <Achievements />
          <Leadership />
          <Contact />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
