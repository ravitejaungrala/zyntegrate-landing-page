import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsSection from './components/StatsSection';
import Integrations from './components/Integrations';
import Workflow from './components/Workflow';
import UseCases from './components/UseCases';
import CTASection from './components/CTASection';
import './App.css';
import salesforceImg from './assets/salesforce.svg';
import snsImg from './assets/sns.svg';
import sqsImg from './assets/sqs.svg';
import httpImg from './assets/http.svg';
import timerImg from './assets/timer.svg';

// Import generated assets - Flagship Visuals
import heroImg from './assets/zyntegrate_hero_masterpiece_1773646515639.png';

// Use Case Assets
import legacyImg from './assets/zyntegrate_legacy_v3_1773646603913.png';
import cloudImg from './assets/zyntegrate_cloud_v3_1773646620565.png';
import apiImg from './assets/zyntegrate_api_v3_1773646636220.png';
import aiImg from './assets/zyntegrate_ai_v3_1773646654548.png';
import lowcodeImg from './assets/zyntegrate_lowcode_v3_1773646674652.png';
import connectorsImg from './assets/zyntegrate_connectors_v3_1773646693731.png';
import monitoringImg from './assets/zyntegrate_monitoring_v3_1773646711189.png';

const triggerItems = [
  { text: 'Salesforce Platform Event', img: salesforceImg },
  { text: 'Websocket Trigger', img: '/websocket' },
  { text: 'Timer Trigger', img: timerImg },
  { text: 'Hubspot Trigger', img: '/hubspot-trigger.png' },
  { text: 'AWS SNS Trigger', img: snsImg },
  { text: 'Http Trigger', img: httpImg },
  { text: 'Webhook Trigger', img: '/webhook.jpg' },
  { text: 'AWS SQS Trigger', img: sqsImg },
  { text: 'Azure Service Bus Trigger', img: '/azure-bus.png' }
];

function App() {
  const useCaseAssets = {
    legacy: '/legacy1.jpg',
    cloud: '/vendor.jpg',
    api: '/thirdparty.webp',
    ai: '/aiagents.jpg',
    lowcode: lowcodeImg, // Retaining import since it was skipped in prompt
    connectors: '/prebuilt1.png',
    monitoring: '/montinoring.jpg'
  };

  return (
    <div className="app">
      <Navbar />
      
      <main>
        <Hero image="/hero-section.png" />
        
        {/* Trigger Bar Section */}
        <section className="container trigger-bar-section">
          <div className="trigger-bar-wrapper">
            <div className="trigger-bar">
              {[...Array(2)].map((_, groupIndex) => (
                <div key={groupIndex} className="trigger-group">
                  {triggerItems.map((item, i) => (
                    <div key={i} className="trigger-item">
                      <img src={item.img} alt={item.text} className="trigger-icon" />
                      {item.text}
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
