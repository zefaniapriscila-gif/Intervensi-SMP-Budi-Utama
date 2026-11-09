import React, { useMemo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { formatClock } from '../../lib/time';

// Catatan tulisan tangan wali kelas: kata demi kata "ditulis" dengan pulpen.
export function WrittenText({ text, className = '', startDelay = 0.2 }) {
  const reduce = useReducedMotion();
  const words = useMemo(() => {
    const list = text.split(/\s+/).filter(Boolean);
    const timings = [];
    let cursor = startDelay;
    for (const word of list) {
      const duration = Math.min(0.5, 0.05 + word.length * 0.035);
      timings.push({ word, duration, delay: cursor });
      cursor += duration + 0.03;
    }
    return timings;
  }, [text, startDelay]);
  return (
    <p className={className}>
      <span className="sr-only">{text}</span>
      {words.map(({ word, duration, delay }, index) => {
        return (
          <React.Fragment key={`${word}-${index}`}>
            <motion.span
              aria-hidden="true"
              className="inline-block"
              initial={reduce ? false : { clipPath: 'inset(-20% 100% -30% 0)', opacity: 0.2 }}
              animate={{ clipPath: 'inset(-20% -5% -30% 0)', opacity: 1 }}
              transition={{ duration, delay, ease: 'linear' }}
            >
              {word}
            </motion.span>
            {index < words.length - 1 ? ' ' : ''}
          </React.Fragment>
        );
      })}
    </p>
  );
}

export default function HandNote({ text, at, label = 'Pesan pribadi dari wali kelas', signer = 'Wali kelas VII A', animateIn = true, preview = false }) {
  return (
    <div className={`relative mx-1 overflow-hidden rounded-[20px] bg-marigold-soft py-4 pl-6 pr-5 shadow-paper ${preview ? 'outline outline-2 -outline-offset-2 outline-dashed outline-marigold-ink/40' : ''}`}>
      {preview && <span className="absolute right-3 top-3 rounded-full bg-night px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.1em] text-marigold-2">Contoh</span>}
      <span className="absolute inset-y-0 left-0 w-1.5 bg-marigold" aria-hidden="true" />
      <p className="text-[11.5px] font-bold uppercase tracking-[0.12em] text-marigold-ink">{label}</p>
      {animateIn ? (
        <WrittenText text={text} className="mt-2 font-medium text-[16px] leading-snug text-pen" />
      ) : (
        <p className="mt-2 font-medium text-[16px] leading-snug text-pen">{text}</p>
      )}
      <div className="mt-3 flex items-end justify-between gap-3">
        {at ? <span className="text-[11.5px] font-semibold text-marigold-ink tabular">Dikirim {formatClock(at)}</span> : <span />}
        <span className="flex items-center gap-1">
          <span className="font-medium text-[12px] text-pen">— {signer}</span>
        </span>
      </div>
    </div>
  );
}
