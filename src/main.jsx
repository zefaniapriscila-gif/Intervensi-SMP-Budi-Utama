import React from 'react';
import ReactDOM from 'react-dom/client';
import '@fontsource-variable/plus-jakarta-sans';
import '@fontsource-variable/caveat';
import './index.css';
import App from './App.jsx';
import { installClickSound } from './lib/sound';

installClickSound();

// Antarmuka diperkecil 5% lewat CSS zoom (lihat index.css). Satuan vh tidak ikut
// diperkecil, jadi tinggi layar penuh dihitung ulang dalam piksel agar pas.
const UI_ZOOM = 0.95;
function syncViewportHeight() {
  const zoom = window.CSS?.supports?.('zoom', String(UI_ZOOM)) ? UI_ZOOM : 1;
  document.documentElement.style.setProperty('--vh-full', `${window.innerHeight / zoom}px`);
}
syncViewportHeight();
window.addEventListener('resize', syncViewportHeight);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
