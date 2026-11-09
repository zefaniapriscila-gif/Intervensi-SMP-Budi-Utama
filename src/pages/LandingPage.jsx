import React, { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion';
import { ArrowRight, ArrowUpRight, LockKeyhole } from 'lucide-react';
import HeroCollage from '../components/art/HeroCollage';
import { THEORY_DIAGRAMS } from '../components/art/theoryDiagramMap';
import { LogoMark } from '../components/brand/Logo';
import { FlowMarquee, Magnetic, SplitText } from '../components/motion/Motion';
import { IndicatorIcon } from '../components/ui/Indicators';
import { Overline, Reveal, RoleBadge } from '../components/ui/primitives';
import { DAY_STEPS, FLOW, INDICATORS, PRINCIPLES, ROLES, THEORIES } from '../data/program';
import { useEnterDelay } from '../lib/enterDelay';
import { plainClick } from '../lib/links';
import { EASE } from '../lib/motion';
import { ROUTES, href } from '../lib/router';

function MaskLine({ children, delay, className = '' }) {
  const reduce = useReducedMotion();
  return (
    <span className={`block overflow-hidden whitespace-nowrap pb-[0.08em] ${className}`}>
      <motion.span
        className="block will-change-transform"
        initial={reduce ? false : { y: '112%', rotate: 2.5 }}
        animate={{ y: '0%', rotate: 0 }}
        transition={{ duration: 1, delay, ease: EASE }}
        style={{ originX: 0 }}
      >
        {children}
      </motion.span>
    </span>
  );
}

function Hero({ onOpenPrototype }) {
  const reduce = useReducedMotion();
  const base = useEnterDelay();
  const rise = (delay) => ({
    initial: reduce ? false : { opacity: 0, y: 26 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay: base + delay, ease: EASE },
  });

  return (
    <section className="mx-auto grid w-full max-w-[1240px] items-center gap-10 px-4 pb-16 pt-8 sm:px-8 sm:pt-12 lg:grid-cols-12 lg:items-start lg:gap-6 lg:pb-24 lg:pt-[80px]">
      <div className="hero-shift lg:col-span-6 xl:col-span-6">
        <motion.p {...rise(0.05)} className="inline-flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.16em] text-ink-3">
          <span className="h-2 w-2 rounded-full bg-marigold ring-4 ring-marigold/25" aria-hidden="true" />
          Program intervensi disiplin · 2026
        </motion.p>
        <h1 className="mt-6 font-display text-[clamp(35.5px,calc(var(--vw)*5.14),71px)] font-bold leading-[1.04] tracking-[-0.035em] text-ink">
          <MaskLine delay={base + 0.1}>Kebiasaan baik</MaskLine>
          <MaskLine delay={base + 0.2}>tumbuh dari</MaskLine>
          <span className="relative inline-block">
            <MaskLine delay={base + 0.3} className="-mr-[0.1em] pr-[0.1em] text-navy-2"><span className="text-gradient pb-[0.06em]">langkah kecil.</span></MaskLine>
            <motion.span aria-hidden="true" className="absolute -bottom-[0.1em] left-[1%] h-[0.055em] w-[98%] origin-left rounded-full bg-marigold" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.7, delay: base + 1.05, ease: [0.22, 1, 0.36, 1] }} />
          </span>
        </h1>
        <motion.p {...rise(0.4)} className="mt-8 max-w-[540px] text-[14.9px] leading-[1.65] text-ink-2 sm:text-[16.3px]">
          DISIPLIN menghubungkan siswa, orang tua, dan wali kelas lewat pengingat harian, catatan pembinaan personal, dan apresiasi mingguan—untuk membangun disiplin secara positif.
        </motion.p>
        <motion.p {...rise(0.45)} className="mt-5 max-w-[540px] rounded-2xl border border-line bg-card px-4 py-3 text-[12px] leading-snug text-ink-2 shadow-paper">
          <span className="font-extrabold tracking-[0.08em] text-navy">DISIPLIN</span>
          <span className="text-ink-3"> = </span>
          Digital Integration System for Personal Improvement Learning and Initiative
        </motion.p>
        <motion.div {...rise(0.5)} className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
          <Magnetic>
            <a
              href={href(ROUTES.prototype)}
              onClick={plainClick(() => onOpenPrototype())}
              data-surface="dark"
              className="group inline-flex items-center gap-3 rounded-full bg-navy py-4 pl-7 pr-5 text-[14.1px] font-semibold text-paper shadow-press transition-colors hover:bg-navy-2"
            >
              Coba prototipe
              <span className="relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-marigold text-ink">
                <ArrowRight className="h-4 w-4 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-8" />
                <ArrowRight className="absolute h-4 w-4 -translate-x-8 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0" />
              </span>
            </a>
          </Magnetic>
          <a href={href(ROUTES.methodology)} className="group inline-flex items-center gap-1.5 text-[14.1px] font-semibold text-ink">
            <span className="link-underline">Baca metodologi</span>
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </motion.div>
        <motion.div {...rise(0.6)} className="mt-10 flex items-center gap-3 text-[12.5px] text-ink-3">
          <span className="flex -space-x-1.5">
            {ROLES.map((role) => <RoleBadge key={role.id} role={role.id} size="sm" className="ring-[3px] ring-paper" />)}
          </span>
          <span>Untuk siswa, orang tua, dan wali kelas</span>
        </motion.div>
      </div>
      <div className="lg:col-span-6 lg:-mt-2 lg:pl-4 xl:pl-10">
        <HeroCollage className="mx-auto max-w-[600px]" />
      </div>
    </section>
  );
}

// Jejak kuning yang "menaiki" anak tangga mengikuti posisi gulir.
function StairTrail({ targetRef }) {
  const [width, setWidth] = useState(0);
  const { scrollYProgress } = useScroll({ target: targetRef, offset: ['start 85%', 'end 50%'] });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 24, restDelta: 0.001 });

  useEffect(() => {
    const el = targetRef.current;
    if (!el) return undefined;
    const ro = new ResizeObserver(([entry]) => setWidth(entry.contentRect.width));
    ro.observe(el);
    return () => ro.disconnect();
  }, [targetRef]);

  if (!width) return null;
  const col = width / 5;
  const d = `M0 241.5H${col}V181.5H${col * 2}V121.5H${col * 3}V61.5H${col * 4}V1.5H${width}`;
  return (
    <svg className="pointer-events-none absolute inset-x-0 top-0 z-10 hidden h-[576px] w-full overflow-visible lg:block" viewBox={`0 0 ${width} 576`} aria-hidden="true">
      <motion.path d={d} fill="none" stroke="#FFC21A" strokeWidth="3.5" strokeLinejoin="miter" style={{ pathLength: progress }} />
    </svg>
  );
}

function DayStairs({ onOpenPrototype }) {
  const reduce = useReducedMotion();
  const stairsRef = useRef(null);
  return (
    <section aria-labelledby="ritme" data-surface="dark" className="relative overflow-hidden mesh-dark text-white">
      <span aria-hidden="true" className="pointer-events-none absolute -right-32 -top-32 h-[620px] w-[620px] glow-gold" />
      <span aria-hidden="true" className="pointer-events-none absolute -bottom-40 -left-24 h-[560px] w-[560px] glow-violet" />
      <div className="relative mx-auto w-full max-w-[1240px] px-4 py-16 sm:px-8 lg:py-24">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <Overline tone="marigold">Ritme harian</Overline>
            <h2 id="ritme" className="mt-3 font-display text-[clamp(34px,calc(var(--vw)*4.6),58px)] font-bold leading-[1.02] tracking-[-0.03em] text-white">
              <SplitText text="Satu hari, lima langkah kecil." />
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5">
            <p className="max-w-md text-[16.5px] leading-relaxed text-mist">
              Program mengikuti ritme siswa—dari malam sebelum sekolah sampai apresiasi di akhir minggu. Pilih satu langkah untuk melihatnya di prototipe.
            </p>
          </Reveal>
        </div>

        <ol ref={stairsRef} className="relative mt-12 grid gap-3 lg:mt-20 lg:grid-cols-5 lg:items-end lg:gap-0 lg:border-b-[3px] lg:border-marigold">
          {!reduce && <StairTrail targetRef={stairsRef} />}
          {DAY_STEPS.map((step, index) => (
            <motion.li
              key={step.id}
              className="group/step relative lg:h-[calc(336px_+_var(--i)_*_60px)]"
              style={{ '--i': index }}
              initial={reduce ? false : { opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '0px 0px -10% 0px' }}
              transition={{ duration: 0.8, delay: index * 0.12, ease: EASE }}
            >
              <a
                href={href(ROUTES.prototype)}
                onClick={plainClick(() => onOpenPrototype(step.target))}
                className="group relative flex h-full flex-col rounded-[22px] border border-line bg-card p-5 transition duration-300 hover:-translate-y-1 hover:shadow-paper lg:rounded-none lg:border-0 lg:border-l lg:border-t-[3px] lg:border-l-line lg:border-t-marigold lg:bg-card lg:shadow-lift lg:px-5 lg:pb-6 lg:pt-5 lg:hover:translate-y-0 lg:hover:bg-marigold-soft/80 lg:hover:shadow-none"
              >
                <span className="flex items-baseline justify-between gap-3">
                  <span className="whitespace-nowrap font-display text-[32px] font-bold leading-none tracking-[-0.02em] text-ink tabular xl:text-[34px]">{step.when}</span>
                  <span className="text-[12px] font-bold text-ink-3 tabular lg:hidden">{String(index + 1).padStart(2, '0')}/05</span>
                </span>
                <span className="mt-3 text-[11.5px] font-bold uppercase tracking-[0.16em] text-marigold-ink">{step.period}</span>
                <span className="mt-1.5 font-display text-[21px] font-semibold leading-snug text-ink">{step.title}</span>
                <span className="mt-2 text-[14.5px] leading-relaxed text-ink-2">{step.body}</span>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[13.5px] font-bold text-navy">
                  {step.cta}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </a>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}

// Geometri diagram dalam satuan viewBox 460×430; posisi HTML memakai persen.
const VB = { w: 460, h: 430 };
const NODE = {
  student: [230, 96],
  parent: [78, 336],
  teacher: [382, 336],
};
const pct = ([x, y]) => ({ left: `${(x / VB.w) * 100}%`, top: `${(y / VB.h) * 100}%` });

function edge(a, b, gap = 52) {
  const [x1, y1] = NODE[a];
  const [x2, y2] = NODE[b];
  const len = Math.hypot(x2 - x1, y2 - y1);
  const ux = (x2 - x1) / len;
  const uy = (y2 - y1) / len;
  return `M${x1 + ux * gap} ${y1 + uy * gap}L${x2 - ux * gap} ${y2 - uy * gap}`;
}

function RolesDiagram() {
  const reduce = useReducedMotion();
  const pop = (delay) => ({
    initial: reduce ? false : { opacity: 0, scale: 0.6 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true, margin: '0px 0px -15% 0px' },
    transition: { type: 'spring', stiffness: 320, damping: 20, delay },
  });
  return (
    <div className="relative mx-auto aspect-[460/430] w-full max-w-[520px]">
      <svg viewBox={`0 0 ${VB.w} ${VB.h}`} className="absolute inset-0 h-full w-full overflow-visible" aria-hidden="true">
        <defs>
          <marker id="tri-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M1 1 9 5 1 9" fill="none" stroke="#14257F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </marker>
        </defs>
        <motion.circle {...pop(0.2)} cx="230" cy="256" r="58" fill="none" stroke="#BFCBEE" strokeWidth="1.5" strokeDasharray="1 6" strokeLinecap="round" />
        <path d={edge('student', 'teacher')} stroke="#14257F" strokeWidth="2.5" fill="none" markerStart="url(#tri-arrow)" markerEnd="url(#tri-arrow)" />
        <path d={edge('teacher', 'parent')} stroke="#14257F" strokeWidth="2.5" fill="none" markerEnd="url(#tri-arrow)" />
        <path d={edge('parent', 'student')} stroke="#14257F" strokeWidth="2.5" strokeDasharray="2 7" strokeLinecap="round" fill="none" markerStart="url(#tri-arrow)" markerEnd="url(#tri-arrow)" />
      </svg>
      <motion.div {...pop(0.25)} className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5 text-center" style={pct([230, 256])}>
        <LogoMark className="h-8 w-8 sm:h-10 sm:w-10" />
        <span className="hidden whitespace-nowrap font-medium text-[13px] leading-snug text-ink-2 sm:block">disiplin positif</span>
      </motion.div>
      {ROLES.map((role, index) => (
        <div key={role.id} className="absolute -translate-x-1/2 -translate-y-1/2" style={pct(NODE[role.id])}>
          <motion.span {...pop(0.1 + index * 0.12)} className="relative block rounded-[20px] bg-card p-2 shadow-paper ring-1 ring-line">
            <RoleBadge role={role.id} size="lg" />
            <span className={`absolute left-1/2 -translate-x-1/2 whitespace-nowrap font-display text-[18px] font-semibold text-ink ${role.id === 'student' ? 'bottom-full mb-2' : 'top-full mt-2'}`}>
              {role.label}
            </span>
          </motion.span>
        </div>
      ))}
      <motion.span {...pop(0.9)} className="absolute inline-flex -translate-x-1/2 -translate-y-1/2 items-center gap-1.5 whitespace-nowrap rounded-full bg-navy px-2.5 py-1 text-[11px] font-bold sm:px-3 sm:py-1.5 sm:text-[12px] text-paper shadow-paper" style={pct([306, 216])} data-surface="dark">
        <LockKeyhole className="h-3.5 w-3.5 text-marigold" /> Catatan pribadi
      </motion.span>
      <motion.span {...pop(1.3)} className="absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-card px-2.5 py-1 text-[11px] font-bold text-ink shadow-paper ring-1 ring-line sm:px-3 sm:py-1.5 sm:text-[12px]" style={pct([230, 336])}>
        Ringkasan kualitatif
      </motion.span>
      <motion.span {...pop(1.7)} className="absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-paper px-2.5 py-1 text-[11px] font-bold text-ink-2 ring-1 ring-line sm:px-3 sm:py-1.5 sm:text-[12px]" style={pct([154, 216])}>
        Rutinitas di rumah
      </motion.span>
    </div>
  );
}

function Roles({ onOpenPrototype }) {
  return (
    <section aria-labelledby="peran" className="mx-auto w-full max-w-[1240px] px-4 py-16 sm:px-8 lg:py-28">
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-6">
          <Reveal>
            <Overline>Kolaborasi</Overline>
            <h2 id="peran" className="mt-3 font-display text-[clamp(34px,calc(var(--vw)*4.6),58px)] font-bold leading-[1.02] tracking-[-0.03em] text-ink">
              <SplitText text="Tiga pihak, satu arah." />
            </h2>
            <p className="mt-5 max-w-lg text-[16.5px] leading-relaxed text-ink-2">
              Disiplin dibangun bersama, bukan sekadar ditaati. Setiap pihak melihat hal yang sesuai perannya—cerita pribadi siswa tetap antara siswa dan wali kelas.
            </p>
          </Reveal>
          <Reveal delay={0.15} className="mt-10">
            <RolesDiagram />
          </Reveal>
        </div>
        <ul className="space-y-4 self-center lg:col-span-6 lg:col-start-7">
          {ROLES.map((role, index) => (
            <Reveal as="li" key={role.id} delay={index * 0.1}>
              <a
                href={href(ROUTES.prototype)}
                onClick={plainClick(() => onOpenPrototype({ role: role.id }))}
                className="group relative flex gap-5 overflow-hidden rounded-[26px] bg-card p-6 pl-8 shadow-paper ring-1 ring-line transition duration-300 hover:-translate-y-1 hover:shadow-lift sm:p-7 sm:pl-9"
              >
                <span aria-hidden="true" className={`absolute inset-y-0 left-0 w-2 ${{ student: 'bg-marigold', parent: 'bg-leaf', teacher: 'bg-pen' }[role.id]}`} />
                <RoleBadge role={role.id} size="lg" />
                <span className="min-w-0 flex-1">
                  <span className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <span className="font-display text-[26px] font-semibold leading-tight text-ink">{role.label}</span>
                    <span className="text-[13px] font-semibold text-ink-3">{role.person} · {role.detail}</span>
                  </span>
                  <span className="mt-2 block text-[16px] leading-relaxed text-ink-2">{role.does}</span>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-bold text-navy">
                    <span className="link-underline">Coba sebagai {role.label.toLowerCase()}</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </span>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

const INDICATOR_STYLE = [
  { chip: 'bg-marigold text-night', bar: 'bg-marigold', glow: 'from-marigold-soft' },
  { chip: 'bg-pen text-white', bar: 'bg-pen', glow: 'from-pen-soft' },
  { chip: 'bg-leaf text-white', bar: 'bg-leaf', glow: 'from-leaf-soft' },
];

function Indicators() {
  return (
    <section aria-labelledby="indikator" className="mx-auto w-full max-w-[1240px] px-4 pb-8 pt-4 sm:px-8 lg:pb-16">
      <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
        <Reveal className="lg:col-span-7">
          <Overline>Student of the Week</Overline>
          <h2 id="indikator" className="mt-3 font-display text-[clamp(34px,calc(var(--vw)*4.6),58px)] font-bold leading-[1.02] tracking-[-0.03em] text-ink">
            <SplitText text="Tiga indikator terpilihnya." />
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-5">
          <p className="max-w-md text-[16.5px] leading-relaxed text-ink-2">
            Apresiasi mingguan tidak diberikan sembarangan. Siswa dipilih berdasarkan tiga perilaku disiplin yang jelas dan bisa diamati.
          </p>
        </Reveal>
      </div>
      <ol className="mt-10 grid gap-4 md:grid-cols-3">
        {INDICATORS.map((item, index) => (
          <Reveal as="li" key={item.id} delay={index * 0.1}>
            <div className={`relative h-full overflow-hidden rounded-[28px] bg-gradient-to-br ${INDICATOR_STYLE[index].glow} via-white to-white p-6 shadow-paper ring-1 ring-line sm:p-7`}>
              <span aria-hidden="true" className={`absolute inset-x-0 top-0 h-1.5 ${INDICATOR_STYLE[index].bar}`} />
              <span className="pointer-events-none absolute -right-2 -top-4 font-display text-[110px] font-extrabold leading-none text-ink/[0.05]" aria-hidden="true">{index + 1}</span>
              <span className={`relative flex h-14 w-14 items-center justify-center rounded-[18px] shadow-paper ${INDICATOR_STYLE[index].chip}`}>
                <IndicatorIcon id={item.id} className="h-6 w-6" />
              </span>
              <p className="relative mt-5 text-[11.5px] font-bold uppercase tracking-[0.16em] text-ink-3">Indikator {index + 1}</p>
              <h3 className="relative mt-1.5 font-display text-[22px] font-bold leading-snug text-ink">{item.title}</h3>
              <p className="relative mt-2 text-[15px] leading-relaxed text-ink-2">{item.body}</p>
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}

function StairsArt({ className = '' }) {
  return (
    <svg viewBox="0 0 400 300" className={className} aria-hidden="true">
      <path d="M0 300V240H80V180H160V120H240V60H320V0H400V300Z" fill="currentColor" />
    </svg>
  );
}

function Principles() {
  return (
    <section aria-labelledby="prinsip" data-surface="dark" className="relative overflow-hidden mesh-dark text-paper">
      <StairsArt className="pointer-events-none absolute -bottom-6 right-[-60px] w-[520px] text-navy-2/60 sm:w-[640px]" />
      <div className="relative mx-auto w-full max-w-[1240px] px-4 py-16 sm:px-8 lg:py-24">
        <Reveal>
          <Overline tone="marigold">Disiplin positif</Overline>
          <h2 id="prinsip" className="mt-3 max-w-3xl font-display text-[clamp(34px,calc(var(--vw)*4.6),58px)] font-bold leading-[1.02] tracking-[-0.03em]">
            <SplitText text="Positif, bukan menghukum." />
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {PRINCIPLES.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08} className="border-t border-white/15 pt-6">
              <p className="font-display text-[44px] font-[480] leading-none text-marigold tabular">
                <SplitText text={String(index + 1).padStart(2, '0')} delay={0.15 + index * 0.08} />
              </p>
              <h3 className="mt-5 font-display text-[23px] font-semibold leading-snug">{item.title}</h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-mist">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Theories() {
  return (
    <section aria-labelledby="teori" className="mx-auto w-full max-w-[1240px] px-4 py-16 sm:px-8 lg:py-24">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <Reveal>
          <Overline>Landasan teori</Overline>
          <h2 id="teori" className="mt-3 font-display text-[clamp(34px,calc(var(--vw)*4.6),58px)] font-bold leading-[1.02] tracking-[-0.03em] text-ink">
            <SplitText text="Berpijak pada empat teori." />
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <a href={href(ROUTES.methodology)} className="group inline-flex items-center gap-1.5 text-[15px] font-bold text-navy">
            <span className="link-underline">Baca metodologi lengkap</span>
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </Reveal>
      </div>
      <div className="no-scrollbar -mx-4 mt-10 flex snap-x snap-mandatory scroll-px-4 gap-3 overflow-x-auto px-4 pb-4 sm:mx-0 sm:grid sm:snap-none sm:grid-cols-2 sm:gap-4 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-4">
        {THEORIES.map((theory, index) => {
          const Diagram = THEORY_DIAGRAMS[theory.id];
          return (
            <Reveal key={theory.id} delay={index * 0.08} className="w-[82%] shrink-0 snap-start sm:w-auto">
              <a href={href(ROUTES.methodology)} className="group flex h-full flex-col rounded-[24px] border border-line bg-card p-5 transition duration-300 hover:-translate-y-1 hover:shadow-paper">
                <span className={`rounded-[16px] px-2 py-3 ${['bg-pen-soft', 'bg-marigold-soft', 'bg-leaf-soft', 'bg-rose-soft'][index % 4]}`}>
                  <Diagram className="h-auto w-full" />
                </span>
                <span className="mt-5 text-[12px] font-bold tracking-[0.12em] text-ink-3 tabular">{theory.number}</span>
                <span className="mt-1 font-display text-[21px] font-semibold leading-snug text-ink">{theory.name}</span>
                <span className="mt-1 text-[13.5px] font-medium text-ink-3">{theory.author} · {theory.year}</span>
              </a>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

function FinalCall({ onOpenPrototype }) {
  return (
    <section aria-labelledby="mulai" className="mx-auto w-full max-w-[1240px] px-4 pb-20 sm:px-8 lg:pb-28">
      <Reveal data-surface="dark" className="relative overflow-hidden rounded-[32px] mesh-dark px-6 py-12 text-white sm:px-12 sm:py-16 lg:px-16">
        <StairsArt className="pointer-events-none absolute -bottom-10 -right-10 w-[340px] text-white/10 sm:w-[460px]" />
        <div className="relative max-w-2xl">
          <h2 id="mulai" className="font-display text-[clamp(36px,calc(var(--vw)*5.4),68px)] font-bold leading-[1] tracking-[-0.03em]">
            Mulai dari <span className="text-marigold">satu langkah.</span>
          </h2>
          <p className="mt-4 max-w-md text-[17px] leading-relaxed text-mist">Masuk ke prototipe dari sudut pandang yang ingin kamu lihat lebih dulu.</p>
        </div>
        <div className="relative mt-9 flex flex-wrap gap-3">
          {ROLES.map((role) => (
            <a
              key={role.id}
              href={href(ROUTES.prototype)}
              onClick={plainClick(() => onOpenPrototype({ role: role.id }))}
              className="group inline-flex items-center gap-3 rounded-full bg-card py-2 pl-2 pr-5 text-[15.5px] font-semibold text-ink shadow-paper transition hover:-translate-y-0.5 hover:bg-white"
            >
              <RoleBadge role={role.id} size="sm" className="rounded-full" />
              Sebagai {role.label.toLowerCase()}
              <ArrowRight className="h-4 w-4 text-ink-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-ink" />
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

export default function LandingPage({ onOpenPrototype }) {
  return (
    <main id="konten" tabIndex={-1} className="relative outline-none">
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-[900px] overflow-hidden">
        <span className="absolute -right-40 -top-40 h-[680px] w-[680px] glow-gold" />
        <span className="absolute -left-48 top-[200px] h-[620px] w-[620px] glow-rose" />
      </div>
      <Hero onOpenPrototype={onOpenPrototype} />
      <FlowMarquee words={FLOW.map((step) => step.title)} />
      <DayStairs onOpenPrototype={onOpenPrototype} />
      <Roles onOpenPrototype={onOpenPrototype} />
      <Indicators />
      <Principles />
      <Theories />
      <FinalCall onOpenPrototype={onOpenPrototype} />
    </main>
  );
}
