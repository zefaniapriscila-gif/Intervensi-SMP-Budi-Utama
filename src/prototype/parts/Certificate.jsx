import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Medal } from '../../components/ui/badges';
import { IndicatorMarks } from '../../components/ui/Indicators';

// Piagam Student of the Week dengan kilau tipis saat pertama terlihat.
export default function Certificate({ student, tone = 'marigold', compact = false, rotate = 0 }) {
  const reduce = useReducedMotion();
  return (
    <motion.article
      className="group relative overflow-hidden rounded-[16px] bg-card p-2 shadow-paper ring-1 ring-line"
      style={{ rotate }}
      initial={reduce ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={`relative rounded-[11px] border px-4 pb-4 pt-4 outline outline-1 outline-offset-[-6px] ${tone === 'leaf' ? 'border-leaf/50 outline-leaf/30' : 'border-marigold/70 outline-marigold/40'}`}>
        <p className={`text-[10px] font-bold uppercase tracking-[0.2em] ${tone === 'leaf' ? 'text-leaf-ink' : 'text-marigold-ink'}`}>Student of the Week</p>
        <p className="mt-1 font-display text-[16px] text-ink-2">{student.category}</p>
        <p className={`mt-2 font-display font-semibold leading-tight text-ink ${compact ? 'text-[20px]' : 'text-[23px]'}`}>{student.name}</p>
        <p className="text-[12.5px] font-semibold text-ink-3">Kelas {student.className}</p>
        {student.met && <IndicatorMarks met={student.met} className="mt-3" />}
        {!compact && <p className="mt-3 border-t border-dashed border-line-2 pt-3 text-[13.5px] leading-relaxed text-ink-2">{student.detail}</p>}
        <Medal tone={tone} className="absolute right-3 top-3 h-9 w-9" />
      </div>
      {!reduce && (
        <motion.span
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/70 to-transparent"
          initial={{ x: '-150%' }}
          whileInView={{ x: '420%' }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
        />
      )}
    </motion.article>
  );
}
