import { useMemo } from 'react';
import { REMINDERS } from '../data/program';
import { useNotify } from './toastContext';

// Menyalakan/mematikan pengingat sekaligus menampilkan notifikasi simulasi.
export function useReminderToggle(demo, audience) {
  const notify = useNotify();
  return (id) => {
    const turningOn = !demo.reminders[id];
    demo.toggleReminder(id);
    const data = REMINDERS[id];
    notify(turningOn
      ? { title: `${data.title} aktif`, body: `${audience === 'parent' ? 'Keluarga' : 'Kamu'} akan diingatkan setiap hari pukul ${data.time}.` }
      : { title: `${data.title} dimatikan`, body: 'Kamu bisa menyalakannya lagi kapan saja.' });
  };
}

// Skenario demo diturunkan dari "Contoh alur" di README dan tercentang
// otomatis saat pengunjung benar-benar melakukannya di prototipe.
export function useScenario(demo) {
  return useMemo(() => {
    const seenRecognition = [...demo.seen].some((key) => key.endsWith(':recognition'));
    return [
      { id: 'prep', label: 'Centang semua persiapan sekolah', target: { role: 'student', tab: 'home' }, done: demo.routine.every((item) => item.done) },
      { id: 'write', label: 'Tulis dan kirim catatan harian', target: { role: 'student', tab: 'journal' }, done: demo.journal.sent },
      { id: 'reply', label: 'Balas catatan sebagai wali kelas', target: { role: 'teacher', tab: 'journal' }, done: demo.journal.feedbackSent },
      { id: 'read', label: 'Baca balasan di tampilan siswa', target: { role: 'student', tab: 'journal' }, done: demo.readFeedback },
      { id: 'parent', label: 'Lihat ringkasan untuk orang tua', target: { role: 'parent', tab: 'journal' }, done: demo.seen.has('parent:journal') },
      { id: 'week', label: 'Lihat Student of the Week', target: { role: 'teacher', tab: 'recognition' }, done: seenRecognition },
    ];
  }, [demo.routine, demo.journal.sent, demo.journal.feedbackSent, demo.readFeedback, demo.seen]);
}
