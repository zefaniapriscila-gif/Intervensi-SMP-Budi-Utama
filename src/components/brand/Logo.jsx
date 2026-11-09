import React from 'react';

// Tanda DISIPLIN: huruf D dari biru tua, dengan tiga anak tangga oranye di dalamnya
// (kebiasaan yang ditempuh bertahap).
export function LogoMark({ className = 'h-9 w-9', title }) {
  return (
    <svg viewBox="0 0 40 40" className={className} role={title ? 'img' : undefined} aria-hidden={title ? undefined : true} aria-label={title}>
      <rect width="40" height="40" rx="12" fill="#14257F" />
      <path d="M11 9.5h8.2c6.2 0 10.3 4.6 10.3 10.5S25.400 30.500 19.200 30.500H11Z" fill="#FFFFFF" />
      <path d="M15.500 26.500v-4.200h4.200v-4.200h4.200v-4.200h1.600v12.600Z" fill="#FFC21A" />
    </svg>
  );
}

export function Wordmark({ className = '', subline = true, tone = 'ink' }) {
  const main = tone === 'paper' ? 'text-white' : 'text-ink';
  const sub = tone === 'paper' ? 'text-mist' : 'text-ink-3';
  return (
    <span className={`flex flex-col leading-none ${className}`}>
      <span className={`font-display text-[19px] font-extrabold tracking-[0.08em] ${main}`}>DISIPLIN</span>
      {subline && <span className={`mt-1 text-[11px] font-semibold tracking-[0.01em] ${sub}`}>SMP Budi Utama · Yogyakarta</span>}
    </span>
  );
}

export function Brand({ className = '', tone = 'ink', subline = true }) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <LogoMark className="h-9 w-9 shrink-0" />
      <Wordmark tone={tone} subline={subline} />
    </span>
  );
}
