import React, { useState, useEffect } from 'react';
import { Workflow, Database, Zap, Shield, BarChart, Cloud } from 'lucide-react';
import './Integrations.css';
import Typewriter from './Typewriter';

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
      setRotationAngle((prev) => (prev + 0.3) % 360);
    }, 50);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Sync active feature with rotation
    const index = Math.round(((rotationAngle % 360) / 360) * features.length) % features.length;
    // Map the bottom-most node to be active
    const activeIdx = (features.length - index) % features.length;
    setActiveFeature(activeIdx);
  }, [rotationAngle]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  const calculatePosition = (index, total) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360;
    const radius = 160;
    const radian = (angle * Math.PI) / 180;
    const x = radius * Math.cos(radian);
    const y = radius * Math.sin(radian);
    const zIndex = Math.round(100 + 50 * Math.cos(radian));
    const opacity = Math.max(0.4, 0.4 + 0.6 * ((1 + Math.sin(radian)) / 2));
    const color = features[index].color;
    return { x, y, zIndex, opacity, color };
  };

  return (
    <section className="container section-padding integrations" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="integrations-bg-blobs">
        <div className="integrations-blob integrations-blob-1"></div>
        <div className="integrations-blob integrations-blob-2"></div>
      </div>
      <div className="integrations-visual">
        <div className="orbital-container">
          <div className="orbital-inner">
            <div className="orbital-orbit-wrapper">
              <div className="orbital-center-hub">
                <div className="orbital-hub-ping-1"></div>
                <div className="orbital-hub-ping-2"></div>
                <div className="orbital-hub-core"></div>
              </div>

              <div className="orbital-path-circle"></div>

              {features.map((feature, index) => {
                const pos = calculatePosition(index, features.length);
                const isActive = activeFeature === index;
                const Icon = feature.icon;

                return (
                  <div
                    key={index}
                    className="orbital-node"
                    style={{
                      transform: `translate(${pos.x}px, ${pos.y}px)`,
                      zIndex: pos.zIndex,
                      opacity: pos.opacity,
                      '--node-color': feature.color
                    }}
                  >
                    <div className="orbital-node-energy"></div>
                    <div className={`orbital-node-icon ${isActive ? 'active' : ''}`} style={{ borderColor: isActive ? feature.color : 'rgba(255, 255, 255, 0.1)' }}>
                      <Icon size={20} color={isActive ? '#fff' : feature.color} />
                    </div>
                    <div className={`orbital-node-title ${isActive ? 'active' : ''}`} style={{ color: isActive ? '#1e293b' : 'rgba(100, 116, 139, 0.7)' }}>
                      {feature.title}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.25rem', lineHeight: '1.1' }}>
          Powerful Integrations. <br />
          <span className="animated-gradient-text">
            <Typewriter text="Simplified." speed={120} delay={600} />
          </span>
        </h2>
        
        <div className="features-list">
          {features.map((f, i) => (
            <div 
              key={i} 
              className={`feature-card ${activeFeature === i ? 'active' : ''}`}
              style={{ '--feature-color': f.color }}
              onMouseMove={handleMouseMove}
            >
              <div className="feature-icon">
                <f.icon size={16} color={activeFeature === i ? f.color : '#64748b'} />
              </div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
              {activeFeature === i && <div className="feature-cursor"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Integrations;
