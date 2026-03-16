import React from 'react';
import './Navbar.css';

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
        
        <button className="btn btn-primary">Get Started</button>
      </div>
    </nav>
  );
};

export default Navbar;
