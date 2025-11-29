import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <p>Designed & Built by Manideep Reddy Sripathi</p>
                <p className="copyright">&copy; {new Date().getFullYear()} All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
