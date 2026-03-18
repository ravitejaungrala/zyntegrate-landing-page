import React from 'react';
import './Navbar.css';
import { GradientButton } from './ui/gradient-button';

const Navbar = () => {
  return (
    <nav className="nav glass">
      <div className="container nav-container">
        <a href="#hero" className="logo">
          <img src="/logo2-COJuAraY.png" alt="Zyntegrate Logo" className="logo-img" />
          <span>Zyntegrate</span>
        </a>
        
        <ul className="nav-links">
          <li><a href="#why" className="nav-link">Why</a></li>
          <li><a href="#features" className="nav-link">Features</a></li>
          <li><a href="#how-it-works" className="nav-link">How it works</a></li>
          <li><a href="#cases" className="nav-link">Use Cases</a></li>
          <li><a href="#contact" className="nav-link">Contact</a></li>
        </ul>
        
        <button className="nav-get-started-btn">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
