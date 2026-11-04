import React from 'react';
import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion';
import { ArrowRight, ArrowDown } from 'lucide-react';
import SpiralFlow from '../components/art/SpiralFlow';
import { THEORY_DIAGRAMS } from '../components/art/theoryDiagramMap';
import { HandUnderline } from '../components/art/Doodles';
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
      <h2 id={id} className="mt-4 max-w-3xl font-display text-[clamp(32px,4.2vw,54px)] font-[560] leading-[1.04] tracking-[-0.03em] text-ink"><SplitText text={title} /></h2>
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
        <motion.h1 {...rise(0.12)} className="mt-5 font-display text-[clamp(40px,6vw,80px)] font-[540] leading-[1.0] tracking-[-0.035em] text-ink [font-variation-settings:'SOFT'_70,'WONK'_0]">
          Dari pengingat sederhana menuju disiplin yang{' '}
          <span className="relative inline-block italic [font-variation-settings:'SOFT'_100,'WONK'_1]">
            tumbuh dari dalam.
            <HandUnderline className="absolute -bottom-[0.06em] left-0 h-[0.2em] w-full" delay={base + 0.9} />
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
        <p className="font-hand text-[24px] leading-none text-pen">daftar isi</p>
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
  const numerals = ['i.', 'ii.', 'iii.'];
  return (
    <section aria-labelledby="cara-pandang-judul" id="cara-pandang" tabIndex={-1} className="scroll-mt-24 border-t border-line bg-paper-2/60 outline-none">
      <div className="mx-auto w-full max-w-[1240px] px-4 py-16 sm:px-8 lg:py-24">
        <ChapterHead number="01" label="Cara pandang" id="cara-pandang-judul" title="Disiplin bukan sekadar aturan yang ditaati." />
        <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
          {FOUNDATIONS.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.1} className="border-t-[3px] border-navy pt-5">
              <p className="font-display text-[26px] italic text-marigold-ink [font-variation-settings:'SOFT'_100,'WONK'_1]">{numerals[index]}</p>
              <h3 className="mt-3 font-display text-[26px] font-semibold leading-snug text-ink">{item.title}</h3>
              <p className="mt-3 text-[16px] leading-[1.7] text-ink-2">{item.body}</p>
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
    <article className="grid gap-8 border-t border-line py-12 lg:grid-cols-12 lg:gap-10 lg:py-16">
      <Reveal className="lg:col-span-2">
        <p className="font-display text-[72px] font-[300] leading-[0.8] tracking-[-0.04em] text-ink tabular lg:text-[104px]"><SplitText text={theory.number} stagger={0} /></p>
      </Reveal>
      <Reveal delay={0.08} className="lg:col-span-5">
        <h3 className="font-display text-[clamp(28px,3vw,40px)] font-semibold leading-[1.08] tracking-[-0.02em] text-ink">{theory.name}</h3>
        <p className="mt-3 text-[14px] font-semibold text-ink-3">{theory.author} · {theory.year}</p>
        <p className="mt-6 text-[17.5px] leading-[1.7] text-ink-2">{theory.summary}</p>
      </Reveal>
      <Reveal delay={0.16} className="lg:col-span-5">
        <div className="rounded-[24px] bg-card p-3 shadow-paper ring-1 ring-line">
          <div className="rounded-[18px] bg-paper px-3 py-4">
            <Diagram className="mx-auto h-auto w-full max-w-[360px]" />
          </div>
          <div className="notebook mt-3 rounded-[14px] pb-4 pl-[54px] pr-5 pt-[14px] [--margin-x:38px] [--rule-offset:14px] [--rule:28px]">
            <p className="font-hand text-[22px] font-semibold leading-[28px] text-pen">Penerapan di LANGKAH</p>
            <p className="text-[15px] leading-[28px] text-ink-2">{theory.application}</p>
            <a
              href={href(ROUTES.prototype)}
              onClick={plainClick(() => onOpenPrototype(theory.target))}
              className="group mt-1 inline-flex items-center gap-1.5 text-[14px] font-bold leading-[28px] text-navy"
            >
              <span className="link-underline">Lihat: {theory.targetLabel}</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </Reveal>
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
        <div className="mt-10">
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
    <section aria-labelledby="alur-judul" id="alur" tabIndex={-1} data-surface="dark" className="scroll-mt-24 bg-navy text-paper outline-none">
      <div className="mx-auto grid w-full max-w-[1240px] gap-12 px-4 py-16 sm:px-8 lg:grid-cols-12 lg:items-center lg:gap-10 lg:py-24">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="flex items-center gap-3 text-[12px] font-bold uppercase tracking-[0.16em] text-mist">
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/25 font-display text-[13px] normal-case tracking-normal text-paper tabular">03</span>
              Alur intervensi
            </p>
            <h2 id="alur-judul" className="mt-4 font-display text-[clamp(32px,4.2vw,54px)] font-[560] leading-[1.04] tracking-[-0.03em]">
              <SplitText text="Ingatkan, pantau, refleksikan, apresiasi—" />
              <SplitText text="lalu ulangi." delay={0.3} className="italic text-marigold [font-variation-settings:'SOFT'_100,'WONK'_1]" />
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
          <div className="rounded-[32px] bg-paper p-4 text-ink sm:p-8">
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
        <Reveal delay={0.1} className="lg:col-span-6 lg:pt-14">
          <p className="text-[16.5px] leading-[1.75] text-ink-2">{SOURCE_NOTE}</p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
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
