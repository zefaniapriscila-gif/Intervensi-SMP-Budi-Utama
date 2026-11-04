import React, { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { LogoMark } from '../components/brand/Logo';
import { ToastContext } from './toastContext';

// Notifikasi simulasi ala "heads-up" di ponsel. Tidak ada notifikasi
// sungguhan yang dikirim; ini hanya umpan balik visual di demo.

export function ToastProvider({ children, placement = 'absolute' }) {
  const [toast, setToast] = useState(null);
  const timer = useRef(null);

  const notify = useCallback((next) => {
    clearTimeout(timer.current);
    setToast({ id: Date.now(), ...next });
    timer.current = setTimeout(() => setToast(null), next.duration ?? 3400);
  }, []);

  useEffect(() => () => clearTimeout(timer.current), []);

  const position = placement === 'fixed'
    ? 'fixed inset-x-0 top-[calc(env(safe-area-inset-top)+8px)] z-50 mx-auto max-w-[460px] px-3'
    : 'absolute inset-x-0 top-2 z-50 px-3';

  return (
    <ToastContext.Provider value={notify}>
      {children}
      <div className={`pointer-events-none ${position}`} aria-live="polite" aria-atomic="true">
        <AnimatePresence>
          {toast && (
            <motion.button
              type="button"
              key={toast.id}
              onClick={() => setToast(null)}
              drag="y"
              dragConstraints={{ top: 0, bottom: 0 }}
              dragElastic={{ top: 0.6, bottom: 0.1 }}
              onDragEnd={(_, info) => { if (info.offset.y < -24) setToast(null); }}
              initial={{ y: -90, opacity: 0, scale: 0.96 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -80, opacity: 0, scale: 0.98, transition: { duration: 0.25 } }}
              transition={{ type: 'spring', stiffness: 420, damping: 30 }}
              className="pointer-events-auto flex w-full gap-3 rounded-[22px] bg-card p-3.5 text-left shadow-lift ring-1 ring-line"
            >
              <LogoMark className="h-9 w-9 shrink-0" />
              <span className="min-w-0 flex-1">
                <span className="flex items-center gap-1.5 text-[11.5px] font-semibold text-ink-3">
                  <span className="font-bold tracking-[0.06em] text-ink">LANGKAH</span> · sekarang
                </span>
                <span className="mt-0.5 block text-[14px] font-bold leading-snug text-ink">{toast.title}</span>
                {toast.body && <span className="mt-0.5 block text-[13px] leading-snug text-ink-2">{toast.body}</span>}
              </span>
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}
