import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { LogoMark } from '../brand/Logo';
import { Medal, StatusBadge } from '../ui/badges';
import { useEnterDelay } from '../../lib/enterDelay';
import { isEvening } from '../../lib/time';

// Cuplikan aplikasi DISIPLIN: notifikasi, checklist, pesan wali kelas, dan penghargaan.
// Ukuran desain tetap 540×600 lalu diskalakan agar presisi di semua layar.
const W = 540;
const H = 600;

function Piece({ x, y, rotate, depth, delay, mouse, float = 6, z = 1, children }) {
  const reduce = useReducedMotion();
  const tx = useTransform(mouse.x, (v) => v * depth);
  const ty = useTransform(mouse.y, (v) => v * depth);
  return (
    <motion.div
      className="absolute"
      style={{ left: x, top: y, zIndex: z, x: reduce ? 0 : tx, y: reduce ? 0 : ty }}
      whileHover={reduce ? undefined : { scale: 1.025, transition: { type: 'spring', stiffness: 260, damping: 18 } }}
    >
      <motion.div
        initial={reduce ? false : { opacity: 0, rotate: rotate * 2.6, scale: 0.9, y: 34 }}
        animate={{ opacity: 1, rotate, scale: 1, y: 0 }}
        transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Gerak "bernapas" pelan agar meja terasa hidup. */}
        <motion.div
          animate={reduce ? undefined : { y: [0, -float, 0], rotate: [0, rotate > 0 ? 0.6 : -0.6, 0] }}
          transition={{ duration: 5 + Math.abs(depth) * 0.3, repeat: Infinity, ease: 'easeInOut', delay: delay + 1 }}
        >
          {children}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

const CHECKS = ['Seragam dan atribut lengkap', 'Buku dan perlengkapan pelajaran', 'Tugas untuk besok', 'Perangkat belajar disiapkan'];

function SelfCheck({ index, start }) {
  const reduce = useReducedMotion();
  const delay = start + index * 0.32;
  return (
    <motion.span
      className="relative flex h-[18px] w-[18px] items-center justify-center rounded-[5px] border-[1.5px] border-navy"
      initial={reduce ? false : { backgroundColor: 'rgba(23,41,107,0)' }}
      animate={{ backgroundColor: 'rgba(23,41,107,1)' }}
      transition={{ duration: 0.15, delay }}
    >
      <svg viewBox="0 0 16 16" className="h-3 w-3" aria-hidden="true">
        <motion.path
          d="M3.5 8.4 6.6 11.4 12.6 4.8"
          fill="none"
          stroke="#F3F6FF"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={reduce ? false : { pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.22, delay: delay + 0.06 }}
        />
      </svg>
    </motion.span>
  );
}

export default function HeroCollage({ className = '' }) {
  const wrapRef = useRef(null);
  const [scale, setScale] = useState(1);
  const reduce = useReducedMotion();
  const base = useEnterDelay();
  const evening = isEvening();
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const mouse = {
    x: useSpring(rawX, { stiffness: 80, damping: 18 }),
    y: useSpring(rawY, { stiffness: 80, damping: 18 }),
  };
  const checkStart = base + 1.15;
  const stampAt = checkStart + CHECKS.length * 0.32 + 0.2;

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return undefined;
    const ro = new ResizeObserver(([entry]) => setScale(Math.min(1.1, entry.contentRect.width / W)));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const onMove = (event) => {
    if (reduce || event.pointerType !== 'mouse') return;
    const rect = wrapRef.current.getBoundingClientRect();
    rawX.set(((event.clientX - rect.left) / rect.width - 0.5) * 2);
    rawY.set(((event.clientY - rect.top) / rect.height - 0.5) * 2);
  };

  const onLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <div ref={wrapRef} className={`relative w-full ${className}`} style={{ height: H * scale }} onPointerMove={onMove} onPointerLeave={onLeave} aria-hidden="true">
      <div className="absolute left-0 top-0 origin-top-left" style={{ width: W, height: H, transform: `scale(${scale})` }}>
        {/* Latar: lingkaran gradasi biru tua dengan cincin oranye. */}
        <motion.span
          className="absolute left-[90px] top-[60px] h-[440px] w-[440px] rounded-full bg-gradient-to-br from-navy-2 via-pen to-rose"
          initial={reduce ? false : { scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.4, delay: base + 0.05, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.span
          className="absolute left-[66px] top-[40px] h-[480px] w-[480px] rounded-full border-2 border-dashed border-marigold/60"
          initial={reduce ? false : { opacity: 0, rotate: -40 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 2.2, delay: base + 0.3, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Notifikasi pengingat malam */}
        <Piece x={10} y={14} rotate={0} depth={-6} delay={base + 0.25} mouse={mouse} z={3} float={5}>
          <div className="w-[330px] rounded-[22px] bg-card p-4 shadow-lift">
            <div className="flex items-center gap-2 text-[12px] font-semibold text-ink-3">
              <LogoMark className="h-5 w-5" />
              <span className="font-bold tracking-[0.06em] text-ink">DISIPLIN</span>
              <span>· {evening ? 'sekarang' : 'semalam'}</span>
              <span className="ml-auto tabular font-bold text-ink">19.30</span>
            </div>
            <div className="mt-2.5 flex gap-3">
              <motion.span
                className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-[12px] bg-night text-marigold"
                animate={reduce ? undefined : { rotate: [0, -14, 10, -6, 0] }}
                transition={{ duration: 0.9, delay: base + 1.1, repeat: Infinity, repeatDelay: 5.5 }}
              >
                <Moon className="h-[18px] w-[18px]" />
              </motion.span>
              <div>
                <p className="text-[15px] font-bold text-ink">Persiapan malam</p>
                <p className="mt-0.5 text-[13.5px] leading-snug text-ink-2">Cek seragam, buku, tugas, dan perangkat belajar untuk besok.</p>
              </div>
            </div>
          </div>
        </Piece>

        {/* Pengingat pagi */}
        <Piece x={372} y={100} rotate={0} depth={9} delay={base + 0.55} mouse={mouse} z={5} float={8}>
          <div className="flex items-center gap-2 whitespace-nowrap rounded-full bg-marigold py-2 pl-2 pr-4 text-night shadow-lift">
            <motion.span
              className="flex h-7 w-7 items-center justify-center rounded-full bg-night text-marigold-2"
              animate={reduce ? undefined : { rotate: 360 }}
              transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
            >
              <Sun className="h-4 w-4" />
            </motion.span>
            <span className="text-[14px] font-bold"><span className="tabular">06.15</span> · berangkat</span>
          </div>
        </Piece>

        {/* Checklist: tercentang satu per satu, lalu muncul penanda siap. */}
        <Piece x={135} y={157} rotate={0} depth={4} delay={base + 0.4} mouse={mouse} z={2} float={4}>
          <div className="relative w-[350px] rounded-[26px] bg-card px-6 pb-7 pt-5 shadow-lift">
            <div className="flex items-center justify-between">
              <p className="font-display text-[20px] font-bold leading-tight text-ink">Persiapan untuk besok</p>
              <span className="rounded-full bg-leaf-soft px-2.5 py-1 text-[11.5px] font-bold text-leaf-ink tabular">{CHECKS.length}/{CHECKS.length}</span>
            </div>
            <ul className="mt-3 divide-y divide-line">
              {CHECKS.map((label, index) => (
                <li key={label} className="relative flex h-[40px] items-center gap-3 text-[14.5px] font-medium text-ink-2">
                  <SelfCheck index={index} start={checkStart} />
                  <span className="relative">
                    {label}
                    <motion.span
                      className="absolute left-0 top-1/2 h-[1.5px] w-full origin-left bg-ink-3/45"
                      initial={reduce ? false : { scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.3, delay: checkStart + index * 0.32 + 0.12, ease: 'easeOut' }}
                    />
                  </span>
                </li>
              ))}
            </ul>
            <motion.div
              className="absolute -bottom-4 right-5"
              initial={reduce ? false : { opacity: 0, scale: 0.7, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={reduce ? { duration: 0 } : { type: 'spring', stiffness: 420, damping: 20, delay: stampAt }}
            >
              <StatusBadge label="Siap!" sub="untuk besok" />
            </motion.div>
          </div>
        </Piece>

        {/* Pesan dari wali kelas */}
        <Piece x={0} y={398} rotate={0} depth={-10} delay={base + 0.7} mouse={mouse} z={4} float={7}>
          <div className="relative w-[272px] overflow-hidden rounded-[22px] bg-marigold-soft py-4 pl-6 pr-5 shadow-lift">
            <span className="absolute inset-y-0 left-0 w-1.5 bg-marigold" />
            <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-marigold-ink">Pesan wali kelas</p>
            <p className="mt-1.5 text-[14px] font-medium leading-snug text-ink">Holyna, terima kasih sudah jujur bercerita. Besok coba siapkan tas sebelum tidur, ya!</p>
          </div>
        </Piece>

        {/* Penghargaan Student of the Week */}
        <Piece x={300} y={430} rotate={0} depth={7} delay={base + 0.85} mouse={mouse} z={3} float={6}>
          <div className="relative w-[232px] overflow-hidden rounded-[22px] bg-card p-4 pr-16 shadow-lift">
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-marigold-ink">Student of the Week</p>
            <p className="mt-1 text-[12.5px] font-medium text-ink-3">Perkembangan Terbaik</p>
            <p className="mt-2 font-display text-[20px] font-bold leading-tight text-ink">Rafi Pratama</p>
            <p className="text-[12px] font-semibold text-ink-3">Kelas VII B</p>
            <Medal className="absolute right-4 top-4 h-11 w-11" />
            {!reduce && (
              <motion.span
                className="pointer-events-none absolute inset-y-0 left-0 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/80 to-transparent"
                initial={{ x: '-160%' }}
                animate={{ x: '420%' }}
                transition={{ duration: 1.3, delay: base + 2.2, repeat: Infinity, repeatDelay: 4.5, ease: [0.4, 0, 0.2, 1] }}
              />
            )}
          </div>
        </Piece>
      </div>
    </div>
  );
}
