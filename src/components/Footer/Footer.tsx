// src/components/Footer/Footer.tsx

import React from 'react';
import './Footer.module.css';
import '../../index.css';

export const Footer: React.FC = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="nav-container">
          <div className="logo-container">
            <img></img>
            <h3 className="logo-title">Eatly</h3>
          </div>
          <h2 className="visually-hidden">Footer navigation</h2>
          <ul className="footer-nav-list">
            <li className="footer-nav-item">BLOG</li>
            <li className="footer-nav-item">PRICING</li>
            <li className="footer-nav-item">ABOUT US</li>
            <li className="footer-nav-item">CONTACT</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
