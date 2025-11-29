import React from 'react';
import './About.css';
import profileImg from '../assets/profile.jpg';

const About = () => {
    return (
        <section id="about" className="section about-section">
            <div className="container about-container">
                <h2 className="section-title">About Me</h2>
                <div className="about-content">
                    <div className="about-text">
                        <p>
                            I am a tech-driven individual with strong experience in AI development, web and mobile application development, and research.
                            I have worked as an AI Trainer at Outlier.ai, a Mathematics Expert Solver at Chegg, and a Research Intern at National Ilan University, Taiwan, under the TEEP program.
                        </p>
                        <p>
                            I am currently the Co-Founder of QuadrelixForge, where I build and deliver high-quality websites, mobile apps, and digital business solutions for global clients.
                            I enjoy solving problems, learning new technologies, and bringing ideas to life through design and development.
                        </p>
                        <div className="about-stats">
                            <div className="stat-item">
                                <h3>2+</h3>
                                <p>Years Experience</p>
                            </div>
                            <div className="stat-item">
                                <h3>50+</h3>
                                <p>Projects Completed</p>
                            </div>
                            <div className="stat-item">
                                <h3>5+</h3>
                                <p>Happy Clients</p>
                            </div>
                        </div>
                    </div>
                    <div className="about-image">
                        <div className="img-wrapper">
                            <img src={profileImg} alt="Manideep Reddy Sripathi" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
