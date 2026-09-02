import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  Heart, 
  Send, 
  ShieldCheck, 
  Sparkles, 
  MessageSquare, 
  Check, 
  Trophy,
  Award
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { COMMUNITY_WINS_FEED } from '../../data/essayData';

export default function Pillar4Support({ user, onUpdateUser, onOpenCOE }) {
  const [activeSubTab, setActiveSubTab] = useState('circle');
  const [reflectionInput, setReflectionInput] = useState('');
  const [circlePosts, setCirclePosts] = useState([
    {
      id: 1,
      author: 'Rian S.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
      time: '2 jam lalu',
      text: 'Kemarin sempat ditolak di tahap technical test. Rasanya down, tapi setelah re-group dan buka roadmap pilar 3, saya putuskan perbaiki logic tree 15 menit tiap pagi.',
      appreciations: ['Langkah Berani 🛡️', 'Kagum Ketekunanmu 💪'],
      likes: 5
    }
  ]);
  const [winsFeed, setWinsFeed] = useState(COMMUNITY_WINS_FEED);
  const [newWinText, setNewWinText] = useState('');
  const [newWinTag, setNewWinTag] = useState('Career');

  const triggerConfetti = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 }
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
    <div className="flex flex-col gap-4 pb-24 pt-2 px-4 select-none">
      
      {/* Header Banner */}
      <div className="bg-white rounded-[26px] p-5 border border-slate-200 shadow-xs">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-slate-100 text-slate-900 flex items-center justify-center font-bold text-base">
              4
            </div>
            <div>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Collective Resilience • Forsyth 2018</span>
              <h2 className="text-base font-bold text-slate-950 tracking-tight leading-tight">Pilar 4: Support & Community</h2>
            </div>
          </div>
          <span className="text-xs font-semibold bg-slate-100 text-slate-800 px-3 py-1 rounded-full border border-slate-200">
            Shared Journey
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2 mt-4 pt-3.5 border-t border-slate-100">
          <button
            onClick={() => setActiveSubTab('circle')}
            className={`py-2 px-3 rounded-xl text-xs font-bold text-center transition-all ${
              activeSubTab === 'circle' ? 'bg-black text-white shadow-xs' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            4.1 Growth Circle
          </button>
          <button
            onClick={() => setActiveSubTab('wins')}
            className={`py-2 px-3 rounded-xl text-xs font-bold text-center transition-all ${
              activeSubTab === 'wins' ? 'bg-black text-white shadow-xs' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
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
            className="flex flex-col gap-4"
          >
            {/* Growth Circle Meta */}
            <div className="bg-white rounded-[26px] p-5 border border-slate-200 shadow-xs flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-slate-100 text-slate-900 flex items-center justify-center">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-950 leading-tight">{user.circle.name}</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Matched by: Values VIA + Goal Growth</p>
                  </div>
                </div>
                <span className="text-xs font-bold bg-slate-100 text-slate-800 px-3 py-1 rounded-full border border-slate-200">
                  {user.circle.members} Teman Seperjuangan
                </span>
              </div>

              <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200 text-xs text-slate-700 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-black shrink-0" />
                <span>Ruang aman terenkripsi (Psychological Safety). Tidak ada penilaian toxic atau flexing.</span>
              </div>
            </div>

            {/* Prompt Pemantik 2-Mingguan */}
            <div className="bg-black text-white rounded-[26px] p-5.5 shadow-md border border-slate-800 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Prompt Pemantik 2-Mingguan</span>
                <span className="text-xs bg-white/10 px-2.5 py-0.5 rounded-full text-slate-200">Proses-Oriented</span>
              </div>

              <p className="text-sm font-bold text-white leading-relaxed">
                "{user.circle.currentPrompt}"
              </p>
              <p className="text-xs text-slate-400">
                *Fokus pada proses perjuangan koping, bukan pamer hasil akhir.
              </p>

              <textarea
                rows={3}
                value={reflectionInput}
                onChange={(e) => setReflectionInput(e.target.value)}
                placeholder="Bagikan pengalaman prosesmu secara jujur..."
                className="w-full p-3 bg-white/10 text-white placeholder:text-slate-400 border border-white/20 rounded-2xl text-xs focus:outline-none resize-none leading-relaxed"
              />

              <button
                onClick={handleSendCirclePost}
                className="w-full bg-white hover:bg-slate-200 text-black text-xs font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-sm"
              >
                <Send className="w-4 h-4" /> Kirim Refleksi ke Circle
              </button>
            </div>

            {/* Circle Feed */}
            <div className="flex flex-col gap-3">
              <h5 className="text-xs font-bold text-slate-500 uppercase tracking-wider px-1">
                Diskusi & Respon Anggota:
              </h5>

              {circlePosts.map((post) => (
                <div key={post.id} className="bg-white rounded-[24px] p-4.5 border border-slate-200 shadow-xs flex flex-col gap-2.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <img src={post.avatar} alt={post.author} className="w-8 h-8 rounded-full object-cover ring-1 ring-slate-200" />
                      <div>
                        <p className="text-xs font-bold text-slate-900 leading-tight">{post.author}</p>
                        <p className="text-xs text-slate-400 mt-0.5">{post.time}</p>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-700 leading-relaxed">
                    {post.text}
                  </p>

                  <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-100">
                    {post.appreciations.map((app, i) => (
                      <span key={i} className="text-xs bg-slate-100 text-slate-800 font-semibold px-2.5 py-1 rounded-full">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {activeSubTab === 'wins' && (
          <motion.div
            key="winsTab"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            className="flex flex-col gap-4"
          >
            {/* Anti-Comparison Intro */}
            <div className="bg-white rounded-[26px] p-5 border border-slate-200 shadow-xs flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <h4 className="text-base font-bold text-slate-950 tracking-tight">Celebrate Small Wins</h4>
                <Trophy className="w-5 h-5 text-black" />
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Papan apresiasi progres mikro nyata untuk memutus <em>comparison trap</em> media sosial. Tiap langkah kecil bernilai.
              </p>
            </div>

            {/* Post a Micro-Win */}
            <div className="bg-white rounded-[26px] p-5 border border-slate-200 shadow-xs flex flex-col gap-3">
              <span className="text-xs font-bold text-slate-900">Rayakan 1 Kemenangan Kecil Hari Ini:</span>
              <input
                type="text"
                value={newWinText}
                onChange={(e) => setNewWinText(e.target.value)}
                placeholder="Mis: Berhasil mengirim 1 CV tanpa overthinking..."
                className="p-3 bg-slate-50 border border-slate-200 rounded-2xl text-xs text-slate-900 focus:outline-none"
              />
              <div className="flex items-center justify-between">
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
                  className="bg-black hover:bg-slate-800 text-white text-xs font-bold px-4 py-2 rounded-xl transition-all shadow-xs"
                >
                  Posting Win
                </button>
              </div>
            </div>

            {/* Wins Feed */}
            <div className="flex flex-col gap-2.5">
              {winsFeed.map((win) => (
                <div key={win.id} className="bg-white rounded-[22px] p-4 border border-slate-200 shadow-xs flex items-center justify-between">
                  <div className="min-w-0 flex-1 pr-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-slate-900">{win.author}</span>
                      <span className="text-xs bg-slate-100 text-slate-700 font-semibold px-2 py-0.5 rounded-md">
                        {win.tag}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 mt-1 leading-normal">
                      "{win.text}"
                    </p>
                  </div>
                  <button 
                    onClick={() => {
                      triggerConfetti();
                      setWinsFeed(prev => prev.map(w => w.id === win.id ? { ...w, applause: w.applause + 1 } : w));
                    }}
                    className="bg-slate-50 hover:bg-slate-100 text-slate-900 border border-slate-200 p-2.5 rounded-2xl flex flex-col items-center justify-center shrink-0 min-w-[54px] transition-all"
                  >
                    <Heart className="w-4 h-4 fill-black text-black" />
                    <span className="text-xs font-extrabold mt-0.5">{win.applause}</span>
                  </button>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
