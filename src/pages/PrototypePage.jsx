import React from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { HandArrow } from '../components/art/Doodles';
import AppShell from '../prototype/AppShell';
import PhoneFrame from '../prototype/PhoneFrame';
import PresenterPanel from '../prototype/PresenterPanel';
import { useEnterDelay } from '../lib/enterDelay';
import { ROUTES, href } from '../lib/router';
import { DESKTOP_QUERY, FRAMED_QUERY, useMediaQuery } from '../lib/useMediaQuery';

const CAPTIONS = {
  student: 'ini Holyna, siswa VII A',
  parent: 'tampilan orang tua Holyna',
  teacher: 'tampilan wali kelas VII A',
  select: 'pilih peran dulu, ya',
};

function StageCaption({ demo }) {
  const key = demo.signedIn ? demo.role : 'select';
  return (
    <div className="pointer-events-none absolute left-[calc(50%-var(--phone-w)/2-210px)] top-[18%] hidden w-[200px] text-ink-2 xl:block" aria-hidden="true">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div key={key} initial={{ opacity: 0, y: 6, rotate: -6 }} animate={{ opacity: 1, y: 0, rotate: -4 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.3 }}>
          <p className="text-right font-hand text-[24px] leading-tight">{CAPTIONS[key]}</p>
          <HandArrow className="ml-auto mr-1 mt-1 w-[70px] rotate-[14deg]" delay={0.15} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function PhoneEntrance({ children }) {
  const reduce = useReducedMotion();
  const base = useEnterDelay();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 70, rotate: 4, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
      transition={{ type: 'spring', stiffness: 120, damping: 18, mass: 0.9, delay: base + 0.1 }}
    >
      {children}
    </motion.div>
  );
}

export default function PrototypePage({ demo }) {
  const desktop = useMediaQuery(DESKTOP_QUERY);
  const framed = useMediaQuery(FRAMED_QUERY);

  if (desktop) {
    return (
      <div className="flex h-[100dvh] overflow-hidden">
        <div className="paper-grain h-full w-[clamp(380px,36vw,480px)] shrink-0 border-r border-line">
          <PresenterPanel demo={demo} />
        </div>
        <div className="graph-paper relative flex min-w-0 flex-1 items-center justify-center [--phone-w:min(397px,calc((100dvh_-_64px)_*_0.4639))]">
          <StageCaption demo={demo} />
          <PhoneEntrance>
            <PhoneFrame>
              <AppShell demo={demo} mode="framed" />
            </PhoneFrame>
          </PhoneEntrance>
        </div>
      </div>
    );
  }

  if (framed) {
    return (
      <div className="graph-paper flex min-h-[100dvh] flex-col items-center justify-center gap-4 px-4 py-6">
        <a href={href(ROUTES.home)} className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-2 text-[13.5px] font-semibold text-ink shadow-paper ring-1 ring-line">
          <ArrowLeft className="h-4 w-4" /> Beranda LANGKAH
        </a>
        <PhoneEntrance>
          <PhoneFrame>
            <AppShell demo={demo} mode="framed" />
          </PhoneFrame>
        </PhoneEntrance>
      </div>
    );
  }

  return <AppShell demo={demo} mode="fullscreen" />;
}
