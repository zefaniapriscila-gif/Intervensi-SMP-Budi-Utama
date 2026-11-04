import React, { useEffect, useRef } from 'react';
import { animate, motion, useInView, useMotionValue, useReducedMotion, useTransform } from 'framer-motion';
import { LockKeyhole } from 'lucide-react';

export function ScreenTitle({ eyebrow, title, children }) {
  return (
    <header className="px-5 pb-5 pt-5">
      {eyebrow && <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-ink-3">{eyebrow}</p>}
      <h1 className="mt-1.5 font-display text-[30px] font-[560] leading-[1.08] tracking-[-0.02em] text-ink">{title}</h1>
      {children && <p className="mt-2 text-[14.5px] leading-relaxed text-ink-2">{children}</p>}
    </header>
  );
}

export function SectionLabel({ children, action }) {
  return (
    <div className="mb-3 flex items-center justify-between gap-3 px-1">
      <h2 className="text-[12px] font-bold uppercase tracking-[0.14em] text-ink-3">{children}</h2>
      {action}
    </div>
  );
}

export function Card({ className = '', children, ...rest }) {
  return (
    <div className={`rounded-[24px] bg-card shadow-paper ring-1 ring-line/80 ${className}`} {...rest}>
      {children}
    </div>
  );
}

export function PrivacyNote({ icon: Icon = LockKeyhole, children, tone = 'paper' }) {
  const tones = {
    paper: 'bg-paper-2 text-ink-2',
    navy: 'bg-navy text-mist',
  };
  return (
    <div className={`flex gap-3 rounded-[18px] p-4 ${tones[tone]}`} data-surface={tone === 'navy' ? 'dark' : undefined}>
      <Icon className={`mt-0.5 h-4 w-4 shrink-0 ${tone === 'navy' ? 'text-marigold' : 'text-navy'}`} />
      <p className="text-[13px] leading-relaxed">{children}</p>
    </div>
  );
}

export function DemoNote({ children }) {
  return <p className="px-6 pb-2 pt-1 text-center text-[12px] leading-relaxed text-ink-3">{children}</p>;
}

// Angka yang menghitung naik saat pertama terlihat, lalu beranimasi saat berubah.
export function CountUp({ value, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const reduce = useReducedMotion();
  const mv = useMotionValue(reduce ? value : 0);
  const rounded = useTransform(mv, (v) => Math.round(v));

  useEffect(() => {
    if (!inView) return undefined;
    if (reduce) {
      mv.set(value);
      return undefined;
    }
    const controls = animate(mv, value, { duration: 1.1, ease: [0.22, 1, 0.36, 1] });
    return () => controls.stop();
  }, [inView, value, mv, reduce]);

  return <motion.span ref={ref} className={`tabular ${className}`}>{rounded}</motion.span>;
}

// Indikator tangga: setiap persiapan yang siap mengisi satu anak tangga,
// dan titik kuning (siswa) melompat naik.
const STAIR_SIZES = {
  md: { w: 16, gap: 3, rise: 7, base: 5, dot: 10, radius: 4 },
  sm: { w: 8, gap: 2, rise: 3, base: 3, dot: 6, radius: 2 },
};

export function StairProgress({ done, total, size = 'md', tone = 'light' }) {
  const reduce = useReducedMotion();
  const s = STAIR_SIZES[size];
  const width = total * s.w + (total - 1) * s.gap;
  const stairs = total * s.rise + s.base;
  const height = stairs + s.dot + 4;
  const dotX = done === 0 ? -s.dot - 2 : (done - 1) * (s.w + s.gap) + (s.w - s.dot) / 2;
  const dotY = done === 0 ? height - s.dot : height - (done * s.rise + s.base) - s.dot - 1;
  const empty = tone === 'dark' ? 'bg-white/15' : 'bg-paper-3';
  const filled = tone === 'dark' ? 'bg-marigold' : 'bg-navy';
  return (
    <span className="relative inline-block shrink-0" style={{ width, height }} aria-hidden="true">
      {Array.from({ length: total }, (_, i) => (
        <motion.span
          key={i}
          className={`absolute bottom-0 transition-colors duration-300 ${i < done ? filled : empty}`}
          style={{ left: i * (s.w + s.gap), width: s.w, height: (i + 1) * s.rise + s.base, borderTopLeftRadius: s.radius, borderTopRightRadius: s.radius }}
        />
      ))}
      <motion.span
        className="absolute left-0 top-0 rounded-full bg-marigold shadow-[0_0_0_2px_var(--color-card)]"
        style={{ width: s.dot, height: s.dot }}
        initial={false}
        animate={reduce ? { x: dotX, y: dotY } : { x: dotX, y: [null, dotY - s.rise * 1.8, dotY] }}
        transition={{ duration: 0.45, ease: [0.3, 0, 0.3, 1] }}
      />
    </span>
  );
}
