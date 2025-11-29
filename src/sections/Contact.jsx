import React, { useRef, useState } from 'react';
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('sending');

        // REPLACE THESE WITH YOUR ACTUAL EMAILJS SERVICE ID, TEMPLATE ID, AND PUBLIC KEY
        // Sign up at https://www.emailjs.com/
        const SERVICE_ID = 'service_luxz41k';
        const TEMPLATE_ID = 'template_ev01j9d';
        const PUBLIC_KEY = 'zymUNnxE3eqPMSVIu';

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                setStatus('success');
                e.target.reset();
            }, (error) => {
                console.log(error.text);
                setStatus('error');
            });
    };

    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>
                <div className="contact-content">
                    <div className="contact-info">
                        <p className="contact-desc">
                            I am currently open to new opportunities and collaborations.
                            Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>
                        <div className="contact-details">
                            <div className="contact-item">
                                <FaPhone className="contact-icon" style={{ color: '#2ecc71' }} />
                                <a href="tel:+916305959473">+91 6305959473</a>
                            </div>
                            <div className="contact-item">
                                <FaEnvelope className="contact-icon" style={{ color: '#e74c3c' }} />
                                <a href="mailto:saimanideep2015@gmail.com">saimanideep2015@gmail.com</a>
                            </div>
                            <div className="contact-item">
                                <FaMapMarkerAlt className="contact-icon" style={{ color: '#f1c40f' }} />
                                <span>Hyderabad, Telangana</span>
                            </div>
                        </div>
                        <div className="social-links">
                            <a href="https://www.linkedin.com/in/manideep-reddy-sripathi-585651238/" target="_blank" rel="noopener noreferrer" style={{ color: '#0077b5' }}>
                                <FaLinkedin />
                            </a>
                            <a href="https://github.com/manideep2003" target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff' }}>
                                <FaGithub />
                            </a>
                        </div>
                    </div>

                    <form className="contact-form" ref={form} onSubmit={sendEmail}>
                        <div className="form-group">
                            <input type="text" name="user_name" placeholder="Your Name" required />
                        </div>
                        <div className="form-group">
                            <input type="email" name="user_email" placeholder="Your Email" required />
                        </div>
                        <div className="form-group">
                            <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary submit-btn" disabled={status === 'sending'}>
                            {status === 'sending' ? 'Sending...' : 'Send Message'} <FaPaperPlane />
                        </button>
                        {status === 'success' && <p className="status-msg success">Message sent successfully!</p>}
                        {status === 'error' && <p className="status-msg error">Failed to send message. Please try again.</p>}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
