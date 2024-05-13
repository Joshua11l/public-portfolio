// Footer.js
import React from 'react';
import './footer.css'; // Make sure to create this CSS file

const Footer = () => {
    const year = new Date().getFullYear(); // Get the current year for the copyright notice
    return (
        <footer className="footer">
            <div className="container-footer text-center">
                <span className="footer-text">© {year} Joshua Lopez. All Rights Reserved.</span>
            </div>
        </footer>
    );
};

export default Footer;
