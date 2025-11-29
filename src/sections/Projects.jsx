import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaFolder } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
    const [filter, setFilter] = useState('All');

    const projectsData = [
        {
            title: 'Managoodu – Client Website',
            description: 'Fully responsive, production-grade website built for a client.',
            tech: ['HTML', 'CSS', 'JS', 'React'],
            link: 'https://managoodu.com/',
            category: 'Client Work'
        },
        {
            title: '50+ Professional Portfolio Websites',
            description: 'Designed and delivered 50+ custom portfolios for clients.',
            tech: ['HTML', 'CSS', 'JS', 'React'],
            link: 'https://quadrelix-forge.netlify.app/portfolio',
            category: 'Client Work'
        },
        {
            title: 'Heart Disease Prediction using Hybrid Quantum-Classical ML Models',
            description: 'Quantum + classical hybrid predictive system.',
            tech: ['Python', 'ML', 'QML'],
            category: 'Research'
        },
        {
            title: 'AI Chatbot for FAQs',
            description: 'Automated FAQ chatbot improving customer support.',
            tech: ['Python', 'ML', 'TensorFlow'],
            category: 'AI/ML'
        },
        {
            title: 'Multi-Disease Prediction Application',
            description: 'Predicts heart disease, Parkinson’s, and diabetes.',
            tech: ['Python', 'Neural Network', 'Logistic Regression'],
            category: 'AI/ML'
        },
        {
            title: 'File Validation System',
            description: 'Angular based file analyzer system.',
            tech: ['AngularJS', 'SpringBoot', 'Java', 'MySQL'],
            github: 'https://github.com/manideep2003/Angular-based-File-analyzer',
            category: 'Web Dev'
        },
        {
            title: 'MAKER Arm – Industrial Automation',
            description: 'Robotic arm for rapid and precise material movement.',
            tech: ['Arduino', 'Servo', 'Reinforcement Learning'],
            category: 'Research'
        }
    ];

    const categories = ['All', 'Web Dev', 'AI/ML', 'Research', 'Client Work'];

    const getCategoryColor = (category) => {
        switch (category) {
            case 'Client Work': return '#e74c3c'; // Red
            case 'Research': return '#9b59b6'; // Purple
            case 'AI/ML': return '#3498db'; // Blue
            case 'Web Dev': return '#2ecc71'; // Green
            default: return '#64ffda'; // Default Theme Color
        }
    };

    const filteredProjects = filter === 'All'
        ? projectsData
        : projectsData.filter(project => project.category === filter);

    return (
        <section id="projects" className="section projects-section">
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>

                <div className="projects-filter">
                    {categories.map((cat, index) => (
                        <button
                            key={index}
                            className={`filter-btn ${filter === cat ? 'active' : ''}`}
                            onClick={() => setFilter(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="projects-grid">
                    {filteredProjects.map((project, index) => (
                        <div key={index} className="project-card">
                            <div className="project-header">
                                <FaFolder className="folder-icon" style={{ color: getCategoryColor(project.category) }} />
                                <div className="project-links">
                                    {project.github && (
                                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                                            <FaGithub />
                                        </a>
                                    )}
                                    {project.link && (
                                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                                            <FaExternalLinkAlt />
                                        </a>
                                    )}
                                </div>
                            </div>
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>
                            <ul className="project-tech-list">
                                {project.tech.map((tech, idx) => (
                                    <li key={idx}>{tech}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
