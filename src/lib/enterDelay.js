import { createContext, useContext } from 'react';

// Jeda (detik) sebelum animasi masuk halaman dimulai. Bernilai > 0 setelah
// navigasi, supaya animasi tidak tersembunyi di balik tirai transisi.
export const EnterDelayContext = createContext(0);

export function useEnterDelay() {
  return useContext(EnterDelayContext);
}
