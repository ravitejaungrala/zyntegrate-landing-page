import React from 'react';
import './UseCases.css';
import Typewriter from './Typewriter';

const UseCases = ({ assets }) => {
  const [visibleItems, setVisibleItems] = React.useState({});
  const observerRef = React.useRef(null);

  React.useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = entry.target.getAttribute('data-index');
          setVisibleItems(prev => ({
            ...prev,
            [index]: true
          }));
        }
      });
    }, { threshold: 0.15 });

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, []);

  const cases = [
    {
      title: 'Legacy System Integration',
      desc: 'Connect outdated databases and systems with modern cloud applications without extensive rewrites.',
      points: ['Bridge legacy and modern systems', 'Preserve existing investments', 'No complex migrations required'],
      image: assets.legacy,
      reversed: false,
      color: '#a855f7' // Purple
    },
    {
      title: 'Vendor Agnostic Orchestration',
      desc: 'Seamlessly integrate services across AWS, Azure, Google Cloud, and other cloud providers.',
      points: ['Cross-platform data flow', 'Unified management console', 'Multi-Cloud approach'],
      image: assets.cloud,
      reversed: true,
      color: '#f59e0b' // Amber
    },
    {
      title: 'Third-Party API Integration',
      desc: 'Connect with any REST, SOAP, or GraphQL API to extend your business capabilities.',
      points: ['Pre-built connectors for popular APIs', 'Custom connector development', 'API versioning support'],
      image: assets.api,
      reversed: false,
      color: '#3b82f6' // Blue
    },
    {
      title: 'AI Agents for Automation',
      desc: 'Deploy intelligent AI agents that monitor workflows, trigger integrations, and automate operational tasks.',
      points: ['Autonomous workflow execution', 'AI-driven decision making', 'Automated alerts and actions'],
      image: assets.ai,
      reversed: true,
      color: '#10b981' // Emerald
    },
    {
      title: 'Low-Code / No-Code Integrations',
      desc: 'Empower teams to build integrations visually using a drag-and-drop workflow builder.',
      points: ['Drag-and-drop integration builder', 'Build workflows without writing code', 'Reduce engineering dependency'],
      image: assets.lowcode,
      reversed: false,
      color: '#ef4444' // Red
    },
    {
      title: 'Prebuilt Connectors',
      desc: 'Instantly connect to enterprise platforms using ready-made connectors for popular services.',
      points: ['Support for Salesforce, SAP, AWS, Azure, SQL, REST & more', 'Rapid integration setup', 'Secure and scalable connectors'],
      image: assets.connectors,
      reversed: true,
      color: '#06b6d4' // Cyan
    },
    {
      title: 'Monitoring & Alerts',
      desc: 'Track every workflow with live dashboards, logs, and intelligent alerting.',
      points: ['Real-time dashboards and logs', 'Customizable alerts and notifications', 'Detect failures and anomalies instantly'],
      image: assets.monitoring,
      reversed: false,
      color: '#8b5cf6' // Violet
    }
  ];

  return (
    <section id="cases" className="container section-padding use-cases-container">
      <div className="stats-header" style={{ marginBottom: '6rem' }}>
        <h2 style={{ fontSize: '3.5rem' }}>Built for Your <span className="animated-gradient-text"><Typewriter text="Use Case" speed={120} delay={400} /></span></h2>
        <p style={{ marginTop: '1rem', fontSize: '1.2rem', color: 'var(--text-muted)' }}>
          Whether you're bridging legacy databases, integrating cloud apps, deploying AI agents, or automating workflows.
        </p>
      </div>

      <div className="stacking-lists">
        {cases.map((item, i) => (
          <div 
            key={i} 
            ref={node => {
              if (node && observerRef.current) {
                observerRef.current.observe(node);
              }
            }}
            data-index={i}
            className="use-case-trigger"
          >
            <div
              className={`stacking-item ${item.reversed ? 'reversed' : 'normal'} ${visibleItems[i] ? 'visible' : ''}`}
              style={{
              '--usecase-color': item.color
            }}
            >
            {item.reversed ? (
              <>
                <div className="use-case-image">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="use-case-content">
                  <h2>
                    <span className="animated-gradient-text">
                      {visibleItems[i] && (
                        <Typewriter text={item.title} speed={80} delay={400} />
                      )}
                    </span>
                  </h2>
                  <p>{item.desc}</p>
                  <div className="check-list">
                    {item.points.map((p, j) => (
                      <div key={j} className="check-item">
                        <div className="check-icon">✓</div>
                        {p}
                      </div>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="use-case-content">
                  <h2>
                    <span className="animated-gradient-text">
                      {visibleItems[i] && (
                        <Typewriter text={item.title} speed={80} delay={400} />
                      )}
                    </span>
                  </h2>
                  <p>{item.desc}</p>
                  <div className="check-list">
                    {item.points.map((p, j) => (
                      <div key={j} className="check-item">
                        <div className="check-icon">✓</div>
                        {p}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="use-case-image">
                  <img src={item.image} alt={item.title} />
                </div>
              </>
            )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UseCases;
