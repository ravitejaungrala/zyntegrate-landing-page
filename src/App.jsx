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
import heroImg from 'C:/Users/jaswa/.gemini/antigravity/brain/1aff0822-4f61-4d2b-b8e2-9e18ede68d01/hero_agent_masterpiece_1773469849477.png';

// Use Case Assets
import legacyImg from 'C:/Users/jaswa/.gemini/antigravity/brain/1aff0822-4f61-4d2b-b8e2-9e18ede68d01/legacy_integration_premium_1773469710524.png';
import cloudImg from 'C:/Users/jaswa/.gemini/antigravity/brain/1aff0822-4f61-4d2b-b8e2-9e18ede68d01/cloud_orchestration_premium_1773469727338.png';
import apiImg from 'C:/Users/jaswa/.gemini/antigravity/brain/1aff0822-4f61-4d2b-b8e2-9e18ede68d01/api_connectivity_premium_1773469745301.png';
import aiImg from 'C:/Users/jaswa/.gemini/antigravity/brain/1aff0822-4f61-4d2b-b8e2-9e18ede68d01/ai_agents_premium_1773469762398.png';
import lowcodeImg from 'C:/Users/jaswa/.gemini/antigravity/brain/1aff0822-4f61-4d2b-b8e2-9e18ede68d01/lowcode_builder_premium_1773469788097.png';
import connectorsImg from 'C:/Users/jaswa/.gemini/antigravity/brain/1aff0822-4f61-4d2b-b8e2-9e18ede68d01/prebuilt_connectors_premium_1773469804154.png';
import monitoringImg from 'C:/Users/jaswa/.gemini/antigravity/brain/1aff0822-4f61-4d2b-b8e2-9e18ede68d01/monitoring_dashboard_premium_1773469820978.png';

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
                  {['Webhook Trigger', 'Hubspot Trigger', 'Salesforce Platform Event', 'AWS SNS Trigger', 'AWS SQS Trigger', 'Http Trigger'].map((trigger, i) => (
                    <div key={i} className="trigger-item">
                      <div className="trigger-icon"></div>
                      {trigger}
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
