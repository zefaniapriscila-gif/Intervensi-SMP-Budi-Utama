import React from 'react';
import { formatClock } from '../lib/time';
import { useNow } from '../lib/useNow';

function SignalIcon() {
  return (
    <svg viewBox="0 0 18 12" className="h-[11px] w-[16px]" aria-hidden="true">
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x={i * 4.6} y={9 - i * 3} width="3.2" height={3 + i * 3} rx="0.9" fill="currentColor" opacity={i === 3 ? 0.35 : 1} />
      ))}
    </svg>
  );
}

function WifiIcon() {
  return (
    <svg viewBox="0 0 16 12" className="h-[11px] w-[15px]" aria-hidden="true">
      <path d="M8 11.2 5.6 8.6a3.4 3.4 0 0 1 4.8 0Z" fill="currentColor" />
      <path d="M3.4 6.4a6.6 6.6 0 0 1 9.2 0" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M1 3.8a10 10 0 0 1 14 0" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function BatteryIcon() {
  return (
    <svg viewBox="0 0 26 12" className="h-[11px] w-[24px]" aria-hidden="true">
      <rect x="0.75" y="0.75" width="21.5" height="10.5" rx="3" fill="none" stroke="currentColor" strokeOpacity="0.45" strokeWidth="1.5" />
      <rect x="2.5" y="2.5" width="15" height="7" rx="1.6" fill="currentColor" />
      <path d="M23.8 4.2v3.6c.8-.3 1.4-1 1.4-1.8s-.6-1.5-1.4-1.8Z" fill="currentColor" fillOpacity="0.45" />
    </svg>
  );
}

// Bingkai ponsel netral (layar penuh + kamera punch-hole), mengikuti jenis
// ponsel yang paling banyak dipakai siswa. Jam status bar mengikuti jam asli.
export default function PhoneFrame({ children }) {
  const now = useNow();
  return (
    <div className="relative shrink-0" style={{ height: 'min(860px, calc(var(--vh-full) - 64px))', aspectRatio: '9 / 19.4' }}>
      <span className="absolute -right-[3px] top-[19%] h-[9%] w-[4px] rounded-r-[3px] bg-[#2a2c34]" aria-hidden="true" />
      <span className="absolute -right-[3px] top-[31%] h-[5%] w-[4px] rounded-r-[3px] bg-[#2a2c34]" aria-hidden="true" />
      <div className="absolute inset-0 rounded-[54px] bg-[#16171c] shadow-[0_2px_0_1px_#2c2e36_inset,0_-1px_0_1px_#0c0d10_inset,0_60px_90px_-40px_rgb(20_26_58/0.6),0_24px_40px_-24px_rgb(20_26_58/0.5)]" aria-hidden="true" />
      <div className="absolute inset-[10px] isolate flex flex-col overflow-hidden rounded-[45px] bg-paper">
        <div className="relative z-40 flex h-[40px] shrink-0 items-center justify-between bg-paper/92 px-7 text-ink backdrop-blur-md" aria-hidden="true">
          <span className="text-[13px] font-bold tabular">{formatClock(now)}</span>
          <span className="absolute left-1/2 top-[11px] h-[17px] w-[17px] -translate-x-1/2 rounded-full bg-[#0b0c10] shadow-[inset_0_0_0_3px_#1c1d22]" aria-hidden="true" />
          <span className="flex items-center gap-1.5"><SignalIcon /><WifiIcon /><BatteryIcon /></span>
        </div>
        <div className="relative min-h-0 flex-1">{children}</div>
        <div className="flex h-[22px] shrink-0 items-center justify-center bg-paper" aria-hidden="true">
          <span className="h-[4px] w-[108px] rounded-full bg-ink/35" />
        </div>
      </div>
    </div>
  );
}
