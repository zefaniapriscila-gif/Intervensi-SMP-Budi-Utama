import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CheckCircle2,
  ArrowRight,
  Flame,
  Clock,
  Sliders,
  Sparkles
} from 'lucide-react';
import confetti from 'canvas-confetti';

// Warna badge domain micro-practice, sinkron dengan dashboard.
const DOMAIN_COLOR = {
  Career: 'bg-azure-100 text-azure-700',
  Psychological: 'bg-blossom-100 text-blossom-700',
  Competence: 'bg-sunny-100 text-sunny-700',
  Social: 'bg-mint-100 text-mint-700',
  Self: 'bg-grape-100 text-grape-700'
};

const SUB_STEPS = [
  { id: 1, label: '3.1 Roadmap' },
  { id: 2, label: '3.2 Micro-Practice' },
  { id: 3, label: '3.3 Reflection' }
];

const getRoadmapFromUser = (milestones) => {
  if (!milestones || !milestones.length) {
    return [
      { no: 1, title: 'Fondasi Portfolio & CV ATS-Friendly', status: 'Selesai', surface: 'bg-mint-50', border: 'border-mint-100', chip: 'bg-mint-500 text-white', pill: 'bg-mint-500 text-white' },
      { no: 2, title: 'Targeted Outreach ke 5 Alumni Senior Tech', status: 'Berjalan', surface: 'bg-sunny-50', border: 'border-sunny-200', chip: 'bg-sunny-500 text-slate-900', pill: 'bg-sunny-500 text-slate-900' },
      { no: 3, title: 'Simulasi Mock Interview Kognitif dengan COE AI', status: 'Tersedia', surface: 'bg-slate-50', border: 'border-slate-200', chip: 'bg-slate-200 text-slate-700', pill: 'bg-slate-200 text-slate-700' }
    ];
  }
  return milestones.map((m, idx) => {
    if (m.status === 'completed') {
      return { no: idx + 1, title: m.title, status: 'Selesai', surface: 'bg-mint-50', border: 'border-mint-100', chip: 'bg-mint-500 text-white', pill: 'bg-mint-500 text-white' };
    } else if (m.status === 'in_progress') {
      return { no: idx + 1, title: m.title, status: 'Berjalan', surface: 'bg-sunny-50', border: 'border-sunny-200', chip: 'bg-sunny-500 text-slate-900', pill: 'bg-sunny-500 text-slate-900' };
    } else {
      return { no: idx + 1, title: m.title, status: 'Tersedia', surface: 'bg-slate-50', border: 'border-slate-200', chip: 'bg-slate-200 text-slate-700', pill: 'bg-slate-200 text-slate-700' };
    }
  });
};

export default function Pillar3Strategies({ user, onUpdateUser, onNavigateNextPilar, onOpenCOE }) {
  const [subStep, setSubStep] = useState(1);
  const [energyCapacity, setEnergyCapacity] = useState(70);
  const [microPractices, setMicroPractices] = useState(user.microPractices || []);
  const [selfEfficacyScore, setSelfEfficacyScore] = useState(78);
  const [reflectionText, setReflectionText] = useState('');

  const roadmap = getRoadmapFromUser(user.milestones);

  useEffect(() => {
    setMicroPractices(user.microPractices || []);
  }, [user]);

  const triggerConfetti = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#e5a100', '#17b183', '#7c5cf0', '#f2637d', '#3b86e0']
    });
  };

  const handleTogglePractice = (id) => {
    setMicroPractices(prev =>
      prev.map(p => {
        if (p.id === id) {
          const nextState = !p.completed;
          if (nextState) {
            triggerConfetti();
            setSelfEfficacyScore(score => Math.min(100, score + 4));
          } else {
            setSelfEfficacyScore(score => Math.max(0, score - 4));
          }
          return { ...p, completed: nextState };
        }
        return p;
      })
    );
  };

  const handleCompletePilar3 = () => {
    confetti({
      particleCount: 70,
      spread: 80,
      origin: { y: 0.7 },
      colors: ['#e5a100', '#f4713d', '#17b183', '#7c5cf0']
    });
    if (onUpdateUser) {
      onUpdateUser({
        ...user,
        microPractices
      });
    }
    if (onNavigateNextPilar) {
      onNavigateNextPilar();
    }
  };

  return (
    <div className="flex flex-col gap-3.5 pb-8 pt-2 px-4 select-none">

      {/* Header Banner */}
      <div className="bg-sunny-100 rounded-[26px] p-5 border border-sunny-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-2xl bg-sunny-500 text-slate-900 flex items-center justify-center font-bold text-base shadow-sm">
              3
            </div>
            <div>
              <span className="text-xs font-bold text-sunny-700 uppercase tracking-wider">Self-Determination • Bandura 1997</span>
              <h2 className="text-base font-bold text-slate-950 tracking-tight leading-tight">Pilar 3: Navigating Growth</h2>
            </div>
          </div>
          <span className="text-xs font-semibold bg-white/70 text-sunny-700 px-3 py-1 rounded-full">
            Mastery Experiences
          </span>
        </div>

        <div className="grid grid-cols-3 gap-2 mt-4 pt-3.5 border-t border-sunny-200">
          {SUB_STEPS.map((s) => (
            <button
              key={s.id}
              onClick={() => setSubStep(s.id)}
              className={`py-2 px-2 rounded-xl text-xs font-bold text-center transition-all ${
                subStep === s.id
                  ? 'bg-sunny-500 text-slate-900 shadow-sm'
                  : 'bg-white/60 text-sunny-700 hover:bg-white'
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {subStep === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            className="flex flex-col gap-3.5"
          >
            <div className="bg-white rounded-[26px] p-5 border border-slate-200/80 shadow-xs">
              <h3 className="text-base font-bold text-slate-950 tracking-tight">3.1 Adaptive Roadmap</h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Memecah tujuan besar menjadi milestone realistis (Pilcher et al., 2022)
              </p>

              <div className="mt-4 p-3.5 bg-sunny-50 rounded-2xl border border-sunny-100 flex flex-col gap-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-900 flex items-center gap-1.5">
                    <Sliders className="w-3.5 h-3.5 text-sunny-700" /> Kapasitas Energi Mental:
                  </span>
                  <span className="font-extrabold text-sunny-700">{energyCapacity}% (Realistis)</span>
                </div>
                <input
                  type="range"
                  min="30"
                  max="100"
                  value={energyCapacity}
                  onChange={(e) => setEnergyCapacity(e.target.value)}
                  className="w-full accent-sunny-500 h-1.5 bg-sunny-100 rounded-lg cursor-pointer"
                />
                <p className="text-xs text-slate-500">
                  *Tingkat tantangan disesuaikan secara dinamis agar tidak memicu overwhelmed (SDT Competence).
                </p>
              </div>

              <div className="flex flex-col gap-2.5 mt-4">
                {roadmap.map((m) => (
                  <div
                    key={m.no}
                    className={`p-3.5 ${m.surface} rounded-2xl border ${m.border} flex items-center justify-between gap-3`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span className={`w-6 h-6 rounded-full ${m.chip} font-bold text-xs flex items-center justify-center shrink-0`}>
                        {m.no}
                      </span>
                      <span className="text-sm font-bold text-slate-900 leading-snug">{m.title}</span>
                    </div>
                    <span className={`text-xs ${m.pill} px-2.5 py-0.5 rounded-full font-bold shrink-0`}>
                      {m.status}
                    </span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setSubStep(2)}
                className="w-full mt-4 bg-sunny-500 hover:brightness-95 text-slate-900 text-xs font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-sm"
              >
                Lanjut ke Micro-Practice (Mastery) <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}

        {subStep === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            className="flex flex-col gap-3.5"
          >
            <div className="bg-white rounded-[26px] p-5 border border-slate-200/80 shadow-xs">
              <div className="flex items-center justify-between gap-2">
                <div>
                  <h3 className="text-base font-bold text-slate-950 tracking-tight">3.2 Micro-Practice Checklist</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Akumulasi Mastery Experiences (Bandura, 1997)</p>
                </div>
                <div className="flex items-center gap-1 text-coral-700 font-extrabold text-xs bg-coral-100 px-3 py-1.5 rounded-full shrink-0">
                  <Flame className="w-4 h-4 fill-coral-500 text-coral-500" />
                  {selfEfficacyScore}%
                </div>
              </div>

              <div className="flex flex-col gap-2.5 mt-4">
                {microPractices.map((item) => (
                  <motion.div
                    key={item.id}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleTogglePractice(item.id)}
                    className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-2 ${
                      item.completed
                        ? 'bg-mint-50 border-mint-100'
                        : 'bg-white border-slate-200 hover:border-sunny-200 hover:bg-sunny-50/60'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${
                        item.completed ? 'bg-mint-500 text-white' : 'border-2 border-slate-300'
                      }`}>
                        {item.completed && <CheckCircle2 className="w-4 h-4" />}
                      </div>
                      <div className="min-w-0">
                        <p className={`text-sm font-semibold truncate ${item.completed ? 'line-through text-slate-400' : 'text-slate-900'}`}>
                          {item.title}
                        </p>
                        <div className="flex items-center gap-2 mt-1 text-xs text-slate-500">
                          <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {item.duration}</span>
                          <span className={`font-bold px-2 py-0.5 rounded-md ${DOMAIN_COLOR[item.domain] || 'bg-slate-100 text-slate-700'}`}>
                            {item.domain}
                          </span>
                        </div>
                      </div>
                    </div>

                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full shrink-0 ${
                      item.completed ? 'bg-mint-500 text-white' : 'bg-sunny-100 text-sunny-700'
                    }`}>
                      {item.completed ? '+Efficacy' : '09:00'}
                    </span>
                  </motion.div>
                ))}
              </div>

              <button
                onClick={() => setSubStep(3)}
                className="w-full mt-4 bg-sunny-500 hover:brightness-95 text-slate-900 text-xs font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-sm"
              >
                Lanjut ke Progress Reflection <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}

        {subStep === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            className="flex flex-col gap-3.5"
          >
            <div className="bg-white rounded-[26px] p-5 border border-slate-200/80 shadow-xs">
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-base font-bold text-slate-950 tracking-tight">3.3 Self-Regulated Learning</h3>
                <button
                  onClick={onOpenCOE}
                  className="text-xs font-bold text-grape-700 bg-grape-50 px-2.5 py-1 rounded-full flex items-center gap-1 hover:bg-grape-100 transition-colors shrink-0"
                >
                  <Sparkles className="w-3.5 h-3.5" /> COE AI
                </button>
              </div>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Evaluasi mingguan untuk kalibrasi strategi belajar mandiri (Guo, 2022).
              </p>

              <div className="flex flex-col gap-3 mt-4">
                <label className="text-xs font-bold text-slate-900">
                  Apa 1 penyesuaian strategi yang berhasil membantumu minggu ini?
                </label>
                <textarea
                  rows={3}
                  value={reflectionText}
                  onChange={(e) => setReflectionText(e.target.value)}
                  placeholder="Misal: Membatasi buka LinkedIn hanya 15 menit per hari membuat pikiran jauh lebih tenang..."
                  className="p-3.5 bg-sunny-50 border border-sunny-100 rounded-2xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-sunny-200 resize-none leading-relaxed"
                />
              </div>
            </div>

            <div className="bg-gradient-to-br from-sunny-500 via-[#f08c1e] to-coral-500 text-white rounded-[26px] p-5.5 shadow-lg relative overflow-hidden">
              <div className="absolute -bottom-10 -left-6 w-36 h-36 bg-white/25 rounded-full blur-2xl pointer-events-none" />

              <div className="relative flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold tracking-widest text-white/80 uppercase">Efikasi Diri Terakumulasi</p>
                  <p className="text-xs text-white/85 mt-1">Siap melangkah ke sistem dukungan sosial.</p>
                </div>
                <span className="text-2xl font-extrabold text-white">{selfEfficacyScore}%</span>
              </div>

              <div className="relative mt-3 w-full bg-white/25 h-2.5 rounded-full overflow-hidden">
                <motion.div
                  className="bg-white h-full rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${selfEfficacyScore}%` }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                />
              </div>

              <button
                onClick={handleCompletePilar3}
                className="relative w-full mt-4 bg-white hover:bg-sunny-50 text-coral-700 text-xs font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-sm"
              >
                Lanjut ke Pilar 4 (Support System) <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
