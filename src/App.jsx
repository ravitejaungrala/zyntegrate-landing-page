import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsSection from './components/StatsSection';
import Integrations from './components/Integrations';
import Workflow from './components/Workflow';
import UseCases from './components/UseCases';
import CTASection from './components/CTASection';
import './App.css';

// Import generated assets
import heroImg from './assets/hero_agent_masterpiece_1773469849477.png';

// Use Case Assets
import legacyImg from './assets/legacy_integration_premium_1773469710524.png';
import cloudImg from './assets/cloud_orchestration_premium_1773469727338.png';
import apiImg from './assets/api_connectivity_premium_1773469745301.png';
import aiImg from './assets/ai_agents_premium_1773469762398.png';
import lowcodeImg from './assets/lowcode_builder_premium_1773469788097.png';
import connectorsImg from './assets/prebuilt_connectors_premium_1773469804154.png';
import monitoringImg from './assets/monitoring_dashboard_premium_1773469820978.png';

// Trigger Bar Icons
import salesforceIcon from './assets/triggers/salesforce_icon_1773820604559.png';
import awsSnsIcon from './assets/triggers/aws_sns_icon_1773820620030.png';
import awsSqsIcon from './assets/triggers/aws_sqs_icon_1773820636398.png';
import httpIcon from './assets/triggers/http_icon_1773820648741.png';
import webhookIcon from './assets/triggers/webhook_icon_1773820659525.png';
import hubspotIcon from './assets/triggers/hubspot_icon_1773820675927.png';

function App() {
  const useCaseAssets = {
    legacy: legacyImg,
    cloud: cloudImg,
    api: apiImg,
    ai: aiImg,
    lowcode: lowcodeImg,
    connectors: connectorsImg,
    monitoring: monitoringImg
  };

  const triggerItems = [
    { label: 'Webhook Trigger', icon: webhookIcon },
    { label: 'Hubspot Trigger', icon: hubspotIcon },
    { label: 'Salesforce Platform Event', icon: salesforceIcon },
    { label: 'AWS SNS Trigger', icon: awsSnsIcon },
    { label: 'AWS SQS Trigger', icon: awsSqsIcon },
    { label: 'Http Trigger', icon: httpIcon }
  ];

  return (
    <div className="app">
      <Navbar />
      
      <main>
        <Hero image={heroImg} />
        
        {/* Trigger Bar Section */}
        <section className="container trigger-bar-section">
          <div className="trigger-bar-wrapper">
            <div className="trigger-bar">
              {[...Array(2)].map((_, groupIndex) => (
                <div key={groupIndex} className="trigger-group">
                  {triggerItems.map((trigger, i) => (
                    <div key={i} className="trigger-item">
                      <div className="trigger-icon">
                        <img src={trigger.icon} alt={trigger.label} className="trigger-icon-img" />
                      </div>
                      {trigger.label}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        <StatsSection />
        <Integrations />
        <Workflow />
        
        <UseCases assets={useCaseAssets} />


        <CTASection />
      </main>
    </div>
  );
}

export default App;
