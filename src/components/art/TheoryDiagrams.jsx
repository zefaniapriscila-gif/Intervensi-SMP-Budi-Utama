import React, { useId } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

// Diagram kecil untuk empat landasan teori. Semua digambar dengan
// "tinta" biru dongker dan aksen bintang kuning agar satu keluarga.

const INK = '#14257F';
const SOFT = '#8C9AD0';
const SUN = '#FFC21A';
const PEN = '#6A3DF0';
const LABEL = { fontFamily: 'Plus Jakarta Sans Variable, sans-serif', fontSize: 11.5, fontWeight: 650, fill: INK };
const HAND = { fontFamily: 'Caveat Variable, cursive', fontSize: 17, fontWeight: 600, fill: PEN };

function polar(cx, cy, r, deg) {
  const a = (deg * Math.PI) / 180;
  return [cx + r * Math.cos(a), cy + r * Math.sin(a)];
}

function arc(cx, cy, r, from, to) {
  const [x1, y1] = polar(cx, cy, r, from);
  const [x2, y2] = polar(cx, cy, r, to);
  const large = Math.abs(to - from) > 180 ? 1 : 0;
  return `M${x1.toFixed(2)} ${y1.toFixed(2)}A${r} ${r} 0 ${large} 1 ${x2.toFixed(2)} ${y2.toFixed(2)}`;
}

function starPath(cx, cy, outer, inner = outer * 0.45) {
  let d = '';
  for (let i = 0; i < 10; i += 1) {
    const r = i % 2 === 0 ? outer : inner;
    const [x, y] = polar(cx, cy, r, -90 + i * 36);
    d += `${i === 0 ? 'M' : 'L'}${x.toFixed(2)} ${y.toFixed(2)}`;
  }
  return `${d}Z`;
}

function Arrowhead({ id, color = INK }) {
  return (
    <marker id={id} viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse">
      <path d="M1 1.2 8.6 5 1 8.8" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </marker>
  );
}

const VIEW = { once: true, margin: '0px 0px -12% 0px' };

// Garis tergambar dan titik muncul saat diagram masuk layar.
function useDraw() {
  const reduce = useReducedMotion();
  return {
    draw: (delay = 0, duration = 0.9) => (reduce ? {} : {
      initial: { pathLength: 0, opacity: 0 },
      whileInView: { pathLength: 1, opacity: 1 },
      viewport: VIEW,
      transition: { pathLength: { duration, delay, ease: [0.65, 0, 0.35, 1] }, opacity: { duration: 0.01, delay } },
    }),
    fade: (delay = 0) => (reduce ? {} : {
      initial: { opacity: 0 },
      whileInView: { opacity: 1 },
      viewport: VIEW,
      transition: { duration: 0.5, delay },
    }),
    pop: (delay = 0) => (reduce ? {} : {
      initial: { scale: 0, opacity: 0 },
      whileInView: { scale: 1, opacity: 1 },
      viewport: VIEW,
      transition: { type: 'spring', stiffness: 420, damping: 16, delay },
    }),
  };
}

function Frame({ label, children, className }) {
  return (
    <svg viewBox="0 0 320 200" className={className} role="img" aria-label={label}>
      {children}
    </svg>
  );
}

export function SelfRegulationDiagram({ className = '' }) {
  const id = useId().replace(/:/g, '');
  const { draw, fade, pop } = useDraw();
  const cx = 160;
  const cy = 96;
  const r = 58;
  const nodes = [-90, 30, 150];
  return (
    <Frame label="Siklus self-regulation: memantau perilaku, menilai capaian, menentukan langkah" className={className}>
      <defs><Arrowhead id={`a-${id}`} /></defs>
      {nodes.map((deg, i) => (
        <motion.path key={deg} {...draw(0.2 + i * 0.45, 0.5)} d={arc(cx, cy, r, deg + 14, nodes[(i + 1) % 3] + (i === 2 ? 360 : 0) - 14)} fill="none" stroke={INK} strokeWidth="1.6" strokeLinecap="round" markerEnd={`url(#a-${id})`} />
      ))}
      <circle cx={cx} cy={cy} r="22" fill="none" stroke={SOFT} strokeWidth="1.2" />
      <circle cx={cx} cy={cy} r="13" fill="none" stroke={SOFT} strokeWidth="1.2" />
      <motion.circle {...pop(1.5)} cx={cx} cy={cy} r="5" fill={SUN} />
      {nodes.map((deg, i) => {
        const [x, y] = polar(cx, cy, r, deg);
        return <motion.circle key={deg} {...pop(0.1 + i * 0.45)} cx={x} cy={y} r="6.5" fill={INK} stroke="#FFFFFF" strokeWidth="2.5" />;
      })}
      <text x={cx} y="24" textAnchor="middle" {...LABEL}>Memantau perilaku</text>
      <text x={polar(cx, cy, r, 30)[0] + 6} y="158" textAnchor="middle" {...LABEL}>
        <tspan x={polar(cx, cy, r, 30)[0] + 6}>Menilai</tspan>
        <tspan x={polar(cx, cy, r, 30)[0] + 6} dy="14">capaian</tspan>
      </text>
      <text x={polar(cx, cy, r, 150)[0] - 6} y="158" textAnchor="middle" {...LABEL}>
        <tspan x={polar(cx, cy, r, 150)[0] - 6}>Menentukan</tspan>
        <tspan x={polar(cx, cy, r, 150)[0] - 6} dy="14">langkah</tspan>
      </text>
      <motion.text {...fade(1.7)} x="236" y="70" {...HAND}>target</motion.text>
      <motion.path {...draw(1.6, 0.4)} d="M233 66c-14 4-26 14-42 24" fill="none" stroke={PEN} strokeWidth="1.4" strokeLinecap="round" />
    </Frame>
  );
}

function Person({ x, y, filled = true, color = INK }) {
  return (
    <g>
      <circle cx={x} cy={y} r="13" fill={filled ? color : '#FFFFFF'} stroke={color} strokeWidth="1.8" />
      <path
        d={`M${x - 26} ${y + 52}c0-18 11-30 26-30s26 12 26 30Z`}
        fill={filled ? color : '#FFFFFF'}
        stroke={color}
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </g>
  );
}

export function SocialLearningDiagram({ className = '' }) {
  const { fade, pop } = useDraw();
  return (
    <Frame label="Social learning: siswa mengamati teman yang diapresiasi" className={className}>
      <motion.path {...pop(0.2)} d={starPath(92, 40, 15)} fill={SUN} />
      {[-58, -28, 2, 32].map((deg) => {
        const [x1, y1] = polar(92, 40, 21, deg - 180);
        const [x2, y2] = polar(92, 40, 27, deg - 180);
        return <path key={deg} d={`M${x1} ${y1}L${x2} ${y2}`} stroke={SUN} strokeWidth="2" strokeLinecap="round" />;
      })}
      <Person x={92} y={92} />
      <Person x={228} y={92} filled={false} />
      <motion.path {...fade(0.6)} d="M214 86C188 66 140 50 112 44" fill="none" stroke={INK} strokeWidth="1.5" strokeDasharray="2 5" strokeLinecap="round" />
      <motion.path {...pop(1.1)} d={starPath(262, 52, 11)} fill="none" stroke={SUN} strokeWidth="1.8" strokeDasharray="3 3" strokeLinejoin="round" />
      <text x="92" y="172" textAnchor="middle" {...LABEL}>Teman diapresiasi</text>
      <text x="228" y="172" textAnchor="middle" {...LABEL}>Siswa mengamati</text>
      <motion.text {...fade(0.9)} x="168" y="34" textAnchor="middle" {...HAND}>terinspirasi</motion.text>
    </Frame>
  );
}

export function ReinforcementDiagram({ className = '' }) {
  const id = useId().replace(/:/g, '');
  const { draw, fade, pop } = useDraw();
  return (
    <Frame label="Positive reinforcement: perilaku, apresiasi spesifik, perilaku diulang" className={className}>
      <defs>
        <Arrowhead id={`r-${id}`} />
        <Arrowhead id={`p-${id}`} color={PEN} />
      </defs>
      <rect x="14" y="98" width="88" height="40" rx="20" fill="#FFFFFF" stroke={INK} strokeWidth="1.6" />
      <text x="58" y="122" textAnchor="middle" {...LABEL}>Perilaku</text>
      <motion.path {...draw(0.3, 0.3)} d="M108 118h22" stroke={INK} strokeWidth="1.6" strokeLinecap="round" markerEnd={`url(#r-${id})`} />
      <motion.path {...pop(0.6)} d={starPath(160, 118, 20)} fill={SUN} />
      <motion.path {...draw(0.85, 0.3)} d="M190 118h22" stroke={INK} strokeWidth="1.6" strokeLinecap="round" markerEnd={`url(#r-${id})`} />
      <rect x="218" y="98" width="88" height="40" rx="20" fill={INK} />
      <text x="262" y="122" textAnchor="middle" {...LABEL} fill="#F3F6FF">Diulang</text>
      <motion.path {...fade(1.25)} d="M262 92C254 34 74 30 60 90" fill="none" stroke={INK} strokeWidth="1.4" strokeDasharray="3 5" strokeLinecap="round" markerEnd={`url(#r-${id})`} />
      <text x="160" y="164" textAnchor="middle" {...LABEL}>Apresiasi spesifik</text>
      <text x="121" y="107" textAnchor="middle" {...HAND} fontSize="15">segera</text>
      <motion.text {...fade(1.45)} x="160" y="40" textAnchor="middle" {...HAND}>makin mungkin terulang</motion.text>
    </Frame>
  );
}

function spiralPoints(cx, cy, r0, growth, turns, steps = 220) {
  const pts = [];
  for (let i = 0; i <= steps; i += 1) {
    const t = (i / steps) * turns * Math.PI * 2;
    const r = r0 + growth * t;
    pts.push([cx + r * Math.cos(t - Math.PI / 2), cy + r * Math.sin(t - Math.PI / 2)]);
  }
  return pts;
}

function toPath(points) {
  return points.map(([x, y], i) => `${i === 0 ? 'M' : 'L'}${x.toFixed(2)} ${y.toFixed(2)}`).join('');
}

export function SpiralDiagram({ className = '' }) {
  const id = useId().replace(/:/g, '');
  const { draw, fade, pop } = useDraw();
  const cx = 160;
  const cy = 100;
  const pts = spiralPoints(cx, cy, 6, 6.2, 2.25);
  const marks = [];
  for (let q = 1; q <= 9; q += 1) {
    const t = (q / 4) * Math.PI * 2;
    const r = 6 + 6.2 * t;
    marks.push([cx + r * Math.cos(t - Math.PI / 2), cy + r * Math.sin(t - Math.PI / 2), q]);
  }
  return (
    <Frame label="Spiral curriculum: pengalaman ditinjau berulang dengan pemahaman yang makin dalam" className={className}>
      <defs><Arrowhead id={`s-${id}`} /></defs>
      <motion.path {...draw(0.1, 1.6)} d={toPath(pts)} fill="none" stroke={INK} strokeWidth="1.6" strokeLinecap="round" markerEnd={`url(#s-${id})`} />
      {marks.map(([x, y, q]) => (
        <motion.circle key={q} {...pop(0.15 + q * 0.16)} cx={x} cy={y} r={2.5 + q * 0.42} fill={q === 9 ? SUN : '#FFFFFF'} stroke={INK} strokeWidth="1.4" />
      ))}
      <motion.text {...fade(1.6)} x="232" y="50" {...HAND}>makin dalam</motion.text>
      <path d="M266 57c2 10 0 19-7 29" fill="none" stroke={PEN} strokeWidth="1.4" strokeLinecap="round" />
      <text x="58" y="186" {...HAND} fontSize="15" fill={SOFT}>tinjau lagi</text>
    </Frame>
  );
}
