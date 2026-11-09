import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Award, House, NotebookPen } from 'lucide-react';
import { LogoMark } from '../components/brand/Logo';
import { RoleBadge } from '../components/ui/primitives';
import { ROLES, TABS } from '../data/program';
import { ROUTES, href } from '../lib/router';
import RoleSelect from './RoleSelect';
import { ToastProvider } from './toast';
import { ParentHome, ParentJournal, ParentRecognition } from './screens/parent';
import { StudentHome, StudentJournal, StudentRecognition } from './screens/student';
import { TeacherHome, TeacherJournal, TeacherRecognition } from './screens/teacher';

const SCREENS = {
  student: { home: StudentHome, journal: StudentJournal, recognition: StudentRecognition },
  parent: { home: ParentHome, journal: ParentJournal, recognition: ParentRecognition },
  teacher: { home: TeacherHome, journal: TeacherJournal, recognition: TeacherRecognition },
};

const TAB_ICONS = { home: House, journal: NotebookPen, recognition: Award };
const TAB_ORDER = { home: 0, journal: 1, recognition: 2 };
const SCREEN_VARIANTS = {
  enter: (direction) => ({ opacity: 0, x: 18 * direction }),
  center: { opacity: 1, x: 0 },
  exit: (direction) => ({ opacity: 0, x: -14 * direction }),
};

function AppHeader({ demo, scrolled, safeTop = false }) {
  const role = ROLES.find((item) => item.id === demo.role);
  const tab = TABS.find((item) => item.id === demo.tab);
  return (
    <header className={`sticky top-0 z-30 flex shrink-0 items-center justify-between gap-3 bg-paper/92 px-4 backdrop-blur-md transition-shadow duration-300 ${safeTop ? 'h-[calc(58px+env(safe-area-inset-top))] pt-[env(safe-area-inset-top)]' : 'h-[58px]'} ${scrolled ? 'shadow-[0_1px_0_var(--color-line)]' : ''}`}>
      <a href={href(ROUTES.home)} className="flex min-w-0 items-center gap-2.5 rounded-xl" aria-label="Kembali ke beranda DISIPLIN">
        <LogoMark className="h-8 w-8 shrink-0" />
        <span className="min-w-0 leading-none">
          <span className="block font-display text-[15px] font-semibold tracking-[0.06em] text-ink">DISIPLIN</span>
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={tab?.id}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.18 }}
              className="mt-1 block text-[11.5px] font-semibold text-ink-3"
            >
              {tab?.label}
            </motion.span>
          </AnimatePresence>
        </span>
      </a>
      <button
        type="button"
        onClick={demo.signOut}
        className="group flex items-center gap-2 rounded-full bg-card py-1 pl-3 pr-1 ring-1 ring-line transition hover:ring-line-2"
        aria-label={`Masuk sebagai ${role?.label}. Ganti peran`}
      >
        <span className="text-[12px] font-bold text-ink-2">{role?.label}</span>
        <RoleBadge role={demo.role} size="sm" className="rounded-full" />
      </button>
    </header>
  );
}

function TabBar({ demo, fixed }) {
  const reduce = useReducedMotion();
  const unread = {
    journal: (demo.role === 'student' && demo.journal.feedbackSent && !demo.readFeedback) || (demo.role === 'teacher' && demo.journal.sent && !demo.journal.feedbackSent),
  };
  return (
    <nav
      aria-label="Navigasi aplikasi"
      className={`${fixed ? 'fixed inset-x-0 bottom-0 z-40 mx-auto max-w-[560px] pb-[max(10px,env(safe-area-inset-bottom))]' : 'relative z-30 shrink-0 pb-2.5'} bg-gradient-to-t from-paper via-paper/95 to-paper/0 px-3 pt-3`}
    >
      <div className="flex gap-1 rounded-[24px] bg-navy p-1.5 shadow-lift" data-surface="dark">
        {TABS.map((tab) => {
          const Icon = TAB_ICONS[tab.id];
          const active = demo.tab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => demo.setTab(tab.id)}
              aria-current={active ? 'page' : undefined}
              className={`relative flex h-[54px] flex-1 flex-col items-center justify-center gap-1 rounded-[18px] text-[11.5px] font-bold transition-colors duration-200 ${active ? 'text-ink' : 'text-mist hover:text-paper'}`}
            >
              {active && (
                <motion.span
                  layoutId={`tab-pill-${fixed ? 'f' : 'p'}`}
                  className="absolute inset-0 rounded-[18px] bg-marigold"
                  transition={reduce ? { duration: 0 } : { type: 'spring', stiffness: 520, damping: 38 }}
                />
              )}
              <motion.span className="relative" animate={active && !reduce ? { y: [0, -3, 0] } : { y: 0 }} transition={{ duration: 0.35 }}>
                <Icon className="h-[20px] w-[20px]" strokeWidth={active ? 2.3 : 1.9} />
                {unread[tab.id] && <span className="absolute -right-1.5 -top-1 h-2.5 w-2.5 rounded-full bg-pen ring-2 ring-navy" aria-label="baru" />}
              </motion.span>
              <span className="relative">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}

export default function AppShell({ demo, mode = 'framed' }) {
  const framed = mode === 'framed';
  const scrollRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const [tabMemo, setTabMemo] = useState({ tab: demo.tab, direction: 1 });
  if (tabMemo.tab !== demo.tab) {
    setTabMemo({ tab: demo.tab, direction: TAB_ORDER[demo.tab] >= TAB_ORDER[tabMemo.tab] ? 1 : -1 });
  }
  const direction = tabMemo.direction;

  useEffect(() => {
    if (framed) scrollRef.current?.scrollTo({ top: 0 });
    else window.scrollTo({ top: 0 });
  }, [demo.tab, demo.role, demo.signedIn, framed]);

  useEffect(() => {
    if (framed) return undefined;
    const onScroll = () => setScrolled(window.scrollY > 4);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [framed]);

  const Screen = SCREENS[demo.role][demo.tab];
  const screenKey = demo.signedIn ? `${demo.role}:${demo.tab}` : 'select';

  const content = (
    <AnimatePresence mode="wait" initial={false} custom={direction}>
      <motion.div
        key={screenKey}
        custom={direction}
        variants={SCREEN_VARIANTS}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
        className={framed ? 'min-h-full' : 'min-h-[calc(var(--vh-full)-58px)]'}
      >
        {demo.signedIn ? <Screen demo={demo} /> : <RoleSelect onSelect={demo.signIn} />}
      </motion.div>
    </AnimatePresence>
  );

  if (framed) {
    return (
      <ToastProvider>
        <div className="relative flex h-full flex-col overflow-hidden bg-paper">
          {demo.signedIn && <AppHeader demo={demo} scrolled={scrolled} />}
          <main
            id="konten"
            tabIndex={0}
            aria-label="Layar aplikasi DISIPLIN"
            ref={scrollRef}
            onScroll={(event) => setScrolled(event.currentTarget.scrollTop > 4)}
            className="no-scrollbar min-h-0 flex-1 overflow-y-auto overscroll-contain outline-none focus-visible:shadow-[inset_0_0_0_2px_var(--color-navy)]"
          >
            {content}
          </main>
          {demo.signedIn && <TabBar demo={demo} />}
        </div>
      </ToastProvider>
    );
  }

  return (
    <ToastProvider placement="fixed">
      <div className={`relative mx-auto min-h-[var(--vh-full)] max-w-[560px] bg-paper ${demo.signedIn ? '' : 'pt-[env(safe-area-inset-top)]'}`}>
        {demo.signedIn && <AppHeader demo={demo} scrolled={scrolled} safeTop />}
        <main id="konten" tabIndex={-1} className={`outline-none ${demo.signedIn ? 'pb-[calc(96px+env(safe-area-inset-bottom))]' : ''}`}>
          {content}
        </main>
        {demo.signedIn && <TabBar demo={demo} fixed />}
      </div>
    </ToastProvider>
  );
}
