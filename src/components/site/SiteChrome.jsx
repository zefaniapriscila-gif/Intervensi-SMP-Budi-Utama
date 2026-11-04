import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Brand, LogoMark } from '../brand/Logo';
import { plainClick } from '../../lib/links';
import { ROUTES, href } from '../../lib/router';


function NavLink({ to, active, children }) {
  return (
    <a
      href={href(to)}
      aria-current={active ? 'page' : undefined}
      className={`relative rounded-full px-3 py-2 text-[14px] font-semibold transition-colors ${active ? 'text-ink' : 'text-ink-3 hover:text-ink'}`}
    >
      {children}
      {active && <span className="absolute inset-x-3 -bottom-0.5 h-[3px] rounded-full bg-marigold" aria-hidden="true" />}
    </a>
  );
}

export function SiteHeader({ path, onOpenPrototype }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-40 transition-[background-color,box-shadow] duration-300 ${scrolled ? 'bg-paper/95 shadow-[0_1px_0_var(--color-line)] backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="mx-auto flex h-[68px] w-full max-w-[1240px] items-center justify-between gap-3 px-4 sm:h-[76px] sm:px-8">
        <a href={href(ROUTES.home)} className="rounded-xl" aria-label="LANGKAH, ke beranda">
          <span className="hidden sm:block"><Brand /></span>
          <span className="flex items-center gap-2 sm:hidden">
            <LogoMark className="h-9 w-9" />
            <span className="font-display text-[18px] font-semibold tracking-[0.06em] text-ink">LANGKAH</span>
          </span>
        </a>
        <nav aria-label="Navigasi situs" className="flex items-center gap-1 sm:gap-2">
          <span className="hidden sm:contents">
            <NavLink to={ROUTES.home} active={path === ROUTES.home}>Beranda</NavLink>
          </span>
          <NavLink to={ROUTES.methodology} active={path === ROUTES.methodology}>Metodologi</NavLink>
          <a
            href={href(ROUTES.prototype)}
            onClick={plainClick(() => onOpenPrototype())}
            className="group ml-1 inline-flex items-center gap-2 rounded-full bg-navy py-2.5 pl-4 pr-3.5 text-[14px] font-semibold text-paper shadow-press transition hover:bg-navy-2 sm:ml-2"
            data-surface="dark"
          >
            <span className="sm:hidden">Coba</span>
            <span className="hidden sm:inline">Coba prototipe</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid w-full max-w-[1240px] gap-8 px-4 py-10 sm:px-8 md:grid-cols-[1.2fr_1fr_1fr] md:py-14">
        <div>
          <Brand />
          <p className="mt-4 max-w-sm text-[14px] leading-relaxed text-ink-3">
            Prototipe intervensi penguatan karakter disiplin untuk siswa, orang tua, dan wali kelas SMP Budi Utama Yogyakarta.
          </p>
        </div>
        <div>
          <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-ink-3">Jelajahi</p>
          <ul className="mt-3 space-y-2 text-[15px] font-semibold">
            <li><a className="link-underline text-ink" href={href(ROUTES.home)}>Beranda</a></li>
            <li><a className="link-underline text-ink" href={href(ROUTES.methodology)}>Metodologi</a></li>
            <li><a className="link-underline text-ink" href={href(ROUTES.prototype)}>Prototipe</a></li>
          </ul>
        </div>
        <div>
          <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-ink-3">Tentang data</p>
          <p className="mt-3 text-[14px] leading-relaxed text-ink-3">
            Siswa, notifikasi, laporan, dan penghargaan di sini adalah contoh. Data hanya ada di memori halaman selama demo—tidak dikirim atau disimpan.
          </p>
        </div>
      </div>
    </footer>
  );
}
