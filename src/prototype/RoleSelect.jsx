import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ChevronRight, ShieldCheck } from 'lucide-react';
import { LogoMark } from '../components/brand/Logo';
import { RoleBadge } from '../components/ui/primitives';
import { ROLES } from '../data/program';
import { ROUTES, href } from '../lib/router';

export default function RoleSelect({ onSelect }) {
  return (
    <div className="flex min-h-full flex-col px-5 pb-6 pt-8">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-center text-center"
      >
        <motion.span initial={{ rotate: -12, scale: 0.7 }} animate={{ rotate: 0, scale: 1 }} transition={{ type: 'spring', stiffness: 260, damping: 14, delay: 0.1 }}>
          <LogoMark className="h-16 w-16 drop-shadow-[0_10px_18px_rgb(20_26_58/0.25)]" />
        </motion.span>
        <p className="mt-5 text-[12px] font-bold uppercase tracking-[0.18em] text-ink-3">Selamat datang di</p>
        <h1 className="mt-1 font-display text-[34px] font-semibold tracking-[0.04em] text-ink">LANGKAH</h1>
        <p className="mt-2 max-w-[290px] text-[14px] leading-relaxed text-ink-2">Penguatan karakter disiplin, bersama siswa, orang tua, dan wali kelas.</p>
      </motion.div>

      <div className="mt-8">
        <h2 className="px-1 font-display text-[20px] font-semibold text-ink">Masuk sebagai siapa?</h2>
        <ul className="mt-3 space-y-2.5">
          {ROLES.map((role, index) => (
            <motion.li
              key={role.id}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.button
                type="button"
                onClick={() => onSelect(role.id)}
                whileTap={{ scale: 0.98 }}
                className="group flex w-full items-center gap-4 rounded-[22px] bg-card p-4 text-left shadow-paper ring-1 ring-line transition hover:ring-line-2"
              >
                <RoleBadge role={role.id} size="lg" />
                <span className="min-w-0 flex-1">
                  <span className="block text-[16px] font-bold text-ink">{role.label}</span>
                  <span className="mt-0.5 block text-[13px] leading-snug text-ink-3">{role.short}</span>
                </span>
                <ChevronRight className="h-5 w-5 shrink-0 text-ink-3 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-ink" />
              </motion.button>
            </motion.li>
          ))}
        </ul>
      </div>

      <div className="mt-auto pt-8 text-center">
        <p className="flex items-center justify-center gap-1.5 text-[12.5px] text-ink-3">
          <ShieldCheck className="h-4 w-4 text-leaf-ink" /> Prototipe demo · tanpa akun atau kata sandi.
        </p>
        <a href={href(ROUTES.home)} className="mt-3 inline-flex items-center gap-1.5 text-[13.5px] font-bold text-navy">
          <ArrowLeft className="h-4 w-4" /> <span className="link-underline">Kembali ke beranda LANGKAH</span>
        </a>
      </div>
    </div>
  );
}
