import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  ArrowRight,
  Plus,
  Check,
  BookOpen
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { VIA_STRENGTHS_CATALOG } from '../../data/essayData';

// Warna per kategori VIA (Wisdom / Courage / Transcendence).
const VIA_CATEGORY_TINT = {
  Wisdom: { surface: 'bg-azure-50', border: 'border-azure-100', chip: 'bg-azure-100 text-azure-700', badge: 'bg-azure-500' },
  Courage: { surface: 'bg-coral-50', border: 'border-coral-100', chip: 'bg-coral-100 text-coral-700', badge: 'bg-coral-500' },
  Transcendence: { surface: 'bg-blossom-50', border: 'border-blossom-100', chip: 'bg-blossom-100 text-blossom-700', badge: 'bg-blossom-500' }
};

const FALLBACK_TINT = { surface: 'bg-mint-50', border: 'border-mint-100', chip: 'bg-mint-100 text-mint-700', badge: 'bg-mint-500' };

const SUB_STEPS = [
  { id: 1, label: '2.1 VIA Strengths' },
  { id: 2, label: '2.2 Timeline' },
  { id: 3, label: '2.3 Dynamic Profile' }
];

const getStrengthNames = (strengths) => {
  if (!strengths) return [];
  return strengths.map(s => (typeof s === 'string' ? s : s.name));
};

export default function Pillar2Self({ user, onUpdateUser, onNavigateNextPilar }) {
  const [subStep, setSubStep] = useState(1);
  const [selectedStrengths, setSelectedStrengths] = useState(getStrengthNames(user.viaStrengths));
  const [timeline, setTimeline] = useState(user.timeline || []);
  const [newChapter, setNewChapter] = useState({ title: '', struggle: '', strengthUsed: '' });
  const [showAddChapter, setShowAddChapter] = useState(false);

  const toggleStrength = (name) => {
    if (selectedStrengths.includes(name)) {
      setSelectedStrengths(prev => prev.filter(s => s !== name));
    } else {
      if (selectedStrengths.length < 3) {
        setSelectedStrengths(prev => [...prev, name]);
      }
    }
  };

  const handleAddChapter = () => {
    if (!newChapter.title || !newChapter.struggle) return;
    setTimeline(prev => [...prev, newChapter]);
    setNewChapter({ title: '', struggle: '', strengthUsed: '' });
    setShowAddChapter(false);
  };

  const handleCompletePilar2 = () => {
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#7c5cf0', '#f2637d', '#3b86e0', '#17b183', '#e5a100']
    });
    if (onUpdateUser) {
      onUpdateUser({
        ...user,
        viaStrengths: selectedStrengths,
        timeline
      });
    }
    if (onNavigateNextPilar) {
      onNavigateNextPilar();
    }
  };

  return (
    <div className="flex flex-col gap-3.5 pb-8 pt-2 px-4 select-none">

      {/* Header Banner */}
      <div className="bg-grape-100 rounded-[26px] p-5 border border-grape-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-2xl bg-grape-500 text-white flex items-center justify-center font-bold text-base shadow-sm">
              2
            </div>
            <div>
              <span className="text-xs font-bold text-grape-700 uppercase tracking-wider">VIA Classification • Domain Self</span>
              <h2 className="text-base font-bold text-slate-950 tracking-tight leading-tight">Pilar 2: Discovery</h2>
            </div>
          </div>
          <span className="text-xs font-semibold bg-white/70 text-grape-700 px-3 py-1 rounded-full">
            Strength Mapping
          </span>
        </div>

        <div className="grid grid-cols-3 gap-2 mt-4 pt-3.5 border-t border-grape-200">
          {SUB_STEPS.map((s) => (
            <button
              key={s.id}
              onClick={() => setSubStep(s.id)}
              className={`py-2 px-2 rounded-xl text-xs font-bold text-center transition-all ${
                subStep === s.id
                  ? 'bg-grape-500 text-white shadow-sm'
                  : 'bg-white/60 text-grape-700 hover:bg-white'
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
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-slate-950 tracking-tight">2.1 Strength Mapping (VIA)</h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Klasifikasi kekuatan karakter Values in Action sebagai modal eksplorasi diri non-patologis (Niemiec, 2020; Esai Bab 2.3.2).
                  </p>
                </div>
                <span className="text-xs font-bold bg-grape-500 text-white px-3 py-1 rounded-full shrink-0">
                  {selectedStrengths.length}/3 Terpilih
                </span>
              </div>

              <div className="flex flex-col gap-2.5 mt-4">
                {VIA_STRENGTHS_CATALOG.map((st) => {
                  const isSelected = selectedStrengths.includes(st.name);
                  const tint = VIA_CATEGORY_TINT[st.category] || FALLBACK_TINT;

                  return (
                    <motion.div
                      key={st.name}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => toggleStrength(st.name)}
                      className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                        isSelected
                          ? 'bg-grape-500 text-white border-grape-500 shadow-md'
                          : `${tint.surface} ${tint.border} text-slate-800 hover:shadow-xs`
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                          isSelected ? 'bg-white/25 text-white' : tint.chip
                        }`}>
                          <Sparkles className="w-4.5 h-4.5" />
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <p className="text-sm font-bold leading-tight">{st.name}</p>
                            <span className={`text-xs px-2 py-0.5 rounded-md font-semibold shrink-0 ${
                              isSelected ? 'bg-white/25 text-white' : `${tint.badge} text-white`
                            }`}>
                              {st.category}
                            </span>
                          </div>
                          <p className={`text-xs mt-1 leading-normal ${isSelected ? 'text-grape-50' : 'text-slate-500'}`}>
                            {st.desc}
                          </p>
                        </div>
                      </div>

                      <div className={`w-5.5 h-5.5 rounded-full flex items-center justify-center shrink-0 ml-2 border ${
                        isSelected ? 'bg-white text-grape-700 border-white' : 'border-slate-300 bg-white/70'
                      }`}>
                        {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <button
                disabled={selectedStrengths.length < 1}
                onClick={() => setSubStep(2)}
                className="w-full mt-4 bg-grape-500 hover:bg-grape-700 disabled:bg-slate-200 disabled:text-slate-400 text-white text-xs font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-sm"
              >
                Lanjut ke Identity Timeline <ArrowRight className="w-4 h-4" />
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
                  <h3 className="text-base font-bold text-slate-950 tracking-tight">2.2 Identity Timeline</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Narrative Identity: Menghubungkan masa lalu & masa kini (McAdams, 2018)</p>
                </div>
                <button
                  onClick={() => setShowAddChapter(true)}
                  className="bg-grape-500 hover:bg-grape-700 text-white p-2 rounded-xl text-xs font-bold flex items-center gap-1 shadow-sm transition-colors shrink-0"
                >
                  <Plus className="w-4 h-4" /> Tambah
                </button>
              </div>

              <div className="relative pl-6 mt-5 border-l-2 border-grape-200 flex flex-col gap-3.5">
                {timeline.map((item, idx) => (
                  <div key={idx} className="relative bg-grape-50 p-4 rounded-2xl border border-grape-100 flex flex-col gap-1.5">
                    <span className="absolute -left-[31px] top-4 w-3.5 h-3.5 rounded-full bg-grape-500 border-2 border-white shadow-xs" />
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-bold text-slate-950 leading-tight">{item.title}</h4>
                      <span className="text-xs bg-grape-500 font-bold text-white px-2.5 py-0.5 rounded-md shrink-0">
                        {item.strengthUsed}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed mt-1">
                      {item.struggle}
                    </p>
                  </div>
                ))}
              </div>

              {showAddChapter && (
                <div className="mt-4 p-4 bg-grape-50 rounded-2xl border border-grape-100 flex flex-col gap-2.5">
                  <h5 className="text-xs font-bold text-grape-700">Tambah Titik Balik Masa Lalu</h5>
                  <input
                    type="text"
                    placeholder="Judul momen (mis: Adaptasi Kuliah / Tugas Akhir)..."
                    value={newChapter.title}
                    onChange={(e) => setNewChapter(prev => ({ ...prev, title: e.target.value }))}
                    className="p-2.5 bg-white border border-white rounded-xl text-xs text-slate-900 focus:outline-none"
                  />
                  <textarea
                    placeholder="Apa tantangan yang dihadapi dan bagaimana kamu bertahan?"
                    value={newChapter.struggle}
                    onChange={(e) => setNewChapter(prev => ({ ...prev, struggle: e.target.value }))}
                    className="p-2.5 bg-white border border-white rounded-xl text-xs text-slate-900 focus:outline-none resize-none h-16 leading-relaxed"
                  />
                  <input
                    type="text"
                    placeholder="Kekuatan yang digunakan (mis: Persistence / Bravery)..."
                    value={newChapter.strengthUsed}
                    onChange={(e) => setNewChapter(prev => ({ ...prev, strengthUsed: e.target.value }))}
                    className="p-2.5 bg-white border border-white rounded-xl text-xs text-slate-900 focus:outline-none"
                  />
                  <div className="flex gap-2 mt-1">
                    <button
                      onClick={handleAddChapter}
                      className="flex-1 bg-grape-500 hover:bg-grape-700 text-white text-xs font-bold py-2 rounded-xl transition-colors"
                    >
                      Simpan Chapter
                    </button>
                    <button
                      onClick={() => setShowAddChapter(false)}
                      className="px-3 bg-white text-slate-600 text-xs font-bold rounded-xl border border-slate-200"
                    >
                      Batal
                    </button>
                  </div>
                </div>
              )}

              <button
                onClick={() => setSubStep(3)}
                className="w-full mt-4 bg-grape-500 hover:bg-grape-700 text-white text-xs font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-sm"
              >
                Lanjut ke Dynamic Profile <ArrowRight className="w-4 h-4" />
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
            <div className="bg-gradient-to-br from-grape-500 via-[#8b62ef] to-blossom-500 text-white rounded-[26px] p-5.5 shadow-lg relative overflow-hidden">
              <div className="absolute -top-12 -right-6 w-36 h-36 bg-white/20 rounded-full blur-2xl pointer-events-none" />

              <div className="relative flex items-center justify-between">
                <span className="text-xs font-bold tracking-widest text-white/70 uppercase">Dynamic Self Profile</span>
                <span className="text-xs bg-white/20 px-2.5 py-0.5 rounded-full text-white font-semibold">
                  Marcia Identity Status (1966)
                </span>
              </div>

              <div className="relative mt-4 flex items-center gap-3.5">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-13 h-13 rounded-full object-cover ring-2 ring-white/50"
                />
                <div>
                  <h4 className="text-base font-bold text-white leading-tight">{user.name}</h4>
                  <p className="text-xs text-white/80 mt-0.5">Status: <strong className="text-white">Identity Moratorium</strong> (Aktif Bereksplorasi & Komitmen Bertahap)</p>
                </div>
              </div>

              <div className="relative mt-4 p-3.5 bg-white/15 rounded-2xl border border-white/20 flex flex-col gap-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-white/80">Eksplorasi Alternatif:</span>
                  <span className="font-bold text-white">Tinggi (85%)</span>
                </div>
                <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden">
                  <motion.div
                    className="bg-white h-full rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: '85%' }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                  />
                </div>

                <div className="flex items-center justify-between text-xs mt-1">
                  <span className="text-white/80">Komitmen Bertahap:</span>
                  <span className="font-bold text-white">Sedang (60%)</span>
                </div>
                <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden">
                  <motion.div
                    className="bg-white h-full rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: '60%' }}
                    transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
                  />
                </div>
              </div>

              <div className="relative mt-4">
                <span className="text-xs text-white/75 block mb-2">3 Top VIA Strengths Terpetakan:</span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedStrengths.map((s, i) => (
                    <span key={i} className="text-xs font-bold bg-white text-grape-700 px-3 py-1 rounded-full shadow-xs">
                      ✨ {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative mt-4 p-3 bg-white/15 rounded-2xl border border-white/20">
                <p className="text-xs font-medium text-white italic leading-relaxed text-center">
                  "Kita sudah punya peta situasi dan tahu modalitas kekuatan positifmu. Sekarang, mari kita rancang strategi bertumbuh yang realistis!"
                </p>
              </div>

              <button
                onClick={handleCompletePilar2}
                className="relative w-full mt-4 bg-white hover:bg-grape-50 text-grape-700 text-xs font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-sm"
              >
                Lanjut ke Pilar 3 (Strategies & Growth) <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="p-4 bg-white rounded-2xl border border-slate-200 text-xs text-slate-700 flex items-start gap-2.5">
              <BookOpen className="w-4 h-4 text-grape-500 shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                <strong>Catatan Esai Bab 2.3.2:</strong> Profil ini dirancang sebagai representasi diri yang dinamis (bukan label kepribadian statis/permanen) yang terus berkembang seiring bertambahnya pengalaman.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
