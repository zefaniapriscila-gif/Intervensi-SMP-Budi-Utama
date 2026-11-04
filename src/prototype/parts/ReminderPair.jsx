import React from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { Switch } from '../../components/ui/primitives';
import { REMINDERS } from '../../data/program';

function NightSky() {
  const stars = [[78, 14, 1.4], [88, 34, 1], [64, 26, 0.9], [92, 58, 1.2], [70, 46, 0.8]];
  return (
    <svg viewBox="0 0 100 70" className="pointer-events-none absolute right-0 top-0 h-[70px] w-[100px]" aria-hidden="true">
      {stars.map(([x, y, r], i) => (
        <motion.circle
          key={i}
          cx={x}
          cy={y}
          r={r}
          fill="#F6F2EA"
          animate={{ opacity: [0.25, 0.95, 0.25] }}
          transition={{ duration: 2.6 + i * 0.4, repeat: Infinity, delay: i * 0.35, ease: 'easeInOut' }}
        />
      ))}
    </svg>
  );
}

function Sunrise({ on }) {
  return (
    <svg viewBox="0 0 120 60" className="pointer-events-none absolute -bottom-1 right-0 h-[60px] w-[120px]" aria-hidden="true">
      <motion.circle
        cx="96"
        cy="62"
        r="30"
        fill="#F2B134"
        initial={false}
        animate={{ cy: on ? 60 : 82 }}
        transition={{ type: 'spring', stiffness: 120, damping: 16 }}
      />
      <circle cx="96" cy="62" r="42" fill="none" stroke="#F2B134" strokeOpacity="0.35" strokeWidth="1.5" strokeDasharray="2 5" />
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
      className={`relative flex min-h-[176px] flex-col overflow-hidden rounded-[22px] p-4 transition-[filter,opacity] duration-300 ${night ? 'bg-night text-paper' : 'bg-marigold-soft text-ink ring-1 ring-marigold/30'} ${enabled ? '' : 'opacity-75 saturate-50'}`}
    >
      {night ? <NightSky /> : <Sunrise on={enabled} />}
      <div className="relative flex items-center justify-between">
        <span className={`flex items-center gap-1.5 text-[11.5px] font-bold uppercase tracking-[0.12em] ${night ? 'text-mist' : 'text-marigold-ink'}`}>
          <Icon className={`h-3.5 w-3.5 ${night ? 'text-marigold' : ''}`} /> {data.period}
        </span>
        <Switch checked={enabled} onChange={onToggle} tone={night ? 'dark' : 'light'} label={`${enabled ? 'Matikan' : 'Nyalakan'} pengingat ${data.title.toLowerCase()}`} />
      </div>
      <p className={`relative mt-3 font-display text-[36px] font-[520] leading-none tracking-[-0.02em] tabular ${enabled ? '' : 'line-through decoration-2'}`}>{data.time}</p>
      <p className="relative mt-2 text-[14px] font-bold leading-snug">{data.title}</p>
      <p className={`relative mt-1 text-[12.5px] leading-snug ${night ? 'text-mist' : 'text-ink-2'}`}>{audience === 'parent' ? data.parent : data.student}</p>
      <p className={`relative mt-auto pt-2 text-[11.5px] font-semibold ${night ? 'text-mist' : 'text-marigold-ink'}`}>{enabled ? 'Setiap hari' : 'Nonaktif'}</p>
    </div>
  );
}

export default function ReminderPair({ reminders, onToggle, audience = 'student' }) {
  return (
    <div className="grid grid-cols-2 gap-3">
      <ReminderCard kind="night" enabled={reminders.night} onToggle={() => onToggle('night')} audience={audience} />
      <ReminderCard kind="morning" enabled={reminders.morning} onToggle={() => onToggle('morning')} audience={audience} />
    </div>
  );
}
