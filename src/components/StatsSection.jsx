import React from 'react';
import './StatsSection.css';
import Typewriter from './Typewriter';

const StatsSection = () => {
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  const stats = [
    { value: '1,000+', label: 'Avg. SaaS tools per enterprise', title: 'Fragmented Tech Stacks Are Growing', desc: "Modern enterprises juggle hundreds of disconnected applications. Zyntegrate turns chaos into a unified data ecosystem without rip-and-replace migrations.", color: '#a855f7' },
    { value: '10x', label: 'Faster time to integration', title: 'Speed Is the New Competitive Edge', desc: "Manual data pipelines take months. Agent powered automation shrinks deployment from quarters to minutes, letting teams focus on strategy instead of plumbing.", color: '#f59e0b' },
    { value: '99.9%', label: 'Uptime SLA', title: "Compliance Can't Be an Afterthought", desc: "With regulations tightening globally, every data flow needs audit trails and encryption. Zyntegrate bakes security and compliance into every integration.", color: '#10b981' },
    { value: '3x', label: 'Better AI model accuracy', title: 'AI Demands Connected Data', desc: "AI models are only as good as the data they consume. Unified, clean, real-time data pipelines are the foundation for every successful AI initiative.", color: '#ef4444' }
  ];

  return (
    <section className="container section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="stats-glass-bg-blobs">
        <div className="stats-blob stats-blob-1"></div>
        <div className="stats-blob stats-blob-2"></div>
      </div>

      <div className="stats-header">
        <span className="badge">Why it matters</span>
        <h2 className="section-title">Built for <span className="animated-gradient-text"><Typewriter text="today's reality" speed={100} delay={400} /></span></h2>
        <p className="section-subtitle">
          The world runs on data. Here's why seamless integration is no longer optional—it's the foundation of every modern enterprise.
        </p>
      </div>
      
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className="stats-card" 
            style={{ '--stat-color': stat.color }}
            onMouseMove={handleMouseMove}
          >
            <div className="stats-card-header">
              <div className="stats-card-icon"></div>
              <div style={{ textAlign: 'right' }}>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-sublabel">{stat.label}</div>
              </div>
            </div>
            <h3 className="stats-card-title">{stat.title}</h3>
            <p className="stats-card-desc">{stat.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
