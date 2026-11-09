import React, { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, Check, RotateCcw } from 'lucide-react';
import { LogoMark } from '../components/brand/Logo';
import { RoleBadge } from '../components/ui/primitives';
import SoundToggle from '../components/ui/SoundToggle';
import { ROLES, SCREEN_NOTES, TABS, THEORIES } from '../data/program';
import { useEnterDelay } from '../lib/enterDelay';
import { ROUTES, href } from '../lib/router';
import { useScenario } from './hooks';
import { StairProgress } from './parts/common';

const ROLE_LABEL = Object.fromEntries(ROLES.map((role) => [role.id, role.label]));
const TAB_LABEL = Object.fromEntries(TABS.map((tab) => [tab.id, tab.label]));

function SectionTitle({ children, aside }) {
  return (
    <div className="mb-3 flex items-center justify-between gap-3">
      <h2 className="text-[11.5px] font-bold uppercase tracking-[0.16em] text-ink-3">{children}</h2>
      {aside}
    </div>
  );
}

export default function PresenterPanel({ demo }) {
  const reduce = useReducedMotion();
  const base = useEnterDelay();
  const enter = (index) => ({
    initial: reduce ? false : { opacity: 0, x: -18 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, delay: base + 0.15 + index * 0.08, ease: [0.22, 1, 0.36, 1] },
  });
  const [picked, setPicked] = useState(null);
  const steps = useScenario(demo);
  // Kotak yang dipilih tetap ungu selama layar ponsel masih menampilkan tujuannya.
  const pickedValid = Boolean(picked) && demo.signedIn && picked.role === demo.role && picked.tab === demo.tab;
  const doneCount = steps.filter((step) => step.done).length;
  const nextId = steps.find((step) => !step.done)?.id;
  const noteKey = demo.signedIn ? `${demo.role}:${demo.tab}` : 'select';
  const note = SCREEN_NOTES[noteKey];
  const theory = THEORIES.find((item) => item.id === note.theory);

  return (
    <aside className="no-scrollbar flex h-full flex-col overflow-y-auto px-8 pb-6 pt-6 xl:px-11" aria-label="Panduan presenter">
      <a href={href(ROUTES.home)} className="group inline-flex items-center gap-2.5 self-start rounded-full py-1 pr-3 text-[13.5px] font-semibold text-ink-2 transition hover:text-ink">
        <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
        <LogoMark className="h-7 w-7" />
        <span className="font-display text-[15px] font-semibold tracking-[0.06em] text-ink">DISIPLIN</span>
      </a>

      <motion.div {...enter(0)} className="mt-6">
        <p className="text-[11.5px] font-bold uppercase tracking-[0.16em] text-ink-3">Prototipe</p>
        <h1 className="mt-2 font-display text-[clamp(26px,calc(var(--vw)*2.2),32px)] font-bold leading-[1.06] tracking-[-0.025em] text-ink">Coba DISIPLIN dari tiga sudut pandang.</h1>
      </motion.div>

      <motion.section {...enter(1)} className="mt-6" aria-labelledby="lihat-sebagai">
        <SectionTitle><span id="lihat-sebagai">Lihat sebagai</span></SectionTitle>
        <div role="group" aria-labelledby="lihat-sebagai" className="grid grid-cols-3 gap-1.5 rounded-[22px] bg-card p-1.5 ring-1 ring-line">
          {ROLES.map((role) => {
            const active = demo.signedIn && demo.role === role.id;
            return (
              <button
                key={role.id}
                type="button"
                aria-pressed={active}
                onClick={() => demo.goTo({ role: role.id, tab: demo.tab })}
                className={`relative flex flex-col items-center gap-2 rounded-[17px] px-2 pb-2.5 pt-3 text-center transition-colors ${active ? 'text-paper' : 'text-ink hover:bg-paper'}`}
                data-surface={active ? 'dark' : undefined}
              >
                {active && (
                  <motion.span layoutId="presenter-role" className="absolute inset-0 rounded-[17px] bg-navy shadow-lift" transition={reduce ? { duration: 0 } : { type: 'spring', stiffness: 480, damping: 38 }} />
                )}
                <RoleBadge role={role.id} size="sm" className="relative" />
                <span className="relative text-[13.5px] font-bold leading-none">{role.label}</span>
              </button>
            );
          })}
        </div>
        <AnimatePresence mode="wait" initial={false}>
          <motion.p
            key={demo.signedIn ? demo.role : 'none'}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.18 }}
            className="mt-2.5 px-1 text-[13px] leading-relaxed text-ink-3"
          >
            {demo.signedIn ? ROLES.find((role) => role.id === demo.role)?.does : 'Belum memilih peran—pilih salah satu di atas atau di layar ponsel.'}
          </motion.p>
        </AnimatePresence>
      </motion.section>

      <motion.section {...enter(2)} className="mt-6" aria-labelledby="skenario">
        <SectionTitle aside={<span className="flex items-center gap-2.5 text-[12.5px] font-bold text-ink tabular"><StairProgress done={doneCount} total={steps.length} size="sm" />{doneCount}/{steps.length}</span>}>
          <span id="skenario">Skenario demo</span>
        </SectionTitle>
        <ol className="space-y-2">
          {steps.map((step, index) => {
            const isNext = step.id === nextId;
            const isActive = pickedValid ? step.id === picked.id : isNext;
            return (
              <li key={step.id}>
                <button
                  type="button"
                  onClick={() => {
                    setPicked({ id: step.id, role: step.target.role, tab: step.target.tab });
                    demo.goTo(step.target);
                  }}
                  aria-current={isActive ? 'step' : undefined}
                  data-surface={isActive ? 'dark' : undefined}
                  className={`group relative flex w-full items-center gap-3 overflow-hidden rounded-[18px] px-3 py-3 text-left transition duration-300 hover:-translate-y-0.5 active:scale-[0.985] ${
                    isActive
                      ? 'bg-navy text-white shadow-lift'
                      : step.done
                        ? 'bg-leaf-soft/70 ring-1 ring-leaf/25'
                        : 'bg-card shadow-paper hover:shadow-lift'
                  }`}
                >
                  <span className="relative shrink-0">
                    {step.done ? (
                      <motion.span initial={{ scale: 0, rotate: -45 }} animate={{ scale: 1, rotate: 0 }} transition={{ type: 'spring', stiffness: 500, damping: 18 }} className="flex h-10 w-10 items-center justify-center rounded-[13px] bg-leaf text-white">
                        <Check className="h-5 w-5" strokeWidth={3} />
                      </motion.span>
                    ) : (
                      <RoleBadge role={step.target.role} />
                    )}
                    <span className={`absolute -bottom-1 -right-1 flex h-[18px] min-w-[18px] items-center justify-center rounded-full px-1 text-[10px] font-extrabold tabular ring-2 ${isActive ? 'bg-white text-navy ring-navy' : 'bg-ink text-white ring-card'}`}>{index + 1}</span>
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className={`block text-[14px] font-bold leading-snug ${isActive ? 'text-white' : step.done ? 'text-ink-2 line-through decoration-ink-3/40' : 'text-ink'}`}>{step.label}</span>
                    <span className={`mt-0.5 block text-[12px] font-semibold ${isActive ? 'text-mist' : 'text-ink-3'}`}>{ROLE_LABEL[step.target.role]} · {TAB_LABEL[step.target.tab]}</span>
                  </span>
                  {isNext && <span className="rounded-full bg-marigold px-2.5 py-1 text-[11px] font-extrabold text-night">Berikutnya</span>}
                </button>
              </li>
            );
          })}
        </ol>
        <AnimatePresence>
          {doneCount === steps.length && (
            <motion.p initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="mt-3 font-medium text-[15px] leading-snug text-pen">
              Semua langkah selesai—satu putaran utuh!
            </motion.p>
          )}
        </AnimatePresence>
      </motion.section>

      <motion.section {...enter(3)} className="mt-6" aria-labelledby="di-layar-ini">
        <SectionTitle><span id="di-layar-ini">Di layar ini</span></SectionTitle>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={noteKey}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.22 }}
            className="notebook rounded-[18px] pb-4 pl-[50px] pr-5 pt-[12px] ring-1 ring-line [--margin-x:36px] [--rule-offset:12px] [--rule:26px]"
          >
            <p className="font-display text-[19px] font-semibold leading-[26px] text-ink">{note.title}</p>
            <p className="text-[13.5px] leading-[26px] text-ink-2">{note.body}</p>
            {theory && (
              <a href={href(ROUTES.methodology)} className="group inline-flex items-center gap-1 text-[13px] font-bold leading-[26px] text-navy">
                <span className="link-underline">Landasan: {theory.name}</span>
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            )}
          </motion.div>
        </AnimatePresence>
      </motion.section>

      <div className="mt-auto flex items-center justify-between gap-3 pt-7">
        <button type="button" onClick={() => {
          setPicked(null);
          demo.resetDemo();
        }} className="group inline-flex items-center gap-2 rounded-full bg-card px-4 py-2.5 text-[13px] font-bold text-ink ring-1 ring-line transition hover:ring-line-2">
          <RotateCcw className="h-4 w-4 transition-transform duration-500 group-hover:-rotate-180" /> Mulai ulang demo
        </button>
        <div className="flex items-center gap-3">
          <p className="text-right text-[11.5px] leading-snug text-ink-3">Data simulasi · tidak disimpan</p>
          <SoundToggle className="h-9 w-9" />
        </div>
      </div>
    </aside>
  );
}
