import React, { useEffect, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { isSoundOn, setSoundOn, subscribeSound } from '../../lib/sound';

// Tombol hidup/mati bunyi klik.
export default function SoundToggle({ className = '' }) {
  const [on, setOn] = useState(isSoundOn());
  useEffect(() => subscribeSound(setOn), []);
  return (
    <button
      type="button"
      onClick={() => setSoundOn(!on)}
      aria-pressed={on}
      aria-label={on ? 'Matikan bunyi klik' : 'Nyalakan bunyi klik'}
      title={on ? 'Bunyi klik: nyala' : 'Bunyi klik: mati'}
      className={`inline-flex h-10 w-10 items-center justify-center rounded-full bg-card text-ink-2 shadow-paper ring-1 ring-line transition hover:text-ink ${className}`}
    >
      {on ? <Volume2 className="h-[18px] w-[18px]" /> : <VolumeX className="h-[18px] w-[18px]" />}
    </button>
  );
}
