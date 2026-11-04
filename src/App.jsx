import React, { useState } from 'react';
import {
  ArrowUpRight,
  Award,
  Bell,
  BookOpen,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Flame,
  Heart,
  HeartHandshake,
  LockKeyhole,
  MessageCircle,
  Moon,
  Send,
  ShieldCheck,
  Sparkles,
  Sun,
  Users,
} from 'lucide-react';
import MainLayout from './components/layout/MainLayout';

const INITIAL_ROUTINE = [
  { id: 'uniform', label: 'Seragam dan atribut lengkap', done: true },
  { id: 'books', label: 'Buku dan perlengkapan pelajaran', done: false },
  { id: 'homework', label: 'Tugas untuk besok', done: false },
  { id: 'alarm', label: 'Perangkat belajar sudah disiapkan', done: true },
];

const WEEKLY_STUDENTS = [
  { name: 'Nadia Putri', className: 'VII A', category: 'Konsisten Disiplin', detail: 'Hadir tepat waktu dan atribut lengkap selama satu minggu.' },
  { name: 'Rafi Pratama', className: 'VII B', category: 'Perkembangan Terbaik', detail: 'Makin konsisten menyiapkan perlengkapan sekolah setiap malam.' },
];

const STUDENTS_NEEDING_SUPPORT = [
  { name: 'Alya Putri', className: 'VII A', detail: 'Perlu dukungan menyusun rutinitas persiapan sekolah.' },
  { name: 'Bima Ramadhan', className: 'VII B', detail: 'Perlu pengingat untuk menyiapkan atribut sebelum berangkat.' },
];

const INITIAL_JOURNAL = {
  challenge: 'Tidak ada kendala khusus',
  reflection: '',
  nextStep: '',
  feedback: '',
  feedbackSent: false,
  sent: false,
};

function SectionHeading({ eyebrow, title, description, icon: Icon }) {
  return (
    <div className="mb-5">
      {eyebrow && (
        <p className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-teal-700">
          {eyebrow}
        </p>
      )}
      <div className="flex items-start gap-3">
        {Icon && (
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-teal-50 text-teal-700">
            <Icon className="h-5 w-5" />
          </div>
        )}
        <div>
          <h1 className="text-[23px] font-extrabold leading-tight tracking-tight text-slate-950">{title}</h1>
          {description && <p className="mt-1 text-[13px] leading-relaxed text-slate-500">{description}</p>}
        </div>
      </div>
    </div>
  );
}

function ReminderCard({ type, title, description, time, enabled, onToggle, icon: Icon }) {
  return (
    <div className="rounded-[22px] border border-slate-100 bg-white p-4 shadow-[0_8px_24px_-18px_rgba(15,23,42,0.28)]">
      <div className="flex items-start gap-3">
        <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl ${type === 'night' ? 'bg-indigo-50 text-indigo-600' : 'bg-amber-50 text-amber-600'}`}>
          <Icon className="h-5 w-5" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <div>
              <p className="font-bold text-slate-900">{title}</p>
              <p className="mt-0.5 text-xs leading-relaxed text-slate-500">{description}</p>
            </div>
            <button
              type="button"
              onClick={onToggle}
              aria-pressed={enabled}
              aria-label={`${enabled ? 'Matikan' : 'Nyalakan'} ${title.toLowerCase()}`}
              className={`relative mt-0.5 h-6 w-11 shrink-0 rounded-full transition-colors ${enabled ? 'bg-teal-600' : 'bg-slate-200'}`}
            >
              <span className={`absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow-sm transition-transform ${enabled ? 'translate-x-[20px]' : 'translate-x-0'}`} />
            </button>
          </div>
          <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-2.5">
            <span className="flex items-center gap-1.5 text-xs font-semibold text-slate-600">
              <Clock3 className="h-3.5 w-3.5 text-slate-400" /> {time}
            </span>
            <span className={`rounded-full px-2.5 py-1 text-[10px] font-bold ${enabled ? 'bg-teal-50 text-teal-700' : 'bg-slate-100 text-slate-500'}`}>
              {enabled ? 'Aktif' : 'Nonaktif'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function StudentHome({ routine, onToggleRoutine, reminders, onToggleReminder, onNavigate }) {
  const completed = routine.filter((item) => item.done).length;
  const greeting = new Intl.DateTimeFormat('id-ID', { weekday: 'long', day: 'numeric', month: 'long' }).format(new Date());

  return (
    <div className="mx-auto w-full max-w-[680px] space-y-4 px-4 pb-8 pt-4 sm:space-y-5 sm:px-6 sm:pt-5">
      <div className="rounded-[17px] border border-slate-200 bg-white px-4 py-3 text-[11px] leading-relaxed text-slate-600 shadow-[0_5px_18px_-15px_rgba(35,42,75,0.35)] sm:text-xs">
        <span className="font-bold text-grape-700">Versi pratinjau</span>
        <span className="text-slate-400"> · </span>
        Kamu sedang memakai profil contoh. Data tersimpan sementara di browser ini.
      </div>

      <div className="flex items-center gap-3 px-1 py-1">
        <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-grape-200 to-blossom-200 text-sm font-extrabold text-grape-800 ring-2 ring-white shadow-sm">
          AP
          <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-mint-500" />
        </div>
        <div>
          <p className="text-[13px] text-slate-500">Halo,</p>
          <h1 className="text-[20px] font-extrabold leading-tight tracking-tight text-slate-950">Alya!</h1>
        </div>
        <span className="ml-auto rounded-full bg-grape-50 px-3 py-1.5 text-[10px] font-bold text-grape-700">Kelas VII A</span>
      </div>

      <section className="relative overflow-hidden rounded-[27px] bg-gradient-to-br from-[#20b995] via-grape-500 to-blossom-500 p-5 text-white shadow-[0_18px_38px_-20px_rgba(111,73,202,0.78)] sm:p-6">
        <div className="absolute -right-7 -top-8 h-32 w-32 rounded-full bg-white/10" />
        <div className="absolute -bottom-12 right-20 h-28 w-28 rounded-full bg-white/10" />
        <div className="relative">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white">
              <Flame className="h-3.5 w-3.5" /> Rutinitasmu
            </span>
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/15"><Sparkles className="h-4 w-4" /></div>
          </div>
          <div className="mt-4">
            <h2 className="max-w-[430px] text-[26px] font-extrabold leading-[1.13] tracking-tight sm:text-[30px]">
              Disiplin dimulai dari langkah kecil.
            </h2>
            <p className="mt-2 max-w-[390px] text-[13px] leading-relaxed text-white/90">
              Siapkan hari esok dengan tenang. Kebiasaan baik tumbuh sedikit demi sedikit.
            </p>
          </div>
          <div className="mt-5 flex w-full items-center gap-3 rounded-[20px] bg-white/15 p-3.5 sm:p-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[15px] bg-white/20">
              <CheckCircle2 className="h-6 w-6" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-2 text-[12px] font-bold sm:text-[13px]">
                <span>Persiapan sekolah</span><span>{completed}/{routine.length}</span>
              </div>
              <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/25">
                <div className="h-full rounded-full bg-white transition-all" style={{ width: `${(completed / routine.length) * 100}%` }} />
              </div>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between border-t border-white/25 pt-3 text-[11px] font-semibold text-white/90">
            <span>{greeting}</span>
            <span>{routine.length} kebiasaan kecil</span>
          </div>
        </div>
      </section>

      <section className="rounded-[26px] border border-blossom-200 bg-gradient-to-br from-blossom-100 to-[#fff0f2] p-4 shadow-[0_8px_24px_-20px_rgba(143,56,86,0.3)] sm:p-5">
        <div className="mb-4 flex items-start justify-between gap-3">
          <div>
            <h2 className="text-[17px] font-extrabold tracking-tight text-slate-950">Rutinitas disiplin</h2>
            <p className="mt-1 text-[12px] text-blossom-700">Persiapan sekolah · {completed} dari {routine.length} siap</p>
          </div>
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/80 text-blossom-700">
            <ArrowUpRight className="h-5 w-5" />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-2.5">
          {routine.map((item) => (
            <button
              type="button"
              key={item.id}
              onClick={() => onToggleRoutine(item.id)}
              aria-pressed={item.done}
              className={`flex min-h-[58px] w-full items-center gap-3 rounded-[17px] border px-3.5 py-3 text-left transition active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-grape-500 ${
                item.done
                  ? 'border-white/80 bg-white/75'
                  : 'border-white/60 bg-white/45 hover:bg-white/70'
              }`}
            >
              <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-lg ${
                item.done ? 'bg-mint-500 text-white' : 'border border-slate-300 bg-white/80'
              }`}>
                {item.done && <Check className="h-4 w-4 stroke-[3]" />}
              </span>
              <span className={`min-w-0 flex-1 text-[13px] font-semibold leading-snug ${item.done ? 'text-slate-700' : 'text-slate-600'}`}>
                {item.label}
              </span>
              <span className="shrink-0 text-[10px] font-bold text-grape-600">{item.done ? 'Siap' : 'Tandai'}</span>
            </button>
          ))}
        </div>
        <p className="mt-3 text-[11px] leading-relaxed text-blossom-700">
          {completed === routine.length
            ? 'Lengkap! Kamu sudah siap untuk besok.'
            : 'Satu persiapan kecil malam ini bikin pagi lebih tenang.'}
        </p>
      </section>

      <section>
        <div className="mb-3 flex items-center justify-between px-1">
          <div>
            <h2 className="text-[17px] font-extrabold tracking-tight text-slate-950">Pengingat harian</h2>
            <p className="mt-0.5 text-[12px] text-slate-500">Atur rutinitas bersama orang tua</p>
          </div>
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-grape-50 text-grape-700">
            <Bell className="h-[18px] w-[18px]" />
          </div>
        </div>
        <div className="space-y-3">
          <ReminderCard
            type="night"
            title="Persiapan malam"
            description="Cek seragam, buku, tugas, dan alarm untuk besok."
            time="Setiap hari · 19.30"
            enabled={reminders.night}
            onToggle={() => onToggleReminder('night')}
            icon={Moon}
          />
          <ReminderCard
            type="morning"
            title="Waktunya berangkat"
            description="Bersiap dan perkirakan waktu perjalanan ke sekolah."
            time="Setiap hari · 06.15"
            enabled={reminders.morning}
            onToggle={() => onToggleReminder('morning')}
            icon={Sun}
          />
        </div>
      </section>

      <button type="button" onClick={() => onNavigate('journal')} className="flex w-full items-center gap-3 rounded-[22px] border border-azure-100 bg-white p-4 text-left shadow-[0_7px_20px_-16px_rgba(35,42,75,0.3)] transition hover:border-azure-200 hover:bg-azure-50/50">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-azure-50 text-azure-700"><BookOpen className="h-5 w-5" /></div>
        <div className="min-w-0 flex-1"><p className="text-sm font-bold text-slate-900">Ceritakan harimu</p><p className="mt-0.5 text-xs leading-relaxed text-slate-500">Catatanmu membantu wali kelas mendukungmu.</p></div>
        <ChevronRight className="h-4 w-4 shrink-0 text-azure-700" />
      </button>
    </div>
  );
}

function JournalScreen({ journal, onChange, onSubmit, role }) {
  if (role === 'parent') {
    return (
      <div className="space-y-4 px-5 pb-6 pt-4">
        <SectionHeading eyebrow="Kolaborasi keluarga" title="Kabar dari sekolah" description="Ringkasan perkembangan Alya yang dibagikan wali kelas." icon={Heart} />
        <div className="rounded-[22px] border border-teal-100 bg-teal-50 p-4">
          <p className="text-[10px] font-bold uppercase tracking-wider text-teal-700">Laporan kualitatif · Hari ini</p>
          <h2 className="mt-2 font-extrabold text-slate-900">Rutinitas makin teratur</h2>
          <p className="mt-1 text-[13px] leading-relaxed text-slate-600">Alya mengikuti kegiatan belajar dengan baik. Terus dukung kebiasaan menyiapkan perlengkapan sekolah pada malam hari.</p>
        </div>
        <div className="rounded-[22px] border border-slate-100 bg-white p-4">
          <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-teal-700" /><h2 className="text-sm font-bold text-slate-900">Privasi anak terjaga</h2></div>
          <p className="mt-2 text-xs leading-relaxed text-slate-500">Orang tua menerima ringkasan perkembangan, bukan isi percakapan pribadi anak dengan wali kelas.</p>
        </div>
        <div className="rounded-[22px] border border-slate-100 bg-white p-4">
          <h2 className="text-sm font-bold text-slate-900">Yang bisa dilakukan di rumah</h2>
          <ul className="mt-3 space-y-3 text-[13px] text-slate-600">
            <li className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal-600" />Siapkan kebutuhan sekolah bersama malam ini.</li>
            <li className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal-600" />Dukung jadwal bangun dan waktu berangkat.</li>
            <li className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal-600" />Apresiasi usaha dan kemajuan kecilnya.</li>
          </ul>
        </div>
        <p className="rounded-xl bg-slate-100 p-3 text-[11px] leading-relaxed text-slate-500">Informasi ini contoh untuk demo dan belum dikirim oleh sekolah.</p>
      </div>
    );
  }

  if (role === 'teacher') {
    return (
      <div className="space-y-4 px-5 pb-6 pt-4">
        <SectionHeading eyebrow="Catatan pembinaan personal" title="Pantau dan dukung" description="Baca catatan siswa secara pribadi, lalu berikan arahan yang konkret." icon={MessageCircle} />
        <div className="rounded-[22px] border border-slate-100 bg-white p-4 shadow-[0_8px_24px_-18px_rgba(15,23,42,0.24)]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 text-sm font-bold text-teal-800">AP</div>
              <div><p className="text-sm font-bold text-slate-900">Alya Putri</p><p className="text-xs text-slate-500">VII A · Hari ini</p></div>
            </div>
            <span className={`rounded-full px-2.5 py-1 text-[10px] font-bold ${journal.sent ? 'bg-teal-50 text-teal-700' : 'bg-amber-50 text-amber-700'}`}>{journal.sent ? 'Catatan masuk' : 'Menunggu catatan'}</span>
          </div>
          <div className="mt-4 rounded-2xl bg-slate-50 p-3.5">
            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Kendala yang dirasakan</p>
            <p className="mt-1.5 text-[13px] leading-relaxed text-slate-700">{journal.sent ? journal.challenge : 'Alya belum mengirim catatan hari ini.'}</p>
            {journal.sent && journal.reflection && <p className="mt-2 text-[13px] leading-relaxed text-slate-700">&ldquo;{journal.reflection}&rdquo;</p>}
          </div>
          {journal.feedbackSent && journal.feedback && (
            <div className="mt-3 rounded-2xl border border-teal-100 bg-teal-50 p-3.5">
              <p className="text-[10px] font-bold uppercase tracking-wider text-teal-700">Umpan balik terkirim</p>
              <p className="mt-1.5 text-[13px] leading-relaxed text-slate-700">{journal.feedback}</p>
            </div>
          )}
          <label htmlFor="teacher-feedback" className="mt-4 block text-xs font-bold text-slate-700">Balasan pribadi untuk Alya</label>
          <textarea
            id="teacher-feedback"
            value={journal.feedback}
            onChange={(event) => onChange({ ...journal, feedback: event.target.value })}
            rows={3}
            placeholder="Apresiasi usaha siswa dan tuliskan langkah kecil yang bisa dicoba..."
            className="mt-2 w-full resize-none rounded-2xl border border-slate-200 bg-white p-3 text-[13px] leading-relaxed text-slate-800 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
          />
          <button type="button" onClick={onSubmit} disabled={!journal.feedback.trim()} className="mt-3 flex w-full items-center justify-center gap-2 rounded-2xl bg-teal-700 py-3 text-[13px] font-bold text-white transition hover:bg-teal-800 disabled:cursor-not-allowed disabled:opacity-50">
            <Send className="h-4 w-4" /> {journal.feedbackSent ? 'Perbarui umpan balik' : 'Kirim umpan balik pribadi'}
          </button>
        </div>
        <div className="flex gap-2.5 rounded-2xl border border-indigo-100 bg-indigo-50 p-3.5">
          <LockKeyhole className="mt-0.5 h-4 w-4 shrink-0 text-indigo-700" />
          <p className="text-[11px] leading-relaxed text-indigo-900">Catatan ini bersifat pribadi untuk siswa dan wali kelas. Orang tua menerima ringkasan kualitatif, bukan percakapan.</p>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit();
      }}
      className="space-y-4 px-5 pb-6 pt-4"
    >
      <SectionHeading eyebrow="Refleksi harian" title="Ceritakan harimu" description="Kenali hal yang berjalan baik dan dukungan yang kamu butuhkan." icon={BookOpen} />
      {journal.sent && (
        <div className="flex gap-2.5 rounded-2xl border border-teal-100 bg-teal-50 p-3.5">
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal-700" />
          <p className="text-xs leading-relaxed text-teal-900">Catatan harimu sudah tersimpan di demo ini. Kamu bisa memperbaruinya kapan saja.</p>
        </div>
      )}
      {journal.feedbackSent && journal.feedback && (
        <div className="rounded-[22px] border border-teal-100 bg-teal-50 p-4">
          <p className="text-[10px] font-bold uppercase tracking-wider text-teal-700">Pesan pribadi dari wali kelas</p>
          <p className="mt-1.5 text-[13px] leading-relaxed text-slate-700">{journal.feedback}</p>
        </div>
      )}
      <div className="rounded-[22px] border border-slate-100 bg-white p-4 shadow-[0_8px_24px_-18px_rgba(15,23,42,0.24)]">
        <label htmlFor="journal-challenge" className="block text-sm font-bold text-slate-900">Ada kendala hari ini?</label>
        <p className="mt-1 text-xs text-slate-500">Pilih yang paling sesuai. Tidak apa-apa kalau tidak ada.</p>
        <select
          id="journal-challenge"
          value={journal.challenge}
          onChange={(event) => onChange({ ...journal, challenge: event.target.value })}
          className="mt-3 w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-[13px] text-slate-700 outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
        >
          <option>Tidak ada kendala khusus</option>
          <option>Sulit bangun atau datang tepat waktu</option>
          <option>Ada perlengkapan sekolah yang tertinggal</option>
          <option>Perlu bantuan atau ingin bercerita</option>
        </select>
        <label htmlFor="journal-reflection" className="mt-4 block text-sm font-bold text-slate-900">Apa yang ingin kamu ceritakan?</label>
        <textarea
          id="journal-reflection"
          value={journal.reflection}
          onChange={(event) => onChange({ ...journal, reflection: event.target.value })}
          rows={4}
          maxLength={400}
          placeholder="Tulis dengan bahasamu sendiri. Wali kelas siap mendengarkan."
          className="mt-2 w-full resize-none rounded-2xl border border-slate-200 p-3 text-[13px] leading-relaxed text-slate-800 outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
        />
        <p className="mt-1 text-right text-[10px] text-slate-400">{journal.reflection.length}/400</p>
        <label htmlFor="journal-next-step" className="mt-3 block text-sm font-bold text-slate-900">Langkah kecil untuk besok</label>
        <input
          id="journal-next-step"
          type="text"
          value={journal.nextStep}
          onChange={(event) => onChange({ ...journal, nextStep: event.target.value })}
          maxLength={100}
          placeholder="Contoh: siapkan tas sebelum tidur"
          className="mt-2 w-full rounded-xl border border-slate-200 px-3 py-3 text-[13px] text-slate-800 outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
        />
      </div>
      <div className="flex gap-2.5 rounded-2xl border border-indigo-100 bg-indigo-50 p-3.5">
        <LockKeyhole className="mt-0.5 h-4 w-4 shrink-0 text-indigo-700" />
        <p className="text-[11px] leading-relaxed text-indigo-900">Catatan ini hanya untuk kamu dan wali kelas. Orang tua menerima ringkasan perkembangan, bukan isi ceritamu.</p>
      </div>
      <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-2xl bg-teal-700 py-3.5 text-sm font-bold text-white shadow-sm transition hover:bg-teal-800">
        <Send className="h-4 w-4" /> Simpan catatan harian
      </button>
    </form>
  );
}

function RecognitionScreen({ role, onNavigate }) {
  if (role === 'parent') {
    return (
      <div className="space-y-4 px-5 pb-6 pt-4">
        <SectionHeading eyebrow="Apresiasi & dukungan" title="Rayakan prosesnya" description="Kebiasaan baik tumbuh dengan dukungan di rumah dan sekolah." icon={Heart} />
        <div className="rounded-[24px] bg-gradient-to-br from-grape-500 via-[#8a5deb] to-blossom-500 p-5 text-white">
          <Award className="h-7 w-7" />
          <h2 className="mt-3 text-lg font-extrabold">Usaha kecil layak diapresiasi.</h2>
          <p className="mt-1 text-sm leading-relaxed text-white/90">Alya sedang membangun rutinitas persiapan sekolah. Rayakan prosesnya, bukan hanya hasilnya.</p>
        </div>
        <div className="rounded-[22px] border border-slate-100 bg-white p-4">
          <h2 className="text-sm font-extrabold text-slate-900">Coba ucapkan</h2>
          <p className="mt-2 rounded-2xl bg-amber-50 p-3 text-[13px] italic leading-relaxed text-amber-950">&ldquo;Terima kasih sudah menyiapkan tas sendiri. Usahamu membuat pagi ini lebih mudah.&rdquo;</p>
        </div>
        <button type="button" onClick={() => onNavigate('home')} className="flex w-full items-center gap-3 rounded-[22px] border border-teal-100 bg-teal-50 p-4 text-left">
          <Users className="h-5 w-5 text-teal-700" /><span className="flex-1 text-sm font-bold text-teal-950">Lanjutkan dukungan keluarga</span><ChevronRight className="h-4 w-4 text-teal-700" />
        </button>
      </div>
    );
  }

  if (role === 'teacher') {
    return (
      <div className="space-y-4 px-5 pb-6 pt-4">
        <SectionHeading eyebrow="Student of the Week" title="Apresiasi perilaku baik" description="Rayakan konsistensi dan perkembangan setiap siswa." icon={Award} />
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-[20px] border border-teal-100 bg-teal-50 p-3.5">
            <div className="flex items-center gap-1.5 text-teal-800"><ArrowUpRight className="h-4 w-4" /><span className="text-[10px] font-bold uppercase tracking-wide">Konsisten</span></div>
            <p className="mt-2 text-2xl font-extrabold text-teal-950">12</p><p className="text-[10px] text-teal-800">Siswa diapresiasi</p>
          </div>
          <div className="rounded-[20px] border border-amber-100 bg-amber-50 p-3.5">
            <div className="flex items-center gap-1.5 text-amber-800"><Sparkles className="h-4 w-4" /><span className="text-[10px] font-bold uppercase tracking-wide">Berkembang</span></div>
            <p className="mt-2 text-2xl font-extrabold text-amber-950">8</p><p className="text-[10px] text-amber-800">Kemajuan dirayakan</p>
          </div>
        </div>
        <div className="space-y-3">
          {WEEKLY_STUDENTS.map((student, index) => (
            <div key={student.name} className="rounded-[22px] border border-slate-100 bg-white p-4 shadow-[0_8px_24px_-18px_rgba(15,23,42,0.24)]">
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-3">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-full ${index === 0 ? 'bg-amber-100 text-amber-700' : 'bg-teal-100 text-teal-700'}`}><Award className="h-5 w-5" /></div>
                  <div><p className="text-sm font-bold text-slate-900">{student.name}</p><p className="text-xs text-slate-500">Kelas {student.className}</p></div>
                </div>
                <span className="rounded-full bg-amber-50 px-2 py-1 text-[9px] font-bold text-amber-800">{student.category}</span>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-slate-600">{student.detail}</p>
            </div>
          ))}
        </div>
        <section>
          <div className="mb-2.5">
            <h2 className="text-sm font-extrabold text-slate-900">Tindak lanjut pribadi</h2>
            <p className="mt-1 text-[11px] leading-relaxed text-slate-500">Contoh siswa yang memerlukan dukungan tambahan. Hanya terlihat oleh wali kelas.</p>
          </div>
          <div className="space-y-2.5">
            {STUDENTS_NEEDING_SUPPORT.map((student) => (
              <div key={student.name} className="flex items-start gap-3 rounded-[20px] border border-slate-200 bg-white p-3.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-bold text-slate-600"><Heart className="h-4 w-4" /></div>
                <div><p className="text-[13px] font-bold text-slate-800">{student.name} · {student.className}</p><p className="mt-1 text-[11px] leading-relaxed text-slate-500">{student.detail}</p></div>
              </div>
            ))}
          </div>
        </section>
        <div className="flex gap-2.5 rounded-2xl border border-slate-200 bg-slate-50 p-3.5">
          <LockKeyhole className="mt-0.5 h-4 w-4 shrink-0 text-slate-500" />
          <p className="text-[11px] leading-relaxed text-slate-600">Daftar siswa yang membutuhkan pendampingan bersifat rahasia dan hanya tersedia bagi guru yang berwenang—tidak ditampilkan sebagai papan peringkat publik.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4 px-5 pb-6 pt-4">
      <SectionHeading eyebrow="Perkembangan mingguan" title="Usahamu berarti" description="Apresiasi diberikan untuk konsistensi dan kemajuan." icon={Award} />
      <div className="rounded-[28px] bg-gradient-to-br from-grape-500 via-[#8a5deb] to-blossom-500 p-5 text-white shadow-[0_18px_38px_-20px_rgba(111,73,202,0.78)]">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20"><Award className="h-7 w-7" /></div>
        <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.16em] text-white/80">Student of the Week</p>
        <h2 className="mt-1 text-[22px] font-extrabold">Perayaan usaha minggu ini</h2>
        <p className="mt-2 text-[13px] leading-relaxed text-white/90">Setiap kemajuan patut diapresiasi—baik konsisten maupun baru mulai berubah.</p>
      </div>
      <div className="rounded-[22px] border border-slate-100 bg-white p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-teal-50 text-teal-700"><CheckCircle2 className="h-5 w-5" /></div>
          <div><p className="text-sm font-extrabold text-slate-900">Konsisten Disiplin</p><p className="text-xs text-slate-500">Menghargai kebiasaan baik yang terjaga.</p></div>
        </div>
        <div className="mt-4 flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-50 text-amber-700"><ArrowUpRight className="h-5 w-5" /></div>
          <div><p className="text-sm font-extrabold text-slate-900">Perkembangan Terbaik</p><p className="text-xs text-slate-500">Merayakan usaha dan kemajuan positif.</p></div>
        </div>
      </div>
      <div className="rounded-[22px] border border-amber-100 bg-amber-50 p-4">
        <div className="flex items-center gap-2"><Heart className="h-4 w-4 text-amber-700" /><h2 className="text-sm font-bold text-amber-950">Kemajuan kecilmu</h2></div>
        <p className="mt-2 text-[13px] leading-relaxed text-amber-950/80">Menyiapkan perlengkapan malam ini adalah satu langkah baik. Besok, coba pertahankan rutinitasnya!</p>
      </div>
      <p className="rounded-xl bg-slate-100 p-3 text-[11px] leading-relaxed text-slate-500">Contoh apresiasi untuk demo. Penghargaan tidak menentukan nilai dirimu.</p>
    </div>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [role, setRole] = useState('student');
  const [isLoggedIn, setIsLoggedIn] = useState(() => (
    typeof window !== 'undefined' && window.matchMedia('(min-width: 1024px)').matches
  ));
  const [routine, setRoutine] = useState(INITIAL_ROUTINE);
  const [reminders, setReminders] = useState({ night: true, morning: true });
  const [journal, setJournal] = useState(INITIAL_JOURNAL);

  const handleToggleRoutine = (id) => {
    setRoutine((items) => items.map((item) => item.id === id ? { ...item, done: !item.done } : item));
  };

  const handleToggleReminder = (id) => {
    setReminders((current) => ({ ...current, [id]: !current[id] }));
  };

  const handleJournalSubmit = () => {
    setJournal((current) => ({ ...current, sent: true }));
  };

  const handleFeedbackSubmit = () => {
    setJournal((current) => ({ ...current, feedback: current.feedback.trim(), feedbackSent: true }));
  };

  const handleLogin = (selectedRole) => {
    setRole(selectedRole);
    setActiveTab('home');
    setIsLoggedIn(true);
  };

  const handleRoleChange = (selectedRole) => {
    setRole(selectedRole);
    setActiveTab('home');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setActiveTab('home');
  };

  return (
    <MainLayout
      activeTab={activeTab}
      onTabChange={setActiveTab}
      role={role}
      onRoleChange={handleRoleChange}
      isLoggedIn={isLoggedIn}
      onLogin={handleLogin}
      onLogout={handleLogout}
    >
      {activeTab === 'home' && role === 'student' && (
        <StudentHome
          routine={routine}
          onToggleRoutine={handleToggleRoutine}
          reminders={reminders}
          onToggleReminder={handleToggleReminder}
          onNavigate={setActiveTab}
        />
      )}
      {activeTab === 'home' && role === 'parent' && (
        <div className="space-y-5 px-5 pb-6 pt-4">
          <SectionHeading eyebrow="Ruang keluarga" title="Dukung rutinitas Alya" description="Kerja sama kecil di rumah membantu pagi lebih siap." icon={Heart} />
          <div className="rounded-[24px] bg-gradient-to-br from-grape-500 via-[#8a5deb] to-blossom-500 p-5 text-white">
            <p className="text-xs font-semibold text-white/90">Pengingat keluarga</p>
            <h2 className="mt-2 text-xl font-extrabold">Siapkan hari esok bersama.</h2>
            <p className="mt-2 text-sm leading-relaxed text-white/90">Pengingat malam membantu mengecek seragam, buku, tugas, dan alarm.</p>
          </div>
          <section className="relative overflow-hidden rounded-[24px] border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-grape-50 p-4 shadow-[0_12px_30px_-22px_rgba(54,91,170,0.5)]">
            <div className="pointer-events-none absolute -right-7 -top-8 h-24 w-24 rounded-full bg-grape-100/70" />
            <div className="relative">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[14px] bg-white text-grape-600 shadow-sm">
                  <HeartHandshake className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.13em] text-grape-700">Kolaborasi keluarga & sekolah</p>
                  <h2 className="mt-1 text-[15px] font-extrabold leading-snug text-slate-950">Sejalan dengan disiplin positif sekolah</h2>
                </div>
              </div>
              <p className="mt-3 text-[12px] leading-relaxed text-slate-700">
                Pengingat pagi mendukung upaya sekolah mengurangi keterlambatan, termasuk saat kebiasaan atau jadwal orang tua mengantar memengaruhi waktu tiba siswa. Tujuannya membangun rutinitas berangkat yang lebih tepat waktu bersama—bukan menyalahkan keluarga.
              </p>
              <div className="mt-3 flex items-start gap-2.5 rounded-[15px] border border-white/90 bg-white/80 p-3">
                <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-grape-600" />
                <p className="text-[11px] leading-relaxed text-slate-600"><span className="font-bold text-slate-800">Langkah bersama:</span> atur waktu bersiap, sepakati perkiraan waktu berangkat, lalu sesuaikan pengingat dengan rutinitas keluarga.</p>
              </div>
            </div>
          </section>
          <ReminderCard type="night" title="Persiapan malam" description="Siapkan kebutuhan sekolah bersama." time="Setiap hari · 19.30" enabled={reminders.night} onToggle={() => handleToggleReminder('night')} icon={Moon} />
          <ReminderCard type="morning" title="Waktunya berangkat" description="Bantu anak memperkirakan waktu perjalanan." time="Setiap hari · 06.15" enabled={reminders.morning} onToggle={() => handleToggleReminder('morning')} icon={Sun} />
          <div className="rounded-[22px] border border-slate-100 bg-white p-4">
            <h2 className="text-sm font-bold text-slate-900">Checklist bersama</h2>
            <div className="mt-2 space-y-1">
              {routine.map((item) => <div key={item.id} className="flex items-center gap-2.5 py-2 text-[13px] text-slate-700"><span className={`flex h-5 w-5 items-center justify-center rounded-md ${item.done ? 'bg-teal-600 text-white' : 'border border-slate-300 text-transparent'}`}>{item.done && <Check className="h-3 w-3" />}</span>{item.label}</div>)}
            </div>
          </div>
        </div>
      )}
      {activeTab === 'home' && role === 'teacher' && (
        <div className="space-y-4 px-5 pb-6 pt-4">
          <SectionHeading eyebrow="Dashboard wali kelas" title="Dampingi dengan perhatian" description="Lihat progres harian dan berikan dukungan yang spesifik." icon={Users} />
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-[20px] border border-teal-100 bg-teal-50 p-4"><BookOpen className="h-5 w-5 text-teal-700" /><p className="mt-3 text-2xl font-extrabold text-teal-950">24</p><p className="text-xs text-teal-800">Catatan hari ini</p></div>
            <div className="rounded-[20px] border border-amber-100 bg-amber-50 p-4"><MessageCircle className="h-5 w-5 text-amber-700" /><p className="mt-3 text-2xl font-extrabold text-amber-950">6</p><p className="text-xs text-amber-800">Perlu tindak lanjut</p></div>
          </div>
          <button type="button" onClick={() => setActiveTab('journal')} className="flex w-full items-center gap-3 rounded-[22px] border border-slate-100 bg-white p-4 text-left shadow-sm">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-teal-100 text-sm font-bold text-teal-800">AP</div>
            <div className="flex-1"><p className="text-sm font-bold text-slate-900">Alya Putri · VII A</p><p className="text-xs text-slate-500">{journal.sent ? 'Catatan diterima · beri umpan balik' : 'Menunggu catatan harian'}</p></div>
            <ChevronRight className="h-4 w-4 text-slate-400" />
          </button>
          <div className="flex gap-2.5 rounded-2xl border border-indigo-100 bg-indigo-50 p-3.5"><ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-indigo-700" /><p className="text-[11px] leading-relaxed text-indigo-900">Gunakan catatan untuk bimbingan personal. Sampaikan ringkasan kualitatif kepada orang tua tanpa isi percakapan pribadi.</p></div>
        </div>
      )}
      {activeTab === 'journal' && (
        <JournalScreen
          journal={journal}
          onChange={setJournal}
          onSubmit={role === 'teacher' ? handleFeedbackSubmit : handleJournalSubmit}
          role={role}
        />
      )}
      {activeTab === 'recognition' && <RecognitionScreen role={role} onNavigate={setActiveTab} />}
    </MainLayout>
  );
}
