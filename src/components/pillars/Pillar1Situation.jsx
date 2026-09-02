import React, { useState, useEffect } from 'react';
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

// Tiap kategori transisi dapat pastel sendiri supaya daftar tidak monoton.
const CATEGORY_TINT = [
  { surface: 'bg-blossom-50', border: 'border-blossom-100', chip: 'bg-blossom-100 text-blossom-700' },
  { surface: 'bg-azure-50', border: 'border-azure-100', chip: 'bg-azure-100 text-azure-700' },
  { surface: 'bg-sunny-50', border: 'border-sunny-100', chip: 'bg-sunny-100 text-sunny-700' },
  { surface: 'bg-grape-50', border: 'border-grape-100', chip: 'bg-grape-100 text-grape-700' },
  { surface: 'bg-coral-50', border: 'border-coral-100', chip: 'bg-coral-100 text-coral-700' }
];

// 4 domain tantangan, warna sama persis dengan kartu Challenge di dashboard.
const CHALLENGE_DOMAINS = [
  { key: 'psychological', no: 1, label: 'Domain Psikologis', surface: 'bg-blossom-50', border: 'border-blossom-100', pill: 'bg-blossom-500', accent: 'accent-blossom-500', track: 'bg-blossom-100' },
  { key: 'social', no: 2, label: 'Domain Sosial', surface: 'bg-grape-50', border: 'border-grape-100', pill: 'bg-grape-500', accent: 'accent-grape-500', track: 'bg-grape-100' },
  { key: 'financial', no: 3, label: 'Domain Finansial', surface: 'bg-sunny-50', border: 'border-sunny-100', pill: 'bg-sunny-500', accent: 'accent-sunny-500', track: 'bg-sunny-100' },
  { key: 'career', no: 4, label: 'Domain Karir & Akademik', surface: 'bg-azure-50', border: 'border-azure-100', pill: 'bg-azure-500', accent: 'accent-azure-500', track: 'bg-azure-100' }
];

const SUB_STEPS = [
  { id: 1, label: '1.1 Mapping' },
  { id: 2, label: '1.2 Assessment' },
  { id: 3, label: '1.3 Evolution' }
];

export default function Pillar1Situation({ user, onUpdateUser, onNavigateNextPilar, onOpenCOE }) {
  const [subStep, setSubStep] = useState(1);
  const [selectedTransition, setSelectedTransition] = useState(user.transition);
  const [narrativeText, setNarrativeText] = useState(user.narrative);
  const [scores, setScores] = useState(user.scores);
  const [challenges, setChallenges] = useState(user.challenges);
  const [canControl, setCanControl] = useState(user.control.canControl);
  const [mustAccept, setMustAccept] = useState(user.control.mustAccept);
  const [showValidationModal, setShowValidationModal] = useState(false);

  useEffect(() => {
    setSelectedTransition(user.transition);
    setNarrativeText(user.narrative);
    setScores(user.scores);
    setChallenges(user.challenges);
    setCanControl(user.control.canControl);
    setMustAccept(user.control.mustAccept);
  }, [user]);

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
      origin: { y: 0.7 },
      colors: ['#17b183', '#3b86e0', '#7c5cf0', '#f2637d', '#e5a100']
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
    <div className="flex flex-col gap-3.5 pb-8 pt-2 px-4 select-none">

      {/* Header Banner */}
      <div className="bg-mint-100 rounded-[26px] p-5 border border-mint-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-2xl bg-mint-500 text-white flex items-center justify-center font-bold text-base shadow-sm">
              1
            </div>
            <div>
              <span className="text-xs font-bold text-mint-700 uppercase tracking-wider">Schlossberg STT • Domain Situation</span>
              <h2 className="text-base font-bold text-slate-950 tracking-tight leading-tight">Pilar 1: Life Transition</h2>
            </div>
          </div>
          <span className="text-xs font-semibold bg-white/70 text-mint-700 px-3 py-1 rounded-full">
            Intercept & Validate
          </span>
        </div>

        <div className="grid grid-cols-3 gap-2 mt-4 pt-3.5 border-t border-mint-200">
          {SUB_STEPS.map((s) => (
            <button
              key={s.id}
              onClick={() => setSubStep(s.id)}
              className={`py-2 px-2.5 rounded-xl text-xs font-bold text-center transition-all ${
                subStep === s.id
                  ? 'bg-mint-500 text-white shadow-sm'
                  : 'bg-white/60 text-mint-700 hover:bg-white'
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
              <h3 className="text-base font-bold text-slate-950 tracking-tight">1.1 Transition Mapping</h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Pilih jenis transisi hidup dominan untuk memecah <em>future anxiety</em> yang kabur menjadi situasi nyata dan terdefinisi.
              </p>

              <div className="flex flex-col gap-2.5 mt-4">
                {TRANSITION_CATEGORIES.map((cat, idx) => {
                  const Icon = getIcon(cat.icon);
                  const isSelected = selectedTransition === cat.title;
                  const tint = CATEGORY_TINT[idx % CATEGORY_TINT.length];

                  return (
                    <motion.div
                      key={cat.id}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedTransition(cat.title)}
                      className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center gap-3.5 ${
                        isSelected
                          ? 'bg-mint-500 text-white border-mint-500 shadow-md'
                          : `${tint.surface} ${tint.border} text-slate-800 hover:shadow-xs`
                      }`}
                    >
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                        isSelected ? 'bg-white/25 text-white' : tint.chip
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-bold leading-tight truncate">{cat.title}</p>
                        <p className={`text-xs mt-0.5 line-clamp-1 ${isSelected ? 'text-mint-50' : 'text-slate-500'}`}>
                          {cat.desc}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <div className="bg-white rounded-[26px] p-5 border border-slate-200/80 shadow-xs">
              <div className="flex items-center justify-between mb-2.5">
                <h4 className="text-sm font-bold text-slate-950">Narasi Situasi Bebas</h4>
                <button
                  onClick={onOpenCOE}
                  className="text-xs font-bold text-grape-700 bg-grape-50 px-2.5 py-1 rounded-full flex items-center gap-1 hover:bg-grape-100 transition-colors"
                >
                  <Sparkles className="w-3.5 h-3.5" /> Bantuan COE AI
                </button>
              </div>
              <textarea
                rows={4}
                value={narrativeText}
                onChange={(e) => setNarrativeText(e.target.value)}
                placeholder="Tuliskan 1-2 paragraf mengenai situasi transisi ini..."
                className="w-full p-3.5 bg-mint-50 border border-mint-100 rounded-2xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-mint-200 resize-none leading-relaxed"
              />
              <p className="text-xs text-slate-400 mt-2">
                *Menuliskan konkret mengaktifkan prefrontal cortex untuk meredakan respon amigdala.
              </p>

              <button
                onClick={() => setSubStep(2)}
                className="w-full mt-4 bg-mint-500 hover:bg-mint-700 text-white text-xs font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-sm"
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
            className="flex flex-col gap-3.5"
          >
            <div className="bg-white rounded-[26px] p-5 border border-slate-200/80 shadow-xs">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-slate-950 tracking-tight">1.2 Challenge Assessment</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Beri skor kesulitan (1-10) di 4 domain tantangan</p>
                </div>
                <button
                  onClick={() => setShowValidationModal(true)}
                  className="bg-azure-100 text-azure-700 px-3 py-1 rounded-xl text-xs font-bold flex items-center gap-1 hover:bg-azure-200 transition-colors"
                >
                  <Info className="w-3.5 h-3.5" /> Validasi
                </button>
              </div>

              <div className="flex flex-col gap-3 mt-4">
                {CHALLENGE_DOMAINS.map((d) => (
                  <div
                    key={d.key}
                    className={`p-3.5 ${d.surface} rounded-2xl border ${d.border} flex flex-col gap-2`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-900">{d.no}. {d.label}</span>
                      <span className={`text-xs font-extrabold px-2.5 py-0.5 rounded-md ${d.pill} text-white`}>
                        {scores[d.key]}/10
                      </span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="10"
                      value={scores[d.key]}
                      onChange={(e) => handleScoreChange(d.key, e.target.value)}
                      className={`w-full ${d.accent} h-1.5 ${d.track} rounded-lg cursor-pointer`}
                    />
                    <input
                      type="text"
                      value={challenges[d.key]}
                      onChange={(e) => setChallenges(prev => ({ ...prev, [d.key]: e.target.value }))}
                      className="p-2.5 bg-white border border-white rounded-xl text-xs text-slate-900 focus:outline-none"
                    />
                  </div>
                ))}
              </div>

              <div className="mt-4 p-4 bg-mint-50 rounded-2xl border border-mint-100 text-slate-900 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-mint-700 shrink-0 mt-0.5" />
                <div className="text-xs leading-relaxed">
                  <p className="font-bold text-mint-700">Validasi Ilmiah:</p>
                  Semua tantangan ini adalah respons adaptif normal terhadap transisi hidup. Riset membuktikan 78%+ emerging adult mengalami fase yang serupa.
                </div>
              </div>

              <button
                onClick={() => setSubStep(3)}
                className="w-full mt-4 bg-mint-500 hover:bg-mint-700 text-white text-xs font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-sm"
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
            className="flex flex-col gap-3.5"
          >
            <div className="bg-white rounded-[26px] p-5 border border-slate-200/80 shadow-xs">
              <h3 className="text-base font-bold text-slate-950 tracking-tight">1.3 Acceptance Framework</h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Penerimaan bukan berarti pasrah, melainkan mengalokasikan energi mental ke hal produktif.
              </p>

              <div className="flex flex-col gap-3 mt-4">
                <div className="p-3.5 bg-mint-50 border border-mint-100 rounded-2xl">
                  <span className="text-xs font-bold text-mint-700 flex items-center gap-1.5">
                    🎯 1 Hal yang Berada di Bawah Kendaliku:
                  </span>
                  <input
                    type="text"
                    value={canControl}
                    onChange={(e) => setCanControl(e.target.value)}
                    className="w-full mt-2 p-2.5 bg-white border border-white rounded-xl text-xs text-slate-900 focus:outline-none"
                  />
                </div>

                <div className="p-3.5 bg-azure-50 border border-azure-100 rounded-2xl">
                  <span className="text-xs font-bold text-azure-700 flex items-center gap-1.5">
                    🕊️ 1 Hal yang Diterima & Dilepaskan (Luar Kendali):
                  </span>
                  <input
                    type="text"
                    value={mustAccept}
                    onChange={(e) => setMustAccept(e.target.value)}
                    className="w-full mt-2 p-2.5 bg-white border border-white rounded-xl text-xs text-slate-900 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-mint-500 via-[#12a087] to-azure-500 text-white rounded-[26px] p-5.5 shadow-lg relative overflow-hidden">
              <div className="absolute -top-10 -right-8 w-32 h-32 bg-white/20 rounded-full blur-2xl pointer-events-none" />

              <div className="relative flex items-center justify-between">
                <span className="text-xs font-bold tracking-widest text-white/70 uppercase">Evolution Domain Card</span>
                <span className="text-xs bg-white/20 px-2.5 py-0.5 rounded-full text-white font-semibold">
                  Confidence Unlocked
                </span>
              </div>

              <h4 className="relative text-base font-bold text-white mt-2.5 leading-tight">
                {selectedTransition}
              </h4>
              <p className="relative text-xs text-white/85 mt-1.5 leading-relaxed line-clamp-2">
                "{narrativeText}"
              </p>

              <div className="relative grid grid-cols-2 gap-2 mt-4 pt-3.5 border-t border-white/20">
                <div className="bg-white/15 rounded-xl p-2.5">
                  <span className="text-xs text-white/75">Psychological</span>
                  <p className="text-sm font-bold text-white mt-0.5">{scores.psychological}/10</p>
                </div>
                <div className="bg-white/15 rounded-xl p-2.5">
                  <span className="text-xs text-white/75">Social Support</span>
                  <p className="text-sm font-bold text-white mt-0.5">{scores.social}/10</p>
                </div>
                <div className="bg-white/15 rounded-xl p-2.5">
                  <span className="text-xs text-white/75">Financial</span>
                  <p className="text-sm font-bold text-white mt-0.5">{scores.financial}/10</p>
                </div>
                <div className="bg-white/15 rounded-xl p-2.5">
                  <span className="text-xs text-white/75">Career/Academic</span>
                  <p className="text-sm font-bold text-white mt-0.5">{scores.career}/10</p>
                </div>
              </div>

              <div className="relative mt-4 p-3 bg-white/15 rounded-2xl border border-white/20">
                <p className="text-xs font-medium text-white italic leading-relaxed text-center">
                  "Sekarang kita sudah tahu medan perangnya. Yuk, kita lihat bekal apa saja yang sudah kamu miliki."
                </p>
              </div>

              <button
                onClick={handleCompletePilar1}
                className="relative w-full mt-4 bg-white hover:bg-mint-50 text-mint-700 text-xs font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-sm"
              >
                Lanjut ke Pilar 2 (Self Discovery) <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {showValidationModal && (
        <div className="fixed inset-0 bg-slate-950/50 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-[26px] p-6 max-w-sm w-full shadow-2xl border border-slate-200"
          >
            <div className="w-11 h-11 rounded-2xl bg-mint-100 text-mint-700 flex items-center justify-center mb-3.5">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-950">Psikoedukasi Validasi Transisi</h3>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              Banyak emerging adult merasa "sendirian" dalam masalahnya dan menganggap diri "aneh" atau "gagal" karena merasa tertekan.
            </p>
            <div className="my-3.5 p-3.5 bg-azure-50 rounded-2xl border border-azure-100 text-xs text-slate-700 space-y-1.5">
              <p>• <strong className="text-azure-700">Arnett (2000):</strong> 5 karakteristik ketidakstabilan adalah lumrah.</p>
              <p>• <strong className="text-azure-700">Kato et al. (2017):</strong> Isolasi memperparah failure to launch, validasi memutus spiral isolasi.</p>
            </div>
            <button
              onClick={() => setShowValidationModal(false)}
              className="w-full bg-mint-500 hover:bg-mint-700 text-white text-xs font-bold py-2.5 rounded-xl transition-colors"
            >
              Saya Mengerti
            </button>
          </motion.div>
        </div>
      )}

    </div>
  );
}
