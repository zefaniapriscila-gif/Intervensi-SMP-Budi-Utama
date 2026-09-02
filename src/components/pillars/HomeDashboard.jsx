import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Brain,
  Compass,
  Target,
  Users,
  Check,
  ChevronRight,
  ArrowUpRight,
  Clock,
  Search,
  Bell,
  Flame
} from 'lucide-react';
import confetti from 'canvas-confetti';

// Peta warna per domain 4S. surface = latar kartu, ink = teks & ikon di atasnya.
const PILLAR_THEME = {
  situation: {
    surface: 'bg-mint-100',
    border: 'border-mint-200',
    chip: 'bg-mint-500',
    ink: 'text-mint-700',
    track: 'bg-mint-200',
    bar: 'bg-mint-500'
  },
  self: {
    surface: 'bg-grape-100',
    border: 'border-grape-200',
    chip: 'bg-grape-500',
    ink: 'text-grape-700',
    track: 'bg-grape-200',
    bar: 'bg-grape-500'
  },
  strategies: {
    surface: 'bg-sunny-100',
    border: 'border-sunny-200',
    chip: 'bg-sunny-500',
    ink: 'text-sunny-700',
    track: 'bg-sunny-200',
    bar: 'bg-sunny-500'
  },
  support: {
    surface: 'bg-coral-100',
    border: 'border-coral-200',
    chip: 'bg-coral-500',
    ink: 'text-coral-700',
    track: 'bg-coral-200',
    bar: 'bg-coral-500'
  }
};

// Warna badge domain pada daftar micro-practice.
const DOMAIN_COLOR = {
  Career: 'bg-azure-100 text-azure-700',
  Psychological: 'bg-blossom-100 text-blossom-700',
  Competence: 'bg-sunny-100 text-sunny-700',
  Social: 'bg-mint-100 text-mint-700',
  Self: 'bg-grape-100 text-grape-700'
};

const CHALLENGE_DOMAINS = [
  { key: 'psychological', label: 'Psikologis', ink: 'text-blossom-700' },
  { key: 'social', label: 'Sosial', ink: 'text-grape-700' },
  { key: 'financial', label: 'Finansial', ink: 'text-sunny-700' },
  { key: 'career', label: 'Karier', ink: 'text-azure-700' }
];

function ProgressRing({ value, size = 92, stroke = 9 }) {
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - value / 100);

  return (
    <svg width={size} height={size} className="-rotate-90 shrink-0">
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="rgba(255,255,255,0.28)"
        strokeWidth={stroke}
      />
      <motion.circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="#ffffff"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={circumference}
        initial={{ strokeDashoffset: circumference }}
        animate={{ strokeDashoffset: offset }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
      />
    </svg>
  );
}

function PillarCard({ theme, badge, icon: Icon, title, caption, progress, onClick }) {
  const t = PILLAR_THEME[theme];

  return (
    <motion.div
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={`${t.surface} ${t.border} rounded-[26px] p-4 border cursor-pointer flex flex-col justify-between min-h-[152px] transition-shadow hover:shadow-[0_10px_24px_-12px_rgba(0,0,0,0.25)]`}
    >
      <div className="flex items-start justify-between">
        <div className={`w-9 h-9 rounded-2xl ${t.chip} text-white flex items-center justify-center shadow-sm`}>
          <Icon className="w-4.5 h-4.5" />
        </div>
        <span className={`text-[10.5px] font-bold uppercase tracking-[0.06em] ${t.ink} bg-white/60 px-2.5 py-1 rounded-full`}>
          {badge}
        </span>
      </div>

      <div className="mt-3">
        <h4 className="text-[16px] font-bold text-slate-900 leading-snug tracking-tight">{title}</h4>
        <p className={`text-[12px] mt-1 leading-snug ${t.ink}`}>{caption}</p>
      </div>

      <div className="mt-3 flex items-center gap-2.5">
        <div className={`flex-1 h-2 rounded-full overflow-hidden ${t.track}`}>
          <div className={`${t.bar} h-full rounded-full`} style={{ width: `${progress}%` }} />
        </div>
        <span className={`text-[11.5px] font-bold ${t.ink} shrink-0`}>{progress}%</span>
      </div>
    </motion.div>
  );
}

export default function HomeDashboard({
  user,
  onNavigateTab,
  onOpenCOE,
  onToggleMicroPractice,
  onOpenDemoStage
}) {
  const [todoTab, setTodoTab] = useState('scheduled');

  const doneCount = user.microPractices.filter((p) => p.completed).length;
  const totalCount = user.microPractices.length;
  const practiceProgress = Math.round((doneCount / totalCount) * 100);
  // Growth Score = rata-rata 4 pilar (Situation selalu penuh setelah mapping selesai).
  const growthScore = Math.round((100 + 85 + practiceProgress + 70) / 4);

  const triggerConfetti = () => {
    confetti({
      particleCount: 70,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#f2637d', '#7c5cf0', '#17b183', '#e5a100', '#f4713d']
    });
  };

  return (
    <div className="flex flex-col gap-3.5 pb-8 pt-2 px-4 select-none">

      {/* 1. Greeting Bar */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between pt-1 pb-0.5"
      >
        <div className="flex items-center gap-3">
          <div className="relative">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-11 h-11 rounded-full object-cover ring-2 ring-white shadow-sm"
            />
            <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-mint-500 rounded-full border-2 border-white" />
          </div>
          <div>
            <p className="text-[12.5px] text-slate-500 leading-none">Halo,</p>
            <h2 className="text-[19px] font-bold text-slate-950 tracking-tight leading-tight mt-1">
              {user.name.split(' ')[0]}!
            </h2>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => onOpenDemoStage && onOpenDemoStage('pilar1')}
            className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-700 shadow-xs active:scale-95 transition-transform"
          >
            <Search className="w-4 h-4" />
          </button>
          <button
            onClick={() => onNavigateTab('support')}
            className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-700 shadow-xs active:scale-95 transition-transform relative"
          >
            <Bell className="w-4 h-4" />
            <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-blossom-500 text-white text-[9px] font-bold flex items-center justify-center border-2 border-white">
              3
            </span>
          </button>
        </div>
      </motion.div>

      {/* 2. Growth Score Hero */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        onClick={() => onNavigateTab('situation')}
        className="relative overflow-hidden rounded-[28px] p-5 cursor-pointer bg-gradient-to-br from-grape-500 via-[#8b62ef] to-blossom-500 text-white shadow-[0_16px_34px_-18px_rgba(124,92,240,0.9)]"
      >
        <div className="absolute -top-12 -right-10 w-40 h-40 rounded-full bg-white/15 blur-2xl pointer-events-none" />

        <div className="relative flex items-center justify-between gap-4">
          <div className="min-w-0">
            <span className="inline-flex items-center gap-1.5 text-[10.5px] font-bold uppercase tracking-[0.08em] bg-white/20 px-2.5 py-1 rounded-full">
              <Flame className="w-3 h-3" /> Growth Score
            </span>
            <h3 className="text-[26px] font-extrabold tracking-tight mt-2.5 leading-none">{growthScore}%</h3>
            <p className="text-[12.5px] text-white/85 mt-2 leading-snug line-clamp-2">
              Fase: {user.transition}
            </p>
          </div>

          <div className="relative flex items-center justify-center">
            <ProgressRing value={growthScore} />
            <div className="absolute flex flex-col items-center">
              <span className="text-[16px] font-extrabold leading-none">4S</span>
              <span className="text-[9px] text-white/80 mt-1 tracking-wide">MODEL</span>
            </div>
          </div>
        </div>

        <div className="relative mt-4 pt-3.5 border-t border-white/20 flex items-center justify-between">
          <span className="text-[12px] text-white/85">Peta transisi & tantangan aktif</span>
          <span className="text-[12.5px] font-bold flex items-center gap-1">
            Buka <ChevronRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </motion.div>

      {/* 3. Challenge Assessment (skor 4 domain) */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        onClick={() => onNavigateTab('situation')}
        className="bg-blossom-100 border border-blossom-200 rounded-[28px] p-5 cursor-pointer"
      >
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-[17px] font-bold text-slate-950 tracking-tight leading-snug">
              Challenge Assessment
            </h3>
            <p className="text-[12px] text-blossom-700 mt-1">Skala 1–10 • 4 domain tekanan</p>
          </div>
          <div className="w-8 h-8 rounded-full bg-white/70 text-blossom-700 flex items-center justify-center shrink-0">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>

        <div className="grid grid-cols-4 gap-2 mt-4">
          {CHALLENGE_DOMAINS.map((d) => (
            <div key={d.key} className="bg-white/65 rounded-2xl py-2.5 px-1 text-center">
              <p className={`text-[18px] font-extrabold leading-none ${d.ink}`}>
                {user.scores[d.key]}
                <span className="text-[10px] font-semibold text-slate-400">/10</span>
              </p>
              <p className="text-[10px] text-slate-600 mt-1.5 font-medium">{d.label}</p>
            </div>
          ))}
        </div>

        <p className="text-[12px] text-slate-700 mt-3.5 leading-relaxed line-clamp-2">
          {user.challenges.career}
        </p>
      </motion.div>

      {/* 4. 4S Model Grid */}
      <div className="grid grid-cols-2 gap-3">
        <PillarCard
          theme="situation"
          badge="Pilar 1"
          icon={Compass}
          title="Situation"
          caption="Validated • Peta jelas"
          progress={100}
          onClick={() => onNavigateTab('situation')}
        />
        <PillarCard
          theme="self"
          badge="Pilar 2"
          icon={Sparkles}
          title="Self"
          caption={`${user.viaStrengths.length} VIA Strengths`}
          progress={85}
          onClick={() => onNavigateTab('self')}
        />
        <PillarCard
          theme="strategies"
          badge="Pilar 3"
          icon={Target}
          title="Growth"
          caption={`${doneCount}/${totalCount} micro-practice`}
          progress={practiceProgress}
          onClick={() => onNavigateTab('strategies')}
        />
        <PillarCard
          theme="support"
          badge="Pilar 4"
          icon={Users}
          title="Support"
          caption={`${user.circle.members} teman circle`}
          progress={70}
          onClick={() => onNavigateTab('support')}
        />
      </div>

      {/* 5. Today's To-Do / Micro-Practice */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-[28px] p-5 border border-slate-200/90 shadow-[0_6px_24px_-12px_rgba(15,23,42,0.15)]"
      >
        <div className="flex items-center justify-between mb-3.5">
          <div>
            <h3 className="text-[18px] font-bold text-slate-950 tracking-tight">Hari Ini</h3>
            <p className="text-[12px] text-slate-500 mt-1">Mastery Accumulation • Bandura</p>
          </div>

          <div className="bg-slate-100 p-1 rounded-full flex items-center text-[12px] font-medium">
            <button
              onClick={() => setTodoTab('scheduled')}
              className={`px-3 py-1.5 rounded-full transition-all ${
                todoTab === 'scheduled' ? 'bg-grape-500 text-white font-semibold shadow-xs' : 'text-slate-500'
              }`}
            >
              Jadwal
            </button>
            <button
              onClick={() => setTodoTab('notes')}
              className={`px-3 py-1.5 rounded-full transition-all ${
                todoTab === 'notes' ? 'bg-grape-500 text-white font-semibold shadow-xs' : 'text-slate-500'
              }`}
            >
              Catatan
            </button>
          </div>
        </div>

        {todoTab === 'scheduled' ? (
          <div className="flex flex-col gap-2.5">
            {user.microPractices.map((practice) => (
              <div
                key={practice.id}
                onClick={() => {
                  onToggleMicroPractice(practice.id);
                  if (!practice.completed) triggerConfetti();
                }}
                className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                  practice.completed
                    ? 'bg-mint-50 border-mint-200'
                    : 'bg-slate-50 border-slate-200 hover:border-grape-200'
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <button
                    className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-all ${
                      practice.completed
                        ? 'bg-mint-500 text-white'
                        : 'border-2 border-slate-300 hover:border-grape-500'
                    }`}
                  >
                    {practice.completed && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                  </button>
                  <div className="min-w-0">
                    <p
                      className={`text-[14px] font-semibold leading-snug ${
                        practice.completed ? 'line-through text-slate-400' : 'text-slate-900'
                      }`}
                    >
                      {practice.title}
                    </p>
                    <div className="flex items-center gap-2 mt-1.5">
                      <span className="flex items-center gap-1 text-[11.5px] text-slate-500">
                        <Clock className="w-3 h-3" /> {practice.duration}
                      </span>
                      <span
                        className={`text-[10.5px] font-bold px-2 py-0.5 rounded-full ${
                          DOMAIN_COLOR[practice.domain] || 'bg-slate-100 text-slate-700'
                        }`}
                      >
                        {practice.domain}
                      </span>
                    </div>
                  </div>
                </div>

                <span
                  className={`text-[11px] font-bold px-2.5 py-1.5 rounded-full shrink-0 ml-2 ${
                    practice.completed ? 'bg-mint-500 text-white' : 'bg-white text-slate-600 border border-slate-200'
                  }`}
                >
                  {practice.completed ? '+Efficacy' : '09:00'}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-sunny-50 rounded-2xl p-4 text-[13px] text-slate-700 border border-sunny-200 leading-relaxed">
            <p className="font-bold text-sunny-700 mb-1.5">Catatan Self-Regulated Learning (Guo, 2022):</p>
            "Ketika merasa overwhelmed dengan linimasa media sosial, ingat bahwa tiap individu memiliki kurva adaptasi transisi yang unik (Arnett, 2000). Latihan mikro 15 menit lebih bernilai dari overthinking 2 jam."
          </div>
        )}
        <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-[12px]">
          <span className="text-slate-500">Progres efikasi diri</span>
          <button
            onClick={() => onNavigateTab('strategies')}
            className="font-bold text-grape-700 flex items-center gap-1"
          >
            Buka Pilar 3 <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </motion.div>

      {/* 6. Growth Circle */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-azure-100 border border-azure-200 rounded-[28px] p-5 cursor-pointer"
        onClick={() => onNavigateTab('support')}
      >
        <div className="flex items-center justify-between mb-3.5">
          <div className="flex items-center gap-3 min-w-0">
            <div className="flex -space-x-2 shrink-0">
              {[
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80',
                'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
                'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80'
              ].map((src, i) => (
                <img
                  key={src}
                  src={src}
                  alt={`Peer ${i + 1}`}
                  className="w-8 h-8 rounded-full object-cover border-2 border-white"
                />
              ))}
              <span className="w-8 h-8 rounded-full bg-azure-500 text-white text-[10.5px] font-bold flex items-center justify-center border-2 border-white">
                +{user.circle.members - 3}
              </span>
            </div>
            <div className="min-w-0">
              <h4 className="text-[15.5px] font-bold text-slate-950 tracking-tight leading-snug truncate">
                {user.circle.name}
              </h4>
              <p className="text-[12px] text-azure-700 mt-0.5">27 pesan baru</p>
            </div>
          </div>
          <span className="text-[10.5px] font-bold bg-white/70 text-azure-700 px-2.5 py-1 rounded-full shrink-0">
            Prompt Aktif
          </span>
        </div>

        <div className="bg-white/70 rounded-2xl p-3.5">
          <p className="text-[10.5px] font-bold text-azure-700 uppercase tracking-[0.08em]">Prompt 2-Mingguan</p>
          <p className="text-[13px] text-slate-800 mt-1.5 leading-relaxed line-clamp-3">
            "{user.circle.currentPrompt}"
          </p>
        </div>

        <div className="mt-3.5 flex items-center justify-between">
          <span className="text-[12px] text-azure-700">Budaya apresiasi bersama</span>
          <button className="bg-azure-500 hover:bg-azure-700 text-white text-[12.5px] font-bold px-4 py-2.5 rounded-full flex items-center gap-1.5 shadow-sm transition-colors">
            Buka Circle <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </motion.div>

      {/* 7. COE Socratic Coach */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-slate-950 text-white rounded-[28px] p-5 shadow-lg relative overflow-hidden"
      >
        <div className="absolute -bottom-14 -left-10 w-44 h-44 rounded-full bg-grape-500/40 blur-3xl pointer-events-none" />
        <div className="absolute -top-14 -right-8 w-40 h-40 rounded-full bg-mint-500/25 blur-3xl pointer-events-none" />

        <div className="relative flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-2xl bg-gradient-to-br from-grape-500 to-blossom-500 text-white flex items-center justify-center shadow-sm">
              <Brain className="w-4.5 h-4.5" />
            </div>
            <div>
              <h4 className="text-[15.5px] font-bold tracking-tight leading-snug">COE Socratic Coach</h4>
              <p className="text-[12px] text-slate-400 mt-0.5">Reflective Modal & Scaffolding</p>
            </div>
          </div>
          <span className="text-[10.5px] font-bold bg-white/10 text-slate-200 px-2.5 py-1 rounded-full border border-white/15 shrink-0">
            Anti-Offloading
          </span>
        </div>

        <p className="relative text-[13px] text-slate-300 mt-3.5 leading-relaxed">
          "Ketika kamu merasa bingung melangkah, tanyakan: Apa langkah paling kecil yang bisa dieksekusi dalam 10 menit
          ke depan?"
        </p>

        <button
          onClick={onOpenCOE}
          className="relative mt-4 w-full bg-gradient-to-r from-grape-500 to-blossom-500 hover:opacity-90 text-white text-[14px] font-bold py-3 rounded-2xl transition-opacity flex items-center justify-center gap-1.5 shadow-md"
        >
          <Sparkles className="w-3.5 h-3.5" />
          Mulai Refleksi Sokratik
        </button>
      </motion.div>

    </div>
  );
}
