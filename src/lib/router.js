import { useEffect, useState } from 'react';

// Router hash kecil: #/ (beranda), #/metodologi, #/prototipe.
// Hash dipilih supaya tautan bisa dibagikan dan tombol kembali browser
// berfungsi tanpa perlu konfigurasi rewrite di hosting statis.
export const ROUTES = {
  home: '/',
  methodology: '/metodologi',
  prototype: '/prototipe',
};

const KNOWN = new Set(Object.values(ROUTES));

function readPath() {
  if (typeof window === 'undefined') return ROUTES.home;
  const raw = window.location.hash.replace(/^#/, '').split('?')[0];
  const path = raw.replace(/\/+$/, '') || '/';
  return KNOWN.has(path) ? path : ROUTES.home;
}

export function useRoute() {
  const [path, setPath] = useState(readPath);

  useEffect(() => {
    const sync = () => setPath(readPath());
    window.addEventListener('hashchange', sync);
    return () => window.removeEventListener('hashchange', sync);
  }, []);

  return path;
}

export function href(path) {
  return `#${path}`;
}

export function navigate(path) {
  if (readPath() === path && window.location.hash) return;
  window.location.hash = path;
}
