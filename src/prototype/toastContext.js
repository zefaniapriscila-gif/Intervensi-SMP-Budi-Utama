import { createContext, useContext } from 'react';

export const ToastContext = createContext(() => {});

export function useNotify() {
  return useContext(ToastContext);
}
