import React from 'react';
import './Hero.css';
import Typewriter from './Typewriter';

const Hero = ({ image }) => {
  return (
    <section className="container hero">
      <div className="hero-content">
        <h1>
          Connect Everything. <br />
          Automate Anything. <br />
          <span className="animated-gradient-text">
            <Typewriter text={"Powered by\nIntelligent Agents."} speed={100} delay={800} />
          </span>
        </h1>
        <p>
          Zyntegrate unifies fragmented systems and automates complex workflows from legacy 
          databases to cloud platforms and APIs all in one intelligent layer.
        </p>
        <div className="hero-actions">
          <button className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
            Explore Integrations
          </button>
        </div>
      </div>
      <div className="hero-image float">
        <img src={image} alt="Zyntegrate Automation Cloud" />
      </div>
    </section>
  );
};

export default Hero;
