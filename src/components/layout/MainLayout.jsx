import React, { useState } from 'react';
import { BookOpenCheck, CheckCircle2, ChevronDown, HeartHandshake, Info, MoonStar, ShieldCheck, Sparkles, UsersRound } from 'lucide-react';
import IPhoneFrame from './IPhoneFrame';

export default function MainLayout({
  activeTab,
  onTabChange,
  role,
  onRoleChange,
  isLoggedIn,
  onLogin,
  onLogout,
  children,
}) {
  const roles = [
    { id: 'student', label: 'Siswa', initials: 'AP' },
    { id: 'parent', label: 'Orang tua', initials: 'OT' },
    { id: 'teacher', label: 'Wali kelas', initials: 'WK' },
  ];
  const [selectedFeature, setSelectedFeature] = useState(null);
  const features = [
    {
      id: 'reminders',
      title: 'Pengingat pagi dan malam',
      summary: 'Bantu siswa menyiapkan perlengkapan dan berangkat tepat waktu.',
      icon: MoonStar,
      tone: 'amber',
      challenge: 'Pagi yang terburu-buru bisa membuat perlengkapan sekolah tertinggal dan siswa kurang siap.',
      approach: 'Pengingat malam mengajak siswa dan orang tua mengecek seragam, buku, tugas, serta perangkat belajar. Pengingat pagi membantu siswa bersiap dan memperkirakan waktu perjalanan.',
      impact: 'Rutinitas yang konsisten membantu siswa lebih mandiri, siap belajar, dan datang tepat waktu.',
    },
    {
      id: 'journal',
      title: 'Catatan dan pembinaan',
      summary: 'Refleksi pribadi mendapat dukungan wali kelas secara terarah.',
      icon: BookOpenCheck,
      tone: 'blue',
      challenge: 'Siswa kadang membutuhkan ruang aman untuk menceritakan kendala dan melihat kemajuannya.',
      approach: 'Siswa menulis refleksi serta langkah kecil berikutnya. Wali kelas memberi umpan balik pribadi yang suportif; orang tua menerima ringkasan perkembangan yang relevan.',
      impact: 'Komunikasi yang terarah membantu siswa merasa didampingi tanpa mempermalukan atau membandingkan mereka.',
    },
    {
      id: 'recognition',
      title: 'Apresiasi mingguan',
      summary: 'Rayakan konsistensi dan perkembangan setiap siswa.',
      icon: HeartHandshake,
      tone: 'emerald',
      challenge: 'Perubahan baik perlu diperhatikan, termasuk kemajuan kecil yang mungkin tidak langsung terlihat.',
      approach: 'Wali kelas mengapresiasi siswa berdasarkan konsistensi, usaha, dan perkembangan positif selama minggu berjalan.',
      impact: 'Apresiasi yang adil menguatkan motivasi dan kebiasaan baik, bukan menjadikan penghargaan sebagai perbandingan antar siswa.',
    },
  ];
  const activeFeature = features.find((feature) => feature.id === selectedFeature);

  return (
    <div className="growth-canvas relative flex min-h-[100dvh] w-full items-center justify-center overflow-hidden bg-[#eff1f8] text-slate-900">
      <div className="pointer-events-none absolute -left-48 -top-56 h-[620px] w-[620px] rounded-full bg-[#dbe5ff]/60 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-56 -right-52 h-[620px] w-[620px] rounded-full bg-[#f7dff0]/55 blur-[130px]" />
      <div className="pointer-events-none absolute right-[22%] top-[35%] h-[360px] w-[360px] rounded-full bg-[#d8e9ff]/45 blur-[120px]" />

      <main className="growth-app-window relative z-10 flex h-[100dvh] w-full overflow-hidden sm:h-[min(100dvh,1024px)] sm:max-w-[780px] sm:border-x sm:border-white/80 sm:shadow-[0_24px_100px_-42px_rgba(47,54,93,0.28)] lg:h-[100dvh] lg:max-w-none lg:border-0 lg:shadow-none">
        <aside className="relative hidden h-full w-[45%] max-w-[590px] shrink-0 flex-col overflow-y-auto border-r border-white/80 bg-white/55 px-7 py-7 backdrop-blur-xl xl:px-9 lg:flex">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-[16px] bg-gradient-to-br from-teal-500 via-grape-500 to-blossom-500 text-white shadow-[0_8px_18px_-8px_rgba(99,76,210,0.6)]">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-[20px] font-extrabold tracking-tight text-slate-950">LANGKAH</h1>
                <span className="rounded-full bg-mint-100 px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-wide text-mint-700">Demo Intervensi</span>
              </div>
              <p className="mt-0.5 text-[11px] font-medium text-slate-500">Penguatan karakter disiplin di SMP Budi Utama</p>
            </div>
          </div>

          <section className="mt-7 rounded-[22px] border border-white bg-white/85 p-4 shadow-[0_10px_26px_-20px_rgba(35,42,75,0.35)]">
            <div className="mb-3 flex items-center justify-between gap-2">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-grape-200 to-blossom-200 text-xs font-extrabold text-grape-800">{roles.find((item) => item.id === role)?.initials}</div>
                <div>
                  <p className="text-[13px] font-bold text-slate-900">{role === 'student' ? 'Alya Putri' : role === 'parent' ? 'Orang tua Alya' : 'Wali kelas VII A'}</p>
                  <p className="text-[10px] text-slate-500">{role === 'student' ? 'Siswa · Kelas VII A' : role === 'parent' ? 'Pendamping keluarga' : 'Pendamping siswa'}</p>
                </div>
              </div>
              <span className="rounded-full bg-mint-50 px-2.5 py-1 text-[9px] font-bold text-mint-700">Profil contoh</span>
            </div>
            <div className="grid grid-cols-3 gap-1 rounded-[15px] bg-slate-100/80 p-1">
              {roles.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  aria-pressed={role === item.id}
                  onClick={() => onRoleChange(item.id)}
                  className={`rounded-[11px] px-2 py-2 text-[10px] font-bold transition ${role === item.id ? 'bg-grape-500 text-white shadow-sm' : 'text-slate-600 hover:bg-white hover:text-grape-700'}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </section>

          <div className="my-5 flex items-center gap-3">
            <div className="h-px flex-1 bg-slate-200" />
            <span className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-slate-500">Alur intervensi</span>
            <div className="h-px flex-1 bg-slate-200" />
          </div>

          <section className="rounded-[22px] bg-gradient-to-r from-[#4364c7] via-[#357ddb] to-[#10a6e5] p-4 text-white shadow-[0_12px_28px_-15px_rgba(36,111,205,0.7)]">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[14px] bg-white/20"><Sparkles className="h-5 w-5" /></div>
              <div>
                <p className="text-[9px] font-extrabold uppercase tracking-[0.15em] text-white/75">Tujuan program</p>
                <h2 className="mt-0.5 text-[15px] font-extrabold">Disiplin tumbuh dari kebiasaan</h2>
              </div>
            </div>
            <p className="mt-2 text-[11px] leading-relaxed text-white/90">Membangun rutinitas positif melalui dukungan siswa, keluarga, dan wali kelas.</p>
          </section>

          <section className="mt-5 rounded-[22px] border border-white bg-white/90 p-4 shadow-[0_10px_26px_-20px_rgba(35,42,75,0.3)]">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-slate-600">Panduan fitur</h2>
              <span className="rounded-full bg-grape-100 px-2.5 py-1 text-[9px] font-bold text-grape-700">Pilih untuk detail</span>
            </div>
            <div className="space-y-2.5">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                const isSelected = selectedFeature === feature.id;
                const toneClasses = {
                  amber: 'border-amber-100 bg-amber-50/80 text-amber-700',
                  blue: 'border-blue-100 bg-blue-50/80 text-blue-700',
                  emerald: 'border-emerald-100 bg-emerald-50/80 text-emerald-700',
                }[feature.tone];
                return (
                  <button
                    key={feature.id}
                    type="button"
                    aria-expanded={isSelected}
                    onClick={() => setSelectedFeature(isSelected ? null : feature.id)}
                    className={`group flex w-full items-center gap-3 rounded-[16px] border p-3 text-left transition duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-grape-500 ${
                      isSelected
                        ? 'border-sky-300 bg-gradient-to-r from-[#356fc8] to-[#15a9df] text-white shadow-[0_12px_24px_-14px_rgba(37,111,200,0.85)]'
                        : `${toneClasses} hover:-translate-y-0.5 hover:shadow-md`
                    }`}
                  >
                    <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-[13px] ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-white text-current shadow-sm'
                    }`}>
                      <Icon className="h-[18px] w-[18px]" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className={`flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.12em] ${
                        isSelected ? 'text-white/75' : 'opacity-65'
                      }`}>
                        {String(index + 1).padStart(2, '0')} <span>FITUR</span>
                      </span>
                      <span className="mt-0.5 block text-[12px] font-extrabold leading-snug">{feature.title}</span>
                      <span className={`mt-0.5 block text-[10px] leading-relaxed ${
                        isSelected ? 'text-white/85' : 'text-slate-600'
                      }`}>{feature.summary}</span>
                    </span>
                    <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-white/75 text-slate-500 group-hover:text-grape-600'
                    }`}>
                      <ChevronDown className={`h-4 w-4 transition-transform ${isSelected ? 'rotate-180' : ''}`} />
                    </span>
                  </button>
                );
              })}
            </div>
            {activeFeature && (
              <div className="mt-3 overflow-hidden rounded-[18px] border border-slate-200 bg-white shadow-[0_12px_28px_-20px_rgba(35,42,75,0.4)]">
                <div className="flex items-center justify-between gap-3 border-b border-slate-100 px-3.5 py-3">
                  <div className="flex items-center gap-2 text-grape-700">
                    <Info className="h-4 w-4" />
                    <h3 className="text-[10px] font-extrabold uppercase tracking-[0.12em]">Panduan & cara kerja fitur</h3>
                  </div>
                  <span className="rounded-full bg-grape-100 px-2 py-1 text-[9px] font-bold text-grape-700">Detail</span>
                </div>
                <div className="space-y-2.5 p-3">
                  <div className="rounded-[14px] border border-rose-200 bg-rose-50/80 p-3">
                    <p className="flex items-center gap-1.5 text-[10px] font-extrabold text-rose-800"><Info className="h-3.5 w-3.5" /> Tantangan yang dijawab</p>
                    <p className="mt-1.5 text-[10px] leading-relaxed text-slate-700">{activeFeature.challenge}</p>
                  </div>
                  <div className="rounded-[14px] border border-blue-200 bg-blue-50/80 p-3">
                    <p className="flex items-center gap-1.5 text-[10px] font-extrabold text-blue-800"><BookOpenCheck className="h-3.5 w-3.5" /> Cara kerja fitur</p>
                    <p className="mt-1.5 text-[10px] leading-relaxed text-slate-700">{activeFeature.approach}</p>
                  </div>
                  <div className="rounded-[14px] border border-emerald-200 bg-emerald-50/80 p-3">
                    <p className="flex items-center gap-1.5 text-[10px] font-extrabold text-emerald-800"><CheckCircle2 className="h-3.5 w-3.5" /> Dampak yang diharapkan</p>
                    <p className="mt-1.5 text-[10px] leading-relaxed text-slate-700">{activeFeature.impact}</p>
                  </div>
                </div>
              </div>
            )}
          </section>

          <p className="mt-auto pt-5 text-[9px] leading-relaxed text-slate-400">Pratinjau prototipe · Data dan notifikasi masih berupa simulasi.</p>
        </aside>

        <section className="relative h-full min-h-0 min-w-0 flex-1 overflow-hidden bg-gradient-to-br from-[#f7f9ff] via-[#f2f5fb] to-[#fbeef5]">
          <div className="pointer-events-none absolute -right-28 top-12 h-80 w-80 rounded-full bg-grape-100/65 blur-[90px]" />
          <div className="pointer-events-none absolute bottom-0 left-10 h-72 w-72 rounded-full bg-blossom-100/65 blur-[95px]" />
          <div className="absolute right-5 top-4 z-20 hidden items-center gap-2 rounded-full border border-white/90 bg-white/80 px-3 py-2 text-[10px] font-bold text-grape-700 shadow-[0_5px_16px_-10px_rgba(47,54,93,0.4)] backdrop-blur-lg lg:flex">
            <UsersRound className="h-3.5 w-3.5" />
            Pratinjau aplikasi · {roles.find((item) => item.id === role)?.label}
          </div>
          <IPhoneFrame
            activeTab={activeTab}
            onTabChange={onTabChange}
            role={role}
            isLoggedIn={isLoggedIn}
            onLogin={onLogin}
            onLogout={onLogout}
          >
            {children}
          </IPhoneFrame>
        </section>
      </main>
    </div>
  );
}
