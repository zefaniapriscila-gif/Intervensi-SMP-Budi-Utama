import React from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Check, LockKeyhole, NotebookPen } from 'lucide-react';
import { Footstep, Stamp } from '../../components/art/Doodles';
import { CHALLENGES, STUDENT, WEEKLY_STUDENTS } from '../../data/program';
import { formatClock, formatDay, greetingFor } from '../../lib/time';
import { useNow } from '../../lib/useNow';
import { useReminderToggle } from '../hooks';
import { useNotify } from '../toastContext';
import Certificate from '../parts/Certificate';
import HandNote from '../parts/HandNote';
import ReminderPair from '../parts/ReminderPair';
import RoutineCard from '../parts/RoutineCard';
import { Card, DemoNote, PrivacyNote, ScreenTitle, SectionLabel, StairProgress } from '../parts/common';

export function StudentHome({ demo }) {
  const now = useNow();
  const toggleReminder = useReminderToggle(demo, 'student');
  const hasReply = demo.journal.feedbackSent && !demo.readFeedback;

  return (
    <div className="pb-6">
      <header className="flex items-start justify-between gap-3 px-5 pb-5 pt-5">
        <div>
          <p className="text-[13px] font-semibold text-ink-3">{greetingFor(now)},</p>
          <h1 className="mt-0.5 font-display text-[34px] font-[560] leading-none tracking-[-0.02em] text-ink">{STUDENT.firstName}.</h1>
          <p className="mt-2 text-[13px] font-medium text-ink-3">{formatDay(now)}</p>
        </div>
        <span className="mt-1 rounded-full bg-paper-2 px-3 py-1.5 text-[12px] font-bold text-ink-2 ring-1 ring-line">Kelas {STUDENT.className}</span>
      </header>

      <div className="space-y-6 px-4">
        <RoutineCard routine={demo.routine} onToggle={demo.toggleRoutine} />

        <section>
          <SectionLabel>Pengingat harian</SectionLabel>
          <ReminderPair reminders={demo.reminders} onToggle={toggleReminder} />
          <p className="mt-2.5 px-1 text-[12.5px] leading-relaxed text-ink-3">Atur rutinitas bersama orang tua.</p>
        </section>

        <motion.button
          type="button"
          onClick={() => demo.setTab('journal')}
          whileTap={{ scale: 0.98 }}
          className="group relative flex w-full items-center gap-4 overflow-hidden rounded-[24px] bg-navy p-5 text-left text-paper shadow-lift"
          data-surface="dark"
        >
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[16px] bg-marigold text-ink"><NotebookPen className="h-[22px] w-[22px]" /></span>
          <span className="min-w-0 flex-1">
            <span className="block font-display text-[20px] font-semibold leading-tight">Ceritakan harimu</span>
            <span className="mt-1 block text-[13px] leading-snug text-mist">
              {hasReply ? 'Wali kelas membalas catatanmu.' : demo.journal.sent ? 'Catatanmu sudah terkirim. Ubah kapan saja.' : 'Catatanmu membantu wali kelas mendukungmu.'}
            </span>
          </span>
          {hasReply && (
            <span className="absolute right-4 top-4 flex h-2.5 w-2.5" aria-label="Balasan baru">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-marigold opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-marigold" />
            </span>
          )}
          <ArrowRight className="h-5 w-5 shrink-0 text-marigold transition-transform duration-300 group-hover:translate-x-1" />
        </motion.button>

        <DemoNote>Profil contoh · data hanya tersimpan sementara selama demo berlangsung.</DemoNote>
      </div>
    </div>
  );
}

export function StudentJournal({ demo }) {
  const now = useNow();
  const notify = useNotify();
  const reduce = useReducedMotion();
  const { journal } = demo;

  const submit = (event) => {
    event.preventDefault();
    demo.submitJournal();
    notify({ title: journal.sent ? 'Catatan diperbarui' : 'Catatan terkirim ke wali kelas', body: 'Hanya kamu dan wali kelas yang bisa membacanya.' });
  };

  return (
    <form onSubmit={submit} className="pb-6">
      <ScreenTitle eyebrow={formatDay(now)} title="Catatan harian">
        Kenali hal yang berjalan baik dan dukungan yang kamu butuhkan.
      </ScreenTitle>

      <div className="space-y-5 px-4">
        {journal.feedbackSent && journal.feedback && <HandNote text={journal.feedback} at={journal.feedbackAt} />}

        <fieldset className="px-1">
          <legend className="text-[15px] font-bold text-ink">Ada kendala hari ini?</legend>
          <p className="mt-1 text-[13px] text-ink-3">Pilih yang paling sesuai. Tidak apa-apa kalau tidak ada.</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {CHALLENGES.map((option) => {
              const selected = journal.challenge === option;
              return (
                <label key={option} className="group cursor-pointer">
                  <input type="radio" name="challenge" value={option} checked={selected} onChange={() => demo.updateJournal({ challenge: option })} className="peer sr-only" />
                  <motion.span
                    layout
                    className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-[13.5px] font-semibold transition-[background-color,color,box-shadow,scale] duration-200 group-active:scale-[0.96] peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-ink ${selected ? 'bg-navy text-paper' : 'bg-card text-ink-2 ring-1 ring-line hover:ring-line-2'}`}
                  >
                    {selected && <Check className="h-3.5 w-3.5 text-marigold" strokeWidth={3} />}
                    {option}
                  </motion.span>
                </label>
              );
            })}
          </div>
        </fieldset>

        <Card className="relative overflow-hidden">
          <div className="notebook px-0 pb-3 pt-[18px] [--margin-x:40px] [--rule-offset:18px] [--rule:30px]">
            <label htmlFor="journal-reflection" className="block pl-[54px] pr-5 text-[14px] font-bold leading-[30px] text-ink">Apa yang ingin kamu ceritakan?</label>
            <textarea
              id="journal-reflection"
              value={journal.reflection}
              onChange={(event) => demo.updateJournal({ reflection: event.target.value })}
              rows={5}
              maxLength={400}
              placeholder="Tulis dengan bahasamu sendiri. Wali kelas siap mendengarkan."
              className="block w-full resize-none bg-transparent pl-[54px] pr-5 text-[16px] leading-[30px] text-ink outline-none placeholder:text-ink-3"
            />
            <p className="pr-5 text-right text-[11.5px] font-semibold leading-[30px] text-ink-3 tabular">{journal.reflection.length}/400</p>
          </div>
          <AnimatePresence>
            {journal.sent && (
              <motion.div
                key={`sent-${journal.sentAt?.getTime?.() ?? 0}`}
                className="pointer-events-none absolute bottom-9 right-4 w-[138px] mix-blend-multiply"
                initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 2.2, rotate: -20 }}
                animate={{ opacity: 0.92, scale: 1, rotate: -8 }}
                exit={{ opacity: 0 }}
                transition={reduce ? { duration: 0.2 } : { type: 'spring', stiffness: 600, damping: 22 }}
              >
                <Stamp label="TERKIRIM" sub={journal.sentAt ? `pukul ${formatClock(journal.sentAt)}` : 'ke wali kelas'} color="#1E2A5E" />
              </motion.div>
            )}
          </AnimatePresence>
        </Card>

        <div className="px-1">
          <label htmlFor="journal-next-step" className="block text-[15px] font-bold text-ink">Langkah kecil untuk besok</label>
          <div className="mt-2 flex items-center gap-3 rounded-[16px] bg-card px-4 ring-1 ring-line transition focus-within:ring-2 focus-within:ring-navy">
            <Footstep className="h-5 w-4 shrink-0 rotate-[70deg] text-marigold-ink" />
            <input
              id="journal-next-step"
              type="text"
              value={journal.nextStep}
              onChange={(event) => demo.updateJournal({ nextStep: event.target.value })}
              maxLength={100}
              placeholder="Contoh: siapkan tas sebelum tidur"
              className="h-[52px] w-full bg-transparent text-[16px] text-ink outline-none placeholder:text-ink-3"
            />
          </div>
        </div>

        <PrivacyNote>Catatan ini hanya untuk kamu dan wali kelas. Orang tua menerima ringkasan perkembangan, bukan isi ceritamu.</PrivacyNote>

        <motion.button
          type="submit"
          whileTap={{ scale: 0.98 }}
          className="flex h-[54px] w-full items-center justify-center gap-2 rounded-[18px] bg-navy text-[15.5px] font-bold text-paper shadow-press transition hover:bg-navy-2"
          data-surface="dark"
        >
          {journal.sent ? 'Perbarui catatan' : 'Kirim ke wali kelas'}
          <motion.span
            key={journal.sentAt?.getTime?.() ?? 'idle'}
            initial={journal.sentAt && !reduce ? { x: -22, opacity: 0 } : false}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 380, damping: 20, delay: 0.25 }}
          >
            <ArrowRight className="h-4 w-4 text-marigold" />
          </motion.span>
        </motion.button>
        {journal.sent && (
          <p className="text-center text-[12.5px] font-medium text-ink-3">
            Terkirim pukul <span className="tabular">{formatClock(journal.sentAt ?? new Date())}</span> · tersimpan sementara di demo ini.
          </p>
        )}
      </div>
    </form>
  );
}

export function StudentRecognition({ demo }) {
  const done = demo.routine.filter((item) => item.done).length;
  const complete = done === demo.routine.length;
  return (
    <div className="pb-6">
      <ScreenTitle eyebrow="Perkembangan mingguan" title="Usahamu berarti">
        Apresiasi diberikan untuk konsistensi dan kemajuan.
      </ScreenTitle>

      <div className="space-y-6 px-4">
        <section className="relative rounded-[26px] bg-paper-3/70 px-4 pb-5 pt-4 ring-1 ring-line-2/60">
          <div className="mb-3 flex items-baseline justify-between">
            <p className="font-hand text-[24px] leading-none text-ink">Mading kelas</p>
            <p className="text-[11.5px] font-bold uppercase tracking-[0.12em] text-ink-2">Minggu ini</p>
          </div>
          <div className="grid gap-4">
            {WEEKLY_STUDENTS.map((student, index) => (
              <div key={student.name} className="relative">
                <span className="absolute left-1/2 top-0 z-10 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/3 rounded-full bg-pen shadow-[0_2px_3px_rgb(20_26_58/0.35)]" aria-hidden="true" />
                <Certificate student={student} tone={index === 0 ? 'marigold' : 'leaf'} rotate={index === 0 ? -1.2 : 1.1} />
              </div>
            ))}
          </div>
          <p className="mt-4 text-[12.5px] leading-relaxed text-ink-2">Contoh perilaku yang diapresiasi—untuk menginspirasi, bukan membandingkan.</p>
        </section>

        <section>
          <SectionLabel>Dua cara diapresiasi</SectionLabel>
          <Card className="divide-y divide-line">
            {[
              ['Konsisten Disiplin', 'Menghargai kebiasaan baik yang terjaga.'],
              ['Perkembangan Terbaik', 'Merayakan usaha dan kemajuan positif.'],
            ].map(([title, body], index) => (
              <div key={title} className="flex items-center gap-4 p-4">
                <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-display text-[16px] font-semibold ${index === 0 ? 'bg-marigold-soft text-marigold-ink' : 'bg-leaf-soft text-leaf-ink'}`}>{index + 1}</span>
                <span>
                  <span className="block text-[15px] font-bold text-ink">{title}</span>
                  <span className="mt-0.5 block text-[13px] text-ink-3">{body}</span>
                </span>
              </div>
            ))}
          </Card>
        </section>

        <section className="flex items-center gap-4 rounded-[24px] bg-marigold-soft p-5 ring-1 ring-marigold/30">
          <div className="min-w-0 flex-1">
            <p className="flex items-center gap-1.5 text-[11.5px] font-bold uppercase tracking-[0.12em] text-marigold-ink"><LockKeyhole className="h-3.5 w-3.5" /> Hanya untukmu</p>
            <h2 className="mt-1.5 font-display text-[20px] font-semibold text-ink">Kemajuan kecilmu</h2>
            <p className="mt-1 text-[13.5px] leading-relaxed text-ink-2">
              {complete
                ? 'Semua persiapan malam ini lengkap. Besok, coba pertahankan rutinitasnya!'
                : `Kamu sudah menyiapkan ${done} dari ${demo.routine.length} perlengkapan. Satu langkah lagi tetap berarti.`}
            </p>
          </div>
          <StairProgress done={done} total={demo.routine.length} />
        </section>

        <DemoNote>Contoh apresiasi untuk demo. Penghargaan tidak menentukan nilai dirimu.</DemoNote>
      </div>
    </div>
  );
}
