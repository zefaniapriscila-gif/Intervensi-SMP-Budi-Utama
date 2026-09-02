import React, { useRef, useEffect, useState } from 'react';
import { Wifi } from 'lucide-react';
import DynamicIsland from '../ios/DynamicIsland';
import TabBar from '../ios/TabBar';
import HomeIndicator from '../ios/HomeIndicator';

export default function IPhoneFrame({
  children,
  activeTab,
  onTabChange,
  currentPillarName,
  onOpenCOE
}) {
  const scrollRef = useRef(null);
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

  // Reset scroll to top on tab change
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [activeTab]);

  return (
    <div className="relative flex items-center justify-center w-full h-full lg:h-auto">
      
      {/* Outer iPhone Titanium Frame (Desktop) / Native Mobile Container */}
      <div className="w-full max-w-full lg:max-w-[400px] h-[100dvh] lg:h-[844px] bg-[#181a20] lg:rounded-[55px] lg:p-[10px] lg:shadow-[0_25px_80px_-15px_rgba(0,0,0,0.2),0_0_0_1px_rgba(0,0,0,0.1)] relative flex flex-col justify-between overflow-hidden transition-all duration-300">
        
        {/* Physical Side Buttons (Desktop only) */}
        <div className="hidden lg:block absolute -left-[12px] top-[115px] w-[3px] h-[28px] bg-slate-600 rounded-l-md" /> {/* Action Button */}
        <div className="hidden lg:block absolute -left-[12px] top-[160px] w-[3px] h-[48px] bg-slate-600 rounded-l-md" /> {/* Vol Up */}
        <div className="hidden lg:block absolute -left-[12px] top-[218px] w-[3px] h-[48px] bg-slate-600 rounded-l-md" /> {/* Vol Down */}
        <div className="hidden lg:block absolute -right-[12px] top-[170px] w-[3px] h-[70px] bg-slate-600 rounded-r-md" /> {/* Power Button */}

        {/* Inner Screen Display (Rounded 46px on Desktop, Overflow Hidden for Clean Curves) */}
        <div className="screen-clip relative w-full h-full bg-[#f5f5fa] flex flex-col select-none">

          {/* Integrated iOS Top Bar (Status Bar & Dynamic Island on the SAME Row) */}
          <div className="screen-top w-full bg-[#f5f5fa]/95 backdrop-blur-md pt-3.5 pb-2.5 px-6 flex items-center justify-between z-40 shrink-0 border-b border-black/[0.02]">

            {/* Left: Clock */}
            <div className="w-[60px] flex items-center">
              <span className="text-[14px] font-semibold text-slate-900 leading-none">
                {time}
              </span>
            </div>

            {/* Center: Dynamic Island */}
            <div className="flex-1 flex items-center justify-center">
              <DynamicIsland 
                currentPillarName={currentPillarName} 
                onOpenCOE={onOpenCOE} 
              />
            </div>

            {/* Right: Signal, 5G, Wi-Fi, Battery */}
            <div className="w-[60px] flex items-center justify-end gap-1.5 text-slate-900">
              {/* Cellular */}
              <div className="flex items-end gap-[1px] h-2.5">
                <div className="w-[2px] h-1 bg-slate-900 rounded-[0.5px]" />
                <div className="w-[2px] h-1.5 bg-slate-900 rounded-[0.5px]" />
                <div className="w-[2px] h-2 bg-slate-900 rounded-[0.5px]" />
                <div className="w-[2px] h-2.5 bg-slate-900 rounded-[0.5px]" />
              </div>

              {/* 5G */}
              <span className="text-[10px] font-semibold tracking-tight">5G</span>

              {/* Wi-Fi */}
              <Wifi className="w-3 h-3 stroke-[2.2]" />

              {/* Battery */}
              <div className="flex items-center">
                <div className="w-4.5 h-2.2 border-[1.2px] border-slate-900 rounded-[3.5px] p-[1px] flex items-center">
                  <div className="w-full h-full bg-slate-900 rounded-[1px]" />
                </div>
                <div className="w-[1px] h-1 bg-slate-900 rounded-r-xs" />
              </div>
            </div>

          </div>

          {/* Scrollable Viewport Area */}
          <div 
            ref={scrollRef}
            className="flex-1 w-full overflow-y-auto no-scrollbar relative flex flex-col pt-1.5"
          >
            {children}
          </div>

          {/* Bottom Dock Navigation & Home Indicator */}
          <div className="screen-bottom w-full shrink-0 z-40 bg-[#f5f5fa] pt-2">
            <TabBar activeTab={activeTab} onTabChange={onTabChange} />
            <HomeIndicator dark={true} onClick={() => onTabChange('home')} />
          </div>

        </div>

      </div>

    </div>
  );
}
