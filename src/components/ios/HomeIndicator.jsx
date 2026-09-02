import React from 'react';

export default function HomeIndicator({ dark = true, onClick }) {
  return (
    <div 
      onClick={onClick}
      className="w-full pb-2 pt-1 flex items-center justify-center cursor-pointer select-none"
    >
      <div 
        className={`w-36 h-1 rounded-full transition-all duration-200 ${
          dark ? 'bg-slate-900/40 hover:bg-slate-900/60' : 'bg-white/40 hover:bg-white/70'
        }`} 
      />
    </div>
  );
}
