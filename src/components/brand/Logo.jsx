import React from 'react';

// Tanda LANGKAH: tiga anak tangga naik ke kanan dan matahari pagi.
// Tangga = kebiasaan yang ditempuh bertahap; matahari = pagi yang siap.
export function LogoMark({ className = 'h-9 w-9', title }) {
  return (
    <svg viewBox="0 0 40 40" className={className} role={title ? 'img' : undefined} aria-hidden={title ? undefined : true} aria-label={title}>
      <rect width="40" height="40" rx="11" fill="#1E2A5E" />
      <path d="M8.5 31.5V25.5H15.5V19.5H22.5V13.5H31.5V31.5Z" fill="#F2B134" />
      <circle cx="13" cy="13" r="3.2" fill="#F6F2EA" />
    </svg>
  );
}

export function Wordmark({ className = '', subline = true, tone = 'ink' }) {
  const main = tone === 'paper' ? 'text-paper' : 'text-ink';
  const sub = tone === 'paper' ? 'text-mist' : 'text-ink-3';
  return (
    <span className={`flex flex-col leading-none ${className}`}>
      <span className={`font-display text-[19px] font-semibold tracking-[0.06em] ${main}`}>LANGKAH</span>
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
