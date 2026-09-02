import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Compass, 
  Sparkles, 
  Target, 
  Users, 
  Brain, 
  Home, 
  ChevronRight, 
  ChevronLeft, 
  Play, 
  Pause, 
  RotateCcw, 
  BookOpen, 
  Layers, 
  CheckCircle2,
  Info
} from 'lucide-react';
import { DEMO_STAGES, APP_INFO, MOCK_PERSONAS } from '../../data/essayData';

export default function DemoSidebar({
  activeStageId,
  onSelectStage,
  activePersona,
  onSelectPersona,
  onOpenCOE,
  onResetData
}) {
  const [isPlayingAutoTour, setIsPlayingAutoTour] = useState(false);
  const [showTheoryModal, setShowTheoryModal] = useState(false);

  const currentStageIndex = DEMO_STAGES.findIndex(s => s.id === activeStageId);
  const currentStage = DEMO_STAGES[currentStageIndex] || DEMO_STAGES[0];

  useEffect(() => {
    let interval = null;
    if (isPlayingAutoTour) {
      interval = setInterval(() => {
        const nextIdx = (currentStageIndex + 1) % DEMO_STAGES.length;
        onSelectStage(DEMO_STAGES[nextIdx].id);
      }, 7000);
    }
    return () => clearInterval(interval);
  }, [isPlayingAutoTour, currentStageIndex, onSelectStage]);

  const handleNextStage = () => {
    const nextIdx = (currentStageIndex + 1) % DEMO_STAGES.length;
    onSelectStage(DEMO_STAGES[nextIdx].id);
  };

  const handlePrevStage = () => {
    const prevIdx = (currentStageIndex - 1 + DEMO_STAGES.length) % DEMO_STAGES.length;
    onSelectStage(DEMO_STAGES[prevIdx].id);
  };

  const getStageIcon = (id) => {
    switch (id) {
      case 'overview': return Home;
      case 'pilar1': return Compass;
      case 'pilar2': return Sparkles;
      case 'pilar3': return Target;
      case 'pilar4': return Users;
      case 'coe': return Brain;
      default: return Layers;
    }
  };

  return (
    <aside className="w-full h-full flex flex-col justify-between p-7 lg:p-9 overflow-y-auto no-scrollbar text-slate-900 select-none">
      
      {/* 1. Header & Academic Platform Title */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-black text-white p-1 flex items-center justify-center shadow-xs">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-extrabold tracking-tight text-slate-950">{APP_INFO.name}</h1>
                <span className="text-xs font-semibold bg-slate-100 text-slate-800 px-2.5 py-0.5 rounded-full border border-slate-200">
                  Prototype Demo
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium leading-normal mt-0.5">
                Schlossberg STT (4S Model) & Cognitive Orchestration Engine
              </p>
            </div>
          </div>
        </div>

        {/* Persona Switcher */}
        <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200/90 flex items-center justify-between shadow-2xs">
          <div className="flex items-center gap-3">
            <img
              src={activePersona.avatar}
              alt={activePersona.name}
              className="w-10 h-10 rounded-full object-cover ring-2 ring-slate-200"
            />
            <div>
              <p className="text-sm font-bold text-slate-900 leading-tight">{activePersona.name} ({activePersona.age} thn)</p>
              <p className="text-xs text-slate-500 truncate max-w-[190px] mt-0.5">{activePersona.role}</p>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            {MOCK_PERSONAS.map((p) => (
              <button
                key={p.id}
                onClick={() => onSelectPersona(p)}
                className={`text-xs font-semibold px-3 py-1.5 rounded-xl transition-all ${
                  activePersona.id === p.id
                    ? 'bg-black text-white font-bold shadow-xs'
                    : 'bg-white text-slate-600 border border-slate-200 hover:text-black hover:bg-slate-100'
                }`}
              >
                {p.name.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 2. Stepper Guide */}
      <div className="my-6 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
            <Layers className="w-4 h-4 text-black" />
            Tahapan Alur Demo Prototype
          </h3>
          <span className="text-xs font-bold text-slate-500">
            Tahap {currentStageIndex + 1} dari {DEMO_STAGES.length}
          </span>
        </div>

        <div className="flex flex-col gap-2.5">
          {DEMO_STAGES.map((stage, idx) => {
            const Icon = getStageIcon(stage.id);
            const isActive = stage.id === activeStageId;
            const isCompleted = idx < currentStageIndex;

            return (
              <motion.div
                key={stage.id}
                whileHover={{ x: 3 }}
                onClick={() => onSelectStage(stage.id)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                  isActive
                    ? 'bg-black text-white border-black shadow-md'
                    : isCompleted
                    ? 'bg-slate-50 border-slate-200/90 text-slate-800 hover:bg-slate-100'
                    : 'bg-white border-slate-200/80 text-slate-500 hover:bg-slate-50 hover:text-slate-800'
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <div
                    className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 font-bold text-xs transition-colors ${
                      isActive
                        ? 'bg-white text-black shadow-xs'
                        : isCompleted
                        ? 'bg-slate-200 text-slate-900'
                        : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    {isCompleted ? <CheckCircle2 className="w-4.5 h-4.5" /> : idx === 0 ? '0' : idx}
                  </div>
                  <div>
                    <h4 className={`text-sm font-bold leading-tight ${isActive ? 'text-white' : 'text-slate-900'}`}>
                      {stage.title}
                    </h4>
                    <p className={`text-xs mt-1 ${isActive ? 'text-slate-300' : 'text-slate-500'}`}>
                      {stage.subtitle}
                    </p>
                  </div>
                </div>

                <ChevronRight className={`w-4.5 h-4.5 transition-transform ${isActive ? 'text-white translate-x-1' : 'text-slate-400'}`} />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* 3. Deep Theoretical Insight Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStage.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="bg-white rounded-[26px] p-5.5 border border-slate-200 shadow-xs flex flex-col gap-3.5"
        >
          <div className="flex items-center justify-between pb-2.5 border-b border-slate-100">
            <span className="text-xs font-bold uppercase tracking-wider text-black">
              Analisis Teori & Mekanisme Esai
            </span>
            <button
              onClick={() => setShowTheoryModal(true)}
              className="text-xs font-semibold text-slate-500 hover:text-black flex items-center gap-1 transition-colors"
            >
              <Info className="w-3.5 h-3.5" /> Landasan Teori
            </button>
          </div>

          <div className="space-y-3 text-xs leading-relaxed text-slate-700">
            <div>
              <span className="font-bold text-black block text-xs mb-0.5">⚠️ Masalah Psikologis:</span>
              <p className="text-slate-600 leading-relaxed">{currentStage.problem}</p>
            </div>

            <div>
              <span className="font-bold text-black block text-xs mb-0.5">🧠 Landasan & Mekanisme STT:</span>
              <p className="text-slate-600 leading-relaxed">{currentStage.mechanism}</p>
            </div>

            <div>
              <span className="font-bold text-black block text-xs mb-0.5">✨ Hasil & Transformasi:</span>
              <p className="text-slate-600 leading-relaxed">{currentStage.outcome}</p>
            </div>
          </div>

          {currentStage.bridgeQuote && (
            <div className="mt-1 p-3 bg-slate-50 rounded-2xl border border-slate-200 text-slate-900 text-xs italic text-center font-medium leading-relaxed">
              "{currentStage.bridgeQuote}"
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* 4. Interactive Bottom Controls */}
      <div className="mt-6 pt-4 border-t border-slate-200 flex flex-col gap-3">
        <div className="flex items-center gap-2.5">
          <button
            onClick={handlePrevStage}
            className="flex-1 bg-white hover:bg-slate-50 text-slate-800 text-xs font-bold py-3 rounded-xl border border-slate-200 transition-colors flex items-center justify-center gap-1 shadow-2xs"
          >
            <ChevronLeft className="w-4 h-4" /> Sebelumnya
          </button>

          <button
            onClick={() => setIsPlayingAutoTour(!isPlayingAutoTour)}
            className={`px-4.5 py-3 rounded-xl text-xs font-bold border transition-all flex items-center justify-center gap-1.5 ${
              isPlayingAutoTour
                ? 'bg-black text-white border-black shadow-xs'
                : 'bg-white hover:bg-slate-50 text-slate-900 border-slate-200 shadow-2xs'
            }`}
          >
            {isPlayingAutoTour ? (
              <>
                <Pause className="w-4 h-4" /> Pause
              </>
            ) : (
              <>
                <Play className="w-4 h-4 fill-current" /> Auto Tour
              </>
            )}
          </button>

          <button
            onClick={handleNextStage}
            className="flex-1 bg-black hover:bg-slate-800 text-white text-xs font-bold py-3 rounded-xl transition-colors flex items-center justify-center gap-1 shadow-xs"
          >
            Selanjutnya <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="flex items-center justify-between text-xs text-slate-500">
          <button
            onClick={onOpenCOE}
            className="text-black hover:text-slate-700 font-bold flex items-center gap-1"
          >
            <Brain className="w-4 h-4" /> Buka Cognitive Engine (COE)
          </button>
          <button
            onClick={onResetData}
            className="hover:text-slate-900 flex items-center gap-1 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Reset State
          </button>
        </div>
      </div>

      {/* Theory Modal */}
      {showTheoryModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white text-slate-900 rounded-[28px] p-6 max-w-lg w-full border border-slate-200 shadow-2xl space-y-4 max-h-[80vh] overflow-y-auto no-scrollbar">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="text-base font-bold text-black flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-black" />
                Daftar Teori & Sitasi Akademik Esai
              </h3>
              <button
                onClick={() => setShowTheoryModal(false)}
                className="text-slate-400 hover:text-black text-xs font-semibold px-2 py-1"
              >
                Tutup
              </button>
            </div>

            <div className="space-y-3 text-xs leading-relaxed">
              {APP_INFO.frameworks.map((fw, idx) => (
                <div key={idx} className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200">
                  <p className="font-bold text-black text-sm">{fw.name}</p>
                  <p className="text-slate-600 mt-1 leading-relaxed">{fw.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

    </aside>
  );
}
