import React from 'react';
import './CTASection.css';
import { GradientButton } from './ui/gradient-button';

const CTASection = () => {
  return (
    <section id="contact" className="container section-padding">
      <div className="cta-card cta-refined-layout">
        <div className="cta-col-left">
          <div className="cta-pill-badge">
            <span>✨ Start Your Integration Journey</span>
          </div>
          <h2 className="cta-heading">
            Stop <span className="text-gradient-animated">Managing</span> Integrations. <br />
            Start <span className="text-gradient-animated">Orchestration</span> System.
          </h2>
          <p className="cta-subtext">
            Bring clarity to your infrastructure.
          </p>
        </div>

        <div className="cta-col-right-combined">
          <div className="cta-info-footer">
            <div className="cta-contact-column">
              <h3>Office</h3>
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
            <button className="cta-contact-btn">
              Contact Us
              <svg className="cta-btn-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
