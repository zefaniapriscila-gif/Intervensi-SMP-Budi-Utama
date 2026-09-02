import React from 'react';
import { motion } from 'framer-motion';
import {
  Home,
  Compass,
  Sparkles,
  Target,
  Users
} from 'lucide-react';

// `ink` = warna teks saat tab aktif. Kuning pakai tinta gelap supaya tetap terbaca.
const TABS = [
  { id: 'home', label: 'Home', icon: Home, badge: null, active: 'bg-slate-900', ink: 'text-white', badgeColor: 'bg-slate-900' },
  { id: 'situation', label: 'Situation', icon: Compass, badge: 'STT', active: 'bg-mint-500', ink: 'text-white', badgeColor: 'bg-mint-500' },
  { id: 'self', label: 'Self', icon: Sparkles, badge: 'VIA', active: 'bg-grape-500', ink: 'text-white', badgeColor: 'bg-grape-500' },
  { id: 'strategies', label: 'Growth', icon: Target, badge: '3', active: 'bg-sunny-500', ink: 'text-slate-900', badgeColor: 'bg-sunny-700' },
  { id: 'support', label: 'Support', icon: Users, badge: '27', active: 'bg-coral-500', ink: 'text-white', badgeColor: 'bg-blossom-500' },
];

export default function TabBar({ activeTab, onTabChange }) {
  return (
    <div className="w-full px-3 pt-1 pb-1 select-none">
      {/* Floating dock: item aktif melebar jadi pill berwarna + label */}
      <div className="bg-white/90 backdrop-blur-xl rounded-[26px] border border-slate-200/80 shadow-[0_10px_30px_-12px_rgba(15,23,42,0.28)] px-2 py-2 flex items-center justify-between gap-1">
        {TABS.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <motion.button
              key={tab.id}
              layout
              onClick={() => onTabChange(tab.id)}
              whileTap={{ scale: 0.94 }}
              transition={{ type: 'spring', stiffness: 420, damping: 34 }}
              className={`relative flex items-center justify-center gap-1.5 h-11 rounded-[18px] transition-colors duration-200 ${
                isActive
                  ? `${tab.active} ${tab.ink} px-3.5 shadow-md`
                  : 'text-slate-400 hover:text-slate-700 hover:bg-slate-100 w-11 shrink-0'
              }`}
            >
              <span className="relative flex items-center justify-center">
                <Icon className={`w-5 h-5 ${isActive ? 'stroke-[2.3]' : 'stroke-[1.8]'}`} />

                {tab.badge && !isActive && (
                  <span
                    className={`absolute -top-1.5 -right-2.5 ${tab.badgeColor} text-white text-[8.5px] font-bold leading-none px-1.5 py-[3px] rounded-full border border-white`}
                  >
                    {tab.badge}
                  </span>
                )}
              </span>

              {isActive && (
                <motion.span
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: 'auto' }}
                  transition={{ duration: 0.18 }}
                  className="text-[12.5px] font-bold tracking-tight whitespace-nowrap overflow-hidden"
                >
                  {tab.label}
                </motion.span>
              )}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
