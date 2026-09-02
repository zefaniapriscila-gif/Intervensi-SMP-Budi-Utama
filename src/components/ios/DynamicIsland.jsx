import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Brain } from 'lucide-react';

export default function DynamicIsland({ currentPillarName, onOpenCOE }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative z-50 flex items-center justify-center pointer-events-auto">
      <motion.div
        layout
        onClick={() => setIsExpanded(!isExpanded)}
        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        className={`bg-black text-white cursor-pointer select-none transition-all flex items-center justify-between overflow-hidden shadow-sm ${
          isExpanded
            ? 'w-[280px] py-2.5 px-3.5 rounded-[24px] ring-1 ring-white/20'
            : 'w-[120px] h-[28px] px-2.5 rounded-full'
        }`}
      >
        {!isExpanded ? (
          // Compact Pill State (iPhone 16 Pro style)
          <div className="flex items-center justify-between w-full">
            {/* Left status dot */}
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            </div>

            {/* Center camera sensor aperture */}
            <div className="w-2.5 h-2.5 rounded-full bg-[#151515] ring-1 ring-neutral-800 flex items-center justify-center">
              <div className="w-1 h-1 rounded-full bg-[#0a0a0a]" />
            </div>

            {/* Right micro badge */}
            <div className="flex items-center gap-0.5 text-[9px] font-bold tracking-tight text-slate-300">
              <span>Growth</span>
            </div>
          </div>
        ) : (
          // Expanded Live Activity View
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full flex flex-col gap-2"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                  <Brain className="w-3.5 h-3.5 text-white" />
                </div>
                <div>
                  <p className="text-[10.5px] font-bold text-white leading-none">Growth</p>
                  <p className="text-[8.5px] text-slate-400 mt-0.5">Live Socratic Companion</p>
                </div>
              </div>
              <span className="text-[8.5px] font-semibold bg-white/10 px-2 py-0.5 rounded-full text-slate-200">
                4S Model
              </span>
            </div>

            <div className="bg-white/10 rounded-xl p-2 text-[9.5px] text-slate-200 flex items-center justify-between">
              <span className="truncate max-w-[170px] text-slate-300">
                Pilar: <strong className="text-white font-semibold">{currentPillarName || "Overview"}</strong>
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  if (onOpenCOE) onOpenCOE();
                }}
                className="text-[9px] font-bold bg-white text-black px-2.5 py-1 rounded-lg hover:bg-slate-200 transition-colors flex items-center gap-1"
              >
                <Sparkles className="w-2.5 h-2.5" />
                Tanya
              </button>
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
