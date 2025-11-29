import React from 'react';
import { FaBookOpen, FaExternalLinkAlt } from 'react-icons/fa';
import './Research.css';

const Research = () => {
    const researchData = [
        {
            title: 'Two-Layered LSTM-Based Gold Rate Prediction',
            conference: 'ICAN',
            link: 'https://ieeexplore.ieee.org/abstract/document/10007212',
            description: 'Published in IEEE Xplore. A deep learning model to predict gold rates with high accuracy using LSTM networks.'
        },
        {
            title: 'MAKER Robot Arm for Automobile Maintenance',
            conference: 'IJRAT',
            link: 'https://www.researchgate.net/publication/376565862_MIG-Assisted_Kernel-enabled_Robot_MAKER_Arm',
            description: 'Published in ResearchGate. Designed a robotic arm for automated maintenance tasks using reinforcement learning.'
        }
    ];

    return (
        <section id="research" className="section research-section">
            <div className="container">
                <h2 className="section-title">Research Publications</h2>
                <div className="research-grid">
                    {researchData.map((item, index) => (
                        <div key={index} className="research-card">
                            <div className="research-icon">
                                <FaBookOpen />
                            </div>
                            <div className="research-content">
                                <h3 className="research-title">{item.title}</h3>
                                <p className="research-conference">{item.conference}</p>
                                <p className="research-desc">{item.description}</p>
                                <a href={item.link} target="_blank" rel="noopener noreferrer" className="research-link">
                                    Read Paper <FaExternalLinkAlt className="link-icon" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Research;
