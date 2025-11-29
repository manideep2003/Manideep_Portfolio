import React from 'react';
import { FaCode, FaTools, FaDatabase, FaBrain } from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
    const skillsData = [
        {
            category: 'Programming',
            icon: <FaCode />,
            color: '#3498db', // Blue
            skills: ['Python', 'Java', 'C', 'HTML', 'CSS', 'JavaScript', 'SQL']
        },
        {
            category: 'Frameworks/Tech',
            icon: <FaDatabase />,
            color: '#2ecc71', // Green
            skills: ['React JS', 'Angular JS', 'TensorFlow', 'IoT']
        },
        {
            category: 'Developer Tools',
            icon: <FaTools />,
            color: '#e67e22', // Orange
            skills: ['VS Code', 'Eclipse', 'AWS', 'PyCharm', 'Anaconda', 'Android Studio']
        },
        {
            category: 'Other Skills',
            icon: <FaBrain />,
            color: '#9b59b6', // Purple
            skills: ['Agile', 'Waterfall Model', 'Mathematics Problem Solving']
        }
    ];

    return (
        <section id="skills" className="section skills-section">
            <div className="container">
                <h2 className="section-title">Skills</h2>
                <div className="skills-grid">
                    {skillsData.map((category, index) => (
                        <div key={index} className="skill-card" style={{ borderTop: `3px solid ${category.color}` }}>
                            <div className="skill-icon" style={{ color: category.color }}>{category.icon}</div>
                            <h3 className="skill-category">{category.category}</h3>
                            <div className="skill-list">
                                {category.skills.map((skill, idx) => (
                                    <span key={idx} className="skill-tag">{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
