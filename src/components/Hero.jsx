import React from 'react';
import './Hero.css';
import HeroAnimation from './HeroAnimation';

const Hero = ({ image }) => {
  return (
    <section id="hero" className="container hero">
      <div className="hero-content">
        <h1>
          Connect Everything. <br />
          Automate Anything. <br />
          <span className="text-gradient-animated">Powered by <br /> Intelligent Agents.</span>
        </h1>
        <p>
          Zyntegrate unifies fragmented systems and automates complex workflows from legacy
          databases to cloud platforms and APIs all in one intelligent layer using Agents
        </p>

      </div>
      <div className="hero-image">
        <HeroAnimation />
      </div>
    </section>
  );
};

export default Hero;
