import React from 'react';
import { FaTrophy, FaMedal } from 'react-icons/fa';
import './Achievements.css';

const Achievements = () => {
    const achievements = [
        { title: 'Top 5 — Hack the League', year: '2023', icon: <FaTrophy />, color: '#ffd700' }, // Gold
        { title: '3rd Prize — Hackathon’22', year: '2022', icon: <FaMedal />, color: '#cd7f32' }, // Bronze
        { title: '2nd Prize — Ideathon’22', year: '2022', icon: <FaMedal />, color: '#c0c0c0' }, // Silver
        { title: '3rd Prize — Coadethon', year: '2022', icon: <FaMedal />, color: '#cd7f32' }, // Bronze
        { title: '3+ University Contest Winner', year: 'Various', icon: <FaTrophy />, color: '#ffd700' } // Gold
    ];

    return (
        <section id="achievements" className="section achievements-section">
            <div className="container">
                <h2 className="section-title">Achievements</h2>
                <div className="achievements-grid">
                    {achievements.map((item, index) => (
                        <div key={index} className="achievement-card" style={{ borderColor: item.color }}>
                            <div className="achievement-icon" style={{ color: item.color }}>{item.icon}</div>
                            <h3 className="achievement-title">{item.title}</h3>
                            <span className="achievement-year">{item.year}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
