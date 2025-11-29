import React from 'react';
import { FaUsers, FaMicrophone, FaHandshake } from 'react-icons/fa';
import './Leadership.css';

const Leadership = () => {
    const leadershipData = [
        {
            role: 'Co-Founder',
            org: 'QuadrelixForge',
            year: '2025',
            icon: <FaHandshake />,
            color: '#e67e22' // Carrot Orange
        },
        {
            role: 'Lead Organizer',
            org: 'Tantraz 2022 (Coding Event)',
            year: '2022',
            icon: <FaMicrophone />,
            color: '#1abc9c' // Teal
        },
        {
            role: 'Core Team',
            org: 'SANDHAI 2022 (Social Impact Event)',
            year: '2022',
            icon: <FaUsers />,
            color: '#3498db' // Blue
        }
    ];

    return (
        <section id="leadership" className="section leadership-section">
            <div className="container">
                <h2 className="section-title">Leadership & Extracurricular</h2>
                <div className="leadership-list">
                    {leadershipData.map((item, index) => (
                        <div key={index} className="leadership-item" style={{ borderLeft: `4px solid ${item.color}` }}>
                            <div className="leadership-icon-box" style={{ color: item.color, background: `${item.color}20` }}>
                                {item.icon}
                            </div>
                            <div className="leadership-info">
                                <h3>{item.role}</h3>
                                <p>{item.org}</p>
                            </div>
                            <div className="leadership-year">
                                {item.year}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Leadership;
