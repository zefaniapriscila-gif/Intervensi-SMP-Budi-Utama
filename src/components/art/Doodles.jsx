import React, { useId } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

// Coretan tangan kecil yang dipakai di seluruh situs: garis bawah
// spidol, panah anotasi, paraf guru, stempel, dan segel piagam.

export function HandUnderline({ className = '', color = '#F2B134', delay = 0.6, strokeWidth = 7 }) {
  const reduce = useReducedMotion();
  return (
    <svg viewBox="0 0 300 16" preserveAspectRatio="none" className={className} aria-hidden="true">
      <motion.path
        d="M3 11.5C46 5.5 92 4 141 6.2 190 8.4 236 11.6 297 5.2"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        initial={reduce ? false : { pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.9, delay, ease: [0.65, 0, 0.35, 1] }}
      />
    </svg>
  );
}

export function HandArrow({ className = '', color = 'currentColor', flip = false, delay = 1 }) {
  const reduce = useReducedMotion();
  return (
    <svg viewBox="0 0 80 40" className={className} style={flip ? { transform: 'scaleX(-1)' } : undefined} aria-hidden="true">
      <motion.path
        d="M4 32C18 12 44 5 70 13"
        fill="none"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="round"
        initial={reduce ? false : { pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      />
      <motion.path
        d="M61 5.5 71.5 13.5 60 19.5"
        fill="none"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={reduce ? false : { pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.25, delay: delay + 0.55 }}
      />
    </svg>
  );
}

export function Paraf({ className = '', color = '#B03A1C' }) {
  return (
    <svg viewBox="0 0 84 30" className={className} aria-hidden="true">
      <path
        d="M3 22c5-12 11-18 14-14 3 4-6 15-2 15 5 0 9-15 14-14 4 1-2 11 2 11 5 0 7-9 11-9 3 0 1 7 5 7 6 0 12-8 18-9 4 0 6 2 15-1"
        fill="none"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Stempel karet: tepi sedikit kasar lewat displacement filter.
export function Stamp({ label = 'SIAP!', sub = 'untuk besok', color = '#B03A1C', className = '' }) {
  const id = useId().replace(/:/g, '');
  const fontSize = label.length > 6 ? 23 : 30;
  const spacing = label.length > 6 ? 1.2 : 2;
  return (
    <svg viewBox="0 0 168 76" className={className} role="img" aria-label={`Stempel ${label} ${sub}`}>
      <defs>
        <filter id={`rough-${id}`} x="-5%" y="-5%" width="110%" height="110%">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" seed="7" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="2.4" />
        </filter>
        <filter id={`speck-${id}`} x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="1.4" numOctaves="1" seed="3" />
          <feColorMatrix values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -20 7.6" />
        </filter>
        <mask id={`wear-${id}`} maskUnits="userSpaceOnUse" x="0" y="0" width="168" height="76">
          <rect width="168" height="76" fill="#fff" />
          <rect width="168" height="76" filter={`url(#speck-${id})`} />
        </mask>
      </defs>
      <g filter={`url(#rough-${id})`} mask={`url(#wear-${id})`} fill="none" stroke={color}>
        <rect x="3" y="3" width="162" height="70" rx="10" strokeWidth="3.2" />
        <rect x="9" y="9" width="150" height="58" rx="6" strokeWidth="1.2" />
        <text x="84" y="44" textAnchor="middle" fill={color} stroke="none" fontFamily="Fraunces Variable, Georgia, serif" fontWeight="800" fontSize={fontSize} letterSpacing={spacing}>{label}</text>
        <text x="84" y="59" textAnchor="middle" fill={color} stroke="none" fontFamily="Plus Jakarta Sans Variable, sans-serif" fontWeight="700" fontSize="9.5" letterSpacing="2.4">{sub.toUpperCase()}</text>
      </g>
    </svg>
  );
}

function rosettePath(cx, cy, outer, inner, points) {
  const step = Math.PI / points;
  let d = '';
  for (let i = 0; i < points * 2; i += 1) {
    const r = i % 2 === 0 ? outer : inner;
    const a = i * step - Math.PI / 2;
    d += `${i === 0 ? 'M' : 'L'}${(cx + r * Math.cos(a)).toFixed(2)} ${(cy + r * Math.sin(a)).toFixed(2)}`;
  }
  return `${d}Z`;
}

// Segel piagam Student of the Week.
export function Seal({ className = '', tone = 'marigold' }) {
  const fill = tone === 'leaf' ? '#2E8A5F' : '#F2B134';
  const ink = tone === 'leaf' ? '#F6F2EA' : '#1E2A5E';
  return (
    <svg viewBox="0 0 64 80" className={className} aria-hidden="true">
      <path d="M20 44 12 76l10-6 6 9 6-30Z" fill={tone === 'leaf' ? '#257450' : '#B03A1C'} />
      <path d="M44 44l8 32-10-6-6 9-6-30Z" fill={tone === 'leaf' ? '#257450' : '#B03A1C'} opacity="0.88" />
      <path d={rosettePath(32, 32, 30, 26.5, 18)} fill={fill} />
      <circle cx="32" cy="32" r="21" fill="none" stroke={ink} strokeWidth="1" strokeDasharray="1.5 2.5" opacity="0.6" />
      <path d="m32 19.5 3.6 7.5 8.2 1.1-6 5.7 1.5 8.1L32 38l-7.3 3.9 1.5-8.1-6-5.7 8.2-1.1Z" fill={ink} />
    </svg>
  );
}

// Jejak kaki kecil: dipakai sebagai penanda "langkah" di tangga beranda.
export function Footstep({ className = '', side = 'left' }) {
  return (
    <svg viewBox="0 0 20 28" className={className} style={side === 'right' ? { transform: 'scaleX(-1)' } : undefined} aria-hidden="true">
      <path d="M10.8 27c-3.6 0-5.6-2.6-5.6-6.6 0-4.6 1.4-9.6 5.5-9.6 3.4 0 4.6 3.4 4.6 7.4 0 4.6-1.2 8.8-4.5 8.8Z" fill="currentColor" />
      <circle cx="5.2" cy="6.8" r="2.1" fill="currentColor" />
      <circle cx="9.2" cy="4.2" r="2.3" fill="currentColor" />
      <circle cx="13.6" cy="3.6" r="2.1" fill="currentColor" />
      <circle cx="16.8" cy="6" r="1.8" fill="currentColor" />
    </svg>
  );
}
