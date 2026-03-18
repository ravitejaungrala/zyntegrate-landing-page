import React, { useEffect, useState, useMemo } from 'react';
import { 
  Cloud, 
  Database, 
  Globe, 
  Cpu, 
  MessageSquare, 
  Zap, 
  ShieldCheck, 
  Workflow,
  ArrowRight
} from 'lucide-react';
import './HeroAnimation.css';

const nodes = [
  { id: 'cloud', icon: <Cloud size={24} />, label: 'Cloud', color: '#3b82f6', top: '32%', left: '12%' },
  { id: 'security', icon: <ShieldCheck size={24} />, label: 'Security', color: '#8b5cf6', top: '55%', left: '8%' },
  { id: 'web', icon: <Globe size={24} />, label: 'Web', color: '#6366f1', top: '78%', left: '18%' },
  { id: 'api', icon: <Cpu size={24} />, label: 'API', color: '#f59e0b', top: '88%', left: '35%' },
  { id: 'trigger', icon: <Zap size={24} />, label: 'Trigger', color: '#f97316', top: '78%', left: '82%' },
  { id: 'saas', icon: <MessageSquare size={24} />, label: 'SaaS', color: '#ec4899', top: '55%', left: '88%' },
  { id: 'data', icon: <Database size={24} />, label: 'Data', color: '#10b981', top: '32%', left: '82%' },
];

const flowTypes = [
  { 
    id: 'ONE_TO_ONE', 
    title: 'One-to-One', 
    desc: 'Connecting SaaS directly to Data Warehouse',
    sources: ['saas'],
    targets: ['data']
  },
  { 
    id: 'MANY_TO_ONE', 
    title: 'Many-to-One', 
    desc: 'Syncing Cloud, API, and Web logs into Central Hub',
    sources: ['cloud', 'api', 'web'],
    targets: ['data']
  },
  { 
    id: 'ONE_TO_MANY', 
    title: 'One-to-Many', 
    desc: 'Trigger distribution to Cloud, SaaS, and APIs',
    sources: ['trigger'],
    targets: ['cloud', 'saas', 'api']
  }
];

const HeroAnimation = () => {
  const [currentFlowIndex, setCurrentFlowIndex] = useState(0);
  const [activePulse, setActivePulse] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentFlowIndex((prev) => (prev + 1) % flowTypes.length);
    }, 4500); // 4.5s per flow type
    return () => clearInterval(interval);
  }, [isPaused]);

  const handleDotClick = (idx) => {
    setCurrentFlowIndex(idx);
    setIsPaused(true);
    // Auto resume after 10s of inactivity
    setTimeout(() => setIsPaused(false), 10000);
  };

  useEffect(() => {
    const pulseInterval = setInterval(() => {
      setActivePulse((prev) => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(pulseInterval);
  }, []);

  const currentFlow = flowTypes[currentFlowIndex];

  return (
    <div className="hero-animation-container">
      {/* Slide Explainer Card */}
      <div className="ha-slide-card">
        <div className="ha-slide-header">
          <div className="ha-flow-badge">{currentFlow.title}</div>
        </div>
        <div className="ha-flow-desc">{currentFlow.desc}</div>
        
        <div className="ha-flow-diagram">
          <div className="ha-diagram-group">
            {currentFlow.sources.map(src => {
              const node = nodes.find(n => n.id === src);
              return (
                <div key={src} className="ha-mini-icon" style={{ borderColor: node.color, color: node.color }} title={node.label}>
                  {node.icon}
                </div>
              );
            })}
          </div>
          <ArrowRight size={16} className="ha-diagram-arrow" />
          <div className="ha-diagram-hub-icon">
            <Workflow size={16} color="#fff" />
          </div>
          <ArrowRight size={16} className="ha-diagram-arrow" />
          <div className="ha-diagram-group">
            {currentFlow.targets.map(tgt => {
              const node = nodes.find(n => n.id === tgt);
              return (
                <div key={tgt} className="ha-mini-icon" style={{ borderColor: node.color, color: node.color }} title={node.label}>
                  {node.icon}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Central Hub */}
      <div className="ha-center-node">
        <div className="ha-logo-circle">
          <Workflow size={40} color="#fff" />
          <div className="ha-logo-text">Zyntegrate</div>
        </div>
        <div className={`ha-pulse-ring ${activePulse === 0 ? 'active' : ''}`}></div>
        <div className={`ha-pulse-ring-outer ${activePulse === 1 ? 'active' : ''}`}></div>
      </div>

      {/* Floating Nodes */}
      {nodes.map((node, i) => {
        const isSource = currentFlow.sources.includes(node.id);
        const isTarget = currentFlow.targets.includes(node.id);
        const isActive = isSource || isTarget;
        
        const dx = 50 - parseFloat(node.left);
        const dy = 50 - parseFloat(node.top);
        const angle = Math.atan2(dy, dx) * (180 / Math.PI);
        const dist = Math.sqrt(dx * dx + dy * dy);

        return (
          <div 
            key={node.id} 
            className={`ha-floating-node ${isActive ? 'active' : ''} ${isSource ? 'source' : ''} ${isTarget ? 'target' : ''}`} 
            style={{ 
              top: node.top, 
              left: node.left,
              '--dx': `${dx * 5}px`,
              '--dy': `${dy * 5}px`,
              '--angle': `${angle}deg`,
              '--dist': `${dist * 5}px`,
              borderColor: isActive ? node.color : 'rgba(226, 232, 240, 0.4)',
              boxShadow: isActive ? `0 0 20px ${node.color}44` : 'none',
              animationDelay: `${i * 0.2}s`
            }}
          >
            <div className="ha-node-icon" style={{ color: isActive ? node.color : '#94a3b8' }}>
              {node.icon}
            </div>
            <div className="ha-node-label">{node.label}</div>
            
            {/* Connection Line to Center */}
            <div 
              className={`ha-connector ${isActive ? 'active' : ''}`} 
              style={{ '--node-color': node.color }}
            ></div>
            
            {/* Source to Hub Particles */}
            {isSource && (
              <div 
                className="ha-particle to-hub" 
                style={{ 
                  '--node-color': node.color,
                  animationDelay: '0s'
                }}
              ></div>
            )}

            {/* Hub to Target Particles */}
            {isTarget && (
              <div 
                className="ha-particle from-hub" 
                style={{ 
                  '--node-color': node.color,
                  animationDelay: '0.8s'
                }}
              ></div>
            )}
          </div>
        );
      })}

      {/* Background Elements */}
      <div className="ha-bg-grid"></div>
      {/* Slider Pagination Dots */}
      <div className="ha-slider-dots">
        {flowTypes.map((_, idx) => (
          <button 
            key={idx}
            className={`ha-dot ${currentFlowIndex === idx ? 'active' : ''}`}
            onClick={() => handleDotClick(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroAnimation;
