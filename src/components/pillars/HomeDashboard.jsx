import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Brain, 
  Compass, 
  Target, 
  Users, 
  CheckCircle2, 
  ChevronRight, 
  ArrowUpRight, 
  Clock
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function HomeDashboard({ 
  user, 
  onNavigateTab, 
  onOpenCOE, 
  onToggleMicroPractice,
  onOpenDemoStage 
}) {
  const [todoTab, setTodoTab] = useState('scheduled');

  const triggerConfetti = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 }
    });
  };

  return (
    <div className="flex flex-col gap-4 pb-28 pt-3 px-4 select-none">
      
      {/* 1. Header Welcome Widget */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-[26px] p-5 border border-slate-200/90 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.03)] flex flex-col gap-3.5 relative overflow-hidden"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3.5">
            <div className="relative">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-12 h-12 rounded-full object-cover ring-2 ring-slate-200"
              />
              <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-white" />
            </div>
            <div>
              <p className="text-[13px] text-slate-400 font-normal leading-none">Welcome back,</p>
              <h2 className="text-[21px] font-semibold text-slate-950 tracking-tight leading-tight mt-1.5">{user.name}</h2>
            </div>
          </div>
          <button 
            onClick={() => onOpenDemoStage && onOpenDemoStage("pilar1")}
            className="text-[12.5px] font-medium text-slate-800 bg-slate-100 hover:bg-slate-200 px-3.5 py-1.5 rounded-full border border-slate-200 transition-colors"
          >
            4S Active
          </button>
        </div>

        {/* Dynamic Transition Banner */}
        <div 
          onClick={() => onNavigateTab('situation')}
          className="bg-slate-50 hover:bg-slate-100/90 cursor-pointer rounded-2xl p-3.5 border border-slate-200 flex items-start gap-3 transition-all group"
        >
          <div className="w-7 h-7 rounded-xl bg-black text-white flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform shadow-xs">
            <Compass className="w-4 h-4" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <p className="text-[14px] font-semibold text-slate-900 leading-snug pr-2">Fase Transisi: {user.transition}</p>
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
            </div>
            <p className="text-[13px] text-slate-500 line-clamp-2 mt-1.5 leading-relaxed">
              Tantangan: {user.challenges.career}
            </p>
          </div>
        </div>
      </motion.div>

      {/* 2. 4S Model Status Grid */}
      <div className="grid grid-cols-2 gap-3.5">
        <motion.div
          whileTap={{ scale: 0.97 }}
          onClick={() => onNavigateTab('situation')}
          className="bg-white rounded-[24px] p-4 border border-slate-200 shadow-xs cursor-pointer flex flex-col justify-between hover:border-slate-400 transition-all"
        >
          <div className="flex items-center justify-between">
            <div className="w-8 h-8 rounded-xl bg-slate-100 text-slate-900 flex items-center justify-center">
              <Compass className="w-4.5 h-4.5" />
            </div>
            <span className="text-[11.5px] font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-800">
              Pilar 1
            </span>
          </div>
          <div className="mt-3">
            <h4 className="text-[16px] font-semibold text-slate-950 leading-snug">Situation</h4>
            <p className="text-[12.5px] text-slate-500 mt-1.5 leading-snug">Validated • Peta Jelas</p>
          </div>
          <div className="mt-2.5 w-full bg-slate-100 h-2 rounded-full overflow-hidden">
            <div className="bg-black h-full rounded-full w-full" />
          </div>
        </motion.div>

        <motion.div
          whileTap={{ scale: 0.97 }}
          onClick={() => onNavigateTab('self')}
          className="bg-white rounded-[24px] p-4 border border-slate-200 shadow-xs cursor-pointer flex flex-col justify-between hover:border-slate-400 transition-all"
        >
          <div className="flex items-center justify-between">
            <div className="w-8 h-8 rounded-xl bg-slate-100 text-slate-900 flex items-center justify-center">
              <Sparkles className="w-4.5 h-4.5" />
            </div>
            <span className="text-[11.5px] font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-800">
              Pilar 2
            </span>
          </div>
          <div className="mt-3">
            <h4 className="text-[16px] font-semibold text-slate-950 leading-snug">Self Discovery</h4>
            <p className="text-[12.5px] text-slate-500 mt-1.5 leading-snug">3 VIA Strengths</p>
          </div>
          <div className="mt-2.5 w-full bg-slate-100 h-2 rounded-full overflow-hidden">
            <div className="bg-black h-full rounded-full w-[85%]" />
          </div>
        </motion.div>
      </div>

      {/* 3. Today's To-Do / Micro-Practice Widget */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-[26px] p-5 border border-slate-200/90 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.03)]"
      >
        <div className="flex items-center justify-between mb-3.5">
          <div>
            <h3 className="text-[19px] font-semibold text-slate-950 tracking-tight">Today's To Do</h3>
            <p className="text-[12.5px] text-slate-500 mt-1">September 2 • Mastery Accumulation</p>
          </div>

          <div className="bg-slate-100 p-1 rounded-full flex items-center text-[12.5px] font-medium">
            <button
              onClick={() => setTodoTab('scheduled')}
              className={`px-3.5 py-1.5 rounded-full transition-all ${
                todoTab === 'scheduled' ? 'bg-white text-slate-950 shadow-xs font-semibold' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              Scheduled
            </button>
            <button
              onClick={() => setTodoTab('notes')}
              className={`px-3.5 py-1.5 rounded-full transition-all ${
                todoTab === 'notes' ? 'bg-white text-slate-950 shadow-xs font-semibold' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              Notes
            </button>
          </div>
        </div>

        {todoTab === 'scheduled' ? (
          <div className="flex flex-col gap-3">
            {user.microPractices.map((practice) => (
              <div
                key={practice.id}
                onClick={() => {
                  onToggleMicroPractice(practice.id);
                  if (!practice.completed) triggerConfetti();
                }}
                className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                  practice.completed
                    ? 'bg-slate-50 border-slate-200 text-slate-800'
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <button
                    className={`w-5.5 h-5.5 rounded-full flex items-center justify-center transition-all ${
                      practice.completed
                        ? 'bg-black text-white'
                        : 'border-2 border-slate-300 hover:border-slate-400'
                    }`}
                  >
                    {practice.completed && <CheckCircle2 className="w-3.5 h-3.5" />}
                  </button>
                  <div className="min-w-0">
                    <p className={`text-[14.5px] font-medium leading-snug ${practice.completed ? 'line-through text-slate-400' : 'text-slate-900'}`}>
                      {practice.title}
                    </p>
                    <div className="flex items-center gap-2 mt-1.5 text-[12.5px] text-slate-500">
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {practice.duration}</span>
                      <span>•</span>
                      <span className="font-medium text-slate-700">{practice.domain}</span>
                    </div>
                  </div>
                </div>

                <span className={`text-[11.5px] font-semibold px-2.5 py-1.5 rounded-full shrink-0 ml-3 ${
                  practice.completed ? 'bg-black text-white' : 'bg-slate-100 text-slate-700'
                }`}>
                  {practice.completed ? '+Efficacy' : '09:00'}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-slate-50 rounded-2xl p-4 text-[13.5px] text-slate-700 border border-slate-200 leading-relaxed">
            <p className="font-semibold text-slate-900 mb-1.5">Catatan Self-Regulated Learning:</p>
            "Ketika merasa overwhelmed dengan LinkedIn, ingat bahwa tiap orang memiliki kurva adaptasi yang berbeda. Latihan 10 menit lebih bernilai dari overthinking 2 jam."
          </div>
        )}

        <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-[12.5px]">
          <span className="text-slate-500 font-normal">Progress Efikasi Diri</span>
          <button 
            onClick={() => onNavigateTab('strategies')}
            className="font-semibold text-black hover:underline flex items-center gap-1"
          >
            Buka Pilar 3 (Growth) <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </motion.div>

      {/* 4. Growth Circle Widget */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-[26px] p-5 border border-slate-200/90 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.03)] cursor-pointer"
        onClick={() => onNavigateTab('support')}
      >
        <div className="flex items-center justify-between mb-3.5">
          <div className="flex items-center gap-3">
            <div className="grid grid-cols-2 gap-1 w-10 h-10">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80" alt="Peer 1" className="w-4.5 h-4.5 rounded-full object-cover" />
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80" alt="Peer 2" className="w-4.5 h-4.5 rounded-full object-cover" />
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" alt="Peer 3" className="w-4.5 h-4.5 rounded-full object-cover" />
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=80" alt="Peer 4" className="w-4.5 h-4.5 rounded-full object-cover" />
            </div>
            <div>
              <h4 className="text-[16px] font-semibold text-slate-950 tracking-tight leading-snug">{user.circle.name}</h4>
              <p className="text-[12.5px] text-slate-500 mt-1 leading-snug">27 Pesan Baru • {user.circle.members} Teman Seperjuangan</p>
            </div>
          </div>
          <span className="text-[11.5px] font-semibold bg-slate-100 text-slate-800 px-2.5 py-1 rounded-full border border-slate-200 shrink-0">
            Active Prompt
          </span>
        </div>

        <div className="bg-slate-50 rounded-2xl p-3.5 border border-slate-200">
          <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-[0.08em]">Prompt 2-Mingguan</p>
          <p className="text-[13.5px] font-normal text-slate-900 mt-1.5 leading-relaxed line-clamp-3">
            "{user.circle.currentPrompt}"
          </p>
        </div>

        <div className="mt-3.5 flex items-center justify-between">
          <span className="text-[12.5px] font-normal text-slate-500">Budaya Apresiasi Bersama</span>
          <button 
            className="bg-black hover:bg-slate-800 text-white text-[13px] font-semibold px-4 py-2.5 rounded-full flex items-center gap-1.5 shadow-xs transition-colors"
          >
            Buka Circle <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </motion.div>

      {/* 5. COE Socratic Coach Card */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-black text-white rounded-[26px] p-5 shadow-md relative overflow-hidden"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-white/10 text-white flex items-center justify-center border border-white/20">
              <Brain className="w-4.5 h-4.5" />
            </div>
            <div>
              <h4 className="text-[16px] font-semibold text-white tracking-tight leading-snug">COE Socratic Coach</h4>
              <p className="text-[12.5px] text-slate-400 mt-1">Reflective Modal & Scaffolding</p>
            </div>
          </div>
          <span className="text-[11.5px] font-medium bg-white/15 text-slate-200 px-2.5 py-1 rounded-full border border-white/20 shrink-0">
            Anti-Offloading
          </span>
        </div>

        <p className="text-[13.5px] text-slate-300 mt-3.5 leading-relaxed">
          "Ketika kamu merasa bingung melangkah, tanyakan: Apa langkah paling kecil yang bisa dieksekusi dalam 10 menit ke depan?"
        </p>

        <div className="mt-4 flex items-center gap-2">
          <button
            onClick={onOpenCOE}
            className="w-full bg-white hover:bg-slate-200 text-black text-[14px] font-semibold py-3 rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Mulai Refleksi Sokratik
          </button>
        </div>
      </motion.div>

    </div>
  );
}
