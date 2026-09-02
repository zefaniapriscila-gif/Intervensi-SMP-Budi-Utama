import React, { useState } from 'react';
import DemoSidebar from './DemoSidebar';
import IPhoneFrame from './IPhoneFrame';
import { Info } from 'lucide-react';

export default function MainLayout({
  activeStageId,
  onSelectStage,
  activeTab,
  onTabChange,
  activePersona,
  onSelectPersona,
  onOpenCOE,
  onResetData,
  children
}) {
  const [showMobileInfo, setShowMobileInfo] = useState(false);

  return (
    <div className="w-full min-h-[100dvh] bg-[#f6f8fb] text-slate-900 flex flex-col lg:flex-row items-stretch justify-center relative overflow-hidden">
      
      {/* Subtle light ambient glow */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-slate-200/50 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-slate-300/40 rounded-full blur-[120px] pointer-events-none" />

      {/* MOBILE ONLY Floating Tour Button */}
      <div className="lg:hidden fixed bottom-20 right-4 z-50 pointer-events-auto">
        <button
          onClick={() => setShowMobileInfo(!showMobileInfo)}
          className="bg-black text-white text-[11px] font-bold px-3.5 py-2 rounded-full border border-slate-800 shadow-xl flex items-center gap-1.5 active:scale-95 transition-all"
        >
          <Info className="w-3.5 h-3.5 text-white" />
          Alur Demo
        </button>
      </div>

      {/* Mobile Info Drawer */}
      {showMobileInfo && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex flex-col justify-end p-4">
          <div className="bg-white text-slate-900 rounded-[28px] p-5 border border-slate-200 shadow-2xl space-y-3 max-h-[75vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <h3 className="text-[13px] font-bold text-black">Tahapan Alur Demo Prototype</h3>
              <button
                onClick={() => setShowMobileInfo(false)}
                className="text-slate-400 text-xs font-semibold px-2 py-1"
              >
                Tutup
              </button>
            </div>
            <p className="text-[11px] text-slate-600">
              Prototype ini mengintegrasikan 4 Pilar <strong>Schlossberg STT Model</strong>:
            </p>
            <div className="space-y-1.5 text-[10.5px] text-slate-700">
              <p>• <strong>Pilar 1 (Situation):</strong> Mapping & Validasi Realitas Transisi</p>
              <p>• <strong>Pilar 2 (Self):</strong> VIA Strength Mapping & McAdams Timeline</p>
              <p>• <strong>Pilar 3 (Strategies):</strong> Adaptive Roadmap & Bandura Mastery</p>
              <p>• <strong>Pilar 4 (Support):</strong> Growth Circle & Anti-Comparison Feed</p>
            </div>
            <button
              onClick={() => {
                setShowMobileInfo(false);
                onOpenCOE();
              }}
              className="w-full bg-black text-white text-[11px] font-bold py-2 rounded-xl hover:bg-slate-800 transition-colors"
            >
              Buka Cognitive Orchestrator (COE AI)
            </button>
          </div>
        </div>
      )}

      {/* DESKTOP / TABLET LEFT PANE: Clean Bright Sidebar */}
      <div className="hidden lg:flex lg:w-[42%] xl:w-[40%] 2xl:w-[38%] h-[100dvh] border-r border-slate-200/90 bg-white/90 backdrop-blur-xl relative z-10">
        <DemoSidebar
          activeStageId={activeStageId}
          onSelectStage={onSelectStage}
          activePersona={activePersona}
          onSelectPersona={onSelectPersona}
          onOpenCOE={onOpenCOE}
          onResetData={onResetData}
        />
      </div>

      {/* RIGHT PANE: Interactive iPhone Prototype */}
      <main className="w-full lg:flex-1 h-[100dvh] flex items-center justify-center p-0 lg:p-6 xl:p-10 relative z-10">
        <IPhoneFrame
          activeTab={activeTab}
          onTabChange={onTabChange}
          currentPillarName={activeStageId}
          onOpenCOE={onOpenCOE}
        >
          {children}
        </IPhoneFrame>
      </main>

    </div>
  );
}
