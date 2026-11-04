import React from 'react';
import { motion } from 'framer-motion';
import {
  Home,
  BookOpen,
  Award
} from 'lucide-react';

const TABS = [
  { id: 'home', label: 'Beranda', icon: Home },
  { id: 'journal', label: 'Catatan', icon: BookOpen },
  { id: 'recognition', label: 'Apresiasi', icon: Award },
];

export default function TabBar({ activeTab, onTabChange }) {
  return (
    <nav aria-label="Navigasi utama" className="mx-auto w-full max-w-[730px] select-none">
      <div className="flex items-center justify-between gap-1 rounded-[30px] border border-white bg-white/95 px-2 py-2 shadow-[0_12px_34px_-18px_rgba(35,42,75,0.32)] backdrop-blur-xl sm:px-2.5">
        {TABS.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <motion.button
              key={tab.id}
              layout
              onClick={() => onTabChange(tab.id)}
              aria-label={tab.label}
              aria-current={isActive ? 'page' : undefined}
              whileTap={{ scale: 0.94 }}
              transition={{ type: 'spring', stiffness: 420, damping: 34 }}
              className={`relative flex h-[54px] min-w-0 flex-1 items-center justify-center gap-2 rounded-[22px] px-2 transition-colors duration-200 sm:h-[58px] sm:gap-2.5 ${
                isActive
                  ? 'bg-slate-950 text-white shadow-[0_7px_18px_-8px_rgba(10,14,30,0.7)]'
                  : 'text-slate-500 hover:bg-slate-50 hover:text-grape-700'
              }`}
            >
              <span className="flex shrink-0 items-center justify-center">
                <Icon className={`h-[19px] w-[19px] sm:h-5 sm:w-5 ${isActive ? 'stroke-[2.2]' : 'stroke-[1.8]'}`} />
              </span>
              <span className={`truncate text-[10px] font-bold tracking-tight sm:text-[12px] ${isActive ? 'text-white' : ''}`}>
                {tab.label}
              </span>
            </motion.button>
          );
        })}
      </div>
    </nav>
  );
}
