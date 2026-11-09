import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { LogoMark } from '../brand/Logo';

// Spiral alur intervensi: empat jari-jari = empat tahap, spiral = waktu.
// Setiap putaran melewati tahap yang sama dengan lingkaran yang makin
// lebar—kemandirian siswa yang makin tumbuh (spiral curriculum).
const SIZE = 560;
const C = SIZE / 2;
const R0 = 20;
const TURNS = 3;
const R_MAX = 214;
const B = (R_MAX - R0) / (TURNS * Math.PI * 2);
const STAGES = [
  { label: 'Ingatkan', deg: -90 },
  { label: 'Pantau', deg: 0 },
  { label: 'Refleksikan', deg: 90 },
  { label: 'Apresiasi', deg: 180 },
];

function point(t) {
  const r = R0 + B * t;
  const a = t - Math.PI / 2;
  return [C + r * Math.cos(a), C + r * Math.sin(a)];
}

const SPIRAL = (() => {
  const steps = 360;
  let d = '';
  for (let i = 0; i <= steps; i += 1) {
    const [x, y] = point((i / steps) * TURNS * Math.PI * 2);
    d += `${i ? 'L' : 'M'}${x.toFixed(2)} ${y.toFixed(2)}`;
  }
  return d;
})();

const DOTS = Array.from({ length: TURNS * 4 + 1 }, (_, i) => {
  const t = (i / 4) * Math.PI * 2;
  const [x, y] = point(t);
  return { x, y, i, stage: i % 4 };
}).slice(1);

export default function SpiralFlow({ className = '' }) {
  const reduce = useReducedMotion();
  const view = { once: true, margin: '0px 0px -20% 0px' };
  return (
    <div className={`relative mx-auto aspect-square w-full max-w-[560px] ${className}`}>
      <svg viewBox={`0 0 ${SIZE} ${SIZE}`} className="absolute inset-0 h-full w-full" role="img" aria-label="Spiral alur intervensi: ingatkan, pantau, refleksikan, apresiasi, lalu berulang dengan lingkaran yang makin lebar">
        {STAGES.map((stage) => {
          const a = (stage.deg * Math.PI) / 180;
          return (
            <line key={stage.label} x1={C} y1={C} x2={C + 236 * Math.cos(a)} y2={C + 236 * Math.sin(a)} stroke="#BFCBEE" strokeWidth="1.4" strokeDasharray="2 6" strokeLinecap="round" />
          );
        })}
        <motion.path
          d={SPIRAL}
          fill="none"
          stroke="#14257F"
          strokeWidth="2.4"
          strokeLinecap="round"
          initial={reduce ? false : { pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={view}
          transition={{ duration: 2.4, ease: [0.45, 0, 0.2, 1] }}
        />
        {DOTS.map((dot) => {
          const last = dot.i > TURNS * 4 - 4;
          return (
            <motion.circle
              key={dot.i}
              cx={dot.x}
              cy={dot.y}
              r={3 + dot.i * 0.55}
              fill={last ? '#FFC21A' : '#FFFFFF'}
              stroke="#14257F"
              strokeWidth="2"
              initial={reduce ? false : { scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={view}
              transition={{ type: 'spring', stiffness: 420, damping: 18, delay: 0.15 + (dot.i / (TURNS * 4)) * 2.2 }}
            />
          );
        })}
      </svg>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <LogoMark className="h-9 w-9" />
      </div>
      {STAGES.map((stage, index) => {
        const a = (stage.deg * Math.PI) / 180;
        const x = ((C + 252 * Math.cos(a)) / SIZE) * 100;
        const y = ((C + 252 * Math.sin(a)) / SIZE) * 100;
        const align = stage.deg === 0 ? 'sm:translate-x-[-30%]' : stage.deg === 180 ? 'sm:translate-x-[-70%]' : '';
        return (
          <motion.span
            key={stage.label}
            className={`absolute -translate-y-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-card px-2.5 py-1.5 text-[12.5px] font-bold text-ink shadow-paper ring-1 ring-line sm:px-3 sm:text-[14px] ${align}`}
            style={{ left: `${x}%`, top: `${y}%` }}
            initial={reduce ? false : { opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={view}
            transition={{ duration: 0.5, delay: 0.4 + index * 0.45 }}
          >
            <span className="text-marigold-ink tabular sm:mr-1.5">{String(index + 1).padStart(2, '0')}</span>
            <span className="hidden sm:inline">{stage.label}</span>
          </motion.span>
        );
      })}
    </div>
  );
}
