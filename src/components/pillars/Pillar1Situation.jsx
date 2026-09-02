import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Compass, 
  GraduationCap, 
  Briefcase, 
  MapPin, 
  Coins, 
  HeartCrack, 
  ArrowRight, 
  ShieldCheck, 
  Info, 
  Sparkles
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { TRANSITION_CATEGORIES } from '../../data/essayData';

export default function Pillar1Situation({ user, onUpdateUser, onNavigateNextPilar, onOpenCOE }) {
  const [subStep, setSubStep] = useState(1);
  const [selectedTransition, setSelectedTransition] = useState(user.transition);
  const [narrativeText, setNarrativeText] = useState(user.narrative);
  const [scores, setScores] = useState(user.scores);
  const [challenges, setChallenges] = useState(user.challenges);
  const [canControl, setCanControl] = useState(user.control.canControl);
  const [mustAccept, setMustAccept] = useState(user.control.mustAccept);
  const [showValidationModal, setShowValidationModal] = useState(false);

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'GraduationCap': return GraduationCap;
      case 'Briefcase': return Briefcase;
      case 'MapPin': return MapPin;
      case 'Coins': return Coins;
      case 'HeartCrack': return HeartCrack;
      default: return Compass;
    }
  };

  const handleScoreChange = (domain, val) => {
    setScores(prev => ({ ...prev, [domain]: Number(val) }));
  };

  const handleCompletePilar1 = () => {
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.7 }
    });
    if (onUpdateUser) {
      onUpdateUser({
        ...user,
        transition: selectedTransition,
        narrative: narrativeText,
        scores,
        challenges,
        control: { canControl, mustAccept }
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
              1
            </div>
            <div>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Schlossberg STT • Domain Situation</span>
              <h2 className="text-base font-bold text-slate-950 tracking-tight leading-tight">Pilar 1: Life Transition</h2>
            </div>
          </div>
          <span className="text-xs font-semibold bg-slate-100 text-slate-800 px-3 py-1 rounded-full border border-slate-200">
            Intercept & Validate
          </span>
        </div>

        <div className="grid grid-cols-3 gap-2 mt-4 pt-3.5 border-t border-slate-100">
          <button
            onClick={() => setSubStep(1)}
            className={`py-2 px-2.5 rounded-xl text-xs font-bold text-center transition-all ${
              subStep === 1 ? 'bg-black text-white shadow-xs' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            1.1 Mapping
          </button>
          <button
            onClick={() => setSubStep(2)}
            className={`py-2 px-2.5 rounded-xl text-xs font-bold text-center transition-all ${
              subStep === 2 ? 'bg-black text-white shadow-xs' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            1.2 Assessment
          </button>
          <button
            onClick={() => setSubStep(3)}
            className={`py-2 px-2.5 rounded-xl text-xs font-bold text-center transition-all ${
              subStep === 3 ? 'bg-black text-white shadow-xs' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            1.3 Evolution
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
              <h3 className="text-base font-bold text-slate-950 tracking-tight">1.1 Transition Mapping</h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Pilih jenis transisi hidup dominan untuk memecah <em>future anxiety</em> yang kabur menjadi situasi nyata dan terdefinisi.
              </p>

              <div className="flex flex-col gap-2.5 mt-4">
                {TRANSITION_CATEGORIES.map((cat) => {
                  const Icon = getIcon(cat.icon);
                  const isSelected = selectedTransition === cat.title;

                  return (
                    <div
                      key={cat.id}
                      onClick={() => setSelectedTransition(cat.title)}
                      className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center gap-3.5 ${
                        isSelected
                          ? 'bg-black text-white border-black shadow-sm'
                          : 'bg-slate-50 hover:bg-slate-100/90 border-slate-200 text-slate-800'
                      }`}
                    >
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                        isSelected ? 'bg-white/20 text-white' : 'bg-white text-slate-800 shadow-2xs'
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-bold leading-tight truncate">{cat.title}</p>
                        <p className={`text-xs mt-0.5 line-clamp-1 ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                          {cat.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-white rounded-[26px] p-5 border border-slate-200 shadow-xs">
              <div className="flex items-center justify-between mb-2.5">
                <h4 className="text-sm font-bold text-slate-950">Narasi Situasi Bebas</h4>
                <button
                  onClick={onOpenCOE}
                  className="text-xs font-semibold text-black flex items-center gap-1 hover:underline"
                >
                  <Sparkles className="w-3.5 h-3.5" /> Bantuan COE AI
                </button>
              </div>
              <textarea
                rows={4}
                value={narrativeText}
                onChange={(e) => setNarrativeText(e.target.value)}
                placeholder="Tuliskan 1-2 paragraf mengenai situasi transisi ini..."
                className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-black/10 resize-none leading-relaxed"
              />
              <p className="text-xs text-slate-400 mt-2">
                *Menuliskan konkret mengaktifkan prefrontal cortex untuk meredakan respon amigdala.
              </p>

              <button
                onClick={() => setSubStep(2)}
                className="w-full mt-4 bg-black hover:bg-slate-800 text-white text-xs font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-xs"
              >
                Lanjut ke Challenge Assessment <ArrowRight className="w-4 h-4" />
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
                  <h3 className="text-base font-bold text-slate-950 tracking-tight">1.2 Challenge Assessment</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Beri skor kesulitan (1-10) di 4 domain tantangan</p>
                </div>
                <button
                  onClick={() => setShowValidationModal(true)}
                  className="bg-slate-100 text-slate-800 px-3 py-1 rounded-xl text-xs font-bold flex items-center gap-1 border border-slate-200 hover:bg-slate-200 transition-colors"
                >
                  <Info className="w-3.5 h-3.5" /> Validasi
                </button>
              </div>

              <div className="flex flex-col gap-3.5 mt-4">
                <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900">1. Domain Psikologis</span>
                    <span className="text-xs font-extrabold px-2.5 py-0.5 rounded-md bg-black text-white">
                      {scores.psychological}/10
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={scores.psychological}
                    onChange={(e) => handleScoreChange('psychological', e.target.value)}
                    className="w-full accent-black h-1.5 bg-slate-200 rounded-lg cursor-pointer"
                  />
                  <input
                    type="text"
                    value={challenges.psychological}
                    onChange={(e) => setChallenges(prev => ({ ...prev, psychological: e.target.value }))}
                    className="p-2.5 bg-white border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none"
                  />
                </div>

                <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900">2. Domain Sosial</span>
                    <span className="text-xs font-extrabold px-2.5 py-0.5 rounded-md bg-black text-white">
                      {scores.social}/10
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={scores.social}
                    onChange={(e) => handleScoreChange('social', e.target.value)}
                    className="w-full accent-black h-1.5 bg-slate-200 rounded-lg cursor-pointer"
                  />
                  <input
                    type="text"
                    value={challenges.social}
                    onChange={(e) => setChallenges(prev => ({ ...prev, social: e.target.value }))}
                    className="p-2.5 bg-white border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none"
                  />
                </div>

                <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900">3. Domain Finansial</span>
                    <span className="text-xs font-extrabold px-2.5 py-0.5 rounded-md bg-black text-white">
                      {scores.financial}/10
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={scores.financial}
                    onChange={(e) => handleScoreChange('financial', e.target.value)}
                    className="w-full accent-black h-1.5 bg-slate-200 rounded-lg cursor-pointer"
                  />
                  <input
                    type="text"
                    value={challenges.financial}
                    onChange={(e) => setChallenges(prev => ({ ...prev, financial: e.target.value }))}
                    className="p-2.5 bg-white border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none"
                  />
                </div>

                <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900">4. Domain Karir & Akademik</span>
                    <span className="text-xs font-extrabold px-2.5 py-0.5 rounded-md bg-black text-white">
                      {scores.career}/10
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={scores.career}
                    onChange={(e) => handleScoreChange('career', e.target.value)}
                    className="w-full accent-black h-1.5 bg-slate-200 rounded-lg cursor-pointer"
                  />
                  <input
                    type="text"
                    value={challenges.career}
                    onChange={(e) => setChallenges(prev => ({ ...prev, career: e.target.value }))}
                    className="p-2.5 bg-white border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none"
                  />
                </div>
              </div>

              <div className="mt-4 p-4 bg-slate-50 rounded-2xl border border-slate-200 text-slate-900 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-black shrink-0 mt-0.5" />
                <div className="text-xs leading-relaxed">
                  <p className="font-bold text-slate-950">Validasi Ilmiah:</p>
                  Semua tantangan ini adalah respons adaptif normal terhadap transisi hidup. Riset membuktikan 78%+ emerging adult mengalami fase yang serupa.
                </div>
              </div>

              <button
                onClick={() => setSubStep(3)}
                className="w-full mt-4 bg-black hover:bg-slate-800 text-white text-xs font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-xs"
              >
                Lanjut ke Acceptance Framework <ArrowRight className="w-4 h-4" />
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
              <h3 className="text-base font-bold text-slate-950 tracking-tight">1.3 Acceptance Framework</h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Penerimaan bukan berarti pasrah, melainkan mengalokasikan energi mental ke hal produktif.
              </p>

              <div className="flex flex-col gap-3.5 mt-4">
                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-2xl">
                  <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                    🎯 1 Hal yang Berada di Bawah Kendaliku:
                  </span>
                  <input
                    type="text"
                    value={canControl}
                    onChange={(e) => setCanControl(e.target.value)}
                    className="w-full mt-2 p-2.5 bg-white border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none"
                  />
                </div>

                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-2xl">
                  <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                    🕊️ 1 Hal yang Diterima & Dilepaskan (Luar Kendali):
                  </span>
                  <input
                    type="text"
                    value={mustAccept}
                    onChange={(e) => setMustAccept(e.target.value)}
                    className="w-full mt-2 p-2.5 bg-white border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="bg-black text-white rounded-[26px] p-5.5 shadow-md border border-slate-800 relative overflow-hidden">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold tracking-widest text-slate-400 uppercase">Evolution Domain Card</span>
                <span className="text-xs bg-white/10 px-2.5 py-0.5 rounded-full text-slate-200">
                  Confidence Unlocked
                </span>
              </div>

              <h4 className="text-base font-bold text-white mt-2.5 leading-tight">
                {selectedTransition}
              </h4>
              <p className="text-xs text-slate-300 mt-1.5 leading-relaxed line-clamp-2">
                "{narrativeText}"
              </p>

              <div className="grid grid-cols-2 gap-2 mt-4 pt-3.5 border-t border-white/10">
                <div className="bg-white/10 rounded-xl p-2.5">
                  <span className="text-xs text-slate-400">Psychological</span>
                  <p className="text-sm font-bold text-white mt-0.5">{scores.psychological}/10</p>
                </div>
                <div className="bg-white/10 rounded-xl p-2.5">
                  <span className="text-xs text-slate-400">Social Support</span>
                  <p className="text-sm font-bold text-white mt-0.5">{scores.social}/10</p>
                </div>
                <div className="bg-white/10 rounded-xl p-2.5">
                  <span className="text-xs text-slate-400">Financial</span>
                  <p className="text-sm font-bold text-white mt-0.5">{scores.financial}/10</p>
                </div>
                <div className="bg-white/10 rounded-xl p-2.5">
                  <span className="text-xs text-slate-400">Career/Academic</span>
                  <p className="text-sm font-bold text-white mt-0.5">{scores.career}/10</p>
                </div>
              </div>

              <div className="mt-4 p-3 bg-white/10 rounded-2xl border border-white/15">
                <p className="text-xs font-medium text-slate-200 italic leading-relaxed text-center">
                  "Sekarang kita sudah tahu medan perangnya. Yuk, kita lihat bekal apa saja yang sudah kamu miliki."
                </p>
              </div>

              <button
                onClick={handleCompletePilar1}
                className="w-full mt-4 bg-white hover:bg-slate-200 text-black text-xs font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-sm"
              >
                Lanjut ke Pilar 2 (Self Discovery) <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {showValidationModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-[26px] p-6 max-w-sm w-full shadow-2xl border border-slate-200"
          >
            <div className="w-11 h-11 rounded-2xl bg-slate-100 text-black flex items-center justify-center mb-3.5">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-950">Psikoedukasi Validasi Transisi</h3>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              Banyak emerging adult merasa "sendirian" dalam masalahnya dan menganggap diri "aneh" atau "gagal" karena merasa tertekan.
            </p>
            <div className="my-3.5 p-3.5 bg-slate-50 rounded-2xl border border-slate-200 text-xs text-slate-700 space-y-1.5">
              <p>• <strong>Arnett (2000):</strong> 5 karakteristik ketidakstabilan adalah lumrah.</p>
              <p>• <strong>Kato et al. (2017):</strong> Isolasi memperparah failure to launch, validasi memutus spiral isolasi.</p>
            </div>
            <button
              onClick={() => setShowValidationModal(false)}
              className="w-full bg-black text-white text-xs font-bold py-2.5 rounded-xl"
            >
              Saya Mengerti
            </button>
          </motion.div>
        </div>
      )}

    </div>
  );
}
