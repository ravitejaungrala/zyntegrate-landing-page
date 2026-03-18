import React, { useState, useEffect } from 'react';
import { Workflow, Database, Zap, Shield, BarChart, Cloud } from 'lucide-react';
import './Integrations.css';

const Integrations = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [rotationAngle, setRotationAngle] = useState(0);
  
  const features = [
    { title: 'Workflow Automation', desc: 'Build and automate complex workflows with an intuitive visual editor.', icon: Workflow, color: '#a855f7' },
    { title: 'Unified Data Layer', desc: 'Consolidate data from fragmented systems into a single view.', icon: Database, color: '#f59e0b' },
    { title: 'Real-Time Sync', desc: 'Keep your data up-to-date with real-time synchronization.', icon: Zap, color: '#3b82f6' },
    { title: 'Enterprise Security', desc: 'Bank-level encryption and SOC 2 compliance at every step.', icon: Shield, color: '#10b981' },
    { title: 'Analytics & Insights', desc: 'Monitor integration performance and gain actionable insights.', icon: BarChart, color: '#ef4444' },
    { title: 'Cloud & Legacy Support', desc: 'Bridge the gap between modern cloud and legacy databases.', icon: Cloud, color: '#06b6d4' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 3500); // Glides to next feature node every 3.5 seconds
    return () => clearInterval(timer);
  }, [features.length]);

  return (
    <section id="features" className="container section-padding integrations">
      <div className="integrations-visual">
        <div className="int-orbital-container">
          <div className="int-orbital-inner">
            <div className="int-orbital-orbit-wrapper">
              <div className="int-orbital-center-hub">
                <div className="orbital-hub-core">
                  <div className="orbital-hub-icon" style={{ backgroundColor: features[activeFeature].color }}>
                    {React.createElement(features[activeFeature].icon, { size: 22, color: '#fff' })}
                  </div>
                  <p className="orbital-hub-sub">Agents driven Integration</p>
                  <h3 className="orbital-hub-title">{features[activeFeature].title}</h3>
                </div>
                <div className="orbital-hub-ping-1"></div>
                <div className="orbital-hub-ping-2"></div>
              </div>

              {/* Backing conic gradient blue ring from user design file */}
              <div className="int-orbital-orbit-ring"></div>
              
              {/* White spacer creating the gap between center hub and blue ring */}
              <div className="int-orbital-spacer-ring"></div>

              <div className="int-orbital-path-circle"></div>

              {/* Single stepping node selector that glides to absolute angle multipliers */}
              <div 
                className="int-orbital-nodes-track" 
                style={{ 
                  transform: `translate(-50%, -50%) rotate(${activeFeature * (360 / features.length)}deg)`,
                  transition: 'transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)'
                }}
              >
                <div className="orbital-slider-node">
                  <div className="orbital-slider-dot" style={{ backgroundColor: features[activeFeature].color }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.25rem', lineHeight: '1.1' }}>
          Powerful Integrations. <br />
          <span className="text-gradient-animated">Simplified.</span>
        </h2>
        
        <div className="features-list">
          {features.map((f, i) => (
            <div 
              key={i} 
              className={`feature-card ${activeFeature === i ? 'active' : ''}`}
              style={{ '--feature-color': f.color }}
              onClick={() => setActiveFeature(i)}
            >
              <div className="feature-icon">
                <f.icon size={16} color={f.color} />
              </div>
              <div className="feature-card-content">
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
              {activeFeature === i && <div className="feature-cursor"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Integrations;
