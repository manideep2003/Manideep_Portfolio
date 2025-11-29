import React from 'react';
import './Experience.css';

const Experience = () => {
    const experienceData = [
        {
            role: 'Co-Founder',
            company: 'QuadrelixForge',
            period: '2025 – Present',
            description: 'Building web & app solutions for clients. Responsible for full-stack development, UI/UX, deployment, and client management.',
            link: 'https://quadrelix-forge.netlify.app/',
            color: '#64ffda' // Teal
        },
        {
            role: 'AI Trainer',
            company: 'Outlier.ai',
            period: '2024',
            description: 'Trained AI models, refined and structured datasets, and improved model performance.',
            color: '#3498db' // Blue
        },
        {
            role: 'Mathematics Expert Solver',
            company: 'Chegg',
            period: '2024',
            description: 'Solved 500+ problems with 95% accuracy.',
            color: '#e67e22' // Orange
        },
        {
            role: 'Research Intern',
            company: 'National Ilan University, Taiwan (TEEP)',
            period: '2023 – 2024',
            description: 'Worked on blockchain, IoT, and edge intelligence for sustainability-based research.',
            color: '#9b59b6' // Purple
        },
        {
            role: 'Design Lead',
            company: 'Google Developer Student Clubs',
            period: '2022 – 2023',
            description: 'Led design and supported student-based technical projects.',
            color: '#e74c3c' // Red
        }
    ];

    return (
        <section id="experience" className="section experience-section">
            <div className="container">
                <h2 className="section-title">Experience</h2>
                <div className="experience-stack">
                    {experienceData.map((item, index) => (
                        <div
                            key={index}
                            className="experience-card"
                            style={{
                                '--index': index,
                                '--card-color': item.color,
                                top: `calc(120px + ${index * 40}px)` // Sticky offset
                            }}
                        >
                            <div className="card-header">
                                <span className="card-number">0{index + 1}</span>
                                <div className="card-title-group">
                                    <h3 className="card-role">{item.role}</h3>
                                    <span className="card-company">{item.company}</span>
                                </div>
                                <span className="card-period">{item.period}</span>
                            </div>
                            <div className="card-body">
                                <p>{item.description}</p>
                                {item.link && (
                                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="card-link">
                                        Visit Website
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
