import React from 'react';
import { CalendarClock, ClipboardCheck, ScrollText } from 'lucide-react';
import { INDICATORS } from '../../data/program';

const ICONS = { clock: CalendarClock, rules: ScrollText, task: ClipboardCheck };
const TONES = [
  { chip: 'bg-marigold text-night', soft: 'bg-marigold-soft', bar: 'bg-marigold' },
  { chip: 'bg-pen text-white', soft: 'bg-pen-soft', bar: 'bg-pen' },
  { chip: 'bg-leaf text-white', soft: 'bg-leaf-soft', bar: 'bg-leaf' },
];

export function IndicatorIcon({ id, className = 'h-5 w-5' }) {
  const item = INDICATORS.find((entry) => entry.id === id);
  const Icon = ICONS[item?.icon] ?? ClipboardCheck;
  return <Icon className={className} strokeWidth={2.1} />;
}

// Daftar indikator untuk layar ponsel: satu baris per indikator, bernomor dan berwarna.
export function IndicatorList({ className = '' }) {
  return (
    <ol className={`space-y-2.5 ${className}`}>
      {INDICATORS.map((item, index) => (
        <li key={item.id} className={`relative flex items-center gap-3.5 overflow-hidden rounded-[18px] py-3 pl-5 pr-4 ring-1 ring-line ${TONES[index].soft}`}>
          <span aria-hidden="true" className={`absolute inset-y-0 left-0 w-1.5 ${TONES[index].bar}`} />
          <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] shadow-paper ${TONES[index].chip}`}>
            <IndicatorIcon id={item.id} />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block text-[11px] font-bold uppercase tracking-[0.12em] text-ink-3">Indikator {index + 1}</span>
            <span className="mt-0.5 block text-[14px] font-bold leading-snug text-ink">{item.title}</span>
            <span className="mt-0.5 block text-[12.5px] leading-snug text-ink-2">{item.body}</span>
          </span>
        </li>
      ))}
    </ol>
  );
}

// Penanda kecil indikator yang terpenuhi, untuk piagam.
export function IndicatorMarks({ met = [], className = '' }) {
  const count = met.filter(Boolean).length;
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className="flex gap-1.5">
        {INDICATORS.map((item, index) => (
          <span
            key={item.id}
            title={`${item.title}${met[index] ? ' · terpenuhi' : ' · belum'}`}
            className={`flex h-7 w-7 items-center justify-center rounded-full ${met[index] ? TONES[index].chip : 'bg-paper-2 text-ink-3 opacity-70'}`}
          >
            <IndicatorIcon id={item.id} className="h-3.5 w-3.5" />
          </span>
        ))}
      </span>
      <span className="text-[11.5px] font-bold text-ink-2 tabular">{count} dari {INDICATORS.length} indikator</span>
    </div>
  );
}
