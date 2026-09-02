import React, { useState } from 'react';
import MainLayout from './components/layout/MainLayout';
import HomeDashboard from './components/pillars/HomeDashboard';
import Pillar1Situation from './components/pillars/Pillar1Situation';
import Pillar2Self from './components/pillars/Pillar2Self';
import Pillar3Strategies from './components/pillars/Pillar3Strategies';
import Pillar4Support from './components/pillars/Pillar4Support';
import SessionSummaryModal from './components/pillars/SessionSummaryModal';
import { MOCK_PERSONAS, DEMO_STAGES } from './data/essayData';

export default function App() {
  const [activePersona, setActivePersona] = useState(MOCK_PERSONAS[0]);
  const [activeStageId, setActiveStageId] = useState('overview');
  const [activeTab, setActiveTab] = useState('home');
  const [isSummaryOpen, setIsSummaryOpen] = useState(false);

  const handleTabChange = (newTab) => {
    setActiveTab(newTab);
    switch (newTab) {
      case 'home':
        setActiveStageId('overview');
        break;
      case 'situation':
        setActiveStageId('pilar1');
        break;
      case 'self':
        setActiveStageId('pilar2');
        break;
      case 'strategies':
        setActiveStageId('pilar3');
        break;
      case 'support':
        setActiveStageId('pilar4');
        break;
      default:
        break;
    }
  };

  const handleSelectStage = (stageId) => {
    setActiveStageId(stageId);
    const stage = DEMO_STAGES.find(s => s.id === stageId);
    if (stage && stage.tab) {
      setActiveTab(stage.tab);
    }
  };

  const handleToggleMicroPractice = (practiceId) => {
    setActivePersona(prev => ({
      ...prev,
      microPractices: prev.microPractices.map(p =>
        p.id === practiceId ? { ...p, completed: !p.completed } : p
      )
    }));
  };

  const handleResetData = () => {
    const defaultPersona = MOCK_PERSONAS.find(p => p.id === activePersona.id) || MOCK_PERSONAS[0];
    setActivePersona(JSON.parse(JSON.stringify(defaultPersona)));
    setActiveStageId('overview');
    setActiveTab('home');
  };

  return (
    <MainLayout
      activeStageId={activeStageId}
      onSelectStage={handleSelectStage}
      activeTab={activeTab}
      onTabChange={handleTabChange}
      activePersona={activePersona}
      onSelectPersona={(p) => setActivePersona(p)}
      onOpenSummary={() => setIsSummaryOpen(true)}
      onResetData={handleResetData}
    >
      {activeTab === 'home' && (
        <HomeDashboard
          key={`home-${activePersona.id}`}
          user={activePersona}
          onNavigateTab={handleTabChange}
          onOpenSummary={() => setIsSummaryOpen(true)}
          onToggleMicroPractice={handleToggleMicroPractice}
          onOpenDemoStage={handleSelectStage}
        />
      )}

      {activeTab === 'situation' && (
        <Pillar1Situation
          key={`situation-${activePersona.id}`}
          user={activePersona}
          onUpdateUser={setActivePersona}
          onNavigateNextPilar={() => handleTabChange('self')}
        />
      )}

      {activeTab === 'self' && (
        <Pillar2Self
          key={`self-${activePersona.id}`}
          user={activePersona}
          onUpdateUser={setActivePersona}
          onNavigateNextPilar={() => handleTabChange('strategies')}
        />
      )}

      {activeTab === 'strategies' && (
        <Pillar3Strategies
          key={`strategies-${activePersona.id}`}
          user={activePersona}
          onUpdateUser={setActivePersona}
          onNavigateNextPilar={() => handleTabChange('support')}
        />
      )}

      {activeTab === 'support' && (
        <Pillar4Support
          key={`support-${activePersona.id}`}
          user={activePersona}
          onUpdateUser={setActivePersona}
          onCompleteSession={() => setIsSummaryOpen(true)}
        />
      )}

      <SessionSummaryModal
        isOpen={isSummaryOpen}
        onClose={() => setIsSummaryOpen(false)}
        user={activePersona}
        onRestartJourney={() => {
          handleResetData();
          handleTabChange('situation');
        }}
        onContinueGrowth={() => {
          handleTabChange('home');
        }}
      />
    </MainLayout>
  );
}
