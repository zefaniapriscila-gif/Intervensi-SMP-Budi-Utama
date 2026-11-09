import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Award, ChevronRight, LockKeyhole, Plus, Send, ShieldCheck } from 'lucide-react';
import { Footprints } from 'lucide-react';
import { Initial } from '../../components/ui/primitives';
import { FEEDBACK_STARTERS, STUDENT, STUDENTS_NEEDING_SUPPORT, WEEKLY_STUDENTS } from '../../data/program';
import { formatClock } from '../../lib/time';
import { useNotify } from '../toastContext';
import Certificate from '../parts/Certificate';
import HandNote from '../parts/HandNote';
import { Card, CountUp, PrivacyNote, ScreenTitle, SectionLabel } from '../parts/common';

function Stat({ value, label, tone = 'ink' }) {
  return (
    <div className="flex-1 px-1">
      <p className={`font-display text-[44px] font-[480] leading-none tracking-[-0.03em] ${tone === 'pen' ? 'text-pen' : tone === 'leaf' ? 'text-leaf-ink' : 'text-ink'}`}>
        <CountUp value={value} />
      </p>
      <p className="mt-2 text-[13px] font-semibold leading-snug text-ink-3">{label}</p>
    </div>
  );
}

function StatusChip({ sent, replied }) {
  if (replied) return <span className="rounded-full bg-leaf-soft px-2.5 py-1 text-[11.5px] font-bold text-leaf-ink">Sudah dibalas</span>;
  if (sent) return <span className="rounded-full bg-marigold px-2.5 py-1 text-[11.5px] font-bold text-ink">Catatan baru</span>;
  return <span className="rounded-full bg-paper-2 px-2.5 py-1 text-[11.5px] font-bold text-ink-3">Menunggu catatan</span>;
}

export function TeacherHome({ demo }) {
  const { journal } = demo;
  return (
    <div className="pb-6">
      <ScreenTitle eyebrow="Dashboard wali kelas" title="Kelas VII A">
        Dampingi dengan perhatian. Lihat progres harian dan berikan dukungan yang spesifik.
      </ScreenTitle>

      <div className="space-y-6 px-4">
        <Card className="flex divide-x divide-line px-4 py-5">
          <Stat value={23 + (journal.sent ? 1 : 0)} label="Catatan masuk hari ini" />
          <div className="flex-1 pl-5"><Stat value={6} label="Perlu tindak lanjut pribadi" tone="pen" /></div>
        </Card>

        <section>
          <SectionLabel>Catatan masuk</SectionLabel>
          <Card className="overflow-hidden">
            <motion.button
              type="button"
              onClick={() => demo.setTab('journal')}
              whileTap={{ scale: 0.99 }}
              className="group flex w-full items-center gap-3.5 p-4 text-left transition-colors hover:bg-paper/70"
            >
              <Initial letter={STUDENT.initial} />
              <span className="min-w-0 flex-1">
                <span className="flex flex-wrap items-center gap-2">
                  <span className="text-[15px] font-bold text-ink">{STUDENT.name}</span>
                  <StatusChip sent={journal.sent} replied={journal.feedbackSent} />
                </span>
                <span className="mt-1 block truncate text-[13px] text-ink-3">
                  {journal.sent ? (journal.reflection ? `“${journal.reflection}”` : journal.challenge) : `${STUDENT.className} · belum mengirim catatan harian`}
                </span>
              </span>
              <ChevronRight className="h-4 w-4 shrink-0 text-ink-3 transition-transform duration-300 group-hover:translate-x-0.5" />
            </motion.button>
            <div className="flex items-center gap-3.5 border-t border-dashed border-line-2 bg-paper/50 px-4 py-3.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-paper-2 text-[12px] font-bold text-ink-3 tabular">+23</span>
              <span className="text-[13px] leading-snug text-ink-3">catatan lain dari kelas VII A · contoh untuk demo</span>
            </div>
          </Card>
        </section>

        <motion.button
          type="button"
          onClick={() => demo.setTab('recognition')}
          whileTap={{ scale: 0.98 }}
          className="group flex w-full items-center gap-4 rounded-[24px] bg-navy p-5 text-left text-paper shadow-lift"
          data-surface="dark"
        >
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[16px] bg-marigold text-ink"><Award className="h-[22px] w-[22px]" /></span>
          <span className="flex-1">
            <span className="block font-display text-[19px] font-semibold leading-tight">Student of the Week</span>
            <span className="mt-1 block text-[13px] text-mist">Apresiasi konsistensi dan perkembangan minggu ini.</span>
          </span>
          <ArrowRight className="h-5 w-5 text-marigold transition-transform duration-300 group-hover:translate-x-1" />
        </motion.button>

        <PrivacyNote icon={ShieldCheck}>Gunakan catatan untuk bimbingan personal. Sampaikan ringkasan kualitatif kepada orang tua tanpa isi percakapan pribadi.</PrivacyNote>
      </div>
    </div>
  );
}

export function TeacherJournal({ demo }) {
  const notify = useNotify();
  const { journal } = demo;

  const appendStarter = (text) => {
    const current = journal.feedback.trim();
    demo.updateJournal({ feedback: current ? `${current} ${text}` : text });
  };

  const submit = (event) => {
    event.preventDefault();
    if (!journal.feedback.trim()) return;
    demo.submitFeedback();
    notify({ title: `Balasan terkirim ke ${STUDENT.firstName}`, body: 'Ganti ke peran siswa untuk melihatnya di Catatan.' });
  };

  return (
    <form onSubmit={submit} className="pb-6">
      <ScreenTitle eyebrow="Catatan pembinaan personal" title="Pantau dan dukung">
        Baca catatan siswa secara pribadi, lalu berikan arahan yang konkret.
      </ScreenTitle>

      <div className="space-y-5 px-4">
        <Card className="overflow-hidden">
          <div className="flex items-center gap-3 border-b border-line p-4">
            <Initial letter={STUDENT.initial} />
            <div className="min-w-0 flex-1">
              <p className="text-[15px] font-bold text-ink">{STUDENT.name}</p>
              <p className="text-[12.5px] text-ink-3">{STUDENT.className} · {journal.sent && journal.sentAt ? `masuk ${formatClock(journal.sentAt)}` : 'hari ini'}</p>
            </div>
            <StatusChip sent={journal.sent} replied={journal.feedbackSent} />
          </div>
          {journal.sent ? (
            <div className="notebook pb-4 pl-[54px] pr-5 pt-[12px] [--margin-x:40px] [--rule-offset:12px] [--rule:28px]">
              <p className="text-[11.5px] font-bold uppercase leading-[28px] tracking-[0.12em] text-ink-3">Kendala yang dirasakan</p>
              <p className="text-[14.5px] font-semibold leading-[28px] text-ink">{journal.challenge}</p>
              <p className="mt-[28px] text-[11.5px] font-bold uppercase leading-[28px] tracking-[0.12em] text-ink-3">Cerita</p>
              <p className="text-[14.5px] leading-[28px] text-ink-2">{journal.reflection ? `“${journal.reflection}”` : 'Tidak menulis cerita tambahan.'}</p>
              {journal.nextStep && (
                <p className="mt-[28px] flex items-center gap-2 text-[14px] font-semibold leading-[28px] text-ink">
                  <Footprints className="h-4 w-4 text-marigold-ink" /> Besok: {journal.nextStep}
                </p>
              )}
            </div>
          ) : (
            <div className="px-5 py-6 text-center">
              <p className="font-medium text-[16px] leading-snug text-ink-2">{STUDENT.firstName} belum mengirim catatan hari ini.</p>
              <p className="mt-2 text-[12.5px] text-ink-3">Coba ganti ke peran siswa dan kirim satu catatan.</p>
            </div>
          )}
        </Card>

        <section>
          <label htmlFor="teacher-feedback" className="block px-1 text-[15px] font-bold text-ink">Balasan pribadi untuk {STUDENT.firstName}</label>
          <p className="mt-1 px-1 text-[13px] text-ink-3">Sebut usaha yang spesifik, lalu tawarkan satu langkah kecil.</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {FEEDBACK_STARTERS.map((starter) => (
              <motion.button
                key={starter.label}
                type="button"
                whileTap={{ scale: 0.95 }}
                onClick={() => appendStarter(starter.text)}
                className="inline-flex items-center gap-1 rounded-full bg-card px-3 py-1.5 text-[12.5px] font-semibold text-ink-2 ring-1 ring-line transition hover:text-ink hover:ring-line-2"
              >
                <Plus className="h-3.5 w-3.5 text-marigold-ink" /> {starter.label}
              </motion.button>
            ))}
          </div>
          <textarea
            id="teacher-feedback"
            value={journal.feedback}
            onChange={(event) => demo.updateJournal({ feedback: event.target.value })}
            rows={4}
            placeholder="Apresiasi usaha siswa dan tuliskan langkah kecil yang bisa dicoba…"
            className="mt-3 block w-full resize-none rounded-[18px] bg-card p-4 text-[16px] leading-relaxed text-ink outline-none ring-1 ring-line transition placeholder:text-ink-3 focus:ring-2 focus:ring-navy"
          />
          <motion.button
            type="submit"
            whileTap={{ scale: 0.98 }}
            disabled={!journal.feedback.trim()}
            className="mt-3 flex h-[54px] w-full items-center justify-center gap-2 rounded-[18px] bg-navy text-[15.5px] font-bold text-paper shadow-press transition hover:bg-navy-2 disabled:bg-line-2 disabled:text-ink-3 disabled:shadow-none"
            data-surface="dark"
          >
            <Send className="h-4 w-4" /> {journal.feedbackSent ? 'Perbarui umpan balik' : 'Kirim umpan balik pribadi'}
          </motion.button>
        </section>

        {journal.feedbackSent && journal.feedback && (
          <section>
            <SectionLabel>Terlihat oleh {STUDENT.firstName}</SectionLabel>
            <HandNote key={journal.feedbackAt?.getTime?.() ?? 'note'} text={journal.feedback} at={journal.feedbackAt} label="Umpan balik terkirim" />
          </section>
        )}

        <PrivacyNote>Catatan ini bersifat pribadi untuk siswa dan wali kelas. Orang tua menerima ringkasan kualitatif, bukan percakapan.</PrivacyNote>
      </div>
    </form>
  );
}

export function TeacherRecognition() {
  return (
    <div className="pb-6">
      <ScreenTitle eyebrow="Student of the Week" title="Apresiasi perilaku baik">
        Rayakan konsistensi dan perkembangan setiap siswa.
      </ScreenTitle>

      <div className="space-y-6 px-4">
        <Card className="flex divide-x divide-line px-4 py-5">
          <Stat value={12} label="Konsisten · siswa diapresiasi" />
          <div className="flex-1 pl-5"><Stat value={8} label="Berkembang · kemajuan dirayakan" tone="leaf" /></div>
        </Card>

        <section>
          <SectionLabel>Minggu ini</SectionLabel>
          <div className="grid gap-3">
            {WEEKLY_STUDENTS.map((student, index) => (
              <Certificate key={student.name} student={student} tone={index === 0 ? 'marigold' : 'leaf'} />
            ))}
          </div>
        </section>

        <section>
          <SectionLabel action={<span className="inline-flex items-center gap-1 text-[11.5px] font-bold text-pen"><LockKeyhole className="h-3.5 w-3.5" /> Rahasia</span>}>
            Tindak lanjut pribadi
          </SectionLabel>
          <Card className="divide-y divide-line">
            {STUDENTS_NEEDING_SUPPORT.map((student) => (
              <div key={student.name} className="flex items-start gap-3.5 p-4">
                <Initial letter={student.initial} tone="paper" />
                <div>
                  <p className="text-[14.5px] font-bold text-ink">{student.name} · {student.className}</p>
                  <p className="mt-1 text-[13px] leading-relaxed text-ink-3">{student.detail}</p>
                </div>
              </div>
            ))}
          </Card>
          <p className="mt-2.5 px-1 text-[12.5px] leading-relaxed text-ink-3">Contoh siswa yang memerlukan dukungan tambahan. Hanya terlihat oleh wali kelas.</p>
        </section>

        <PrivacyNote tone="navy">Daftar siswa yang membutuhkan pendampingan bersifat rahasia dan hanya tersedia bagi guru yang berwenang—tidak ditampilkan sebagai papan peringkat publik.</PrivacyNote>
      </div>
    </div>
  );
}
