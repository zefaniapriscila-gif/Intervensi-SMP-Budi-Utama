import React, { useRef } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';
import { EASE } from '../../lib/motion';

// Judul muncul kata demi kata dari balik "garis" (masker), seperti
// tulisan yang naik dari baris buku tulis.
export function SplitText({ text, className = '', delay = 0, stagger = 0.055, once = true, trigger = 'view' }) {
  const reduce = useReducedMotion();
  const words = text.split(' ');
  const motionProps = (index) => {
    const transition = { duration: 0.85, ease: EASE, delay: delay + index * stagger };
    if (reduce) return { initial: false };
    return trigger === 'mount'
      ? { initial: { y: '108%' }, animate: { y: '0%' }, transition }
      : { initial: { y: '108%' }, whileInView: { y: '0%' }, viewport: { once, margin: '0px 0px -10% 0px' }, transition };
  };
  return (
    <span className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {words.map((word, index) => (
          <React.Fragment key={`${word}-${index}`}>
            <span className="-mb-[0.14em] inline-block overflow-hidden pb-[0.14em] align-bottom">
              <motion.span className="inline-block will-change-transform" {...motionProps(index)}>{word}</motion.span>
            </span>
            {index < words.length - 1 ? ' ' : null}
          </React.Fragment>
        ))}
      </span>
    </span>
  );
}

// Tombol yang sedikit "tertarik" ke arah kursor.
export function Magnetic({ children, strength = 0.28, className = '' }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const x = useSpring(useMotionValue(0), { stiffness: 220, damping: 18, mass: 0.4 });
  const y = useSpring(useMotionValue(0), { stiffness: 220, damping: 18, mass: 0.4 });

  const onMove = (event) => {
    if (reduce || event.pointerType !== 'mouse') return;
    const rect = ref.current.getBoundingClientRect();
    x.set((event.clientX - (rect.left + rect.width / 2)) * strength);
    y.set((event.clientY - (rect.top + rect.height / 2)) * strength);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.span ref={ref} className={`inline-flex ${className}`} style={{ x, y }} onPointerMove={onMove} onPointerLeave={reset}>
      {children}
    </motion.span>
  );
}

function StairGlyph() {
  return (
    <svg viewBox="0 0 30 24" className="h-[0.5em] w-[0.62em] shrink-0" aria-hidden="true">
      <path d="M0 24V17H10V10H20V3H30V24Z" fill="#F2B134" />
    </svg>
  );
}

// Pita berjalan berisi empat tahap alur intervensi.
export function FlowMarquee({ words, duration = 34 }) {
  const row = Array.from({ length: 3 }, () => words).flat();
  return (
    <div className="relative overflow-hidden border-y border-line bg-card/60 py-4 sm:py-5" aria-hidden="true">
      <motion.div
        className="flex w-max items-center"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration, ease: 'linear', repeat: Infinity }}
      >
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center">
            {row.map((word, index) => (
              <span key={`${copy}-${index}`} className="flex items-center gap-6 pr-6 font-display text-[30px] italic leading-none text-ink sm:gap-8 sm:pr-8 sm:text-[42px] [font-variation-settings:'SOFT'_100,'WONK'_1]">
                {word}
                <StairGlyph />
              </span>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

// Ledakan bintang kecil (stiker bintang guru) saat sesuatu selesai.
export function StarBurst({ count = 9, radius = 74, className = '' }) {
  const reduce = useReducedMotion();
  if (reduce) return null;
  return (
    <span className={`pointer-events-none absolute ${className}`} aria-hidden="true">
      {Array.from({ length: count }, (_, index) => {
        const angle = (index / count) * Math.PI * 2 + 0.4;
        const distance = radius * (0.7 + ((index * 37) % 10) / 22);
        const size = 9 + ((index * 53) % 7);
        return (
          <motion.svg
            key={index}
            viewBox="0 0 20 20"
            className="absolute left-0 top-0"
            style={{ width: size, height: size, marginLeft: -size / 2, marginTop: -size / 2 }}
            initial={{ x: 0, y: 0, scale: 0, rotate: 0, opacity: 1 }}
            animate={{ x: Math.cos(angle) * distance, y: Math.sin(angle) * distance, scale: [0, 1.2, 0.9], rotate: 120 + index * 25, opacity: [1, 1, 0] }}
            transition={{ duration: 0.9, ease: [0.2, 0.7, 0.3, 1], times: [0, 0.6, 1] }}
          >
            <path d="m10 1 2.6 5.6 6 .7-4.5 4.1 1.2 6L10 14.4l-5.3 3 1.2-6L1.4 7.3l6-.7Z" fill={index % 3 === 0 ? '#B03A1C' : '#F2B134'} />
          </motion.svg>
        );
      })}
    </span>
  );
}

// Tirai tangga untuk perpindahan halaman: lima kolom naik dari bawah
// bergantian (kanan dulu, sehingga membentuk tangga), menutup layar,
// lalu terus naik membuka halaman baru.
const CURTAIN_EASE = [0.76, 0, 0.24, 1];
export function PageCurtain() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[80] flex overflow-hidden" aria-hidden="true">
      {Array.from({ length: 5 }, (_, index) => (
        <motion.span
          key={index}
          className={`relative h-full flex-1 ${index === 4 ? 'bg-marigold' : 'bg-navy'}`}
          style={{ marginLeft: index ? -1 : 0 }}
          variants={{
            enter: { y: '0%' },
            open: { y: '-102%', transition: { duration: 0.55, ease: CURTAIN_EASE, delay: 0.06 + index * 0.06 } },
            exit: { y: ['102%', '0%'], transition: { duration: 0.5, ease: CURTAIN_EASE, delay: (4 - index) * 0.06 } },
          }}
        />
      ))}
    </div>
  );
}
