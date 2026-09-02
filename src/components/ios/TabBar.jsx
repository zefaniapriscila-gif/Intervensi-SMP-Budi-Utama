import React from 'react';
import { motion } from 'framer-motion';
import { 
  Home, 
  Compass, 
  Sparkles, 
  Target, 
  Users
} from 'lucide-react';

export const TABS = [
  { id: 'home', label: 'Home', icon: Home, badge: null },
  { id: 'situation', label: '1. Situation', icon: Compass, badge: 'STT' },
  { id: 'self', label: '2. Self', icon: Sparkles, badge: 'VIA' },
  { id: 'strategies', label: '3. Growth', icon: Target, badge: '3' },
  { id: 'support', label: '4. Support', icon: Users, badge: '27' },
];

export default function TabBar({ activeTab, onTabChange }) {
  return (
    <div className="w-full px-2 py-1.5 select-none">
      <div className="flex items-center justify-around">
        {TABS.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className="relative flex flex-col items-center justify-center py-1 px-2 rounded-2xl transition-all duration-200 group"
            >
              {isActive && (
                <motion.div
                  layoutId="activeTabBadge"
                  className="absolute inset-0 bg-slate-900/5 rounded-xl -z-10"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}

              <div className="relative">
                <Icon
                  className={`w-5 h-5 transition-transform duration-200 ${
                    isActive 
                      ? 'text-black scale-110 stroke-[2.3]' 
                      : 'text-slate-400 group-hover:text-slate-700 stroke-[1.6]'
                  }`}
                />

                {tab.badge && (
                  <span className={`absolute -top-1 -right-2 text-[9px] font-semibold px-1.2 py-0.2 rounded-full leading-none flex items-center justify-center ${
                    tab.id === 'support' 
                      ? 'bg-rose-500 text-white' 
                      : 'bg-black text-white'
                  }`}>
                    {tab.badge}
                  </span>
                )}
              </div>

              <span
                className={`text-[10.5px] mt-1 leading-none tracking-normal transition-colors duration-150 ${
                  isActive ? 'font-semibold text-black' : 'font-normal text-slate-500'
                }`}
              >
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
