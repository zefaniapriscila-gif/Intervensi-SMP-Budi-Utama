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

// Warna per tahap demo, sejajar dengan warna pilar di layar iPhone.
const STAGE_THEME = {
  overview: { solid: 'bg-azure-500', ink: 'text-azure-700', soft: 'bg-azure-50', softBorder: 'border-azure-100', chip: 'bg-azure-100 text-azure-700' },
  pilar1: { solid: 'bg-mint-500', ink: 'text-mint-700', soft: 'bg-mint-50', softBorder: 'border-mint-100', chip: 'bg-mint-100 text-mint-700' },
  pilar2: { solid: 'bg-grape-500', ink: 'text-grape-700', soft: 'bg-grape-50', softBorder: 'border-grape-100', chip: 'bg-grape-100 text-grape-700' },
  pilar3: { solid: 'bg-sunny-500', ink: 'text-sunny-700', soft: 'bg-sunny-50', softBorder: 'border-sunny-100', chip: 'bg-sunny-100 text-sunny-700' },
  pilar4: { solid: 'bg-coral-500', ink: 'text-coral-700', soft: 'bg-coral-50', softBorder: 'border-coral-100', chip: 'bg-coral-100 text-coral-700' },
  coe: { solid: 'bg-blossom-500', ink: 'text-blossom-700', soft: 'bg-blossom-50', softBorder: 'border-blossom-100', chip: 'bg-blossom-100 text-blossom-700' }
};

const FALLBACK_THEME = STAGE_THEME.overview;

// Kartu teori di modal juga bergilir pastel.
const FRAMEWORK_TINT = [
  'bg-mint-50 border-mint-100',
  'bg-grape-50 border-grape-100',
  'bg-sunny-50 border-sunny-100',
  'bg-coral-50 border-coral-100',
  'bg-azure-50 border-azure-100',
  'bg-blossom-50 border-blossom-100'
];

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
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-grape-500 to-blossom-500 text-white p-1 flex items-center justify-center shadow-sm">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-extrabold tracking-tight text-slate-950">{APP_INFO.name}</h1>
                <span className="text-xs font-semibold bg-grape-100 text-grape-700 px-2.5 py-0.5 rounded-full">
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
        <div className="p-3.5 bg-grape-50 rounded-2xl border border-grape-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={activePersona.avatar}
              alt={activePersona.name}
              className="w-10 h-10 rounded-full object-cover ring-2 ring-grape-200"
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
                    ? 'bg-grape-500 text-white font-bold shadow-sm'
                    : 'bg-white text-slate-600 hover:text-grape-700 hover:bg-grape-100'
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
            <Layers className="w-4 h-4 text-grape-500" />
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
            const theme = STAGE_THEME[stage.id] || FALLBACK_THEME;

            return (
              <motion.div
                key={stage.id}
                whileHover={{ x: 3 }}
                onClick={() => onSelectStage(stage.id)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                  isActive
                    ? `${theme.solid} border-transparent text-white shadow-md`
                    : isCompleted
                    ? `${theme.soft} ${theme.softBorder} text-slate-800`
                    : 'bg-white border-slate-200/80 text-slate-500 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <div
                    className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 font-bold text-xs transition-colors ${
                      isActive
                        ? 'bg-white/25 text-white'
                        : isCompleted
                        ? theme.chip
                        : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    {isCompleted ? <CheckCircle2 className="w-4.5 h-4.5" /> : <Icon className="w-4 h-4" />}
                  </div>
                  <div>
                    <h4 className={`text-sm font-bold leading-tight ${isActive ? 'text-white' : 'text-slate-900'}`}>
                      {stage.title}
                    </h4>
                    <p className={`text-xs mt-1 ${isActive ? 'text-white/80' : isCompleted ? theme.ink : 'text-slate-500'}`}>
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
            <span className={`text-xs font-bold uppercase tracking-wider ${(STAGE_THEME[currentStage.id] || FALLBACK_THEME).ink}`}>
              Analisis Teori & Mekanisme Esai
            </span>
            <button
              onClick={() => setShowTheoryModal(true)}
              className="text-xs font-semibold text-grape-700 bg-grape-50 hover:bg-grape-100 px-2.5 py-1 rounded-full flex items-center gap-1 transition-colors"
            >
              <Info className="w-3.5 h-3.5" /> Landasan Teori
            </button>
          </div>

          <div className="space-y-3 text-xs leading-relaxed text-slate-700">
            <div className="p-3 bg-blossom-50 rounded-2xl border border-blossom-100">
              <span className="font-bold text-blossom-700 block text-xs mb-0.5">⚠️ Masalah Psikologis:</span>
              <p className="text-slate-600 leading-relaxed">{currentStage.problem}</p>
            </div>

            <div className="p-3 bg-azure-50 rounded-2xl border border-azure-100">
              <span className="font-bold text-azure-700 block text-xs mb-0.5">🧠 Landasan & Mekanisme STT:</span>
              <p className="text-slate-600 leading-relaxed">{currentStage.mechanism}</p>
            </div>

            <div className="p-3 bg-mint-50 rounded-2xl border border-mint-100">
              <span className="font-bold text-mint-700 block text-xs mb-0.5">✨ Hasil & Transformasi:</span>
              <p className="text-slate-600 leading-relaxed">{currentStage.outcome}</p>
            </div>
          </div>

          {currentStage.bridgeQuote && (
            <div className="mt-1 p-3 bg-gradient-to-r from-grape-500 to-blossom-500 rounded-2xl text-white text-xs italic text-center font-medium leading-relaxed">
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
                ? 'bg-coral-500 text-white border-coral-500 shadow-sm'
                : 'bg-white hover:bg-coral-50 text-coral-700 border-coral-100 shadow-2xs'
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
            className="flex-1 bg-grape-500 hover:bg-grape-700 text-white text-xs font-bold py-3 rounded-xl transition-colors flex items-center justify-center gap-1 shadow-sm"
          >
            Selanjutnya <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="flex items-center justify-between text-xs text-slate-500">
          <button
            onClick={onOpenCOE}
            className="text-grape-700 hover:text-grape-500 font-bold flex items-center gap-1 transition-colors"
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
              <h3 className="text-base font-bold text-grape-700 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-grape-500" />
                Daftar Teori & Sitasi Akademik Esai
              </h3>
              <button
                onClick={() => setShowTheoryModal(false)}
                className="text-slate-400 hover:text-grape-700 text-xs font-semibold px-2 py-1"
              >
                Tutup
              </button>
            </div>

            <div className="space-y-3 text-xs leading-relaxed">
              {APP_INFO.frameworks.map((fw, idx) => (
                <div key={idx} className={`p-3.5 rounded-2xl border ${FRAMEWORK_TINT[idx % FRAMEWORK_TINT.length]}`}>
                  <p className="font-bold text-slate-950 text-sm">{fw.name}</p>
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
