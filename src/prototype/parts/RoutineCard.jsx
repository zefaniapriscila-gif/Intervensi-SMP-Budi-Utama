import React from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Stamp } from '../../components/art/Doodles';
import { StarBurst } from '../../components/motion/Motion';
import { Card, StairProgress } from './common';

function CheckMark({ checked }) {
  return (
    <svg viewBox="0 0 22 22" className="h-[15px] w-[15px]" aria-hidden="true">
      <motion.path
        d="M5 11.5 9.2 15.6 17 6.6"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={false}
        animate={{ pathLength: checked ? 1 : 0, opacity: checked ? 1 : 0 }}
        transition={{ duration: 0.28, ease: 'easeOut' }}
      />
    </svg>
  );
}

export default function RoutineCard({ routine, onToggle, readOnly = false, title = 'Persiapan untuk besok', note }) {
  const reduce = useReducedMotion();
  const done = routine.filter((item) => item.done).length;
  const complete = done === routine.length;

  return (
    <Card className="relative overflow-hidden">
      <motion.div
        key={complete ? 'complete' : 'progress'}
        initial={complete && !reduce ? { y: 0 } : false}
        animate={complete && !reduce ? { y: [0, 3, 0] } : { y: 0 }}
        transition={{ duration: 0.3, delay: 0.18 }}
      >
        <div className="flex items-end justify-between gap-4 px-5 pb-4 pt-5">
          <div>
            <h2 className="font-display text-[21px] font-semibold leading-tight text-ink">{title}</h2>
            <p className="mt-1 text-[13px] font-medium text-ink-3">
              <span className="font-bold text-ink tabular">{done}</span> dari {routine.length} siap
            </p>
          </div>
          <StairProgress done={done} total={routine.length} />
        </div>

        <ul className="border-t border-line">
          {routine.map((item) => (
            <li key={item.id} className="border-b border-line last:border-b-0">
              {readOnly ? (
                <div className="flex min-h-[52px] items-center gap-3 px-5 py-2.5">
                  <span className={`flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-[7px] ${item.done ? 'bg-navy text-paper' : 'border-2 border-line-2'}`}>
                    <CheckMark checked={item.done} />
                  </span>
                  <span className={`flex-1 text-[14.5px] font-medium leading-snug ${item.done ? 'text-ink' : 'text-ink-3'}`}>{item.label}</span>
                  <span className={`text-[12px] font-bold ${item.done ? 'text-leaf-ink' : 'text-ink-3'}`}>{item.done ? 'Siap' : 'Belum'}</span>
                </div>
              ) : (
                <label className="group flex min-h-[54px] cursor-pointer items-center gap-3 px-5 py-2.5 transition-colors hover:bg-paper/70 active:bg-paper">
                  <input type="checkbox" className="peer sr-only" checked={item.done} onChange={() => onToggle(item.id)} />
                  <span
                    className={`flex h-[24px] w-[24px] shrink-0 items-center justify-center rounded-[8px] transition-[background-color,border-color,transform] duration-200 group-active:scale-[0.82] peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-ink ${item.done ? 'bg-navy text-paper' : 'border-2 border-line-2 bg-card group-hover:border-ink-3'}`}
                  >
                    <CheckMark checked={item.done} />
                  </span>
                  <span className={`flex-1 text-[15px] font-medium leading-snug transition-colors ${item.done ? 'text-ink-3' : 'text-ink'}`}>{item.label}</span>
                  <AnimatePresence initial={false}>
                    {item.done && (
                      <motion.span
                        initial={{ opacity: 0, x: 6 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 6 }}
                        className="text-[12px] font-bold text-leaf-ink"
                      >
                        Siap
                      </motion.span>
                    )}
                  </AnimatePresence>
                </label>
              )}
            </li>
          ))}
        </ul>

        <div className="bg-paper/60 px-5 py-3.5">
          <AnimatePresence mode="wait" initial={false}>
            <motion.p
              key={complete ? 'yes' : 'no'}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="font-hand text-[20px] leading-tight text-ink-2"
            >
              {note ?? (complete ? 'Lengkap! Kamu sudah siap untuk besok.' : 'Satu persiapan kecil malam ini bikin pagi lebih tenang.')}
            </motion.p>
          </AnimatePresence>
        </div>
      </motion.div>

      <AnimatePresence>
        {complete && (
          <motion.div
            key="stamp"
            className="pointer-events-none absolute bottom-[110px] right-1.5 w-[122px] mix-blend-multiply"
            initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 2.3, rotate: -22 }}
            animate={{ opacity: 1, scale: 1, rotate: -10 }}
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.18 } }}
            transition={reduce ? { duration: 0.2 } : { type: 'spring', stiffness: 640, damping: 22, mass: 0.9 }}
          >
            <Stamp label="SIAP!" sub="untuk besok" />
            <StarBurst className="left-1/2 top-1/2" />
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
}
