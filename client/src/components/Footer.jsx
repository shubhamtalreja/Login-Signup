import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          &copy; {new Date().getFullYear()} TapApt. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;