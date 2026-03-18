import React from 'react';
import './Workflow.css';

const scenarios = [
  {
    message: "If a live chat message comes in through WebSocket, update HubSpot and Salesforce, and schedule a reminder to follow up later.",
    steps: [
      { num: '01', label: 'RECEIVE', text: 'Receives WebSocket live chat message' },
      { num: '02', label: 'SOURCE', text: 'Connects to live chat message stream' },
      { num: '03', label: 'DESTINATION', text: 'Connects to HubSpot and Salesforce CRMs' },
      { num: '04', label: 'TRANSFER', text: 'Transfers chat data to CRM systems' },
      { num: '05', label: 'UNDERSTAND', text: 'Understands conversation context' },
      { num: '06', label: 'IDENTIFY', text: 'Identifies follow-up action and reminder workflow' },
      { num: '07', label: 'COMPLETE', text: 'CRM updated and reminder scheduled' },
    ]
  },
  {
    message: "Whenever someone places an order on my website, trigger the order processing queue and schedule follow-up tasks.",
    steps: [
      { num: '01', label: 'RECEIVE', text: 'Receives new order event from website' },
      { num: '02', label: 'SOURCE', text: 'Connects to ecommerce order system' },
      { num: '03', label: 'DESTINATION', text: 'Connects to AWS SQS and workflow scheduler' },
      { num: '04', label: 'TRANSFER', text: 'Transfers order data to processing queue' },
      { num: '05', label: 'UNDERSTAND', text: 'Understands order workflow logic' },
      { num: '06', label: 'IDENTIFY', text: 'Identifies follow-up tasks and automation triggers' },
      { num: '07', label: 'COMPLETE', text: 'Order workflow triggered successfully' },
    ]
  }
];

const VisualWorkflow = ({ globalStep }) => {
  const scenarioIndex = Math.floor(globalStep / 15);
  const activeStep = globalStep % 15;
  const currentScenario = scenarios[scenarioIndex];

  return (
    <div className="wf-visual-container">
      {/* User Request Bubble */}
      <div className={`wf-request-pill ${activeStep >= 1 ? 'visible' : ''}`}>
        <p>{currentScenario.message}</p>
      </div>

      <div className={`wf-connector-line line-1 ${activeStep >= 2 ? 'active' : ''}`}></div>

      {/* Agent Center */}
      <div className={`wf-agent-node-container ${activeStep >= 2 ? 'visible' : ''}`}>
        <div className="wf-agent-node">
          <span>Zyntegrate</span>
          <div className="wf-pulse-ring"></div>
          <div className="wf-pulse-ring-outer"></div>
        </div>
      </div>

      <div className={`wf-connector-line line-2 ${activeStep >= 3 ? 'active' : ''}`}></div>

      {/* Step Cards */}
      <div className="wf-steps-stack">
        {currentScenario.steps.map((step, i) => (
          <div 
            key={i} 
            className={`wf-step-card ${activeStep >= (i + 4) ? 'visible' : ''}`}
          >
            <div className="wf-step-num-badge">{step.num}</div>
            <div className="wf-step-content">
              <div className="wf-step-label">{step.label}</div>
              <div className="wf-step-text">{step.text}</div>
            </div>
            <div className="wf-step-check">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Workflow = () => {
  const [globalStep, setGlobalStep] = React.useState(0);
  
  React.useEffect(() => {
    const totalSteps = scenarios.length * 15;
    const timer = setInterval(() => {
      setGlobalStep((prev) => (prev + 1) % totalSteps);
    }, 1300);
    return () => clearInterval(timer);
  }, []);

  const activeStep = globalStep % 15;

  const infoSteps = [
    { label: 'RECEIVE & UNDERSTAND', title: 'Input', desc: 'The agent receives requests or events and interprets the intent quickly.' },
    { label: 'PROCESS & CONNECT', title: 'Execution', desc: 'Automatically connects to necessary systems and executes actions.' },
    { label: 'MONITOR & COMPLETE', title: 'Result', desc: 'Tracks progress, ensures success, and delivers the final outcome.' }
  ];

  return (
    <section id="how-it-works" className="container section-padding wf-main-section">
      <div className="wf-animation-wrapper">
        <VisualWorkflow globalStep={globalStep} />
      </div>
      
      <div className="wf-text-content">
        <h2 className="section-title">
          Your Systems. <br />
          <span className="text-gradient-animated">Now Autonomous.</span>
        </h2>
        <p className="section-subtitle">
          AI agents that monitor events, trigger workflows, and optimize operations automatically.
        </p>
        
        <div className="wf-info-steps">
          {infoSteps.map((step, i) => {
            const isActive = (i === 0 && activeStep >= 4 && activeStep <= 5) || 
                             (i === 1 && activeStep >= 6 && activeStep <= 8) || 
                             (i === 2 && activeStep >= 9 && activeStep <= 10);
            return (
              <div key={i} className={`wf-info-card ${isActive ? 'wf-active' : ''}`}>
                <span className="wf-info-label">{step.label}</span>
                <h3 className="wf-info-title">{step.title}</h3>
                <p className="wf-info-desc">{step.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Workflow;
