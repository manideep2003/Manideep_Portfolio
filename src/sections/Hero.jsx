import React from 'react';
import './Hero.css';
import { GridScan } from '../components/GridScan';

const Hero = () => {
    return (
        <section id="hero" className="hero-section">
            {/* GridScan Background */}
            <div className="hero-grid-scan">
                <GridScan
                    sensitivity={0.55}
                    lineThickness={1}
                    linesColor="#392e4e"
                    gridScale={0.1}
                    scanColor="#64ffda"
                    scanOpacity={0.4}
                    enablePost
                    bloomIntensity={0.6}
                    chromaticAberration={0.002}
                    noiseIntensity={0.01}
                />
            </div>

            <div className="container hero-container">
                <p className="hero-greeting">Hi, my name is</p>
                <h1 className="hero-name">Manideep Reddy Sripathi.</h1>
                <p className="hero-description">
                    AI/ML Enthusiast | Full-Stack Developer | Co-Founder at QuadrelixForge | Research Intern (Taiwan TEEP)
                </p>
                <div className="hero-buttons">
                    <a href="/resume.pdf" target="_blank" className="btn btn-primary">Download Resume</a>
                    <a href="#projects" className="btn">View Projects</a>
                    <a href="#contact" className="btn">Contact Me</a>
                </div>
            </div>

            {/* Animated Background Elements (Simple CSS) - Keeping these as subtle overlays if needed, or removing if they clash */}
            {/* <div className="hero-bg-shape shape-1"></div> */}
            {/* <div className="hero-bg-shape shape-2"></div> */}
        </section>
    );
};

export default Hero;
