import React, { useState } from 'react';
import MainLayout from './components/layout/MainLayout';
import HomeDashboard from './components/pillars/HomeDashboard';
import Pillar1Situation from './components/pillars/Pillar1Situation';
import Pillar2Self from './components/pillars/Pillar2Self';
import Pillar3Strategies from './components/pillars/Pillar3Strategies';
import Pillar4Support from './components/pillars/Pillar4Support';
import CognitiveOrchestratorModal from './components/pillars/CognitiveOrchestratorModal';
import { MOCK_PERSONAS, DEMO_STAGES } from './data/essayData';

export default function App() {
  const [activePersona, setActivePersona] = useState(MOCK_PERSONAS[0]);
  const [activeStageId, setActiveStageId] = useState('overview');
  const [activeTab, setActiveTab] = useState('home');
  const [isCOEOpen, setIsCOEOpen] = useState(false);

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
    if (stageId === 'coe') {
      setIsCOEOpen(true);
      return;
    }
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
      onOpenCOE={() => setIsCOEOpen(true)}
      onResetData={handleResetData}
    >
      {activeTab === 'home' && (
        <HomeDashboard
          user={activePersona}
          onNavigateTab={handleTabChange}
          onOpenCOE={() => setIsCOEOpen(true)}
          onToggleMicroPractice={handleToggleMicroPractice}
          onOpenDemoStage={handleSelectStage}
        />
      )}

      {activeTab === 'situation' && (
        <Pillar1Situation
          user={activePersona}
          onUpdateUser={setActivePersona}
          onNavigateNextPilar={() => handleTabChange('self')}
          onOpenCOE={() => setIsCOEOpen(true)}
        />
      )}

      {activeTab === 'self' && (
        <Pillar2Self
          user={activePersona}
          onUpdateUser={setActivePersona}
          onNavigateNextPilar={() => handleTabChange('strategies')}
          onOpenCOE={() => setIsCOEOpen(true)}
        />
      )}

      {activeTab === 'strategies' && (
        <Pillar3Strategies
          user={activePersona}
          onUpdateUser={setActivePersona}
          onNavigateNextPilar={() => handleTabChange('support')}
          onOpenCOE={() => setIsCOEOpen(true)}
        />
      )}

      {activeTab === 'support' && (
        <Pillar4Support
          user={activePersona}
          onUpdateUser={setActivePersona}
          onOpenCOE={() => setIsCOEOpen(true)}
        />
      )}

      <CognitiveOrchestratorModal
        isOpen={isCOEOpen}
        onClose={() => setIsCOEOpen(false)}
      />
    </MainLayout>
  );
}
