import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Check, Clock3, HeartHandshake, RefreshCw, ShieldCheck } from 'lucide-react';
import { Paraf, Seal } from '../../components/art/Doodles';
import { HOME_SUPPORT, PRAISE_EXAMPLES, STUDENT } from '../../data/program';
import { formatDay } from '../../lib/time';
import { useNow } from '../../lib/useNow';
import ReminderPair from '../parts/ReminderPair';
import RoutineCard from '../parts/RoutineCard';
import { Card, DemoNote, PrivacyNote, ScreenTitle, SectionLabel } from '../parts/common';
import { useReminderToggle } from '../hooks';

export function ParentHome({ demo }) {
  const toggleReminder = useReminderToggle(demo, 'parent');
  const done = demo.routine.filter((item) => item.done).length;
  return (
    <div className="pb-6">
      <ScreenTitle eyebrow="Ruang keluarga" title={`Dukung rutinitas ${STUDENT.firstName}`}>
        Kerja sama kecil di rumah membantu pagi lebih siap.
      </ScreenTitle>

      <div className="space-y-6 px-4">
        <RoutineCard
          routine={demo.routine}
          readOnly
          title={`Persiapan ${STUDENT.firstName}`}
          note={done === demo.routine.length ? `${STUDENT.firstName} sudah siap untuk besok. Saatnya mengapresiasi!` : 'Diperbarui oleh Holyna. Siapkan sisanya bersama malam ini.'}
        />

        <section>
          <SectionLabel>Pengingat keluarga</SectionLabel>
          <ReminderPair reminders={demo.reminders} onToggle={toggleReminder} audience="parent" />
        </section>

        <Card className="p-5">
          <div className="flex items-start gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[13px] bg-leaf-soft text-leaf-ink"><HeartHandshake className="h-5 w-5" /></span>
            <div>
              <p className="text-[11.5px] font-bold uppercase tracking-[0.12em] text-leaf-ink">Kolaborasi keluarga & sekolah</p>
              <h2 className="mt-1 font-display text-[19px] font-semibold leading-snug text-ink">Sejalan dengan disiplin positif sekolah</h2>
            </div>
          </div>
          <p className="mt-3 text-[14px] leading-relaxed text-ink-2">
            Pengingat pagi mendukung upaya sekolah mengurangi keterlambatan, termasuk saat kebiasaan atau jadwal orang tua mengantar memengaruhi waktu tiba siswa. Tujuannya membangun rutinitas berangkat yang lebih tepat waktu bersama—bukan menyalahkan keluarga.
          </p>
          <div className="mt-4 flex gap-3 rounded-[16px] bg-paper p-3.5">
            <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-navy" />
            <p className="text-[13px] leading-relaxed text-ink-2"><span className="font-bold text-ink">Langkah bersama:</span> atur waktu bersiap, sepakati perkiraan waktu berangkat, lalu sesuaikan pengingat dengan rutinitas keluarga.</p>
          </div>
        </Card>
      </div>
    </div>
  );
}

export function ParentJournal() {
  const now = useNow();
  return (
    <div className="pb-6">
      <ScreenTitle eyebrow="Kolaborasi keluarga" title="Kabar dari sekolah">
        Ringkasan perkembangan {STUDENT.firstName} yang dibagikan wali kelas.
      </ScreenTitle>

      <div className="space-y-5 px-4">
        <motion.article
          initial={{ opacity: 0, y: 18, rotate: 0 }}
          animate={{ opacity: 1, y: 0, rotate: -0.6 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden rounded-[8px] bg-card shadow-lift ring-1 ring-line"
        >
          <div className="flex items-center justify-between bg-navy px-4 py-2.5 text-paper" data-surface="dark">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em]">Buku penghubung</p>
            <p className="text-[11.5px] font-semibold text-mist">{formatDay(now)}</p>
          </div>
          <div className="notebook pb-5 pl-[54px] pr-5 pt-[14px] [--margin-x:40px] [--rule-offset:14px] [--rule:28px]">
            <p className="text-[11.5px] font-bold uppercase leading-[28px] tracking-[0.12em] text-ink-3">Laporan kualitatif · hari ini</p>
            <h2 className="font-display text-[21px] font-semibold leading-[28px] text-ink">Rutinitas makin teratur</h2>
            <p className="text-[14.5px] leading-[28px] text-ink-2">
              {STUDENT.firstName} mengikuti kegiatan belajar dengan baik. Terus dukung kebiasaan menyiapkan perlengkapan sekolah pada malam hari.
            </p>
            <div className="flex items-center justify-end gap-1 pt-[2px] leading-[28px]">
              <span className="font-hand text-[19px] text-pen">— Wali kelas VII A</span>
              <Paraf className="h-6 w-14" />
            </div>
          </div>
        </motion.article>

        <PrivacyNote icon={ShieldCheck}>
          <span className="font-bold text-ink">Privasi anak terjaga.</span> Orang tua menerima ringkasan perkembangan, bukan isi percakapan pribadi anak dengan wali kelas.
        </PrivacyNote>

        <section>
          <SectionLabel>Yang bisa dilakukan di rumah</SectionLabel>
          <Card className="divide-y divide-line">
            {HOME_SUPPORT.map((item, index) => (
              <motion.div
                key={item}
                className="flex items-center gap-3 px-4 py-3.5"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25 + index * 0.1 }}
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-leaf-soft text-leaf-ink"><Check className="h-3.5 w-3.5" strokeWidth={3} /></span>
                <span className="text-[14.5px] leading-snug text-ink">{item}</span>
              </motion.div>
            ))}
          </Card>
        </section>

        <DemoNote>Informasi ini contoh untuk demo dan belum dikirim oleh sekolah.</DemoNote>
      </div>
    </div>
  );
}

export function ParentRecognition({ demo }) {
  const [index, setIndex] = useState(0);
  return (
    <div className="pb-6">
      <ScreenTitle eyebrow="Apresiasi & dukungan" title="Rayakan prosesnya">
        Kebiasaan baik tumbuh dengan dukungan di rumah dan sekolah.
      </ScreenTitle>

      <div className="space-y-6 px-4">
        <div className="relative overflow-hidden rounded-[26px] bg-navy p-5 text-paper shadow-lift" data-surface="dark">
          <Seal className="absolute -right-2 -top-3 w-[76px] rotate-12" />
          <h2 className="max-w-[230px] font-display text-[24px] font-semibold leading-tight">Usaha kecil layak diapresiasi.</h2>
          <p className="mt-3 max-w-[290px] text-[14px] leading-relaxed text-mist">
            {STUDENT.firstName} sedang membangun rutinitas persiapan sekolah. Rayakan prosesnya, bukan hanya hasilnya.
          </p>
        </div>

        <section>
          <SectionLabel
            action={(
              <button type="button" onClick={() => setIndex((i) => (i + 1) % PRAISE_EXAMPLES.length)} className="inline-flex items-center gap-1.5 rounded-full bg-card px-3 py-1.5 text-[12px] font-bold text-navy ring-1 ring-line transition hover:ring-line-2">
                <RefreshCw className="h-3.5 w-3.5" /> Contoh lain
              </button>
            )}
          >
            Coba ucapkan
          </SectionLabel>
          <div className="relative min-h-[132px]">
            <AnimatePresence mode="wait" initial={false}>
              <motion.figure
                key={index}
                initial={{ opacity: 0, y: 10, rotate: -1 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.28 }}
                className="relative rounded-[22px] rounded-bl-[6px] bg-marigold-soft p-5 ring-1 ring-marigold/30"
              >
                <blockquote className="font-display text-[18px] italic leading-snug text-ink [font-variation-settings:'SOFT'_100,'WONK'_1]">
                  “{PRAISE_EXAMPLES[index]}”
                </blockquote>
                <figcaption className="mt-3 text-[12px] font-bold text-marigold-ink tabular">Contoh {index + 1} dari {PRAISE_EXAMPLES.length} · sebut perilakunya, bukan hanya hasilnya</figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>
        </section>

        <motion.button
          type="button"
          onClick={() => demo.setTab('home')}
          whileTap={{ scale: 0.98 }}
          className="group flex w-full items-center gap-3 rounded-[20px] bg-card p-4 text-left ring-1 ring-line transition hover:ring-line-2"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-[13px] bg-leaf-soft text-leaf-ink"><HeartHandshake className="h-5 w-5" /></span>
          <span className="flex-1 text-[15px] font-bold text-ink">Lanjutkan dukungan keluarga</span>
          <ArrowRight className="h-4 w-4 text-ink-3 transition-transform duration-300 group-hover:translate-x-1" />
        </motion.button>
      </div>
    </div>
  );
}
