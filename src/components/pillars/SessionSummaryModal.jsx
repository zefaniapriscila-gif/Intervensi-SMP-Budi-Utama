import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  CheckCircle2,
  Compass,
  Target,
  Users,
  X,
  ArrowRight,
  RotateCcw,
  Star,
  Award,
  BookOpen
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function SessionSummaryModal({
  isOpen,
  onClose,
  user,
  onRestartJourney,
  onContinueGrowth
}) {
  const [npsScore, setNpsScore] = useState(9);
  const [npsFeedback, setNpsFeedback] = useState('');
  const [submittedNps, setSubmittedNps] = useState(false);

  if (!isOpen) return null;

  const completedPractices = user.microPractices?.filter(p => p.completed)?.length || 0;
  const totalPractices = user.microPractices?.length || 3;

  const handleNpsSubmit = () => {
    setSubmittedNps(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#17b183', '#7c5cf0', '#f2637d', '#e5a100']
    });
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/45 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        className="bg-white text-slate-900 rounded-t-[32px] sm:rounded-[32px] max-w-lg w-full max-h-[90vh] sm:max-h-[680px] flex flex-col border border-slate-200 shadow-2xl overflow-hidden"
      >
        {/* Modal Header */}
        <div className="p-5 bg-gradient-to-r from-grape-500 via-[#8b62ef] to-blossom-500 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white/20 text-white flex items-center justify-center shadow-xs">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold tracking-tight">Rangkuman Sesi GROWTH</h3>
                <span className="text-[10px] bg-white/20 text-white px-2 py-0.5 rounded-full font-bold">
                  Step 16 Flowchart
                </span>
              </div>
              <p className="text-xs text-white/85 mt-0.5">
                Integrasi 4S STT • Personal Growth Initiative (PGI)
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 p-5 overflow-y-auto space-y-4 no-scrollbar bg-[#faf8ff] text-xs">
          
          {/* Hero Celebration Card */}
          <div className="p-4.5 bg-white rounded-2xl border border-grape-100 shadow-xs flex items-center gap-3.5">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-12 h-12 rounded-full object-cover ring-2 ring-grape-200"
            />
            <div className="min-w-0">
              <h4 className="text-sm font-bold text-slate-950 truncate">
                Luar biasa, {user.name.split(' ')[0]}!
              </h4>
              <p className="text-slate-600 text-[11.5px] mt-0.5 leading-snug">
                Kamu telah menyelesaikan alur navigasi transisi 4S STT hari ini. Kapasitas adaptif dan PGI-mu semakin berkembang!
              </p>
            </div>
          </div>

          {/* 4S Pillar Summary Recap */}
          <div className="grid grid-cols-2 gap-2.5">
            {/* 1. Situation */}
            <div className="p-3.5 bg-mint-50 rounded-2xl border border-mint-100">
              <div className="flex items-center gap-1.5 text-mint-700 font-bold mb-1">
                <Compass className="w-3.5 h-3.5" /> Pilar 1: Situation
              </div>
              <p className="text-slate-700 font-semibold truncate">{user.transition}</p>
              <p className="text-[10.5px] text-mint-700 mt-1">Status: Validated & Accepted</p>
            </div>

            {/* 2. Self */}
            <div className="p-3.5 bg-grape-50 rounded-2xl border border-grape-100">
              <div className="flex items-center gap-1.5 text-grape-700 font-bold mb-1">
                <Sparkles className="w-3.5 h-3.5" /> Pilar 2: Self
              </div>
              <p className="text-slate-700 font-semibold truncate">
                {user.viaStrengths?.map(s => (typeof s === 'string' ? s : s.name)).slice(0, 2).join(', ')}
              </p>
              <p className="text-[10.5px] text-grape-700 mt-1">VIA Strengths Terpetakan</p>
            </div>

            {/* 3. Strategies */}
            <div className="p-3.5 bg-sunny-50 rounded-2xl border border-sunny-100">
              <div className="flex items-center gap-1.5 text-sunny-700 font-bold mb-1">
                <Target className="w-3.5 h-3.5" /> Pilar 3: Strategies
              </div>
              <p className="text-slate-700 font-semibold">
                {completedPractices}/{totalPractices} Micro-Practices
              </p>
              <p className="text-[10.5px] text-sunny-700 mt-1">Mastery Experiences (+Efficacy)</p>
            </div>

            {/* 4. Support */}
            <div className="p-3.5 bg-coral-50 rounded-2xl border border-coral-100">
              <div className="flex items-center gap-1.5 text-coral-700 font-bold mb-1">
                <Users className="w-3.5 h-3.5" /> Pilar 4: Support
              </div>
              <p className="text-slate-700 font-semibold truncate">{user.circle?.name}</p>
              <p className="text-[10.5px] text-coral-700 mt-1">Shared Journey & Belonging</p>
            </div>
          </div>

          {/* Academic Reflection Quote */}
          <div className="p-3.5 bg-white rounded-2xl border border-slate-200 text-slate-700 leading-relaxed">
            <p className="font-bold text-grape-700 flex items-center gap-1.5 mb-1">
              <BookOpen className="w-3.5 h-3.5 text-grape-500" />
              Mekanisme Berkelanjutan (Esai Bab 2.3 & 2.5):
            </p>
            <p className="text-[11.5px] text-slate-600">
              "Pertumbuhan personal (PGI) bukan peristiwa satu malam, melainkan siklus berkesinambungan antara pemahaman situasi, pengenalan kekuatan diri, eksekusi latihan mikro, dan dukungan kolektif."
            </p>
          </div>

          {/* NPS Evaluation Widget (Esai Bab 2.4 - Indikator Keberhasilan Reichheld 2003) */}
          <div className="p-4 bg-azure-50 rounded-2xl border border-azure-100 space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="font-bold text-azure-800 text-[11.5px] flex items-center gap-1">
                <Star className="w-3.5 h-3.5 fill-azure-500 text-azure-500" />
                Evaluasi Keberhasilan & NPS (Reichheld, 2003)
              </span>
              <span className="text-[10.5px] font-bold text-azure-700 bg-white px-2 py-0.5 rounded-full">
                Skor: {npsScore}/10
              </span>
            </div>

            <p className="text-[11px] text-slate-600">
              Seberapa besar kemungkinanmu merekomendasikan platform GROWTH kepada sesama mahasiswa/emerging adult yang sedang menghadapi transisi?
            </p>

            {!submittedNps ? (
              <div className="space-y-2.5 pt-1">
                <div className="flex justify-between gap-1">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                    <button
                      key={num}
                      onClick={() => setNpsScore(num)}
                      className={`flex-1 py-1.5 rounded-lg font-bold text-[11px] transition-all ${
                        npsScore === num
                          ? 'bg-azure-500 text-white shadow-xs scale-105'
                          : 'bg-white text-slate-700 hover:bg-azure-100'
                      }`}
                    >
                      {num}
                    </button>
                  ))}
                </div>
                <input
                  type="text"
                  placeholder="Umpan balik kualitatif pengalaman penggunaan (opsional)..."
                  value={npsFeedback}
                  onChange={(e) => setNpsFeedback(e.target.value)}
                  className="w-full p-2.5 bg-white border border-azure-200 rounded-xl text-xs text-slate-800 focus:outline-none"
                />
                <button
                  onClick={handleNpsSubmit}
                  className="w-full bg-azure-500 hover:bg-azure-700 text-white font-bold py-2 rounded-xl transition-colors shadow-xs"
                >
                  Kirim Evaluasi NPS
                </button>
              </div>
            ) : (
              <div className="p-2.5 bg-white rounded-xl text-center text-mint-700 font-bold flex items-center justify-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" /> Terima kasih! Data NPS & umpan balik telah tersimpan.
              </div>
            )}
          </div>

        </div>

        {/* Modal Footer Controls (Flowchart Decision: Lanjutkan Perjalanan?) */}
        <div className="p-4 bg-white border-t border-slate-200 flex items-center gap-2.5 shrink-0">
          <button
            onClick={() => {
              onClose();
              if (onRestartJourney) onRestartJourney();
            }}
            className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3 rounded-2xl transition-colors flex items-center justify-center gap-1 text-xs"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Ulangi Sesi
          </button>

          <button
            onClick={() => {
              onClose();
              if (onContinueGrowth) onContinueGrowth();
            }}
            className="flex-2 bg-gradient-to-r from-grape-500 to-blossom-500 hover:opacity-95 text-white font-bold py-3 rounded-2xl transition-all flex items-center justify-center gap-1.5 text-xs shadow-md"
          >
            Lanjut Perjalanan Berkelanjutan <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </motion.div>
    </div>
  );
}
