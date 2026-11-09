import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { AnimatePresence, MotionConfig, motion, useReducedMotion } from 'framer-motion';
import { PageCurtain } from './components/motion/Motion';
import { SiteFooter, SiteHeader } from './components/site/SiteChrome';
import LandingPage from './pages/LandingPage';
import MethodologyPage from './pages/MethodologyPage';
import PrototypePage from './pages/PrototypePage';
import { INITIAL_JOURNAL, INITIAL_REMINDERS, INITIAL_ROUTINE } from './data/program';
import { EnterDelayContext } from './lib/enterDelay';
import { ROUTES, navigate, useRoute } from './lib/router';
import { DESKTOP_QUERY } from './lib/useMediaQuery';

const TITLES = {
  [ROUTES.home]: 'DISIPLIN · Penguatan Karakter Disiplin',
  [ROUTES.methodology]: 'Metodologi · DISIPLIN',
  [ROUTES.prototype]: 'Prototipe · DISIPLIN',
};

// Varian halaman: tirai tangga (default) atau pudar sederhana bila
// pengguna meminta gerak dikurangi.
const CURTAIN = {
  enter: {},
  open: { transition: { when: 'beforeChildren' } },
  exit: { transition: { when: 'afterChildren' } },
};
const FADE = {
  enter: { opacity: 0 },
  open: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.15 } },
};

const isDesktopNow = () => typeof window !== 'undefined' && window.matchMedia(DESKTOP_QUERY).matches;

function SkipLink() {
  return (
    <button
      type="button"
      onClick={() => document.getElementById('konten')?.focus()}
      className="fixed left-3 top-3 z-[60] -translate-y-24 rounded-full bg-navy px-4 py-2 text-[14px] font-semibold text-paper shadow-lift transition focus:translate-y-0"
      data-surface="dark"
    >
      Lewati ke konten
    </button>
  );
}

export default function App() {
  const path = useRoute();

  // Status demo hidup di memori halaman saja, sama seperti sebelumnya.
  const [role, setRole] = useState('student');
  const [tab, setTab] = useState('home');
  const [signedIn, setSignedIn] = useState(isDesktopNow);
  const [routine, setRoutine] = useState(INITIAL_ROUTINE);
  const [reminders, setReminders] = useState(INITIAL_REMINDERS);
  const [journal, setJournal] = useState(INITIAL_JOURNAL);
  const [seen, setSeen] = useState(() => new Set());
  const [readFeedback, setReadFeedback] = useState(false);

  const reduceMotion = useReducedMotion();
  const [firstPath] = useState(path);
  const [navigated, setNavigated] = useState(false);
  if (!navigated && path !== firstPath) setNavigated(true);
  const enterDelay = navigated && !reduceMotion ? 0.55 : 0;

  useEffect(() => {
    document.title = TITLES[path] ?? TITLES[ROUTES.home];
  }, [path]);

  // Catat layar yang sudah dikunjungi untuk skenario demo di panel presenter.
  // Disesuaikan saat render (dengan penjaga) agar tidak memicu render berantai.
  const visitKey = path === ROUTES.prototype && signedIn ? `${role}:${tab}` : null;
  if (visitKey && !seen.has(visitKey)) setSeen(new Set(seen).add(visitKey));
  if (visitKey === 'student:journal' && journal.feedbackSent && !readFeedback) setReadFeedback(true);

  const openPrototype = useCallback((target = {}) => {
    if (target.role) {
      setRole(target.role);
      setSignedIn(true);
      setTab(target.tab ?? 'home');
    } else {
      setSignedIn((current) => current || isDesktopNow());
      if (target.tab) setTab(target.tab);
    }
    navigate(ROUTES.prototype);
  }, []);

  const goTo = useCallback(({ role: nextRole, tab: nextTab }) => {
    if (nextRole) setRole(nextRole);
    setTab(nextTab ?? 'home');
    setSignedIn(true);
  }, []);

  const signOut = useCallback(() => {
    setSignedIn(false);
    setTab('home');
  }, []);

  const resetDemo = useCallback(() => {
    setRoutine(INITIAL_ROUTINE);
    setReminders(INITIAL_REMINDERS);
    setJournal(INITIAL_JOURNAL);
    setSeen(new Set());
    setReadFeedback(false);
    setRole('student');
    setTab('home');
    setSignedIn(true);
  }, []);

  const demo = useMemo(() => ({
    role,
    tab,
    signedIn,
    routine,
    reminders,
    journal,
    seen,
    readFeedback,
    setTab,
    goTo,
    signIn: (nextRole) => goTo({ role: nextRole, tab: 'home' }),
    signOut,
    resetDemo,
    toggleRoutine: (id) => setRoutine((items) => items.map((item) => (item.id === id ? { ...item, done: !item.done } : item))),
    toggleReminder: (id) => setReminders((current) => ({ ...current, [id]: !current[id] })),
    updateJournal: (patch) => setJournal((current) => ({ ...current, ...patch })),
    submitJournal: () => setJournal((current) => ({ ...current, reflection: current.reflection.trim(), nextStep: current.nextStep.trim(), sent: true, sentAt: new Date() })),
    submitFeedback: () => setJournal((current) => ({ ...current, feedback: current.feedback.trim(), feedbackSent: true, feedbackAt: new Date() })),
  }), [role, tab, signedIn, routine, reminders, journal, seen, readFeedback, goTo, signOut, resetDemo]);

  const isPrototype = path === ROUTES.prototype;

  return (
    <MotionConfig reducedMotion="user">
      <EnterDelayContext.Provider value={enterDelay}>
      <SkipLink />
      <AnimatePresence mode="wait" initial={false} onExitComplete={() => window.scrollTo({ top: 0, behavior: 'instant' })}>
        <motion.div
          key={path}
          variants={reduceMotion ? FADE : CURTAIN}
          initial="enter"
          animate="open"
          exit="exit"
          className={isPrototype ? '' : 'paper-grain min-h-[100dvh] overflow-x-clip'}
        >
          {!reduceMotion && <PageCurtain />}
          {isPrototype ? (
            <PrototypePage demo={demo} />
          ) : (
            <>
              <SiteHeader path={path} onOpenPrototype={openPrototype} />
              {path === ROUTES.methodology ? <MethodologyPage onOpenPrototype={openPrototype} /> : <LandingPage onOpenPrototype={openPrototype} />}
              <SiteFooter />
            </>
          )}
        </motion.div>
      </AnimatePresence>
      </EnterDelayContext.Provider>
    </MotionConfig>
  );
}
