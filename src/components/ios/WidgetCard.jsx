import React from 'react';
import { motion } from 'framer-motion';

export default function WidgetCard({
  children,
  className = '',
  onClick,
  interactive = false,
  badge = null,
  title = null,
  subtitle = null,
  rightAction = null
}) {
  const CardWrapper = interactive ? motion.div : 'div';
  const interactiveProps = interactive
    ? {
        whileTap: { scale: 0.98 },
        transition: { type: 'spring', stiffness: 400, damping: 25 },
        onClick
      }
    : { onClick };

  return (
    <CardWrapper
      {...interactiveProps}
      className={`bg-white rounded-[24px] p-4.5 border border-slate-100/90 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.03),0_2px_6px_-1px_rgba(0,0,0,0.015)] transition-all relative overflow-hidden ${
        interactive ? 'cursor-pointer hover:border-slate-300/80 hover:shadow-md' : ''
      } ${className}`}
    >
      {(title || badge || rightAction) && (
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            {badge && (
              <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 tracking-wide uppercase">
                {badge}
              </span>
            )}
            {title && (
              <div>
                <h4 className="text-[13px] font-bold text-slate-900 tracking-tight leading-tight">{title}</h4>
                {subtitle && <p className="text-[10px] text-slate-400 mt-0.5">{subtitle}</p>}
              </div>
            )}
          </div>
          {rightAction && <div>{rightAction}</div>}
        </div>
      )}
      {children}
    </CardWrapper>
  );
}
