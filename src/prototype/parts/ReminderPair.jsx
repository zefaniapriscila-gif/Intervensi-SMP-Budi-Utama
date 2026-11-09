import React from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { Switch } from '../../components/ui/primitives';
import { REMINDERS } from '../../data/program';

function NightSky() {
  const stars = [[78, 14, 1.4], [88, 34, 1], [64, 26, 0.9], [92, 58, 1.2], [70, 46, 0.8]];
  return (
    <svg viewBox="0 0 100 70" className="pointer-events-none absolute right-12 top-0 h-[60px] w-[90px] opacity-70" aria-hidden="true">
      {stars.map(([x, y, r], i) => (
        <motion.circle
          key={i}
          cx={x}
          cy={y}
          r={r}
          fill="#F3F6FF"
          animate={{ opacity: [0.25, 0.95, 0.25] }}
          transition={{ duration: 2.6 + i * 0.4, repeat: Infinity, delay: i * 0.35, ease: 'easeInOut' }}
        />
      ))}
    </svg>
  );
}

function Sunrise({ on }) {
  return (
    <svg viewBox="0 0 120 60" className="pointer-events-none absolute -bottom-2 right-10 h-[50px] w-[100px] opacity-80" aria-hidden="true">
      <motion.circle
        cx="96"
        cy="62"
        r="30"
        fill="#FFC21A"
        initial={false}
        animate={{ cy: on ? 60 : 82 }}
        transition={{ type: 'spring', stiffness: 120, damping: 16 }}
      />
      <circle cx="96" cy="62" r="42" fill="none" stroke="#FFC21A" strokeOpacity="0.35" strokeWidth="1.5" strokeDasharray="2 5" />
    </svg>
  );
}

function ReminderCard({ kind, enabled, onToggle, audience }) {
  const data = REMINDERS[kind];
  const night = kind === 'night';
  const Icon = night ? Moon : Sun;
  return (
    <div
      data-surface={night ? 'dark' : undefined}
      className={`relative flex items-center gap-3.5 overflow-hidden rounded-[22px] p-4 shadow-paper transition-[filter,opacity] duration-300 ${night ? 'bg-navy text-paper' : 'bg-gradient-to-br from-marigold-soft to-white text-ink ring-1 ring-marigold/40'} ${enabled ? '' : 'opacity-75 saturate-50'}`}
    >
      {night ? <NightSky /> : <Sunrise on={enabled} />}
      <span className={`relative flex h-12 w-12 shrink-0 items-center justify-center rounded-[16px] ${night ? 'bg-white/10 text-marigold' : 'bg-marigold text-night shadow-paper'}`}>
        <Icon className="h-6 w-6" />
      </span>
      <div className="relative min-w-0 flex-1">
        <p className={`flex items-baseline gap-2 font-display text-[28px] font-bold leading-none tracking-[-0.02em] tabular ${enabled ? '' : 'line-through decoration-2'}`}>
          {data.time}
          <span className={`whitespace-nowrap rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.1em] ${night ? 'bg-white/10 text-mist' : 'bg-marigold/30 text-marigold-ink'}`}>{enabled ? 'Tiap hari' : 'Nonaktif'}</span>
        </p>
        <p className="mt-1.5 text-[13.5px] font-bold leading-snug">{data.title}</p>
        <p className={`mt-0.5 text-[12px] leading-snug ${night ? 'text-mist' : 'text-ink-2'}`}>{audience === 'parent' ? data.parent : data.student}</p>
      </div>
      <Switch checked={enabled} onChange={onToggle} tone={night ? 'dark' : 'light'} label={`${enabled ? 'Matikan' : 'Nyalakan'} pengingat ${data.title.toLowerCase()}`} />
    </div>
  );
}

export default function ReminderPair({ reminders, onToggle, audience = 'student' }) {
  return (
    <div className="grid gap-3">
      <ReminderCard kind="night" enabled={reminders.night} onToggle={() => onToggle('night')} audience={audience} />
      <ReminderCard kind="morning" enabled={reminders.morning} onToggle={() => onToggle('morning')} audience={audience} />
    </div>
  );
}
