import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Users,
  Heart,
  Send,
  ShieldCheck,
  Trophy,
  Award,
  ArrowRight
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { COMMUNITY_WINS_FEED } from '../../data/essayData';

// Warna tag domain pada feed Celebrate Wins.
const WIN_TAG_COLOR = {
  Career: 'bg-azure-100 text-azure-700',
  Psychological: 'bg-blossom-100 text-blossom-700',
  Habit: 'bg-sunny-100 text-sunny-700',
  Social: 'bg-mint-100 text-mint-700'
};

// Pastel bergilir untuk kartu apresiasi di feed diskusi.
const POST_TINT = [
  { surface: 'bg-white', border: 'border-slate-200/80', chip: 'bg-coral-100 text-coral-700' },
  { surface: 'bg-white', border: 'border-slate-200/80', chip: 'bg-grape-100 text-grape-700' },
  { surface: 'bg-white', border: 'border-slate-200/80', chip: 'bg-mint-100 text-mint-700' }
];

const defaultCirclePosts = [
  {
    id: 1,
    author: 'Nadia S.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80',
    time: '2 jam lalu',
    text: 'Kemarin sempat drop melihat linimasa orang lain. Tapi setelah refleksi di pilar 1, saya sadar setiap orang punya kurva berkembang masing-masing.',
    appreciations: ['Relate Banget ❤️', 'Langkah Berani 🛡️'],
    likes: 5
  }
];

export default function Pillar4Support({ user, onCompleteSession }) {
  const [activeSubTab, setActiveSubTab] = useState('circle');
  const [reflectionInput, setReflectionInput] = useState('');
  const [circlePosts, setCirclePosts] = useState(
    user.circle?.posts?.length ? user.circle.posts : defaultCirclePosts
  );
  const [winsFeed, setWinsFeed] = useState(COMMUNITY_WINS_FEED);
  const [newWinText, setNewWinText] = useState('');
  const [newWinTag, setNewWinTag] = useState('Career');

  const triggerConfetti = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#f4713d', '#f2637d', '#7c5cf0', '#17b183', '#3b86e0']
    });
  };

  const handleSendCirclePost = () => {
    if (!reflectionInput.trim()) return;
    const newPost = {
      id: Date.now(),
      author: user.name,
      avatar: user.avatar,
      time: 'Baru saja',
      text: reflectionInput,
      appreciations: ['Proses Hebat ✨'],
      likes: 1
    };
    setCirclePosts(prev => [newPost, ...prev]);
    setReflectionInput('');
    triggerConfetti();
  };

  const handlePostWin = () => {
    if (!newWinText.trim()) return;
    const newWin = {
      id: Date.now(),
      author: user.name,
      tag: newWinTag,
      text: newWinText,
      applause: 1
    };
    setWinsFeed(prev => [newWin, ...prev]);
    setNewWinText('');
    triggerConfetti();
  };

  return (
    <div className="flex flex-col gap-3.5 pb-8 pt-2 px-4 select-none">

      {/* Header Banner */}
      <div className="bg-coral-100 rounded-[26px] p-5 border border-coral-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-2xl bg-coral-500 text-white flex items-center justify-center font-bold text-base shadow-sm">
              4
            </div>
            <div>
              <span className="text-xs font-bold text-coral-700 uppercase tracking-wider">Collective Resilience • Forsyth 2018</span>
              <h2 className="text-base font-bold text-slate-950 tracking-tight leading-tight">Pilar 4: Support & Community</h2>
            </div>
          </div>
          <span className="text-xs font-semibold bg-white/70 text-coral-700 px-3 py-1 rounded-full">
            Shared Journey
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2 mt-4 pt-3.5 border-t border-coral-200">
          <button
            onClick={() => setActiveSubTab('circle')}
            className={`py-2 px-3 rounded-xl text-xs font-bold text-center transition-all ${
              activeSubTab === 'circle'
                ? 'bg-coral-500 text-white shadow-sm'
                : 'bg-white/60 text-coral-700 hover:bg-white'
            }`}
          >
            4.1 Growth Circle
          </button>
          <button
            onClick={() => setActiveSubTab('wins')}
            className={`py-2 px-3 rounded-xl text-xs font-bold text-center transition-all ${
              activeSubTab === 'wins'
                ? 'bg-coral-500 text-white shadow-sm'
                : 'bg-white/60 text-coral-700 hover:bg-white'
            }`}
          >
            4.2 Celebrate Wins
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {activeSubTab === 'circle' && (
          <motion.div
            key="circleTab"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            className="flex flex-col gap-3.5"
          >
            {/* Growth Circle Meta */}
            <div className="bg-azure-100 rounded-[26px] p-5 border border-azure-200 flex flex-col gap-3">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-2xl bg-azure-500 text-white flex items-center justify-center shadow-sm shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-sm font-bold text-slate-950 leading-tight truncate">{user.circle.name}</h4>
                    <p className="text-xs text-azure-700 mt-0.5">Matched by: Values VIA + Goal Growth (Luzanil & Menaldi, 2022)</p>
                  </div>
                </div>
                <span className="text-xs font-bold bg-white/70 text-azure-700 px-3 py-1 rounded-full shrink-0">
                  {user.circle.members} Teman
                </span>
              </div>

              <div className="p-3 bg-white/70 rounded-2xl text-xs text-slate-700 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-mint-700 shrink-0" />
                <span>Ruang aman terenkripsi (Psychological Safety). Tidak ada penilaian toxic atau pamer flexing.</span>
              </div>
            </div>

            {/* Prompt Pemantik 2-Mingguan */}
            <div className="bg-gradient-to-br from-coral-500 via-[#f4595e] to-blossom-500 text-white rounded-[26px] p-5.5 shadow-lg flex flex-col gap-3 relative overflow-hidden">
              <div className="absolute -top-10 -right-8 w-32 h-32 bg-white/25 rounded-full blur-2xl pointer-events-none" />

              <div className="relative flex items-center justify-between">
                <span className="text-xs font-bold text-white/80 uppercase tracking-wider">Prompt Pemantik 2-Mingguan</span>
                <span className="text-xs bg-white/20 px-2.5 py-0.5 rounded-full text-white font-semibold">Proses-Oriented</span>
              </div>

              <p className="relative text-sm font-bold text-white leading-relaxed">
                "{user.circle.currentPrompt}"
              </p>
              <p className="relative text-xs text-white/80">
                *Wajib dijawab setiap anggota agar dinamika kelompok tetap aktif, berfokus pada proses perjuangan bersama (shared struggle).
              </p>

              <textarea
                rows={3}
                value={reflectionInput}
                onChange={(e) => setReflectionInput(e.target.value)}
                placeholder="Bagikan pengalaman prosesmu secara jujur..."
                className="relative w-full p-3 bg-white/15 text-white placeholder:text-white/60 border border-white/25 rounded-2xl text-xs focus:outline-none resize-none leading-relaxed"
              />

              <button
                onClick={handleSendCirclePost}
                className="relative w-full bg-white hover:bg-coral-50 text-coral-700 text-xs font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-sm"
              >
                <Send className="w-4 h-4" /> Kirim Refleksi ke Circle
              </button>
            </div>

            {/* Circle Feed */}
            <div className="flex flex-col gap-2.5">
              <h5 className="text-xs font-bold text-slate-500 uppercase tracking-wider px-1">
                Diskusi & Respon Anggota:
              </h5>

              {circlePosts.map((post, idx) => {
                const tint = POST_TINT[idx % POST_TINT.length];

                return (
                  <div
                    key={post.id}
                    className={`${tint.surface} rounded-[24px] p-4.5 border ${tint.border} shadow-xs flex flex-col gap-2.5`}
                  >
                    <div className="flex items-center gap-2.5">
                      <img src={post.avatar} alt={post.author} className="w-8 h-8 rounded-full object-cover ring-2 ring-coral-100" />
                      <div>
                        <p className="text-xs font-bold text-slate-900 leading-tight">{post.author}</p>
                        <p className="text-xs text-slate-400 mt-0.5">{post.time}</p>
                      </div>
                    </div>

                    <p className="text-xs text-slate-700 leading-relaxed">
                      {post.text}
                    </p>

                    <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-100">
                      {post.appreciations.map((app, i) => (
                        <span key={i} className={`text-xs font-semibold px-2.5 py-1 rounded-full ${tint.chip}`}>
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Complete Session Button (Flowchart Step 16) */}
            <button
              onClick={() => {
                if (onCompleteSession) onCompleteSession();
              }}
              className="w-full bg-gradient-to-r from-grape-500 to-blossom-500 hover:opacity-95 text-white text-xs font-bold py-3.5 rounded-2xl shadow-md flex items-center justify-center gap-2 transition-opacity"
            >
              <Award className="w-4 h-4" /> Selesaikan Alur 4S Hari Ini (Step 16: Sesi Selesai) <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        )}

        {activeSubTab === 'wins' && (
          <motion.div
            key="winsTab"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            className="flex flex-col gap-3.5"
          >
            {/* Anti-Comparison Intro */}
            <div className="bg-sunny-100 rounded-[26px] p-5 border border-sunny-200 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <h4 className="text-base font-bold text-slate-950 tracking-tight">Celebrate Wins (Anti-Comparison)</h4>
                <div className="w-9 h-9 rounded-2xl bg-sunny-500 text-slate-900 flex items-center justify-center shadow-sm">
                  <Trophy className="w-5 h-5" />
                </div>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                Papan apresiasi progres mikro nyata untuk melawan <em>comparison trap</em> media sosial dan menumbuhkan rasa kebersamaan (shared struggle; Esai Bab 2.3.4).
              </p>
            </div>

            {/* Post a Micro-Win */}
            <div className="bg-white rounded-[26px] p-5 border border-slate-200/80 shadow-xs flex flex-col gap-3">
              <span className="text-xs font-bold text-slate-900">Rayakan 1 Kemenangan Kecil Hari Ini:</span>
              <input
                type="text"
                value={newWinText}
                onChange={(e) => setNewWinText(e.target.value)}
                placeholder="Mis: Berhasil menyelesaikan 1 modul tugas tanpa terdistraksi..."
                className="p-3 bg-coral-50 border border-coral-100 rounded-2xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-coral-200"
              />
              <div className="flex items-center justify-between gap-2">
                <select
                  value={newWinTag}
                  onChange={(e) => setNewWinTag(e.target.value)}
                  className="p-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:outline-none"
                >
                  <option value="Career">Domain Karir</option>
                  <option value="Psychological">Domain Mental</option>
                  <option value="Habit">Domain Kebiasaan</option>
                  <option value="Social">Domain Relasi</option>
                </select>

                <button
                  onClick={handlePostWin}
                  className="bg-coral-500 hover:bg-coral-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-all shadow-sm"
                >
                  Posting Win
                </button>
              </div>
            </div>

            {/* Wins Feed */}
            <div className="flex flex-col gap-2.5">
              {winsFeed.map((win) => (
                <div key={win.id} className="bg-white rounded-[22px] p-4 border border-slate-200/80 shadow-xs flex items-center justify-between">
                  <div className="min-w-0 flex-1 pr-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-slate-900">{win.author}</span>
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-md ${WIN_TAG_COLOR[win.tag] || 'bg-slate-100 text-slate-700'}`}>
                        {win.tag}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 mt-1 leading-normal">
                      "{win.text}"
                    </p>
                  </div>
                  <motion.button
                    whileTap={{ scale: 0.92 }}
                    onClick={() => {
                      triggerConfetti();
                      setWinsFeed(prev => prev.map(w => w.id === win.id ? { ...w, applause: w.applause + 1 } : w));
                    }}
                    className="bg-blossom-50 hover:bg-blossom-100 text-blossom-700 p-2.5 rounded-2xl flex flex-col items-center justify-center shrink-0 min-w-[54px] transition-all"
                  >
                    <Heart className="w-4 h-4 fill-blossom-500 text-blossom-500" />
                    <span className="text-xs font-extrabold mt-0.5">{win.applause}</span>
                  </motion.button>
                </div>
              ))}
            </div>

            {/* Complete Session Button (Flowchart Step 16) */}
            <button
              onClick={() => {
                if (onCompleteSession) onCompleteSession();
              }}
              className="w-full bg-gradient-to-r from-grape-500 to-blossom-500 hover:opacity-95 text-white text-xs font-bold py-3.5 rounded-2xl shadow-md flex items-center justify-center gap-2 transition-opacity"
            >
              <Award className="w-4 h-4" /> Selesaikan Alur 4S Hari Ini (Step 16: Sesi Selesai) <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
