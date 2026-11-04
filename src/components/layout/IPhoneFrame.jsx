import React, { useEffect, useRef, useState } from 'react';
import { Award, BatteryFull, ChevronLeft, Signal, ShieldCheck, Wifi } from 'lucide-react';
import TabBar from '../ios/TabBar';

const ROLE_LABELS = {
  student: 'Siswa',
  parent: 'Orang tua',
  teacher: 'Wali kelas',
};

const ROLE_INITIALS = {
  student: 'AP',
  parent: 'OT',
  teacher: 'WK',
};

const PAGE_LABELS = {
  home: 'Beranda',
  journal: 'Catatan',
  recognition: 'Apresiasi',
};

export default function IPhoneFrame({
  children,
  activeTab,
  onTabChange,
  role,
  isLoggedIn,
  onLogin,
  onLogout,
}) {
  const scrollRef = useRef(null);
  const [time, setTime] = useState('9:41');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(`${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 0, behavior: 'instant' });
  }, [activeTab, role, isLoggedIn]);

  return (
    <div className="phone-stage relative flex h-full min-h-0 w-full items-center justify-center">
      <div className="phone-shell relative flex h-full w-full flex-col overflow-hidden bg-[#f5f5fa] p-0 sm:h-[min(900px,calc(100dvh-48px))] sm:max-h-[900px] sm:w-auto sm:aspect-[402/846] sm:rounded-[56px] sm:bg-[#181a20] sm:p-[10px] sm:shadow-[0_30px_90px_-20px_rgba(16,18,28,0.42),0_0_0_1px_rgba(22,24,32,0.7)]">
        <div className="pointer-events-none absolute left-0 top-[15%] z-0 hidden h-7 w-[4px] rounded-l-md bg-gradient-to-r from-[#292b34] to-[#515361] shadow-sm sm:block" />
        <div className="pointer-events-none absolute left-0 top-[24%] z-0 hidden h-14 w-[4px] rounded-l-md bg-gradient-to-r from-[#292b34] to-[#515361] shadow-sm sm:block" />
        <div className="pointer-events-none absolute right-0 top-[27%] z-0 hidden h-20 w-[4px] rounded-r-md bg-gradient-to-l from-[#292b34] to-[#515361] shadow-sm sm:block" />

        <div className="phone-screen relative z-10 flex min-h-0 flex-1 flex-col overflow-hidden bg-[#f5f5fa] pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)] sm:rounded-[46px] sm:py-0">
          <div className="phone-status-bar relative z-30 hidden h-[54px] shrink-0 items-center justify-between bg-[#f5f5fa]/95 px-6 backdrop-blur-md sm:flex">
            <span className="w-[60px] text-[14px] font-bold leading-none text-slate-950">{time}</span>
            <div className="flex flex-1 items-center justify-center">
              <div className="flex h-[30px] w-[126px] items-center justify-between rounded-full bg-black px-3 text-white shadow-sm">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span className="flex h-[11px] w-[11px] items-center justify-center rounded-full bg-[#151515] ring-1 ring-neutral-800">
                  <span className="h-1 w-1 rounded-full bg-[#080808]" />
                </span>
                <span className="text-[9px] font-extrabold tracking-[0.12em] text-slate-200">LANGKAH</span>
              </div>
            </div>
            <div className="flex w-[60px] items-center justify-end gap-1.5 text-slate-900">
              <Signal className="h-3.5 w-3.5 stroke-[2.4]" />
              <span className="text-[10px] font-bold tracking-tight">5G</span>
              <Wifi className="h-3.5 w-3.5 stroke-[2.2]" />
              <BatteryFull className="h-[17px] w-[17px]" />
            </div>
          </div>

          {isLoggedIn && (
            <header className="z-20 flex min-h-[58px] shrink-0 items-center justify-between border-b border-slate-200/75 bg-white/90 px-4 backdrop-blur-xl sm:px-5">
              <div className="flex min-w-0 items-center gap-2.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[13px] bg-gradient-to-br from-teal-500 via-grape-500 to-blossom-500 text-white shadow-[0_5px_12px_-5px_rgba(99,76,210,0.55)]">
                  <ShieldCheck className="h-[18px] w-[18px]" />
                </div>
                <div className="min-w-0">
                  <p className="truncate text-[14px] font-extrabold leading-tight tracking-tight text-slate-950">LANGKAH</p>
                  <p className="mt-0.5 truncate text-[10px] font-semibold text-grape-700">
                    {PAGE_LABELS[activeTab] || 'Beranda'}
                  </p>
                </div>
              </div>

              <div className="flex shrink-0 items-center gap-2.5">
                <button
                  type="button"
                  onClick={() => onTabChange('recognition')}
                  aria-label="Buka apresiasi mingguan"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-grape-600 shadow-sm transition hover:border-grape-200 hover:bg-grape-50"
                >
                  <Award className="h-[18px] w-[18px]" />
                </button>
                <button
                  type="button"
                  onClick={onLogout}
                  className="relative flex h-10 w-10 items-center justify-center rounded-full border-2 border-grape-200 bg-grape-50 text-[11px] font-extrabold text-grape-700 shadow-sm transition hover:border-grape-400"
                  aria-label="Keluar dan pilih peran lain"
                  title={`Keluar dari tampilan ${ROLE_LABELS[role]}`}
                >
                  {ROLE_INITIALS[role]}
                  <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-white bg-mint-500" />
                </button>
              </div>
            </header>
          )}

          <main
            ref={scrollRef}
            className={`no-scrollbar flex min-h-0 flex-1 flex-col overflow-y-auto overscroll-y-contain touch-pan-y [-webkit-overflow-scrolling:touch] ${isLoggedIn ? 'bg-[#f7f8fc]' : 'bg-[#f5f5fa]'}`}
          >
            {isLoggedIn ? children : (
              <LoginScreen onLogin={onLogin} />
            )}
          </main>

          {isLoggedIn && (
            <footer className="z-20 shrink-0 border-t border-slate-200/60 bg-gradient-to-t from-[#f7f8fc] via-[#f7f8fc]/95 to-transparent px-2.5 pb-0.5 pt-2 sm:px-3">
              <TabBar activeTab={activeTab} onTabChange={onTabChange} />
            </footer>
          )}

          <div className={`z-30 hidden h-[24px] shrink-0 items-center justify-center sm:flex ${isLoggedIn ? 'bg-[#f7f8fc]' : 'bg-[#f5f5fa]'}`}>
            <div className="h-[4px] w-[108px] rounded-full bg-slate-900/35" />
          </div>
        </div>
      </div>
    </div>
  );
}

function LoginScreen({ onLogin }) {
  const [selectedRole, setSelectedRole] = useState('');
  const roles = [
    { id: 'student', title: 'Siswa', icon: '🎒', description: 'Atur rutinitas dan tulis catatan harian.' },
    { id: 'parent', title: 'Orang tua', icon: '🏡', description: 'Dukung persiapan dan kebiasaan anak.' },
    { id: 'teacher', title: 'Wali kelas', icon: '📚', description: 'Beri pembinaan dan apresiasi siswa.' },
  ];

  return (
    <div className="flex min-h-full flex-1 flex-col px-5 pb-3 pt-3 sm:px-6 sm:pt-4">
      <div className="flex flex-col items-center">
        <div className="flex h-[52px] w-[52px] items-center justify-center rounded-[18px] border border-white bg-white shadow-[0_5px_14px_-7px_rgba(41,49,82,0.35)]">
          <div className="flex h-[34px] w-[34px] items-center justify-center rounded-[12px] border border-slate-100 bg-[#f8f8fc]">
            <ShieldCheck className="h-5 w-5 text-grape-600" strokeWidth={2.2} />
          </div>
        </div>
        <p className="mt-2 text-[9px] font-extrabold uppercase tracking-[0.2em] text-grape-600">Selamat datang di</p>
        <h1 className="mt-0.5 text-center text-[23px] font-extrabold leading-tight tracking-tight text-slate-950">
          Masuk ke LANGKAH
        </h1>
        <p className="mt-1 max-w-[290px] text-center text-[11px] leading-relaxed text-slate-500">
          Penguatan karakter disiplin, bersama siswa, orang tua, dan wali kelas.
        </p>

        <div className="mt-4 w-full text-center">
          <div className="flex items-center justify-center gap-1.5">
            <ShieldCheck className="h-4 w-4 shrink-0 text-grape-600" />
            <p className="text-[12px] font-extrabold text-slate-800">Masuk sebagai siapa?</p>
          </div>
          <p className="mt-0.5 text-[10px] leading-relaxed text-slate-500">Pilih peranmu untuk melanjutkan.</p>
        </div>

        <div className="mt-3 grid w-full grid-cols-3 gap-2">
          {roles.map((item) => {
            const isSelected = selectedRole === item.id;
            return (
              <button
                type="button"
                key={item.id}
                onClick={() => setSelectedRole(item.id)}
                aria-pressed={isSelected}
                className={`relative flex min-h-[116px] flex-col items-center rounded-[17px] border px-1.5 py-2.5 text-center transition-all ${
                  isSelected
                    ? 'border-grape-400 bg-grape-50 shadow-[0_6px_18px_-12px_rgba(100,69,208,0.65)] ring-2 ring-grape-200'
                    : 'border-slate-200 bg-white shadow-[0_4px_12px_-9px_rgba(35,42,75,0.3)] hover:border-grape-200 hover:bg-grape-50/50'
                }`}
              >
                {isSelected && <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-grape-500" />}
                <span className="flex h-8 w-8 items-center justify-center rounded-[12px] bg-white text-[18px] shadow-sm">{item.icon}</span>
                <span className="mt-2 text-[11px] font-extrabold leading-tight text-slate-900">{item.title}</span>
                <span className="mt-1 text-[9px] leading-[1.35] text-slate-500">{item.description}</span>
              </button>
            );
          })}
        </div>

        <button
          type="button"
          onClick={() => selectedRole && onLogin(selectedRole)}
          disabled={!selectedRole}
          className="mt-3 flex min-h-[44px] w-full items-center justify-center gap-2 rounded-[15px] bg-gradient-to-r from-grape-600 via-[#6548e5] to-[#7549ee] px-4 text-[12px] font-extrabold text-white shadow-[0_8px_18px_-9px_rgba(92,62,207,0.75)] transition hover:brightness-105 active:scale-[0.99] disabled:cursor-not-allowed disabled:from-slate-300 disabled:via-slate-300 disabled:to-slate-300 disabled:shadow-none"
        >
          {selectedRole ? `Masuk sebagai ${roles.find((item) => item.id === selectedRole)?.title}` : 'Pilih peran untuk melanjutkan'}
          <ChevronLeft className="h-4 w-4 rotate-180" />
        </button>

        <div className="mt-2 flex items-center justify-center gap-1.5 text-center text-[9px] text-slate-500">
          <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-mint-700" />
          <span>Prototipe demo · Tidak perlu akun atau kata sandi.</span>
        </div>
      </div>

      <p className="mt-2 text-center text-[9px] leading-relaxed text-slate-400">
        LANGKAH · Kebiasaan kecil, langkah yang berarti.
      </p>
    </div>
  );
}
