import React, { useState, useEffect } from 'react';
import { Wifi } from 'lucide-react';

export default function StatusBar({ darkText = false }) {
  const [time, setTime] = useState('9:41');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const mins = now.getMinutes().toString().padStart(2, '0');
      setTime(`${hours}:${mins}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  const textColor = darkText ? 'text-slate-900' : 'text-slate-800';

  return (
    <div className={`w-full px-7 pt-3.5 pb-1 flex items-center justify-between text-xs font-semibold ${textColor} select-none z-40`}>
      <div className="flex items-center gap-1">
        <span className="text-[13px] font-bold tracking-tight">{time}</span>
      </div>

      <div className="flex items-center gap-2">
        <div className="flex items-end gap-[1.5px] h-2.5">
          <div className="w-[2.5px] h-1 bg-current rounded-[0.5px]" />
          <div className="w-[2.5px] h-1.5 bg-current rounded-[0.5px]" />
          <div className="w-[2.5px] h-2 bg-current rounded-[0.5px]" />
          <div className="w-[2.5px] h-2.5 bg-current rounded-[0.5px]" />
        </div>

        <span className="text-[10px] font-bold tracking-tighter">5G</span>
        <Wifi className="w-3.5 h-3.5" />

        <div className="flex items-center">
          <div className="w-5 h-2.5 border-[1.5px] border-current rounded-[4px] p-[1px] flex items-center">
            <div className="w-full h-full bg-emerald-500 rounded-[1.5px]" />
          </div>
          <div className="w-[1.5px] h-1 bg-current rounded-r-sm" />
        </div>
      </div>
    </div>
  );
}
