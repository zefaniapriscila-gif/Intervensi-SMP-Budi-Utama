import React from 'react';
import IPhoneFrame from './IPhoneFrame';

export default function MainLayout({
  activeTab,
  onTabChange,
  role,
  isLoggedIn,
  onLogin,
  onLogout,
  children,
}) {
  return (
    <div className="growth-canvas relative flex min-h-[100dvh] w-full items-center justify-center overflow-hidden bg-[#eff1f8] text-slate-900">
      <div className="pointer-events-none absolute -left-48 -top-56 h-[620px] w-[620px] rounded-full bg-[#dbe5ff]/60 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-56 -right-52 h-[620px] w-[620px] rounded-full bg-[#f7dff0]/55 blur-[130px]" />
      <div className="pointer-events-none absolute right-[22%] top-[35%] h-[360px] w-[360px] rounded-full bg-[#d8e9ff]/45 blur-[120px]" />

      <main className="growth-app-window relative z-10 h-[100dvh] w-full overflow-hidden sm:h-[min(100dvh,1024px)] sm:max-w-[780px] sm:border-x sm:border-white/80 sm:shadow-[0_24px_100px_-42px_rgba(47,54,93,0.28)]">
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
      </main>
    </div>
  );
}
