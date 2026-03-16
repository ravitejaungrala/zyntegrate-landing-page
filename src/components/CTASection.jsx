import React from 'react';
import './CTASection.css';

const CTASection = () => {
  return (
    <section className="container section-padding">
      <div className="cta-card refined-layout">
        <div className="cta-col-left">
          <div className="pill-badge">
            <span>✨ Start Your Integration Journey</span>
          </div>
          <h2 className="cta-heading">
            Stop Managing Integrations. <br />
            Start Orchestration System.
          </h2>
          <p className="cta-subtext">
            Bring clarity to your infrastructure.
          </p>
        </div>

        <div className="cta-col-right-combined">
          <div className="cta-button-container">
            <button className="btn btn-primary cta-btn">
              Contact Us 
              <span style={{ marginLeft: '8px' }}>→</span>
            </button>
          </div>
          
          <div className="cta-info-footer">
            <div className="contact-column">
              <h3>Offices</h3>
              <p><strong>USA:</strong> Dallas, 702 S Denton Tap Rd, Suite #110, Coppell, 75019</p>
            </div>
            <div className="contact-column">
              <h3>Contact</h3>
              <p><a href="mailto:info@z-ninth.com">info@z-ninth.com</a></p>
              <p>+1 (972) 992-5082</p>
              <p>+91 88852 57422</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
