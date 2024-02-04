import React from 'react';
import './footer.css';
import AfilumLogo from '../assets/logo.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div id='footerLogo'>
                    <img src={AfilumLogo} alt="" />
                </div>
                <div id="footerLinks">
                    <a href="#welcome">Home</a>
                    <a href="https://www.linkedin.com/company/afilum/">LinkedIn  </a>
                    <a href="#contact">Contact Us</a>
                </div>
            </div>
            <p>&copy; 2024 Afilum. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
