// Bunyi klik sintetis (Web Audio), tanpa berkas audio.
// Dibuat lembut dan pendek; bisa dimatikan lewat tombol suara dan pilihan
// tersimpan di localStorage.
const KEY = 'disiplin-sound';
let ctx = null;
let enabled = true;
const listeners = new Set();

try {
  enabled = window.localStorage.getItem(KEY) !== 'off';
} catch {
  enabled = true;
}

function audio() {
  if (!ctx) {
    const Ctor = window.AudioContext || window.webkitAudioContext;
    if (!Ctor) return null;
    ctx = new Ctor();
  }
  if (ctx.state === 'suspended') ctx.resume();
  return ctx;
}

function tone(c, { from, to, start = 0, dur = 0.09, gain = 0.09, type = 'sine' }) {
  const t0 = c.currentTime + start;
  const osc = c.createOscillator();
  const amp = c.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(from, t0);
  osc.frequency.exponentialRampToValueAtTime(to, t0 + dur);
  amp.gain.setValueAtTime(0.0001, t0);
  amp.gain.exponentialRampToValueAtTime(gain, t0 + 0.008);
  amp.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
  osc.connect(amp).connect(c.destination);
  osc.start(t0);
  osc.stop(t0 + dur + 0.02);
}

// kind: 'tap' (umum), 'toggle' (centang, sakelar, pilihan), 'primary' (tombol utama).
export function playClick(kind = 'tap') {
  if (!enabled) return;
  const c = audio();
  if (!c) return;
  if (kind === 'toggle') {
    tone(c, { from: 880, to: 1320, dur: 0.08, gain: 0.07 });
    tone(c, { from: 1320, to: 1760, start: 0.05, dur: 0.1, gain: 0.05 });
  } else if (kind === 'primary') {
    tone(c, { from: 520, to: 780, dur: 0.1, gain: 0.09 });
    tone(c, { from: 780, to: 1170, start: 0.06, dur: 0.14, gain: 0.06 });
  } else {
    tone(c, { from: 700, to: 420, dur: 0.07, gain: 0.08 });
  }
}

export function isSoundOn() {
  return enabled;
}

export function setSoundOn(next) {
  enabled = next;
  try {
    window.localStorage.setItem(KEY, next ? 'on' : 'off');
  } catch {
    /* penyimpanan tidak tersedia: abaikan */
  }
  listeners.forEach((fn) => fn(next));
  if (next) playClick('toggle');
}

export function subscribeSound(fn) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

const CLICKABLE = 'button, a[href], [role="button"], [role="switch"], [role="tab"], label, summary, input[type="checkbox"], input[type="radio"]';

// Satu pendengar global: setiap klik pada elemen interaktif membunyikan nada.
export function installClickSound() {
  const onClick = (event) => {
    const el = event.target instanceof Element ? event.target.closest(CLICKABLE) : null;
    if (!el || el.matches(':disabled, [aria-disabled="true"]')) return;
    // Label yang membungkus input diklik dua kali oleh browser: bunyikan sekali saja.
    if (el.tagName === 'LABEL' && el.querySelector('input') && event.target.tagName !== 'INPUT') return;
    const toggleLike = el.matches('[role="switch"], input[type="checkbox"], input[type="radio"], label');
    const primary = el.matches('[type="submit"], [data-sound="primary"]') || (el.tagName === 'A' && el.matches('.shadow-press'));
    playClick(toggleLike ? 'toggle' : primary ? 'primary' : 'tap');
  };
  document.addEventListener('click', onClick, true);
  return () => document.removeEventListener('click', onClick, true);
}
