import React from 'react';
import './Navbar.css';
import { GradientButton } from './ui/gradient-button';

const Navbar = () => {
  return (
    <nav className="nav glass">
      <div className="container nav-container">
        <div className="logo">
          <div className="logo-icon">Z</div>
          <span>Zyntegrate</span>
        </div>
        
        <ul className="nav-links">
          <li><a href="#why" className="nav-link">Why</a></li>
          <li><a href="#features" className="nav-link">Features</a></li>
          <li><a href="#agent" className="nav-link">Agent</a></li>
          <li><a href="#cases" className="nav-link">Use Cases</a></li>
          <li><a href="#contact" className="nav-link">Contact</a></li>
        </ul>
        
        <GradientButton variant="variant" style={{ minWidth: '120px', padding: '0.75rem 1.5rem' }}>
          Get Started
        </GradientButton>
      </div>
    </nav>
  );
};

export default Navbar;
