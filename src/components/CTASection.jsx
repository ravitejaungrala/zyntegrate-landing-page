import React from 'react';
import './CTASection.css';
import { GradientButton } from './ui/gradient-button';

const CTASection = () => {
  return (
    <section className="container section-padding">
      <div className="cta-card cta-refined-layout">
        <div className="cta-col-left">
          <div className="cta-pill-badge">
            <span>✨ Start Your Integration Journey</span>
          </div>
          <h2 className="cta-heading">
            Stop <span className="cta-highlight-blue">Managing</span> Integrations. <br />
            Start <span className="cta-highlight-blue">Orchestration</span> System.
          </h2>
          <p className="cta-subtext">
            Bring clarity to your infrastructure.
          </p>
        </div>

        <div className="cta-col-right-combined">
          <div className="cta-info-footer">
            <div className="cta-contact-column">
              <h3>Offices</h3>
              <p><strong>USA:</strong> Dallas, 702 S Denton Tap Rd, Suite #110, Coppell, 75019</p>
            </div>
            <div className="cta-contact-column">
              <h3>Contact</h3>
              <p><a href="mailto:info@z-ninth.com">info@z-ninth.com</a></p>
              <p>+1 (972) 992-5082</p>
              <p>+91 88852 57422</p>
            </div>
          </div>

          <div className="cta-button-container">
            <GradientButton variant="variant">
              Contact Us 
              <span style={{ marginLeft: '8px' }}>→</span>
            </GradientButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
