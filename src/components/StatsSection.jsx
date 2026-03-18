import React from 'react';
import './StatsSection.css';

const StatsSection = () => {
  const stats = [
    { 
      value: '1,000+', 
      label: 'Avg. SaaS tools per enterprise', 
      title: 'Fragmented Tech Stacks Are Growing', 
      desc: "Modern enterprises juggle hundreds of disconnected applications. Zyntegrate turns chaos into a unified data ecosystem without rip-and-replace migrations.", 
      color: '#a855f7',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-layers"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
    },
    { 
      value: '10x', 
      label: 'Faster time to integration', 
      title: 'Speed Is the New Competitive Edge', 
      desc: "Manual data pipelines take months. Agent powered automation shrinks deployment from quarters to minutes, letting teams focus on strategy instead of plumbing.", 
      color: '#f59e0b',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-clock"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
    },
    { 
      value: '99.9%', 
      label: 'Uptime SLA', 
      title: "Compliance Can't Be an Afterthought", 
      desc: "With regulations tightening globally, every data flow needs audit trails and encryption. Zyntegrate bakes security and compliance into every integration.", 
      color: '#10b981',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-shield-check"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1-1z"></path><path d="m9 12 2 2 4-4"></path></svg>
    },
    { 
      value: '3x', 
      label: 'Better AI model accuracy', 
      title: 'AI Demands Connected Data', 
      desc: "AI models are only as good as the data they consume. Unified, clean, real-time data pipelines are the foundation for every successful AI initiative.", 
      color: '#ef4444',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-earth"><path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"></path><path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17"></path><path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"></path><circle cx="12" cy="12" r="10"></circle></svg>
    }
  ];

  return (
    <section id="why" className="container section-padding">
      <div className="stats-header">
        <span className="badge">Why it matters</span>
        <h2 className="section-title">Built for <span className="text-gradient">today's reality</span></h2>
        <p className="section-subtitle">
          The world runs on data. Here's why seamless integration is no longer optional—it's the foundation of every modern enterprise.
        </p>
      </div>
      
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stats-card" style={{ '--stat-color': stat.color }}>
            <div className="stats-card-header">
              <div className="stats-card-icon">{stat.icon}</div>
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
