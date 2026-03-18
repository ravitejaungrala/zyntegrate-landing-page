import React, { useEffect, useState, useMemo } from 'react';
import { 
  Cloud, 
  Database, 
  Globe, 
  Cpu, 
  MessageSquare, 
  Zap, 
  ShieldCheck, 
  Workflow
} from 'lucide-react';
import './HeroAnimation.css';

const nodes = [
  { id: 'cloud', icon: <Cloud size={24} />, label: 'Cloud', color: '#3b82f6', top: '25%', left: '18%' },
  { id: 'security', icon: <ShieldCheck size={24} />, label: 'Security', color: '#8b5cf6', top: '50%', left: '12%' },
  { id: 'web', icon: <Globe size={24} />, label: 'Web', color: '#6366f1', top: '75%', left: '22%' },
  { id: 'api', icon: <Cpu size={24} />, label: 'API', color: '#f59e0b', top: '85%', left: '50%' },
  { id: 'trigger', icon: <Zap size={24} />, label: 'Trigger', color: '#f97316', top: '65%', left: '86%' },
  { id: 'saas', icon: <MessageSquare size={24} />, label: 'SaaS', color: '#ec4899', top: '35%', left: '86%' },
  { id: 'data', icon: <Database size={24} />, label: 'Data', color: '#10b981', top: '15%', left: '75%' },
];

const flowTypes = [
  { 
    id: 'ONE_TO_ONE', 
    title: 'One-to-One Integration', 
    desc: 'Connecting SaaS directly to Data Warehouse',
    sources: ['saas'],
    targets: ['data']
  },
  { 
    id: 'MANY_TO_ONE', 
    title: 'Many-to-One Consolidation', 
    desc: 'Syncing Cloud, API, and Web logs into Central Hub',
    sources: ['cloud', 'api', 'web'],
    targets: ['data']
  },
  { 
    id: 'ONE_TO_MANY', 
    title: 'One-to-Many Distribution', 
    desc: 'Trigger distribution to Cloud, SaaS, and APIs',
    sources: ['trigger'],
    targets: ['cloud', 'saas', 'api']
  }
];

const HeroAnimation = () => {
  const [currentFlowIndex, setCurrentFlowIndex] = useState(0);
  const [activePulse, setActivePulse] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFlowIndex((prev) => (prev + 1) % flowTypes.length);
    }, 4500); // 4.5s per flow type
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const pulseInterval = setInterval(() => {
      setActivePulse((prev) => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(pulseInterval);
  }, []);

  const currentFlow = flowTypes[currentFlowIndex];

  return (
    <div className="hero-animation-container">
      {/* Flow Explanation Label */}
      <div className="ha-flow-label">
        <div className="ha-flow-badge">{currentFlow.title}</div>
        <div className="ha-flow-desc">{currentFlow.desc}</div>
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
      <div className="ha-code-scroll">
        <div className="ha-code-line">FLOW: {currentFlow.id}</div>
        <div className="ha-code-line">STATUS: ACTIVE</div>
        <div className="ha-code-line">{currentFlow.sources.join(', ')} &rarr; HUB &rarr; {currentFlow.targets.join(', ')}</div>
      </div>
    </div>
  );
};

export default HeroAnimation;
