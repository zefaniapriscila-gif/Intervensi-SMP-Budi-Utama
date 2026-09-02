import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Target, 
  CheckCircle2, 
  ArrowRight, 
  Flame, 
  TrendingUp, 
  Clock, 
  Sliders, 
  Sparkles
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Pillar3Strategies({ user, onUpdateUser, onNavigateNextPilar, onOpenCOE }) {
  const [subStep, setSubStep] = useState(1);
  const [energyCapacity, setEnergyCapacity] = useState(70);
  const [microPractices, setMicroPractices] = useState(user.microPractices || []);
  const [selfEfficacyScore, setSelfEfficacyScore] = useState(78);
  const [reflectionText, setReflectionText] = useState('');

  const triggerConfetti = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 }
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
      origin: { y: 0.7 }
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
    <div className="flex flex-col gap-4 pb-24 pt-2 px-4 select-none">
      
      {/* Header Banner */}
      <div className="bg-white rounded-[26px] p-5 border border-slate-200 shadow-xs">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-slate-100 text-slate-900 flex items-center justify-center font-bold text-base">
              3
            </div>
            <div>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Self-Determination • Bandura 1997</span>
              <h2 className="text-base font-bold text-slate-950 tracking-tight leading-tight">Pilar 3: Navigating Growth</h2>
            </div>
          </div>
          <span className="text-xs font-semibold bg-slate-100 text-slate-800 px-3 py-1 rounded-full border border-slate-200">
            Mastery Experiences
          </span>
        </div>

        <div className="grid grid-cols-3 gap-2 mt-4 pt-3.5 border-t border-slate-100">
          <button
            onClick={() => setSubStep(1)}
            className={`py-2 px-2 rounded-xl text-xs font-bold text-center transition-all ${
              subStep === 1 ? 'bg-black text-white shadow-xs' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            3.1 Roadmap
          </button>
          <button
            onClick={() => setSubStep(2)}
            className={`py-2 px-2 rounded-xl text-xs font-bold text-center transition-all ${
              subStep === 2 ? 'bg-black text-white shadow-xs' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            3.2 Micro-Practice
          </button>
          <button
            onClick={() => setSubStep(3)}
            className={`py-2 px-2 rounded-xl text-xs font-bold text-center transition-all ${
              subStep === 3 ? 'bg-black text-white shadow-xs' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            3.3 Reflection
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {subStep === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            className="flex flex-col gap-4"
          >
            <div className="bg-white rounded-[26px] p-5 border border-slate-200 shadow-xs">
              <h3 className="text-base font-bold text-slate-950 tracking-tight">3.1 Adaptive Roadmap</h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Memecah tujuan besar menjadi milestone realistis (Pilcher et al., 2022)
              </p>

              <div className="mt-4 p-3.5 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col gap-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-900 flex items-center gap-1.5">
                    <Sliders className="w-3.5 h-3.5 text-black" /> Penyesuaian Kapasitas Energi Mental:
                  </span>
                  <span className="font-extrabold text-black">{energyCapacity}% (Realistis)</span>
                </div>
                <input
                  type="range"
                  min="30"
                  max="100"
                  value={energyCapacity}
                  onChange={(e) => setEnergyCapacity(e.target.value)}
                  className="w-full accent-black h-1.5 bg-slate-200 rounded-lg cursor-pointer"
                />
                <p className="text-xs text-slate-500">
                  *Tingkat tantangan disesuaikan secara dinamis agar tidak memicu overwhelmed (SDT Competence).
                </p>
              </div>

              <div className="flex flex-col gap-2.5 mt-4">
                <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-black text-white font-bold text-xs flex items-center justify-center">1</span>
                    <span className="text-sm font-bold text-slate-900">Fondasi Portfolio & CV ATS-Friendly</span>
                  </div>
                  <span className="text-xs bg-slate-200 text-slate-800 px-2.5 py-0.5 rounded-full font-semibold">Selesai</span>
                </div>

                <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-black text-white font-bold text-xs flex items-center justify-center">2</span>
                    <span className="text-sm font-bold text-slate-900">Targeted Outreach ke 5 Alumni Senior Tech</span>
                  </div>
                  <span className="text-xs bg-black text-white px-2.5 py-0.5 rounded-full font-bold">Berjalan</span>
                </div>

                <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 flex items-center justify-between opacity-80">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-slate-200 text-slate-700 font-bold text-xs flex items-center justify-center">3</span>
                    <span className="text-sm font-bold text-slate-700">Simulasi Mock Interview Kognitif dengan COE AI</span>
                  </div>
                  <span className="text-xs bg-slate-200 text-slate-600 px-2.5 py-0.5 rounded-full font-semibold">Tersedia</span>
                </div>
              </div>

              <button
                onClick={() => setSubStep(2)}
                className="w-full mt-4 bg-black hover:bg-slate-800 text-white text-xs font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-xs"
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
            className="flex flex-col gap-4"
          >
            <div className="bg-white rounded-[26px] p-5 border border-slate-200 shadow-xs">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-slate-950 tracking-tight">3.2 Micro-Practice Checklist</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Akumulasi Mastery Experiences (Bandura, 1997)</p>
                </div>
                <div className="flex items-center gap-1 text-black font-extrabold text-xs bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                  <Flame className="w-4 h-4 fill-black" />
                  Efikasi Diri: {selfEfficacyScore}%
                </div>
              </div>

              <div className="flex flex-col gap-2.5 mt-4">
                {microPractices.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => handleTogglePractice(item.id)}
                    className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                      item.completed
                        ? 'bg-slate-50 border-slate-200 text-slate-800'
                        : 'bg-white border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${
                        item.completed ? 'bg-black text-white' : 'border-2 border-slate-300'
                      }`}>
                        {item.completed && <CheckCircle2 className="w-4 h-4" />}
                      </div>
                      <div className="min-w-0">
                        <p className={`text-sm font-semibold truncate ${item.completed ? 'line-through text-slate-400' : 'text-slate-900'}`}>
                          {item.title}
                        </p>
                        <div className="flex items-center gap-2 mt-0.5 text-xs text-slate-500">
                          <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {item.duration}</span>
                          <span>•</span>
                          <span className="font-semibold text-slate-700">{item.domain}</span>
                        </div>
                      </div>
                    </div>

                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                      item.completed ? 'bg-black text-white' : 'bg-slate-100 text-slate-700'
                    }`}>
                      {item.completed ? '+Efficacy' : '09:00'}
                    </span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setSubStep(3)}
                className="w-full mt-4 bg-black hover:bg-slate-800 text-white text-xs font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-xs"
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
            className="flex flex-col gap-4"
          >
            <div className="bg-white rounded-[26px] p-5 border border-slate-200 shadow-xs">
              <h3 className="text-base font-bold text-slate-950 tracking-tight">3.3 Self-Regulated Learning</h3>
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
                  className="p-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-xs text-slate-900 focus:outline-none resize-none leading-relaxed"
                />
              </div>

              <div className="mt-4 p-4 bg-slate-50 rounded-2xl border border-slate-200 text-slate-800 text-xs flex items-center justify-between">
                <div>
                  <p className="font-bold text-slate-950">Efikasi Diri Terakumulasi</p>
                  <p className="text-xs text-slate-500 mt-0.5">Siap melangkah ke sistem dukungan sosial.</p>
                </div>
                <div className="text-right">
                  <span className="text-lg font-extrabold text-black">{selfEfficacyScore}%</span>
                </div>
              </div>

              <button
                onClick={handleCompletePilar3}
                className="w-full mt-4 bg-black hover:bg-slate-800 text-white text-xs font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-xs"
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
