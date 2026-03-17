import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsSection from './components/StatsSection';
import Integrations from './components/Integrations';
import Workflow from './components/Workflow';
import UseCases from './components/UseCases';
import CTASection from './components/CTASection';
import './App.css';

// Import generated assets - Flagship Visuals
import heroImg from 'C:/Users/jaswa/.gemini/antigravity/brain/7a2cd4c9-d655-41dc-a41f-afac25fa7d24/zyntegrate_hero_masterpiece_1773646515639.png';

// Use Case Assets
import legacyImg from 'C:/Users/jaswa/.gemini/antigravity/brain/7a2cd4c9-d655-41dc-a41f-afac25fa7d24/zyntegrate_legacy_v3_1773646603913.png';
import cloudImg from 'C:/Users/jaswa/.gemini/antigravity/brain/7a2cd4c9-d655-41dc-a41f-afac25fa7d24/zyntegrate_cloud_v3_1773646620565.png';
import apiImg from 'C:/Users/jaswa/.gemini/antigravity/brain/7a2cd4c9-d655-41dc-a41f-afac25fa7d24/zyntegrate_api_v3_1773646636220.png';
import aiImg from 'C:/Users/jaswa/.gemini/antigravity/brain/7a2cd4c9-d655-41dc-a41f-afac25fa7d24/zyntegrate_ai_v3_1773646654548.png';
import lowcodeImg from 'C:/Users/jaswa/.gemini/antigravity/brain/7a2cd4c9-d655-41dc-a41f-afac25fa7d24/zyntegrate_lowcode_v3_1773646674652.png';
import connectorsImg from 'C:/Users/jaswa/.gemini/antigravity/brain/7a2cd4c9-d655-41dc-a41f-afac25fa7d24/zyntegrate_connectors_v3_1773646693731.png';
import monitoringImg from 'C:/Users/jaswa/.gemini/antigravity/brain/7a2cd4c9-d655-41dc-a41f-afac25fa7d24/zyntegrate_monitoring_v3_1773646711189.png';

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
