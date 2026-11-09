import React from 'react';
import { Award, Check } from 'lucide-react';

// Penanda status singkat (pengganti stempel): ikon centang + label + keterangan.
export function StatusBadge({ label, sub, tone = 'leaf', className = '' }) {
  const tones = {
    leaf: 'bg-leaf text-white',
    navy: 'bg-navy text-white',
  };
  return (
    <span className={`inline-flex items-center gap-2 rounded-full py-1.5 pl-1.5 pr-3.5 shadow-lift ${tones[tone]} ${className}`} data-surface="dark">
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
        <Check className="h-3.5 w-3.5" strokeWidth={3} />
      </span>
      <span className="flex flex-col leading-tight">
        <span className="text-[12px] font-extrabold tracking-[0.04em]">{label}</span>
        {sub && <span className="text-[10.5px] font-semibold opacity-85">{sub}</span>}
      </span>
    </span>
  );
}

// Medali kecil (pengganti segel) untuk penghargaan.
export function Medal({ tone = 'marigold', className = 'h-11 w-11' }) {
  const bg = tone === 'leaf' ? 'bg-leaf text-white' : 'bg-marigold text-night';
  return (
    <span className={`inline-flex items-center justify-center rounded-full shadow-paper ring-4 ring-white/70 ${bg} ${className}`} aria-hidden="true">
      <Award className="h-1/2 w-1/2" strokeWidth={2.2} />
    </span>
  );
}
