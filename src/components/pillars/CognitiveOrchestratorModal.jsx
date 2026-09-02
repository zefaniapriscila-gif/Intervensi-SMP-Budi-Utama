import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Sparkles, 
  X, 
  Send, 
  HelpCircle, 
  Lightbulb, 
  Layers
} from 'lucide-react';
import { SOCRATIC_PROMPTS } from '../../data/essayData';

export default function CognitiveOrchestratorModal({ isOpen, onClose }) {
  const [activeMode, setActiveMode] = useState('socratic');
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState([
    {
      sender: 'coe',
      text: 'Halo! Saya Cognitive Orchestration Engine (COE). Saya dirancang bukan untuk memberikan jawaban instan (anti-cognitive offloading), melainkan memandu pemikiran kritis dan melatih kapasitas kopingmu.',
      socraticPrompt: 'Apa situasi transisi paling menekan yang sedang kamu hadapi hari ini?'
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  if (!isOpen) return null;

  const handleSendMessage = (customText = null) => {
    const textToSend = customText || query;
    if (!textToSend.trim()) return;

    const userMsg = { sender: 'user', text: textToSend };
    setMessages(prev => [...prev, userMsg]);
    setQuery('');
    setIsTyping(true);

    setTimeout(() => {
      let responseMsg = {};
      if (textToSend.toLowerCase().includes('linkedin') || textToSend.toLowerCase().includes('minder')) {
        responseMsg = {
          sender: 'coe',
          text: 'Saya mendengar rasa cemasmu saat melihat linimasa orang lain.',
          socraticPrompt: 'Mari kita bedah secara sokratik: Ketika kamu melihat pencapaian mereka, apakah ada bukti bahwa peluangmu sendiri berkurang? Dan tindakan kecil apa yang sebenarnya 100% berada di bawah kendalimu saat ini?',
          scaffoldingStep: 'Langkah 1: Akui emosi -> Langkah 2: Pisahkan fakta vs asumsi -> Langkah 3: Tetapkan 1 micro-action.'
        };
      } else if (textToSend.toLowerCase().includes('interview') || textToSend.toLowerCase().includes('wawancara')) {
        responseMsg = {
          sender: 'coe',
          text: 'Kecemasan wawancara adalah respons tubuh yang mencoba mempersiapkanmu.',
          socraticPrompt: 'Apa kekuatan karakter (VIA) yang pernah kamu gunakan saat berhasil melewati ujian atau situasi menegangkan di masa lalu?',
          scaffoldingStep: 'Langkah Scaffolding: Hubungkan modal masa lalu ke simulasi pertanyaan hari ini.'
        };
      } else {
        responseMsg = {
          sender: 'coe',
          text: 'Terima kasih telah merefleksikan hal tersebut secara sadar.',
          socraticPrompt: 'Jika kamu memecah masalah ini menjadi hal yang bisa diselesaikan dalam 15 menit ke depan, apa satu tindakan konkret pertamamu?',
          scaffoldingStep: 'Scaffolding: 1 Tindakan Mikro > 10 Jam Overthinking.'
        };
      }
      setMessages(prev => [...prev, responseMsg]);
      setIsTyping(false);
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        className="bg-white text-slate-900 rounded-t-[32px] sm:rounded-[32px] max-w-md w-full h-[85vh] sm:h-[640px] flex flex-col border border-slate-200 shadow-2xl overflow-hidden"
      >
        {/* Header */}
        <div className="p-4.5 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-2xl bg-black text-white flex items-center justify-center">
              <Brain className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-bold text-slate-950 tracking-tight">Cognitive Orchestration Engine</h3>
                <span className="text-xs bg-slate-200 text-slate-800 px-2 py-0.5 rounded-md font-semibold">
                  COE AI
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">Socratic Dialog • Reflective Modal • Scaffolding</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-200 hover:bg-slate-300 flex items-center justify-center text-slate-700 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Mode Selector */}
        <div className="grid grid-cols-3 gap-1.5 p-2.5 bg-slate-100/80 border-b border-slate-200 text-xs font-semibold">
          <button
            onClick={() => setActiveMode('socratic')}
            className={`py-2 rounded-xl transition-all flex items-center justify-center gap-1.5 ${
              activeMode === 'socratic' ? 'bg-black text-white font-bold shadow-xs' : 'text-slate-600 hover:text-black'
            }`}
          >
            <HelpCircle className="w-3.5 h-3.5" /> Socratic
          </button>
          <button
            onClick={() => setActiveMode('reflective')}
            className={`py-2 rounded-xl transition-all flex items-center justify-center gap-1.5 ${
              activeMode === 'reflective' ? 'bg-black text-white font-bold shadow-xs' : 'text-slate-600 hover:text-black'
            }`}
          >
            <Lightbulb className="w-3.5 h-3.5" /> Reflective
          </button>
          <button
            onClick={() => setActiveMode('scaffolding')}
            className={`py-2 rounded-xl transition-all flex items-center justify-center gap-1.5 ${
              activeMode === 'scaffolding' ? 'bg-black text-white font-bold shadow-xs' : 'text-slate-600 hover:text-black'
            }`}
          >
            <Layers className="w-3.5 h-3.5" /> Scaffolding
          </button>
        </div>

        {/* Chat / Dialogue Scroll Area */}
        <div className="flex-1 p-4.5 overflow-y-auto space-y-4 no-scrollbar text-xs bg-slate-50/50">
          {messages.map((m, idx) => (
            <div
              key={idx}
              className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}
            >
              <div
                className={`max-w-[85%] p-3.5 rounded-2xl leading-relaxed ${
                  m.sender === 'user'
                    ? 'bg-black text-white font-medium rounded-br-xs shadow-xs'
                    : 'bg-white text-slate-800 border border-slate-200/90 rounded-bl-xs shadow-xs'
                }`}
              >
                <p className="text-xs leading-relaxed">{m.text}</p>
                {m.socraticPrompt && (
                  <div className="mt-2.5 pt-2.5 border-t border-slate-100 text-slate-950 font-bold text-xs">
                    💭 <em>{m.socraticPrompt}</em>
                  </div>
                )}
                {m.scaffoldingStep && (
                  <div className="mt-2.5 p-2.5 bg-slate-100 rounded-xl text-xs text-slate-800 font-medium border border-slate-200">
                    🪜 {m.scaffoldingStep}
                  </div>
                )}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center gap-2 text-slate-500 text-xs italic">
              <span className="w-2.5 h-2.5 rounded-full bg-black animate-pulse" />
              COE sedang merumuskan pertanyaan sokratik...
            </div>
          )}
        </div>

        {/* Quick Socratic Prompts */}
        <div className="p-3 bg-white border-t border-slate-200 flex gap-2 overflow-x-auto no-scrollbar">
          {SOCRATIC_PROMPTS.map((p, i) => (
            <button
              key={i}
              onClick={() => handleSendMessage(p.topic)}
              className="text-xs whitespace-nowrap bg-slate-100 hover:bg-slate-200 text-slate-800 px-3 py-1.5 rounded-full border border-slate-200 transition-colors flex items-center gap-1.5 shrink-0"
            >
              <Sparkles className="w-3 h-3 text-black" />
              {p.topic}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="p-3.5 bg-white border-t border-slate-200 flex items-center gap-2.5">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Tuliskan apa yang kamu pikirkan / cemas..."
            className="flex-1 bg-slate-50 text-slate-900 placeholder:text-slate-400 text-xs px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-black"
          />
          <button
            onClick={() => handleSendMessage()}
            className="w-10 h-10 rounded-xl bg-black hover:bg-slate-800 text-white flex items-center justify-center font-bold transition-all shrink-0 shadow-xs"
          >
            <Send className="w-4.5 h-4.5" />
          </button>
        </div>
      </motion.div>
    </div>
  );
}
