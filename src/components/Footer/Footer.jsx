import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="instagram-footer">
      <div className="footer-container">
        <div className="footer-links">
          <a href="#" className="footer-link">About</a>
          <a href="#" className="footer-link">Help</a>
          <a href="#" className="footer-link">Press</a>
          <a href="#" className="footer-link">API</a>
          <a href="#" className="footer-link">Jobs</a>
          <a href="#" className="footer-link">Privacy</a>
          <a href="#" className="footer-link">Terms</a>
          <a href="#" className="footer-link">Locations</a>
        </div>
        <div className="footer-copyright">
          © {new Date().getFullYear()} Harmeet Kaur Portfolio
        </div>
      </div>
    </footer>
  );
};

export default Footer;