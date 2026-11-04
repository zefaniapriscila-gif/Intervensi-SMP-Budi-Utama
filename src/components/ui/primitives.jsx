import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Backpack, House, Presentation } from 'lucide-react';
import { EASE } from '../../lib/motion';

// Muncul saat masuk layar. Gerak kecil dan sekali saja.
export function Reveal({ as = 'div', delay = 0, y = 18, className = '', children, ...rest }) {
  const reduce = useReducedMotion();
  const Comp = motion[as] ?? motion.div;
  return (
    <Comp
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -12% 0px' }}
      transition={{ duration: 0.7, delay, ease: EASE }}
      {...rest}
    >
      {children}
    </Comp>
  );
}

export function Switch({ checked, onChange, label, tone = 'light' }) {
  const track = checked
    ? tone === 'dark' ? 'bg-marigold' : 'bg-navy'
    : tone === 'dark' ? 'bg-white/20' : 'bg-line-2/80';
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      onClick={onChange}
      className={`relative inline-flex h-[26px] w-[46px] shrink-0 items-center rounded-full p-[3px] transition-colors duration-300 ${track}`}
    >
      <motion.span
        layout
        transition={{ type: 'spring', stiffness: 600, damping: 34 }}
        className={`block h-5 w-5 rounded-full shadow-[0_1px_3px_rgb(20_26_58/0.35)] ${checked ? 'ml-auto' : ''} ${checked && tone === 'dark' ? 'bg-night' : 'bg-white'}`}
      />
    </button>
  );
}

const ROLE_ICON = { student: Backpack, parent: House, teacher: Presentation };
const ROLE_TINT = {
  student: 'bg-marigold text-ink',
  parent: 'bg-leaf-soft text-leaf-ink',
  teacher: 'bg-pen-soft text-pen',
};

export function RoleBadge({ role, size = 'md', className = '' }) {
  const Icon = ROLE_ICON[role];
  const dims = size === 'lg' ? 'h-12 w-12 rounded-[16px]' : size === 'sm' ? 'h-8 w-8 rounded-[10px]' : 'h-10 w-10 rounded-[13px]';
  const icon = size === 'lg' ? 'h-[22px] w-[22px]' : size === 'sm' ? 'h-4 w-4' : 'h-[18px] w-[18px]';
  return (
    <span className={`inline-flex shrink-0 items-center justify-center ${dims} ${ROLE_TINT[role]} ${className}`} aria-hidden="true">
      <Icon className={icon} strokeWidth={2} />
    </span>
  );
}

// Inisial siswa di daftar: huruf serif miring di atas kertas.
export function Initial({ letter, tone = 'marigold', className = 'h-10 w-10 text-[19px]' }) {
  const tones = {
    marigold: 'bg-marigold-soft text-marigold-ink',
    leaf: 'bg-leaf-soft text-leaf-ink',
    pen: 'bg-pen-soft text-pen',
    navy: 'bg-navy text-paper',
    paper: 'bg-paper-2 text-ink-2',
  };
  return (
    <span className={`inline-flex shrink-0 items-center justify-center rounded-full font-display font-semibold italic ${tones[tone]} ${className}`} aria-hidden="true">
      {letter}
    </span>
  );
}

export function Overline({ children, className = '', tone = 'ink' }) {
  const color = tone === 'paper' ? 'text-mist' : tone === 'marigold' ? 'text-marigold' : 'text-ink-3';
  return <p className={`text-[11.5px] font-bold uppercase tracking-[0.16em] ${color} ${className}`}>{children}</p>;
}
