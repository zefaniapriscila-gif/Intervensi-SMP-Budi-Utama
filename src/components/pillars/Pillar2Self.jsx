import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  BookOpen, 
  Compass, 
  ArrowRight, 
  Plus, 
  Check, 
  Brain,
  Award
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { VIA_STRENGTHS_CATALOG } from '../../data/essayData';

export default function Pillar2Self({ user, onUpdateUser, onNavigateNextPilar, onOpenCOE }) {
  const [subStep, setSubStep] = useState(1);
  const [selectedStrengths, setSelectedStrengths] = useState(user.viaStrengths || []);
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
      origin: { y: 0.7 }
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
    <div className="flex flex-col gap-4 pb-24 pt-2 px-4 select-none">
      
      {/* Header Banner */}
      <div className="bg-white rounded-[26px] p-5 border border-slate-200 shadow-xs">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-slate-100 text-slate-900 flex items-center justify-center font-bold text-base">
              2
            </div>
            <div>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">VIA Classification • Domain Self</span>
              <h2 className="text-base font-bold text-slate-950 tracking-tight leading-tight">Pilar 2: Discovery</h2>
            </div>
          </div>
          <span className="text-xs font-semibold bg-slate-100 text-slate-800 px-3 py-1 rounded-full border border-slate-200">
            Strength Mapping
          </span>
        </div>

        <div className="grid grid-cols-3 gap-2 mt-4 pt-3.5 border-t border-slate-100">
          <button
            onClick={() => setSubStep(1)}
            className={`py-2 px-2 rounded-xl text-xs font-bold text-center transition-all ${
              subStep === 1 ? 'bg-black text-white shadow-xs' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            2.1 VIA Strengths
          </button>
          <button
            onClick={() => setSubStep(2)}
            className={`py-2 px-2 rounded-xl text-xs font-bold text-center transition-all ${
              subStep === 2 ? 'bg-black text-white shadow-xs' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            2.2 Timeline
          </button>
          <button
            onClick={() => setSubStep(3)}
            className={`py-2 px-2 rounded-xl text-xs font-bold text-center transition-all ${
              subStep === 3 ? 'bg-black text-white shadow-xs' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            2.3 Dynamic Profile
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
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-slate-950 tracking-tight">2.1 Strength Mapping (VIA)</h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">Pilih 3 modal kekuatan positif manusia (Niemiec, 2020)</p>
                </div>
                <span className="text-xs font-bold bg-black text-white px-3 py-1 rounded-full">
                  {selectedStrengths.length}/3 Terpilih
                </span>
              </div>

              <div className="flex flex-col gap-2.5 mt-4">
                {VIA_STRENGTHS_CATALOG.map((st) => {
                  const isSelected = selectedStrengths.includes(st.name);

                  return (
                    <div
                      key={st.name}
                      onClick={() => toggleStrength(st.name)}
                      className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                        isSelected
                          ? 'bg-black text-white border-black shadow-sm'
                          : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-800'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                          isSelected ? 'bg-white/20 text-white' : 'bg-white text-slate-800 shadow-2xs'
                        }`}>
                          <Sparkles className="w-4.5 h-4.5" />
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <p className="text-sm font-bold leading-tight">{st.name}</p>
                            <span className={`text-xs px-2 py-0.5 rounded-md font-semibold ${
                              isSelected ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-700'
                            }`}>
                              {st.category}
                            </span>
                          </div>
                          <p className={`text-xs mt-1 leading-normal ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                            {st.desc}
                          </p>
                        </div>
                      </div>

                      <div className={`w-5.5 h-5.5 rounded-full flex items-center justify-center shrink-0 ml-2 border ${
                        isSelected ? 'bg-white text-black border-white' : 'border-slate-300'
                      }`}>
                        {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                    </div>
                  );
                })}
              </div>

              <button
                disabled={selectedStrengths.length < 1}
                onClick={() => setSubStep(2)}
                className="w-full mt-4 bg-black hover:bg-slate-800 disabled:bg-slate-200 disabled:text-slate-400 text-white text-xs font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-xs"
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
            className="flex flex-col gap-4"
          >
            <div className="bg-white rounded-[26px] p-5 border border-slate-200 shadow-xs">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-slate-950 tracking-tight">2.2 Identity Timeline</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Narrative Identity: Menghubungkan masa lalu & masa kini (McAdams, 2018)</p>
                </div>
                <button
                  onClick={() => setShowAddChapter(true)}
                  className="bg-black text-white p-2 rounded-xl text-xs font-bold flex items-center gap-1 shadow-xs hover:bg-slate-800 transition-colors"
                >
                  <Plus className="w-4 h-4" /> Tambah
                </button>
              </div>

              <div className="relative pl-6 mt-5 border-l-2 border-slate-200 flex flex-col gap-4">
                {timeline.map((item, idx) => (
                  <div key={idx} className="relative bg-slate-50 p-4 rounded-2xl border border-slate-200 flex flex-col gap-1.5">
                    <span className="absolute -left-[31px] top-4 w-3.5 h-3.5 rounded-full bg-black border-2 border-white shadow-xs" />
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-bold text-slate-950 leading-tight">{item.title}</h4>
                      <span className="text-xs bg-slate-200 font-bold text-slate-800 px-2.5 py-0.5 rounded-md">
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
                <div className="mt-4 p-4 bg-slate-100 rounded-2xl border border-slate-200 flex flex-col gap-2.5">
                  <h5 className="text-xs font-bold text-slate-900">Tambah Titik Balik Masa Lalu</h5>
                  <input
                    type="text"
                    placeholder="Judul momen (mis: Skripsi Selesai)..."
                    value={newChapter.title}
                    onChange={(e) => setNewChapter(prev => ({ ...prev, title: e.target.value }))}
                    className="p-2.5 bg-white border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none"
                  />
                  <textarea
                    placeholder="Apa tantangan yang dihadapi dan bagaimana kamu bertahan?"
                    value={newChapter.struggle}
                    onChange={(e) => setNewChapter(prev => ({ ...prev, struggle: e.target.value }))}
                    className="p-2.5 bg-white border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none resize-none h-16 leading-relaxed"
                  />
                  <input
                    type="text"
                    placeholder="Kekuatan yang digunakan (mis: Persistence)..."
                    value={newChapter.strengthUsed}
                    onChange={(e) => setNewChapter(prev => ({ ...prev, strengthUsed: e.target.value }))}
                    className="p-2.5 bg-white border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none"
                  />
                  <div className="flex gap-2 mt-1">
                    <button
                      onClick={handleAddChapter}
                      className="flex-1 bg-black text-white text-xs font-bold py-2 rounded-xl"
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
                className="w-full mt-4 bg-black hover:bg-slate-800 text-white text-xs font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-xs"
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
            className="flex flex-col gap-4"
          >
            <div className="bg-black text-white rounded-[26px] p-5.5 shadow-md border border-slate-800 relative overflow-hidden">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold tracking-widest text-slate-400 uppercase">Dynamic Self Profile</span>
                <span className="text-xs bg-white/10 px-2.5 py-0.5 rounded-full text-slate-200">
                  Marcia Identity Status
                </span>
              </div>

              <div className="mt-4 flex items-center gap-3.5">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-13 h-13 rounded-full object-cover ring-2 ring-white/30"
                />
                <div>
                  <h4 className="text-base font-bold text-white leading-tight">{user.name}</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Status: <strong>Identity Moratorium</strong> (Aktif Bereksplorasi)</p>
                </div>
              </div>

              <div className="mt-4 p-3.5 bg-white/10 rounded-2xl border border-white/10 flex flex-col gap-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-300">Eksplorasi Alternatif:</span>
                  <span className="font-bold text-white">Tinggi (85%)</span>
                </div>
                <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                  <div className="bg-white h-full rounded-full w-[85%]" />
                </div>

                <div className="flex items-center justify-between text-xs mt-1">
                  <span className="text-slate-300">Komitmen Bertahap:</span>
                  <span className="font-bold text-white">Sedang (60%)</span>
                </div>
                <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                  <div className="bg-white h-full rounded-full w-[60%]" />
                </div>
              </div>

              <div className="mt-4">
                <span className="text-xs text-slate-400 block mb-2">3 Top VIA Strengths Terpetakan:</span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedStrengths.map((s, i) => (
                    <span key={i} className="text-xs font-bold bg-white text-black px-3 py-1 rounded-full shadow-xs">
                      ✨ {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4 p-3 bg-white/10 rounded-2xl border border-white/15">
                <p className="text-xs font-medium text-slate-200 italic leading-relaxed text-center">
                  "Kita sudah punya peta situasi dan tahu amunisi kekuatanmu. Sekarang, bagaimana cara kita melangkah tanpa rasa overwhelm?"
                </p>
              </div>

              <button
                onClick={handleCompletePilar2}
                className="w-full mt-4 bg-white hover:bg-slate-200 text-black text-xs font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-sm"
              >
                Lanjut ke Pilar 3 (Strategies & Growth) <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
