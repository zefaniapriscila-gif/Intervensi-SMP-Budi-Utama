import React from 'react';
import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion';
import { ArrowRight, ArrowDown, BookOpenCheck, HeartHandshake, Sparkles } from 'lucide-react';
import SpiralFlow from '../components/art/SpiralFlow';
import { THEORY_DIAGRAMS } from '../components/art/theoryDiagramMap';
import { Magnetic, SplitText } from '../components/motion/Motion';
import { Overline, Reveal } from '../components/ui/primitives';
import { FLOW, FOUNDATIONS, SOURCE_NOTE, THEORIES } from '../data/program';
import { useEnterDelay } from '../lib/enterDelay';
import { plainClick } from '../lib/links';
import { EASE } from '../lib/motion';
import { ROUTES, href } from '../lib/router';

const CONTENTS = [
  { id: 'cara-pandang', label: 'Cara pandang' },
  { id: 'landasan', label: 'Empat landasan teori' },
  { id: 'alur', label: 'Alur intervensi' },
  { id: 'sumber', label: 'Catatan sumber' },
];

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
  el.focus({ preventScroll: true });
}

function ChapterHead({ number, label, title, id, className = '' }) {
  return (
    <Reveal className={className}>
      <p className="flex items-center gap-3 text-[12px] font-bold uppercase tracking-[0.16em] text-ink-3">
        <span className="flex h-7 w-7 items-center justify-center rounded-full border border-ink/15 font-display text-[13px] normal-case tracking-normal text-ink tabular">{number}</span>
        {label}
      </p>
      <h2 id={id} className="mt-4 max-w-3xl font-display text-[clamp(32px,calc(var(--vw)*4.2),54px)] font-bold leading-[1.04] tracking-[-0.03em] text-ink"><SplitText text={title} /></h2>
    </Reveal>
  );
}

function ReadingProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });
  return <motion.div className="fixed inset-x-0 top-0 z-50 h-[3px] origin-left bg-marigold" style={{ scaleX }} aria-hidden="true" />;
}

function Intro({ onOpenPrototype }) {
  const reduce = useReducedMotion();
  const base = useEnterDelay();
  const rise = (delay) => ({
    initial: reduce ? false : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay: base + delay, ease: EASE },
  });
  return (
    <section className="mx-auto grid w-full max-w-[1240px] gap-12 px-4 pb-16 pt-10 sm:px-8 sm:pt-14 lg:grid-cols-12 lg:pb-24">
      <div className="lg:col-span-8">
        <motion.div {...rise(0.05)}><Overline>Metodologi program</Overline></motion.div>
        <motion.h1 {...rise(0.12)} className="mt-5 font-display text-[clamp(40px,calc(var(--vw)*6),80px)] font-bold leading-[1.06] tracking-[-0.035em] text-ink">
          Dari pengingat sederhana menuju disiplin yang{' '}
          <span className="relative inline-block text-navy">
            tumbuh dari dalam.
            <motion.span aria-hidden="true" className="absolute -bottom-[0.1em] left-[1%] h-[0.055em] w-[98%] origin-left rounded-full bg-marigold" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.7, delay: base + 0.9, ease: [0.22, 1, 0.36, 1] }} />
          </span>
        </motion.h1>
        <motion.p {...rise(0.25)} className="mt-8 max-w-2xl text-[17px] leading-[1.7] text-ink-2 sm:text-[18.5px]">
          Ringkasan ini mengikuti rancangan intervensi yang menggabungkan kebiasaan harian, refleksi personal, dukungan orang tua dan wali kelas, serta apresiasi positif.
        </motion.p>
        <motion.div {...rise(0.35)} className="mt-9">
          <Magnetic>
          <a
            href={href(ROUTES.prototype)}
            onClick={plainClick(() => onOpenPrototype())}
            data-surface="dark"
            className="group inline-flex items-center gap-3 rounded-full bg-navy py-3.5 pl-6 pr-4 text-[15.5px] font-semibold text-paper shadow-press transition hover:-translate-y-0.5 hover:bg-navy-2"
          >
            Lihat penerapannya di prototipe
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-marigold text-ink transition-transform duration-300 group-hover:translate-x-0.5"><ArrowRight className="h-4 w-4" /></span>
          </a>
          </Magnetic>
        </motion.div>
      </div>
      <motion.nav {...rise(0.3)} aria-label="Daftar isi" className="self-end lg:col-span-4 lg:pl-6">
        <p className="font-medium text-[16px] leading-snug text-pen">daftar isi</p>
        <ol className="mt-3 border-t border-line">
          {CONTENTS.map((item, index) => (
            <li key={item.id} className="border-b border-line">
              <button type="button" onClick={() => scrollToSection(item.id)} className="group flex w-full items-center gap-4 py-3.5 text-left">
                <span className="font-display text-[15px] text-ink-3 tabular">{String(index + 1).padStart(2, '0')}</span>
                <span className="flex-1 text-[16px] font-semibold text-ink">{item.label}</span>
                <ArrowDown className="h-4 w-4 text-ink-3 transition-transform duration-300 group-hover:translate-y-0.5 group-hover:text-ink" />
              </button>
            </li>
          ))}
        </ol>
      </motion.nav>
    </section>
  );
}

function Foundations() {
  const numerals = ['01', '02', '03'];
  const icons = [BookOpenCheck, HeartHandshake, Sparkles];
  return (
    <section aria-labelledby="cara-pandang-judul" id="cara-pandang" tabIndex={-1} className="scroll-mt-24 border-t border-line bg-paper-2/60 outline-none">
      <div className="mx-auto w-full max-w-[1240px] px-4 py-16 sm:px-8 lg:py-24">
        <ChapterHead number="01" label="Cara pandang" id="cara-pandang-judul" title="Disiplin bukan sekadar aturan yang ditaati." />
        <div className="mt-10 grid gap-4 md:grid-cols-3 md:gap-5 lg:mt-12">
          {FOUNDATIONS.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.1} className="group h-full">
              <article className="relative h-full overflow-hidden rounded-[26px] border border-line bg-card p-6 shadow-paper transition duration-300 hover:-translate-y-1 hover:shadow-lift sm:p-7">
                <span className="absolute -right-2 -top-7 font-display text-[112px] font-semibold leading-none text-paper-2/80" aria-hidden="true">{numerals[index]}</span>
                <div className="relative flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-[17px] bg-marigold-soft text-marigold-ink transition-transform duration-300 group-hover:rotate-[-5deg] group-hover:scale-105">
                    {React.createElement(icons[index], { className: 'h-5 w-5' })}
                  </span>
                  <span className="font-display text-[14px] font-semibold tracking-[0.12em] text-ink-3 tabular">{numerals[index]}</span>
                </div>
                <h3 className="relative mt-7 font-display text-[25px] font-semibold leading-snug text-ink">{item.title}</h3>
                <p className="relative mt-3 text-[15px] leading-[1.75] text-ink-2">{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function TheoryChapter({ theory, index, onOpenPrototype }) {
  const Diagram = THEORY_DIAGRAMS[theory.id];
  return (
    <article className="group relative mb-5 overflow-hidden rounded-[28px] border border-line bg-card p-5 shadow-paper transition duration-300 hover:shadow-lift sm:mb-6 sm:p-7 lg:p-8">
      <div className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-marigold via-navy/70 to-leaf opacity-70" aria-hidden="true" />
      <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
        <Reveal className="lg:col-span-5">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex h-10 min-w-10 items-center justify-center rounded-full bg-navy px-3 font-display text-[14px] font-bold text-paper tabular">{theory.number}</span>
            <span className="rounded-full bg-paper px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-ink-3">Landasan teori</span>
          </div>
          <h3 className="mt-5 font-display text-[clamp(27px,calc(var(--vw)*3),39px)] font-semibold leading-[1.08] tracking-[-0.02em] text-ink">{theory.name}</h3>
          <p className="mt-3 text-[13px] font-semibold text-navy">{theory.author} <span className="text-ink-3">· {theory.year}</span></p>
          <p className="mt-5 text-[16px] leading-[1.75] text-ink-2">{theory.summary}</p>
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-7">
          <div className="rounded-[22px] border border-line/80 bg-gradient-to-br from-pen-soft via-white to-marigold-soft px-3 py-4 sm:px-5 sm:py-5">
            <p className="mb-2 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] text-ink-3">
              <span className="h-1.5 w-1.5 rounded-full bg-marigold" /> Gagasan utama
            </p>
            <Diagram className="mx-auto h-auto w-full max-w-[390px]" />
          </div>
        </Reveal>
        <Reveal delay={0.16} className="lg:col-span-12">
          <div className="flex flex-col gap-4 rounded-[20px] bg-marigold-soft/70 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
            <div className="max-w-3xl">
              <p className="font-medium text-[15px] font-semibold leading-none text-marigold-ink">Diterapkan dalam DISIPLIN</p>
              <p className="mt-2 text-[14px] leading-[1.7] text-ink-2">{theory.application}</p>
            </div>
            <a
              href={href(ROUTES.prototype)}
              onClick={plainClick(() => onOpenPrototype(theory.target))}
              className="group/link inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-card px-4 py-2.5 text-[13px] font-bold text-navy shadow-paper ring-1 ring-line transition hover:-translate-y-0.5 hover:ring-line-2 sm:self-center"
            >
              {theory.targetLabel}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-0.5" />
            </a>
          </div>
        </Reveal>
      </div>
      <span className="sr-only">Landasan {index + 1} dari {THEORIES.length}</span>
    </article>
  );
}

function Theories({ onOpenPrototype }) {
  return (
    <section aria-labelledby="landasan-judul" id="landasan" tabIndex={-1} className="scroll-mt-24 outline-none">
      <div className="mx-auto w-full max-w-[1240px] px-4 pt-16 sm:px-8 lg:pt-24">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <ChapterHead number="02" label="Teori yang digunakan" id="landasan-judul" title="Empat landasan, satu alur pembiasaan." className="lg:col-span-8" />
          <Reveal delay={0.1} className="lg:col-span-4">
            <p className="text-[16px] leading-relaxed text-ink-3">Diringkas dari bagian “Teori yang Relevan” pada dokumen rancangan intervensi.</p>
          </Reveal>
        </div>
        <div className="mt-8 lg:mt-10">
          {THEORIES.map((theory, index) => (
            <TheoryChapter key={theory.id} theory={theory} index={index} onOpenPrototype={onOpenPrototype} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Flow() {
  return (
    <section aria-labelledby="alur-judul" id="alur" tabIndex={-1} data-surface="dark" className="scroll-mt-24 mesh-dark text-paper outline-none">
      <div className="mx-auto grid w-full max-w-[1240px] gap-12 px-4 py-16 sm:px-8 lg:grid-cols-12 lg:items-center lg:gap-10 lg:py-24">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="flex items-center gap-3 text-[12px] font-bold uppercase tracking-[0.16em] text-mist">
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/25 font-display text-[13px] normal-case tracking-normal text-paper tabular">03</span>
              Alur intervensi
            </p>
            <h2 id="alur-judul" className="mt-4 font-display text-[clamp(32px,calc(var(--vw)*4.2),54px)] font-bold leading-[1.04] tracking-[-0.03em]">
              <SplitText text="Ingatkan, pantau, refleksikan, apresiasi—" />
              <SplitText text="lalu ulangi." delay={0.3} className="text-marigold" />
            </h2>
            <p className="mt-5 max-w-md text-[16.5px] leading-relaxed text-mist">
              Setiap putaran kembali ke tahap yang sama, dengan lingkaran yang makin lebar: siswa makin mandiri, bimbingan makin ringan.
            </p>
          </Reveal>
          <ol className="mt-10 space-y-0 border-t border-white/15">
            {FLOW.map((step, index) => (
              <Reveal as="li" key={step.id} delay={index * 0.08} className="flex gap-5 border-b border-white/15 py-5">
                <span className="font-display text-[22px] text-marigold tabular">{String(index + 1).padStart(2, '0')}</span>
                <span>
                  <span className="block font-display text-[21px] font-semibold">{step.title}</span>
                  <span className="mt-1 block text-[15px] leading-relaxed text-mist">{step.body}</span>
                </span>
              </Reveal>
            ))}
          </ol>
        </div>
        <div className="lg:col-span-7">
          <div className="rounded-[30px] border border-white/10 bg-paper p-4 text-ink shadow-lift sm:p-7">
            <div className="mx-auto mb-2 flex max-w-[560px] items-center justify-between gap-3 px-1 text-[10px] font-bold uppercase tracking-[0.13em] text-ink-3 sm:px-3">
              <span>Model pembiasaan</span>
              <span className="rounded-full bg-marigold-soft px-3 py-1.5 text-marigold-ink">berulang & bertumbuh</span>
            </div>
            <SpiralFlow />
          </div>
        </div>
      </div>
    </section>
  );
}

function Sources({ onOpenPrototype }) {
  return (
    <section aria-labelledby="sumber-judul" id="sumber" tabIndex={-1} className="scroll-mt-24 outline-none">
      <div className="mx-auto grid w-full max-w-[1240px] gap-10 px-4 py-16 sm:px-8 lg:grid-cols-12 lg:py-24">
        <ChapterHead number="04" label="Catatan sumber" id="sumber-judul" title="Dari dokumen rancangan kelompok." className="lg:col-span-6" />
        <Reveal delay={0.1} className="lg:col-span-6 lg:pt-8">
          <div className="rounded-[26px] border border-line bg-card p-6 shadow-paper sm:p-8">
            <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-ink-3">
              <BookOpenCheck className="h-4 w-4 text-navy" /> Rujukan ringkasan
            </p>
            <p className="mt-4 text-[16px] leading-[1.8] text-ink-2">{SOURCE_NOTE}</p>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-4">
            <a
              href={href(ROUTES.prototype)}
              onClick={plainClick(() => onOpenPrototype())}
              data-surface="dark"
              className="group inline-flex items-center gap-2 rounded-full bg-navy px-5 py-3 text-[15px] font-semibold text-paper shadow-press transition hover:bg-navy-2"
            >
              Coba prototipe <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
            <a href={href(ROUTES.home)} className="link-underline text-[15px] font-semibold text-ink">Kembali ke beranda</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function MethodologyPage({ onOpenPrototype }) {
  return (
    <main id="konten" tabIndex={-1} className="outline-none">
      <ReadingProgress />
      <Intro onOpenPrototype={onOpenPrototype} />
      <Foundations />
      <Theories onOpenPrototype={onOpenPrototype} />
      <Flow />
      <Sources onOpenPrototype={onOpenPrototype} />
    </main>
  );
}
