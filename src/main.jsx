import React from 'react';
import ReactDOM from 'react-dom/client';
import '@fontsource-variable/plus-jakarta-sans';
import '@fontsource-variable/caveat';
import './index.css';
import App from './App.jsx';
import { installClickSound } from './lib/sound';

installClickSound();

// Skala antarmuka. Acuan desain: jendela selebar 1536 px dengan skala 0.95 (~5% lebih kecil).
// Di layar desktop (>= 1024 px) skala mengikuti lebar jendela, sehingga di jendela atau zoom
// browser berapa pun komposisi halaman terlihat sama seperti di acuan. Di bawah itu (tablet
// dan ponsel) skala tetap 0.95. Satuan vw/vh tidak ikut diskala oleh CSS zoom, jadi dihitung
// ulang lewat variabel --vw dan --vh-full.
const BASE_ZOOM = 0.95;
const REF_WIDTH = 1536;
let lastZoom = null;
function syncScale() {
  const supported = Boolean(window.CSS?.supports?.('zoom', '0.95'));
  const width = window.innerWidth;
  const raw = width >= 1024 ? (BASE_ZOOM * width) / REF_WIDTH : BASE_ZOOM;
  const zoom = supported ? Math.min(1.3, Math.max(0.8, raw)) : 1;
  const root = document.documentElement;
  if (supported) root.style.zoom = String(zoom);
  root.style.setProperty('--vw', `${width / zoom / 100}px`);
  root.style.setProperty('--vh-full', `${window.innerHeight / zoom}px`);
  lastZoom = zoom;
}
syncScale();
window.addEventListener('resize', syncScale);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// Diagnostik tampilan: buka alamat apa pun dengan ?debug=1 untuk melihat versi build,
// lebar jendela, dan skala layar. Berguna untuk membandingkan localhost dengan domain.
if (new URLSearchParams(window.location.search).has('debug')) {
  const badge = document.createElement('div');
  badge.setAttribute('aria-hidden', 'true');
  badge.style.cssText = 'position:fixed;left:8px;bottom:8px;z-index:99999;padding:6px 10px;border-radius:10px;background:#000c;color:#fff;font:600 12px/1.35 ui-monospace,monospace;pointer-events:none;white-space:pre;zoom:1';
  const paint = () => {
    badge.textContent = `${window.location.host}\nbuild ${typeof __BUILD_ID__ === 'string' ? __BUILD_ID__ : '?'}\njendela ${window.innerWidth}×${window.innerHeight}\nskala ${lastZoom === null ? '?' : lastZoom.toFixed(3)}\nDPR ${window.devicePixelRatio}`;
  };
  paint();
  window.addEventListener('resize', paint);
  document.body.appendChild(badge);
}
